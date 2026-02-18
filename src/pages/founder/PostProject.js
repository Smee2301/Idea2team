import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/common/Button';
import { categories, skillOptions } from '../../data/dummyData';

const PostProject = () => {
    return (
        <DashboardLayout role="founder">
            <div className="page-header">
                <div>
                    <h1>Post a New Project</h1>
                    <p>Fill in the details to attract the best talent for your project.</p>
                </div>
            </div>

            <div className="form-page">
                <div className="form-card">
                    <h2>📋 Project Details</h2>
                    <p>Provide comprehensive information to help freelancers understand your needs.</p>

                    <div className="form-group">
                        <label className="form-label">Project Title</label>
                        <input type="text" className="form-input" placeholder="e.g., AI-Powered Analytics Dashboard" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Project Description</label>
                        <textarea className="form-input form-textarea" placeholder="Describe your project in detail. What problem are you solving? What features do you need?" style={{ minHeight: '140px' }}></textarea>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Category</label>
                            <select className="form-input form-select">
                                <option value="">Select category</option>
                                {categories.filter(c => c !== 'All').map((cat, i) => (
                                    <option key={i} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Duration</label>
                            <select className="form-input form-select">
                                <option value="">Select duration</option>
                                {['Less than 1 month', '1-3 months', '3-6 months', '6+ months'].map((d, i) => (
                                    <option key={i} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Budget Minimum</label>
                            <input type="number" className="form-input" placeholder="$5,000" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Budget Maximum</label>
                            <input type="number" className="form-input" placeholder="$15,000" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Required Skills</label>
                        <input type="text" className="form-input" placeholder="Type skills separated by commas (e.g., React, Node.js, Python)" />
                        <p className="form-helper">Add the key skills needed for this project</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                        {skillOptions.slice(0, 8).map((skill, i) => (
                            <span key={i} className="skill-tag" style={{ cursor: 'pointer' }}>{skill}</span>
                        ))}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Deadline</label>
                        <input type="date" className="form-input" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Additional Notes</label>
                        <textarea className="form-input form-textarea" placeholder="Any additional requirements, preferred experience, or links to reference materials..."></textarea>
                    </div>

                    {/* File Attachment Zone */}
                    <div style={{ marginBottom: '20px' }}>
                        <label className="form-label">Attachments</label>
                        <div className="file-dropzone" style={{ borderRadius: '12px', padding: '32px' }}>
                            <div className="file-dropzone-icon">📎</div>
                            <p>Drag & drop project files, or <span className="browse-link">browse</span></p>
                            <p style={{ fontSize: '12px', marginTop: '4px', color: 'var(--gray-400)' }}>PDF, DOC, PNG, ZIP up to 25MB</p>
                        </div>
                    </div>

                    <div className="form-actions">
                        <Button variant="secondary">Save as Draft</Button>
                        <Button variant="primary">Publish Project</Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PostProject;
