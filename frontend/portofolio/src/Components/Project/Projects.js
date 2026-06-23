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
    { id: 2, media: `${process.env.PUBLIC_URL}/img/Waddle/1.jpg`, title: 'Behavioral Analysis in Virtual Reality', brief: 'Head movement and telemetry analysis for predicting performance, hesitation, and early quitting in immersive tasks.', meta: 'VR telemetry / ML', signal: 'Predicting early quitting from motion traces' },
    { id: 3, media: `${process.env.PUBLIC_URL}/img/GOA/GOA0.png`, title: 'Virtual Theatre: Beyond the Garden of Adrian', brief: 'An immersive theatre study where narrative, embodiment, and spatial interaction become the research material.', meta: 'VR theatre / interaction', signal: 'Studying actor-audience presence in VR' },
    { id: 4, media: `${process.env.PUBLIC_URL}/img/POMDP/output.png`, title: 'Partially Observable Markov Decision Process', brief: 'Comparing Nash Q-learning, DQN, and fictitious play in multi-agent reinforcement learning environments.', meta: 'RL / multi-agent systems', signal: 'Solving strategy under uncertainty' },
    { id: 5, media: `${process.env.PUBLIC_URL}/img/Milky/Milky1.png`, title: 'Probe the Milky Way Density Structure', brief: 'Computational modeling of galactic density distributions, using data analysis to make structure visible.', meta: 'Astrophysics / modeling', signal: 'Turning observation data into structure' },
  ];

  const gameProjects = [
    { id: 1, media: `${process.env.PUBLIC_URL}/img/LOM/Lom0.png`, title: 'Library of Meialia', brief: 'A 2D roguelike with 80+ skills, 50+ items, and 20+ mobs across 4 biomes. Lead Narrative Designer role.', meta: 'Steam game / narrative', signal: 'Narrative systems inside roguelike play' },
    { id: 6, media: `${process.env.PUBLIC_URL}/img/OtherSide/0.png`, title: 'The Otherside', brief: 'A puzzle game combining word solving, chase mechanics, and maze exploration. Game and level design lead.', meta: 'Puzzle / level design', signal: 'Language puzzles under pressure' },
  ];

  const experienceProjects = [
    { id: 7, media: `${process.env.PUBLIC_URL}/img/CS639/0.png`, title: 'CS639 Deep Learning for Computer Vision', brief: 'Implemented CNNs, GANs, and object detection algorithms from scratch using PyTorch and NumPy.', meta: 'Computer vision / PyTorch', signal: 'Building core vision models from scratch' },
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
          {researchProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              index={index + 1}
              media={project.media} 
              link={`/portofolio/projects/${project.id}`} 
              title={project.title}
              brief={project.brief}
              category="research"
              meta={project.meta}
              signal={project.signal}
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
          {gameProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              index={index + 1}
              media={project.media} 
              link={`/portofolio/projects/${project.id}`} 
              title={project.title}
              brief={project.brief}
              category="games"
              meta={project.meta}
              signal={project.signal}
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
            {experienceProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                index={index + 1}
                media={project.media} 
                link={`/portofolio/projects/${project.id}`} 
                title={project.title}
                brief={project.brief}
                category="experience"
                meta={project.meta}
                signal={project.signal}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
