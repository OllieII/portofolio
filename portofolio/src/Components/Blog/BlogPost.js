import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
`;

const BlogTitle = styled.h2`
  margin: 0 0 10px;
`;

const BlogMeta = styled.div`
  color: #999;
  margin-bottom: 10px;
`;

const BlogContent = styled.p`
  font-size: 16px;
`;

const BlogPost = ({ blog }) => {
  return (
    <BlogContainer>
      <BlogTitle>{blog.title}</BlogTitle>
      <BlogMeta>By {blog.author} on {blog.date}</BlogMeta>
      <BlogContent>{blog.content}</BlogContent>
    </BlogContainer>
  );
};

export default BlogPost;
