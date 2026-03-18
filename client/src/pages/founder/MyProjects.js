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

            <div className="table-container">
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
                                    onClick={() => toggleDescription(val.project_id)}
                                >
                                    {isExpanded ? " Show Less" : " Show More"}
                                </span>

                            </p>

                            <p className="project-founder">
                                <strong>Founder:</strong> Meet
                            </p>

                            {/* Skills */}

                            <div className="skills">

                                {val.required_skills.split(",").map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}

                            </div>

                            <p className="project-budget">
                                <strong>Budget:</strong> ₹{val.budget_min} - ₹{val.budget_max}
                            </p>

                            <p className="project-duration">
                                <strong>Duration:</strong> {val.duration_weeks} weeks
                            </p>

                            <p className="project-team">
                                <strong>Team Required:</strong> {val.team_members_required} freelancers
                            </p>

                            <div className="status-line">
                                Status: <span className="status active">Active</span>
                            </div>

                            <div className="uploadFile">
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
                          
                            <div className="project-actions">

                                <button
                                    className="edit-btn"
                                    onClick={() => handleEdit(val.project_id)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
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