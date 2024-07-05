// Tag.js
import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.span`
  display: inline-block;
  background-color: #e1afd1;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const Tag = ({ tag, onClick }) => {
  return <TagWrapper onClick={() => onClick(tag)}>{tag}</TagWrapper>;
};

export default Tag;
