import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    country: 'AD',
    'hot dog': 186,
  },
  {
    country: 'AE',
    'hot dog': 141,
  },
  {
    country: 'AF',
    'hot dog': 47,
  },
  {
    country: 'AG',
    'hot dog': 138,
  },
  {
    country: 'AI',
    'hot dog': 136,
  },
  {
    country: 'AL',
    'hot dog': 142,
  },
  {
    country: 'AM',
    'hot dog': 493,
  },
];

const BarChart: React.FC = () => (
  <div style={{ height: 400 }}>
    <ResponsiveBar
      data={data}
      keys={['hot dog']}
      indexBy="country"
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
