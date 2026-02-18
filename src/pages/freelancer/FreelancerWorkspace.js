import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import TaskBoard from '../../components/workspace/TaskBoard';
import TeamMembers from '../../components/workspace/TeamMembers';
import FileUpload from '../../components/workspace/FileUpload';
import ChatPanel from '../../components/workspace/ChatPanel';
import Milestones from '../../components/workspace/Milestones';

const FreelancerWorkspace = () => {
    return (
        <DashboardLayout role="freelancer">
            <div className="page-header">
                <div>
                    <h1>🛠️ Project Workspace</h1>
                    <p>AI-Powered SaaS Dashboard — Your active project workspace.</p>
                </div>
            </div>

            <div className="workspace-layout">
                <div className="workspace-main">
                    <TaskBoard />
                    <Milestones />
                    <ChatPanel />
                </div>
                <div className="workspace-sidebar">
                    <TeamMembers />
                    <FileUpload />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FreelancerWorkspace;
