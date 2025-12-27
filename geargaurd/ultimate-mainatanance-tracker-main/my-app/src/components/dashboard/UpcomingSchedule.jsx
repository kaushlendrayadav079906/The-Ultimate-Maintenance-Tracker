import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const tasks = [
    { id: 1, title: "Generator Maintenance", date: "Tomorrow", tech: "Gamma Team" },
    { id: 2, title: "Hydraulic Fluid Check", date: "Oct 30", tech: "Alpha Team" },
    { id: 3, title: "Safety Sensor Calibration", date: "Nov 02", tech: "Beta Team" },
];

const UpcomingSchedule = () => {
    return (
        <div style={{ background: "rgba(0, 43, 54, 0.6)", padding: "20px", borderRadius: "12px", border: "1px solid #063A44", flex: 1 }}>
            <h3 style={{ color: "#fff", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                <FaCalendarAlt color="#00d0df" /> Upcoming Schedule
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {tasks.map(task => (
                    <li key={task.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid rgba(6, 58, 68, 0.5)", paddingBottom: "8px" }}>
                        <div>
                            <div style={{ color: "#e0e0e0", fontWeight: "500" }}>{task.title}</div>
                            <div style={{ color: "#7f99a0", fontSize: "0.85rem" }}>{task.tech}</div>
                        </div>
                        <div style={{ color: "#00E6FF", fontSize: "0.9rem", fontWeight: "bold" }}>{task.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingSchedule;
