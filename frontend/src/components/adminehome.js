import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Instructors", 11],
  ["Admins", 10],
  ["Corporate", 6],
  ["Individual", 15],

];

export const options = {
  title: "Users",
};

export function App() {
  return (
    <div className="main">
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}
