"use client";
import React from 'react';
import BlogCarousel from '@/components/Blog/BlogCarousel';

const BlogPage = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 text-gray-900 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <BlogCarousel />
      </div>
    </div>
  );
};

export default BlogPage;
