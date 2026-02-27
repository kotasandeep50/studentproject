import React from 'react';

const ProjectForm = () => {
  return (
    <div className="project-form-page">
      <div className="card">
        <h2>Project Submission / Update</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="media">Upload Media:</label>
            <input type="file" id="media" name="media" multiple />
          </div>
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
