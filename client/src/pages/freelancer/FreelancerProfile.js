import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';

const FreelancerProfile = () => {
    return (
        <DashboardLayout role="freelancer">
            <div className="page-header">
                <div>
                    <h1>My Profile</h1>
                    <p>Showcase your skills and attract the right projects.</p>
                </div>
                <Button variant="primary">Save Changes</Button>
            </div>

            <div className="profile-page">
                <div className="profile-header-card">
                    <div className="profile-cover" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}></div>
                    <div className="profile-avatar-section">
                        <div className="profile-avatar-large" style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>SC</div>
                        <div className="profile-user-info">
                            <h2>Sarah Chen</h2>
                            <p>Full-Stack Developer & UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="profile-details">
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '14px', color: 'var(--gray-500)' }}>
                            <span>📍 New York, NY</span>
                            <span>💼 5 years experience</span>
                            <span>📅 Joined Feb 2026</span>
                            <span>⭐ 4.9 Rating (28 reviews)</span>
                        </div>
                    </div>
                </div>

                <div className="form-card">
                    <h2>Personal Information</h2>
                    <p>Update your profile to stand out to founders.</p>
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
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" defaultValue="sarah@freelance.com" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-input" defaultValue="New York, NY" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Hourly Rate</label>
                        <input type="text" className="form-input" defaultValue="$85/hr" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Bio</label>
                        <textarea className="form-input form-textarea" defaultValue="Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in React, Node.js, and cloud infrastructure. I love creating beautiful, performant user interfaces backed by robust architecture."></textarea>
                    </div>
                </div>

                <div className="form-card" style={{ marginTop: '24px' }}>
                    <h2>Skills & Expertise</h2>
                    <p>Add your key skills to get matched with the right projects.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                        {['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Figma', 'TensorFlow', 'Next.js'].map((s, i) => (
                            <span key={i} className="skill-tag" style={{ padding: '6px 14px', fontSize: '13px' }}>{s} ✕</span>
                        ))}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-input" placeholder="Add a new skill..." />
                    </div>
                </div>

                <div className="form-card" style={{ marginTop: '24px' }}>
                    <h2>Portfolio</h2>
                    <p>Showcase your best work to potential clients.</p>
                    <div className="projects-grid" style={{ marginBottom: '16px' }}>
                        {[
                            { title: 'E-commerce Dashboard', desc: 'Modern analytics dashboard with real-time data visualization', tech: 'React, D3.js, Node.js' },
                            { title: 'HealthTrack Mobile App', desc: 'Cross-platform fitness tracking application', tech: 'React Native, Firebase' },
                            { title: 'AI Chatbot Platform', desc: 'Enterprise chatbot with NLP capabilities', tech: 'Python, TensorFlow, React' },
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ padding: '20px' }}>
                                <div style={{ height: '120px', background: 'var(--gray-100)', borderRadius: '12px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-400)' }}>
                                    🖼️ Project Preview
                                </div>
                                <h4 style={{ fontSize: '15px', marginBottom: '4px' }}>{item.title}</h4>
                                <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '8px' }}>{item.desc}</p>
                                <p style={{ fontSize: '12px', color: 'var(--primary-600)' }}>{item.tech}</p>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline">+ Add Portfolio Item</Button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FreelancerProfile;
