import React from 'react';
import styled from 'styled-components';
import FlippableCard from './FlippableCard';

const Highlight = styled.span`
  color: ${props => props.color || '#22D3EE'};
  font-weight: 900;
  text-shadow: 0 0 8px ${props => props.color === '#A855F7' ? 'rgba(168, 85, 247, 0.4)' : 'rgba(34, 211, 238, 0.4)'};
`;

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
`;

const GridSection = () => {
  return (
    <GridWrapper>
      <GridItem>
        <FlippableCard frontText = {<span><Highlight color="#A855F7">Master's student</Highlight> in <Highlight>Computer Science</Highlight> at <Highlight color="#A855F7">UIUC</Highlight>.</span>} backText={<span>B.S. in <Highlight>Computer Science</Highlight> with <Highlight color="#A855F7">Game Design</Highlight> from UW-Madison.</span>} />
      </GridItem>
      <GridItem>
        <FlippableCard frontText={<span>Experience working in <Highlight>Game Studio</Highlight> and as <Highlight color="#A855F7">Independent Developer</Highlight>.</span>} backText={<span>Developed <Highlight>various games</Highlight> including titles <Highlight color="#A855F7">shipped to Steam</Highlight></span>} />
      </GridItem>
      <GridItem>
        <FlippableCard frontText={<span>Experience using <Highlight color="#A855F7">Machine Learning</Highlight> to Analyze <Highlight>User Experience</Highlight> and more complicated correlations.</span>} backText={<span>Interested in <Highlight>Behavioral Analysis</Highlight> and <Highlight color="#A855F7">Adaptive Systems</Highlight></span>} />
      </GridItem>
    </GridWrapper>
  );
};

export default GridSection;
