import React from 'react';
import styled from 'styled-components';
import { Home } from './Home';
import Projects from '../Project/Projects';
import BlogList from '../Blog/BlogList';

const PageContainer = styled.div`
  width: 100%;
`;

const Section = styled.section`
  scroll-margin-top: 80px;
`;

const Separator = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(#FFE6E6, #E1AFD1, #AD88C6);
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
    color: white;
    background: linear-gradient(#E1AFD1, #AD88C6);
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
      </Section>
      <Separator />
      <Section id="projects">
        <Projects />
      </Section>
      <Separator />
      <Section id="blog">
        <BlogList />
      </Section>
    </PageContainer>
  );
}
