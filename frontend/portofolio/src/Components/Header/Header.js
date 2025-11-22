import React from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header(){
    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = location.pathname === '/' || location.pathname === '/portofolio';

    const handleNavClick = (sectionId) => (e) => {
      e.preventDefault();
      if (!isMainPage) {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    return (
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><a href="#about" onClick={handleNavClick('about')}>About</a></li>
            <li className="nav-item"><Link to = "/portofolio/cv">CV</Link></li>
            <li className="nav-item"><a href="#projects" onClick={handleNavClick('projects')}>Project</a></li>
            <li className="nav-item"><a href="#blog" onClick={handleNavClick('blog')}>Blog</a></li>
          </ul>
        </nav>
      </header>
    );
}