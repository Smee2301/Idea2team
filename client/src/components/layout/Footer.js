import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="footer-brand-logo">
                        <span className="brand-icon">I2</span>
                        Idea2Team
                    </div>
                    <p>
                        The ultimate platform connecting visionary founders with world-class freelancers.
                        Build your dream team, launch your startup, and scale with confidence.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Platform</h4>
                    <Link to="/freelancer/browse">Browse Projects</Link>
                    <Link to="/register">Find Talent</Link>
                    <Link to="/">How It Works</Link>
                    <Link to="/">Pricing</Link>
                </div>

                <div className="footer-column">
                    <h4>Company</h4>
                    <Link to="/">About Us</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Contact</Link>
                </div>

                <div className="footer-column">
                    <h4>Support</h4>
                    <Link to="/">Help Center</Link>
                    <Link to="/">Terms of Service</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Trust & Safety</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Idea2Team. All rights reserved.</p>
                <div className="footer-social">
                    <a href="#twitter" aria-label="Twitter">𝕏</a>
                    <a href="#linkedin" aria-label="LinkedIn">in</a>
                    <a href="#github" aria-label="GitHub">⌨</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
