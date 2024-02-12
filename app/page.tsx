import { fetchCountries, fetchCountryIndicatorData, fetchIndicatorDescription } from '@/lib/api';
import { indicators } from '@/lib/constants';

export default async function Home() {
  const countries = await fetchCountries();

  const indicator = await fetchIndicatorDescription(indicators.gdp);

  const countryIndicatorData = await fetchCountryIndicatorData('USA', indicators.co2Emissions, {
    date: '2010:2020',
  });

  return (
    <main>
      <h1>Indicator: {indicators.gdp}</h1>
      <pre>{JSON.stringify(indicator, null, 2)}</pre>

      {/*<h1>Countries</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Country Indicator Data</h1>
      <pre>{JSON.stringify(countryIndicatorData, null, 2)}</pre> */}
    </main>
  );
}
