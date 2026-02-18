import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProjectCard from '../../components/cards/ProjectCard';
import SearchBar from '../../components/common/SearchBar';
import { projects, categories } from '../../data/dummyData';

const BrowseProjects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <DashboardLayout role="freelancer">
            <div className="page-header">
                <div>
                    <h1>Browse Projects</h1>
                    <p>Discover projects that match your skills and interests.</p>
                </div>
            </div>

            <div className="filter-bar">
                <SearchBar placeholder="Search projects by title, skill, or company..." style={{ flex: 1 }} />
                <select className="form-input form-select" style={{ marginBottom: 0, minWidth: '180px' }}>
                    <option value="">Budget Range</option>
                    {['Any Budget', 'Under $5,000', '$5,000 - $10,000', '$10,000 - $20,000', 'Over $20,000'].map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                    ))}
                </select>
            </div>

            <div className="filter-chips" style={{ marginBottom: '24px' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                    <p style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</p>
                    <p>No projects found in this category. Try a different filter.</p>
                </div>
            )}
        </DashboardLayout>
    );
};

export default BrowseProjects;
