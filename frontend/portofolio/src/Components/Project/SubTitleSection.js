import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontSizeContext } from './ProjectDetail';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubTitle = styled.div`
  background: #0B1120;
  border-radius: 16px;
  border: 1px solid #374151;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  width: 100%;
  font-size: ${props => props.fontSize}%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
    border-color: #A855F7;
  }
  
  h3 {
    margin: 0 0 1.25rem 0;
    color: #A855F7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 1.3em;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.05em;
  }
  
  p {
    margin: 0 0 1rem 0;
    color: #E5E7EB;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
    font-size: 1em;
    line-height: 1.7;
    text-align: left;
    
    &:last-child {
      margin-bottom: 0;
    }
    
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
  
  ul {
    margin: 0;
    padding-left: 1.5rem;
    text-align: left;
    
    li {
      color: #E5E7EB;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif;
      font-size: 1em;
      line-height: 1.7;
      margin-bottom: 0.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const TechStackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 0.5rem;
`;

const TechPill = styled.span`
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid #22D3EE;
  border-radius: 20px;
  padding: 6px 14px;
  color: #22D3EE;
  font-size: 0.9em;
  font-family: "Ubuntu Sans Mono", monospace;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(34, 211, 238, 0.2);
    transform: translateY(-2px);
  }
`;

const ContentWrapper = styled.div`
  text-align: left;
`;

const SubTitleSection = ({ subtitles }) => {
  const fontSize = useContext(FontSizeContext);
  
  const renderContent = (subtitle) => {
    const isTechStack = subtitle.title.toLowerCase().includes('tech stack') || 
                        subtitle.title.toLowerCase().includes('technology');
    const isResponsibility = subtitle.title.toLowerCase().includes('responsibility') ||
                             subtitle.title.toLowerCase().includes('contribution') ||
                             subtitle.title.toLowerCase().includes('role');
    
    // Tech Stack - render as pills
    if (isTechStack) {
      const techs = subtitle.content
        .split(/[,;\n]/)
        .map(t => t.trim())
        .filter(t => t.length > 0);
      
      return (
        <>
          <h3>{subtitle.title}</h3>
          <TechStackGrid>
            {techs.map((tech, i) => (
              <TechPill key={i}>{tech}</TechPill>
            ))}
          </TechStackGrid>
        </>
      );
    }
    
    // Responsibility - render as bullet list if contains line breaks
    if (isResponsibility && subtitle.content.includes('\n')) {
      const items = subtitle.content
        .split('\n')
        .map(item => item.trim())
        .filter(item => item.length > 0);
      
      return (
        <>
          <h3>{subtitle.title}</h3>
          <ContentWrapper>
            <ul>
              {items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/^[-•]\s*/, '') }} />
              ))}
            </ul>
          </ContentWrapper>
        </>
      );
    }
    
    // Default - render as left-aligned paragraphs
    const paragraphs = subtitle.content.split('\n\n').filter(p => p.trim().length > 0);
    
    return (
      <>
        <h3>{subtitle.title}</h3>
        <ContentWrapper>
          {paragraphs.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para.trim() }} />
          ))}
        </ContentWrapper>
      </>
    );
  };
  
  return (
    <SectionContainer>
      {subtitles.map((subtitle, index) => (
        <SubTitle id={`subtitle-${index}`} key={index} fontSize={fontSize}>
          {renderContent(subtitle)}
        </SubTitle>
      ))}
    </SectionContainer>
  );
};

export default SubTitleSection;
