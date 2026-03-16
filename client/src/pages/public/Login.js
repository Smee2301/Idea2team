import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from "react";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    function handleLogin() {
        const email = document.querySelector("#login_email").value;
        const password = document.querySelector("#login_password").value;
        const role = document.querySelector('input[name="role"]:checked')?.value;

        if (!email || !password || !role) {
            return Swal.fire("Error", "Enter your email, password, and select your role.");
        }
        axios.post("http://localhost:5000/api/login", {
            email,
            password,
            role
        }).then((res) => {
            //i need condition here if role is freelacer and try to login in founder then meassage show 
            Swal.fire("Success", "Login successful!", "success");

            // Save user details to localStorage
            localStorage.setItem("user_id", res.data.user.user_id);
            localStorage.setItem("role", res.data.user.role);

           
            // Redirect based on role
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
                    // icon: "error", //this is used to show error icon
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
        <div className="auth-page">
            <div className="auth-visual">
                <div className="auth-visual-content">
                    <h2>Welcome Back!</h2>
                    <p>Sign in to access your dashboard, manage projects, and connect with your team.</p>
                    <div className="auth-visual-graphic">🚀</div>
                </div>
            </div>

            <div className="auth-form-container">
                <div className="auth-form">
                    <div className="auth-form-header">
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--gray-900)', textDecoration: 'none' }}>
                            <span style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '14px' }}>I2</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px' }}>Idea2Team</span>
                        </Link>
                        <h1>Sign In</h1>
                        <p>Enter your credentials to access your account</p>
                    </div>

                    {/* Role Selector */}
                    <div className="role-selector">
                        <label className="role-option">
                            <input type="radio" name="role" value="founder" defaultChecked />
                            <div className="role-option-icon">🏢</div>
                            <div className="role-option-label">I'm a Founder</div>
                            <p style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '4px' }}>Post projects & hire talent</p>
                        </label>
                        <label className="role-option">
                            <input type="radio" name="role" value="freelancer" />
                            <div className="role-option-icon">💻</div>
                            <div className="role-option-label">I'm a Freelancer</div>
                            <p style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '4px' }}>Find projects & earn money</p>
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input id="login_email" type="email" className="form-input" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>

                        <div style={{ position: "relative" }}>
                            <input
                                id="login_password"
                                type={showPassword ? "text" : "password"}
                                className="form-input"
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

                    <div className="auth-divider">or</div>

                    <Button variant="secondary" size="lg" style={{ width: '100%', marginBottom: '8px' }}>
                        🔵 Continue with Google
                    </Button>
                    <Button variant="secondary" size="lg" style={{ width: '100%' }}>
                        ⚫ Continue with GitHub
                    </Button>

                    <p className="auth-footer">
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
