
export const indicators = {
	gdpChange: "NY.GDP.MKTP.KD.ZG",
	co2EmissionChange: "EN.ATM.CO2E.PC",
	renewableEnergyUse: "EG.FEC.RNEW.ZS",
	energyUse: "EG.USE.PCAP.KG.OE",
	population: "SP.POP.TOTL",
	urbanPopulation: "SP.URB.TOTL.IN.ZS",
	accessToElectricity: "EG.ELC.ACCS.ZS",
	forestAreaLandPercentage: "AG.LND.FRST.ZS",
	agriculturalLandPercentage: "AG.LND.AGRI.ZS",
	healthExpenditurePerCapita: "SH.XPD.CHEX.PC.CD",
};

export const countryCodes = {
	usa: "USA",
	china: "CHN",
	india: "IND",
	brazil: "BRA",
	russia: "RUS",
	germany: "DEU",
	uk: "GBR",
	france: "FRA",
	italy: "ITA",
	canada: "CAN",
	europeanUnion: "EUU",
	japan: "JPN",
	philippines: "PHL",
};

export const countryCodesArray = [
	"USA",
	"CHN",
	// "IND",
	"BRA",
	"PHL",
].reverse();

export const countryCodesArrayLong = [
	"USA",
	"CHN",
	"IND",
	"BRA",
	"RUS",
	"GBR",
	"PHL",
	"DEU",
	"FRA",
	"ITA",
	"CAN",
	"JPN",
];

export const countryColors: { [key: string]: string } = {
	"USA": "#1F77B4", // A strong blue, representing stability and trust.
	"CHN": "#FF7F0E", // A vibrant orange, reflecting energy and enthusiasm.
	"IND": "#2CA02C", // A lively green, symbolizing growth and harmony.
	"BRA": "#D62728", // A vivid red, conveying passion and vibrancy.
	"RUS": "#9467BD", // A deep purple, denoting nobility and ambition.
	"GBR": "#8C564B", // A robust brown, suggesting reliability and strength.
	"PHL": "#E377C2", // A soft pink, evoking tenderness and care.
};

// export const colorScale = [
// 	'#7400b8',
// 	// '#6930c3',
// 	'#5e60ce',
// 	// '#5390d9',
// 	'#4ea8de',
// 	'#48bfe3',
// 	'#56cfe1',
// 	'#64dfdf',
// 	'#72efdd',
// 	'#80ffdb',
// ]

export const colorScale = [
	// '#001219',
	'#005f73',
	'#0a9396',
	'#94d2bd',
	'#E2CD8D',
	'#ee9b00',
	'#ca6702',
	'#bb3e03',
	'#ae2012',
	'#9b2226',
]

export const pieChartScale = [
	'#005f73',
	'#E2CD8D',
	'#ee9b00',
]