export interface Country {
	id: string;
	name: string;
}

export interface CountryIndicatorData {
	values: number[];
	years: number[];
	country: string;
	countryCode: string;
	indicator: string;
	indicatorName: string;
}

export interface Indicator {
	id: string;
	name: string;
	sourceNote: string;
}