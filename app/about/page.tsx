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
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/hero_bg.jpg')" }}
      >
        <div className="bg-gray-900 bg-opacity-60 py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto">
            <div className="mb-16 text-center text-white mt-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                Overview
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
              </h2>
              <p className="text-gray-100 mb-6">
                Pioneering Digital Transformation Through Innovative Solutions.
                We Seamlessly Blend Strategy, Design, Technology, And Data Science
                To Help Businesses Navigate The Digital Landscape. Our
                Multidisciplinary Experts Co-Create Tailored, Future-Ready
                Strategies That Unlock Growth Through Intelligent Automation And
                Data-Driven Insights.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Who Are We */}
      <div className="mb-16 text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Who Are We
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Testimonials
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
        </h2>
        <Testimonial />
      </div>

      {/* Careers */}
      <div className="mb-16 text-center hero relative flex items-center justify-center h-screen bg-cover bg-center bg-hero-pattern" 
      style={{ backgroundImage: "url('/assets/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-white">
            Careers
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-200 mb-6 max-w-lg mx-auto">
            Explore exciting career opportunities at Digicraft. Join our team of innovators and make an impact in the digital world.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/careers">
              <p className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                Explore Careers
              </p>
            </Link>
            <Link href="/founders">
              <p className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                Meet Our Founders
              </p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Blogs */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Blogs
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Media and Events
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
        </h2>
        <MediaEventsCarousel />
      </div>

      {/* Culture Gallery */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Culture Gallery
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
        </h2>
        <CultureGalleryCarousel />
      </div>

      {/* Why Work With Us */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          <Link href='/careers'>Why Work With Us?</Link>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-px w-16 h-1 bg-blue-500"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          <div className="p-6 bg-white rounded-md shadow-md transition transform hover:scale-105">
            <img src="/assets/flexi_w.jpeg" alt="Flexible Working Hours" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Working Hours</h3>
            <p className="text-gray-600">We are not a 9 to 5 organization. Our flexible working hour policy ensures every employee in Quarks feels a sense of work-life balance.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md transition transform hover:scale-105">
            <img src="/assets/room_t.jpeg" alt="Room to Grow" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Room to Grow</h3>
            <p className="text-gray-600">Work on challenging IT projects and unleash your potential. Our team leads are your mentors, helping you to work, learn, develop, and grow.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md transition transform hover:scale-105">
            <img src="/assets/health_i.jpeg" alt="Health Insurance" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>
            <p className="text-gray-600">Each Digicraft employee has medical insurance applicable in private and public healthcare facilities.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md transition transform hover:scale-105">
            <img src="/assets/flexible_b.jpeg" alt="Flexible Benefits" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Benefits</h3>
            <p className="text-gray-600">Our employees can pick the benefit they want and need from the wide range of benefit options Digicraft offers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
