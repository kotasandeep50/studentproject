import React from 'react';

const StudentAchievements = () => {
  const achievements = [
    { id: 1, title: 'First Project Completed', description: 'E-Commerce Platform', date: '2026-02-25' },
  ];

  return (
    <div className="page-container">
      <header className="dashboard-header">
        <h1>Achievements</h1>
      </header>
      <div className="card">
        <ul>
          {achievements.map(a => (
            <li key={a.id}>
              <strong>{a.title}</strong> ({a.date})<br />
              {a.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentAchievements;