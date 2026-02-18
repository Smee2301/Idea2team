import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Avatar from '../../components/common/Avatar';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';
import { applications } from '../../data/dummyData';

const MyApplications = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Under Review', 'Shortlisted', 'Accepted', 'Rejected'];

    // Filter applications based on active filter
    const displayApps = activeFilter === 'All' ? applications : applications.filter(a => a.status === activeFilter);

    return (
        <DashboardLayout role="freelancer">
            <div className="page-header">
                <div>
                    <h1>My Applications</h1>
                    <p>Track all your project applications and their status.</p>
                </div>
            </div>

            <div className="filter-bar">
                <div className="filter-chips">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {displayApps.map(app => (
                    <div className="application-card" key={app.id}>
                        <Avatar initials={app.freelancerInitials} color="#4f46e5" size="md" />
                        <div className="application-info">
                            <p className="application-title">{app.project}</p>
                            <p className="application-project">Bid: {app.bid}</p>
                            <p className="application-date">Applied on {app.date}</p>
                        </div>
                        <StatusBadge status={app.status} />
                        <div className="application-actions">
                            <Button variant="ghost" size="sm">Details</Button>
                            {app.status === 'Accepted' && (
                                <Button variant="primary" size="sm">Go to Workspace</Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {displayApps.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                    <p style={{ fontSize: '48px', marginBottom: '12px' }}>📤</p>
                    <p>No applications found for this filter.</p>
                </div>
            )}
        </DashboardLayout>
    );
};

export default MyApplications;
