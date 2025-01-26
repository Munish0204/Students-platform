import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">Awareness Platform</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/about"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            About
          </Link>
        
          <Link
            to="/attendance"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            Attendance
          </Link>

          <Link
            to="/assignment"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            Assignment
          </Link>
          
          <Link
            to="/sessions"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            View Section
          </Link>

          <Link
            to="/contact"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/feedback"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            Feedback
          </Link>
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md transition-colors"
          >
            
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
