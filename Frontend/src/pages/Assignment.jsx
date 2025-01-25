import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignmentPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // State for assignments
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Math Homework', description: 'Complete algebra worksheet.', status: 'Submitted' },
    { id: 2, title: 'Science Project', description: 'Build a model of the solar system.', status: 'Pending' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
      >
        Back
      </button>

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Assignments</h1>

        {/* Assignments List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {assignment.title}
              </h2>
              <p className="text-gray-600 mb-4">{assignment.description}</p>
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  assignment.status === 'Submitted'
                    ? 'bg-green-200 text-green-800'
                    : 'bg-yellow-200 text-yellow-800'
                }`}
              >
                {assignment.status}
              </span>
            </div>
          ))}
        </div>

        {/* Submit Assignment Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Submit New Assignment</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const title = e.target.title.value;
              const description = e.target.description.value;

              if (title && description) {
                setAssignments([
                  ...assignments,
                  {
                    id: assignments.length + 1,
                    title,
                    description,
                    status: 'Pending',
                  },
                ]);
                e.target.reset();
              }
            }}
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Assignment Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit Assignment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
