import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const SessionsPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Back Button */}
      <Navbar/>

      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
      >
        Back
      </button>

      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Upcoming Sessions</h1>
        <p className="text-lg mt-4">
          Join us in our interactive environment conservation sessions.
        </p>
      </header>

      {/* Sessions Content */}
      <section className="my-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">All Sessions</h2>

        {/* Session Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {/* Session Card Example 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="your-image-1.jpg"
              alt="Session Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600">Session Title 1</h3>
            <p className="text-gray-700 mt-3">
              An exciting session on how to make sustainable choices and contribute to a greener
              planet.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Join Session
            </button>
          </div>

          {/* Session Card Example 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="your-image-2.jpg"
              alt="Session Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600">Session Title 2</h3>
            <p className="text-gray-700 mt-3">
              Dive into practical environmental education to help students understand their role in
              sustainability.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Join Session
            </button>
          </div>

          {/* Session Card Example 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="your-image-3.jpg"
              alt="Session Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600">Session Title 3</h3>
            <p className="text-gray-700 mt-3">
              A hands-on workshop where students can participate in environmental conservation
              activities.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Join Session
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Student Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SessionsPage;
