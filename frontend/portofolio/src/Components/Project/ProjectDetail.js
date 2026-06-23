import React, { useState, useEffect, createContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import MediaSection from './MediaSection';
import SubTitleSection from './SubTitleSection';

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
  const [projectData, setProjectData] = useState(null);
  const [fontSize, setFontSize] = useState(130);

  const projectCategories = {
    '1': 'games',
    '2': 'research',
    '3': 'research',
    '4': 'research',
    '5': 'research',
    '6': 'games',
    '7': 'experience'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const url = `${process.env.PUBLIC_URL}/ProjectDescription/project${id}.json`;

    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} while fetching ${url}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjectData(data);
        setTimeout(() => window.scrollTo(0, 0), 0);
      })
      .catch((err) => {
        console.error('Failed to load project data:', err);
        setProjectData(null);
      });
  }, [id]);

  const handleGoBack = () => {
    const category = projectCategories[id];
    navigate('/', { state: { scrollTo: category } });
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
                  Back to projects
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
