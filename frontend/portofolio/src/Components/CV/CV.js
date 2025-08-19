import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(#FFE6E6, #E1AFD1, #AD88C6);
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
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: clamp(600px, 80vh, 800px);
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 60vh;
  }
  
  @media (max-width: 480px) {
    height: 50vh;
  }
`;

const DownloadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const DownloadButton = styled.a`
  background: linear-gradient(135deg, #7469B6, #AD88C6);
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
    box-shadow: 0 8px 25px rgba(116, 105, 182, 0.4);
    background: linear-gradient(135deg, #8A7BC8, #B896D1);
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
    link.href = `${process.env.PUBLIC_URL}/Resume_OllyGuo.pdf`;
    link.download = 'Resume_OllyGuo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
        
        <PDFViewer
          src={`${process.env.PUBLIC_URL}/Resume_OllyGuo.pdf`}
          title="Resume PDF Viewer"
        />
        
        <DownloadSection>
          <DownloadButton onClick={handleDownload}>
            📄 Download Resume (PDF)
          </DownloadButton>
        </DownloadSection>
    </Container>
  );
}

export default CV;
