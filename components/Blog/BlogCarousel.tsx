import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Context',
    author: 'John Doe',
    date: 'March 20, 2024',
    excerpt: 'In this post, we will dive into the React Context API, a powerful feature for managing state across your application...',
  },
  {
    id: 2,
    title: 'A Guide to Next.js',
    author: 'Jane Smith',
    date: 'April 5, 2024',
    excerpt: 'Next.js is a React framework that enables you to build static and server-rendered applications easily. In this guide, we will explore...',
  },
  {
    id: 3,
    title: 'Mastering Tailwind CSS',
    author: 'Alice Johnson',
    date: 'April 15, 2024',
    excerpt: 'Tailwind CSS is a utility-first CSS framework that allows you to build modern web designs without leaving your HTML...',
  },
];

const BlogList = () => {
  return (
    <div className="container mx-auto py-12 px-4 mt-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto transition-transform transform hover:scale-105">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg shadow-blue-gray-500/40">
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 hover:bg-opacity-70 transition duration-300">
                <div className="text-center text-lg font-semibold">OverView</div>
              </div>
            </div>
            <div className="p-6 mt-10 mb-10 ml-10 mr-10 ">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {post.title}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                By {post.author} on {post.date}
              </p>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased mt-2">
                {post.excerpt}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href='/blog'>
                <p className="select-none rounded-lg bg-blue-500 py-3 
                px-6 text-center align-middle font-sans text-xs font-bold 
                uppercase text-white shadow-md shadow-blue-500/20 transition-all
                hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none 
                active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                disabled:opacity-50 disabled:shadow-none">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
