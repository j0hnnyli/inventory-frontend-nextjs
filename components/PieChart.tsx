"use client";
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

type Props = {
  lowItems: number;
  stockedItems: number;
};

const PieChart = ({ lowItems, stockedItems }: Props) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const data = {
      labels: ["Low Stock Items", "Stocked Items"],
      datasets: [
        {
          data: [lowItems, stockedItems],
          backgroundColor: ["#FF0000", "#87CEEB"],
        },
      ],
    };

    const myChart = new Chart(chartRef.current!, {
      type: "doughnut",
      data: data,
    });

    return () => myChart.destroy();
  }, [lowItems, stockedItems]);

  return (
    <div className="dark:bg-gray-800 dark:text-white rounded-xl">
      <canvas
        ref={chartRef}
        className="w-[200px] h-[100px] md:w-[250px] md:h-[150px] lg:w-[200px] lg:h-[100px] p-3 border-l md:border-none lg:border-l"
      ></canvas>
    </div>
  );
};

export default PieChart;
