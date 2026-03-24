import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/cards/StatsCard';
import ProjectCard from '../../components/cards/ProjectCard';
import { founderStats, projects, recentActivity } from '../../data/dummyData';
import '../../styles/FounderOverview.css';

const FounderOverview = () => {
    return (
        <DashboardLayout role="founder">
            <div className="foo-page-header">
                <div>
                    <h1>Welcome back, Alex! 👋</h1>
                    <p>Here's what's happening with your projects today.</p>
                </div>
            </div>

            <div className="foo-stats-grid">
                {founderStats.map((stat, i) => (
                    <StatsCard key={i} {...stat} />
                ))}
            </div>

            <div className="foo-content-grid">
                <div>
                    <div className="foo-card">
                        <div className="foo-card-header">
                            <h3 className="foo-card-title">Recent Projects</h3>
                            <a href="/founder/projects" style={{ fontSize: '14px', fontWeight: '600', color: '#4f46e5' }}>View All →</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {projects.slice(0, 3).map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="foo-card">
                        <div className="foo-card-header">
                            <h3 className="foo-card-title">Recent Activity</h3>
                        </div>
                        <div className="foo-activity-list">
                            {recentActivity.map((item, i) => (
                                <div className="foo-activity-item" key={i}>
                                    <div className="foo-activity-dot" style={{ background: item.color }}></div>
                                    <div className="foo-activity-content">
                                        <p className="foo-activity-text" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                        <span className="foo-activity-time">{item.time}</span>
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
