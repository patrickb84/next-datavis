'use client';

import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { pieChartScale } from '@/lib/constants';
import { ScrollArea } from '@/components/ui/scroll-area';

const indicatorInfo = [
  'Forest area is land under natural or planted stands of trees of at least 5 meters in situ, whether productive or not, and excludes tree stands in agricultural production systems (for example, in fruit plantations and agroforestry systems) and trees in urban parks and gardens.',
  'Agricultural land refers to the share of land area that is arable, under permanent crops, and under permanent pastures. Arable land includes land defined by the FAO as land under temporary crops (double-cropped areas are counted once), temporary meadows for mowing or for pasture, land under market or kitchen gardens, and land temporarily fallow. Land abandoned as a result of shifting cultivation is excluded. Land under permanent crops is land cultivated with crops that occupy the land for long periods and need not be replanted after each harvest, such as cocoa, coffee, and rubber. This category includes land under flowering shrubs, fruit trees, nut trees, and vines, but excludes land under trees grown for wood or timber. Permanent pasture is land used for five or more years for forage, including natural and cultivated crops.',
  'Other includes other land use types',
];

interface PieChartProps {
  countriesData: any[];
}

export default function PieChartDemo({ countriesData }: PieChartProps) {
  return (
    <Card className="mb-6 width-full">
      <CardHeader className="pb-0">
        <h2 className="flex justify-between">
          <div>
            <span className="text-xl font-bold ">
              Forest, Agricultural, and Other Land Use Types
            </span>
          </div>

          <Popover>
            <PopoverTrigger>
              <Info />
            </PopoverTrigger>
            <PopoverContent className='w-[500px]'>
              {indicatorInfo.map((info: string, i: number) => (
                <p className="mb-3 text-sm">{info}</p>
              ))}
            </PopoverContent>
          </Popover>
        </h2>
      </CardHeader>
      <div className="lg:flex justify-evenly">
        {countriesData.map((countryData, i) => {
          return (
            <div key={i} className="mb-8 flex-1">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart width={200}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={countryData.data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#0a9396"
                    label>
                    {countryData.data.map((entry: any, index: number) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={pieChartScale[index % pieChartScale.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <h2 className="font-bold text-xl text-center mt-[-25px]">{countryData.name}</h2>
            </div>
          );
        })}
      </div>
      <CardFooter className="flex justify-center">
        <div className="flex items-baseline text-[#005f73]">
          <div className="w-4 h-3 bg-[#005f73] mr-1"></div>
          <div>Forest</div>
        </div>
        <div className="flex items-baseline text-[#E2CD8D] ml-4">
          <div className="w-4 h-3 bg-[#E2CD8D] mr-1"></div>
          <div>Agriculture</div>
        </div>
        <div className="flex items-baseline text-[#ee9b00] ml-4">
          <div className="w-4 h-3 bg-[#ee9b00] mr-1"></div>
          <div>Other</div>
        </div>
      </CardFooter>
    </Card>
  );
}
