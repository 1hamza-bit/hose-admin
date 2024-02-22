import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      series={[
        {
          data: [2, 5.5, 2, 8.5],
        },
      ]}
      width={200}
      height={150}
      slotProps={{ legend: { hidden: true } }}
      bottomAxis={null}
      leftAxis={null}
    />
  );
}
