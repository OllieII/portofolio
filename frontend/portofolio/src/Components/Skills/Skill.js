import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LargeBubble from './LargeBubble';
import bubble from './bubble.png';
import { getRandomInt, generateNonOverlappingPosition, fetchPositionsFromFile } from './utils';  // Make sure to create and import these utility functions

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#FFE6E6,#E1AFD1,#AD88C6);
  overflow: hidden;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #7469B6;
`;

const skills = [
  {
    skill: 'Artificial Intelligence',
    subSkills: ['Data Analysis', 'Computer Vision', 'PyTorch', 'Deep Learning', 'Natural Language Processing'],
    image: bubble
  },
  {
    skill: 'Web Development',
    subSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    image: bubble
  },
  {
    skill: 'Game Development',
    subSkills: ['Unity', 'Unreal Engine', 'C#', 'Mechanic Design', 'Narrative Design'],
    image: bubble
  },
  {
    skill: 'Virtual Reality',
    subSkills: ['Unity', 'VRChat SDK', 'Oculus XR Tools', 'User Experience Design'],
    image: bubble
  },
  {
    skill: 'Software Development',
    subSkills: ['Java', 'Python', 'C++', 'Data Sturcture and Algorithm', 'Git', 'Docker'],
    image: bubble
  },
];


export function Skill() {
  const [positions, setPositions] = useState([]);
  const [allSmallBubblePositions, setAllSmallBubblePositions] = useState([]);

  useEffect(() => {
    const loadPositions = async (A) => {
      const containerSize = { width: window.innerWidth - 70, height: window.innerHeight - 140 };
      const newPositions = [];
      const sizes = [];
      let success = true;

      skills.forEach((skillSet) => {
        const size = skillSet.subSkills.length * 50 + 25;
        const { position, overlap } = generateNonOverlappingPosition(size, newPositions, containerSize, { x: 170, y: 250 });
        if (overlap) {
          success = false;
        }
        newPositions.push(position);
        sizes.push(size);
      });

      if (success) {
        const finalPos = newPositions.map((pos, index) => ({ ...pos, size: sizes[index] }));
        setPositions(finalPos);
        //savePositionsToLocalStorage(finalPos);
      } else {
        try {
          const storedPositions = await fetchPositionsFromFile('largePos.json');
          setPositions(storedPositions);
        } catch (error) {
          console.error('Failed to fetch positions:', error);
        }
      }
    };

    loadPositions();
  }, []);

    
/*
    const savePositionsToLocalStorage = (positions) => {
      const jsonString = JSON.stringify(positions);
      localStorage.setItem('largePos.json', jsonString);
    };
    savePositionsToLocalStorage(finalPos);
    */

  const handleSmallBubblePositions = (positions) => {
    setAllSmallBubblePositions(allSmallBubblePositions.concat(positions));
  };
/*
  const downloadPositionsAsFile = () => {
    const positions = localStorage.getItem('${process.env.PUBLIC_URL}/position/largePos.json');
    const blob = new Blob([positions], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `largePos.json`; // Use template literals to include the name parameter
    a.click();
    URL.revokeObjectURL(url);
  };
*/
  return (
    <Container>
      
      {positions.length > 0 && skills.map((skillSet, index) => (
        <LargeBubble
          key={index}
          skill={skillSet.skill}
          subSkills={skillSet.subSkills}
          image={skillSet.image}
          size={positions[index].size}
          position={{ x: positions[index].x, y: positions[index].y }}
          existingPositions={allSmallBubblePositions}
          onSmallBubblePositionsGenerated={handleSmallBubblePositions}
        />
      ))}
    </Container>
  );
}

export default Skill;