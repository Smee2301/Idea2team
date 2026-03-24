import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../styles/Register.css';

const Register = () => {
    function handleSubmit() {
        const role = document.querySelector('input[name="role"]:checked')?.value;
        const full_name = document.querySelector("#full_name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const phone = document.querySelector("#phone").value;

        if (!role || !full_name || !email || !password || !phone) {
            return Swal.fire("Error", "Please fill in all the required fields.", "error");
        }

        axios.post("http://localhost:5000/api/register", {
            role,
            full_name,
            email,
            password,
            phone
        }).then((res) => {
            return Swal.fire("Success", "Your account has been created successfully!", "success").then(() => {
                window.location.href = "/login";
            });
        }).catch((err) => {
            console.error(err);
            return Swal.fire("Error", err.response?.data?.message || "An error occurred while creating your account. Please try again.", "error");
        })
    }
    return (
        <div className="reg-auth-page">
            <div className="reg-auth-visual">
                <div className="reg-auth-visual-content">
                    <h2>Join Idea2Team</h2>
                    <p>Create your account and start building or finding opportunities on the best freelancer platform.</p>
                    <div className="reg-auth-visual-graphic">💡</div>
                </div>
            </div>

            <div className="reg-auth-form-container">
                <div className="reg-auth-form">
                    <div className="reg-auth-form-header">
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--gray-900)', textDecoration: 'none' }}>
                            <span style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '14px' }}>I2</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px' }}>Idea2Team</span>
                        </Link>
                        <h1>Create Account</h1>
                        <p>Choose your role and get started in minutes</p>
                    </div>

                    <div className="reg-role-selector">
                        <label className="reg-role-option">
                            <input type="radio" name="role" value="founder" defaultChecked />
                            <div className="reg-role-option-icon">🏢</div>
                            <div className="reg-role-option-label">I'm a Founder</div>
                            <p style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '4px' }}>Post projects & hire talent</p>
                        </label>
                        <label className="reg-role-option">
                            <input type="radio" name="role" value="freelancer" />
                            <div className="reg-role-option-icon">💻</div>
                            <div className="reg-role-option-label">I'm a Freelancer</div>
                            <p style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '4px' }}>Find projects & earn money</p>
                        </label>
                    </div>

                    <div className="reg-form-group">
                        <label className="reg-form-label">Full Name</label>
                        <input id="full_name" type="text" className="reg-form-input" placeholder="Enter your full name" />
                    </div>

                    <div className="reg-form-group">
                        <label className="reg-form-label">Email Address</label>
                        <input id="email" type="email" className="reg-form-input" placeholder="Enter Your Email" />
                    </div>
                    <div className="reg-form-group">
                        <label className="reg-form-label">Password</label>
                        <input id="password" type="password" className="reg-form-input" placeholder="Create a strong password" />
                        <p style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '4px' }}>Must be at least 8 characters with a number and special character</p>
                    </div>
                    <div className="reg-form-group">
                        <label className="reg-form-label">Phone Number</label>
                        <input id="phone" type="tel" className="reg-form-input" placeholder="Enter your phone number" />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--gray-600)', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ marginTop: '2px' }} />
                            I agree to the <a href="#terms" style={{ color: 'var(--primary-600)' }}>Terms of Service</a> and <a href="#privacy" style={{ color: 'var(--primary-600)' }}>Privacy Policy</a>
                        </label>
                    </div>
                    <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={handleSubmit} required>Create Account</Button>

                    <div className="reg-auth-divider">or</div>

                    <Button variant="secondary" size="lg" style={{ width: '100%', marginBottom: '8px' }}>
                        🔵 Sign up with Google
                    </Button>

                    <p className="reg-auth-footer">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
