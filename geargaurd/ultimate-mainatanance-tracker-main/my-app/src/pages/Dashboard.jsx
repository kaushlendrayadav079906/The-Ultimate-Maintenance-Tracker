import React from "react";
import KPI_Card from "../components/dashboard/KPI_Card";
import RequestStatusChart from "../components/dashboard/RequestStatusChart";
import TeamWorkloadChart from "../components/dashboard/TeamWorkloadChart";
import UpcomingSchedule from "../components/dashboard/UpcomingSchedule";
import OverdueAlertList from "../components/dashboard/OverdueAlertList";
import QuickActions from "../components/dashboard/QuickActions";
import { kpistats } from "../data/mockData";
import { FaTools, FaClipboardList, FaExclamationTriangle, FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div style={{ color: "white", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
            <h1 style={{ marginBottom: "20px", fontSize: "2rem", borderLeft: "5px solid #00d0df", paddingLeft: "15px" }}>
                Dashboard Overview
            </h1>

            {/* KPI Section */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
                <KPI_Card title="Total Equipment" count={kpistats.totalEquipment} icon={<FaTools />} color="#00E6FF" />
                <KPI_Card title="Active Requests" count={kpistats.activeRequests} icon={<FaClipboardList />} color="#ffc107" />
                <KPI_Card title="Overdue Repairs" count={kpistats.overdueRepairs} icon={<FaExclamationTriangle />} color="#dc3545" />
                <KPI_Card title="Scheduled Jobs" count={kpistats.preventiveScheduled} icon={<FaCalendarAlt />} color="#28a745" />
            </div>

            {/* Main Grid: Charts & Widgets */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px", marginBottom: "30px" }}>

                {/* Row 1: Charts */}
                <div style={{ minHeight: "350px" }}>
                    <RequestStatusChart />
                </div>
                <div style={{ minHeight: "350px" }}>
                    <TeamWorkloadChart />
                </div>

                {/* Row 2: Widgets */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <UpcomingSchedule />
                    <QuickActions />
                </div>

                <div style={{ height: "100%" }}>
                    <OverdueAlertList />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
