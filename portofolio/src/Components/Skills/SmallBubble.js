import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  background-color: #64CCC5;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: transform 0.3s;
  animation: ${popIn} 0.5s ease-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px #94F3E4;
  }
`;

const SmallBubble = ({ skill, position }) => {
  return (
    <Bubble position={position}>
      {skill}
    </Bubble>
  );
};

export default SmallBubble;
