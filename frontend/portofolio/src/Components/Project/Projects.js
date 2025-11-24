import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './css/Projects.css';

function Projects() {
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/sections.json`)
      .then(response => response.json())
      .then(data => setSectionData(data))
      .catch(err => console.error('Failed to load section data:', err));
  }, []);

  const researchProjects = [
    { id: 2, media: `${process.env.PUBLIC_URL}/img/Waddle/1.jpg`, title: 'Behavioral Analysis in Virtual Reality', brief: 'VR research analyzing user interaction patterns and spatial navigation behaviors in immersive environments.' },
    { id: 5, media: `${process.env.PUBLIC_URL}/img/Milky/Milky1.png`, title: 'Probe the Milky Way Density Structure', brief: 'Astrophysics research analyzing galactic density distribution using computational modeling and data analysis.'},
    { id: 3, media: `${process.env.PUBLIC_URL}/img/GOA/GOA0.png`, title: 'Virtual Theatre: Beyond the Garden of Adrian', brief: 'Immersive VR theatre experience combining narrative storytelling with interactive virtual environments.' },
    { id: 4, media: `${process.env.PUBLIC_URL}/img/POMDP/output.png`, title: 'Partiallly Observable Markov Descison Process', brief: 'Research comparing Nash Q-learning, DQN, and fictitious play in multi-agent reinforcement learning environments.' },
  ];

  const gameProjects = [
    { id: 1, media: `${process.env.PUBLIC_URL}/img/LOM/Lom0.png`, title: 'Library of Meialia', brief: '2D rogue-like pixel game with 80+ skills, 50+ items, and 20+ mobs across 4 biomes. Lead Narrative Designer role.' },
    {id: 6, media: `${process.env.PUBLIC_URL}/img/OtherSide/0.png`, title: 'The Otherside', brief: 'Puzzle game combining word solving, chase mechanics, and maze exploration. Game and level design lead.' },
  ];

  const experienceProjects = [
    {id: 7, media: `${process.env.PUBLIC_URL}/img/CS639/0.png`, title: 'CS639 Deep Learning for Computer Vision', brief: 'Implemented CNNs, GANs, and object detection algorithms from scratch using PyTorch and NumPy.'},
  ];

  if (!sectionData) {
    return <div className="projects-container">Loading...</div>;
  }

  return (
    <div className="projects-container">
      <div className="section research">
        <h2 className="section-title research">{sectionData.research.title}</h2>
        <p className="section-description">
          {sectionData.research.description}
        </p>
        <div className="projects-grid">
          {researchProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              media={project.media} 
              link={`/portofolio/projects/${project.id}`} 
              title={project.title}
              brief={project.brief}
              category="research"
            />
          ))}
        </div>
      </div>

      <div className="section games">
        <h2 className="section-title games">{sectionData.games.title}</h2>
        <p className="section-description">
          {sectionData.games.description}
        </p>
        <div className="projects-grid">
          {gameProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              media={project.media} 
              link={`/portofolio/projects/${project.id}`} 
              title={project.title}
              brief={project.brief}
              category="games"
            />
          ))}
        </div>
      </div>

      {experienceProjects.length > 0 && (
        <div className="section experience">
          <h2 className="section-title experience">{sectionData.experience.title}</h2>
          <p className="section-description">
            {sectionData.experience.description}
          </p>
          <div className="projects-grid">
            {experienceProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                media={project.media} 
                link={`/portofolio/projects/${project.id}`} 
                title={project.title}
                brief={project.brief}
                category="experience"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
