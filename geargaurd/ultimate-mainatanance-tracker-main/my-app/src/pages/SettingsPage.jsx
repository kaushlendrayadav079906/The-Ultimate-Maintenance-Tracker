import React, { useState } from 'react';
import { FaLayerGroup, FaUsers, FaMapMarkerAlt, FaClipboardList, FaSave, FaPlus } from 'react-icons/fa';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('categories');

    // Mock Data
    const [categories, setCategories] = useState(['CNC Machines', 'Hydraulics', 'Electrical', 'Safety', 'Infrastructure']);
    const [teams, setTeams] = useState(['Mechanical', 'Electrical', 'IT Support', 'Janitorial']);
    const [locations, setLocations] = useState(['Plant A', 'Plant B', 'Warehouse', 'Office HQ']);
    const [stages] = useState(['New', 'In Progress', 'Pending Parts', 'Repaired', 'Scrap']);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'categories':
                return (
                    <div>
                        <h3 style={{ borderBottom: '1px solid #063A44', paddingBottom: '10px', marginBottom: '20px' }}>Equipment Categories</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {categories.map((cat, idx) => (
                                <li key={idx} style={listItemStyle}>
                                    {cat}
                                    <button style={deleteBtnStyle}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                            <input type="text" placeholder="New Category Name" style={inputStyle} />
                            <button style={addBtnStyle}><FaPlus /> Add</button>
                        </div>
                    </div>
                );
            case 'teams':
                return (
                    <div>
                        <h3 style={{ borderBottom: '1px solid #063A44', paddingBottom: '10px', marginBottom: '20px' }}>Maintenance Teams</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {teams.map((team, idx) => (
                                <li key={idx} style={listItemStyle}>
                                    {team}
                                    <button style={deleteBtnStyle}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                            <input type="text" placeholder="New Team Name" style={inputStyle} />
                            <button style={addBtnStyle}><FaPlus /> Add</button>
                        </div>
                    </div>
                );
            case 'locations':
                return (
                    <div>
                        <h3 style={{ borderBottom: '1px solid #063A44', paddingBottom: '10px', marginBottom: '20px' }}>Facility Locations</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {locations.map((loc, idx) => (
                                <li key={idx} style={listItemStyle}>
                                    {loc}
                                    <button style={deleteBtnStyle}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                            <input type="text" placeholder="New Location" style={inputStyle} />
                            <button style={addBtnStyle}><FaPlus /> Add</button>
                        </div>
                    </div>
                );
            case 'workflow':
                return (
                    <div>
                        <h3 style={{ borderBottom: '1px solid #063A44', paddingBottom: '10px', marginBottom: '20px' }}>Workflow Stages</h3>
                        <p style={{ color: '#b0c4c9', marginBottom: '20px' }}>Define the stages a maintenance request goes through.</p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {stages.map((stage, idx) => (
                                <li key={idx} style={listItemStyle}>
                                    <span style={{ fontWeight: 'bold', color: '#00d0df' }}>{idx + 1}.</span> {stage}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff', height: '100%' }}>
            <h1 style={{ marginBottom: '30px' }}>System Settings</h1>

            <div style={{ display: 'flex', gap: '20px', height: 'calc(100% - 80px)' }}>
                {/* Sidebar Tabs */}
                <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button style={activeTab === 'categories' ? activeTabStyle : tabStyle} onClick={() => setActiveTab('categories')}>
                        <FaLayerGroup /> Equipment Categories
                    </button>
                    <button style={activeTab === 'teams' ? activeTabStyle : tabStyle} onClick={() => setActiveTab('teams')}>
                        <FaUsers /> Manage Teams
                    </button>
                    <button style={activeTab === 'locations' ? activeTabStyle : tabStyle} onClick={() => setActiveTab('locations')}>
                        <FaMapMarkerAlt /> Locations
                    </button>
                    <button style={activeTab === 'workflow' ? activeTabStyle : tabStyle} onClick={() => setActiveTab('workflow')}>
                        <FaClipboardList /> Workflow Stages
                    </button>
                </div>

                {/* Content Area */}
                <div style={{ flexGrow: 1, background: 'rgba(6, 58, 68, 0.5)', padding: '30px', borderRadius: '15px', border: '1px solid #063A44', overflowY: 'auto' }}>
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

// Styles
const tabStyle = {
    padding: '15px 20px',
    background: 'transparent',
    border: 'none',
    color: '#b0c4c9',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '8px',
    transition: 'all 0.2s'
};

const activeTabStyle = {
    ...tabStyle,
    background: '#063A44',
    color: '#00d0df',
    fontWeight: 'bold',
    borderLeft: '4px solid #00d0df'
};

const listItemStyle = {
    background: '#012b36',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #063a44'
};

const deleteBtnStyle = {
    background: 'transparent',
    border: '1px solid #dc3545',
    color: '#dc3545',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem'
};

const inputStyle = {
    padding: '10px',
    background: '#00222b',
    border: '1px solid #063a44',
    color: '#fff',
    borderRadius: '4px',
    flexGrow: 1
};

const addBtnStyle = {
    background: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '0 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
};

export default SettingsPage;
