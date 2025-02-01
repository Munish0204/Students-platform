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

  useEffect(() => {
    axios
      .get(`${base_url}/profile`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
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
    </div>
  );
};

export default Dashboard;
