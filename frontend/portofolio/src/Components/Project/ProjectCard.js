import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProjectCard.css';

function ProjectCard({ media, link, title, brief, category, meta, signal, index }) {
  return (
    <div className={`project-card ${category}`}>
      <div className="project-media" style={{ backgroundImage: `url(${media})` }} />
      <div className="project-copy">
        <div className="project-meta-block">
          <p className="project-number">{String(index).padStart(2, '0')}</p>
          <p className="project-meta">{meta}</p>
        </div>
        <div className="project-main">
          <Link to={link} className="project-link">{title}</Link>
          <p className="project-signal">{signal}</p>
        </div>
        <p className="project-brief">{brief}</p>
        <Link to={link} className="project-read-more">Open case study</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
