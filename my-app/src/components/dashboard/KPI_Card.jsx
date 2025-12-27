import React from "react";

const KPI_Card = ({ title, count, icon, color }) => {
    return (
        <div
            style={{
                background: "rgba(0, 43, 54, 0.8)",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                border: "1px solid #063A44",
                minWidth: "200px",
                flex: 1
            }}
        >
            <div
                style={{
                    fontSize: "2.5rem",
                    color: color,
                    marginRight: "20px",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {icon}
            </div>
            <div>
                <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff" }}>
                    {count}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#b0c4c9" }}>{title}</div>
            </div>
        </div>
    );
};

export default KPI_Card;
