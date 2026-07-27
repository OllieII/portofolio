import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProjectCard.css';
import { siteText } from '../../content/site';

function ProjectCard({
  media,
  link,
  title,
  brief,
  category,
  meta,
  signal,
  evidence,
  tags = [],
  index,
}) {
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
        {evidence && (
          <div className="project-evidence">
            <span>Evidence</span>
            <p>{evidence}</p>
          </div>
        )}
        {tags.length > 0 && (
          <div className="project-tags" aria-label="Project tags">
            {tags.slice(0, 5).map(tag => (
              <span className="project-tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <Link to={link} className="project-read-more">{siteText.buttons.openCaseStudy}</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
