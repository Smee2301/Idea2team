import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';
import axios from "axios";
import Swal from "sweetalert2";
import '../../styles/FounderProfile.css';

const FounderProfile = () => {
    const user_id = sessionStorage.getItem("user_id");
    const [user, setUser] = useState({});
    const [profile, setProfile] = useState({
        phone: "",
        location: "",
        bio: "",
        company_name: "",
        company_website: "",
        industry: "Technology",
        company_size: "11-50",
        company_description: ""
    });

    useEffect(() => {
        if (user_id) {
            axios.get(`http://localhost:5000/api/founder-profile/${user_id}`)
                .then(res => {
                    const data = res.data;
                    setUser({
                        full_name: data.full_name,
                        email: data.email
                    });
                    if (data && data.user_id) {
                        setProfile({
                            phone: data.phone || "",
                            location: data.location || "",
                            bio: data.bio || "",
                            company_name: data.company_name || "",
                            company_website: data.company_website || "",
                            industry: data.industry || "Technology",
                            company_size: data.company_size || "11-50",
                            company_description: data.company_description || ""
                        });
                    }
                })
                .catch(err => console.error(err));
        }
    }, [user_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        axios.post("http://localhost:5000/api/founder-profile", { ...profile, user_id })
            .then(() => {
                Swal.fire("Success", "Profile updated successfully!", "success");
            })
            .catch(err => {
                console.error(err);
                Swal.fire("Error", "Failed to update profile", "error");
            });
    };

    return (
        <DashboardLayout role="founder">
            <div className="fdp-page-header">
                <div>
                    <h1>🧑‍💼 My Profile</h1>
                    <p>Manage your personal and company information.</p>
                </div>
                <Button variant="primary" onClick={handleSave}>Save Changes</Button>
            </div>

            <div className="fdp-profile-page">
                <div className="fdp-header-card">
                    <div className="fdp-cover"></div>
                    <div className="fdp-avatar-section">
                        <div className="fdp-avatar-large">
                            {user?.full_name ? user.full_name.substring(0, 2).toUpperCase() : "FP"}
                        </div>
                        <div className="fdp-user-info">
                            <h2>{user?.full_name}</h2>
                            <p>{profile.company_name ? `Founder at ${profile.company_name}` : "Startup Founder"}</p>
                        </div>
                    </div>
                    <div className="fdp-details">
                        <div className="fdp-details-list">
                            <span>📍 {profile.location || "Location not set"}</span>
                            <span>🏢 {profile.company_name || "Company not set"}</span>
                            <span>📅 Member</span>
                            <span>⭐ 5.0 Rating</span>
                        </div>
                    </div>
                </div>

                <div className="fdp-form-card">
                    <div className="fdp-form-section">
                        <div className="fdp-form-section-header">
                            <span className="fdp-form-section-icon">👤</span>
                            <div>
                                <h3 className="fdp-form-section-title">Personal Information</h3>
                                <p className="fdp-form-section-desc">Update your profile details and public information.</p>
                            </div>
                        </div>
                        <div className="fdp-form-grid">
                            <div className="fdp-form-group">
                                <label className="fdp-form-label">Full Name</label>
                                <input type="text" className="fdp-form-input" value={user?.full_name || ""} readOnly />
                            </div>
                            <div className="fdp-form-group">
                                <label className="fdp-form-label">Email</label>
                                <input type="email" className="fdp-form-input" value={user?.email || ""} readOnly />
                            </div>
                        </div>
                        <div className="fdp-form-group">
                            <label className="fdp-form-label">Phone</label>
                            <input name="phone" type="tel" className="fdp-form-input" placeholder="+1 (555) 123-4567" value={profile.phone} onChange={handleChange} />
                        </div>
                        <div className="fdp-form-group">
                            <label className="fdp-form-label">Location</label>
                            <input name="location" type="text" className="fdp-form-input" placeholder="San Francisco, CA" value={profile.location} onChange={handleChange} />
                        </div>
                        <div className="fdp-form-group">
                            <label className="fdp-form-label">Bio</label>
                            <textarea name="bio" className="fdp-form-input fdp-form-textarea" placeholder="Tell us about yourself..." value={profile.bio} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    <div className="fdp-form-section">
                        <div className="fdp-form-section-header">
                            <span className="fdp-form-section-icon">🏢</span>
                            <div>
                                <h3 className="fdp-form-section-title">Company Information</h3>
                                <p className="fdp-form-section-desc">Details about your startup or company.</p>
                            </div>
                        </div>
                        <div className="fdp-form-group">
                            <label className="fdp-form-label">Company Name</label>
                            <input name="company_name" type="text" className="fdp-form-input" placeholder="TechVista Inc." value={profile.company_name} onChange={handleChange} />
                        </div>
                        <div className="fdp-form-group">
                            <label className="fdp-form-label">Company Website</label>
                            <input name="company_website" type="text" className="fdp-form-input" placeholder="https://techvista.io" value={profile.company_website} onChange={handleChange} />
                        </div>
                        <div className="fdp-form-grid">
                            <div className="fdp-form-group">
                                <label className="fdp-form-label">Industry</label>
                                <select name="industry" className="fdp-form-input fdp-form-select" value={profile.industry} onChange={handleChange}>
                                    {['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Marketing', 'Other'].map((opt, i) => (
                                        <option key={i} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="fdp-form-group">
                                <label className="fdp-form-label">Company Size</label>
                                <select name="company_size" className="fdp-form-input fdp-form-select" value={profile.company_size} onChange={handleChange}>
                                    {['1-10', '11-50', '51-200', '200+'].map((opt, i) => (
                                        <option key={i} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="fdp-form-group">
                            <label className="fdp-form-label">Company Description</label>
                            <textarea name="company_description" className="fdp-form-input fdp-form-textarea" value={profile.company_description} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    <div className="fdp-save-btn-container">
                        <Button onClick={handleSave}>Save Profile Changes</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FounderProfile;