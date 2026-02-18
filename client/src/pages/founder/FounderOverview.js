import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/cards/StatsCard';
import ProjectCard from '../../components/cards/ProjectCard';
import { founderStats, projects, recentActivity } from '../../data/dummyData';

const FounderOverview = () => {
    return (
        <DashboardLayout role="founder">
            <div className="page-header">
                <div>
                    <h1>Welcome back, Alex! 👋</h1>
                    <p>Here's what's happening with your projects today.</p>
                </div>
            </div>

            <div className="stats-grid">
                {founderStats.map((stat, i) => (
                    <StatsCard key={i} {...stat} />
                ))}
            </div>

            <div className="content-grid">
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Recent Projects</h3>
                            <a href="/founder/projects" style={{ fontSize: '14px', fontWeight: '600' }}>View All →</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {projects.slice(0, 3).map(project => (
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
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FounderOverview;
