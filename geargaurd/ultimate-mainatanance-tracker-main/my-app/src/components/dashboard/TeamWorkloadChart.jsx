import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { teamData } from "../../data/mockData";

const TeamWorkloadChart = () => {
    return (
        <div style={{ background: "rgba(0, 43, 54, 0.6)", padding: "20px", borderRadius: "12px", border: "1px solid #063A44", height: "100%" }}>
            <h3 style={{ color: "#fff", marginBottom: "15px", borderBottom: "1px solid #063A44", paddingBottom: "10px" }}>Team Workload</h3>
            <div style={{ width: "100%", height: 250 }}>
                <ResponsiveContainer>
                    <BarChart data={teamData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#063A44" horizontal={false} />
                        <XAxis type="number" stroke="#b0c4c9" />
                        <YAxis dataKey="name" type="category" stroke="#fff" width={100} />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ backgroundColor: "#012B36", border: "none", color: "#fff" }}
                        />
                        <Bar dataKey="activeJobs" fill="#00d0df" barSize={20} radius={[0, 4, 4, 0]}>
                            {teamData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.activeJobs > 6 ? "#ffc107" : "#00d0df"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TeamWorkloadChart;
