import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import MediaSection from './MediaSection';
import SubTitleSection from './SubTitleSection';

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column; /* Ensure column layout */
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto; /* Ensure content is scrollable if it overflows */
  width: 100%;
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
    <Container>
      {projectData && (
        <>
          <NavBar subtitles={projectData.subtitles} />
          <Content>
            <MediaSection mediaList={projectData.mediaList} />
            <SubTitleSection subtitles={projectData.subtitles} />
          </Content>
        </>
      )}
    </Container>
  );
};

export default ProjectDetail;
