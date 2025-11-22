import React from 'react';
import ProjectCard from './ProjectCard';
import './css/Projects.css';

function Projects() {
  const researchProjects = [
    { id: 2, media: `${process.env.PUBLIC_URL}/img/Waddle/1.jpg`, title: 'Using Head Movements to Predict Performance and Early Quitting in Virtual Reality' },
    { id: 5, media: `${process.env.PUBLIC_URL}/img/Milky1.png`, title: 'Probe the Milky Way Density Structure'}
  ];

  const gameProjects = [
    { id: 1, media: `${process.env.PUBLIC_URL}/img/LOM/Lom0.png`, title: 'Library of Meialia' },
    { id: 3, media: `${process.env.PUBLIC_URL}/img/GOA0.png`, title: 'Beyond the Garden of Adrian' },
    { id: 4, media: `${process.env.PUBLIC_URL}/img/Abyss0.png`, title: 'Abyss Bridge'}
  ];

  const experienceProjects = [
    // Add experience projects here
  ];

  return (
    <div className="projects-container">
      <div className="section">
        <h2 className="section-title research">Research</h2>
        <div className="projects-grid">
          {researchProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              media={project.media} 
              link={`/portofolio/projects/${project.id}`} 
              title={project.title} 
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title games">Games</h2>
        <div className="projects-grid">
          {gameProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              media={project.media} 
              link={`/portofolio/projects/${project.id}`} 
              title={project.title} 
            />
          ))}
        </div>
      </div>

      {experienceProjects.length > 0 && (
        <div className="section">
          <h2 className="section-title experience">Experience</h2>
          <div className="projects-grid">
            {experienceProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                media={project.media} 
                link={`/portofolio/projects/${project.id}`} 
                title={project.title} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
