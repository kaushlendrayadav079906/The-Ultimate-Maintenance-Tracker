import React from 'react';
import { FaIndustry, FaUsers, FaClipboardList } from 'react-icons/fa';

const CorePillars = () => {
    return (
        <div className="section">
            <div className="home-container">
                <h2 className="section-title">The Three Pillars</h2>
                <p className="section-subtitle">Connect Equipment → Teams → Requests for seamless operations.</p>

                <div className="pillars-grid">
                    <div className="pillar-card">
                        <div className="pillar-icon"><FaIndustry /></div>
                        <h3 className="pillar-title">Equipment</h3>
                        <p className="pillar-desc">Track every machine, serial number, and location.</p>
                    </div>

                    <div className="pillar-card">
                        <div className="pillar-icon"><FaUsers /></div>
                        <h3 className="pillar-title">Teams</h3>
                        <p className="pillar-desc">Assign specialized technicians to specific jobs.</p>
                    </div>

                    <div className="pillar-card">
                        <div className="pillar-icon"><FaClipboardList /></div>
                        <h3 className="pillar-title">Requests</h3>
                        <p className="pillar-desc">Manage repair workflows from start to finish.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorePillars;
