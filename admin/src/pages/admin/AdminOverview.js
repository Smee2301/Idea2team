import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../components/layout/DashboardLayout";
import StatsCard from "../../components/cards/StatsCard";
import "../../styles/adminDashboard.css";

const AdminOverview = () => {

  const [stats, setStats] = useState({
    totalUsers: 0,
    activeProjects: 0,
    completedProjects: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats();

    const interval = setInterval(() => {
      getDashboardStats();
    }, 30000);

    return () => clearInterval(interval);

  }, []);

  const getDashboardStats = async () => {
    try {

      const res = await axios.get("http://localhost:5000/api/admin/stats");

      setStats({
        totalUsers: res.data.totalUsers,
        activeProjects: res.data.activeProjects,
        completedProjects: res.data.completedProjects
      });

    } catch (error) {
      console.log("Error loading stats", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: "👥"
    },
    {
      title: "Active Projects",
      value: stats.activeProjects,
      icon: "🚀"
    },
    {
      title: "Completed Projects",
      value: stats.completedProjects,
      icon: "✅"
    }
  ];

  return (
    <DashboardLayout role="admin">

      <div className="admin-dashboard-wrapper">

        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Overview of platform performance</p>
        </div>

        {loading ? (
          <div className="dashboard-loader">
            Loading dashboard data...
          </div>
        ) : (

          <>
            <div className="dashboard-stats-grid">
              {statCards.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="dashboard-summary">

              <div className="summary-card">
                <h3>Total Users</h3>
                <p>{stats.totalUsers}</p>
              </div>

              <div className="summary-card">
                <h3>Active Projects</h3>
                <p>{stats.activeProjects}</p>
              </div>

              <div className="summary-card">
                <h3>Completed Projects</h3>
                <p>{stats.completedProjects}</p>
              </div>

            </div>
          </>
        )}

      </div>

    </DashboardLayout>
  );
};

export default AdminOverview;