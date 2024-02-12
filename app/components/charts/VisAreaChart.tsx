'use client'

import { XYDataPoint } from '@/lib/types/transformers';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

export default function VisAreaChart({ data }: { data: XYDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}>
        <XAxis dataKey="x" name="Year" />
        <YAxis name='CO2 Emissions'/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
        <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" /> */}
        <Area type="monotone" dataKey="y" name='CO2 Per Cap' stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
