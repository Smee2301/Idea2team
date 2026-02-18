import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidebarMenus = {
    admin: {
        title: 'Admin',
        sections: [
            {
                label: 'Dashboard',
                items: [
                    { icon: '📊', text: 'Overview', path: '/dashboard' },
                ],
            },
            {
                label: 'Management',
                items: [
                    { icon: '👥', text: 'Manage Users', path: '/users' },
                    { icon: '📁', text: 'Manage Projects', path: '/projects' },
                    { icon: '📋', text: 'Reports', path: '/reports' },
                ],
            },
        ],
    },
};

const userProfiles = {
    admin: { name: 'Admin User', role: 'Administrator', initials: 'AU' },
};

const Sidebar = ({ role = 'founder', collapsed = false, onToggle }) => {
    const location = useLocation();
    const menu = sidebarMenus[role];
    const user = userProfiles[role];

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="sidebar-logo">I2</div>
                <span className="sidebar-brand-text">Idea2Team</span>
            </div>

            <nav className="sidebar-nav">
                {menu.sections.map((section, si) => (
                    <div className="sidebar-section" key={si}>
                        <p className="sidebar-section-label">{section.label}</p>
                        {section.items.map((item, ii) => (
                            <Link
                                key={ii}
                                to={item.path}
                                className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                <span className="sidebar-item-icon">{item.icon}</span>
                                <span className="sidebar-item-text">{item.text}</span>
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="sidebar-user">
                    <div className="sidebar-user-avatar">{user.initials}</div>
                    <div className="sidebar-user-info">
                        <p className="sidebar-user-name">{user.name}</p>
                        <p className="sidebar-user-role">{user.role}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
