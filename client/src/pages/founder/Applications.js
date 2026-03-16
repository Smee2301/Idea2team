import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import axios from "axios";
import Swal from "sweetalert2";
import "../../styles/application.css";

const Applications = () => {

    const founderId = localStorage.getItem("user_id");
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/founder-applications/${founderId}`)
            .then(res => {
                setApplications(res.data.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, [founderId]);

    // ACCEPT APPLICATION
    const handleAccept = (id) => {
        axios.put(`http://localhost:5000/api/application/accept/${id}`)
            .then(() => {
                setApplications(prev =>
                    prev.map(app =>
                        app.application_id === id
                            ? { ...app, status: "accepted" }
                            : app
                    )
                );
                Swal.fire({
                    title: "Accepted!",
                    text: "You have successfully hired this freelancer.",
                    icon: "success",
                    confirmButtonColor: "#4f46e5"
                });
            })
            .catch(err => console.log(err));
    };

    // REJECT APPLICATION
    const handleReject = (id) => {
        axios.put(`http://localhost:5000/api/application/reject/${id}`)
            .then(() => {
                setApplications(prev =>
                    prev.map(app =>
                        app.application_id === id
                            ? { ...app, status: "rejected" }
                            : app
                    )
                );
                Swal.fire({
                    title: "Rejected!",
                    text: "The application has been declined.",
                    icon: "info",
                    confirmButtonColor: "#ef4444"
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <DashboardLayout role="founder">
            <div className="app-dashboard-wrapper">

                <div className="app-page-header">
                    <div className="app-header-text">
                        <h1 className="app-main-title">📨 Project Applications</h1>
                        <p className="app-sub-title">Review, approve, and manage incoming proposals from freelancers across all your projects.</p>
                    </div>
                </div>

                {isLoading ? (
                    <div className="app-empty-state">
                        <div className="loader"></div>
                        <p>Loading applications...</p>
                    </div>
                ) : applications.length === 0 ? (
                    <div className="app-empty-state">
                        <div className="empty-icon">📭</div>
                        <h2>No Applications Yet</h2>
                        <p>When freelancers apply to your active projects, their proposals will appear here.</p>
                    </div>
                ) : (
                    <div className="table-wrapper">
                        <table className="app-data-table">
                            <thead>
                                <tr>
                                    <th>Applicant Name</th>
                                    <th>Project Title</th>
                                    <th>Proposal Message</th>
                                    <th>Expected Budget</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th className="action-col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map(app => (
                                    <tr key={app.application_id} className="app-table-row">
                                        <td className="bold-cell">{app.full_name}</td>
                                        <td>{app.project_title}</td>
                                        <td className="proposal-cell" title={app.proposal}>{app.proposal?.length > 50 ? app.proposal.substring(0, 50) + '...' : app.proposal}</td>
                                        <td className="budget-cell">₹{app.budget}</td>
                                        <td>{app.duration} Weeks</td>
                                        <td>
                                            <span className={`premium-badge status-${app.status?.toLowerCase() || 'pending'}`}>
                                                {app.status || 'Pending'}
                                            </span>
                                        </td>
                                        <td className="action-col">
                                            {app.status === "pending" ? (
                                                <div className="table-actions">
                                                    <button
                                                        className="modern-btn btn-accept"
                                                        onClick={() => handleAccept(app.application_id)}
                                                    >
                                                        Accept
                                                    </button>
                                                    <button
                                                        className="modern-btn btn-reject"
                                                        onClick={() => handleReject(app.application_id)}
                                                    >
                                                        Decline
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className={`table-status-label ${app.status}`}>
                                                    {app.status === 'accepted' ? 'Hired' : 'Declined'}
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Applications;