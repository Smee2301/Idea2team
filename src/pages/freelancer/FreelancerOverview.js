import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/cards/StatsCard';
import ProjectCard from '../../components/cards/ProjectCard';
import { freelancerStats, projects, recentActivity } from '../../data/dummyData';

const FreelancerOverview = () => {
    return (
        <DashboardLayout role="freelancer">
            <div className="page-header">
                <div>
                    <h1>Welcome back, Sarah! 👋</h1>
                    <p>Here's your freelance activity overview.</p>
                </div>
            </div>

            <div className="stats-grid">
                {freelancerStats.map((stat, i) => (
                    <StatsCard key={i} {...stat} />
                ))}
            </div>

            <div className="content-grid">
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Recommended Projects</h3>
                            <a href="/freelancer/browse" style={{ fontSize: '14px', fontWeight: '600' }}>Browse All →</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {projects.filter(p => p.status === 'Active').slice(0, 3).map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Recent Activity</h3>
                        </div>
                        <div className="activity-list">
                            {recentActivity.map((item, i) => (
                                <div className="activity-item" key={i}>
                                    <div className="activity-dot" style={{ background: item.color }}></div>
                                    <div className="activity-content">
                                        <p className="activity-text" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        <span className="activity-time">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card" style={{ marginTop: '24px' }}>
                        <div className="card-header">
                            <h3 className="card-title">Your Skills</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['React', 'Node.js', 'Python', 'Figma', 'PostgreSQL', 'AWS', 'Docker', 'TensorFlow'].map((s, i) => (
                                <span key={i} className="skill-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FreelancerOverview;
