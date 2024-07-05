import React from 'react';
import styled from 'styled-components';
import { generateBezierPath } from './utils';

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const BezierCurve = ({ positions }) => {
  const pathData = generateBezierPath(positions);

  return (
    <Svg>
      <path
        d={pathData}
        fill="none"
        stroke="#000" // Adjust the color as needed
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-width"
          from="10"
          to="1"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    </Svg>
  );
};

export default BezierCurve;
