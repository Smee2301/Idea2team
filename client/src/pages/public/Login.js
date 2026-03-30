import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from "react";
import '../../styles/Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    function handleLogin() {
        const email = document.querySelector("#login_email").value;
        const password = document.querySelector("#login_password").value;
        const role = document.querySelector('input[name="role"]:checked')?.value;

        if (!email || !password) {
            return Swal.fire("Error", "Enter your email, password, and select your role.");
        }
        axios.post("http://localhost:5000/api/login", {
            email,
            password,
            role
        }).then((res) => {
            Swal.fire("Success", "Login successful!", "success");

            sessionStorage.setItem("user_id", res.data.user.user_id);
            sessionStorage.setItem("role", res.data.user.role);
            sessionStorage.setItem("fullname", res.data.user.fullname);

            const role = res.data?.user?.role;
            if (role === 'founder') {
                window.location.href = "/founder/dashboard";
            } else {
                window.location.href = "/freelancer/dashboard";
            }
        }).catch((err) => {
            console.error(err);
            if (err.response?.status === "blocked") {
                Swal.fire({
                    title: "Account Blocked",
                    html: `
                        Your account is blocked.<br/><br/>
                        <a href="/help" style="color:#3085d6; font-weight:bold;">
                            Help & Support
                        </a>
                    `
                });
            }
            else {
                Swal.fire("Error", err.response?.data?.message || "Invalid credentials", "error");
            }
        });
    }

    return (
        <div className="log-auth-page">
            <div className="log-auth-visual">
                <div className="log-auth-visual-content">
                    <h2>Welcome Back!</h2>
                    <p>Sign in to access your dashboard, manage projects, and connect with your team.</p>
                    <div className="log-auth-visual-graphic">🚀</div>
                </div>
            </div>

            <div className="log-auth-form-container">
                <div className="log-auth-form">
                    <div className="log-auth-form-header">
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--gray-900)', textDecoration: 'none' }}>
                            <span style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '14px' }}>I2</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px' }}>Idea2Team</span>
                        </Link>
                        <h1>Sign In</h1>
                        <p>Enter your credentials to access your account</p>
                    </div>

                    <div className="log-form-group">
                        <label className="log-form-label">Email Address</label>
                        <input id="login_email" type="email" className="log-form-input" placeholder="Enter your email" />
                    </div>

                    <div className="log-form-group">
                        <label className="log-form-label">Password</label>
                        <div style={{ position: "relative" }}>
                            <input
                                id="login_password"
                                type={showPassword ? "text" : "password"}
                                className="log-form-input"
                                placeholder="Enter your password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    right: "25px",
                                    color: "blue",
                                    marginTop: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--gray-600)', cursor: 'pointer' }}>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#forgot" style={{ fontSize: '14px', color: 'var(--primary-600)', fontWeight: '600' }}>Forgot password?</a>
                    </div>
                    <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={handleLogin}>Sign In</Button>

                    <div className="log-auth-divider">or</div>

                    <Button variant="secondary" size="lg" style={{ width: '100%', marginBottom: '8px' }}>
                        🔵 Continue with Google
                    </Button>
                    <Button variant="secondary" size="lg" style={{ width: '100%' }}>
                        ⚫ Continue with GitHub
                    </Button>

                    <p className="log-auth-footer">
                        Don't have an account? <Link to="/register">Create one</Link>
                    </p>
                    <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px' }}>
                        <a href="http://localhost:3001" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Admin Login →</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
