import React from 'react';

const Avatar = ({ initials, color = '#4f46e5', size = 'md', className = '' }) => {
    return (
        <div
            className={`avatar avatar-${size} ${className}`}
            style={{ background: color }}
        >
            {initials}
        </div>
    );
};

export default Avatar;
