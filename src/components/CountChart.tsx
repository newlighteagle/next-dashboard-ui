"use client";
import Image from "next/image";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Male', value: 4724 },
  { name: 'Female', value: 3000 }
];
const COLORS = ['#C3EBFA', '#FAE27C'];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-[350px] p-4 flex flex-col">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-semibold">Gender Distribution</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Male and Female representation"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM LEGEND */}
      <div className="flex justify-center gap-8 mt-4">
        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-5 bg-[#C3EBFA] rounded-full" />
          <h1 className="font-bold text-lg">4,724</h1>
          <h2 className="text-xs text-gray-500">Male (52%)</h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-5 bg-[#FAE27C] rounded-full" />
          <h1 className="font-bold text-lg">3,000</h1>
          <h2 className="text-xs text-gray-500">Female (48%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;