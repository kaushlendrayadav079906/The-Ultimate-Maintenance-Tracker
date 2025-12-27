import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EquipmentList from "./pages/equipment/EquipmentList";
import EquipmentCreate from "./pages/equipment/EquipmentCreate";
import RequestList from "./pages/requests/RequestList";
import CreateRequest from "./pages/requests/CreateRequest";
import KanbanBoard from "./pages/KanbanBoard";
import CalendarPage from "./pages/CalendarPage";
import TeamsPage from "./pages/TeamsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import ProfilePage from "./pages/ProfilePage";
import "./Sidebar.css";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app-container">
      {!isAuthPage && <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />}

      <div className={!isAuthPage ? (collapsed ? "content collapsed" : "content") : "auth-wrapper"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/equipment/list" element={<EquipmentList />} />
          <Route path="/equipment/create" element={<EquipmentCreate />} />
          <Route path="/requests" element={<RequestList />} />
          <Route path="/requests/create" element={<CreateRequest />} />
          <Route path="/kanban" element={<KanbanBoard />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
