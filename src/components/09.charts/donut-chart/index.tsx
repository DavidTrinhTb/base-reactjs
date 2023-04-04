import PieConfig, { Pie } from '@ant-design/plots';
import React from 'react';
import { ChartData, IDonutChartProps } from '../types';

const fakeData: Array<ChartData> = [
  {
    category: 'BUSD',
    value: 27,
  },
  {
    category: 'USDT',
    value: 25,
  },
  {
    category: 'F-NFT A',
    value: 18,
  },
  {
    category: 'F-NFT B',
    value: 15,
  },
  {
    category: 'F-NFT C',
    value: 10,
  },
  {
    category: 'Others',
    value: 5,
  },
];

const DonutChart: React.FC<IDonutChartProps> = (props: IDonutChartProps) => {
  const {
    legendLayout = 'vertical',
    legendPosition = 'right',
    labelType = 'inner',
    data = fakeData,
    showLabel = false,
    color = ['#FD2254', '#00B7FE', '#F178B6', '#7879F1', '#F2994A', '#757575'], // when having real data, its default value will be null
  } = props;

  const config: any = {
    ...PieConfig,
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'category',
    radius: 1,
    innerRadius: 0.8,
    label: {
      type: labelType,
      offset: '-50%',
      content: showLabel ? '{value}' : '',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    pieStyle: {
      lineWidth: 0,
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    // state: {
    //   selected: {
    //     animate: { duration: 100, easing: 'easeLinear' },
    //     style: {
    //       lineWidth: 1,
    //       stroke: '#000',
    //     },
    //   },
    // },
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
    legend: {
      layout: legendLayout,
      position: legendPosition,
      itemName: {
        style: {
          fill: '#ffffff',
          opacity: 0.6,
        },
      },
    },
    color: color,
    // color: ({ category }: any) => {
    //   if (category === 'BUSD') {
    //     return '#FD2254';
    //   }
    //   if (category === 'Others') {
    //     return '#757575';
    //   }
    //   return null;
    // },
  };

  return <Pie {...config} />;
};

export default DonutChart;
