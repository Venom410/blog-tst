import React from 'react';
import { useRouter } from 'next/router';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Context',
    author: 'John Doe',
    date: 'March 20, 2024',
    content: 'Full content of the React Context blog post...',
    imageUrl: '/assets/blog1.jpg',
  },
  {
    id: 2,
    title: 'A Guide to Next.js',
    author: 'Jane Smith',
    date: 'April 5, 2024',
    content: 'Full content of the Next.js blog post...',
    imageUrl: '/assets/blog2.jpg',
  },
  {
    id: 3,
    title: 'Mastering Tailwind CSS',
    author: 'Alice Johnson',
    date: 'April 15, 2024',
    content: 'Full content of the Tailwind CSS blog post...',
    imageUrl: '/assets/blog3.jpg',
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-semibold mb-4">{post.title}</h2>
      <p className="text-gray-600 mb-4">By {post.author} on {post.date}</p>
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default BlogPost;
