import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8f4eb;
  padding: clamp(42px, 7vw, 92px) clamp(18px, 5vw, 72px) 72px;
  box-sizing: border-box;
`;

const CVWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto 80px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.95fr) minmax(320px, 1.05fr);
  gap: clamp(30px, 6vw, 86px);
  align-items: end;
  padding: 42px 0 52px;
  border-bottom: 1px solid rgba(37, 34, 29, 0.18);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding-top: 24px;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 18px;
  color: #7f4d2f;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: clamp(3.8rem, 10vw, 8.2rem);
  color: #25221d;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.04em;
`;

const Intro = styled.p`
  color: #3b352c;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.2rem, 2.2vw, 1.85rem);
  line-height: 1.38;
  margin: 0 0 28px;
`;

const CurrentTitle = styled.p`
  margin: 0 0 18px;
  color: #7f4d2f;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  font-size: 0.75rem;
  color: #5c5549;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  a {
    color: #25221d;
    text-decoration: none;
    border-bottom: 1px solid rgba(37, 34, 29, 0.28);
    padding-bottom: 3px;
    transition: color 0.2s, border-color 0.2s;

    &:hover {
      color: #7f4d2f;
      border-color: #7f4d2f;
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(150px, 220px) minmax(0, 1fr);
  gap: 18px clamp(28px, 5vw, 70px);
  padding: clamp(28px, 4vw, 48px) 0;
  border-bottom: 1px solid rgba(37, 34, 29, 0.16);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 0.74rem;
  font-weight: 700;
  color: #7f4d2f;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
`;

const SectionBody = styled.div`
  font-size: 0.95rem;
  color: #4d463c;
  line-height: 1.75;
  font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-align: left;
`;

const ExperienceItem = styled.div`
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: baseline;
  margin-bottom: 8px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 3px;
  }
`;

const ExperienceRole = styled.div`
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  color: #25221d;
  font-size: clamp(1.22rem, 2vw, 1.72rem);
  line-height: 1.1;
  text-align: left;
`;

const ExperienceOrg = styled.div`
  color: #7f4d2f;
  font-size: 0.78rem;
  margin-top: 6px;
  text-align: left;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ExperienceDates = styled.div`
  font-size: 0.78rem;
  color: #6c6255;
  white-space: nowrap;
  text-align: right;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;

  @media (max-width: 720px) {
    text-align: left;
  }
`;

const BulletList = styled.ul`
  margin: 8px 0 0;
  padding-left: 1.1rem;
  text-align: left;

  li {
    color: #4d463c;
    line-height: 1.72;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const OrderedList = styled.ol`
  margin: 0;
  padding-left: 1.3rem;
  text-align: left;

  li {
    color: #4d463c;
    line-height: 1.72;
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }

    em {
      color: #25221d;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.12em;
      font-style: normal;
    }
  }
`;

const CourseworkText = styled.div`
  margin-top: 8px;
  font-size: 0.92rem;
  line-height: 1.72;
  text-align: left;
  color: #5c5549;
`;

const EntryLink = styled.a`
  display: inline-block;
  width: fit-content;
  margin-top: 10px;
  color: #25221d;
  text-decoration: none;
  border-bottom: 1px solid rgba(37, 34, 29, 0.32);
  padding-bottom: 4px;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: #7f4d2f;
    border-color: #7f4d2f;
  }
`;

const Footer = styled.div`
  text-align: right;
  margin-top: 34px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: #25221d;
  color: #f8f4eb;
  padding: 12px 20px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;

  &:hover {
    background: #7f4d2f;
  }
`;

export function CV() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/cv-data.json`)
      .then(response => response.json())
      .then(data => setCvData(data))
      .catch(err => console.error('Failed to load CV data:', err));
  }, []);

  if (!cvData) {
    return <Container>Loading...</Container>;
  }

  const researchSummary = cvData.research_interests?.slice(0, 2).join(' ');
  const renderProjectLink = (item) => item.projectLink && (
    <EntryLink href={item.projectLink}>View related project</EntryLink>
  );

  return (
    <Container>
      <CVWrapper>
        <Header>
          <div>
            <Eyebrow>Curriculum vitae</Eyebrow>
            <Name>{cvData.name}</Name>
          </div>
          <div>
            {cvData.title && <CurrentTitle>{cvData.title}</CurrentTitle>}
            <Intro>{researchSummary}</Intro>
            <ContactInfo>
              <a href={`mailto:${cvData.contact.email}`}>{cvData.contact.email}</a>
              <span>{cvData.contact.location}</span>
              <a href={`https://${cvData.contact.portfolio}`} target="_blank" rel="noopener noreferrer">Portfolio</a>
              <a href={`https://${cvData.contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            </ContactInfo>
          </div>
        </Header>

        {cvData.research_interests && cvData.research_interests.length > 0 && (
          <Section>
            <SectionTitle>Research Interests</SectionTitle>
            <SectionBody>
              <BulletList>
                {cvData.research_interests.map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </BulletList>
            </SectionBody>
          </Section>
        )}

        {cvData.education && cvData.education.length > 0 && (
          <Section>
            <SectionTitle>Education</SectionTitle>
            <SectionBody>
              {cvData.education.map((edu, idx) => (
                <ExperienceItem key={idx}>
                  <ExperienceHeader>
                    <div>
                      <ExperienceRole>{edu.degree}</ExperienceRole>
                      <ExperienceOrg>{edu.school} / {edu.location}</ExperienceOrg>
                    </div>
                    <ExperienceDates>{edu.duration}</ExperienceDates>
                  </ExperienceHeader>
                  {edu.relevant_coursework && (
                    <CourseworkText>{edu.relevant_coursework}</CourseworkText>
                  )}
                </ExperienceItem>
              ))}
            </SectionBody>
          </Section>
        )}

        {cvData.publications && cvData.publications.length > 0 && (
          <Section>
            <SectionTitle>Publications & Submissions</SectionTitle>
            <SectionBody>
              <OrderedList>
                {cvData.publications.map((pub, idx) => (
                  <li key={idx}>
                    {pub.authors}. <em>{pub.title}</em> {pub.venue}
                    <br />
                    {renderProjectLink(pub)}
                  </li>
                ))}
              </OrderedList>
            </SectionBody>
          </Section>
        )}

        {cvData.posters && cvData.posters.length > 0 && (
          <Section>
            <SectionTitle>Posters</SectionTitle>
            <SectionBody>
              <OrderedList>
                {cvData.posters.map((poster, idx) => (
                  <li key={idx}>
                    <em>{poster.title}</em><br />
                    {poster.authors}
                    <br />
                    {renderProjectLink(poster)}
                  </li>
                ))}
              </OrderedList>
            </SectionBody>
          </Section>
        )}

        {cvData.research_experience && cvData.research_experience.length > 0 && (
          <Section>
            <SectionTitle>Research Experience</SectionTitle>
            <SectionBody>
              {cvData.research_experience.map((exp, idx) => (
                <ExperienceItem key={idx}>
                  <ExperienceHeader>
                    <div>
                      <ExperienceRole>{exp.title}</ExperienceRole>
                      <ExperienceOrg>{exp.company} / {exp.location}</ExperienceOrg>
                    </div>
                    <ExperienceDates>{exp.duration}</ExperienceDates>
                  </ExperienceHeader>
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <BulletList>
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx}>{resp}</li>
                      ))}
                    </BulletList>
                  )}
                  {renderProjectLink(exp)}
                </ExperienceItem>
              ))}
            </SectionBody>
          </Section>
        )}

        {cvData.honors && cvData.honors.length > 0 && (
          <Section>
            <SectionTitle>Honors</SectionTitle>
            <SectionBody>
              <BulletList>
                {cvData.honors.map((honor, idx) => (
                  <li key={idx}>{honor}</li>
                ))}
              </BulletList>
            </SectionBody>
          </Section>
        )}

        {cvData.involvement && cvData.involvement.length > 0 && (
          <Section>
            <SectionTitle>Involvement</SectionTitle>
            <SectionBody>
              {cvData.involvement.map((inv, idx) => (
                <ExperienceItem key={idx}>
                  <ExperienceHeader>
                    <div>
                      <ExperienceRole>{inv.title}</ExperienceRole>
                      <ExperienceOrg>{inv.company} / {inv.location}</ExperienceOrg>
                    </div>
                    <ExperienceDates>{inv.duration}</ExperienceDates>
                  </ExperienceHeader>
                  {inv.responsibilities && inv.responsibilities.length > 0 && (
                    <BulletList>
                      {inv.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx}>{resp}</li>
                      ))}
                    </BulletList>
                  )}
                  {renderProjectLink(inv)}
                </ExperienceItem>
              ))}
            </SectionBody>
          </Section>
        )}

        {cvData.teaching && cvData.teaching.length > 0 && (
          <Section>
            <SectionTitle>Teaching & Mentorship</SectionTitle>
            <SectionBody>
              {cvData.teaching.map((teach, idx) => (
                <ExperienceItem key={idx}>
                  <ExperienceHeader>
                    <div>
                      <ExperienceRole>{teach.title}</ExperienceRole>
                      <ExperienceOrg>{teach.company}</ExperienceOrg>
                    </div>
                    <ExperienceDates>{teach.duration}</ExperienceDates>
                  </ExperienceHeader>
                  {teach.responsibilities && teach.responsibilities.length > 0 && (
                    <BulletList>
                      {teach.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx}>{resp}</li>
                      ))}
                    </BulletList>
                  )}
                </ExperienceItem>
              ))}
            </SectionBody>
          </Section>
        )}

        <Footer>
          <DownloadButton href={`${process.env.PUBLIC_URL}/CV_Olly.pdf`} download="CV_Olly.pdf">
            Download PDF Version
          </DownloadButton>
        </Footer>
      </CVWrapper>
    </Container>
  );
}

export default CV;
