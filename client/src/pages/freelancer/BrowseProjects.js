import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import axios from "axios";
import SearchBar from '../../components/common/SearchBar';
import "../../styles/BrowseProject.css";

const BrowseProjects = () => {

   const navigate = useNavigate();
   const [search, setSearch] = useState("");
   const [projects, setProjects] = useState([]);
   const [loading, setLoading] = useState(true);

   // ✅ Fetch Projects
   useEffect(() => {
      axios.get("http://localhost:1337/api/projects")
         .then((res) => {
            setProjects(res.data);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
            setLoading(false);
         });
   }, []);

   // ✅ Search Filter
   const filteredProjects = projects.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.required_skills.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <DashboardLayout role="freelancer">

         <div className="browse-container">

            {/* HEADER */}
            <div className="browse-header">
               <h1 className="browse-title">Browse Projects</h1>
               <p className="browse-subtitle">Find projects matching your skills 🚀</p>
            </div>

            {/* SEARCH */}
            <div className="browse-search">
               <SearchBar
                  placeholder="Search by title or skills..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
            </div>

            {/* LOADING */}
            {loading && <p className="loading-text">Loading projects...</p>}

            {/* EMPTY STATE */}
            {!loading && filteredProjects.length === 0 && (
               <p className="loading-text">No projects found 😢</p>
            )}

            {/* PROJECT GRID */}
            <div className="project-grid">
               {filteredProjects.map((p) => (
                  <div key={p.project_id} className="project-card">

                     {/* TITLE */}
                     <h3>{p.title}</h3>

                     {/* DESCRIPTION */}
                     <p className="project-desc">{p.description}</p>

                     {/* DETAILS */}
                     <div className="project-details-container">

                        <div className="project-detail-item">
                           💰 Budget:
                           <span className="project-detail-value">
                              ₹{p.budget_min} - ₹{p.budget_max}
                           </span>
                        </div>

                        <div className="project-detail-item">
                           ⏱ Duration:
                           <span className="project-detail-value">
                              {p.duration_weeks} Weeks
                           </span>
                        </div>

                     </div>

                     {/* SKILLS */}
                     <div className="project-skills-list">
                        {p.required_skills.split(",").map((skill, i) => (
                           <span key={i} className="project-skill-tag">
                              {skill.trim()}
                           </span>
                        ))}
                     </div>

                     {/* ACTION BUTTONS */}
                     <div className="project-card-actions">

                        <button className="project-action-btn view">
                           View Details
                        </button>

                        <button
                           className="project-action-btn apply"
                           onClick={() =>
                              navigate('/freelancer/apply', {
                                 state: {
                                    projectId: p.project_id,
                                    projectTitle: p.title
                                 }
                              })
                           }
                        >
                           Apply Now
                        </button>

                     </div>

                  </div>
               ))}
            </div>

         </div>

      </DashboardLayout>
   );
};

export default BrowseProjects;