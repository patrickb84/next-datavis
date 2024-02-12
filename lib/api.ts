import { Country } from './types';

const BASE_URL: string = 'http://api.worldbank.org/v2/';

async function fetchCountries() {
	const response = await fetch(`${BASE_URL}country?format=json`);
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

export { fetchCountries }