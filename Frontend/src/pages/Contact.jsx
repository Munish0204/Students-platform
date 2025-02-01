import React from 'react';
import Navbar from '../components/Navbar';



const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 right-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
      >
        Back
      </button>

      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">
          Have questions? We're here to help. Fill out the form below or reach out to us directly.
        </p>
      </header>

      <main className="max-w-4xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Send us a Message</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for your message! We’ll get back to you soon.');
          }}
        >
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Your Email "
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        <p>&copy; 2025 Student Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
