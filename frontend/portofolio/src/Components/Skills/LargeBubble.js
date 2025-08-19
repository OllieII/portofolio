import React from 'react';
import styled from 'styled-components';

const BubbleContainer = styled.div`
  position: absolute;
  cursor: pointer;
  transition: transform 0.3s, filter 0.3s;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(100, 204, 197, 0.4);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => Math.max(14, props.size * 0.08)}px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  color: white;
  padding: ${props => Math.max(10, props.size * 0.05)}px;
  box-sizing: border-box;
  line-height: 1.2;
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 30px rgba(100, 204, 197, 0.8);
  }
  
  @media (max-width: 768px) {
    font-size: ${props => Math.max(12, props.size * 0.06)}px;
  }
`;

const LargeBubble = ({ 
  skill, 
  image, 
  size, 
  position, 
  onExpand 
}) => {
  const handleClick = () => {
    if (onExpand) {
      onExpand(skill);
    }
  };

  return (
    <BubbleContainer
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        backgroundImage: `url(${image})`,
      }}
      size={size}
      onClick={handleClick}
    >
      {skill}
    </BubbleContainer>
  );
};

export default LargeBubble;
