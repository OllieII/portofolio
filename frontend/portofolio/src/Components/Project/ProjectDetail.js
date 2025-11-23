import React, { useState, useEffect, createContext, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import MediaSection from './MediaSection';
import SubTitleSection from './SubTitleSection';

export const FontSizeContext = createContext();

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #050814;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  flex: 1;
  flex-direction: row-reverse;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100%;
`;

const DetailHeader = styled.div`
  position: sticky;
  top: 80px;
  z-index: 90;
  background: rgba(5, 8, 20, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #374151;
  padding: 16px 0;
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    top: 60px;
  }
`;

const BackLink = styled.button`
  background: transparent;
  border: 1px solid #4B5563;
  border-radius: 999px;
  padding: 8px 16px;
  color: #E5E7EB;
  font-size: 14px;
  font-family: "Ubuntu Sans Mono", monospace;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  justify-self: start;
  width: fit-content;
  
  &:hover {
    border-color: #22D3EE;
    color: #22D3EE;
    background: rgba(34, 211, 238, 0.1);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const ProjectHeroWrapper = styled.div`
  background: #0B1120;
  border-radius: 20px;
  border: 1px solid #374151;
  padding: 0.75rem 1.5rem 1.25rem;
  margin-bottom: 0;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6);
`;

const ProjectTitle = styled.h1`
  margin: 0;
  color: #F9FAFB;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
  grid-column: 2;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    grid-column: 1;
    text-align: left;
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
  background: rgba(17, 24, 39, 0.95);
  border: 1px solid #4B5563;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: #E5E7EB;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  
  &:hover {
    border-color: #22D3EE;
    color: #22D3EE;
    background: rgba(31, 41, 55, 0.95);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    &:hover {
      border-color: #4B5563;
      color: #E5E7EB;
      background: rgba(17, 24, 39, 0.95);
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);
  const [fontSize, setFontSize] = useState(130);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/ProjectDescription/project${id}.json`)
      .then(response => response.json())
      .then(data => setProjectData(data));
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
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
          <FontButton onClick={increaseFontSize} disabled={fontSize >= 150} title="Increase font size">
            A+
          </FontButton>
          <FontButton onClick={decreaseFontSize} disabled={fontSize <= 70} title="Decrease font size">
            A-
          </FontButton>
        </FontControls>
        {projectData && (
          <Container>
            <NavBar subtitles={projectData.subtitles} />
            <MainContent>
              <DetailHeader>
                <BackLink onClick={handleGoBack}>
                  ← Back to Projects
                </BackLink>
                <ProjectTitle>{projectData.title || 'Project Details'}</ProjectTitle>
              </DetailHeader>
              <Content>
                <MediaSection mediaList={projectData.mediaList || projectData.media} />
                <SubTitleSection subtitles={projectData.subtitles} />
              </Content>
            </MainContent>
          </Container>
        )}
      </PageWrapper>
    </FontSizeContext.Provider>
  );
};

export default ProjectDetail;
