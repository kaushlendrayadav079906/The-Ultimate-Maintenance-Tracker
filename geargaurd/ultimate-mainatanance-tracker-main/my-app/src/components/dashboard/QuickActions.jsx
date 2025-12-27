import React from "react";
import { FaPlus, FaCalendarCheck, FaTools } from "react-icons/fa";

const QuickActions = () => {
    const btnStyle = {
        background: "#006D7C",
        color: "white",
        border: "none",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        fontSize: "1rem",
        fontWeight: "bold",
        transition: "0.3s",
        flex: 1
    };

    return (
        <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <button style={btnStyle} onMouseOver={(e) => e.currentTarget.style.background = "#008a9c"} onMouseOut={(e) => e.currentTarget.style.background = "#006D7C"}>
                <FaPlus size={24} /> New Request
            </button>
            <button style={btnStyle} onMouseOver={(e) => e.currentTarget.style.background = "#008a9c"} onMouseOut={(e) => e.currentTarget.style.background = "#006D7C"}>
                <FaCalendarCheck size={24} /> Schedule Job
            </button>
            <button style={btnStyle} onMouseOver={(e) => e.currentTarget.style.background = "#008a9c"} onMouseOut={(e) => e.currentTarget.style.background = "#006D7C"}>
                <FaTools size={24} /> Add Equipment
            </button>
        </div>
    );
};

export default QuickActions;
