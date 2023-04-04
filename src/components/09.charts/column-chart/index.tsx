import React from 'react';
import { Column } from '@ant-design/charts';

const data = [
  {
    xField: '02-03',
    yField: 38,
  },
  {
    xField: '03-03',
    yField: 52,
  },
  {
    xField: '04-03',
    yField: 61,
  },
  {
    xField: '05-03',
    yField: 145,
  },
  {
    xField: '06-03',
    yField: 145,
  },
  {
    xField: '07-03',
    yField: 145,
  },
];

const ColumnChart = () => {
  var config: any = {
    data: data,
    xField: 'xField',
    yField: 'yField',
    color: '#71CEF3',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    yAxis: {
      // line: {
      //   style: {
      //     stroke: 'black',
      //     lineWidth: 2,
      //     lineDash: [4, 5],
      //     strokeOpacity: 0.7,
      //     shadowColor: 'black',
      //     shadowBlur: 10,
      //     shadowOffsetX: 5,
      //     shadowOffsetY: 5,
      //     cursor: 'pointer',
      //   },
      // },
      grid: {
        closed: true,
      },
    },
    // minColumnWidth: 25,
    maxColumnWidth: 25,
    // columnWidthRatio: 0.3,
    // tickLine: {
    //   alignTick: false,
    //   length: 0,
    //   style: {
    //     fill: 'transparent',
    //   },
    // },
    // lineStyle: {
    //   stroke: 'black',
    //   lineWidth: 2,
    //   lineDash: [4, 5],
    //   strokeOpacity: 0.7,
    //   shadowColor: 'black',
    //   shadowBlur: 10,
    //   shadowOffsetX: 5,
    //   shadowOffsetY: 5,
    //   cursor: 'pointer',
    // },
  };

  return <Column {...config} />;
};

export default ColumnChart;
