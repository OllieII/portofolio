import React from 'react';
import styled, { keyframes } from 'styled-components';
import MainContent from './MainContent';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const AppWrapper = styled.div`
  background: linear-gradient(180deg, #050814 0%, #111827 45%, #1F2937 100%);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0;
  position: relative;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  z-index: 10;
  animation: ${bounce} 2s infinite;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    bottom: 60px;
  }
`;

const ScrollText = styled.span`
  color: #22D3EE;
  font-family: "Ubuntu Sans Mono", monospace;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ScrollArrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 2px solid #22D3EE;
  border-bottom: 2px solid #22D3EE;
  transform: rotate(-45deg);
`;

export const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <AppWrapper>
      <MainContent />
      <ScrollIndicator onClick={handleScrollDown}>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollArrow />
      </ScrollIndicator>
    </AppWrapper>
  );
};

export default Home;


