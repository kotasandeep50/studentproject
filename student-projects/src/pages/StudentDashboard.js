import React from 'react';
import { Link } from 'react-router-dom';
import { sampleProjects } from '../components/ProjectList';

const StudentDashboard = () => {
  const total = sampleProjects.length;
  const inProgress = sampleProjects.filter(p => p.status === 'in-progress').length;
  const inReview = sampleProjects.filter(p => p.status === 'pending').length;
  const completed = sampleProjects.filter(p => p.status === 'completed').length;

  return (
    <div className="page-container student-dashboard">
      <header className="dashboard-header">
        <h1>Welcome back, Alex!</h1>
        <p>Computer Science • Senior</p>
      </header>

      <div className="stats-cards grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
        <div className="card">
          <h4>Total Projects</h4>
          <p className="stat-number">{total}</p>
        </div>
        <div className="card">
          <h4>In Progress</h4>
          <p className="stat-number">{inProgress}</p>
        </div>
        <div className="card">
          <h4>In Review</h4>
          <p className="stat-number">{inReview}</p>
        </div>
        <div className="card">
          <h4>Completed</h4>
          <p className="stat-number">{completed}</p>
        </div>
      </div>

      <div className="actions-cards grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1rem' }}>
        <Link to="/student/projects/new" className="card action-card">
          <div className="icon">➕</div>
          <div>
            <h4>Create New Project</h4>
            <p>Start a new project and track your progress</p>
          </div>
        </Link>
        <Link to="/student/projects" className="card action-card">
          <div className="icon">📁</div>
          <div>
            <h4>View All Projects</h4>
            <p>Browse and manage your project portfolio</p>
          </div>
        </Link>
        <Link to="/student/milestones" className="card action-card">
          <div className="icon">📅</div>
          <div>
            <h4>Milestones</h4>
            <p>See upcoming and completed milestones</p>
          </div>
        </Link>
        <Link to="/student/achievements" className="card action-card">
          <div className="icon">🏆</div>
          <div>
            <h4>Achievements</h4>
            <p>View your accomplishments</p>
          </div>
        </Link>
      </div>

      <section className="recent-projects">
        <h2>Recent Projects</h2>
        <div>
          {/* reuse project list but show a handful */}
          <Link to="/student/projects" className="button" style={{ marginBottom: '1rem' }}>
            View All
          </Link>
        </div>
        <div>
          {sampleProjects.slice(0, 2).map(p => (
            <div key={p.id} className="card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
