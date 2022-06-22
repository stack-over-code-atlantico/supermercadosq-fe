import React from 'react';
import Chart from "react-apexcharts";

const ChartDashboard = ({size}) => {

  const data = {
    series: [75, 13, 12],
    numero: 1,
    labels: ['Comentários', 'Postagens', 'Usuários'],
    colors: ['#FFB3B2', '#60DFF6', '#7EF42A'],
    chart: {
      fontFamily: 'Poppins, sans-serif',
    },
    stroke: {
      width: 3,
    },
    legend: {
      show: true,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'right',
      labels: {
        colors: '#000'
      },
      markers: {
        width: 40,
        height: 7,
      }
    },
    tooltip: {
      fillSeriesColor: true,
      followCursor: true,
      style: {
        color: '#000',
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              color: '#000',
              formatter: () => {
                let totalValue = 0;
                return `${data.series.reduce((prev, current) => prev + current, totalValue)}`
              }
            }
          }
        }
      }
    }
  };

  return (
    <>
      <Chart options={data} series={data.series} type="donut" width={410}/>
    </>
  );
};

export default ChartDashboard;
