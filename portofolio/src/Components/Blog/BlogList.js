import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/Blogs/Blog1.json`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching the blog data', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogs.map(blog => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
