import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 120px 50px;
  flex: 1;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 50px 50px 100px 50px;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  perspective: 1000px;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  margin-bottom: 15px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const Ring = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 3px solid;
  animation: ${rotate} ${props => props.duration}s linear infinite;
  
  &.outer-ring {
    width: 220px;
    height: 220px;
    border-color: #A855F7 transparent #22D3EE transparent;
    top: 0;
    left: 0;
  }
  
  &.inner-ring {
    width: 190px;
    height: 190px;
    border-color: #22D3EE transparent #A855F7 transparent;
    top: 15px;
    left: 15px;
    animation-direction: reverse;
  }
`;

const FlipCard = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  top: 30px;
  left: 30px;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  
  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
    top: 25px;
    left: 25px;
  }
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0B1120;
  border: 3px solid #4B5563;
`;

const FlipCardFront = styled(FlipCardFace)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FlipCardBack = styled(FlipCardFace)`
  transform: rotateY(180deg);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
  }
`;

const Name = styled.h1`
  font-size: clamp(2.5em, 7vw, 5em);
  color: #F9FAFB;
  margin: 0 0 20px 0;
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 900;
  text-shadow: 0 0 18px rgba(34, 211, 238, 0.35);
`;

const SelfIntro = styled.div`
  font-size: clamp(16px, 2vw, 22px);
  color: #E5E7EB;
  margin-bottom: 18px;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  line-height: 1.7;
  max-width: 900px;
`;

const Highlight = styled.span`
  color: ${props => props.color || '#22D3EE'};
  font-weight: 900;
  text-shadow: 0 0 10px ${props => props.color === '#A855F7' ? 'rgba(168, 85, 247, 0.4)' : 'rgba(34, 211, 238, 0.4)'};
`;

const ChipsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Chip = styled.div`
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid #4B5563;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: clamp(13px, 1.5vw, 16px);
  color: #E5E7EB;
  font-family: "Ubuntu Sans Mono", monospace;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(31, 41, 55, 0.8);
    border-color: #22D3EE;
    box-shadow: 0 0 12px rgba(34, 211, 238, 0.3);
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: #E5E7EB;
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
    background-color: #1F2937;
    color: #22D3EE;
  }
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const MainContent = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleEmailClick = () => {
      window.location.href = 'mailto:zguo295@wisc.edu'; // Update with your email address
    };
  
    const handleLinkClick = (link) => () => {
      window.open(link, '_blank'); // Update with your GitHub URL
    };
  
    return (
      <MainContentWrapper>
        <ProfileSection>
          <ProfileImageWrapper onClick={() => setIsFlipped(!isFlipped)}>
            <Ring className="outer-ring" duration={8} />
            <Ring className="inner-ring" duration={6} />
            <FlipCard isFlipped={isFlipped}>
              <FlipCardFront>
                <img src={`${process.env.PUBLIC_URL}/favicon/human_me.jpg`} alt="Olly Guo" />
              </FlipCardFront>
              <FlipCardBack>
                <img src={`${process.env.PUBLIC_URL}/favicon/homeicon.png`} alt="Animated Icon" />
              </FlipCardBack>
            </FlipCard>
          </ProfileImageWrapper>
          <Name>I'm Olly Guo.</Name>
        </ProfileSection>
        <SelfIntro>
          I aim to use <Highlight color="#A855F7">AI/ML methods</Highlight> to understand <Highlight>human behavior</Highlight> and create <Highlight>virtual interaction systems</Highlight> that treat each user as a <Highlight color="#A855F7">unique individual</Highlight> rather than a normal user.
        </SelfIntro>
        <ChipsRow>
          <Chip>CS @ UW–Madison</Chip>
          <Chip>VR/ML for User Behavior</Chip>
          <Chip>Game Design + HCI</Chip>
        </ChipsRow>
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
              src={`${process.env.PUBLIC_URL}/Icons/Github.png`}
              alt="GitHub"
            />
            <div>GitHub</div>
          </IconContainer>
          <IconContainer onClick={handleLinkClick('www.linkedin.com/in/olly-guo-62016b248')}>
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