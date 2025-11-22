import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 250px;
  background: linear-gradient(180deg, #AD88C6, #7d5a7d);
  border-radius: 15px;
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
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`;

const NavItem = styled.div`
  width: 90%;
  min-height: 45px;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 8px 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px;
  color: #5a3a5a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.9em;
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  
  &:hover {
    background-color: #FFE6E6;
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
