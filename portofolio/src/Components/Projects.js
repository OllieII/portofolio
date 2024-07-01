import React from 'react';
import ProjectCard from './ProjectCard';
import './css/Projects.css';

function Projects() {
  const projectData = [
    { id: 1, media: `${process.env.PUBLIC_URL}/img/LoM0.png`, title: 'Library of Meialia' },
    { id: 2, media: `${process.env.PUBLIC_URL}/img/penguin0.jpg`, title: 'Waddle: A Penguin\'s Tale' },
    { id: 3, media: `${process.env.PUBLIC_URL}/img/GOA0.png`, title: 'Beyond the Garden of Adrian' },
    { id: 4, media: `${process.env.PUBLIC_URL}/img/Abyss0.png`,  title: 'Abyss Bridge'},
    { id: 5, media: `${process.env.PUBLIC_URL}/img/Milky1.png`, title: 'Probe the Milky Way Density Structure'}
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectData.map(project => (
          <ProjectCard 
            key={project.id} 
            media={project.media} 
            link={`/projects/${project.id}`} 
            title={project.title} 
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
