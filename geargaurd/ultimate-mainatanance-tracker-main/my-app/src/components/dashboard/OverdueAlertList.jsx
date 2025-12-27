import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { requestData } from "../../data/mockData";

const OverdueAlertList = () => {
    const overdueItems = requestData.filter(req => req.overdue);

    return (
        <div style={{ background: "rgba(60, 0, 0, 0.2)", padding: "20px", borderRadius: "12px", border: "1px solid #dc3545", flex: 1 }}>
            <h3 style={{ color: "#ff6b6b", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                <FaExclamationTriangle /> Overdue Actions
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {overdueItems.length > 0 ? overdueItems.map(item => (
                    <li key={item.id} style={{ marginBottom: "10px", background: "rgba(220, 53, 69, 0.1)", padding: "10px", borderRadius: "6px" }}>
                        <div style={{ color: "#ffc1c1", fontWeight: "bold" }}>{item.equipment}</div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginTop: "4px" }}>
                            <span style={{ color: "#ff8787" }}>{item.type}</span>
                            <span style={{ color: "#fff" }}>Tech: {item.technician}</span>
                        </div>
                    </li>
                )) : <div style={{ color: "#ccc" }}>No overdue items. Good job!</div>}
            </ul>
        </div>
    );
};

export default OverdueAlertList;
