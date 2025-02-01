import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for toggle

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if user is logged in by looking for the token in local storage
  const isLoggedIn = !localStorage.getItem("token");

  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logout function
  const handleLogout = () => {
    localStorage.clear(); // Clear all stored data // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            Student Portal
          </Link>
        </div>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-6 absolute lg:relative bg-blue-600 lg:bg-transparent w-full lg:w-auto top-16 lg:top-0 left-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/about"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            About
          </Link>

          <Link
            to="/dashboard"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-colors"
          >
            Profile
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

          {/* Conditional Rendering for Login/Logout */}
          {isLoggedIn ? (
            <Link
              to="/login"
              className={`px-3 py-2 rounded-md transition-all ${
                location.pathname === "/login"
                  ? "bg-blue-700 text-white"
                  : "hover:bg-blue-700 hover:text-white"
              }`}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
