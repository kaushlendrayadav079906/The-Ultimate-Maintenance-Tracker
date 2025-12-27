import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Signup = () => {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Add logic here
        navigate("/dashboard");
    };

    return (
        <div className="auth-container">
            <Link to="/" className="back-btn">← Back to Home</Link>
            <div className="auth-card">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Start your journey with us</p>
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Create a strong password" required />
                    </div>
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <p className="auth-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
