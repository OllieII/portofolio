import React from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteText } from '../../content/site';

export function Header(){
    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = location.pathname === '/' || location.pathname === '/portfolio';

    const scrollToTarget = (target) => {
      const element = document.getElementById(target)
        || document.querySelector(`.section.${target}`);

      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleNavClick = (target) => (e) => {
      e.preventDefault();
      const targetHash = `#${target}`;

      if (!isMainPage || location.search || location.hash !== targetHash) {
        navigate(`/${targetHash}`);
        return;
      }

      scrollToTarget(target);
    };

    return (
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/#about" onClick={handleNavClick('about')}>{siteText.navigation.about}</Link></li>
            <li className="nav-item"><Link to="/#projects" onClick={handleNavClick('projects')}>{siteText.navigation.work}</Link></li>
            <li className="nav-item"><Link to="/cv">{siteText.navigation.cv}</Link></li>
            <li className="nav-item"><Link to="/blog" aria-current={location.pathname.startsWith('/blog') ? 'page' : undefined}>{siteText.navigation.blog}</Link></li>
          </ul>
        </nav>
      </header>
    );
}
