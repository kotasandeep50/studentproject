import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>404 - Page Not Found</h2>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </div>
  );
};

export default NotFound;
