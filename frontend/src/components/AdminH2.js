import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Users", "Profit"],
  ["October", 3000, 1000],
  ["November", 10000, 6000],
  ["December", 4000, 11000],
  ["January", 200, 4000],
];

export const options = {
  title: "Website Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

export function Apps() {
  return (
    <div className="Chart">
    <Chart
      chartType="LineChart"
      
      width="90%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
}
