import { Country, CountryIndicatorData, Indicator } from './types';

const BASE_URL: string = 'http://api.worldbank.org/v2/';

async function fetchCountries(): Promise<Country[]> {
	const response = await fetch(`${BASE_URL}country?format=json&per_page=300`);
	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}
	const data = await response.json();
	const countries: Country[] = data[1];

	const formattedCountries = countries.map((country) => ({
		id: country.id,
		name: country.name
	}));

	return formattedCountries;
}

async function fetchIndicatorDescription(indicatorCode: string): Promise<Indicator> {
	const response = await fetch(`${BASE_URL}indicator/${indicatorCode}?format=json`);
	if (!response.ok) {
		throw new Error('Failed to fetch indicator');
	}
	const data = await response.json();
	const indicatorData = data[1][0];

	const indicator: Indicator = {
		id: indicatorCode,
		name: indicatorData.name,
		sourceNote: indicatorData.sourceNote,
	}

	return indicator;
}

async function fetchCountryIndicatorData(countryCode: string, indicatorCode: string, options?: { date?: string }): Promise<CountryIndicatorData> {
	let url = `${BASE_URL}country/${countryCode}/indicator/${indicatorCode}?format=jsonstat`;

	if (options?.date) {
		url += `&date=${options.date}`;
	}

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch country indicator data');
	}
	const data = await response.json();

	const formattedData: CountryIndicatorData = {
		values: data.WDI.value,
		years: Object.keys(data.WDI.dimension.year.category.label).map(Number),
		country: data.WDI.dimension.country.category.label[countryCode],
		countryCode: countryCode,
		indicator: indicatorCode,
		indicatorName: data.WDI.dimension.series.category.label[indicatorCode]
	}

	return formattedData;
}


export { fetchCountries, fetchIndicatorDescription, fetchCountryIndicatorData }