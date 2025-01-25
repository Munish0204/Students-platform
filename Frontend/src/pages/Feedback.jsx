import React, { useState } from 'react';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General',
    feedback: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would send `formData` to a backend server using an API
    console.log('Submitted Feedback:', formData);

    // Mock feedback submission success
    setMessage('Thank you for your feedback! We appreciate your input.');
    setFormData({ name: '', email: '', category: 'General', feedback: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Feedback Page</h1>
        <p className="text-lg mt-4">We value your feedback! Please share your thoughts and suggestions.</p>
      </header>

      {/* Feedback Form */}
      <section className="my-16 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600">Share Your Feedback</h2>
          <form onSubmit={handleSubmit} className="mt-6">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                Feedback Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="General">General</option>
                <option value="Sessions">Sessions</option>
                <option value="Resources">Resources</option>
                <option value="Platform">Platform</option>
              </select>
            </div>

            {/* Feedback */}
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Write your feedback here..."
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Submit Feedback
            </button>
          </form>

          {/* Submission Message */}
          {message && (
            <p className="mt-6 text-green-600 font-semibold">{message}</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Tech-Enabled Awareness Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FeedbackPage;
