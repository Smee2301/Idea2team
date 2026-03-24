import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/cards/StatsCard';
import ProjectCard from '../../components/cards/ProjectCard';
import { freelancerStats, projects, recentActivity } from '../../data/dummyData';
import '../../styles/FreelancerOverview.css';

const FreelancerOverview = () => {
    return (
        <DashboardLayout role="freelancer">
            <div className="fro-page-header">
                <div>
                    <h1>Welcome back, Sarah! 👋</h1>
                    <p>Here's your freelance activity overview.</p>
                </div>
            </div>

            <div className="fro-stats-grid">
                {freelancerStats.map((stat, i) => (
                    <StatsCard key={i} {...stat} />
                ))}
            </div>

            <div className="fro-content-grid">
                <div>
                    <div className="fro-card">
                        <div className="fro-card-header">
                            <h3 className="fro-card-title">Recommended Projects</h3>
                            <a href="/freelancer/browse" style={{ fontSize: '14px', fontWeight: '600', color: '#4f46e5' }}>Browse All →</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {projects.filter(p => p.status === 'Active').slice(0, 3).map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="fro-card">
                        <div className="fro-card-header">
                            <h3 className="fro-card-title">Recent Activity</h3>
                        </div>
                        <div className="fro-activity-list">
                            {recentActivity.map((item, i) => (
                                <div className="fro-activity-item" key={i}>
                                    <div className="fro-activity-dot" style={{ background: item.color }}></div>
                                    <div className="fro-activity-content">
                                        <p className="fro-activity-text" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        <span className="fro-activity-time">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="fro-card" style={{ marginTop: '24px' }}>
                        <div className="fro-card-header">
                            <h3 className="fro-card-title">Your Skills</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['React', 'Node.js', 'Python', 'Figma', 'PostgreSQL', 'AWS', 'Docker', 'TensorFlow'].map((s, i) => (
                                <span key={i} className="fro-skill-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FreelancerOverview;
