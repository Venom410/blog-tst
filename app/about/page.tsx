"use client";
import React from 'react';
import Link from 'next/link';
import BlogCarousel from '@/components/Blog/BlogCarousel';
import Testimonial from './Testimonial';
import MediaEventsCarousel from './MediaEventsCarousel';
import CultureGalleryCarousel from './CultureGalleryCarousel';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">What do we do?</h1>
          <p className="text-lg md:text-xl mb-6">
            Pioneering Digital Transformation Through Innovative Solutions. We 
            Seamlessly Blend Strategy, Design, Technology, And Data Science To 
            Help Businesses Navigate The Digital Landscape. Our Multidisciplinary 
            Experts Co-Create Tailored, Future-Ready Strategies That Unlock Growth 
            Through Intelligent Automation And Data-Driven Insights.
          </p>
        </div>
      </section>
      
      {/* Who Are We */}
      <div className="mb-16 text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Who Are We
        </h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A mollitia pariatur perferendis veniam quibusdam quo, consequuntur modi incidunt! Vel aliquam error magni et dolorum!
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/domains">
            <p className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              Explore our Domains
            </p>
          </Link>
          <Link href="/services">
            <p className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              The Services We Offer 
            </p>
          </Link>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Testimonials
        </h2>
        <Testimonial />
      </div>

      {/* Careers */}
      <div className="mb-16 text-center hero relative flex items-center justify-center h-screen bg-cover bg-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Careers
          </h2>
          <p className="text-gray-200 mb-6 max-w-lg mx-auto">
            Explore exciting career opportunities at Digicraft. Join our team of innovators and make an impact in the digital world.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/careers">
              <p className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                Explore Careers
              </p>
            </Link>
            <Link href="/founders">
              <p className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                Meet Our Founders
              </p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Blogs */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Blogs
        </h2>
        <div className="mt-8">
          <BlogCarousel />
        </div>
        <Link href="/blog">
          <p className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-lg inline-block mt-4 transition duration-300 transform hover:scale-105">
            Read More
          </p>
        </Link>
      </div>

      {/* Media and Events */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Media and Events
        </h2>
        <MediaEventsCarousel />
      </div>

      {/* Culture Gallery */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Culture Gallery
        </h2>
        <CultureGalleryCarousel />
      </div>

    </section>
  );
};

export default About;
