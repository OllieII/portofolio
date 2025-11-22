import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #050814;
  padding: 20px;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #7469B6;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
  gap: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px),
      repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px);
    pointer-events: none;
    z-index: 0;
  }
`;

const PDFContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  position: relative;
  z-index: 1;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: calc(100vh - 200px);
  min-height: 500px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  background: white;
  
  @media (max-width: 768px) {
    height: calc(100vh - 180px);
    min-height: 400px;
  }
  
  @media (max-width: 480px) {
    height: calc(100vh - 160px);
    min-height: 350px;
    border-radius: 10px;
  }
`;

const DownloadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

const DownloadButton = styled.a`
  background: linear-gradient(135deg, #22D3EE, #A855F7);
  cursor: pointer;
  color: white;
  padding: clamp(10px 20px, 2vw, 15px 30px);
  border-radius: 50px;
  text-decoration: none;
  font-size: clamp(1em, 2vw, 1.2em);
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(116, 105, 182, 0.3);
  border: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(34, 211, 238, 0.6);
    background: linear-gradient(135deg, #F97316, #22D3EE);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 1em;
  }
`;



export function CV() {
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
      <PDFContainer>
        <PDFViewer
          src={`${process.env.PUBLIC_URL}/CV_Olly.pdf`}
          title="Resume PDF Viewer"
        />
      </PDFContainer>
      
      <DownloadSection>
        <DownloadButton onClick={handleDownload}>
          Download CV (PDF)
        </DownloadButton>
      </DownloadSection>
    </Container>
  );
}

export default CV;
