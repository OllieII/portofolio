import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SmallBubble from './SmallBubble';
import { getRandomInt, generateNonOverlappingPosition, fetchPositionsFromFile } from './utils';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(218, 255, 251, 0.5);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(218, 255, 251, 1);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(218, 255, 251, 0.5);
  }
`;

const Bubble = styled.div.attrs(props => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    top: `${props.position.y}px`,
    left: `${props.position.x}px`,
    backgroundImage: `url(${props.image})`,
  }
}))`
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  transition: transform 0.3s, opacity 0.3s;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(1.1);
  }
`;

const SmallBubblesContainer = styled.div`
  position: absolute;
  width: ${props => props.size * 1.2}px;
  height: ${props => props.size * 1.2}px;
  top: ${props => props.position.y + props.size / 2}px;
  left: ${props => props.position.x + props.size / 2}px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const HighlightArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const LargeBubble = ({ skill, subSkills, image, size, position, existingPositions }) => {
  const [expanded, setExpanded] = useState(false);
  const [smallBubblePositions, setSmallBubblePositions] = useState([]);

  useEffect(() => {
    const loadPositions = async () => {

      if (expanded) {
          const containerSize = { width: size * 1.2, height: size * 1.2 };
          const newPositions = [];
          const newSizes = [];
          let success = true;

          subSkills.forEach((skillName) => {
            const newSize = getRandomInt(skillName.length * 2 + 60, skillName.length * 3 + 60);
            const { position:newPosition, overlap } = generateNonOverlappingPosition(newSize, newPositions.concat(existingPositions), containerSize, position);
            if (overlap) {
              success = false;
            }
            newPositions.push(newPosition);
            newSizes.push(newSize);
          });

          if (success) {
            let finalPos = newPositions.map((pos, index) => ({ ...pos, size: newSizes[index] }));
            setSmallBubblePositions(finalPos);
            //savePositionsToLocalStorage(finalPos);
          } else {
            try {
              let storedPositions = await fetchPositionsFromFile(`smallPos_${skill}.json`);
              console.log('Fetched positions:', storedPositions);
              setSmallBubblePositions(storedPositions);
              //setSmallBubblePositions(fetchPositionsFromLocalStorage());
            } catch (error) {
              console.error('Failed to fetch positions:', error);
            }
          }
        }
      
    };

    loadPositions();
  }, [expanded, subSkills, size, existingPositions, position, skill]);
/*
  const savePositionsToLocalStorage = (positions) => {
    const jsonString = JSON.stringify(positions);
    localStorage.setItem(`smallPos_${skill}`, jsonString);
  };
*/
  const handleClick = () => {
    setExpanded(true);
  };
  /*
  const downloadPositionsAsFile = () => {
    const positions = localStorage.getItem(`smallPos_${skill}`);
    const blob = new Blob([positions], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `smallPos_${skill}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  */

  return (
    <>
      {!expanded && (
        <Bubble onClick={handleClick} size={size} position={position} image={image}>
          {skill}
        </Bubble>
      )}
      {expanded && (
        <SmallBubblesContainer size={size} position={position}>
          <HighlightArea />
          {smallBubblePositions.length > 0 && subSkills.map((subSkill, index) => (
            <SmallBubble key={index} skill={subSkill} position={smallBubblePositions[index]} />
          ))}
        </SmallBubblesContainer>
      )}
    </>
  );
};

export default LargeBubble;
