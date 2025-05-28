"use client"

import React from 'react';
import { PlayerContainerProps } from '../types/player';
import { PlayerControlsFull, PlayerControlsMinimal } from './PlayerControls';
import { PlayerModals } from './PlayerModals';
import { PlayerSidebar } from './PlayerSidebar';
import styles from './PlayerContainer.module.css';
import { PlayIcon } from './icons';

export const PlayerContainer: React.FC<PlayerContainerProps> = ({
  videoRef,
  youtubeContainerRef,
  vimeoContainerRef,
  playerState,
  playerControls,
  mp4,
  webm,
  poster,
  captions,
  description,
  chapters,
  controlsType = 'minimal',
  onFullPlayerClick,
  cues = [],
  parsedChapters = []
}) => {
  const handleContainerClick = () => {
    if (!playerState.isPlaying && !playerState.hasStartedOnce) {
      playerControls.handlePlay();
      playerState.setControlsVisible(true);
    }
  };

  const handleMouseMove = () => {
    if (playerState.hasStartedOnce) {
      playerState.setControlsVisible(true);
    }
  };

  // Keyboard Shortcuts
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'i' || event.key === 'I') {
        playerState.setInfoOpen(!playerState.infoOpen);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [playerState]);

  return (
    <div 
      className={`${styles.container} ${
        !playerState.isPlaying && !playerState.hasStartedOnce ? styles.containerClickable : styles.containerDefault
      } ${
        (playerState.showTranscript || playerState.showChapters) ? styles.withSidebar : ''
      }`}
      onClick={handleContainerClick}
      onMouseMove={handleMouseMove}
    >
      {/* Video Content Area */}
      <div className={`${styles.videoArea} ${
        (playerState.showTranscript || playerState.showChapters) ? styles.videoWithSidebar : ''
      }`}>
        
        {/* Loading Overlay */}
        {playerState.isLoading && (
          <div className={styles.loadingOverlay}>
            <div>Lädt...</div>
          </div>
        )}

        {/* Video Element - MIT EVENTS */}

        {videoRef && (
        playerState.playerType === 'video' || playerState.playerType === 'btag') && playerState.videoSrc && (
          <video
            ref={videoRef}
            src={playerState.videoSrc}
            poster={poster}
            className={styles.videoElement}
            controls={false}
            playsInline
            autoPlay={false}
            muted={playerState.isMuted}
            onPlay={() => {
              playerState.setIsPlaying(true);
              playerState.setHasStartedOnce(true);
            }}
            onPause={() => playerState.setIsPlaying(false)}
            onTimeUpdate={() => {
              if (videoRef.current) {
                playerState.setCurrentTime(videoRef.current.currentTime);
              }
            }}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                playerState.setDuration(videoRef.current.duration);
              }
            }}
            onVolumeChange={() => {
              if (videoRef.current) {
                playerState.setVolume(videoRef.current.volume);
                playerState.setIsMuted(videoRef.current.muted);
              }
            }}
          >
            {controlsType === 'full' && captions && (
              <track kind="subtitles" src={captions} srcLang="de" label="Deutsche Untertitel" default />
            )}
            {controlsType === 'full' && description && (
              <track kind="descriptions" src={description} srcLang="de" label="Audiodeskription" />
            )}
            {controlsType === 'full' && chapters && (
              <track kind="chapters" src={chapters} srcLang="de" label="Kapitel" />
            )}
          </video>
        )}
        {/* MP4 Source */}

        {/* YouTube Container */}
        {playerState.playerType === 'youtube' && (
          <div ref={youtubeContainerRef} className={styles.youtubeContainer} />
        )}

        {/* Vimeo Container */}
        {playerState.playerType === 'vimeo' && (
          <div ref={vimeoContainerRef} className={styles.vimeoContainer} />
        )}

        {/* Poster Overlay - NUR für Play Button */}
        {!playerState.hasStartedOnce && !playerState.isLoading && (
          <div className={styles.posterOverlay}>
            <div className={styles.playButton}>
              <PlayIcon width={48}  height={48}/>
            </div>
          </div>
        )}

        {/* Captions - ÜBER den Controls */}
        {controlsType === 'full' && playerState.showCC && playerState.isPlaying && (
          <div className={styles.captionsOverlay}>
            <div className={styles.captionsText}>
              {/* Hier kommen die aktuellen Captions */}
            </div>
          </div>
        )}

        {/* Controls - Conditional Visibility */}
        {((controlsType === 'minimal') || 
          (controlsType === 'full' && playerState.hasStartedOnce)) && 
         (playerState.controlsVisible || (!playerState.isPlaying && playerState.hasStartedOnce)) && (
          <div className={styles.controlBar} aria-label="Player-Steuerung">
            
            {controlsType === 'full' && (
              <PlayerControlsFull
                playerState={playerState}
                playerControls={playerControls}
                hasCC={!!captions}
                hasTranscript={!!description}
                hasAudioDesc={!!description}
                hasChapters={!!chapters}
              />
            )}

            {controlsType === 'minimal' && (
              <PlayerControlsMinimal
                playerState={playerState}
                playerControls={playerControls}
                onFullPlayerClick={onFullPlayerClick}
              />
            )}
          </div>
        )}
      </div>

      {/* Sidebar - NEBEN dem Video */}
      {controlsType === 'full' && (playerState.showTranscript || playerState.showChapters) && (
        <div className={styles.sidebarArea}>
          <PlayerSidebar
            playerState={playerState}
            cues={cues}
            parsedChapters={parsedChapters}
            onChapterClick={playerControls.handleChapterClick}
            currentTime={playerState.currentTime || 0} // HINZUFÜGEN
          />
        </div>
      )}

      {/* EXISTIERENDE Komponenten */}
      {controlsType === 'full' && (
        <>
          <PlayerModals
            playerState={playerState}
            hasCC={!!captions}
            hasTranscript={!!description}
          />
        </>
      )}
    </div>
  );
};