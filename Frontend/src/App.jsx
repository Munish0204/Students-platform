import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Login from './pages/Login';       // Login page
import Register from './pages/Register';
import Home from './pages/Home'; 
import AboutPage from './pages/About';
import SessionsPage from './pages/Sessions'
import BrowseResourcesPage from './pages/BrowseResources';
import FeedbackPage from './pages/Feedback';



const App = () => {
  return (
    <Router>
      <Navbar /> {/* Display Navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/resources" element={<BrowseResourcesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
};

export default App;