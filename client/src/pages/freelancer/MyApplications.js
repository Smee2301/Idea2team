import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Avatar from '../../components/common/Avatar';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';
import axios from 'axios';

const MyApplications = () => {
    const [applications, setApplications] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const filters = ['All', 'pending', 'accepted', 'rejected'];

    useEffect(() => {
        const freelancerId = localStorage.getItem("user_id");
        if (!freelancerId) {
            setLoading(false);
            return;
        }

        axios.get(`http://localhost:5000/api/my-applications/${freelancerId}`)
            .then(res => {
                if (res.data.success) {
                    setApplications(res.data.data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching applications:", err);
                setLoading(false);
            });
    }, []);

    // Filter applications based on active filter
    const displayApps = activeFilter === 'All' 
        ? applications 
        : applications.filter(a => a.status === activeFilter);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

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
                            style={{ textTransform: 'capitalize' }}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>Loading applications...</div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {displayApps.map(app => (
                        <div className="application-card" key={app.application_id}>
                            <Avatar initials={app.founder_name?.charAt(0) || 'F'} color="#4f46e5" size="md" />
                            <div className="application-info">
                                <p className="application-title">{app.project_title}</p>
                                <p className="application-project">Expected Salary: ₹{app.expected_salary}</p>
                                <p className="application-date">Applied on {formatDate(app.applied_at)}</p>
                            </div>
                            <StatusBadge status={app.status} />
                            <div className="application-actions">
                                <Button variant="ghost" size="sm">Details</Button>
                                {app.status === 'accepted' && (
                                    <Button variant="primary" size="sm">Go to Workspace</Button>
                                )}
                            </div>
                        </div>
                    ))}

                    {displayApps.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                            <p style={{ fontSize: '48px', marginBottom: '12px' }}>📤</p>
                            <p>No applications found.</p>
                        </div>
                    )}
                </div>
            )}
        </DashboardLayout>
    );
};

export default MyApplications;
