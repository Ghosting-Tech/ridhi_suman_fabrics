"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart = () => {
  const data = {
    labels: [
      "Total Services",
      "Total Products",
      "Total users",
      "Total orders",
      "Completed orders",
      "Pending orders",
    ],
    datasets: [
      {
        data: [10, 200, 122, 178, 154, 24],
        backgroundColor: [
          "rgba(255, 206, 86, 0.7)", // Total Services
          "rgba(255, 99, 132, 0.7)", // Total Products
          "rgba(75, 192, 192, 0.7)", // Total users
          "rgba(153, 102, 255, 0.7)", // Total orders
          "rgba(75, 192, 192, 0.7)", // Completed orders
          "rgba(255, 159, 64, 0.7)", // Pending orders
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-96 w-full md:w-2/3 mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircleChart;
