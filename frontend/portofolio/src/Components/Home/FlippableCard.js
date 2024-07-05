import React, { useState } from 'react';
import styled from 'styled-components';

const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
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
  
  box-sizing: border-box; /* Ensure the padding and border are included in the element's total width and height */
  padding: 20px; /* Adjust padding as needed */
`;

const FlipCardFront = styled(FlipCardFace)`
  background-color: white;
  color: #AD88C6;
  border: 8px solid #AD88C6;
`;

const FlipCardBack = styled(FlipCardFace)`
  background-color: #AD88C6;
  border: 8px solid #FFF;
  color: white;
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
