import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';


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
`;

export const Home = () => {
  return (
    <AppWrapper>
      <MainContent />
    </AppWrapper>
  );
};

export default Home;


