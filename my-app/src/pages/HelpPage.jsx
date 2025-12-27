import React from 'react';
import { FaBook, FaUserShield, FaTools, FaLifeRing } from 'react-icons/fa';

const HelpPage = () => {
    return (
        <div className="page-container" style={{ padding: '20px', color: '#fff', height: '100%', overflowY: 'auto' }}>
            <h1 style={{ marginBottom: '30px' }}>Help & Support</h1>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                {/* Section 1: System Guide */}
                <div style={sectionStyle}>
                    <div style={headerStyle}>
                        <FaBook style={{ color: '#00d0df' }} /> System Guide
                    </div>
                    <p style={{ lineHeight: '1.6', color: '#b0c4c9' }}>
                        Welcome to the <strong>Ultimate Maintenance Tracker</strong>. This system is designed to streamline your maintenance operations.
                        <br /><br />
                        - <strong>Dashboard:</strong> Get a bird's-eye view of your facility's health.
                        <br />
                        - <strong>Equipment:</strong> Manage your assets, track history, and schedule downtime.
                        <br />
                        - <strong>Requests:</strong> Create and track maintenance tickets from "New" to "Repaired".
                    </p>
                </div>

                {/* Section 2: Roles */}
                <div style={sectionStyle}>
                    <div style={headerStyle}>
                        <FaUserShield style={{ color: '#ffc107' }} /> Roles & Responsibilities
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ background: '#00222b', padding: '15px', borderRadius: '8px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Admin / Manager</h4>
                            <ul style={{ paddingLeft: '20px', color: '#b0c4c9', fontSize: '0.9rem' }}>
                                <li>Create & Assign Requests</li>
                                <li>Manage Equipment & Teams</li>
                                <li>View Reports & Analytics</li>
                                <li>Configure System Settings</li>
                            </ul>
                        </div>
                        <div style={{ background: '#00222b', padding: '15px', borderRadius: '8px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Technician</h4>
                            <ul style={{ paddingLeft: '20px', color: '#b0c4c9', fontSize: '0.9rem' }}>
                                <li>View Assigned Tasks</li>
                                <li>Update Task Stages</li>
                                <li>Log Repair Details</li>
                                <li>Request Parts</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 3: Workflow */}
                <div style={sectionStyle}>
                    <div style={headerStyle}>
                        <FaTools style={{ color: '#28a745' }} /> Workflow Operation
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#00222b', padding: '20px', borderRadius: '8px', flexWrap: 'wrap', gap: '10px' }}>
                        <Step number="1" text="Request Created" />
                        <Arrow />
                        <Step number="2" text="Assigned to Team" />
                        <Arrow />
                        <Step number="3" text="In Progress" />
                        <Arrow />
                        <Step number="4" text="Repaired & Closed" />
                    </div>
                </div>

                {/* Section 4: Support */}
                <div style={sectionStyle}>
                    <div style={headerStyle}>
                        <FaLifeRing style={{ color: '#dc3545' }} /> Contact Support
                    </div>
                    <p style={{ color: '#b0c4c9' }}>
                        For technical issues or account access problems, please contact the IT Helpdesk.
                    </p>
                    <div style={{ background: '#00222b', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #dc3545' }}>
                        <strong>Email:</strong> support@ultimatetracker.com <br />
                        <strong>Emergency Line:</strong> +1 (555) 019-2834
                    </div>
                </div>

            </div>
        </div>
    );
};

// Sub-components for visual flair
const Step = ({ number, text }) => (
    <div style={{ textAlign: 'center' }}>
        <div style={{ width: '30px', height: '30px', background: '#00d0df', color: '#012b36', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 5px auto' }}>{number}</div>
        <div style={{ fontSize: '0.8rem', color: '#fff' }}>{text}</div>
    </div>
);

const Arrow = () => (
    <div style={{ color: '#b0c4c9' }}>→</div>
);

// Styles
const sectionStyle = {
    background: 'rgba(6, 58, 68, 0.5)',
    padding: '25px',
    borderRadius: '12px',
    border: '1px solid #063A44',
    marginBottom: '20px'
};

const headerStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
};

export default HelpPage;
