import React from 'react';
import styled from 'styled-components';

const Media = styled.div`
  width: 100%;
  height: 300px; /* Adjust the height as needed */
  background-color: #d18dd1;
  border-radius: 10px;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;
`;

const MediaSection = ({ media }) => {
  const mediaPath = `${process.env.PUBLIC_URL}${media}`;
  return <Media style={{ backgroundImage: `url(${mediaPath})` }}>Media Section</Media>;
};

export default MediaSection;
