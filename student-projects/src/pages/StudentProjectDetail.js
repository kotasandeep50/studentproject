import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleProjects } from '../components/ProjectList';

const StudentProjectDetail = () => {
  const { id } = useParams();
  const project = sampleProjects.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="page-container">
        <h2>Project not found</h2>
        <Link to="/student/projects" className="button">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <header className="dashboard-header">
        <h1>{project.title}</h1>
      </header>
      <div className="card">
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Progress:</strong> {project.progress}%</p>
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Milestones:</strong> {project.milestones}</p>
        <p><strong>Media items:</strong> {project.mediaCount}</p>
        <Link to="/student/projects" className="button">Back to projects</Link>
      </div>
    </div>
  );
};

export default StudentProjectDetail;