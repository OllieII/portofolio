import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import MediaSection from './MediaSection';
import SubTitleSection from './SubTitleSection';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #050814;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  flex: 1;
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
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/ProjectDescription/project${id}.json`)
      .then(response => response.json())
      .then(data => setProjectData(data));
  }, [id]);

  return (
    <PageWrapper>
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
