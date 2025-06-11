import { useCallback, useState, useEffect } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';

export interface PlayerBasicsActions {
  handlePlay?: () => void;
  handlePause?: () => void;
  handlePlayPause?: () => void;
  handleSeek?: (time: number) => void;
  handleSeekForward?: (seconds?: number) => void;
  handleSeekBackward?: (seconds?: number) => void;
  handleReturnToStart?: () => void;
  handleVolumeChange?: (volume: number) => void;
  handleVolumeUp?: () => void;
  handleVolumeDown?: () => void;
  handleMute?: () => void;
  handleSpeedChange?: (rate: number) => void;
  
  // States
  volume?: number;
  isMuted?: boolean;
  playbackRate?: number;
  controlsVisible?: boolean;
}

export const usePlayerBasics = (
  playerMode: 'base' | 'extended' = 'base'
): PlayerBasicsActions => {
  
  // ✅ CONTEXT NUTZEN:
  const { 
    htmlPlayer, 
    ui, 
    videoRef, 
    playerType, 
    youtubePlayer, 
    vimeoPlayer 
  } = usePlayer();
  
  // ✅ LOKALE STATES:
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  // ✅ CONFIG CHECKS:
  const playPauseConfig = CONFIG.features.playPause[playerMode] || { enabled: false };
  const seekConfig = CONFIG.features.progressBar[playerMode] || { enabled: false };
  const volumeConfig = CONFIG.features.volume[playerMode] || { enabled: false };
  const muteConfig = CONFIG.features.mute[playerMode] || { enabled: false };
  const speedConfig = CONFIG.features.speed[playerMode] || { enabled: false };
  const skipForwardConfig = CONFIG.features.skipForward[playerMode] || { enabled: false };
  const skipBackwardConfig = CONFIG.features.skipBackward[playerMode] || { enabled: false };
  const returnToStartConfig = CONFIG.features.returnToStart[playerMode] || { enabled: false };

  // ✅ HANDLERS:
  const handlePlay = useCallback(() => {
    if (!playPauseConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.play();
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.play();    
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.play();
    }
    
    htmlPlayer.setIsPlaying(true);
    ui.setHasStartedOnce(true);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, htmlPlayer, ui, playPauseConfig.enabled]);

  const handlePause = useCallback(() => {
    if (!playPauseConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.pause();
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.pause();     
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.pause();
    }
    
    htmlPlayer.setIsPlaying(false);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, htmlPlayer, playPauseConfig.enabled]);

  const handlePlayPause = useCallback(() => {
    if (!playPauseConfig.enabled) return;
    
    if (htmlPlayer.isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [htmlPlayer.isPlaying, handlePlay, handlePause, playPauseConfig.enabled]);

  const handleSeek = useCallback((time: number) => {
    if (!seekConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.seekTo(time);
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.seekTo(time);
    } else if (playerType === 'html5') {
      htmlPlayer.seekTo(time);
    }
  }, [playerType, youtubePlayer, vimeoPlayer, htmlPlayer, seekConfig.enabled]);

  const handleSeekForward = useCallback((seconds = 10) => {
    if (!skipForwardConfig.enabled) return;
    const newTime = htmlPlayer.currentTime + seconds;
    handleSeek(newTime);
  }, [htmlPlayer.currentTime, handleSeek, skipForwardConfig.enabled]);

  const handleSeekBackward = useCallback((seconds = 10) => {
    if (!skipBackwardConfig.enabled) return;
    const newTime = Math.max(htmlPlayer.currentTime - seconds, 0);
    handleSeek(newTime);
  }, [htmlPlayer.currentTime, handleSeek, skipBackwardConfig.enabled]);

  const handleReturnToStart = useCallback(() => {
    if (!returnToStartConfig.enabled) return;
    handleSeek(0);
  }, [handleSeek, returnToStartConfig.enabled]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    if (!volumeConfig.enabled) return;
    
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.setVolume(clampedVolume * 100);
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.setVolume(clampedVolume);
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.volume = clampedVolume;
    }
    setVolume(clampedVolume);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, volumeConfig.enabled]);

  const handleVolumeUp = useCallback(() => {
    if (!volumeConfig.enabled) return;
    const newVolume = Math.min(volume + 0.1, 1);
    handleVolumeChange(newVolume);
  }, [volume, handleVolumeChange, volumeConfig.enabled]);

  const handleVolumeDown = useCallback(() => {
    if (!volumeConfig.enabled) return;
    const newVolume = Math.max(volume - 0.1, 0);
    handleVolumeChange(newVolume);
  }, [volume, handleVolumeChange, volumeConfig.enabled]);

  const handleMute = useCallback(() => {
    if (!muteConfig.enabled) return;

    const newMuted = !isMuted;
    
    if (playerType === 'youtube' && youtubePlayer) {
      if (newMuted) {
        youtubePlayer.mute();
      } else {
        youtubePlayer.unmute();
      }
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.setMuted(newMuted);
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.muted = newMuted;
    }
    setIsMuted(newMuted);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, isMuted, muteConfig.enabled]);

  const handleSpeedChange = useCallback((rate: number) => {
    if (!speedConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.setPlaybackRate(rate);
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.setPlaybackRate(rate);
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.playbackRate = rate;
    }
    setPlaybackRate(rate);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, speedConfig.enabled]);

  // ✅ CONDITIONAL RETURN:
  const result: PlayerBasicsActions = {};

  if (playPauseConfig.enabled) {
    result.handlePlay = handlePlay;
    result.handlePause = handlePause;
    result.handlePlayPause = handlePlayPause;
  }

  if (seekConfig.enabled) {
    result.handleSeek = handleSeek;
  }

  if (skipForwardConfig.enabled) {
    result.handleSeekForward = handleSeekForward;
  }

  if (skipBackwardConfig.enabled) {
    result.handleSeekBackward = handleSeekBackward;
  }

  if (returnToStartConfig.enabled) {
    result.handleReturnToStart = handleReturnToStart;
  }

  if (volumeConfig.enabled) {
    result.handleVolumeChange = handleVolumeChange;
    result.handleVolumeUp = handleVolumeUp;
    result.handleVolumeDown = handleVolumeDown;
    result.volume = volume;
  }

  if (muteConfig.enabled) {
    result.handleMute = handleMute;
    result.isMuted = isMuted;
  }

  if (speedConfig.enabled) {
    result.handleSpeedChange = handleSpeedChange;
    result.playbackRate = playbackRate;
  }

  result.controlsVisible = ui.controlsVisible;

  return result;
};