"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      alert('Message sent!');
    }, 2000);
  };

  return (
   <div>
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Have questions or want to get in touch? Reach out to us!</p>
    </div>
  </div>

    <div className="py-12 mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg mb-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Enter your message"
                required
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* FAQ's */}
        <div className="p-8 mb-8 ">
          <h2 className="text-3xl font-semibold mb-4">FAQ's</h2>
          <div className="text-gray-700">
            <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
            <p className="mb-4">We offer a wide range of digital services including web development, UX/UI design, data analysis, and more.</p>
            <h3 className="text-lg font-semibold mb-2">How can I apply for a job?</h3>
            <p className="mb-4">You can apply for a job by filling out the application form on our Careers page and uploading your resume.</p>
            <h3 className="text-lg font-semibold mb-2">Where is your office located?</h3>
            <p>Our office is located at the address mentioned in the Contact Information section below.</p>
          </div>
        </div>

        {/* Queries */}
        <div className=" p-8  mb-8 ">
          <h2 className="text-3xl font-semibold mb-4">Queries</h2>
          <p className="text-gray-700">
            For more queries, feel free to reach out to us at <a href="mailto:admin@digicraft.com" className="text-blue-500">admin@digicraft.com</a> or call us at <a href="tel:+911234567890" className="text-blue-500">+91 1234567890</a>. We are here to help you with any questions or concerns you may have.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <ul className="text-lg text-gray-700">
            <li className="flex items-center mb-4">
              <FaEnvelope className="w-6 h-6 mr-2 text-blue-500" />
              <Link href="mailto:admin@digicraft.com">admin@digicraft.com</Link>
            </li>
            <li className="flex items-center mb-4">
              <FaPhone className="w-6 h-6 mr-2 text-blue-500" />
              <Link href="tel:+911234567890">+91 1234567890</Link>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="w-6 h-6 mr-2 text-blue-500" />
              Address to the office goes here
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;