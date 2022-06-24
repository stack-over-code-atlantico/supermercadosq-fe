import React from 'react';
import Chart from "react-apexcharts";

const ChartDashboard = () => {

  const data = {
    series: [75, 13, 12],
    labels: ['Comentários', 'Postagens', 'Usuários'],
    colors: [ '#692ABA', '#8E5BD0', '#B996E8'],
    chart: {
      fontFamily: 'Poppins, sans-serif',
    },
    dataLabels: {
      style: {
        fontSize: '8px', colors: ['#fff'],
      },
      dropShadow: { enabled: false}
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
      <Chart options={data} series={data.series} type="donut" width={380} />
    </>
  );
};

export default ChartDashboard;
