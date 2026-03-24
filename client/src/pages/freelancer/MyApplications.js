import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import axios from "axios";
import Swal from "sweetalert2";
import "../../styles/MyApplication.css";

const MyApplications = () => {
    const [applications, setApplications] = useState([]);
    const freelancer_id = sessionStorage.getItem("user_id");

    useEffect(() => {
        if (!freelancer_id) return;

        axios
            .get(`http://localhost:5000/api/freelancer/myapplication/${freelancer_id}`)
            .then((res) => {
                setApplications(res.data.data || []);
            })
            .catch((err) => console.log(err));
    }, [freelancer_id]);

    const handleView = (app) => {
        Swal.fire({
            title: app.title,
            html: `
        <div style="text-align: left; padding: 10px; font-size: 0.95em;">
          <p style="margin-bottom: 8px;"><strong>Founder:</strong> ${app.full_name}</p>
          <p style="margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:${app.email}" style="color: #4f46e5; text-decoration: none;">${app.email}</a></p>
          <p style="margin-bottom: 8px;"><strong>Phone:</strong> <a href="tel:${app.phone}" style="color: #4f46e5; text-decoration: none;">${app.phone}</a></p>
          <p style="margin-bottom: 15px;"><strong>Status:</strong> <span style="color: #10b981; font-weight: bold; text-transform: uppercase;">${app.status || 'Pending'}</span></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />
          <p style="margin-bottom: 8px;"><strong>Project Description:</strong></p>
          <p style="font-size: 0.9em; color: #555; line-height: 1.5;">${app.description || "No description provided."}</p>
        </div>
      `,
            icon: "info",
            confirmButtonColor: "#4f46e5",
        });
    };

    return (
        <DashboardLayout role="freelancer">
            <div className="ma-table-container">
                <h2 className="ma-table-title">My Applications</h2>
                {applications.length === 0 ? (
                    <div className="ma-table-empty">
                        You haven't applied to any projects yet.
                    </div>
                ) : (
                    <div className="ma-table-responsive">
                        <table className="ma-custom-table">
                            <thead>
                                <tr>
                                    <th>Project Title</th>
                                    <th>Founder</th>
                                    <th>Applied On</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((app, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="ma-fw-bold ma-text-dark">{app.title}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                                                {app.category}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ma-fw-bold ma-text-dark">{app.full_name}</div>
                                            <div className="ma-contact-info">
                                                <a href={`mailto:${app.email}`} className="ma-contact-link">Email</a>
                                            </div>
                                        </td>
                                        <td>
                                            {new Date(app.applied_at).toLocaleDateString('en-IN', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </td>
                                        <td>
                                            <div className="ma-fw-bold ma-text-dark">₹{app.expected_salary}</div>
                                        </td>
                                        <td>
                                            <span className={`ma-status-badge ${app.status.toLowerCase()}`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button 
                                                className="ma-table-btn"
                                                onClick={() => handleView(app)}
                                            >
                                                View
                                            </button>
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

export default MyApplications;
