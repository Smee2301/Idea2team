import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/cards/StatsCard';
import { adminStats, recentActivity } from '../../data/dummyData';

const AdminOverview = () => {
    return (
        <DashboardLayout role="admin">
            <div className="page-header">
                <div>
                    <h1>Admin Dashboard</h1>
                    <p>Platform overview and key metrics at a glance.</p>
                </div>
            </div>

            <div className="stats-grid">
                {adminStats.map((stat, i) => (
                    <StatsCard key={i} {...stat} />
                ))}
            </div>

            <div className="content-grid">
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Platform Analytics</h3>
                        </div>
                        <div className="chart-placeholder" style={{ height: '300px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '40px', marginBottom: '8px' }}>📈</p>
                                <p>Revenue & User Growth Chart</p>
                                <p style={{ fontSize: '12px', marginTop: '4px' }}>Interactive chart visualization area</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ marginTop: '24px' }}>
                        <div className="card-header">
                            <h3 className="card-title">Project Distribution</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                            {[
                                { label: 'Web Development', count: 142, pct: '41%', color: '#4f46e5' },
                                { label: 'Mobile App', count: 68, pct: '20%', color: '#7c3aed' },
                                { label: 'Design', count: 52, pct: '15%', color: '#ec4899' },
                                { label: 'Data & Analytics', count: 38, pct: '11%', color: '#059669' },
                                { label: 'Blockchain', count: 25, pct: '7%', color: '#ea580c' },
                                { label: 'Other', count: 17, pct: '5%', color: '#64748b' },
                            ].map((cat, i) => (
                                <div key={i} style={{ padding: '16px', borderRadius: '12px', background: 'var(--gray-50)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--gray-700)' }}>{cat.label}</span>
                                        <span style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{cat.pct}</span>
                                    </div>
                                    <div style={{ height: '4px', background: 'var(--gray-200)', borderRadius: '99px', overflow: 'hidden' }}>
                                        <div style={{ width: cat.pct, height: '100%', background: cat.color, borderRadius: '99px' }}></div>
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '6px' }}>{cat.count} projects</p>
                                </div>
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
                            <h3 className="card-title">Quick Stats</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'Avg. Project Budget', value: '$12,400' },
                                { label: 'Active Freelancers', value: '1,847' },
                                { label: 'Active Founders', value: '1,000' },
                                { label: 'Projects This Month', value: '67' },
                                { label: 'Avg. Rating', value: '4.8 ⭐' },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--gray-100)' }}>
                                    <span style={{ fontSize: '14px', color: 'var(--gray-600)' }}>{item.label}</span>
                                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-900)' }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminOverview;
