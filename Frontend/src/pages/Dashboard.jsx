import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../utils/api';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    assignmentsSubmitted: 0,
    profilePicture: '',
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/profile`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    axios
      .get(`${base_url}/courses`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div>
      <Navbar/>

      <h1 className="text-4xl font-bold text-blue-600 mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="w-24 h-24 mr-6">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="bg-blue-600 text-white p-6 mt-8 rounded-lg shadow-lg text-center">
        <h3 className="text-3xl font-semibold">Assignments Submitted</h3>
        <p className="text-5xl font-bold mt-4">{user.assignmentsSubmitted}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={course.image || 'https://via.placeholder.com/300'} 
                alt={course.title} 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button 
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" 
                onClick={() => window.location.href = `/course/${course.id}`}
              >
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
