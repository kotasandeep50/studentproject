import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({
  id,
  title,
  description,
  status,
  progress,
  author,
  updated,
  category,
  milestones,
  mediaCount,
  feedbackCount,
  studentView,
}) => {
  // navigate is used conditionally for admin buttons
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const statusLabel = status.replace(/-/g, ' ');
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{title}</h3>
        <div className="tags">
          <span className={`status ${status}`}>{statusLabel}</span>
          {category && <span className="category">{category}</span>}
        </div>
      </div>
      <div className="project-meta">
        <small>
          By {author} • Updated {updated}
        </small>
      </div>
      <p className="project-description">{description}</p>
      {typeof progress === 'number' && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}
      <div className="project-stats">
        <span>{milestones} milestones</span>
        <span>{mediaCount} media</span>
        <span>{feedbackCount} feedback</span>
      </div>
      <div className="project-action">
        {studentView ? (
          <button className="button" onClick={() => navigate(`/student/projects/${id}`)}>
            View Details
          </button>
        ) : (
          <button className="button" onClick={() => navigate(`/admin/reviews/${id}`)}>
            Review
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
