'use client';

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
  BarChart,
  Legend,
  Bar,
} from 'recharts';

interface VisAreaChartGradProps {
  data1: XYDataPoint[];
  data2: XYDataPoint[];
}

interface DataPoint {
  name: string;
  y1: number;
  y2: number;
}

const transformData = (data1: XYDataPoint[], data2: XYDataPoint[]): DataPoint[] => {
  const transformedData: DataPoint[] = data1.map((point, i) => {
    return {
      name: point.x,
      y1: point.y,
      y2: data2[i].y,
    };
  });

  return transformedData;
};

export default function VisAreaChartGrad() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
