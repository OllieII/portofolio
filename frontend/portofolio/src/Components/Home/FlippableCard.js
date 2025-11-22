import React, { useState } from 'react';
import styled from 'styled-components';

const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  cursor: pointer;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  box-sizing: border-box;
  padding: 20px;
  font-size: clamp(1rem, 1.5vw, 2em);
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 2vw, 1.5em);
  }
`;

const FlipCardFront = styled(FlipCardFace)`
  background-color: #0B1120;
  color: #F9FAFB;
  border: 2px solid #4B5563;
  box-shadow: 0 12px 30px rgba(0,0,0,0.6);
`;

const FlipCardBack = styled(FlipCardFace)`
  background-color: #1F2937;
  border: 2px solid #A855F7;
  color: #F9FAFB;
  box-shadow: 0 12px 30px rgba(168, 85, 247, 0.3);
  transform: rotateY(180deg);
`;

const FlippableCard = ({ frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <FlipCard onClick={() => setIsFlipped(!isFlipped)}>
      <FlipCardInner isFlipped={isFlipped}>
        <FlipCardFront>{frontText}</FlipCardFront>
        <FlipCardBack>{backText}</FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};

export default FlippableCard;
