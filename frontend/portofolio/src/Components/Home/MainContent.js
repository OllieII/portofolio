import React from 'react';
import styled from 'styled-components';

const MainContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.85fr) minmax(320px, 1.15fr);
  align-items: end;
  gap: clamp(32px, 7vw, 96px);
  padding: clamp(56px, 9vw, 110px) clamp(18px, 5vw, 72px) 120px;
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding-bottom: 104px;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: min(100%, 430px);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #ddd4c7;

  @media (max-width: 768px) {
    width: min(100%, 360px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.78) contrast(0.96);
  }
`;

const Caption = styled.p`
  margin: 0;
  max-width: 430px;
  color: #6c6255;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.72rem;
  line-height: 1.7;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: clamp(4rem, 11vw, 9.5rem);
  color: #25221d;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  line-height: 0.88;
  letter-spacing: -0.03em;
`;

const SelfIntro = styled.div`
  font-size: clamp(1.1rem, 2.4vw, 2rem);
  color: #3b352c;
  margin: 28px 0 28px;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  line-height: 1.35;
  max-width: 820px;
`;

const ChipsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 34px;
  flex-wrap: wrap;
`;

const Chip = styled.div`
  border: 1px solid rgba(37, 34, 29, 0.25);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.72rem;
  color: #4d463c;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  font-size: 0.75rem;
  color: #25221d;
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0 0 5px;
  gap: 8px;
  border-bottom: 1px solid rgba(37, 34, 29, 0.28);
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: #7f4d2f;
    border-color: #7f4d2f;
  }
`;

const Icon = styled.img`
  width: 17px;
  height: 17px;
  filter: grayscale(1) contrast(1.3);
`;

const TextBlock = styled.div`
  align-self: center;
`;

const MainContent = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:zguo295@wisc.edu';
  };

  const handleLinkClick = (link) => () => {
    window.open(link, '_blank');
  };

  return (
    <MainContentWrapper>
      <ProfileSection>
        <ProfileImageWrapper>
          <img src={`${process.env.PUBLIC_URL}/favicon/human_me.jpg`} alt="Olly Guo" />
        </ProfileImageWrapper>
        <Caption>
          Computational behavior, immersive systems, game design, and the small traces people leave when they move through virtual spaces.
        </Caption>
      </ProfileSection>
      <TextBlock>
        <Name>Olly Guo</Name>
        <SelfIntro>
          I study how individual behavior appears inside interactive systems, then use AI/ML, VR, and game design to build experiences that adapt to people instead of flattening them into an average user.
        </SelfIntro>
        <ChipsRow>
          <Chip>CS @ UW-Madison</Chip>
          <Chip>Prospective PhD 2026</Chip>
          <Chip>VR / ML / HCI</Chip>
          <Chip>Game design</Chip>
        </ChipsRow>
        <IconWrapper>
          <IconContainer onClick={handleEmailClick}>
            <Icon src={`${process.env.PUBLIC_URL}/Icons/mail.png`} alt="Email" />
            <div>Email</div>
          </IconContainer>
          <IconContainer onClick={handleLinkClick('https://github.com/OllieII')}>
            <Icon src={`${process.env.PUBLIC_URL}/Icons/Github.png`} alt="GitHub" />
            <div>GitHub</div>
          </IconContainer>
          <IconContainer onClick={handleLinkClick('https://www.linkedin.com/in/olly-guo-62016b248/')}>
            <Icon src={`${process.env.PUBLIC_URL}/Icons/linkedin.png`} alt="LinkedIn" />
            <div>LinkedIn</div>
          </IconContainer>
          <IconContainer onClick={handleLinkClick('https://www.instagram.com/sisyphus49ollie/')}>
            <Icon src={`${process.env.PUBLIC_URL}/Icons/instagram.png`} alt="Instagram" />
            <div>Instagram</div>
          </IconContainer>
        </IconWrapper>
      </TextBlock>
    </MainContentWrapper>
  );
};

export default MainContent;
