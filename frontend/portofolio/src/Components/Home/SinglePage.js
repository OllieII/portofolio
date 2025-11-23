import React from 'react';
import styled from 'styled-components';
import { Home } from './Home';
import Projects from '../Project/Projects';

const PageContainer = styled.div`
  width: 100%;
`;

const Section = styled.section`
  scroll-margin-top: 100px;
  
  @media (max-width: 768px) {
    scroll-margin-top: 80px;
  }
`;

const AboutSection = styled.div`
  background: #050814;
  padding: 60px 40px;
  width: 100%;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: clamp(2em, 4vw, 3em);
  color: #F9FAFB;
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: #0B1120;
  border: 1px solid #4B5563;
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.accentColor || '#22D3EE'};
    box-shadow: 0 8px 24px ${props => props.accentColor === '#A855F7' 
      ? 'rgba(168, 85, 247, 0.3)' 
      : props.accentColor === '#F97316'
        ? 'rgba(249, 115, 22, 0.3)'
        : 'rgba(34, 211, 238, 0.3)'};
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1.3em, 2vw, 1.6em);
  color: ${props => props.accentColor || '#22D3EE'};
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 0 0 8px ${props => props.accentColor === '#A855F7' 
    ? 'rgba(168, 85, 247, 0.4)' 
    : props.accentColor === '#F97316'
      ? 'rgba(249, 115, 22, 0.4)'
      : 'rgba(34, 211, 238, 0.4)'};
`;

const CardText = styled.p`
  font-size: clamp(15px, 1.5vw, 18px);
  color: #E5E7EB;
  font-family: "Ubuntu Sans Mono", monospace;
  line-height: 1.6;
  margin: 0;
`;

const Separator = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, #111827, #1F2937, #111827);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5) 20%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.5) 80%,
      transparent
    );
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  &::after {
    content: '◆';
    position: relative;
    z-index: 1;
    font-size: 24px;
    color: #F9FAFB;
    background: linear-gradient(135deg, #22D3EE, #A855F7);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export function SinglePage() {
  return (
    <PageContainer>
      <Section id="about">
        <Home />
        <AboutSection>
          <AboutTitle>About Me</AboutTitle>
          <CardsContainer>
            <InfoCard accentColor="#A855F7">
              <CardTitle accentColor="#A855F7">Student</CardTitle>
              <CardText>
                Computer Science student with Game Design minor. 
                Graduating Dec 2025 from UW–Madison. 
                Prospective PhD student in Fall 2026.
              </CardText>
            </InfoCard>
            <InfoCard accentColor="#22D3EE">
              <CardTitle accentColor="#22D3EE">Game Studio</CardTitle>
              <CardText>
                Experience working in game studios and as an independent developer. 
                Developed various games including titles shipped to Steam.
              </CardText>
            </InfoCard>
            <InfoCard accentColor="#F97316">
              <CardTitle accentColor="#F97316">ML + UX</CardTitle>
              <CardText>
                Using Machine Learning to analyze User Experience and complex behavioral correlations. 
                Interested in adaptive systems.
              </CardText>
            </InfoCard>
          </CardsContainer>
        </AboutSection>
      </Section>
      <Separator />
      <Section id="projects">
        <Projects />
      </Section>
    </PageContainer>
  );
}
