import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Import the Navbar component
import Login from './pages/Login';       // Login page
import Register from './pages/Register';
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/About';
import AssignmentPage from './pages/Assignment';
import AttendancePage from './pages/Attendance';
import SessionsPage from './pages/Sessions'
import BrowseResourcesPage from './pages/BrowseResources';
import FeedbackPage from './pages/Feedback'
import Sidebar from './components/Sidebar'; 
import Navbar from './components/Navbar';




const App = () => {
  return (
    <Router>
      {/* <Sidebar/> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
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