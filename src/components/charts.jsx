
import { PieChart, ResponsiveContainer, Pie, Cell, Tooltip, Legend } from "recharts";
import "./charts.css"
export function Charts({ arrayOfExpenses }) {
  const COLORS = ["#22c55e", "red", "#4f46e5", "#f59e0b"];
  const arrayLength = arrayOfExpenses.length > 0;
  return (
   arrayLength && 
   <div className="chart">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart className="pie-chart" >
        <Pie
          data={arrayOfExpenses}
          dataKey="amount"
          nameKey="category"
        labelLine={true}
        outerRadius={90}
        label
      >
        {arrayOfExpenses.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
  </div>
  );
}