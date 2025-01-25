import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = false; // You can replace this with actual user authentication state

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold hover:text-blue-200">
          Platform Logo
        </Link>

        {/* Navigation links */}
        <div className="flex items-center space-x-4">
          {/* Render Login and Register links when not logged in */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className={`${
                  location.pathname === "/login"
                    ? "bg-blue-500 text-white px-3 py-1 rounded"
                    : "hover:text-blue-200"
                }`}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  // TODO: Implement actual logout logic
                  console.log('Logging out...');
                }}
                className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
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
