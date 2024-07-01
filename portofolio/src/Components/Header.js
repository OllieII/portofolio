import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

export function Header(){
    return (
      <header className="header">
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><Link to = "/about">About</Link></li>
            <li className="nav-item"><Link to = "/projects">Project</Link></li>
            <li className="nav-item"><Link to = "/skills">Skills</Link></li>
            <li className="nav-item"><Link to = "/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
    );
}