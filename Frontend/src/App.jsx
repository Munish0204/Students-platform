import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';       // Login page
import Register from './pages/Register';
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/About';
import AssignmentPage from './pages/Assignment';
import AttendancePage from './pages/Attendance';
import SessionsPage from './pages/Sessions';
import BrowseResourcesPage from './pages/BrowseResources';
import FeedbackPage from './pages/Feedback'; // Corrected import statement
import Navbar from './components/Navbar'; // Assuming Navbar is a component
import Sidebar from './components/Sidebar'; 
import ContactPage from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/resources" element={<BrowseResourcesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
};

export default App;
