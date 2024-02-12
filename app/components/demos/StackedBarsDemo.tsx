'use client';

import { colorScale } from '@/lib/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Info } from 'lucide-react';

interface GraphProps {
  graph: {
    keys: string[];
    data: any[];
  };
  indicator: any;
}

export default function StackedBarsDemo({ graph, indicator }: GraphProps) {
  const { keys, data } = graph;

  return (
    <Card className="pb-6 mb-6 lg:w-1/2">
      <CardHeader>
        <h2 className="flex justify-between">
          <div>
            <span className="text-xl font-bold line-clamp-1">{indicator.name}</span>
          </div>
          <Popover>
            <PopoverTrigger>
              <Info />
            </PopoverTrigger>
            <PopoverContent><h3 className='font-bold mb-3'>{indicator.name}</h3>{indicator.sourceNote}</PopoverContent>
          </Popover>
        </h2>
      </CardHeader>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip labelClassName='text-black font-bold' />
          <Legend />
          <Bar dataKey="Renewable" stackId="a" fill={colorScale[3]} />
          <Bar dataKey="Non-Renewable" stackId="a" fill={colorScale[0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
