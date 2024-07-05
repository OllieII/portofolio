import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';
import GridSection from './GridSection';


const AppWrapper = styled.div`
  background: linear-gradient(#FFE6E6,#E1AFD1,#AD88C6);
  min-height: 100vh; /* Ensure it covers the full height of the viewport */
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


