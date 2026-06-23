import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const MediaContainer = styled.div`
  width: 100%;
  align-self: center;
  background: #efe7da;
  border: 1px solid rgba(37, 34, 29, 0.16);
  overflow: hidden;
  position: relative;
  padding: clamp(12px, 2vw, 22px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height ? `${props.height}px` : '600px'};
  min-height: 460px;
  max-height: 72vh;
  overflow: hidden;
  background-color: #1f1c18;

  @media (max-width: 768px) {
    height: 400px;
    min-height: 320px;
  }

  @media (max-width: 480px) {
    height: 300px;
    min-height: 240px;
  }
`;

const MediaItem = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${props => props.active ? 'auto' : 'none'};

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 4px 0;
  width: 100%;
  flex-wrap: nowrap;
`;

const Thumbnail = styled.button`
  width: 112px;
  min-width: 112px;
  height: 72px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${props => props.active ? '#7f4d2f' : 'rgba(37, 34, 29, 0.24)'};
  transition: opacity 0.25s ease, border-color 0.25s ease;
  position: relative;
  background-color: #f8f4eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  opacity: ${props => props.active ? 1 : 0.62};

  &:hover {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoThumbnailOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8f4eb;
  background: rgba(31, 28, 24, 0.28);
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &::before {
    content: 'Play';
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 18px;' : 'right: 18px;'}
  background-color: rgba(248, 244, 235, 0.86);
  color: #25221d;
  border: 1px solid rgba(37, 34, 29, 0.18);
  cursor: pointer;
  width: 44px;
  height: 44px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: #f8f4eb;
    color: #7f4d2f;
  }
`;

const FullScreenButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: rgba(248, 244, 235, 0.86);
  color: #25221d;
  border: 1px solid rgba(37, 34, 29, 0.18);
  padding: 8px 12px;
  font-size: 0.68rem;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    color: #7f4d2f;
    background: #f8f4eb;
  }
`;

const FullScreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(31, 28, 24, 0.96);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const FullScreenContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 95vh;
    object-fit: contain;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -48px;
  right: 0;
  background: #f8f4eb;
  color: #25221d;
  border: 1px solid rgba(37, 34, 29, 0.18);
  padding: 9px 14px;
  font-size: 0.72rem;
  font-family: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 460px;
  border: none;

  @media (max-width: 768px) {
    min-height: 320px;
  }
`;

const LoadingSpinner = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid rgba(248, 244, 235, 0.35);
  border-top: 2px solid #f8f4eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  color: #5c5549;
  font-size: 16px;
  padding: 40px 20px;
`;

const MediaSection = ({ mediaList = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [imageDimensions, setImageDimensions] = useState({});
  const [maxDimensions, setMaxDimensions] = useState({ width: 0, height: 0 });
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageTimerRef = useRef(null);
  const videoRef = useRef(null);

  const handleImageLoad = (index, event) => {
    setLoadedImages(prev => new Set(prev).add(index));
    const img = event.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const newDimensions = {
      ...imageDimensions,
      [index]: { width: img.naturalWidth, height: img.naturalHeight, aspectRatio }
    };
    setImageDimensions(newDimensions);
    setMaxDimensions(prev => ({
      width: Math.max(prev.width, img.naturalWidth),
      height: Math.max(prev.height, img.naturalHeight)
    }));
  };

  const isEmbedCode = (media) => typeof media === 'string' && media.trim().startsWith('<iframe');
  const extractSrcFromIframe = (iframeString) => {
    const srcMatch = iframeString.match(/src=["']([^"']+)["']/);
    return srcMatch ? srcMatch[1] : '';
  };
  const getYouTubeThumbnail = (iframeString) => {
    const videoSrc = extractSrcFromIframe(iframeString);
    const youtubeMatch = videoSrc.match(/youtube\.com\/embed\/([^?]+)/);
    return youtubeMatch?.[1] ? `https://img.youtube.com/vi/${youtubeMatch[1]}/mqdefault.jpg` : null;
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  }, [mediaList.length]);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  const goToIndex = (index) => setCurrentIndex(index);

  useEffect(() => {
    const currentMedia = mediaList[currentIndex];
    const isVideo = isEmbedCode(currentMedia);

    if (!isVideo && !isFullScreen && mediaList.length > 1) {
      imageTimerRef.current = setTimeout(goToNext, 5000);
      return () => {
        if (imageTimerRef.current) {
          clearTimeout(imageTimerRef.current);
        }
      };
    }
  }, [currentIndex, mediaList, isFullScreen, goToNext]);

  if (!mediaList || mediaList.length === 0) {
    return (
      <MediaContainer>
        <EmptyState>No media available for this project.</EmptyState>
      </MediaContainer>
    );
  }

  const containerHeight = maxDimensions.height > 0
    ? Math.min(Math.max(maxDimensions.height * 0.6, 500), 700)
    : 600;

  return (
    <MediaContainer>
      <CarouselContainer height={containerHeight}>
        {mediaList.map((media, index) => {
          const isActive = index === currentIndex;

          if (isEmbedCode(media)) {
            const videoSrc = extractSrcFromIframe(media);
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

          const isLoaded = loadedImages.has(index);

          return (
            <MediaItem key={index} active={isActive}>
              {!isLoaded && isActive && <LoadingSpinner />}
              <Image
                src={`${process.env.PUBLIC_URL}${media}`}
                alt={`Project media ${index + 1}`}
                loaded={isLoaded}
                onLoad={(e) => handleImageLoad(index, e)}
              />
            </MediaItem>
          );
        })}

        {mediaList.length > 1 && (
          <>
            <NavigationButton direction="left" onClick={goToPrev} aria-label="Previous media">
              &lt;
            </NavigationButton>
            <NavigationButton direction="right" onClick={goToNext} aria-label="Next media">
              &gt;
            </NavigationButton>
          </>
        )}
        {!isEmbedCode(mediaList[currentIndex]) && (
          <FullScreenButton onClick={() => setIsFullScreen(true)}>
            View full size
          </FullScreenButton>
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
                  aria-label={`Show video ${index + 1}`}
                >
                  {thumbnailUrl && <img src={thumbnailUrl} alt={`Video thumbnail ${index + 1}`} />}
                  <VideoThumbnailOverlay />
                </Thumbnail>
              );
            }

            return (
              <Thumbnail
                key={index}
                active={index === currentIndex}
                onClick={() => goToIndex(index)}
                aria-label={`Show media ${index + 1}`}
              >
                <img src={`${process.env.PUBLIC_URL}${media}`} alt={`Thumbnail ${index + 1}`} />
              </Thumbnail>
            );
          })}
        </ThumbnailContainer>
      )}

      {isFullScreen && !isEmbedCode(mediaList[currentIndex]) && (
        <FullScreenOverlay onClick={() => setIsFullScreen(false)}>
          <FullScreenContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsFullScreen(false)}>
              Close
            </CloseButton>
            <img
              src={`${process.env.PUBLIC_URL}${mediaList[currentIndex]}`}
              alt={`Full size view ${currentIndex + 1}`}
            />
          </FullScreenContent>
        </FullScreenOverlay>
      )}
    </MediaContainer>
  );
};

export default MediaSection;
