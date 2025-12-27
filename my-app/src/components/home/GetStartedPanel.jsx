import React from 'react';
import { Link } from 'react-router-dom';

const GetStartedPanel = () => {
    return (
        <div className="section">
            <div className="home-container">
                <div className="get-started-panel">
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#fff' }}>Ready to Optimize Maintenance?</h2>
                    <p style={{ color: '#b0c4c9' }}>Join the Ultimate Maintenance Tracker System today.</p>

                    <div className="get-started-options">
                        <Link to="/login" className="cta-btn cta-primary">Login as Admin</Link>
                        <Link to="/dashboard" className="cta-btn cta-secondary">View Dashboard Demo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedPanel;
