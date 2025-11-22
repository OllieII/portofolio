import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import MediaSection from './MediaSection';
import SubTitleSection from './SubTitleSection';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #050814;
  padding: 40px 20px;
  padding-top: 80px;
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

const ProjectHeroWrapper = styled.div`
  background: #0B1120;
  border-radius: 20px;
  border: 1px solid #374151;
  padding: 0.75rem 1.5rem 1.25rem;
  margin-bottom: 0;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6);
`;

const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, #22D3EE, #A855F7);
  color: #050814;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(34, 211, 238, 0.5);
  font-weight: bold;
  z-index: 1000;
  
  &:hover {
    background: linear-gradient(135deg, #F97316, #FB923C);
    transform: scale(1.15);
    box-shadow: 0 6px 24px rgba(249, 115, 22, 0.7);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 22px;
    top: 15px;
    left: 15px;
  }
`;

const ProjectHeroTitle = styled.div`
  background: linear-gradient(90deg,
    #312E81 0%,
    #7C3AED 50%,
    #0EA5E9 100%
  );
  padding: 0.6rem 1.5rem;
  border-radius: 999px;
  text-align: center;
  box-shadow: 0 0 18px rgba(14, 165, 233, 0.35);
  
  h1 {
    margin: 0;
    color: #F9FAFB;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/ProjectDescription/project${id}.json`)
      .then(response => response.json())
      .then(data => setProjectData(data));
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <BackButton onClick={handleGoBack} title="Go back to projects">
        ←
      </BackButton>
      {projectData && (
        <Container>
          <NavBar subtitles={projectData.subtitles} />
          <MainContent>
            <ProjectHeroWrapper>
              <ProjectHeroTitle>
                <h1>{projectData.title || 'Project Details'}</h1>
              </ProjectHeroTitle>
            </ProjectHeroWrapper>
            <Content>
              <MediaSection mediaList={projectData.mediaList || projectData.media} />
              <SubTitleSection subtitles={projectData.subtitles} />
            </Content>
          </MainContent>
        </Container>
      )}
    </PageWrapper>
  );
};

export default ProjectDetail;
