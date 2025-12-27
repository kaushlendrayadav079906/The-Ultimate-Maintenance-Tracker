import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <div className="auth-buttons">
                <Link to="/login" className="nav-btn login-btn">Login</Link>
                <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
            </div>
            <div className="home-content">
                <h1>Welcome to The Ultimate Tracker System</h1>
                <p>Select a module from the sidebar to get started.</p>
            </div>
        </div>
    );
};

export default Home;
