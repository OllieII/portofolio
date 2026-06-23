import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Home } from './Home';
import Projects from '../Project/Projects';

const PageContainer = styled.div`
  width: 100%;
  background: #f8f4eb;
`;

const Section = styled.section`
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    scroll-margin-top: 80px;
  }
`;

const AboutSection = styled.div`
  background: #f8f4eb;
  padding: 78px clamp(18px, 5vw, 72px);
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid rgba(37, 34, 29, 0.14);
`;

const AboutTitle = styled.h2`
  font-size: clamp(2.3rem, 6vw, 5.6rem);
  color: #25221d;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.04em;
  text-align: left;
  margin: 0;
  max-width: 760px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  max-width: 1400px;
  margin: 52px auto 0;
  background: rgba(37, 34, 29, 0.18);
  border: 1px solid rgba(37, 34, 29, 0.18);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: #f8f4eb;
  padding: clamp(26px, 4vw, 46px);
  transition: background 0.3s ease;
  cursor: default;

  &:hover {
    background: #efe7da;
  }
`;

const CardTitle = styled.h3`
  font-size: 0.76rem;
  color: #7f4d2f;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 24px;
`;

const CardText = styled.p`
  font-size: clamp(1rem, 1.45vw, 1.28rem);
  color: #3b352c;
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.55;
  margin: 0;
`;

const Separator = styled.div`
  width: 100%;
  height: 120px;
  background: #1f1c18;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: 'Selected work';
    color: #f8f4eb;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2rem, 7vw, 6rem);
    letter-spacing: -0.04em;
  }
`;

export function SinglePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const category = location.state.scrollTo;
      setTimeout(() => {
        const element = document.querySelector(`.section.${category}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <PageContainer>
      <Section id="about">
        <Home />
        <AboutSection>
          <AboutTitle>Research as a way of noticing the person inside the system.</AboutTitle>
          <CardsContainer>
            <InfoCard>
              <CardTitle>Position</CardTitle>
              <CardText>
                Master's student in Computer Science at UIUC, with a B.S. in Computer Science and Game Design from UW-Madison.
              </CardText>
            </InfoCard>
            <InfoCard>
              <CardTitle>Method</CardTitle>
              <CardText>
                I use behavioral telemetry, machine learning, virtual reality, and interactive design to study how people decide, move, persist, quit, and learn.
              </CardText>
            </InfoCard>
            <InfoCard>
              <CardTitle>Practice</CardTitle>
              <CardText>
                I also build games and experimental systems, treating design choices as hypotheses about attention, emotion, and player agency.
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
