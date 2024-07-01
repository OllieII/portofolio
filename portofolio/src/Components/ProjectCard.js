import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProjectCard.css';

function ProjectCard({ media, link, title }) {
    console.log('media:', media); 
  return (
    <div className="project-card">
        <div className="project-media" style={{ backgroundImage: `url(${media})`}}></div>
      <Link to={link} className="project-link">{title}</Link>
    </div>
  );
}

export default ProjectCard;
