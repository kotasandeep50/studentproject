import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import StudentProjects from './pages/StudentProjects';
import AdminDashboard from './pages/AdminDashboard';
import AdminReviews from './pages/AdminReviews';
import AdminReviewDetail from './pages/AdminReviewDetail';
import StudentProjectDetail from './pages/StudentProjectDetail';
import StudentMilestones from './pages/StudentMilestones';
import StudentAchievements from './pages/StudentAchievements';
import StudentManagement from './pages/StudentManagement';
import ProjectForm from './pages/ProjectForm';
import Portfolio from './pages/Portfolio';
import StudentDetails from './pages/StudentDetails';
import AdminStudentMapping from './pages/AdminStudentMapping';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/projects" element={<StudentProjects />} />
          <Route path="/student/projects/:id" element={<StudentProjectDetail />} />
          <Route path="/student/projects/new" element={<ProjectForm />} />
          <Route path="/student/milestones" element={<StudentMilestones />} />
          <Route path="/student/achievements" element={<StudentAchievements />} />
          <Route path="/student/portfolio" element={<Portfolio />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          <Route path="/admin/reviews/:id" element={<AdminReviewDetail />} />
          <Route path="/admin/students" element={<StudentManagement />} />
          <Route path="/admin/student-details" element={<StudentDetails />} />
          <Route path="/admin/student-mapping" element={<AdminStudentMapping />} />
          {/* additional admin routes could go here */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
