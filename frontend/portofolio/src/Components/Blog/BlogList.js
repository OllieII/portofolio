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
    <div>
      <div>
        <div>
          {allTags.map(tag => (
            <Tag key={tag} tag={tag} onClick={handleTagClick} />
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              style={{ margin: '10px', backgroundColor: '#e1afd1', color: '#fff', padding: '5px', border: 'none', borderRadius: '3px' }}
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>
      <div>
        {filteredPosts.map(post => (
          <BlogPost key={post.id} {...post} onTagClick={handleTagClick} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
