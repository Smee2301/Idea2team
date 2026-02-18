import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';

const Reports = () => {
    const reportCards = [
        { title: 'User Growth', icon: '👥', desc: 'Monthly user registration trends and growth metrics.' },
        { title: 'Revenue Analytics', icon: '💰', desc: 'Platform revenue breakdown and payment analytics.' },
        { title: 'Project Metrics', icon: '📊', desc: 'Project completion rates, budgets, and category breakdown.' },
        { title: 'User Satisfaction', icon: '⭐', desc: 'User ratings, reviews, and satisfaction scores.' },
    ];

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
                    { label: 'Total Revenue', value: '$128,400', bg: '#eef2ff' },
                    { label: 'Avg. Project Value', value: '$12,400', bg: '#f0fdf4' },
                    { label: 'Completion Rate', value: '87%', bg: '#faf5ff' },
                    { label: 'User Satisfaction', value: '4.8/5', bg: '#fffbeb' },
                ].map((s, i) => (
                    <div key={i} style={{ background: s.bg, padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                        <p style={{ fontSize: '13px', color: 'var(--gray-600)', marginBottom: '8px', fontWeight: '500' }}>{s.label}</p>
                        <p style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--gray-900)' }}>{s.value}</p>
                    </div>
                ))}
            </div>

            {/* Report Charts */}
            <div className="reports-grid">
                {reportCards.map((report, i) => (
                    <div className="report-card" key={i}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>{report.icon}</span> {report.title}
                            </h3>
                            <Button variant="ghost" size="sm">Export ↓</Button>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '16px' }}>{report.desc}</p>
                        <div className="chart-placeholder">
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '32px', marginBottom: '4px' }}>📈</p>
                                <p>{report.title} Visualization</p>
                            </div>
                        </div>
                    </div>
                ))}
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
