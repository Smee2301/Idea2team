import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Avatar from '../../components/common/Avatar';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';
import SearchBar from '../../components/common/SearchBar';
import { applications } from '../../data/dummyData';

const Applications = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Under Review', 'Shortlisted', 'Accepted', 'Rejected'];

    const filteredApps = activeFilter === 'All'
        ? applications
        : applications.filter(a => a.status === activeFilter);

    return (
        <DashboardLayout role="founder">
            <div className="page-header">
                <div>
                    <h1>Applications</h1>
                    <p>Review and manage applications from freelancers.</p>
                </div>
            </div>

            <div className="filter-bar">
                <SearchBar placeholder="Search applications..." />
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
                {filteredApps.map(app => (
                    <div className="application-card" key={app.id}>
                        <Avatar initials={app.freelancerInitials} color="#4f46e5" size="md" />
                        <div className="application-info">
                            <p className="application-title">{app.freelancer}</p>
                            <p className="application-project">Applied to: {app.project}</p>
                            <p className="application-date">Bid: {app.bid} • {app.date}</p>
                        </div>
                        <StatusBadge status={app.status} />
                        <div className="application-actions">
                            <Button variant="ghost" size="sm">View</Button>
                            {app.status === 'Under Review' && (
                                <>
                                    <Button variant="primary" size="sm">Accept</Button>
                                    <Button variant="outline" size="sm">Reject</Button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {filteredApps.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                    <p style={{ fontSize: '48px', marginBottom: '12px' }}>📨</p>
                    <p>No applications found for this filter.</p>
                </div>
            )}
        </DashboardLayout>
    );
};

export default Applications;
