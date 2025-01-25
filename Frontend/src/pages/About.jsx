import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Welcome to our Tech-Enabled Awareness Platform! Our mission is to empower kids and students 
        through interactive learning, sessions on environment conservation, and access to quality 
        resources to spark a love for sustainable living.
      </p>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-green-600">Our Vision</h2>
        <p className="mt-2 text-gray-600">
          To create an engaging learning ecosystem that encourages students to understand 
          and contribute to environment conservation at the grassroots level.
        </p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-green-600">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>Environmental Responsibility</li>
          <li>Empowering Young Minds</li>
          <li>Inclusive and Accessible Learning</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
