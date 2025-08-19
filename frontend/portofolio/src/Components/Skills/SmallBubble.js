import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import InfoBox from './InfoBox';

const popIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Bubble = styled.div.attrs(props => ({
  style: {
    width: `${props.position.size}px`,
    height: `${props.position.size}px`,
    top: `${props.position.y}px`,
    left: `${props.position.x}px`,
  }
}))`
  background-color:  #E1F7F537; /* Make the background transparent */
  border: 3px solid #E1F7F5; /* Thicker border for larger bubbles */
  border-radius: 50%;
  font-size: clamp(14px, ${props => props.position.size * 0.15}px, 28px); /* Scale font with bubble size */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: transform 0.3s, box-shadow 0.3s, z-index 0s;
  animation: ${popIn} 0.5s ease-out;
  box-shadow: 0 0 20px rgba(100, 204, 197, 0.6); /* Stronger shadow for larger bubbles */
  z-index: ${props => props.bubbleZIndex || 100};
  text-align: center;
  padding: ${props => Math.max(5, props.position.size * 0.05)}px;
  box-sizing: border-box;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 25px rgba(100, 204, 197, 1); /* Stronger shadow on hover */
    border-width: 4px;
  }
`;

const SmallBubble = ({ skill, position, bubbleZIndex, infoBoxZIndex }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Bubble
        position={position}
        bubbleZIndex={bubbleZIndex}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {skill}
      </Bubble>
      {hovered && (
        <InfoBox
          title={skill}
          content={`Details about ${skill}`}
          position={position}
          zIndex={infoBoxZIndex}
        />
      )}
    </>
  );
};

export default SmallBubble;
