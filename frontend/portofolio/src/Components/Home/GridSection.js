import React from 'react';
import styled from 'styled-components';
import FlippableCard from './FlippableCard';

const GridWrapper = styled.div`
  padding: 30px 40px 40px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const GridItem = styled.div`
  height: calc((100vh - 200px) / 3);
  min-height: 180px;
  max-height: 400px;
  text-align: center;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  text-align: left;
  line-height: 1.5;
  font-size: 2em;
`;

const GridSection = () => {
  return (
    <GridWrapper>
      <GridItem>
        <FlippableCard frontText={<span>Junior Student graduating <strong>December 2025</strong> in University of Wisconsin in Madison.</span>} backText={<span>Majoring in Computer Science with Minors of Game Design and Theatre</span>} />
      </GridItem>
      <GridItem>
        <FlippableCard frontText={<span>Experience working in Game Studio and as Independent Developer.</span>} backText={<span>For Desktop Rogue-Like 2D game and Mixed Reality Horror Game</span>} />
      </GridItem>
      <GridItem>
        <FlippableCard frontText={<span>Experience using Machine Learning to Analyze User Experience and more complicated correlations.</span>} backText={<span>Also individual projects in Computer Visison and Natural Language Processing.</span>} />
      </GridItem>
    </GridWrapper>
  );
};

export default GridSection;
