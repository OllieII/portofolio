import React, { useState, useEffect, createContext } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import MediaSection from './MediaSection';
import SubTitleSection from './SubTitleSection';
import { getProjectById } from '../../content/projects';
import { lensConfig, siteText } from '../../content/site';

export const FontSizeContext = createContext();

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f8f4eb;
  padding: 34px clamp(18px, 5vw, 72px) 72px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  gap: clamp(24px, 4vw, 54px);
  margin: 0 auto;
  position: relative;
  flex: 1;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailHeader = styled.div`
  position: sticky;
  top: 58px;
  z-index: 90;
  background: rgba(248, 244, 235, 0.9);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(37, 34, 29, 0.14);
  padding: 16px 0 18px;
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    top: 48px;
  }
`;

const NavigationContext = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  justify-self: start;
`;

const BackLink = styled.button`
  background: transparent;
  border: 1px solid rgba(37, 34, 29, 0.22);
  border-radius: 999px;
  padding: 9px 14px;
  color: #25221d;
  font-size: 0.72rem;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  justify-self: start;
  width: fit-content;

  &:hover {
    border-color: #7f4d2f;
    color: #7f4d2f;
    background: #efe7da;
  }
`;

const LensContext = styled.span`
  color: #7f4d2f;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.4;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h1`
  margin: 0;
  color: #25221d;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.4rem, 3vw, 2.8rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-align: center;
  grid-column: 2;

  @media (max-width: 768px) {
    grid-column: 1;
    text-align: left;
  }
`;

const LensLead = styled.p`
  color: #5c5549;
  font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(0.84rem, 1.1vw, 1rem);
  line-height: 1.5;
  margin: 0;
  max-width: 680px;
  text-align: center;
  grid-column: 2;

  @media (max-width: 768px) {
    grid-column: 1;
    text-align: left;
  }
`;

const LensEvidence = styled.aside`
  display: grid;
  grid-template-columns: minmax(150px, 0.25fr) minmax(0, 1fr);
  gap: 18px;
  border: 1px solid rgba(37, 34, 29, 0.18);
  background: rgba(239, 231, 218, 0.46);
  padding: clamp(18px, 3vw, 28px);

  span {
    color: #7f4d2f;
    font-size: 0.68rem;
    line-height: 1.45;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-weight: 700;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  strong {
    color: #25221d;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.15rem, 2vw, 1.6rem);
    font-weight: 400;
    line-height: 1.3;
  }

  p {
    color: #5c5549;
    font-size: 0.96rem;
    line-height: 1.65;
    margin: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FontControls = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const FontButton = styled.button`
  background: rgba(248, 244, 235, 0.95);
  border: 1px solid rgba(37, 34, 29, 0.22);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: #25221d;
  font-size: 14px;
  font-weight: 700;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: #7f4d2f;
    color: #7f4d2f;
    background: #efe7da;
    transform: scale(1.08);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    &:hover {
      border-color: rgba(37, 34, 29, 0.22);
      color: #25221d;
      background: rgba(248, 244, 235, 0.95);
      transform: scale(1);
    }
  }
`;

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectData = getProjectById(id);
  const [fontSize, setFontSize] = useState(130);
  const requestedLens = searchParams.get('lens');
  const activeLens = requestedLens && lensConfig[requestedLens] && requestedLens !== 'all'
    ? requestedLens
    : null;
  const lensCopy = activeLens ? projectData?.lenses?.[activeLens] : null;
  const originalSections = projectData?.details?.sections || [];
  const preferredSectionOrder = activeLens
    ? lensConfig[activeLens].detailSectionOrder || []
    : [];
  const detailSections = preferredSectionOrder.length > 0
    ? [...originalSections].sort((a, b) => {
        const aIndex = preferredSectionOrder.indexOf(a.heading);
        const bIndex = preferredSectionOrder.indexOf(b.heading);
        const aPriority = aIndex === -1 ? preferredSectionOrder.length : aIndex;
        const bPriority = bIndex === -1 ? preferredSectionOrder.length : bIndex;
        return aPriority - bPriority;
      })
    : originalSections;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleGoBack = () => {
    navigate(activeLens ? `/?lens=${activeLens}#projects` : '/#projects');
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 150));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 70));
  };

  return (
    <FontSizeContext.Provider value={fontSize}>
      <PageWrapper fontSize={fontSize}>
        <FontControls>
          <FontButton onClick={increaseFontSize} disabled={fontSize >= 150} title={siteText.projectDetail.increaseFontSize}>
            A+
          </FontButton>
          <FontButton onClick={decreaseFontSize} disabled={fontSize <= 70} title={siteText.projectDetail.decreaseFontSize}>
            A-
          </FontButton>
        </FontControls>
        {projectData ? (
          <Container>
            <NavBar sections={detailSections} />
            <MainContent>
              <DetailHeader>
                <NavigationContext>
                  <BackLink onClick={handleGoBack}>
                    {siteText.buttons.backToProjects}
                  </BackLink>
                  {activeLens && (
                    <LensContext>
                      {siteText.work.lensContextLabel}: {lensConfig[activeLens].label}
                    </LensContext>
                  )}
                </NavigationContext>
                <ProjectTitle>{projectData.title || siteText.projectDetail.fallbackTitle}</ProjectTitle>
                {lensCopy?.emphasis && <LensLead>{lensCopy.emphasis}</LensLead>}
              </DetailHeader>
              <Content>
                {lensCopy && (
                  <LensEvidence>
                    <span>First evidence through this lens</span>
                    <div>
                      <strong>{lensCopy.featuredEvidence}</strong>
                      <p>{lensCopy.summary}</p>
                    </div>
                  </LensEvidence>
                )}
                <MediaSection mediaList={projectData.details.media} />
                <SubTitleSection sections={detailSections} />
              </Content>
            </MainContent>
          </Container>
        ) : (
          <Container>
            <MainContent>
              <DetailHeader>
                <BackLink onClick={() => navigate('/#projects')}>{siteText.buttons.backToProjects}</BackLink>
                <ProjectTitle>{siteText.projectDetail.notFoundTitle}</ProjectTitle>
              </DetailHeader>
            </MainContent>
          </Container>
        )}
      </PageWrapper>
    </FontSizeContext.Provider>
  );
};

export default ProjectDetail;
