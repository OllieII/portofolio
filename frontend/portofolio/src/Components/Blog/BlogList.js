// BlogList.js
import React, { useState } from 'react';
import BlogPost from './BlogPost';
import Tag from './Tag';
import blogPosts from '../../content/blog-posts.json';

const BlogList = () => {
  const posts = blogPosts;
  const [selectedTag, setSelectedTag] = useState(null);

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
