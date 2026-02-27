import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleProjects } from '../components/ProjectList';

const AdminReviewDetail = () => {
  const { id } = useParams();
  const project = sampleProjects.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="page-container">
        <h2>Project not found</h2>
        <Link to="/admin/reviews" className="button">Back to reviews</Link>
      </div>
    );
  }

  const [marks, setMarks] = React.useState(project.marks || '');
  const [saved, setSaved] = React.useState(false);

  const handleSave = () => {
    project.marks = marks;
    project.status = 'completed';
    setSaved(true);
  };

  return (
    <div className="page-container">
      <header className="dashboard-header">
        <h1>Review: {project.title}</h1>
      </header>
      <div className="card">
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Author:</strong> {project.author}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Progress:</strong> {project.progress}%</p>
        {project.marks != null && (
          <p><strong>Marks:</strong> {project.marks}</p>
        )}
        <div className="form-group">
          <label htmlFor="marks">Marks</label>
          <input
            type="number"
            id="marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleSave}>Save &amp; Approve</button>
        {saved && <p style={{ color: 'green' }}>Marks saved!</p>}
        <Link to="/admin/reviews" className="button" style={{ marginLeft: '1rem' }}>Back to list</Link>
      </div>
    </div>
  );
};

export default AdminReviewDetail;