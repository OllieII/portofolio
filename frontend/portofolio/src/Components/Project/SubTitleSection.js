import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubTitle = styled.div`
  background: #0B1120;
  border-radius: 16px;
  border: 1px solid #374151;
  padding: 1.75rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
    border-color: #A855F7;
  }
  
  h3 {
    margin: 0 0 0.75rem 0;
    color: #A855F7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.08em;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #4B5563;
  }
  
  p {
    margin: 0;
    color: #E5E7EB;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 1.05em;
    line-height: 1.8;
    white-space: pre-wrap;
    
    a {
      color: #22D3EE;
      text-decoration: underline;
      font-weight: 600;
      transition: color 0.2s ease;
      
      &:hover {
        color: #F97316;
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
