import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../styles/postproject.css';


const PostProject = () => {

    function handlePublish() {
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const category = document.querySelector("#category").value;
        const project_stage = document.querySelector("#project_stage").value;
        const collaboration_type = document.querySelector("#collaboration_type").value;
        const experience_level = document.querySelector("#experience_level").value;
        const budget_min = document.querySelector("#budget_min").value;
        const budget_max = document.querySelector("#budget_max").value;
        const duration_weeks = document.querySelector("#duration_weeks").value;
        const required_skills = document.querySelector("#required_skills").value;
        const team_members_required = document.querySelector("#team_members_required").value;

        console.log(title, description, category, project_stage, collaboration_type, experience_level, budget_min, budget_max, duration_weeks, required_skills, team_members_required);

        if (!title || !description || !category || !project_stage || !collaboration_type || !experience_level || !budget_min || !budget_max || !duration_weeks || !team_members_required) {
            return Swal.fire("Error", "Please fill all the fields", "error");
        }

        const founder_id = localStorage.getItem("user_id");

        axios.post("http://localhost:5000/api/post-project", {

            founder_id,
            title,
            description,
            category,
            required_skills,
            project_stage,
            collaboration_type,
            experience_level,
            budget_min,
            budget_max,
            duration_weeks,
            team_members_required
        })
            .then((res) => {
                console.log(res.data);
                Swal.fire("Success", "Project posted successfully!", "success");
            })
            .catch((err) => {
                console.log(err);
                Swal.fire("Error", "An error occurred while posting the project. Please try again.", "error");
            })
    }

    return (
        <DashboardLayout role="founder"     >
            <div className="page-header">
                <div>
                    <h1>🚀 Post a New Project</h1>
                    <p>Create a detailed listing to attract the right freelancers.</p>
                </div>
            </div>

            <div className="pp-container">

                <div className="pp-card">

                    {/* BASIC DETAILS */}

                    <div className="pp-section">

                        <h3 className="pp-section-title">📋 Basic Details</h3>

                        <div className="pp-grid-2">

                            <div className="pp-field">
                                <label className="pp-label">Project Title</label>
                                <input id="title" type="text" className="pp-input" placeholder="Enter project title" />
                            </div>

                            <div className="pp-field">
                                <label className="pp-label">Category</label>
                                <select id="category" className="pp-input">
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>UI/UX Design</option>
                                    <option>Graphic Design</option>
                                </select>
                            </div>

                        </div>

                        <div className="pp-field">
                            <label className="pp-label">Description</label>
                            <textarea id="description" className="pp-textarea"></textarea>
                        </div>

                    </div>


                    {/* PROJECT DETAILS */}

                    <div className="pp-section">

                        <h3 className="pp-section-title">⚙ Project Details</h3>

                        <div className="pp-grid-3">

                            <div className="pp-field">
                                <label className="pp-label">Project Stage</label>
                                <select id="project_stage" className="pp-input">
                                    <option>Idea</option>
                                    <option>Prototype</option>
                                    <option>Launch</option>
                                </select>
                            </div>

                            <div className="pp-field">
                                <label className="pp-label">Collaboration</label>
                                <select id="collaboration_type" className="pp-input">
                                    <option>Paid</option>
                                    <option>Equity</option>
                                    <option>Learning</option>
                                </select>
                            </div>

                            <div className="pp-field">
                                <label className="pp-label">Experience</label>
                                <select id="experience_level" className="pp-input">
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Expert</option>
                                </select>
                            </div>

                        </div>

                    </div>


                    {/* BUDGET */}

                    <div className="pp-section">

                        <h3 className="pp-section-title">💰 Budget</h3>

                        <div className="pp-grid-3">

                            <div className="pp-field">
                                <label className="pp-label">Min Budget</label>
                                <input id="budget_min" type="number" className="pp-input" />
                            </div>

                            <div className="pp-field">
                                <label className="pp-label">Max Budget</label>
                                <input id="budget_max" type="number" className="pp-input" />
                            </div>

                            <div className="pp-field">
                                <label className="pp-label">Duration (weeks)</label>
                                <input id="duration_weeks" type="number" className="pp-input" />
                            </div>

                            <div className="pp-field">
                                <label className="pp-label">Team Members</label>
                                <input id="team_members_required" type="number" className="pp-input" defaultValue="1" />
                            </div>

                        </div>

                    </div>


                    {/* SKILLS */}

                    <div className="pp-section">

                        <h3 className="pp-section-title">⚡ Skills</h3>

                        <div className="pp-field">
                            <input
                                id="required_skills"
                                type="text"
                                className="pp-input"
                                placeholder="React, Node.js, MongoDB"
                            />
                        </div>

                    </div>


                    {/* ACTION BUTTONS */}

                    <div className="pp-actions">

                        <Button variant="secondary" onClick={() => handlePublish()}>
                            Save Draft
                        </Button>

                        <Button variant="primary" onClick={() => handlePublish()}>
                            Publish
                        </Button>

                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default PostProject;