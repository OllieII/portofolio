import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LargeBubble from './LargeBubble';
import bubble from './bubble.png';
import { computeRadialLayout, fetchPositionsFromFile } from './utils';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background: linear-gradient(#FFE6E6,#E1AFD1,#AD88C6);
  overflow: hidden;
  font-family: "Ubuntu Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #7469B6;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

/* Layer System - Fixed z-index hierarchy */
const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const LayerDotted = styled(Layer)`
  z-index: 0;
`;

const LayerSkills = styled(Layer)`
  z-index: 1;
  pointer-events: auto;
`;

const LayerInfo = styled(Layer)`
  z-index: 2;
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
  const [expandedBubbles, setExpandedBubbles] = useState([]);
  const [allDottedCircles, setAllDottedCircles] = useState([]);
  const [allSkillBubbles, setAllSkillBubbles] = useState([]);
  const [hoveredInfo, setHoveredInfo] = useState(null);

  const handleBubbleExpansion = (skillName) => {
    if (expandedBubbles.includes(skillName)) {
      // Collapse: remove skill and its bubbles
      setExpandedBubbles(prev => prev.filter(skill => skill !== skillName));
      setAllSkillBubbles(prev => prev.filter(bubble => bubble.parentSkill !== skillName));
      setAllDottedCircles(prev => prev.filter(circle => circle.parentSkill !== skillName));
    } else {
      // Expand: add skill and generate its bubbles
      setExpandedBubbles(prev => [...prev, skillName]);
      
      // Find the skill data and position
      const skillData = skills.find(s => s.skill === skillName);
      const skillPosition = positions.find((pos, index) => skills[index].skill === skillName);
      
      if (skillData && skillPosition) {
        generateSkillBubbles(skillData, skillPosition);
      }
    }
  };

  const generateSkillBubbles = (skillData, skillPosition) => {
    const allocatedSpace = skillPosition.allocatedSpace;
    const expansionCenter = skillPosition.expansionCenter;
    
    if (allocatedSpace && expansionCenter) {
      // Use the pre-calculated expansion center for optimal positioning
      const centerX = expansionCenter.cx;
      const centerY = expansionCenter.cy;
      const baseRadius = skillPosition.size / 2;
      
      // ORIGINAL expansion parameters - no changes to bubble sizes
      const maxRadius = allocatedSpace.maxRadius;
      const availableSpace = maxRadius - baseRadius;
      
      // ORIGINAL ring radius and bubble size calculations
      const ringRadius = Math.min(baseRadius + 80, baseRadius + availableSpace * 0.7);
      const remainingSpace = maxRadius - ringRadius;
      const bubbleSize = Math.max(30, Math.min(60, remainingSpace * 2));
      
      // Generate dotted circle that shows the allocated boundary
      const dottedCircle = {
        x: centerX,
        y: centerY,
        size: maxRadius * 2,
        parentSkill: skillData.skill
      };
      
      // Generate skill bubbles in a circle around the expansion center
      const skillBubbles = skillData.subSkills.map((subSkill, index) => {
        const angle = (index / skillData.subSkills.length) * 2 * Math.PI;
        const bubbleX = centerX + ringRadius * Math.cos(angle);
        const bubbleY = centerY + ringRadius * Math.sin(angle);

        return {
          skill: subSkill,
          x: bubbleX,
          y: bubbleY,
          size: bubbleSize,
          parentSkill: skillData.skill
        };
      });

      setAllDottedCircles(prev => [...prev, dottedCircle]);
      setAllSkillBubbles(prev => [...prev, ...skillBubbles]);
      
      console.log(`Expanded ${skillData.skill} (ORIGINAL sizing):
        Expansion center: (${centerX.toFixed(1)}, ${centerY.toFixed(1)})
        Ring radius: ${ringRadius.toFixed(1)}
        Small bubble size: ${bubbleSize.toFixed(1)}
        Max radius: ${maxRadius.toFixed(1)}
        Allocated space: ${allocatedSpace.width.toFixed(1)} × ${allocatedSpace.height.toFixed(1)}`);
    } else {
      // Fallback to original logic - ORIGINAL SIZING
      const centerX = skillPosition.x;
      const centerY = skillPosition.y;
      const baseRadius = skillPosition.size / 2;
      const ringRadius = baseRadius + 80; // ORIGINAL ring offset
      const bubbleSize = Math.max(60, baseRadius * 0.5); // ORIGINAL bubble size

      const dottedCircle = {
        x: centerX,
        y: centerY,
        size: ringRadius * 2, // ORIGINAL dotted circle size
        parentSkill: skillData.skill
      };

      const skillBubbles = skillData.subSkills.map((subSkill, index) => {
        const angle = (index / skillData.subSkills.length) * 2 * Math.PI;
        const bubbleX = centerX + ringRadius * Math.cos(angle);
        const bubbleY = centerY + ringRadius * Math.sin(angle);

        return {
          skill: subSkill,
          x: bubbleX,
          y: bubbleY,
          size: bubbleSize,
          parentSkill: skillData.skill
        };
      });

      setAllDottedCircles(prev => [...prev, dottedCircle]);
      setAllSkillBubbles(prev => [...prev, ...skillBubbles]);
    }
  };

  const handleSkillHover = (skillInfo, isHovered) => {
    setHoveredInfo(isHovered ? skillInfo : null);
  };

  useEffect(() => {
    const loadPositions = () => {
      // Calculate actual header height dynamically
      const getHeaderHeight = () => {
        const header = document.querySelector('.header');
        if (header) {
          return header.offsetHeight;
        }
        // Fallback calculation based on CSS clamp values
        const fontSize = Math.max(16, Math.min(window.innerWidth * 0.03, 35));
        const padding = Math.max(4, Math.min(window.innerWidth * 0.01, 8));
        const headerPadding = window.innerWidth <= 480 ? 5 : window.innerWidth <= 768 ? 8 : 10;
        return fontSize + (padding * 2) + (headerPadding * 2) + 10; // Extra margin for safety
      };

      const headerHeight = getHeaderHeight();

      try {
        const positions = computeRadialLayout({
          N: skills.length,
          containerWidth: window.innerWidth,
          containerHeight: window.innerHeight,
          headerHeight: headerHeight,
          ringOffset: 80,
          smallRatio: 0.5,
          smallMinSize: 60,
          minMargin: 40
        });
        
        setPositions(positions);
        console.log(`Loaded area-based layout with ${positions.length} bubbles, sizes:`, positions.map(p => p.size));
      } catch (error) {
        console.error('Failed to generate radial layout, falling back to stored positions:', error);
        // Fallback to stored positions if radial layout fails
        fetchPositionsFromFile('largePos.json')
          .then(storedPositions => setPositions(storedPositions))
          .catch(fallbackError => console.error('Failed to fetch fallback positions:', fallbackError));
      }
    };

    loadPositions();
    
    // Add window resize listener for responsiveness
    window.addEventListener('resize', loadPositions);
    return () => window.removeEventListener('resize', loadPositions);
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
      {/* Layer 1: Dotted circles (z-index: 0) */}
      <LayerDotted>
        {allDottedCircles.map((circle, index) => (
          <div
            key={`dotted-${index}`}
            style={{
              position: 'absolute',
              top: circle.y,
              left: circle.x,
              width: circle.size,
              height: circle.size,
              border: `${Math.max(3, circle.size * 0.02)}px dashed rgba(255, 255, 255, 0.6)`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </LayerDotted>

      {/* Layer 2: Skill bubbles and large bubbles (z-index: 1) */}
      <LayerSkills>
        {/* Large bubbles */}
        {positions.length > 0 && skills.map((skillSet, index) => {
          const isExpanded = expandedBubbles.includes(skillSet.skill);
          return (
            <LargeBubble
              key={skillSet.skill}
              skill={skillSet.skill}
              subSkills={skillSet.subSkills}
              image={skillSet.image}
              size={positions[index].size}
              position={{ x: positions[index].x, y: positions[index].y }}
              isExpanded={isExpanded}
              onExpand={handleBubbleExpansion}
              onSkillHover={handleSkillHover}
            />
          );
        })}

        {/* Small skill bubbles */}
        {allSkillBubbles.map((bubble, index) => (
          <div
            key={`skill-${index}`}
            style={{
              position: 'absolute',
              top: bubble.y,
              left: bubble.x,
              width: bubble.size,
              height: bubble.size,
              backgroundColor: '#E1F7F537',
              border: '3px solid #E1F7F5',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: Math.max(14, bubble.size * 0.15),
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
              boxShadow: '0 0 20px rgba(100, 204, 197, 0.6)',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={() => handleSkillHover({
              skill: bubble.skill,
              x: bubble.x,
              y: bubble.y,
              size: bubble.size
            }, true)}
            onMouseLeave={() => handleSkillHover(null, false)}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.15)';
              e.target.style.boxShadow = '0 0 25px rgba(100, 204, 197, 1)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 20px rgba(100, 204, 197, 0.6)';
            }}
          >
            {bubble.skill}
          </div>
        ))}
      </LayerSkills>

      {/* Layer 3: Info windows (z-index: 2) */}
      <LayerInfo>
        {hoveredInfo && (
          <div
            style={{
              position: 'absolute',
              top: hoveredInfo.y + hoveredInfo.size,
              left: hoveredInfo.x + hoveredInfo.size,
              width: 200,
              height: 300,
              backgroundColor: 'white',
              border: '2px solid black',
              borderRadius: '5px',
              padding: '10px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
              pointerEvents: 'none',
            }}
          >
            <h3 style={{ margin: 0, padding: 0, fontSize: 18, borderBottom: '1px solid black' }}>
              {hoveredInfo.skill}
            </h3>
            <p style={{ margin: '10px 0 0 0', padding: 0, fontSize: 14 }}>
              Details about {hoveredInfo.skill}
            </p>
          </div>
        )}
      </LayerInfo>
    </Container>
  );
}

export default Skill;