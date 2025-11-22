import React from 'react';
import styled from 'styled-components';
import bubble from '../Skills/bubble.png';

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex: 1;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const Name = styled.h1`
  font-size: clamp(3em, 8vw, 6em);
  color: white;
  margin: 0 0 30px 0;
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 900;
`;

const SelfIntro = styled.div`
  font-size: clamp(18px, 2vw, 24px);
  color: white;
  margin-bottom: 30px;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  line-height: 1.8;
  max-width: 900px;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 8px 12px;
  gap: 8px;
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const MainContent = () => {
    const handleEmailClick = () => {
      window.location.href = 'mailto:zguo295@wisc.edu'; // Update with your email address
    };
  
    const handleLinkClick = (link) => () => {
      window.open(link, '_blank'); // Update with your GitHub URL
    };
  
    return (
      <MainContentWrapper>
        <Name>I'm Olly Guo.</Name>
        <SelfIntro>
          Seeking roles in AI, Game Design, and Full Stack Development. I aim to use my expertise to better understand user needs and create user-friendly, emotionally engaging products.
        </SelfIntro>
        <IconWrapper>
          <IconContainer onClick={handleEmailClick}>
            <Icon
              src={`${process.env.PUBLIC_URL}/Icons/mail.png`}
              alt="Email"
              onMouseOver={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/Icons/mailHover.png`)}
              onMouseOut={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/Icons/mail.png`)}
            />
            <div>Email</div>
          </IconContainer>
          <IconContainer onClick={handleLinkClick('https://github.com/OllieII')}>
            <Icon
              src={`${process.env.PUBLIC_URL}/Icons/github.png`}
              alt="GitHub"
            />
            <div>GitHub</div>
          </IconContainer>
          <IconContainer onClick={handleLinkClick('https://www.linkedin.com/in/olly-g-62016b248/')}>
            <Icon
              src={`${process.env.PUBLIC_URL}/Icons/linkedin.png`}
              alt="LinkedIn"
            />
            <div>LinkedIn</div>
          </IconContainer>
          <IconContainer onClick={handleLinkClick('https://www.instagram.com/sisyphus49ollie/')}>
            <Icon
              src={`${process.env.PUBLIC_URL}/Icons/instagram.png`}
              alt="Instagram"
            />
            <div>Instagram</div>
          </IconContainer>
        </IconWrapper>
      </MainContentWrapper>
    );
  };
  
  export default MainContent;