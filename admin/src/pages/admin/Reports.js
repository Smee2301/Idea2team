import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';
import axios from 'axios';

const Reports = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalProjects: 0,
        activeProjects: 0,
        completedProjects: 0
    });
    const [reportData, setReportData] = useState({
        categories: [],
        statuses: [],
        userGrowth: []
    });

    useEffect(() => {
        // Fetch overall stats
        axios.get('http://localhost:5000/api/admin/stats')
            .then(res => setStats(res.data))
            .catch(err => console.error('Error fetching stats:', err));

        // Fetch detailed reports
        axios.get('http://localhost:5000/api/admin/reports')
            .then(res => setReportData(res.data))
            .catch(err => console.error('Error fetching reports:', err));
    }, []);

    return (
        <DashboardLayout role="admin">
            <div className="page-header">
                <div>
                    <h1>Reports</h1>
                    <p>View platform analytics and generate reports.</p>
                </div>
                <Button variant="primary">📥 Export All</Button>
            </div>

            {/* Summary Cards */}
            <div className="stats-grid" style={{ marginBottom: '32px' }}>
                {[
                    { label: 'Total Platform Users', value: stats.totalUsers, bg: '#eef2ff' },
                    { label: 'Total Projects Posted', value: stats.totalProjects, bg: '#f0fdf4' },
                    { label: 'Active Projects', value: stats.activeProjects, bg: '#faf5ff' },
                    { label: 'Completed Projects', value: stats.completedProjects, bg: '#fffbeb' },
                ].map((s, i) => (
                    <div key={i} style={{ background: s.bg, padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                        <p style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '8px', fontWeight: '500' }}>{s.label}</p>
                        <p style={{ fontSize: '28px', fontWeight: '800', color: 'var(--gray-900)' }}>{s.value}</p>
                    </div>
                ))}
            </div>

            {/* Report Charts & Data */}
            <div className="reports-grid">
                {/* Categories Breakdown */}
                <div className="report-card">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h3>📂 Top Project Categories</h3>
                        <Button variant="ghost" size="sm">Details →</Button>
                    </div>
                    <div className="activity-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                        {reportData.categories.map((cat, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', background: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🏷️</div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '14px', fontWeight: '600' }}>{cat.category}</p>
                                    <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', marginTop: '4px' }}>
                                        <div style={{ width: `${(cat.count / stats.totalProjects) * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: '3px' }}></div>
                                    </div>
                                </div>
                                <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{cat.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Growth */}
                <div className="report-card">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <h3>📈 New Registrations</h3>
                        <Button variant="ghost" size="sm">Growth Details →</Button>
                    </div>
                    <div className="activity-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {reportData.userGrowth.map((trend, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
                                <span style={{ fontSize: '13px', color: 'var(--gray-500)', width: '80px' }}>{trend.month}</span>
                                <div style={{ flex: 1, height: '12px', background: '#f0f9ff', borderRadius: '6px', overflow: 'hidden' }}>
                                    <div style={{ width: `${(trend.count / (stats.totalUsers / 4)) * 100}%`, height: '100%', background: '#0ea5e9' }}></div>
                                </div>
                                <span style={{ fontWeight: '700' }}>{trend.count} Joiners</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Reports */}
            <div className="card" style={{ marginTop: '32px' }}>
                <div className="card-header">
                    <h3 className="card-title">Generated Reports</h3>
                    <Button variant="primary" size="sm">+ Generate New</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                        { name: 'Monthly Revenue Report - January 2026', date: 'Feb 02, 2026', format: 'PDF', size: '2.4 MB' },
                        { name: 'User Growth Analysis - Q4 2025', date: 'Jan 15, 2026', format: 'XLSX', size: '1.8 MB' },
                        { name: 'Project Metrics Summary - 2025', date: 'Jan 05, 2026', format: 'PDF', size: '5.2 MB' },
                        { name: 'Platform Health Check - December', date: 'Jan 01, 2026', format: 'PDF', size: '890 KB' },
                    ].map((r, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', borderRadius: '12px', background: 'var(--gray-50)' }}>
                            <span style={{ fontSize: '24px' }}>📄</span>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-800)' }}>{r.name}</p>
                                <p style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{r.date} • {r.format} • {r.size}</p>
                            </div>
                            <Button variant="outline" size="sm">Download</Button>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Reports;
