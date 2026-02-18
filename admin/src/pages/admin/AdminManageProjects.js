import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import DataTable from '../../components/tables/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';
import SearchBar from '../../components/common/SearchBar';
import { projects } from '../../data/dummyData';

const AdminManageProjects = () => {
    return (
        <DashboardLayout role="admin">
            <div className="page-header">
                <div>
                    <h1>Manage Projects</h1>
                    <p>Review and moderate all projects on the platform.</p>
                </div>
            </div>

            <div className="filter-bar">
                <SearchBar placeholder="Search projects..." />
                <div className="filter-chips">
                    {['All', 'Active', 'Pending', 'Completed'].map(f => (
                        <button key={f} className="filter-chip active">{f}</button>
                    ))}
                </div>
            </div>

            <DataTable
                columns={['Project', 'Founder', 'Category', 'Budget', 'Status', 'Applications', 'Actions']}
                data={projects}
                renderRow={(project, i) => (
                    <tr key={i}>
                        <td>
                            <div>
                                <p style={{ fontWeight: '600', color: 'var(--gray-900)' }}>{project.title}</p>
                                <p style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{project.company}</p>
                            </div>
                        </td>
                        <td>{project.founder}</td>
                        <td><span className="badge badge-info">{project.category}</span></td>
                        <td style={{ fontWeight: '600' }}>{project.budget}</td>
                        <td><StatusBadge status={project.status} /></td>
                        <td>{project.applications}</td>
                        <td>
                            <div className="table-actions">
                                <Button variant="ghost" size="sm">View</Button>
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="danger" size="sm">Remove</Button>
                            </div>
                        </td>
                    </tr>
                )}
            />
        </DashboardLayout>
    );
};

export default AdminManageProjects;
