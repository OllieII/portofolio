import React from 'react';
import styled from 'styled-components';
import bubble from '../Skills/bubble.png';

const MainContentWrapper = styled.div`
  background: linear-gradient(#FFE6E6,#E1AFD1,#AD88C6);;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  flex-wrap: wrap;

`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 40px;
  flex: 1;
`;

const Name = styled.h1`
  font-size: 4em;
  color: white;
  margin: 0;
`;



const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url(${props => props.bkg});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

const IconWrapper = styled.div`
  margin-top: 10px;
  font-size: 22px;
  color: white;
  display: flex;
  align-items: center;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  z-index: 2;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  padding: 5px 10px;
  gap: 10px;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #FFF3;
      bottom: 0;
    }
  }
  
`;

const Icon = styled.img`
  width: 32px; /* Adjust size as needed */
  height: 32px; /* Adjust size as needed */
  
`;

const SelfIntro = styled.div`
    font-size: 22px;
    color: white;
    margin-top: 20px;
    font-family: "Ubuntu Sans Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    text-align: left;
    line-height: 1.5;
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
        <NameContainer>
          <Name>Olly Guo</Name>
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
          <SelfIntro>Seeking roles in AI, Game Design, and Full Stack Development. I aim to use my expertise to better understand user needs and create user-friendly, emotionally engaging products.</SelfIntro>
        </NameContainer>
          <ProfileImage src={`${process.env.PUBLIC_URL}/favicon/homeicon.png`} bkg={`${process.env.PUBLIC_URL}/favicon/bg.png`} alt="Olly Guo" />
      </MainContentWrapper>
    );
  };
  
  export default MainContent;