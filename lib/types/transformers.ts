import { CountryIndicatorData, JsonStatData } from './index';


export interface XYDataPoint {
	x: string;
	y: number;
}

export function transformCountryIndicatorData(data: CountryIndicatorData): XYDataPoint[] {
	const transformedData: XYDataPoint[] = data.years.map((year, i) => {
		return {
			x: '' + year,
			y: data.values[i],
		};
	});

	return transformedData;
}

export function transformJsonstat(data: any): JsonStatData {
	const transformedData: JsonStatData = {
		values: data.WDI.value,
		years: Object.keys(data.WDI.dimension.year.category.label).map(Number),
		countries: Object.keys(data.WDI.dimension.country.category.label),
		indicator: data.WDI.dimension.series.category.index,
		indicatorName: data.WDI.dimension.series.category.label[data.WDI.dimension.series.category.index],
	};

	return transformedData;
}



export function jsonStatToBarGraphData(data: any) {
	const startingData = transformJsonstat(data);

	const transformedData: any = [];

	// for each year, return name: year, {country: value for that country}, {country: value for that country} ...
	startingData.years.forEach((year, i) => {
		const dataPoint: any = { name: '' + year };
		startingData.countries.forEach((country, j) => {
			// format number to 2 decimal places
			dataPoint[country] = startingData.values[i * startingData.countries.length + j].toFixed(2);
			// dataPoint[country] = startingData.values[i * startingData.countries.length + j];
		});
		transformedData.push(dataPoint);
	});

	const countries = startingData.countries;

	return { keys: countries, data: transformedData };
}

export function jsonStatToStackedBarsData(data: any) {
	const startingData = transformJsonstat(data);

	const transformedData: any = [];

	// console.log(startingData);

	startingData.countries.forEach((country, i) => {
		const dataPoint: any = { name: country };
		startingData.years.forEach((year, j) => {
			dataPoint["Renewable"] = startingData.values[j * startingData.countries.length + i];
			dataPoint["Non-Renewable"] = 100 - dataPoint["Renewable"];
		});
		transformedData.push(dataPoint);
	}
	);

	// sort by Renewable
	// transformedData.sort((a: any, b: any) => a.Renewable - b.Renewable).reverse();

	return { keys: ["Renewable", "Non-Renewable"], data: transformedData };
}


export function jsonStatToStackedBarsUrban(data: any) {
	const startingData = transformJsonstat(data);

	const transformedData: any = [];

	// console.log(startingData);

	startingData.countries.forEach((country, i) => {
		const dataPoint: any = { name: country };
		startingData.years.forEach((year, j) => {
			dataPoint["Urban"] = startingData.values[j * startingData.countries.length + i];
			dataPoint["Non-Urban"] = 100 - dataPoint["Urban"];
		});
		transformedData.push(dataPoint);
	}
	);

	// transformedData.sort((a: any, b: any) => a.Urban - b.Urban).reverse();

	return { keys: ["Urban", "Non-Urban"], data: transformedData };
}