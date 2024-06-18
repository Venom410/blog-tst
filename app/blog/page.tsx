/*
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
*/

import React from 'react';
import { getPostsMeta } from "@/lib/post";
import ListItem from "@/components/Posts/ListItem";

export default async function BlogPage() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-lg text-white">Explore our latest articles and insights.</p>
        </div>
      </section>
      <section className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
