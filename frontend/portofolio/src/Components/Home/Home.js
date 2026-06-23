import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';

const AppWrapper = styled.div`
  background: #f8f4eb;
  min-height: calc(100vh - 58px);
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 34px;
  right: clamp(18px, 5vw, 72px);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.65;
  }

  @media (max-width: 768px) {
    bottom: 24px;
  }
`;

const ScrollText = styled.span`
  color: #5c5549;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
`;

const ScrollArrow = styled.div`
  width: 18px;
  height: 18px;
  border-left: 1px solid #5c5549;
  border-bottom: 1px solid #5c5549;
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
        <ScrollText>Selected work</ScrollText>
        <ScrollArrow />
      </ScrollIndicator>
    </AppWrapper>
  );
};

export default Home;
