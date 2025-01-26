import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = false; // Replace with actual user authentication state

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300"
        >
          Student Portal
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              {/* Login link */}
              <Link
                to="/login"
                className={`px-4 py-2 rounded-lg transition-all ${
                  location.pathname === '/login'
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-700 hover:text-white'
                }`}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              {/* Logout button */}
              <button
                onClick={() => {
                  // TODO: Implement actual logout logic
                  console.log('Logging out...');
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
