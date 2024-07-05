import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: ${props => (props.isOpen ? '200px' : '50px')};
  height: 40%;
  background-color: #d18dd1;
  top:30%;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: fixed;
`;

const NavItem = styled.div`
  width: 80%;
  height: 40px;
  background-color: #e1afaf;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`;

const NavBar = ({ subtitles }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleNavClick = (index) => {
    const element = document.getElementById(`subtitle-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </ToggleButton>
      {isOpen && subtitles.map((subtitle, index) => (
        <NavItem key={index} onClick={() => handleNavClick(index)}>
          {subtitle.title}
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavBar;
