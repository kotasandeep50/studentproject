import React from 'react';

const sampleStudents = [
  {
    id: 1,
    name: 'Alex Johnson',
    major: 'Computer Science',
    year: 'Senior',
    email: 'alex.johnson@university.edu',
    projects: 4,
    status: 'Active',
    lastLogin: '2026-02-24',
  },
  {
    id: 2,
    name: 'Michael Chen',
    major: 'Engineering',
    year: 'Junior',
    email: 'michael.chen@university.edu',
    projects: 2,
    status: 'Active',
    lastLogin: '2026-02-20',
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    major: 'Graphic Design',
    year: 'Sophomore',
    email: 'sarah.martinez@university.edu',
    projects: 1,
    status: 'Inactive',
    lastLogin: '2025-12-15',
  },
];

const StudentManagement = () => {
  return (
    <div className="page-container student-management">
      <header className="dashboard-header">
        <h1>Student Management</h1>
      </header>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1rem' }}>
        {sampleStudents.map(s => (
          <div key={s.id} className="card">
            <h3>{s.name}</h3>
            <p>{s.major} • {s.year}</p>
            <p>{s.email}</p>
            <p>Projects: {s.projects}</p>
            <p>Status: {s.status}</p>
            <p>Last login: {s.lastLogin}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentManagement;