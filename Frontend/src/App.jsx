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
<<<<<<< HEAD
import Navbar from './components/Navbar'; // Assuming Navbar is a component
import Sidebar from './components/Sidebar'; 

=======
// import Sidebar from './components/Sidebar'; 
import Navbar from './components/Navbar';
>>>>>>> bf7c1bfc03f0fb7021d4ba4528897eea3bf27e58



import ContactPage from './pages/Contact';

const App = () => {
  return (
    <Router>
      {/* <Sidebar/> */}
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
