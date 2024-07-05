// BlogPost.js
import React from 'react';
import Tag from './Tag';

const BlogPost = ({ title, content, tags, onTagClick }) => {
  return (
    <div style={{ border: '1px solid #e1afd1', borderRadius: '5px', padding: '20px', margin: '10px 0', backgroundColor: '#fff' }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        {tags.map(tag => (
          <Tag key={tag} tag={tag} onClick={onTagClick} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
