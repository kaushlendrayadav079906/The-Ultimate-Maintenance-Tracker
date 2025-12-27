import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTools } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="home-container">
                <h1 className="hero-title">Ultimate Maintenance Tracker System</h1>
                <p className="hero-subtitle">Track Equipment • Assign Teams • Manage Repairs • Stay Ahead</p>

                <div className="hero-buttons">
                    <Link to="/dashboard" className="cta-btn cta-primary">
                        Enter Dashboard <FaArrowRight />
                    </Link>
                    <Link to="/requests/create" className="cta-btn cta-secondary">
                        <FaTools /> Create Maintenance Request
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
