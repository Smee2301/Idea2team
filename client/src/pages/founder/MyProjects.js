import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import SearchBar from '../../components/common/SearchBar';
import Button from '../../components/common/Button';
import axios from "axios";
import "../../styles/myproject.css";
import { useNavigate } from 'react-router-dom';

const MyProjects = () => {

    const [projects, setProjects] = useState([]);
    const [expanded, setExpanded] = useState({});
    const navigate = useNavigate();

    // Load Projects
    useEffect(() => {

        const userId = sessionStorage.getItem("user_id");

        axios.get(`http://localhost:5000/api/myProject/${userId}`)
            .then(res => setProjects(res.data.data))
            .catch(err => console.log(err));

    }, []);

    // Toggle description
    const toggleDescription = (id) => {
        setExpanded(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Edit
    const handleEdit = (id) => {
        navigate(`/founder/edit-project/${id}`);
    };

    // Delete
    const handleDelete = (id) => {

        if (!window.confirm("Delete this project?")) return;

        axios.delete(`http://localhost:5000/api/project/${id}`)
            .then(() => {

                setProjects(prev =>
                    prev.filter(project => project.project_id !== id)
                );

                alert("Project deleted successfully");

            })
            .catch(err => console.log(err));
    };

    return (
        <DashboardLayout role="founder">

            <div className="page-header">
                <div>
                    <h1>My Projects</h1>
                    <p>Manage and track all your posted projects.</p>
                </div>

                <Button
                    variant="primary"
                    onClick={() => navigate('/founder/post-project')}
                >
                    + New Project
                </Button>
            </div>

            <div className="search-bar-container">
                <SearchBar placeholder="Search projects..." />
            </div>

            {/* PROJECT CARDS */}
            <div className="projects-grid">
                {projects.map((val) => {
                    const isExpanded = expanded[val.project_id];
                    const description = isExpanded
                        ? val.description
                        : val.description.slice(0, 120) + "...";

                    return (
                        <div className="project-card" key={val.project_id}>
                            <h2 className="project-title">
                                {val.title}
                            </h2>

                            <p className="project-description">
                                {description}
                                <span
                                    className="show-more"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleDescription(val.project_id);
                                    }}
                                >
                                    {isExpanded ? " Show Less" : " Show More"}
                                </span>
                            </p>

                            <div className="skill-tags">
                                {val.required_skills.split(",").map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="project-card-meta">

                                <span><strong>Budget:</strong>
                                    <span>₹{val.budget_min} - ₹{val.budget_max}</span>
                                </span>

                                <span><strong>Duration:</strong>
                                    <span>{val.duration_weeks} weeks</span>
                                </span>

                                <span><strong>Team Required:</strong>
                                    <span>{val.team_members_required} freelancers</span>
                                </span>

                                <span><strong>Status:</strong>
                                    <span className="status-badge">Active</span>
                                </span>
                            </div>


                            <div className="file-link">
                                <strong>File:</strong> {val.upload_file ? (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`http://localhost:5000/public/${val.upload_file}`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {val.upload_file}
                                    </a>
                                ) : (
                                    <span>No file uploaded</span>
                                )}
                            </div>

                            <div className="project-actions">
                                <Button
                                    variant="outline"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEdit(val.project_id);
                                    }}
                                    style={{ flex: 1 }}
                                >
                                    Edit
                                </Button>

                                <Button
                                    variant="danger"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(val.project_id);
                                    }}
                                    style={{ flex: 1 }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

        </DashboardLayout >
    );
};

export default MyProjects;