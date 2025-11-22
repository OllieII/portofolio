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
  gap: 30px;
  min-height: 100%;
`;

const ProjectHeader = styled.div`
  background: linear-gradient(90deg, #A855F7 0%, #22D3EE 100%);
  padding: 1.25rem 2.5rem;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
  
  h1 {
    margin: 0;
    color: #F9FAFB;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
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
            <ProjectHeader>
              <h1>{projectData.title || 'Project Details'}</h1>
            </ProjectHeader>
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
