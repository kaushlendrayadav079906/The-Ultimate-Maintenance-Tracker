import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTools, FaClipboardList, FaColumns, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const ModuleShortcuts = () => {
    return (
        <div className="section">
            <div className="home-container">
                <h2 className="section-title">Quick Access Modules</h2>
                <div className="shortcuts-grid">
                    <Link to="/dashboard" className="shortcut-btn">
                        <FaTachometerAlt size={30} />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/equipment/list" className="shortcut-btn">
                        <FaTools size={30} />
                        <span>Equipment</span>
                    </Link>
                    <Link to="/requests/all" className="shortcut-btn">
                        <FaClipboardList size={30} />
                        <span>Requests</span>
                    </Link>
                    <Link to="/kanban" className="shortcut-btn">
                        <FaColumns size={30} />
                        <span>Kanban</span>
                    </Link>
                    <Link to="/calendar" className="shortcut-btn">
                        <FaCalendarAlt size={30} />
                        <span>Calendar</span>
                    </Link>
                    <Link to="/teams" className="shortcut-btn">
                        <FaUsers size={30} />
                        <span>Teams</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModuleShortcuts;
