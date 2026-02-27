import React from 'react';
import { Link } from 'react-router-dom';
import { sampleProjects } from '../components/ProjectList';

const AdminDashboard = () => {
  const total = sampleProjects.length;
  const activeStudents = 3;
  const pendingReview = sampleProjects.filter(p => p.status === 'pending').length;
  const completed = sampleProjects.filter(p => p.status === 'completed').length;

  return (
    <div className="page-container admin-dashboard">
      <header className="dashboard-header">
        <h1>Welcome, Administrator</h1>
        <p>Manage student projects and provide feedback</p>
      </header>

      <div className="stats-cards grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
        <div className="card">
          <h4>Total Projects</h4>
          <p className="stat-number">{total}</p>
        </div>
        <div className="card">
          <h4>Active Students</h4>
          <p className="stat-number">{activeStudents}</p>
        </div>
        <div className="card">
          <h4>Pending Review</h4>
          <p className="stat-number">{pendingReview}</p>
        </div>
        <div className="card">
          <h4>Completed</h4>
          <p className="stat-number">{completed}</p>
        </div>
      </div>

      <div className="actions-cards grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        <Link to="/admin/reviews" className="card action-card">
          <div className="icon">📝</div>
          <div>
            <h4>Review Projects</h4>
            <p>View all student project submissions</p>
          </div>
        </Link>
        <Link to="/admin/students" className="card action-card">
          <div className="icon">👥</div>
          <div>
            <h4>Student Management</h4>
            <p>View student profiles and portfolios</p>
          </div>
        </Link>
        <Link to="/admin/student-details" className="card action-card">
          <div className="icon">📊</div>
          <div>
            <h4>Student Details</h4>
            <p>View detailed student info with projects</p>
          </div>
        </Link>
        <Link to="/admin/student-mapping" className="card action-card">
          <div className="icon">🔗</div>
          <div>
            <h4>Admin Assignments</h4>
            <p>Manage admin-student assignments</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
