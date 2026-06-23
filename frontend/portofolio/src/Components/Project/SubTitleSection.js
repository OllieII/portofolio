import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontSizeContext } from './ProjectDetail';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: 1px solid rgba(37, 34, 29, 0.16);
  background: rgba(37, 34, 29, 0.16);
`;

const SubTitle = styled.div`
  background: #f8f4eb;
  padding: clamp(28px, 5vw, 58px);
  width: 100%;
  font-size: ${props => props.fontSize}%;

  h3 {
    margin: 0 0 1.35rem 0;
    color: #25221d;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.7rem, 3vw, 3.2rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  p {
    margin: 0 0 1rem 0;
    color: #4d463c;
    font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 0.86em;
    line-height: 1.75;
    text-align: left;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: #7f4d2f;
      text-decoration: underline;
      text-underline-offset: 3px;
      font-weight: 600;
    }
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
    text-align: left;

    li {
      color: #4d463c;
      font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 0.86em;
      line-height: 1.75;
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
  gap: 8px;
  margin-top: 0.5rem;
`;

const TechPill = styled.span`
  border: 1px solid rgba(37, 34, 29, 0.24);
  border-radius: 999px;
  padding: 7px 12px;
  color: #7f4d2f;
  font-size: 0.72em;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ContentWrapper = styled.div`
  text-align: left;
`;

const SubTitleSection = ({ subtitles }) => {
  const fontSize = useContext(FontSizeContext);

  const renderContent = (subtitle) => {
    const title = subtitle.title.toLowerCase();
    const isTechStack = title.includes('tech stack') || title.includes('technology');
    const isResponsibility = title.includes('responsibility') || title.includes('contribution') || title.includes('role');

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
                <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/^[-*\s]*/, '') }} />
              ))}
            </ul>
          </ContentWrapper>
        </>
      );
    }

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
