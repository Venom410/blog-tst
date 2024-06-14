import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Context',
    author: 'John Doe',
    date: 'March 20, 2024',
    excerpt: 'In this post, we will dive into the React Context API, a powerful feature for managing state across your application...',
    imageUrl: '/assets/blog1.jpg',
  },
  {
    id: 2,
    title: 'A Guide to Next.js',
    author: 'Jane Smith',
    date: 'April 5, 2024',
    excerpt: 'Next.js is a React framework that enables you to build static and server-rendered applications easily. In this guide, we will explore...',
    imageUrl: '/assets/blog2.jpg',
  },
  {
    id: 3,
    title: 'Mastering Tailwind CSS',
    author: 'Alice Johnson',
    date: 'April 15, 2024',
    excerpt: 'Tailwind CSS is a utility-first CSS framework that allows you to build modern web designs without leaving your HTML...',
    imageUrl: '/assets/blog3.jpg',
  },
];

const BlogList = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-semibold text-center mb-8">Our Blog</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-6 p-4 border border-gray-300 rounded-lg bg-white">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">By {post.author} on {post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`}>
                <p className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block mt-4">
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
