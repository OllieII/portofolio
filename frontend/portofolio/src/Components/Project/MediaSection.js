import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MediaContainer = styled.div
`
  width: 100%;
  min-height: 500px;
  background: #0B1120;
  border: 1px solid #4B5563;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CarouselContainer = styled.div
`
  position: relative;
  width: 100%;
  height: 600px;
  min-height: 500px;
  max-height: 70vh;
  border-radius: 12px;
  overflow: hidden;
  background-color: #050814;
  
  @media (max-width: 768px) {
    height: 400px;
    min-height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    min-height: 250px;
  }
`;

const MediaItem = styled.div
`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${props => props.active ? 'auto' : 'none'};
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1F2937;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #22D3EE;
    border-radius: 3px;
  }
`;

const Thumbnail = styled.div`
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid ${props => props.active ? '#22D3EE' : '#4B5563'};
  transition: all 0.3s ease;
  position: relative;
  background-color: #050814;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    border-color: #22D3EE;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(34, 211, 238, 0.4);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
    height: 60px;
  }
`;

const VideoThumbnailOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background-color: #22D3EE;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #050814;
  
  &::before {
    content: '▶';
    margin-left: 2px;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  background-color: rgba(34, 211, 238, 0.9);
  color: #050814;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: #F97316;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 500px;
  border: none;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    min-height: 350px;
  }
  
  @media (max-width: 480px) {
    min-height: 250px;
  }
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #1F2937;
  border-top: 3px solid #22D3EE;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1; /* Span all columns */
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 40px 20px;
`;

const MediaSection = ({ mediaList = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const imageTimerRef = useRef(null);
  const videoRef = useRef(null);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const isEmbedCode = (media) => {
    return typeof media === 'string' && media.trim().startsWith('<iframe');
  };

  const extractSrcFromIframe = (iframeString) => {
    const srcMatch = iframeString.match(/src=["']([^"']+)["']/);
    return srcMatch ? srcMatch[1] : '';
  };

  const getYouTubeThumbnail = (iframeString) => {
    const videoSrc = extractSrcFromIframe(iframeString);
    // Extract YouTube video ID from embed URL
    const youtubeMatch = videoSrc.match(/youtube\.com\/embed\/([^?]+)/);
    if (youtubeMatch && youtubeMatch[1]) {
      const videoId = youtubeMatch[1];
      return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    }
    return null;
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance for images (5 seconds)
  useEffect(() => {
    const currentMedia = mediaList[currentIndex];
    const isVideo = isEmbedCode(currentMedia);

    if (!isVideo) {
      const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
      };
      
      // Set timer for images
      imageTimerRef.current = setTimeout(() => {
        goToNextSlide();
      }, 5000); // 5 seconds

      return () => {
        if (imageTimerRef.current) {
          clearTimeout(imageTimerRef.current);
        }
      };
    }
  }, [currentIndex, mediaList]);

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
      <CarouselContainer>
        {mediaList.map((media, index) => {
          const isActive = index === currentIndex;
          
          // Check if this is an iframe embed code
          if (isEmbedCode(media)) {
            const videoSrc = extractSrcFromIframe(media);
            // Add autoplay and auto-advance parameters
            const autoplaySrc = videoSrc.includes('?') 
              ? `${videoSrc}&autoplay=1&mute=0`
              : `${videoSrc}?autoplay=1&mute=0`;
            
            return (
              <MediaItem key={index} active={isActive}>
                <VideoFrame
                  ref={index === currentIndex ? videoRef : null}
                  src={isActive ? autoplaySrc : videoSrc}
                  title={`Project Video ${index + 1}`}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </MediaItem>
            );
          }

          // Handle regular images
          const isLoaded = loadedImages.has(index);
          
          return (
            <MediaItem key={index} active={isActive}>
              {!isLoaded && isActive && <LoadingSpinner />}
              <Image
                src={`${process.env.PUBLIC_URL}${media}`}
                alt={`Project Media ${index + 1}`}
                loaded={isLoaded}
                onLoad={() => handleImageLoad(index)}
              />
            </MediaItem>
          );
        })}
        
        {mediaList.length > 1 && (
          <>
            <NavigationButton direction="left" onClick={goToPrev}>
              ‹
            </NavigationButton>
            <NavigationButton direction="right" onClick={goToNext}>
              ›
            </NavigationButton>
          </>
        )}
      </CarouselContainer>
      
      {mediaList.length > 1 && (
        <ThumbnailContainer>
          {mediaList.map((media, index) => {
            const isVideo = isEmbedCode(media);
            
            if (isVideo) {
              const thumbnailUrl = getYouTubeThumbnail(media);
              
              return (
                <Thumbnail
                  key={index}
                  active={index === currentIndex}
                  onClick={() => goToIndex(index)}
                >
                  {thumbnailUrl ? (
                    <>
                      <img
                        src={thumbnailUrl}
                        alt={`Video Thumbnail ${index + 1}`}
                      />
                      <VideoThumbnailOverlay />
                    </>
                  ) : (
                    <>
                      <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        background: 'linear-gradient(135deg, #7d5a7d, #AD88C6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        VIDEO
                      </div>
                      <VideoThumbnailOverlay />
                    </>
                  )}
                </Thumbnail>
              );
            }
            
            // For images, show actual thumbnail
            return (
              <Thumbnail
                key={index}
                active={index === currentIndex}
                onClick={() => goToIndex(index)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${media}`}
                  alt={`Thumbnail ${index + 1}`}
                />
              </Thumbnail>
            );
          })}
        </ThumbnailContainer>
      )}
    </MediaContainer>
  );
};

export default MediaSection;