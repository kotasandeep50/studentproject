import React from 'react';

const StudentMilestones = () => {
  const milestones = [
    { id: 1, title: 'Project proposal submitted', date: '2026-01-15' },
    { id: 2, title: 'Design document completed', date: '2026-02-01' },
    { id: 3, title: 'Prototype demo', date: '2026-02-20' },
  ];

  return (
    <div className="page-container">
      <header className="dashboard-header">
        <h1>Milestones</h1>
      </header>
      <div className="card">
        <ul>
          {milestones.map(m => (
            <li key={m.id}>{m.date}: {m.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentMilestones;