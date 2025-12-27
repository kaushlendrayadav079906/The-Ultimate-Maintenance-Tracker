import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTools,
  FaColumns,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaCog,
  FaQuestionCircle,
  FaBars,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaHome
} from "react-icons/fa";
import { MdEngineering, MdViewKanban, MdOutlineCalendarMonth, MdGroups, MdAnalytics, MdSettings, MdHelpOutline } from "react-icons/md";
import "../Sidebar.css";
import SidebarSubmenu from "./SidebarSubmenu";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    if (collapsed) {
      setCollapsed(false);
      setOpenMenus({ [menuName]: true });
    } else {
      setOpenMenus((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
    }
  };

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    {
      name: "Equipment",
      icon: <FaTools />,
      subMenus: [
        { name: "Equipment List", path: "/equipment/list" },
        { name: "Add Equipment", path: "/equipment/create" },
      ],
    },
    {
      name: "Maintenance Requests",
      icon: <MdEngineering />,
      path: "/requests",
      badge: 3,
      subMenus: [
        { name: "All Requests", path: "/requests" },
        { name: "Create Request", path: "/requests/create" },
      ],
    },
    { name: "Kanban Board", path: "/kanban", icon: <MdViewKanban /> },
    { name: "Calendar", path: "/calendar", icon: <MdOutlineCalendarMonth /> },
    { name: "Teams & Technicians", path: "/teams", icon: <MdGroups /> },
    { name: "Reports & Analytics", path: "/reports", icon: <MdAnalytics /> },
    { name: "System Settings", path: "/settings", icon: <MdSettings /> },
    { name: "Help & Support", path: "/help", icon: <MdHelpOutline /> },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Top Section */}
      <div className="sidebar-top">
        <div className="brand">
          {!collapsed && <span className="brand-text">Ultimate Maintenance Tracker</span>}
        </div>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          <FaBars />
        </button>
      </div>

      {/* Menu Section */}
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-wrapper">
            {item.subMenus ? (
              <SidebarSubmenu
                item={item}
                collapsed={collapsed}
                isOpen={openMenus[item.name]}
                toggleMenu={toggleMenu}
              />
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `menu-item ${isActive ? "active" : ""}`
                }
                title={collapsed ? item.name : ""}
              >
                <div className="icon">
                  {item.icon}
                  {item.badge && collapsed && (
                    <span style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      background: '#dc3545',
                      color: '#fff',
                      borderRadius: '50%',
                      fontSize: '10px',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </div>
                {!collapsed && (
                  <span className="label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    {item.name}
                    {item.badge && (
                      <span style={{
                        background: '#dc3545',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '2px 8px',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </span>
                )}
              </NavLink>
            )}
          </div>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="sidebar-auth">
        <NavLink to="/login" className="auth-link login-link">
          <div className="icon"><FaSignInAlt /></div>
          {!collapsed && <span className="label">Login</span>}
        </NavLink>
        <NavLink to="/signup" className="auth-link signup-link">
          <div className="icon"><FaUserPlus /></div>
          {!collapsed && <span className="label">Sign Up</span>}
        </NavLink>
      </div>

      {/* Bottom User Section */}
      <NavLink to="/profile" className="sidebar-footer">
        <FaUserCircle className="user-icon" />
        {!collapsed && (
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">Manager</span>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Sidebar;
