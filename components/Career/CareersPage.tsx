import React from 'react';
import JobListings from './JobListings';

const CareersPage = () => {
  return (
    <div className="container mx-auto p-4  bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
      <h1 className="text-4xl font-semibold mb-8 text-center mt-20">Careers at Digicraft</h1>
        <JobListings />
      </div>

  );
};

export default CareersPage;
