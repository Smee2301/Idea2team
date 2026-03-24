import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import axios from "axios";
import Swal from "sweetalert2";
import "../../styles/application.css";

const Applications = () => {
 
    const founder_id = sessionStorage.getItem("user_id");
    
    console.log("founder_id:",founder_id);
    
 const[application,setApplication]=useState([]);

  const handleAccept = (id) => {
    axios.put(`http://localhost:5000/api/application/accept/${id}`)
      .then(res => {
        Swal.fire("Success", "Application accepted", "success");
        setApplication(prev => prev.map(app => 
          app.application_id === id ? { ...app, status: 'accepted' } : app
        ));
      })
      .catch(err => {
        console.log(err);
        Swal.fire("Error", "Failed to accept application", "error");
      });
  };

  const handleReject = (id) => {
    axios.put(`http://localhost:5000/api/application/reject/${id}`)
      .then(res => {
        Swal.fire("Success", "Application rejected", "success");
        setApplication(prev => prev.map(val => 
          val.application_id === id ? { ...val, status: 'rejected' } : val
        ));
      })
      .catch(err => {
        console.log(err);
        Swal.fire("Error", "Failed to reject application", "error");
      });
  };


useEffect(()=>{
    axios.get(`http://localhost:5000/api/info-application/${founder_id}`)
       .then(res => {
            setApplication(res.data.data);
         })
         .catch(err => console.log(err));

   
},[founder_id])

    return (
      <DashboardLayout role="founder">
           <div className="page-header">
                <div>
                    <h1>Applications</h1>
                    <p>Manage the applications</p>
                </div>

            </div>
        <div className="Grid-Conatiner">
           <table className="table">
            <thead>
                 <tr>
                    <th>#</th>
                    <th>Applicant name</th>
                    <th>Project title</th>
                    <th>Proposal message</th>
                    <th>Expected salary</th>
                    <th>Actions</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {application.map((val,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{val.full_name}</td>
                            <td>{val.title}</td>
                            <td>{val.proposal_message}</td>
                            <td>{val.expected_salary}</td>
                            <td>
                            {val.status !== 'rejected' && (
                              <button
                                    className="btn btn-success"
                                    disabled={val.status !== "pending"}
                                    style={{ backgroundColor: val.status === 'accepted' ? '#28a745' : undefined, color: val.status === 'accepted' ? 'white' : undefined }}
                                    onClick={() => handleAccept(val.application_id)}
                                    >
                                    {val.status === 'accepted' ? 'Accepted' : 'Accept'}
                                    </button>
                            )}

                            {val.status !== 'accepted' && (
                                    <button
                                    className="btn btn-danger"
                                    disabled={val.status !== "pending"}
                                    style={{ backgroundColor: val.status === 'rejected' ? '#dc3545' : undefined, color: val.status === 'rejected' ? 'white' : undefined }}
                                    onClick={() => handleReject(val.application_id)}
                                    >
                                    {val.status === 'rejected' ? 'Rejected' : 'Reject'}
                                    </button>
                            )}
                            </td>
                            <td>{val.status}</td>
                        </tr>
                    )
                })}
            </tbody>
           </table>
        </div>
      </DashboardLayout>
    );
};

export default Applications;