"use client"

import React, { useRef } from 'react';
import { FullPlayerProps } from '../types/player';
import { usePlayerState } from '../hooks/usePlayerState';
import { usePlayerEffects } from '../hooks/usePlayerEffects';
import { usePlayerControls } from '../hooks/usePlayerControls';
import { useTranscriptData, useChaptersData } from '../hooks/useVideoData';
import { PlayerContainer } from './PlayerContainer';

const FullPlayer: React.FC<FullPlayerProps> = ({ 
  mp4, 
  webm, 
  youtube, 
  vimeo, 
  btag,
  poster, // FEHLTE!
  captions, 
  description, 
  chapters, 
  autoplay = false, 
  muted = true 
}) => {
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null!);
  const youtubeContainerRef = useRef<HTMLDivElement>(null!);
  const vimeoContainerRef = useRef<HTMLDivElement>(null!);

  // Hooks
  const playerState = usePlayerState({ autoplay, muted });
  const { cues } = useTranscriptData(captions, description); // BEIDE!
  const { parsedChapters } = useChaptersData(chapters);
  
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
    captions,
    description,
    chapters,
    playerState,
    cues,
    parsedChapters,
    videoRef,
    youtubeContainerRef,
    vimeoContainerRef
  });

  return (
    <PlayerContainer
      videoRef={videoRef}
      youtubeContainerRef={youtubeContainerRef}
      vimeoContainerRef={vimeoContainerRef}
      playerState={playerState}
      playerControls={playerControls}
      mp4={mp4}
      webm={webm}
      poster={poster} // FEHLTE!
      captions={captions}
      description={description}
      chapters={chapters}
      controlsType="full"
      cues={cues} // FEHLTE!
      parsedChapters={parsedChapters} // FEHLTE!
    />
  );
};

export default FullPlayer;