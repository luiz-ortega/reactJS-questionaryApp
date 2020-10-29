import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface Result {
  resposta: string;
  quantidade: number;
}

interface IBarChartProps {
  data: Result[];
}

const BarChart: React.FC<IBarChartProps> = ({ data }) => (
  <div style={{ height: 400 }}>
    <ResponsiveBar
      data={data}
      keys={['quantidade']}
      indexBy="resposta"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'category10' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['brighter', 5.6]] }}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
);

export default BarChart;
