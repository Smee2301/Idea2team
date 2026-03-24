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

            <div className="mp-page-header">
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

            <div className="mp-table-container">
                <SearchBar placeholder="Search projects..." />
            </div>

            {/* PROJECT CARDS */}
            <div className="mp-projects-grid">
                {projects.map((val) => {
                    const isExpanded = expanded[val.project_id];
                    const description = isExpanded
                        ? val.description
                        : val.description.slice(0, 120) + "...";

                    return (
                        <div className="mp-project-card" key={val.project_id}>
                            <h2 className="mp-project-title">
                                {val.title}
                            </h2>

                            <p className="mp-project-description">
                                {description}
                                <span
                                    className="mp-show-more"
                                    onClick={() => toggleDescription(val.project_id)}
                                >
                                    {isExpanded ? " Show Less" : " Show More"}
                                </span>
                            </p>

                            <p className="mp-project-founder">
                                <strong>Founder:</strong> Meet
                            </p>

                            <div className="mp-skills">
                                {val.required_skills.split(",").map((skill, index) => (
                                    <span key={index} className="mp-skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <p className="mp-project-budget">
                                <strong>Budget:</strong> ₹{val.budget_min} - ₹{val.budget_max}
                            </p>

                            <p className="mp-project-duration">
                                <strong>Duration:</strong> {val.duration_weeks} weeks
                            </p>

                            <p className="mp-project-team">
                                <strong>Team Required:</strong> {val.team_members_required} freelancers
                            </p>

                            <div className="mp-status-line">
                                Status: <span className="mp-status active">Active</span>
                            </div>

                            <div className="mp-uploadFile">
                                File: {val.upload_file ? (
                                    <a
                                        target="_blank"
                                        href={`http://localhost:5000/public/${val.upload_file}`}
                                    >
                                        {val.upload_file}
                                    </a>
                                ) : (
                                    <span>No file uploaded</span>
                                )}
                            </div>
                          
                            <div className="mp-project-actions">
                                <button
                                    className="mp-edit-btn"
                                    onClick={() => handleEdit(val.project_id)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="mp-delete-btn"
                                    onClick={() => handleDelete(val.project_id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

        </DashboardLayout>
    );
};

export default MyProjects;