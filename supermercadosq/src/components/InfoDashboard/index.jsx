import React from "react";
import Chart from "react-apexcharts";

const InfoDashboard = ({
  size,
  title,
  primaryColor,
  secondaryColor,
  value,
  fontSize,
}) => {
  const data = {
    series: [100],
    colors: [primaryColor],
    chart: {
      fontFamily: "Poppins, sans-serif",
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
      fillSeriesColor: false,
      followCursor: false,
      style: {
        color: "#000",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
              fontSize: `${fontSize}px`,
              fontWeight: 600,
              label: title,
              color: secondaryColor,
              formatter: () => `${value}`,
            },
            value: {
              show: true,
              fontSize: "18px",
              fontWeight: 600,
              color: secondaryColor,
            },
          },
        },
      },
    },
  };

  return (
    <>
      <Chart
        options={data}
        series={data.series}
        type="donut"
        width={size}
        style={{ margin: -20 }}
      />
    </>
  );
};

export default InfoDashboard;
