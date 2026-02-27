import React, { useState } from 'react';

// Sample data for admin-student assignments
const adminStudentMappings = [
  {
    id: 1,
    adminName: 'Dr. Jennifer Moore',
    adminEmail: 'j.moore@university.edu',
    specialization: 'Web Development',
    departmentHead: true,
    totalAssignedStudents: 5,
    studentsAssigned: [
      { id: 1, name: 'Alex Johnson', major: 'Computer Science', status: 'Active', projectsReviewed: 4 },
      { id: 5, name: 'Emma Wilson', major: 'Software Engineering', status: 'Active', projectsReviewed: 6 },
      { id: 8, name: 'David Park', major: 'Information Technology', status: 'Active', projectsReviewed: 3 },
      { id: 11, name: 'Lisa Anderson', major: 'Computer Science', status: 'Active', projectsReviewed: 5 },
      { id: 14, name: 'James Taylor', major: 'Software Engineering', status: 'Inactive', projectsReviewed: 2 }
    ]
  },
  {
    id: 2,
    adminName: 'Prof. Robert Chen',
    adminEmail: 'r.chen@university.edu',
    specialization: 'Machine Learning & AI',
    departmentHead: false,
    totalAssignedStudents: 4,
    studentsAssigned: [
      { id: 2, name: 'Michael Chen', major: 'Engineering', status: 'Active', projectsReviewed: 2 },
      { id: 6, name: 'Nina Patel', major: 'Data Science', status: 'Active', projectsReviewed: 7 },
      { id: 9, name: 'Marcus Johnson', major: 'Computer Science', status: 'Active', projectsReviewed: 4 },
      { id: 12, name: 'Oliver Smith', major: 'Data Science', status: 'Active', projectsReviewed: 5 }
    ]
  },
  {
    id: 3,
    adminName: 'Ms. Patricia Davis',
    adminEmail: 'p.davis@university.edu',
    specialization: 'Graphic Design & UX',
    departmentHead: false,
    totalAssignedStudents: 3,
    studentsAssigned: [
      { id: 3, name: 'Sarah Martinez', major: 'Graphic Design', status: 'Inactive', projectsReviewed: 1 },
      { id: 7, name: 'Sophia Rodriguez', major: 'Graphic Design', status: 'Active', projectsReviewed: 8 },
      { id: 10, name: 'Isabella Brown', major: 'User Experience Design', status: 'Active', projectsReviewed: 6 }
    ]
  },
];

const AdminStudentMapping = () => {
  const [expandedAdmin, setExpandedAdmin] = useState(1);
  const [assignmentFilter, setAssignmentFilter] = useState('all');

  const filteredMappings = assignmentFilter === 'all' 
    ? adminStudentMappings 
    : adminStudentMappings.filter(mapping => 
        assignmentFilter === 'head' ? mapping.departmentHead : !mapping.departmentHead
      );

  const totalStudents = adminStudentMappings.reduce((sum, m) => sum + m.totalAssignedStudents, 0);
  const totalAdmins = adminStudentMappings.length;
  const avgStudentsPerAdmin = (totalStudents / totalAdmins).toFixed(1);

  return (
    <div className="page-container admin-student-mapping">
      <header className="dashboard-header">
        <h1>Admin-Student Assignments</h1>
        <p>View and manage how students are assigned to administrators</p>
      </header>

      {/* Stats Section */}
      <div className="stats-cards grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', marginBottom: '2rem' }}>
        <div className="card">
          <h4>Total Admins</h4>
          <p className="stat-number">{totalAdmins}</p>
        </div>
        <div className="card">
          <h4>Total Students</h4>
          <p className="stat-number">{totalStudents}</p>
        </div>
        <div className="card">
          <h4>Avg Students/Admin</h4>
          <p className="stat-number">{avgStudentsPerAdmin}</p>
        </div>
        <div className="card">
          <h4>Department Heads</h4>
          <p className="stat-number">{adminStudentMappings.filter(m => m.departmentHead).length}</p>
        </div>
      </div>

      {/* Filter */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
        <label style={{ fontWeight: 'bold' }}>Filter:</label>
        <button 
          onClick={() => setAssignmentFilter('all')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: assignmentFilter === 'all' ? '#007bff' : '#f0f0f0',
            color: assignmentFilter === 'all' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          All
        </button>
        <button 
          onClick={() => setAssignmentFilter('head')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: assignmentFilter === 'head' ? '#007bff' : '#f0f0f0',
            color: assignmentFilter === 'head' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Department Heads Only
        </button>
        <button 
          onClick={() => setAssignmentFilter('regular')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: assignmentFilter === 'regular' ? '#007bff' : '#f0f0f0',
            color: assignmentFilter === 'regular' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Regular Admins
        </button>
      </div>

      {/* Admin-Student Mapping Cards */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {filteredMappings.map(admin => (
          <div key={admin.id} className="card" style={{ overflow: 'hidden' }}>
            {/* Admin Header */}
            <button
              onClick={() => setExpandedAdmin(expandedAdmin === admin.id ? null : admin.id)}
              style={{
                width: '100%',
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1rem',
                alignItems: 'center',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <h3 style={{ margin: 0 }}>{admin.adminName}</h3>
                    {admin.departmentHead && (
                      <span style={{
                        backgroundColor: '#ffc107',
                        color: '#333',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                      }}>
                        Department Head
                      </span>
                    )}
                  </div>
                  <p style={{ margin: '0.25rem 0', color: '#666' }}>
                    <strong>Specialization:</strong> {admin.specialization}
                  </p>
                  <p style={{ margin: '0.25rem 0', color: '#666' }}>
                    <strong>Email:</strong> {admin.adminEmail}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', padding: '0 1rem', borderRight: '1px solid #ddd' }}>
                    <p style={{ fontSize: '0.85rem', color: '#999', margin: 0 }}>Assigned Students</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#007bff' }}>
                      {admin.totalAssignedStudents}
                    </p>
                  </div>
                  <span style={{ fontSize: '1.5rem' }}>
                    {expandedAdmin === admin.id ? '▼' : '▶'}
                  </span>
                </div>
              </div>
            </button>

            {/* Expandable Students List */}
            {expandedAdmin === admin.id && (
              <div style={{ borderTop: '1px solid #ddd', padding: '1.5rem' }}>
                <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Assigned Students ({admin.studentsAssigned.length})</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                  {admin.studentsAssigned.map(student => (
                    <div key={student.id} style={{
                      padding: '1rem',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                        <div>
                          <h5 style={{ margin: 0, marginBottom: '0.25rem' }}>{student.name}</h5>
                          <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{student.major}</p>
                        </div>
                        <span style={{
                          backgroundColor: student.status === 'Active' ? '#4caf50' : '#f44336',
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          whiteSpace: 'nowrap'
                        }}>
                          {student.status}
                        </span>
                      </div>
                      <div style={{
                        padding: '0.75rem',
                        backgroundColor: '#e3f2fd',
                        borderRadius: '4px',
                        textAlign: 'center'
                      }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>Projects Reviewed</p>
                        <p style={{ margin: '0.25rem 0', fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                          {student.projectsReviewed}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Assignment Summary */}
      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f5f5f5' }}>
        <h3>Assignment Summary</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          {filteredMappings.map(admin => (
            <div key={admin.id} style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '4px', border: '1px solid #ddd' }}>
              <h4 style={{ marginTop: 0 }}>{admin.adminName}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.75rem' }}>
                <div>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.85rem', color: '#666' }}>Assigned Students</p>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>{admin.totalAssignedStudents}</p>
                </div>
                <div>
                  <p style={{ margin: '0.25rem 0', fontSize: '0.85rem', color: '#666' }}>Total Reviews</p>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {admin.studentsAssigned.reduce((sum, s) => sum + s.projectsReviewed, 0)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminStudentMapping;
