import React from 'react';

const Home = () => {
  return (
    <div className="home-page page-container">
      <h1>Portfolio Hub</h1>
      <p className="tagline">Track, Manage, and Showcase Student Projects &amp; Portfolios</p>
      <div className="portal-grid">
        <div className="portal-card student">
          <img src="https://via.placeholder.com/300x180?text=Student+Portal" alt="Student Portal" />
          <div className="portal-content">
            <div className="icon">🎓</div>
            <h3>Student Portal</h3>
            <ul>
              <li>Create and manage projects</li>
              <li>Upload media and documents</li>
              <li>Track project milestones</li>
              <li>Build your portfolio</li>
            </ul>
            <button className="button" onClick={() => window.location.href = '/login?role=student'}>Enter as Student</button>
          </div>
        </div>
        <div className="portal-card admin">
          <img src="https://via.placeholder.com/300x180?text=Admin+Portal" alt="Admin Portal" />
          <div className="portal-content">
            <div className="icon">🛠️</div>
            <h3>Admin Portal</h3>
            <ul>
              <li>Review all project submissions</li>
              <li>Monitor project progress</li>
              <li>Provide detailed feedback</li>
              <li>Manage portfolio submissions</li>
            </ul>
            <button className="button purple" onClick={() => window.location.href = '/login?role=admin'}>Enter as Admin</button>
          </div>
        </div>
      </div>
      <p className="demo-note">Demo Application - Choose a role to explore the platform</p>
    </div>
  );
};

export default Home;
