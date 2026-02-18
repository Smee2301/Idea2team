import React from 'react';
import StatusBadge from '../common/StatusBadge';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-company">{project.company}</p>
                </div>
                <StatusBadge status={project.status} />
            </div>
            <p className="project-card-description">{project.description}</p>
            <div className="project-card-skills">
                {project.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                ))}
            </div>
            <div className="project-card-footer">
                <span className="project-card-budget">{project.budget}</span>
                <div className="project-card-meta">
                    <span>📅 {project.deadline}</span>
                    <span>👥 {project.applications} applicants</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
