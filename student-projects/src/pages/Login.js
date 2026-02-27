import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // read ?role=student|admin from query string so homepage buttons can preset it
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const r = params.get('role');
    if (r === 'admin' || r === 'student') {
      setRole(r);
    }
  }, []);

  const credentials = {
    student: { username: 'student', password: 'student123' },
    admin: { username: 'admin', password: 'admin123' },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic credential check
    const cred = credentials[role];
    if (username === cred.username && password === cred.password) {
      setError('');
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/student');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container page-container">
      <div className="card login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p style={{ fontSize: '0.85rem', color: '#555' }}>
            use <strong>student/student123</strong> or <strong>admin/admin123</strong>
          </p>
          <button className="button" type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
