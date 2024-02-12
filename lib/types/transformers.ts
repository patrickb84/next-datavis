import { CountryIndicatorData } from './index';


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
