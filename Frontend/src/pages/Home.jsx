import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Student from '../assets/student.jpeg';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <header className="bg-blue-600 text-white text-center py-12">
        <img src={Student} alt="Hero" className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold">Tech-Enabled Awareness Platform</h1>
        <p className="text-lg mt-4">Empowering kids and students through interactive learning and environment conservation awareness</p>
        <div className="mt-8">
          <Link
            to="/sessions"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500"
          >
            Explore Sessions
          </Link>
        </div>
      </header>

      {/* Section: Our Goals */}
      <section className="my-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Our Goals</h2>
        <p className="text-lg text-gray-700 mt-4">We aim to organize sessions on environment conservation and promote practical learning to make a change at the grassroots level.</p>
        <div className="mt-8">
          <img src={""} alt="Goal Image" className="w-full h-60 object-cover rounded-lg" />
        </div>

        {/* Cards for Sessions, Resources, and Join */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={""} alt="Upcoming Sessions" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Upcoming Sessions</h3>
            <p className="text-gray-700 mt-3">Stay tuned for the next awareness session focused on sustainability and conservation.</p>
            <div className="mt-4">
              <Link
                to="/sessions"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                View Sessions
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={""} alt="Digital Resources" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Digital Resources</h3>
            <p className="text-gray-700 mt-3">Access a collection of informative digital resources to empower young minds to learn more about the environment.</p>
            <div className="mt-4">
              <Link
                to="/resources"
                className="inline-block px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
              >
                Browse Resources
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={""} alt="Join Us" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-bold text-blue-600 mt-4">Join Us</h3>
            <p className="text-gray-700 mt-3">We welcome new participants! Join our platform and become a change agent for environment conservation.</p>
            <div className="mt-4">
              <Link
                to="/register"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Register Now
              </Link>
            </div>
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

export default Home;
