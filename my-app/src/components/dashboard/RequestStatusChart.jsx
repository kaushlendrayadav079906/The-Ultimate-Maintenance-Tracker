import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
    { name: "New", value: 5, color: "#00E6FF" },
    { name: "In Progress", value: 7, color: "#00d0df" },
    { name: "Repaired", value: 12, color: "#28a745" },
    { name: "Scrap", value: 2, color: "#dc3545" },
];

const RequestStatusChart = () => {
    return (
        <div style={{ background: "rgba(0, 43, 54, 0.6)", padding: "20px", borderRadius: "12px", border: "1px solid #063A44", height: "100%" }}>
            <h3 style={{ color: "#fff", marginBottom: "15px", borderBottom: "1px solid #063A44", paddingBottom: "10px" }}>Request Status</h3>
            <div style={{ width: "100%", height: 250 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: "#012B36", border: "none", color: "#fff" }}
                            itemStyle={{ color: "#fff" }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RequestStatusChart;
