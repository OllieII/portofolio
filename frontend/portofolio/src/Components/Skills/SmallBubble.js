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
  border: 2px solid #E1F7F5; /* Border color for the hollow circle */
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${popIn} 0.5s ease-out;
  box-shadow: 0 0 15px rgba(100, 204, 197, 0.5); /* Add initial shadow for the hollow circle */
  z-index: 100;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(100, 204, 197, 1); /* Shadow on hover */
  }
`;

const SmallBubble = ({ skill, position }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Bubble
        position={position}
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
        />
      )}
    </>
  );
};

export default SmallBubble;
