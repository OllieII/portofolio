import React, { useState } from 'react';
import styled from 'styled-components';

const MediaContainer = styled.div`
  width: 100%;
  min-height: 300px; /* Changed from fixed height to min-height */
  max-width: 1200px;
  margin: 0 auto;
  background-color: #d18dd1;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  padding: 10px; /* Added padding for better spacing */
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 8px;
    padding: 8px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  min-height: 150px; /* Ensure minimum height */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1; /* Span all columns */
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 40px 20px;
`;

const MediaSection = ({ mediaList = [] }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (index) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  // Handle empty or invalid mediaList
  if (!mediaList || mediaList.length === 0) {
    return (
      <MediaContainer>
        <EmptyState>
          No media available for this project
        </EmptyState>
      </MediaContainer>
    );
  }

  return (
    <MediaContainer>
      {mediaList.map((media, index) => {
        const isLoaded = loadedImages.has(index);
        const hasFailed = failedImages.has(index);
        
        if (hasFailed) {
          return (
            <ErrorMessage key={index}>
              Failed to load image
            </ErrorMessage>
          );
        }

        return (
          <ImageContainer key={index}>
            {!isLoaded && <LoadingSpinner />}
            <Image
              src={`${process.env.PUBLIC_URL}${media}`}
              alt={`Project Media ${index + 1}`}
              loaded={isLoaded}
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index)}
            />
          </ImageContainer>
        );
      })}
    </MediaContainer>
  );
};

export default MediaSection;
