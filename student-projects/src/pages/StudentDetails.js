import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample student data with their projects
const sampleStudentsWithProjects = [
  {
    id: 1,
    name: 'Alex Johnson',
    major: 'Computer Science',
    year: 'Senior',
    email: 'alex.johnson@university.edu',
    status: 'Active',
    lastLogin: '2026-02-24',
    gpa: 3.8,
    enrollmentDate: '2022-09-01',
    projects: [
      { id: 1, title: 'E-Commerce Platform', status: 'in-progress', category: 'Web Development', progress: 50, updated: '2/20/2026' },
      { id: 3, title: 'AI Chatbot', status: 'completed', category: 'Machine Learning', progress: 100, updated: '2/15/2026' },
      { id: 5, title: 'Blog Platform', status: 'in-progress', category: 'Web Development', progress: 75, updated: '2/22/2026' },
      { id: 7, title: 'Task Manager', status: 'completed', category: 'Web Development', progress: 100, updated: '2/10/2026' }
    ]
  },
  {
    id: 2,
    name: 'Michael Chen',
    major: 'Engineering',
    year: 'Junior',
    email: 'michael.chen@university.edu',
    status: 'Active',
    lastLogin: '2026-02-20',
    gpa: 3.6,
    enrollmentDate: '2023-09-01',
    projects: [
      { id: 2, title: 'Mobile Game', status: 'pending', category: 'Game Development', progress: 10, updated: '2/18/2026' },
      { id: 4, title: 'IoT Weather Station', status: 'in-progress', category: 'Engineering', progress: 60, updated: '2/19/2026' }
    ]
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    major: 'Graphic Design',
    year: 'Sophomore',
    email: 'sarah.martinez@university.edu',
    status: 'Inactive',
    lastLogin: '2025-12-15',
    gpa: 3.4,
    enrollmentDate: '2024-09-01',
    projects: [
      { id: 6, title: 'Logo Design Portfolio', status: 'completed', category: 'Graphic Design', progress: 100, updated: '2/05/2026' }
    ]
  },
];

const StudentDetails = () => {
  const [selectedStudent, setSelectedStudent] = useState(sampleStudentsWithProjects[0]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#4caf50';
      case 'in-progress':
        return '#ff9800';
      case 'pending':
        return '#f44336';
      default:
        return '#999';
    }
  };

  return (
    <div className="page-container student-details">
      <header className="dashboard-header">
        <h1>Student Details & Projects</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', marginTop: '2rem' }}>
        {/* Student List */}
        <div className="students-sidebar" style={{ borderRight: '1px solid #ddd', paddingRight: '1rem' }}>
          <h3>Students</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {sampleStudentsWithProjects.map(student => (
              <button
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                style={{
                  padding: '0.75rem',
                  border: selectedStudent.id === student.id ? '2px solid #007bff' : '1px solid #ddd',
                  backgroundColor: selectedStudent.id === student.id ? '#e7f3ff' : '#fff',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontWeight: selectedStudent.id === student.id ? 'bold' : 'normal',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>{student.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>{student.major}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Student Details */}
        <div className="student-content">
          {selectedStudent && (
            <>
              {/* Student Info Card */}
              <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h2>{selectedStudent.name}</h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '0.5rem' }}>
                      {selectedStudent.major} • {selectedStudent.year}
                    </p>
                    <div style={{ marginTop: '1rem' }}>
                      <p><strong>Email:</strong> {selectedStudent.email}</p>
                      <p><strong>Status:</strong> <span style={{ 
                        color: selectedStudent.status === 'Active' ? '#4caf50' : '#f44336',
                        fontWeight: 'bold'
                      }}>{selectedStudent.status}</span></p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="card" style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
                      <h4>GPA</h4>
                      <p style={{ fontSize: '1.8rem', color: '#007bff', fontWeight: 'bold' }}>{selectedStudent.gpa}</p>
                    </div>
                    <div className="card" style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
                      <h4>Total Projects</h4>
                      <p style={{ fontSize: '1.8rem', color: '#007bff', fontWeight: 'bold' }}>{selectedStudent.projects.length}</p>
                    </div>
                    <div className="card" style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
                      <h4>Enrollment Date</h4>
                      <p style={{ fontSize: '0.9rem' }}>{selectedStudent.enrollmentDate}</p>
                    </div>
                    <div className="card" style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
                      <h4>Last Login</h4>
                      <p style={{ fontSize: '0.9rem' }}>{selectedStudent.lastLogin}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Projects ({selectedStudent.projects.length})</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  {selectedStudent.projects.length > 0 ? (
                    selectedStudent.projects.map(project => (
                      <div key={project.id} className="card" style={{ borderLeft: `4px solid ${getStatusColor(project.status)}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                          <div style={{ flex: 1 }}>
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>{project.title}</h4>
                            <p style={{ margin: '0.25rem 0', color: '#666', fontSize: '0.9rem' }}>{project.category}</p>
                          </div>
                          <span style={{
                            backgroundColor: getStatusColor(project.status),
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            textTransform: 'capitalize'
                          }}>
                            {project.status.replace('-', ' ')}
                          </span>
                        </div>
                        
                        <div style={{ marginTop: '1rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.85rem' }}>Progress</span>
                            <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{project.progress}%</span>
                          </div>
                          <div style={{ 
                            width: '100%', 
                            height: '8px', 
                            backgroundColor: '#e0e0e0', 
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              width: `${project.progress}%`,
                              height: '100%',
                              backgroundColor: getStatusColor(project.status),
                              transition: 'width 0.3s ease'
                            }} />
                          </div>
                        </div>

                        <p style={{ margin: '1rem 0 0 0', fontSize: '0.8rem', color: '#999' }}>
                          Updated: {project.updated}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div style={{ gridColumn: '1 / -1', padding: '2rem', textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
                      <p style={{ color: '#999' }}>No projects yet</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
