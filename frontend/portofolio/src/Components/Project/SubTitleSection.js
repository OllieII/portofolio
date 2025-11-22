import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubTitle = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }
  
  h3 {
    margin: 0 0 15px 0;
    color: #7d5a7d;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 1.8em;
    font-weight: 700;
    border-bottom: 3px solid #E1AFD1;
    padding-bottom: 10px;
  }
  
  p {
    margin: 0;
    color: #5a3a5a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 1.05em;
    line-height: 1.8;
    white-space: pre-wrap;
    
    a {
      color: #7d5a7d;
      text-decoration: underline;
      font-weight: 600;
      transition: color 0.2s ease;
      
      &:hover {
        color: #AD88C6;
      }
    }
  }
`;

const SubTitleSection = ({ subtitles }) => {
  return (
    <SectionContainer>
      {subtitles.map((subtitle, index) => (
        <SubTitle id={`subtitle-${index}`} key={index}>
          <h3>{subtitle.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: subtitle.content }} />
        </SubTitle>
      ))}
    </SectionContainer>
  );
};

export default SubTitleSection;
