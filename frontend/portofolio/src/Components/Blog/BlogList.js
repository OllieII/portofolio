// BlogList.js
import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import Tag from './Tag';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    // Fetch the blog data from the JSON file
    fetch(`${process.env.PUBLIC_URL}/Blogs/Blog1.json`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  const allTags = [...new Set(posts.flatMap(post => post.tags))];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050814',
      padding: '40px 20px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px), repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div>
          {allTags.map(tag => (
            <Tag key={tag} tag={tag} onClick={handleTagClick} />
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              style={{ margin: '10px', backgroundColor: '#22D3EE', color: '#050814', padding: '5px', border: 'none', borderRadius: '3px' }}
            >
              Clear Filter
            </button>
          )}
        </div>
        <div>
          {filteredPosts.map(post => (
            <BlogPost key={post.id} {...post} onTagClick={handleTagClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
