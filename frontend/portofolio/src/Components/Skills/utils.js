// utils.js

// Generate a random integer between min and max (inclusive)
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateNonOverlappingPosition = (size, existingPositions, containerSize, originalPosition, headerHeight = 0) => {
  // Optimized layout: centered, non-overlapping, maximum size with expansion consideration
  const totalBubbles = 5; // We know there are 5 skill categories
  const bubblesPerRow = Math.ceil(totalBubbles / 2); // 3 bubbles in first row, 2 in second
  const currentBubbleIndex = existingPositions.length;
  
  // Calculate row and column for current bubble
  const row = Math.floor(currentBubbleIndex / bubblesPerRow);
  const col = currentBubbleIndex % bubblesPerRow;
  
  // Calculate spacing considering both normal size and expanded size (1.5x larger)
  const margin = 30; // Increased margin from edges
  const topMargin = headerHeight + 20; // Account for header height + small buffer
  const expansionFactor = 1.5; // Bubbles expand to 1.5x when clicked
  const expandedSize = size * expansionFactor;
  const minGap = Math.max(50, expandedSize * 0.1); // Larger gap considering expansion
  
  let position;
  
  if (row === 0) {
    // First row: 3 bubbles - calculate optimal spacing for centering with expansion space
    const bubblesInRow = 3;
    const totalExpandedWidth = bubblesInRow * expandedSize;
    const totalGapWidth = (bubblesInRow - 1) * minGap;
    const totalUsedWidth = totalExpandedWidth + totalGapWidth;
    
    // Center the entire row considering expanded sizes
    const startX = (containerSize.width - totalUsedWidth) / 2;
    const spaceBetweenCenters = expandedSize + minGap;
    
    position = {
      x: startX + (col * spaceBetweenCenters) + (expandedSize - size) / 2, // Adjust for actual size vs expanded size
      y: topMargin + (containerSize.height - topMargin - margin - minGap - 2 * expandedSize) * 0.2 // More separation with header consideration
    };
  } else {
    // Second row: 2 bubbles - calculate optimal spacing for centering with expansion space
    const bubblesInRow = 2;
    const totalExpandedWidth = bubblesInRow * expandedSize;
    const totalGapWidth = (bubblesInRow - 1) * minGap;
    const totalUsedWidth = totalExpandedWidth + totalGapWidth;
    
    // Center the entire row considering expanded sizes
    const startX = (containerSize.width - totalUsedWidth) / 2;
    const spaceBetweenCenters = expandedSize + minGap;
    
    position = {
      x: startX + (col * spaceBetweenCenters) + (expandedSize - size) / 2, // Adjust for actual size vs expanded size
      y: topMargin + (containerSize.height - topMargin - margin - minGap - 2 * expandedSize) * 0.8 + expandedSize + minGap // More separation with header consideration
    };
  }

  // Ensure position is within bounds considering expansion and header
  position.x = Math.max(margin, Math.min(containerSize.width - expandedSize - margin, position.x));
  position.y = Math.max(topMargin, Math.min(containerSize.height - expandedSize - margin, position.y));

  // Final verification: check for overlaps considering expanded sizes
  let hasOverlap = false;
  for (let existing of existingPositions) {
    const distance = Math.sqrt(
      Math.pow(position.x - existing.x, 2) + 
      Math.pow(position.y - existing.y, 2)
    );
    const minDistance = (expandedSize + existing.size * expansionFactor) / 2 + minGap;
    
    if (distance < minDistance) {
      hasOverlap = true;
      console.warn(`Overlap detected for expanded bubble ${currentBubbleIndex}, distance: ${distance}, required: ${minDistance}`);
      break;
    }
  }

  console.log(`Generated position with header offset: ${position.x}, ${position.y} for bubble ${currentBubbleIndex} (size: ${size}, expanded: ${expandedSize}, headerHeight: ${headerHeight}), row: ${row}, col: ${col}`);
  return { position, overlap: hasOverlap };
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

/**
 * Compute a valid circle‐center within a rectangle.
 *
 * @param {{ x: number, y: number, width: number, height: number }} rect
 * @param {number} r   // desired circle radius
 * @param {boolean} [random=false]  // if true, pick a random valid point
 * @returns {{ cx: number, cy: number }}  // center of the circle
 * @throws if rect.width < 2r or rect.height < 2r
 */
function placeCircleInRect(rect, r, random = false) {
  // 1) sanity check
  if (rect.width  < 2*r || rect.height < 2*r) {
    throw new Error(
      `Rectangle too small: need at least ${2*r}px in both dimensions`
    );
  }

  // 2) compute allowed range for center
  const minX = rect.x      + r;
  const maxX = rect.x + rect.width  - r;
  const minY = rect.y      + r;
  const maxY = rect.y + rect.height - r;

  // 3a) deterministic: center it
  if (!random) {
    return {
      cx: (minX + maxX) / 2,
      cy: (minY + maxY) / 2
    };
  }

  // 3b) random uniform within allowed range
  return {
    cx: minX + Math.random() * (maxX - minX),
    cy: minY + Math.random() * (maxY - minY)
  };
}

/**
 * Pack N circles with relative size ratios into a rectangle,
 * maximizing their scale, and return each circle's center & radius.
 *
 * @param {{ x:number, y:number, width:number, height:number }} rect
 * @param {number[]} ratios     // e.g. [1,1,2]
 * @param {number}   [margin=0] // space between circles and from edges
 * @returns {{ cx:number, cy:number, r:number }[]}
 */
function packCirclesByRatio(rect, ratios, margin = 0) {
  const N        = ratios.length;
  const W        = rect.width;
  const H        = rect.height;
  const M        = margin;

  // 1) Normalize ratios
  const sumRatios  = ratios.reduce((a,b) => a+b, 0);
  const maxRatio   = Math.max(...ratios);

  // 2) Compute the maximal scale S such that:
  //    • total width = 2*S*sumRatios + (N+1)*M <= W
  //    • max height = 2*S*maxRatio        + 2*M    <= H
  const scaleW = (W - (N+1)*M) / (2*sumRatios);
  const scaleH = (H - 2*M)             / (2*maxRatio);
  const S      = Math.max(0, Math.min(scaleW, scaleH));

  // 3) Compute actual radii
  const radii = ratios.map(r => r * S);

  // 4) Layout them in a row, left→right, centered vertically
  const cy = rect.y + H/2;
  let  x  = rect.x + M + radii[0];
  const out = [];

  for (let i = 0; i < N; i++) {
    out.push({ cx: x, cy, r: radii[i] });
    // move x to next center: + current diameter + margin
    if (i < N - 1) {
      x += radii[i] + radii[i+1] + M;
    }
  }

  return out;
}

// Circle packing layout with proportional sizing and proper vertical centering
export const computeRadialLayout = ({
  N,
  containerWidth,
  containerHeight,
  headerHeight = 0,
  ringOffset = 80,
  smallRatio = 0.5,
  smallMinSize = 60,
  minMargin = 40
}) => {
  // Get the true available vertical space
  const availableHeight = containerHeight - headerHeight;
  
  // Define the available rectangle using the TRUE vertical space
  const rect = {
    x: minMargin,
    y: headerHeight + minMargin,
    width: containerWidth - 2 * minMargin,
    height: availableHeight - 2 * minMargin
  };

  // Define size ratios for each skill category - ORIGINAL RATIOS
  const skillRatios = [2, 1.5, 1, 1.5, 1.8]; // AI, Web, Game, VR, Software
  
  // Pack circles using the ratio-based algorithm - NO SCALING CHANGES
  const packedCircles = packCirclesByRatio(rect, skillRatios, minMargin);
  
  console.log(`Circle packing layout: ${N} bubbles in TRUE vertical space ${rect.width}x${rect.height} (available height: ${availableHeight}, header: ${headerHeight})`);
  
  const positions = packedCircles.map((circle, index) => {
    const radius = circle.r;
    const size = radius * 2;
    
    // Create individual rectangle for each circle's expansion space
    const nextCircleX = index < packedCircles.length - 1 ? 
      packedCircles[index + 1].cx - packedCircles[index + 1].r - minMargin/2 : 
      rect.x + rect.width - minMargin;
    const prevCircleX = index > 0 ? 
      packedCircles[index - 1].cx + packedCircles[index - 1].r + minMargin/2 : 
      rect.x + minMargin;
    
    const cellRect = {
      x: prevCircleX,
      y: rect.y,
      width: nextCircleX - prevCircleX,
      height: rect.height
    };
    
    // Use placeCircleInRect to ensure proper positioning within the cell
    const expansionRadius = radius + ringOffset + (smallMinSize / 2);
    
    let expandedCenter;
    try {
      expandedCenter = placeCircleInRect(cellRect, expansionRadius, false);
    } catch (error) {
      // If expansion doesn't fit, just center the main circle
      console.warn(`Expansion doesn't fit for circle ${index}, using main circle centering`);
      try {
        expandedCenter = placeCircleInRect(cellRect, radius, false);
      } catch (fallbackError) {
        // Final fallback - use the main circle position
        expandedCenter = { cx: circle.cx, cy: circle.cy };
      }
    }
    
    const allocatedSpace = {
      width: cellRect.width,
      height: cellRect.height,
      centerX: expandedCenter.cx,
      centerY: expandedCenter.cy,
      maxRadius: Math.min(cellRect.width, cellRect.height) / 2 - 5
    };
    
    const position = {
      x: circle.cx,
      y: circle.cy,
      size: size,
      allocatedSpace: allocatedSpace,
      expansionCenter: expandedCenter
    };
    
    console.log(`Position ${index}: main(${circle.cx.toFixed(1)}, ${circle.cy.toFixed(1)}), expansion(${expandedCenter.cx.toFixed(1)}, ${expandedCenter.cy.toFixed(1)}), radius: ${radius.toFixed(1)}, available height: ${availableHeight.toFixed(1)}`);
    
    return position;
  });
  
  return positions;
};
