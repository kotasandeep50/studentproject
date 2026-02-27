import React from 'react';

const Portfolio = () => {
  // placeholder stats
  const stats = {
    total: 2,
    completed: 1,
    inProgress: 1,
    rating: 4.5,
  };

  return (
    <div className="page-container portfolio-page">
      <header className="portfolio-header card">
        <div className="profile-photo" style={{width: '80px', height:'80px', borderRadius:'50%', background:'#ccc', marginRight:'1rem'}}></div>
        <div>
          <h2>Alex Johnson</h2>
          <p>Computer Science • Senior • alex.johnson@university.edu</p>
          <p>Passionate about web development and AI. Love building innovative solutions.</p>
        </div>
      </header>

      <div className="stats-cards grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
        <div className="card">
          <h4>Total Projects</h4>
          <p className="stat-number">{stats.total}</p>
        </div>
        <div className="card">
          <h4>Completed</h4>
          <p className="stat-number">{stats.completed}</p>
        </div>
        <div className="card">
          <h4>In Progress</h4>
          <p className="stat-number">{stats.inProgress}</p>
        </div>
        <div className="card">
          <h4>Avg. Rating</h4>
          <p className="stat-number">{stats.rating}</p>
        </div>
      </div>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="grid">
          {/* placeholder cards */}
          <div className="card">
            <h3>E-Commerce Platform</h3>
            <p>A full-stack e-commerce platform built with React, Node.js, and MongoDB.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
