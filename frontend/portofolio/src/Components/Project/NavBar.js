import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 250px;
  background: #050814;
  border: 1px solid #4B5563;
  border-radius: 18px;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  position: fixed;
  top: 90px;
  left: 20px;
  height: fit-content;
  max-height: calc(100vh - 110px);
  overflow-y: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  z-index: 50;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1F2937;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #22D3EE;
    border-radius: 3px;
  }
`;

const NavItem = styled.div`
  width: 90%;
  min-height: 45px;
  background: #0B1120;
  border: 1px solid #374151;
  margin: 8px 0;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px;
  color: #E5E7EB;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  
  &:hover {
    background: linear-gradient(90deg, #A855F7, #22D3EE);
    color: #F9FAFB;
    border: none;
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
  }
`;

const NavBar = ({ subtitles }) => {
  const handleNavClick = (index) => {
    const element = document.getElementById(`subtitle-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Nav>
      {subtitles.map((subtitle, index) => (
        <NavItem 
          key={index}
          onClick={() => handleNavClick(index)}
        >
          {subtitle.title}
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavBar;
