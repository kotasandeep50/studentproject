import React from 'react';
import ProjectCard from './ProjectCard';

// shared sample data used throughout the prototype screens
export const sampleProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Personal portfolio site.',
    status: 'in-progress',
    progress: 50,
    author: 'Alex Johnson',
    updated: '2/20/2026',
    category: 'Web Development',
    milestones: 2,
    mediaCount: 2,
    feedbackCount: 1,
    marks: null, // review score assigned by admin
  },
  {
    id: 2,
    title: 'Mobile Game',
    description: '2D platformer game.',
    status: 'pending',
    progress: 10,
    author: 'Sarah Martinez',
    updated: '2/18/2026',
    category: 'Graphic Design',
    milestones: 3,
    mediaCount: 2,
    feedbackCount: 0,
    marks: null,
  },
];

const ProjectList = ({ studentView = false }) => {
  return (
    <div className="project-list">
      {sampleProjects.map(p => (
        <ProjectCard key={p.id} {...p} studentView={studentView} />
      ))}
    </div>
  );
};

export default ProjectList;
