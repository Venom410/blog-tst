"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const JobListings = () => {
  const jobListings = [
    { 
      title: 'Software Engineer', 
      location: 'New York', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['JavaScript', 'Python', 'Java'],
      experience: '2+ years',
    },
    { 
      title: 'UX/UI Designer', 
      location: 'San Francisco', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['HTML', 'CSS', 'JavaScript', 'React'],
      experience: '3+ years',
    },
    { 
      title: 'Data Analyst', 
      location: 'Chicago', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['SQL', 'Python', 'R'],
      experience: '2+ years',
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="container mx-auto mt-8 mb-16 bg-white">
      <h2 className="text-4xl font-semibold mb-8 text-center">Job Listings</h2>
      {jobListings.map((job, index) => (
        <div key={index} className="mb-4 border border-gray-300 rounded-md">
          <div
            className="p-4 flex justify-between items-center cursor-pointer bg-blue-100"
            onClick={() => toggleExpand(index)}
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <span>{expanded === index ? '-' : '+'}</span>
          </div>
          {expanded === index && (
            <div className="p-4 bg-white">
              <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
              <p className="text-gray-600"><strong>Experience:</strong> {job.experience}</p>
              <p className="mt-2">{job.description}</p>
              <div className="mt-2">
                <p><strong>Languages:</strong> {job.languages.join(', ')}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobListings;
