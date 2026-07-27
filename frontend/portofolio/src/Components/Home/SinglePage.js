import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Home } from './Home';
import Projects from '../Project/Projects';
import { siteText } from '../../content/site';

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

const LensSection = styled.div`
  background: #f8f4eb;
  padding: 68px clamp(18px, 5vw, 72px);
  width: 100%;
  border-top: 1px solid rgba(37, 34, 29, 0.14);
`;

const LensInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(34px, 6vw, 82px);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const LensIntro = styled.div`
  max-width: 560px;
`;

const LensEyebrow = styled.p`
  color: #7f4d2f;
  font-size: 0.72rem;
  line-height: 1.5;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  margin: 0 0 18px;
`;

const LensTitle = styled.h2`
  font-size: clamp(2.1rem, 4.2vw, 4.1rem);
  color: #25221d;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0 0 18px;
`;

const LensText = styled.p`
  color: #5c5549;
  font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(1rem, 1.35vw, 1.18rem);
  line-height: 1.75;
  margin: 0;
`;

const LensGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 1.5vw, 20px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const LensPathGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const LensCard = styled(Link)`
  min-height: 260px;
  background: #f8f4eb;
  color: #25221d;
  border: 1px solid rgba(37, 34, 29, 0.2);
  padding: clamp(22px, 2.6vw, 30px);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 22px;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #efe7da;
    border-color: rgba(127, 77, 47, 0.38);
    transform: translateY(-2px);
  }

  &:hover .lens-card-title {
    color: #7f4d2f;
  }

  &:hover .lens-card-cta {
    color: #7f4d2f;
    border-color: rgba(127, 77, 47, 0.72);
  }

  &:hover .lens-card-arrow {
    transform: translateX(5px);
  }
`;

const LensCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const LensCardLabel = styled.p`
  color: #7f4d2f;
  font-size: 0.66rem;
  line-height: 1.4;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  margin: 0;
`;

const LensCardTitle = styled.h3`
  color: #25221d;
  font-size: clamp(1.28rem, 2vw, 1.9rem);
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
  transition: color 0.25s ease;
`;

const LensCardText = styled.p`
  color: #5c5549;
  font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 0.95rem;
  line-height: 1.55;
  margin: 0;
`;

const LensCardBestFor = styled.p`
  color: #3b352c;
  font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0;
`;

const LensCardCta = styled.span`
  color: #25221d;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  border-bottom: 1px solid rgba(37, 34, 29, 0.28);
  padding-bottom: 4px;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  transition: color 0.25s ease, border-color 0.25s ease;
`;

const LensCardArrow = styled.span`
  display: inline-block;
  transition: transform 0.25s ease;
`;

const LensFooterText = styled.p`
  color: #5c5549;
  font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 0.94rem;
  line-height: 1.65;
  margin: 22px 0 0;
  text-align: right;

  @media (max-width: 980px) {
    text-align: left;
  }
`;

const LensFooterLink = styled(Link)`
  width: fit-content;
  display: inline;
  color: #3b352c;
  text-decoration: none;
  border-bottom: 1px solid rgba(37, 34, 29, 0.32);
  padding-bottom: 2px;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: #7f4d2f;
    border-color: #7f4d2f;
  }
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

`;

const SeparatorText = styled.span`
  color: #f8f4eb;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 7vw, 6rem);
  letter-spacing: -0.04em;
`;

export function SinglePage() {
  const location = useLocation();

  useLayoutEffect(() => {
    const target = location.state?.scrollTo || location.hash.slice(1);

    if (!target) {
      return;
    }

    const element = document.getElementById(target)
      || document.querySelector(`.section.${target}`);

    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.key, location.hash, location.search, location.state]);

  return (
    <PageContainer>
      <Section id="about">
        <Home />
        <LensSection>
          <LensInner>
            <LensIntro>
              <LensEyebrow>{siteText.lensExplorer.eyebrow}</LensEyebrow>
              <LensTitle>{siteText.lensExplorer.title}</LensTitle>
              <LensText>{siteText.lensExplorer.introduction}</LensText>
            </LensIntro>
            <LensPathGroup>
              <LensGrid>
                {siteText.lensExplorer.paths.map(path => (
                  <LensCard key={path.key} to={`/?lens=${path.key}#projects`}>
                    <LensCardBody>
                      <LensCardLabel>{path.audience}</LensCardLabel>
                      <LensCardTitle className="lens-card-title">{path.title}</LensCardTitle>
                      <LensCardText>{path.summary}</LensCardText>
                      <LensCardBestFor>{path.bestFor}</LensCardBestFor>
                    </LensCardBody>
                    <LensCardCta className="lens-card-cta">
                      {path.cta} <LensCardArrow className="lens-card-arrow">&rarr;</LensCardArrow>
                    </LensCardCta>
                  </LensCard>
                ))}
              </LensGrid>
              <LensFooterText>
                {siteText.lensExplorer.archivePrompt}{' '}
                <LensFooterLink to="/#projects">{siteText.lensExplorer.archiveLink}</LensFooterLink>
              </LensFooterText>
            </LensPathGroup>
          </LensInner>
        </LensSection>
      </Section>
      <Separator><SeparatorText>{siteText.lensExplorer.separator}</SeparatorText></Separator>
      <Section id="projects">
        <Projects />
      </Section>
    </PageContainer>
  );
}
