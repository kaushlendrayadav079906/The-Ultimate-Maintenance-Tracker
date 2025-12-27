import React, { useState } from 'react';
import { FaFilter, FaPlus, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RequestList = () => {
    // Mock Data
    const [requests] = useState([
        { id: 101, subject: "Hydraulic Leak", type: "Corrective", equipment: "Hydraulic Press", team: "Mechanical", stage: "In Progress", date: "2023-10-25", overdue: true },
        { id: 102, subject: "Routine Oil Change", type: "Preventive", equipment: "CNC Milling Machine", team: "General", stage: "New", date: "2023-10-28", overdue: false },
        { id: 103, subject: "Sensor Calibration", type: "Preventive", equipment: "Robot Arm", team: "Electrical", stage: "Repaired", date: "2023-10-20", overdue: false },
        { id: 104, subject: "Emergency Stop Fail", type: "Corrective", equipment: "Conveyor Belt", team: "Safety", stage: "New", date: "2023-10-24", overdue: true },
        { id: 105, subject: "Motor Noise", type: "Corrective", equipment: "Air Compressor", team: "Mechanical", stage: "Scrap", date: "2023-10-15", overdue: false },
    ]);

    const [filter, setFilter] = useState('All');

    const getStageColor = (stage) => {
        switch (stage) {
            case 'New': return '#00E6FF'; // Cyan
            case 'In Progress': return '#ffc107'; // Yellow
            case 'Repaired': return '#28a745'; // Green
            case 'Scrap': return '#dc3545'; // Red
            default: return '#fff';
        }
    };

    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ margin: 0 }}>Maintenance Requests</h1>
                <Link to="/requests/create" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#e0e0e0', color: '#333', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                    <FaPlus /> New Request
                </Link>
            </div>

            {/* Filters (Mock) */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <FaFilter color="#00d0df" />
                {['All', 'New', 'In Progress', 'Overdue'].map(f => (
                    <button key={f} onClick={() => setFilter(f)} style={{
                        background: filter === f ? '#00d0df' : 'transparent',
                        color: filter === f ? '#012b36' : '#b0c4c9',
                        border: '1px solid #00d0df',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        cursor: 'pointer'
                    }}>
                        {f}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto', background: 'rgba(0, 34, 43, 0.8)', borderRadius: '10px', padding: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ecf0f1' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #063A44', textAlign: 'left' }}>
                            <th style={{ padding: '15px' }}>ID</th>
                            <th style={{ padding: '15px' }}>Subject</th>
                            <th style={{ padding: '15px' }}>Equipment</th>
                            <th style={{ padding: '15px' }}>Type</th>
                            <th style={{ padding: '15px' }}>Assigned Team</th>
                            <th style={{ padding: '15px' }}>Due Date</th>
                            <th style={{ padding: '15px' }}>Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req) => (
                            <tr key={req.id} style={{
                                borderBottom: '1px solid #063A44',
                                background: req.overdue ? 'rgba(220, 53, 69, 0.1)' : 'transparent', // Red highlight for overdue
                                borderLeft: req.overdue ? '3px solid #dc3545' : 'none'
                            }}>
                                <td style={{ padding: '15px', color: '#7f99a0' }}>#{req.id}</td>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>
                                    {req.subject}
                                    {req.overdue && <FaExclamationCircle color="#dc3545" style={{ marginLeft: '8px' }} title="Overdue" />}
                                </td>
                                <td style={{ padding: '15px' }}>{req.equipment}</td>
                                <td style={{ padding: '15px' }}>{req.type}</td>
                                <td style={{ padding: '15px' }}>{req.team}</td>
                                <td style={{ padding: '15px', color: req.overdue ? '#dc3545' : 'inherit' }}>{req.date}</td>
                                <td style={{ padding: '15px' }}>
                                    <span style={{
                                        padding: '5px 10px',
                                        borderRadius: '4px',
                                        color: getStageColor(req.stage),
                                        border: `1px solid ${getStageColor(req.stage)}`,
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                        display: 'inline-block'
                                    }}>
                                        {req.stage}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestList;
