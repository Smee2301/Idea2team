import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import axios from "axios";
import SearchBar from '../../components/common/SearchBar';
import "../../styles/BrowseProject.css";

const BrowseProjects = () => {

   const [search, setSearch] = useState("");
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:1337/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
   }, []);

   const filteredProjects = projects.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.required_skills.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <DashboardLayout role="freelancer">

         <div className="browse-container">

            <div className="browse-header">
               <h1 className="browse-title">Browse Projects</h1>
               <p className="browse-subtitle">Find projects matching your skills 🚀</p>
            </div>

            <div className="browse-search">
               <SearchBar
                  placeholder="Search by title or skills..."
                  onChange={(e) => setSearch(e.target.value)}
               />
            </div>

            <div className="project-list">
               {filteredProjects.map((p) => (
                  <div key={p.project_id} className="project-item">

                     <div className="project-top">
                        <h3 className="project-heading">{p.title}</h3>
                        <span className="project-budget">
                           ₹{p.budget_min} - ₹{p.budget_max}
                        </span>
                     </div>

                     <p className="project-desc">{p.description}</p>

                     <div className="project-meta">
                        <span className="project-skill">⚡ {p.required_skills}</span>
                     </div>

                     <div className="project-actions">
                        <button className="view-btn">View Details</button>
                        <button className="apply-btn">Apply Now</button>
                     </div>

                  </div>
               ))}
            </div>

         </div>

      </DashboardLayout>
   );
};

export default BrowseProjects;