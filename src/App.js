import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/workspace.css';

// Public Pages
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Register from './pages/public/Register';

// Founder Pages
import FounderOverview from './pages/founder/FounderOverview';
import PostProject from './pages/founder/PostProject';
import ManageProjects from './pages/founder/ManageProjects';
import Applications from './pages/founder/Applications';
import FounderWorkspace from './pages/founder/FounderWorkspace';
import FounderProfile from './pages/founder/FounderProfile';

// Freelancer Pages
import FreelancerOverview from './pages/freelancer/FreelancerOverview';
import BrowseProjects from './pages/freelancer/BrowseProjects';
import MyApplications from './pages/freelancer/MyApplications';
import FreelancerWorkspace from './pages/freelancer/FreelancerWorkspace';
import FreelancerProfile from './pages/freelancer/FreelancerProfile';

// Admin Pages
import AdminOverview from './pages/admin/AdminOverview';
import ManageUsers from './pages/admin/ManageUsers';
import AdminManageProjects from './pages/admin/AdminManageProjects';
import Reports from './pages/admin/Reports';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Founder Dashboard Routes */}
        <Route path="/founder/dashboard" element={<FounderOverview />} />
        <Route path="/founder/post-project" element={<PostProject />} />
        <Route path="/founder/projects" element={<ManageProjects />} />
        <Route path="/founder/applications" element={<Applications />} />
        <Route path="/founder/workspace" element={<FounderWorkspace />} />
        <Route path="/founder/profile" element={<FounderProfile />} />

        {/* Freelancer Dashboard Routes */}
        <Route path="/freelancer/dashboard" element={<FreelancerOverview />} />
        <Route path="/freelancer/browse" element={<BrowseProjects />} />
        <Route path="/freelancer/applications" element={<MyApplications />} />
        <Route path="/freelancer/workspace" element={<FreelancerWorkspace />} />
        <Route path="/freelancer/profile" element={<FreelancerProfile />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminOverview />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/projects" element={<AdminManageProjects />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
