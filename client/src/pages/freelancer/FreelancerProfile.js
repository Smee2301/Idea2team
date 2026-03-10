import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';

const FreelancerProfile = () => {
    return (
        <DashboardLayout role="freelancer">
            <div className="page-header">
                <div>
                    <h1>👩‍💻 My Profile</h1>
                    <p>Showcase your skills and attract the right projects.</p>
                </div>
                <Button variant="primary">Save Changes</Button>
            </div>

            <div className="profile-page">
                <div className="profile-header-card">
                    <div className="profile-cover profile-cover-freelancer"></div>
                    <div className="profile-avatar-section">
                        <div className="profile-avatar-large profile-avatar-freelancer">SC</div>
                        <div className="profile-user-info">
                            <h2>Sarah Chen</h2>
                            <p>Full-Stack Developer & UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="profile-details">
                        <div className="profile-details-list">
                            <span>📍 New York, NY</span>
                            <span>💼 5 years experience</span>
                            <span>📅 Joined Feb 2026</span>
                            <span>⭐ 4.9 Rating (28 reviews)</span>
                        </div>
                    </div>
                </div>

                <div className="form-card">
                    <div className="form-section">
                        <div className="form-section-header">
                            <span className="form-section-icon">👤</span>
                            <div>
                                <h3 className="form-section-title">Personal Information</h3>
                                <p className="form-section-desc">Update your profile to stand out to founders.</p>
                            </div>
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-input" defaultValue="Sarah" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-input" defaultValue="Chen" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Professional Title</label>
                            <input type="text" className="form-input" defaultValue="Full-Stack Developer & UI/UX Designer" />
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" defaultValue="sarah@freelance.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Location</label>
                                <input type="text" className="form-input" defaultValue="New York, NY" />
                            </div>
                        </div>
                        <div className="form-group form-group-half">
                            <label className="form-label">Hourly Rate</label>
                            <input type="text" className="form-input" defaultValue="$85/hr" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Bio</label>
                            <textarea className="form-input form-textarea" defaultValue="Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in React, Node.js, and cloud infrastructure. I love creating beautiful, performant user interfaces backed by robust architecture."></textarea>
                        </div>
                    </div>

                    <div className="form-section form-section-spaced">
                        <div className="form-section-header">
                            <span className="form-section-icon">⚡</span>
                            <div>
                                <h3 className="form-section-title">Skills & Expertise</h3>
                                <p className="form-section-desc">Add your key skills to get matched with the right projects.</p>
                            </div>
                        </div>
                        <div className="skills-container">
                            {['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Figma', 'TensorFlow', 'Next.js'].map((s, i) => (
                                <span key={i} className="skill-tag">
                                    {s}
                                    <span className="skill-remove-btn">✕</span>
                                </span>
                            ))}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-input" placeholder="Add a new skill and press Enter..." />
                        </div>
                    </div>

                    <div className="form-section form-section-last form-section-spaced">
                        <div className="form-section-header">
                            <span className="form-section-icon">💼</span>
                            <div>
                                <h3 className="form-section-title">Portfolio</h3>
                                <p className="form-section-desc">Showcase your best work to potential clients.</p>
                            </div>
                        </div>
                        <div className="portfolio-grid">
                            {[
                                { title: 'E-commerce Dashboard', desc: 'Modern analytics dashboard with real-time data visualization', tech: 'React, D3.js, Node.js' },
                                { title: 'HealthTrack Mobile App', desc: 'Cross-platform fitness tracking application', tech: 'React Native, Firebase' },
                                { title: 'AI Chatbot Platform', desc: 'Enterprise chatbot with NLP capabilities', tech: 'Python, TensorFlow, React' },
                            ].map((item, i) => (
                                <div key={i} className="portfolio-card">
                                    <div className="portfolio-card-img">
                                        🖼️
                                    </div>
                                    <h4 className="portfolio-card-title">{item.title}</h4>
                                    <p className="portfolio-card-desc">{item.desc}</p>
                                    <p className="portfolio-card-tech">{item.tech}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline">+ Add Portfolio Item</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FreelancerProfile;