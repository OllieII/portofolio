// InfoBox.js
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 200px;
  height: 300px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: ${props => props.zIndex || 1000};
  top: ${props => props.position.y + props.position.size}px; // Position below the small bubble
  left: ${props => props.position.x + props.position.size}px; // Position to the right of the small bubble
  pointer-events: none; /* Allow clicking through the info box */
  transition: opacity 0.2s ease-in-out;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  border-bottom: 1px solid black;
`;

const Content = styled.p`
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 14px;
`;

const InfoBox = ({ title, content, position, zIndex }) => {
  return (
    <Box position={position} zIndex={zIndex}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Box>
  );
};

export default InfoBox;
