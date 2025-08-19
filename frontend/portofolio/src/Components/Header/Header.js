import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export function Header(){
    return (
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to = "/portofolio/about">About</Link></li>
            <li className="nav-item"><Link to = "/portofolio/cv">CV</Link></li>
            <li className="nav-item"><Link to = "/portofolio/projects">Project</Link></li>
            <li className="nav-item"><Link to = "/portofolio/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
    );
}