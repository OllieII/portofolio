import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 230px;
  background: rgba(248, 244, 235, 0.92);
  border-left: 1px solid rgba(37, 34, 29, 0.18);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 8px 0 8px 18px;
  position: sticky;
  top: 94px;
  height: fit-content;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  z-index: 50;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(37, 34, 29, 0.12);
  cursor: pointer;
  transition: color 0.25s ease, padding-left 0.25s ease;
  padding: 14px 0;
  color: #5c5549;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 600;
  font-size: 0.72rem;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: left;

  &:hover {
    color: #7f4d2f;
    padding-left: 8px;
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
