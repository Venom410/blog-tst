"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="h-12 w-12">
          <Link href="/">
            <img src="/assets/logo.jpg" alt="Digicraft Logo" className="h-full w-full object-contain" />
          </Link>
        </div>
        {/* Responsive Menu Button */}
        <button
          className="block md:hidden px-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Desktop and Mobile Menu */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="py-2 px-4 md:py-0"><Link href="/services">Services</Link></li>
          <li className="py-2 px-4 md:py-0"><Link href="/about">About us</Link></li>
          <li className="py-2 px-4 md:py-0"><Link href="/domains">Domains</Link></li>
          <li className="py-2 px-4 md:py-0"><Link href="/blog">Blogs</Link></li>
          <li className="py-2 px-4 md:py-0"><Link href="/careers">Careers</Link></li>
          <li className="py-2 px-4 md:py-0"><Link href="/founders">Founders</Link></li>
          <li className="py-2 px-4 md:py-0"><Link href="/contact">Contact us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
