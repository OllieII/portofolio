// src/Components/About.js
import React from 'react';
import './css/About.css';

export function About() {
  return (
    <div className="about-container">
      <h1>Olly(Ziqi) Guo</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          Hi, I'm Olly (Ziqi) Guo, currently pursuing a Bachelor of Science in Computer Science with certificates in Game Design and Theatre at the University of Wisconsin-Madison. I'm expected to graduate in December 2026.
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <p>
          At UW-Madison, I've engaged deeply in various technical and creative fields through courses in Computer Graphics, Computer Vision, Artificial Intelligence, Virtual Reality, and Full-Stack Development. I am most fluent in Java, Python, C#, JavaScript, and Unity development.
        </p>
      </section>
      <section>
        <h2>Experience</h2>
        <p>
          <strong>Senior Narrative Designer & Developer</strong> at Minerva Studio:
          I lead the development of story and encyclopedia systems in the 2D rogue-like game <em>Library of Meialia</em> using Unity, C#, and Lua, collaborating closely with cross-functional teams to ensure an engaging gameplay experience.
        </p>
        <p>
          <strong>Research Assistant</strong> at the Department of Theatre:
          Developed interactive environments for a Virtual Reality performance called <em>Beyond the Garden of Adrian</em> using Unity with C# and VRChat SDK, while researching the impact of virtual environments on user experience.
        </p>
        <p>
          <strong>Research Assistant</strong> at the Wisconsin Institute of Discovery:
          Integrated machine learning models into games to improve player retention by identifying early quit patterns and providing real-time feedback.
        </p>
        <p>
          <strong>Research Assistant</strong> at the Department of Astronomy:
          Analyzed the Milky Way Galaxy Density Structure and developed neural networks to identify Red Clump Stars, providing new insights into galaxy bar structures.
        </p>
      </section>
      <section>
        <h2>Involvements</h2>
        <p>
          As a <strong>Peer Mentor</strong> in the Department of Computer Science, I assist students in learning Computer Graphics and related technologies. I also organize weekly meetings for Minerva Studio, ensuring smooth progress and goal setting.
        </p>
      </section>
      <section>
        <h2>Personal Projects</h2>
        <p>
          Developed <em>Abyss Bridge</em>, a mixed reality horror game using Unity and Oculus XR tools, featuring strategic enemy evasion mechanics. I am also working on a personal website to showcase my portfolio and blog content.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:zguo295@wisc.edu">zguo295@wisc.edu</a><br />
          GitHub: <a href="https://github.com/Ollieii" target="_blank" rel="noopener noreferrer">https://github.com/Ollieii</a><br />
          Personal Website: <a href="https://ollieii.github.io/portfolio/" target="_blank" rel="noopener noreferrer">https://ollieii.github.io/portfolio/</a>
        </p>
      </section>
    </div>
  );
}

export default About;
