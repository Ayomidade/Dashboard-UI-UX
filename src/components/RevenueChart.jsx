import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function RevenueChart() {
  return (
    <div className="revenue-chart">
      <p style={{ color: "GrayText" }}>Revenue</p>
      <div>
        <Line
          data={{
            labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Max"],
            datasets: [
              {
                label: "Current Week",
                data: [6809, 6000, 7400, 12000, 10300, 9000, 11610, 19000],
                // backgroundColor: "green",
                borderColor: "rgb(75,192,192)",
                tension: 0.4,
                pointStyle: false,
                borderWidth: 2,
              },
              {
                label: "Previous Week",
                data: [6700, 7000, 9000, 9000, 10000, 14000, 9000, 6790],
                // backgroundColor: "red",
                borderColor: "gray",
                borderWidth: 0.3,
                tension: 0.4,
                pointStyle: false,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
