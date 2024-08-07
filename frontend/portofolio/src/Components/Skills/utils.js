// utils.js

// Generate a random integer between min and max (inclusive)
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateNonOverlappingPosition = (size, existingPositions, containerSize, originalPosition) => {
  let position;
  let overlap;
  const maxAttempts = 2000;
  let attempts = 0;

  console.log(`Generating non-overlapping position for size ${size} within container ${containerSize.width}x${containerSize.height}`);

  do {
    overlap = false;

    let xmax = containerSize.width - size;
    let ymax = containerSize.height - size;
    
    position = {
      x: getRandomInt(0, xmax),
      y: getRandomInt(0, ymax)
    };

    for (let existing of existingPositions) {
      if (Math.abs(position.x - existing.x) < size && Math.abs(position.y - existing.y) < size) {
        overlap = true;
        break;
      }
    }

    console.log(`Generated position: ${position.x}, ${position.y} after ${attempts} attempts for large bubble at ${originalPosition.x}, ${originalPosition.y}, ymax is ${ymax}, xmax is ${xmax}, ymin is ${originalPosition.y}, xmin is ${originalPosition.x}`);

    attempts++;
  } while (overlap && attempts < maxAttempts);


  return {position, overlap};
};

export const fetchPositionsFromFile = async (filename) => {
  const response = await fetch(`${process.env.PUBLIC_URL}/position/${filename}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

// utils.js
export const generateBezierPath = (positions) => {
  if (positions.length < 2) return '';

  // Sort positions based on the x-coordinate
  const sortedPositions = [...positions].sort((a, b) => a.x - b.x);

  const path = sortedPositions.reduce((acc, pos, index) => {
    const { x, y } = pos;
    if (index === 0) {
      return `M${x},${y}`;
    } else {
      const cp1X = (sortedPositions[index - 1].x + x) / 2;
      const cp1Y = sortedPositions[index - 1].y;
      const cp2X = (sortedPositions[index - 1].x + x) / 2;
      const cp2Y = y;
      return `${acc} C${cp1X},${cp1Y} ${cp2X},${cp2Y} ${x},${y}`;
    }
  }, '');

  return path;
};
