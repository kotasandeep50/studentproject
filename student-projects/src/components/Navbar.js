import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isStudent = location.pathname.startsWith('/student');
  const isAdmin = location.pathname.startsWith('/admin');

  const handleLogout = (e) => {
    e.preventDefault();
    // clear any stored auth/role state if implemented
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="logo">📁</span> Portfolio Hub
      </Link>
      <div className="links">
        {isStudent && <NavLink to="/student/portfolio">My Portfolio</NavLink>}
        {isAdmin && <NavLink to="/admin/student-details">Student Details</NavLink>}
        {isAdmin && <NavLink to="/admin/student-mapping">Admin Assignments</NavLink>}
        {(isStudent || isAdmin) ? (
          <a href="/" onClick={handleLogout}>Logout</a>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
