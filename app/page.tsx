import { fetchCountries, fetchCountryIndicatorData, fetchIndicatorDescription } from '@/lib/api';
import { indicators } from '@/lib/constants';
import CountryComboBox from './components/CountryComboBox';

export default async function Home() {
  const countries = await fetchCountries();

  // const indicator = await fetchIndicatorDescription(indicators.gdp);

  // const countryIndicatorData = await fetchCountryIndicatorData('USA', indicators.co2Emissions, {
  //   date: '2010:2020',
  // });

  return (
    <div>
      <CountryComboBox />

      {/* <pre className="max-w-full">{JSON.stringify(countries, null, 2)}</pre> */}
      {/* <h1>Indicator: {indicators.gdp}</h1>
      <pre>{JSON.stringify(indicator, null, 2)}</pre> */}

      {/* 
      <h1>Country Indicator Data</h1>
      <pre>{JSON.stringify(countryIndicatorData, null, 2)}</pre> */}
    </div>
  );
}
