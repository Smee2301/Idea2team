import React from 'react';

const StatusBadge = ({ status, className = '' }) => {
    const statusMap = {
        'Active': 'badge-active',
        'Completed': 'badge-success',
        'Pending': 'badge-pending',
        'Under Review': 'badge-warning',
        'Shortlisted': 'badge-info',
        'Accepted': 'badge-success',
        'Rejected': 'badge-danger',
        'Closed': 'badge-closed',
        'Suspended': 'badge-danger',
        'In Progress': 'badge-info',
    };

    const badgeClass = statusMap[status] || 'badge-primary';

    return (
        <span className={`badge ${badgeClass} ${className}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
