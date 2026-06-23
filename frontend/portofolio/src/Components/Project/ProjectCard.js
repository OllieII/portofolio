import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProjectCard.css';

function ProjectCard({ media, link, title, brief, category }) {
  return (
    <div className={`project-card ${category}`}>
      <div className="project-media" style={{ backgroundImage: `url(${media})`}}>
        <div className="project-overlay">
          <p className="project-brief">{brief}</p>
        </div>
      </div>
      <Link to={link} className="project-link">{title}</Link>
    </div>
  );
}

export default ProjectCard;
