import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';
import GridSection from './GridSection';


const AppWrapper = styled.div`
  background: linear-gradient(180deg, #050814 0%, #111827 45%, #1F2937 100%);
  min-height: calc(100vh - 80px);
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0;
`;

export const Home = () => {
  return (
    <AppWrapper>
      <MainContent />
      <GridSection />
    </AppWrapper>
  );
};

export default Home;


