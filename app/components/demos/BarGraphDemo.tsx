'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  fetchCountryIndicatorData,
  fetchIndicatorDescription,
  fetchMultiCountryData,
} from '@/lib/api';
import { colorScale, countryCodesArray, countryColors, indicators } from '@/lib/constants';
import { Info } from 'lucide-react';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface GraphProps {
  graph: {
    keys: string[];
    data: any[];
  };
  indicator: any;
}

export default function BarGraphDemo({ graph, indicator }: GraphProps) {
  const { keys, data } = graph;

  return (
    <Card className="pb-6 mb-6">
      <CardHeader>
        <h2 className="flex justify-between">
          <div>
            <span className="text-xl font-bold ">{indicator.name}</span>{' '}
            <span className="text-md font-bold text-slate-400">4 Country Comparison</span>
          </div>
          <Popover>
            <PopoverTrigger>
              <Info />
            </PopoverTrigger>
            <PopoverContent>{indicator.sourceNote}</PopoverContent>
          </Popover>
        </h2>
      </CardHeader>
      <div className="pr-5">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart width={730} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip labelClassName="text-black font-bold" />
            <Legend />
            {keys.map((key, i) => {
              return <Bar key={i} dataKey={key} fill={colorScale[i]} />;
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
