import React from 'react';
import ProjectList from '../components/ProjectList';

const AdminReviews = () => {
  return (
    <div className="page-container">
      <header className="dashboard-header">
        <h1>Submissions to Review</h1>
      </header>
      <ProjectList />
    </div>
  );
};

export default AdminReviews;
