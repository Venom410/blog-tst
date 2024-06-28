"use client";

import React, { useState } from 'react';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [applicationData, setApplicationData] = useState([]);

  const handleLogin = async () => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      setLoggedIn(true);
      fetchContactData();
      fetchApplicationData();
    } else {
      const { message } = await response.json();
      setError(message);
    }
  };

  const fetchContactData = async () => {
    const response = await fetch('/api/contact/getContacts');
    const data = await response.json();
    setContactData(data);
  };

  const fetchApplicationData = async () => {
    const response = await fetch('/api/job/getApplications');
    const data = await response.json();
    setApplicationData(data);
  };

  if (!loggedIn) {
    return (
      <div className="container mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button onClick={handleLogin} className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600">Admin Dashboard</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Contact Us Data</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact: any) => (
              <tr key={contact.id}>
                <td className="border px-4 py-2">{contact.id}</td>
                <td className="border px-4 py-2">{contact.name}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.message}</td>
                <td className="border px-4 py-2">{contact.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Job Application Data</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile Number</th>
              <th className="px-4 py-2">Experience</th>
              <th className="px-4 py-2">Current CTC</th>
              <th className="px-4 py-2">Notice Period</th>
              <th className="px-4 py-2">Selected Job</th>
              <th className="px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {applicationData.map((application: any) => (
              <tr key={application.id}>
                <td className="border px-4 py-2">{application.id}</td>
                <td className="border px-4 py-2">{application.name}</td>
                <td className="border px-4 py-2">{application.email}</td>
                <td className="border px-4 py-2">{application.mobileNumber}</td>
                <td className="border px-4 py-2">{application.experience}</td>
                <td className="border px-4 py-2">{application.currentCTC}</td>
                <td className="border px-4 py-2">{application.noticePeriod}</td>
                <td className="border px-4 py-2">{application.selectedJob}</td>
                <td className="border px-4 py-2">{application.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLogin;
