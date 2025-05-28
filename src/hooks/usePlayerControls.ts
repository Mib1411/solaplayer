import React from 'react';

interface UsePlayerControlsProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  youtubeContainerRef: React.RefObject<HTMLDivElement | null>;
  vimeoContainerRef: React.RefObject<HTMLDivElement | null>;
  playerState: any;
}

export const usePlayerControls = ({
  videoRef,
  youtubeContainerRef,
  vimeoContainerRef,
  playerState
}: UsePlayerControlsProps) => {

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      playerState.setIsPlaying(true);
      playerState.setHasStartedOnce(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      playerState.setIsPlaying(false);
    }
  };

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      playerState.setCurrentTime(time);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      const newMuted = !playerState.isMuted;
      videoRef.current.muted = newMuted;
      playerState.setIsMuted(newMuted);
    }
  };

  const handleVolumeChange = (volume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      playerState.setVolume(volume);
      playerState.setIsMuted(volume === 0);
      if (volume > 0) {
        videoRef.current.muted = false;
      }
    }
  };

  const handleSpeedChange = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      playerState.setPlaybackRate(speed);
    }
  };

  const handleQualityChange = (quality: string) => {
    playerState.setSelectedQuality(quality);
    // TODO: Implement quality switching logic
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handlePiP = () => {
    if (videoRef.current && (videoRef.current as any).requestPictureInPicture) {
      (videoRef.current as any).requestPictureInPicture();
    }
  };

  const handleChapterClick = (time: number) => {
    handleSeek(time);
  };

  return {
    handlePlay,
    handlePause,
    handleSeek,
    handleMuteToggle,
    handleVolumeChange,
    handleSpeedChange,
    handleQualityChange,
    handleFullscreen,
    handlePiP,
    handleChapterClick
  };
};