import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const DashboardLayout = ({ role = 'founder', children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    return (
        <div className="dashboard-layout">
            <Sidebar role={role} collapsed={collapsed} onToggle={toggleSidebar} />
            <div className={`dashboard-main ${collapsed ? 'sidebar-collapsed' : ''}`}>
                <Topbar collapsed={collapsed} onToggle={toggleSidebar} />
                <main className="dashboard-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
