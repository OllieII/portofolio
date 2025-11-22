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

    const handleProjectSubNavClick = (category) => (e) => {
      e.preventDefault();
      if (!isMainPage) {
        navigate('/');
        setTimeout(() => {
          const projectsElement = document.getElementById('projects');
          if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              const categoryElement = document.querySelector(`.section-title.${category}`);
              if (categoryElement) {
                categoryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 300);
          }
        }, 100);
      } else {
        const projectsElement = document.getElementById('projects');
        if (projectsElement) {
          projectsElement.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const categoryElement = document.querySelector(`.section-title.${category}`);
            if (categoryElement) {
              categoryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 300);
        }
      }
    };

    return (
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><a href="#about" onClick={handleNavClick('about')}>About</a></li>
            <li className="nav-item"><a href="#research" onClick={handleProjectSubNavClick('research')}>Research</a></li>
            <li className="nav-item"><a href="#games" onClick={handleProjectSubNavClick('games')}>Games</a></li>
            <li className="nav-item"><a href="#experience" onClick={handleProjectSubNavClick('experience')}>Experience</a></li>
            <li className="nav-item"><Link to = "/portofolio/cv">CV</Link></li>
          </ul>
        </nav>
      </header>
    );
}