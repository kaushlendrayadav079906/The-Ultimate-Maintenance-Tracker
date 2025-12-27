import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"; // Ensure global styles are available

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add logic here
        navigate("/dashboard");
    };

    return (
        <div className="auth-container">
            <Link to="/" className="back-btn">← Back to Home</Link>
            <div className="auth-card">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to your account</p>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="auth-btn">Login</button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
