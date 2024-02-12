import { fetchCountries, fetchCountryIndicatorData, fetchIndicatorDescription } from '@/lib/api';
import { indicators } from '@/lib/constants';
import CountryComboBox from './components/CountryComboBox';
import VisAreaChart from './components/charts/VisAreaChart';
import { Card, CardContent } from '@/components/ui/card';
import { transformCountryIndicatorData } from '@/lib/types/transformers';

export default async function Home() {
  // const countries = await fetchCountries();

  // const indicator = await fetchIndicatorDescription(indicators.gdp);

  const countryIndicatorData = await fetchCountryIndicatorData('USA', indicators.co2Emissions, {
    date: '2010:2020',
  });

  console.log('countryIndicatorData', transformCountryIndicatorData(countryIndicatorData));

  return (
    <div>
      <Card>
        <CardContent>
          <VisAreaChart data={transformCountryIndicatorData(countryIndicatorData)} />
        </CardContent>
      </Card>
      {/* <CountryComboBox /> */}

      {/* <pre className="max-w-full">{JSON.stringify(countries, null, 2)}</pre> */}
      {/* <h1>Indicator: {indicators.gdp}</h1>
      <pre>{JSON.stringify(indicator, null, 2)}</pre> */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Country Indicator Data</h1>
      <pre>{JSON.stringify(countryIndicatorData, null, 2)}</pre>
    </div>
  );
}
