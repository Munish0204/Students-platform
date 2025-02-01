import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import base_url from "../utils/api";

const Login = () => {
  const navigate = useNavigate();

  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password is too short. It must be at least 6 characters.");
      return;
    }

    try {
      // API call to the backend
      const response = await axios.post(`${base_url}/login/`, {
        email,
        password,
      });

      // Extract token from response
      if (response.status === 200) {
        const { token } = response.data;

        // Store the token and email in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        setError("");

        // Redirect to dashboard or homepage after successful login
        navigate("/dashboard");
      }
    } catch (err) {
      // Handle error response
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
