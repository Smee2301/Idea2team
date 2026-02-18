import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import DataTable from '../../components/tables/DataTable';
import Avatar from '../../components/common/Avatar';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';
import SearchBar from '../../components/common/SearchBar';
import { users } from '../../data/dummyData';

const ManageUsers = () => {
    return (
        <DashboardLayout role="admin">
            <div className="page-header">
                <div>
                    <h1>Manage Users</h1>
                    <p>View and manage all registered users on the platform.</p>
                </div>
                <Button variant="primary">+ Add User</Button>
            </div>

            <div className="filter-bar">
                <SearchBar placeholder="Search by name or email..." />
                <div className="filter-chips">
                    {['All', 'Founder', 'Freelancer'].map(f => (
                        <button key={f} className="filter-chip active">{f}</button>
                    ))}
                </div>
            </div>

            <DataTable
                columns={['User', 'Role', 'Status', 'Joined', 'Actions']}
                data={users}
                renderRow={(user, i) => (
                    <tr key={i}>
                        <td>
                            <div className="table-user-cell">
                                <Avatar initials={user.initials} color={user.color} size="sm" />
                                <div>
                                    <p className="user-name">{user.name}</p>
                                    <p className="user-email">{user.email}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-primary">{user.role}</span>
                        </td>
                        <td>
                            <StatusBadge status={user.status} />
                        </td>
                        <td>{user.joinDate}</td>
                        <td>
                            <div className="table-actions">
                                <Button variant="ghost" size="sm">View</Button>
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="danger" size="sm">Ban</Button>
                            </div>
                        </td>
                    </tr>
                )}
            />
        </DashboardLayout>
    );
};

export default ManageUsers;
