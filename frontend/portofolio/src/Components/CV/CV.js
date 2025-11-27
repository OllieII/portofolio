import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #050814 0%, #111827 45%, #1F2937 100%);
  padding: 80px 40px 40px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 70px 20px 30px;
  }
`;

const CVWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto 80px;
  padding: 32px 40px;
  border-radius: 24px;
  background: radial-gradient(circle at top, #020617 0, #020617 40%, #020617 100%);
  border: 1px solid #111827;
  box-shadow: 0 30px 80px rgba(0,0,0,0.75);

  @media (max-width: 768px) {
    padding: 24px 18px;
    border-radius: 16px;
    margin: 20px auto 40px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.25);
`;

const Name = styled.h1`
  font-size: 2.2em;
  color: #F9FAFB;
  margin: 0 0 12px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  font-size: 0.85em;
  color: #9CA3AF;
  font-family: "Ubuntu Sans Mono", monospace;
  
  a {
    color: #38BDF8;
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #A855F7;
    }
  }
  
  span {
    user-select: none;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75em;
    gap: 8px;
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 16px 32px;
  padding: 24px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.25);

  &:first-of-type {
    border-top: none;
    padding-top: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 18px 0;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: #A855F7;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

const SectionBody = styled.div`
  font-size: 0.9rem;
  color: #E5E7EB;
  line-height: 1.7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  text-align: left;
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 6px;
`;

const ExperienceRole = styled.div`
  font-weight: 600;
  color: #F9FAFB;
  font-size: 0.95rem;
  text-align: left;
`;

const ExperienceOrg = styled.div`
  color: #38BDF8;
  font-size: 0.85rem;
  margin-top: 2px;
  text-align: left;
`;

const ExperienceDates = styled.div`
  font-size: 0.8rem;
  color: #9CA3AF;
  white-space: nowrap;
  text-align: right;
`;

const BulletList = styled.ul`
  margin: 6px 0 0;
  padding-left: 1.1rem;
  text-align: left;
  
  li {
    color: #D1D5DB;
    line-height: 1.7;
    margin-bottom: 5px;
    
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
    color: #D1D5DB;
    line-height: 1.7;
    margin-bottom: 12px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    em {
      font-style: italic;
    }
  }
`;

const CourseworkText = styled.div`
  margin-top: 8px;
  font-size: 0.88rem;
  line-height: 1.7;
  text-align: left;
  
  strong {
    font-weight: 600;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #A855F7, #22D3EE);
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 32px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  cursor: pointer;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(168, 85, 247, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 0.85em;
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/CV_Olly.pdf`;
    link.download = 'CV_Olly.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <CVWrapper>
        <Header>
          <Name>{cvData.name}</Name>
          <ContactInfo>
            <a href={`mailto:${cvData.contact.email}`}>{cvData.contact.email}</a>
            <span>•</span>
            <span>{cvData.contact.location}</span>
            <span>•</span>
            <a href={`https://${cvData.contact.portfolio}`} target="_blank" rel="noopener noreferrer">Portfolio</a>
            <span>•</span>
            <a href={`https://${cvData.contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          </ContactInfo>
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
                      <ExperienceOrg>{edu.school} · {edu.location}</ExperienceOrg>
                    </div>
                    <ExperienceDates>{edu.duration}</ExperienceDates>
                  </ExperienceHeader>
                  {edu.relevant_coursework && (
                    <CourseworkText>
                      {edu.relevant_coursework}
                    </CourseworkText>
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
                      <ExperienceOrg>{exp.company} · {exp.location}</ExperienceOrg>
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
                      <ExperienceOrg>{inv.company} · {inv.location}</ExperienceOrg>
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

        <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(148, 163, 184, 0.25)' }}>
          <DownloadButton href={`${process.env.PUBLIC_URL}/CV_Olly.pdf`} download="CV_Olly.pdf">
            Download PDF Version
          </DownloadButton>
        </div>
      </CVWrapper>
    </Container>
  );
}

export default CV;
