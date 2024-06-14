"use client";
import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    experience: '',
    currentCTC: '',
    noticePeriod: '',
    selectedJob: '',
    resume: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  return (
    <div className="container mx-auto mt-8 mb-16 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600">Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Email *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="block text-gray-700 font-medium">Mobile Number</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="experience" className="block text-gray-700 font-medium">Experience (In Years) *</label>
          <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleInputChange} required className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="currentCTC" className="block text-gray-700 font-medium">Current CTC (In Lakhs) *</label>
          <input type="text" id="currentCTC" name="currentCTC" value={formData.currentCTC} onChange={handleInputChange} required className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="noticePeriod" className="block text-gray-700 font-medium">Notice Period (In Days) *</label>
          <input type="text" id="noticePeriod" name="noticePeriod" value={formData.noticePeriod} onChange={handleInputChange} required className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="job" className="block text-gray-700 font-medium">Select Job *</label>
          <select id="job" name="selectedJob" value={formData.selectedJob} onChange={handleInputChange} required className="form-select mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="" disabled>Select job</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="Data Analyst">Data Analyst</option>
          </select>
        </div>

        <div>
          <label htmlFor="resume" className="block text-gray-700 font-medium">Resume:</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="form-input mt-1 rounded-md w-full border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <button type="submit" className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Submit
        </button>
        <p className="mt-4 text-gray-600">If you are unable to submit your details, then please share your recently updated resume at careers@digicraft.com</p>
      </form>
    </div>
  );
};

export default ApplicationForm;
