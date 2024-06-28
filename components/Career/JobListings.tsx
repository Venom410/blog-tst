"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const JobListings = () => {
  const jobListings = [
    { 
      title: 'Jr. Backend Engineer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['JavaScript', 'Node.js', 'Express'],
      experience: '1-2 years',
    },
    { 
      title: 'Sr. Backend Engineer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['JavaScript', 'Python', 'MongoDB'],
      experience: '5+ years',
    },
    { 
      title: 'Jr. Frontend Engineer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['HTML', 'CSS', 'JavaScript', 'React'],
      experience: '1-2 years',
    },
    { 
      title: 'Sr. Frontend Engineer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['React', 'TypeScript', 'Redux'],
      experience: '5+ years',
    },
    { 
      title: 'Lead Backend Engineer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Java', 'Spring Boot', 'MySQL'],
      experience: '8+ years',
    },
    { 
      title: 'Lead Frontend Engineer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Angular', 'Vue.js', 'JavaScript'],
      experience: '8+ years',
    },
    { 
      title: 'SDE Intern', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['C++', 'Python'],
      experience: 'Internship',
    },
    { 
      title: 'Jr. SDET', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Python', 'Selenium', 'JUnit'],
      experience: '1-2 years',
    },
    { 
      title: 'Sr. SDET', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Java', 'TestNG', 'REST Assured'],
      experience: '5+ years',
    },
    { 
      title: 'Lead SDET', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['C#', 'SpecFlow', 'Postman'],
      experience: '8+ years',
    },
    { 
      title: 'Junior QA (Manual)', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Manual Testing', 'Bug Tracking'],
      experience: '1-2 years',
    },
    { 
      title: 'Senior QA (Manual)', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Test Planning', 'Regression Testing'],
      experience: '5+ years',
    },
    { 
      title: 'Lead QA (Manual)', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Quality Assurance', 'Defect Management'],
      experience: '8+ years',
    },
    { 
      title: 'DevOps Engineer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['Docker', 'Kubernetes', 'CI/CD'],
      experience: '3+ years',
    },
    { 
      title: 'BI Developer', 
      location: 'Gurugram, Haryana (Work from office)', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, enim ut euismod viverra, velit arcu viverra ipsum, non pulvinar arcu orci vel mi.',
      languages: ['SQL', 'Tableau', 'Power BI'],
      experience: '3+ years',
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
        <div key={index} className="mb-4 rounded-md overflow-hidden shadow-lg border border-gray-300">
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
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd6-gEm75RryhkZaEyF_YuSNdA6b18G-HFKfbeNHoAagpf76A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </Link>
            </div>
          )}
        </div>
      ))}
      <div className="text-center text-gray-600 mt-4 font-bold">
        <p>If you are unable to submit the form or have more queries, feel free to reach out to us at</p>
           <Link href="mailto:admin@digicraft.com"><p className="text-blue-500 hover:underline">admin@digicraft.com</p></Link>
            <p>or call us at <Link href="tel:+911234567890" className="text-blue-500 hover:underline">+91 1234567890</Link>. We are here to help you with any questions or concerns you may have.</p>
      </div>
    </div>
  );
};

export default JobListings;
