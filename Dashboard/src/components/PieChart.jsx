import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const pieChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Total Sales",
        data: [32, 47, 52, 35, 45, 79, 69],
        backgroundColor: [
          "orange",
          "yellow",
          "cyan",
          "purple",
          "brown",
          "gray",
          "darkslategray",
        ],
        hoverOffset: 10,
      },
    ],
  };
  return (
    <>
      <div className="doughnut-chart">
        <p style={{ color: "GrayText", fontSize: "18px" }}>Total sales</p>
        <Doughnut data={pieChartData} />
      </div>
    </>
  );
};

export default Chart;
