
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import accidentData from "../data/accidents.json";

function AccidentChart() {
  return (
    <BarChart width={600} height={300} data={accidentData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="location" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="accidents" fill="#ff4d4d" />
    </BarChart>
  );
}

export default AccidentChart;
