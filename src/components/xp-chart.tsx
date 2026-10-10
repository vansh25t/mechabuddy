"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { weeklyXp } from "@/lib/data";

export default function XpChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer>
        <BarChart data={weeklyXp} margin={{ top: 8, right: 0, left: -24, bottom: 0 }}>
          <XAxis dataKey="day" stroke="#64748b" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis stroke="#64748b" tickLine={false} axisLine={false} fontSize={12} />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            contentStyle={{ background: "#121a33", border: "1px solid #24305a", borderRadius: 12 }}
            labelStyle={{ color: "#e8ecf8" }}
            itemStyle={{ color: "#ffb800" }}
          />
          <Bar dataKey="xp" name="XP" fill="#ffb800" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
