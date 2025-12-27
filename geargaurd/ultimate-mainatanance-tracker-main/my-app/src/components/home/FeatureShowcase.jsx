import React from 'react';
import { FaColumns, FaCalendarAlt, FaChartBar, FaWrench } from 'react-icons/fa';

const FeatureShowcase = () => {
    return (
        <div className="section" style={{ background: 'rgba(0,0,0,0.1)' }}>
            <div className="home-container">
                <h2 className="section-title">Key Features</h2>
                <div className="features-grid">

                    <div className="feature-card">
                        <h3><FaWrench /> Maintenance Requests</h3>
                        <p>Handle both corrective breakdowns and scheduled preventive tasks efficiently.</p>
                    </div>

                    <div className="feature-card">
                        <h3><FaColumns /> Kanban Workflow</h3>
                        <p>Visualize progress with stages: New, In Progress, Repaired, Scrap.</p>
                    </div>

                    <div className="feature-card">
                        <h3><FaCalendarAlt /> Smart Scheduling</h3>
                        <p>Plan preventive maintenance with an integrated upcoming tasks view.</p>
                    </div>

                    <div className="feature-card">
                        <h3><FaChartBar /> Reports & Analytics</h3>
                        <p>Track team performance, equipment uptime, and repair costs.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureShowcase;
