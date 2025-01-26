import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-6 relative">
      {/* Back Button at Top-Right */}
      <button
        onClick={() => navigate(-1)} // Navigate to the previous page
        className="absolute top-4 right-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
      >
        Back
      </button>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-blue-800 mb-6">About Us</h1>
        
        {/* About Section */}
        <p className="text-lg text-gray-800 text-center max-w-3xl leading-relaxed mb-8">
          Welcome to our Tech-Enabled Awareness Platform! Our mission is to empower kids and students 
          through interactive learning, sessions on environment conservation, and access to quality 
          resources to spark a love for sustainable living.
        </p>

        {/* Vision Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-3xl mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To create an engaging learning ecosystem that encourages students to understand 
            and contribute to environment conservation at the grassroots level.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-3xl">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 text-left leading-relaxed">
            <li className="mb-2">Environmental Responsibility</li>
            <li className="mb-2">Empowering Young Minds</li>
            <li className="mb-2">Inclusive and Accessible Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
