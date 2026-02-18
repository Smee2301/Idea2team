import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProjectCard from '../../components/cards/ProjectCard';
import SearchBar from '../../components/common/SearchBar';
import Button from '../../components/common/Button';
import { projects } from '../../data/dummyData';

const ManageProjects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Active', 'Pending', 'Completed'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.status === activeFilter);

    return (
        <DashboardLayout role="founder">
            <div className="page-header">
                <div>
                    <h1>My Projects</h1>
                    <p>Manage and track all your posted projects.</p>
                </div>
                <Button variant="primary" onClick={() => window.location.href = '/founder/post-project'}>
                    + New Project
                </Button>
            </div>

            <div className="filter-bar">
                <SearchBar placeholder="Search projects..." />
                <div className="filter-chips">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                    <p style={{ fontSize: '48px', marginBottom: '12px' }}>📁</p>
                    <p>No projects found for this filter.</p>
                </div>
            )}
        </DashboardLayout>
    );
};

export default ManageProjects;
