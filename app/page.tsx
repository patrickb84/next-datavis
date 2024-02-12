import {
  fetchCountries,
  fetchCountryIndicatorData,
  fetchIndicatorDescription,
  fetchMultiCountryData,
} from '@/lib/api';
import { countryCodesArray, countryCodesArrayLong, indicators } from '@/lib/constants';
import CountryComboBox from './components/CountryComboBox';
import VisAreaChart from './components/charts/VisAreaChart';
import { Card, CardContent } from '@/components/ui/card';
import {
  jsonStatToBarGraphData,
  jsonStatToStackedBarsData,
  jsonStatToStackedBarsUrban,
  transformCountryIndicatorData,
  transformJsonstat,
} from '@/lib/types/transformers';
import VisAreaChartGrad from './components/charts/VisAreaChartGrad';
import { Bar } from 'recharts';
import BarGraphDemo from './components/demos/BarGraphDemo';
import StackedBarsDemo from './components/demos/StackedBarsDemo';
import StackedBarsUrbanDemo from './components/demos/StackedBarsUrban';
import PieChartsDemo from './components/demos/PieChartsDemo';

async function getPieData() {
  const _forestData = await fetchMultiCountryData(
    countryCodesArray,
    indicators.forestAreaLandPercentage,
    {
      date: '2020',
    }
  );
  const forestData = transformJsonstat(_forestData);
  // console.log(forestData);

  const _agricturalLandData = await fetchMultiCountryData(
    countryCodesArray,
    indicators.agriculturalLandPercentage,
    {
      date: '2020',
    }
  );

  const agricturalLandData = transformJsonstat(_agricturalLandData);

  const countries = forestData.countries;
  const forests: Number[] = forestData.values;
  const agricutures: Number[] = agricturalLandData.values;

  const pieData = countries.map((country, i) => {
    // mathematically round to 2 decimal places
    const forest = Number(forests[i].toFixed(2));
    const agriculture = Number(agricutures[i].toFixed(2));
    const other = 100 - (forest + agriculture);

    const data = [
      { name: 'Forest', value: forest },
      { name: 'Agriculture', value: agriculture },
      { name: 'Other', value: Number(other.toFixed(2)) },
    ];
    return { name: country, data: data };
  });

  const indicatorForest = await fetchIndicatorDescription(indicators.forestAreaLandPercentage);
  const indicatorAgriculture = await fetchIndicatorDescription(indicators.agriculturalLandPercentage);

  return pieData;
}

export default async function Home() {
  const _barGraphData = await fetchMultiCountryData(countryCodesArray, indicators.gdpChange, {
    date: '2012:2022',
  });
  const barGraphData = jsonStatToBarGraphData(_barGraphData);
  const barGraphIndicator = await fetchIndicatorDescription(indicators.gdpChange);

  const _stackedBarsData = await fetchMultiCountryData(
    countryCodesArrayLong,
    indicators.renewableEnergyUse,
    {
      date: '2020',
    }
  );
  const stackedBarsData = jsonStatToStackedBarsData(_stackedBarsData);
  const stackedBarsIndicator = await fetchIndicatorDescription(indicators.renewableEnergyUse);

  const _stackedBarsUrbanData = await fetchMultiCountryData(
    countryCodesArrayLong,
    indicators.urbanPopulation,
    {
      date: '2020',
    }
  );
  const stackedBarsUrbanData = jsonStatToStackedBarsUrban(_stackedBarsUrbanData);
  const stackedBarsUrbanIndicator = await fetchIndicatorDescription(indicators.urbanPopulation);

  const pieData = await getPieData();

  return (
    <div className="pt-4 px-4">
      <BarGraphDemo graph={barGraphData} indicator={barGraphIndicator} />

      <div className="lg:flex lg:gap-5">
        <StackedBarsDemo graph={stackedBarsData} indicator={stackedBarsIndicator} />
        <StackedBarsUrbanDemo graph={stackedBarsUrbanData} indicator={stackedBarsUrbanIndicator} />
      </div>

      <div>
        <PieChartsDemo countriesData={pieData} />
      </div>
    </div>
  );
}