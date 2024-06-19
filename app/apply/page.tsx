import React from 'react';
import CareersPage from '@/components/Career/CareersPage';
const apply = () => {
  return (
    <div className="min-h-screen">
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore our Job openings</h1>
          <p className="text-lg text-white">Discover the wide range of jobs we offer  and how 
            can you be a part of our team helping yourself and the business grow.</p>
        </div>
      </section>
      <CareersPage />
    </div>
  );
};

export default apply;
