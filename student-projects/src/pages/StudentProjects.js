import React from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';

const StudentProjects = () => {
  return (
    <div className="page-container">
      <header className="dashboard-header">
        <h1>My Projects</h1>
        <Link to="/student/projects/new" className="button">+ New Project</Link>
      </header>
      <ProjectList studentView />
    </div>
  );
};

export default StudentProjects;
