import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import MediaSection from './MediaSection';
import SubTitleSection from './SubTitleSection';

const Container = styled.div`
    width: 80%;
  display: flex;

`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto; /* Ensure content is scrollable if it overflows */
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
            <MediaSection media={projectData.media} />
            <SubTitleSection subtitles={projectData.subtitles} />
          </Content>
        </>
      )}
    </Container>
  );
};

export default ProjectDetail;
