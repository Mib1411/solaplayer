"use client"

import React, { useRef } from 'react';
import { usePlayerState } from '../hooks/usePlayerState';
import { usePlayerEffects } from '../hooks/usePlayerEffects';
import { usePlayerControls } from '../hooks/usePlayerControls';
import { PlayerContainer } from './PlayerContainer';


interface MinimalPlayerProps {
  mp4?: string | string[];
  webm?: string | string[];
  youtube?: string;
  vimeo?: string;
  btag?: string;
  poster?: string;
  link?: string;
  autoplay?: boolean;
  muted?: boolean;
}

const MinimalPlayer: React.FC<MinimalPlayerProps> = ({ 
  mp4, 
  webm, 
  youtube, 
  vimeo, 
  btag,
  poster,
  link,
  autoplay = false, 
  muted = true
}) => {
   // Refs
   const videoRef = useRef<HTMLVideoElement>(null!);
   const youtubeContainerRef = useRef<HTMLDivElement>(null!);
   const vimeoContainerRef = useRef<HTMLDivElement>(null!);
 
   // Hooks
   const playerState = usePlayerState({ autoplay, muted });
 
  const playerControls = usePlayerControls({
    videoRef,
    youtubeContainerRef,
    vimeoContainerRef,
    playerState
  });

  usePlayerEffects({
    mp4,
    webm,
    youtube,
    vimeo,
    btag,
    captions: undefined,
    description: undefined,
    chapters: undefined,
    playerState,
    cues: [],
    parsedChapters: [],
    videoRef,
    youtubeContainerRef,
    vimeoContainerRef
  });

  const handleFullPlayerClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <PlayerContainer
      videoRef={videoRef}
      youtubeContainerRef={youtubeContainerRef}
      vimeoContainerRef={vimeoContainerRef}
      playerState={playerState}
      playerControls={playerControls}
      mp4={mp4}
      webm={webm}
      poster={poster}
      controlsType="minimal"
      onFullPlayerClick={handleFullPlayerClick}
    />
  );
};

export default MinimalPlayer;