import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const Register = () => {
    function handleSubmit() {

    }
    return (
        <div className="auth-page">
            <div className="auth-visual">
                <div className="auth-visual-content">
                    <h2>Join Idea2Team</h2>
                    <p>Create your account and start building or finding opportunities on the best freelancer platform.</p>
                    <div className="auth-visual-graphic">💡</div>
                </div>
            </div>

            <div className="auth-form-container">
                <div className="auth-form">
                    <div className="auth-form-header">
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--gray-900)', textDecoration: 'none' }}>
                            <span style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800', fontSize: '14px' }}>I2</span>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px' }}>Idea2Team</span>
                        </Link>
                        <h1>Create Account</h1>
                        <p>Choose your role and get started in minutes</p>
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

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input id="full_name" type="text" className="form-input" placeholder="Enter your full name" />
                        </div>

                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-input" placeholder="alex@idea2team.com" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-input" placeholder="Create a strong password" />
                        <p className="form-helper">Must be at least 8 characters with a number and special character</p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--gray-600)', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ marginTop: '2px' }} />
                            I agree to the <a href="#terms" style={{ color: 'var(--primary-600)' }}>Terms of Service</a> and <a href="#privacy" style={{ color: 'var(--primary-600)' }}>Privacy Policy</a>
                        </label>
                    </div>
                    <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={handleSubmit}>Create Account</Button>

                    <div className="auth-divider">or</div>

                    <Button variant="secondary" size="lg" style={{ width: '100%', marginBottom: '8px' }}>
                        🔵 Sign up with Google
                    </Button>

                    <p className="auth-footer">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
