import { useCallback, useEffect, useRef, useState } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';


export interface PlayerBasicsActions {
  // Play/Pause - nur wenn enabled
  handlePlay?: () => void;
  handlePause?: () => void;
  handleTogglePlay?: () => void;
  
  // Seek - nur wenn enabled
  handleSeek?: (time: number) => void;
  handleSkipForward?: (seconds?: number) => void;
  handleSkipBackward?: (seconds?: number) => void;
  handleReturnToStart?: () => void;
  
  // Volume - nur wenn enabled
  handleVolumeChange?: (volume: number) => void;
  handleToggleMute?: () => void;
  
  // Playback Rate - nur wenn enabled
  handleSpeedChange?: (rate: number) => void;
  
  // ✅ CONTROLS STATE - GEHÖRT IN BASICS:
  controlsVisible?: boolean;
  setControlsVisible?: (value: boolean) => void;
  toggleControls?: (value: boolean) => void;
  hideControls?: boolean;
  autoHideControls?: boolean;
  
  // ✅ PLAYBACK STATE:
  hasStartedOnce?: boolean;
  setHasStartedOnce?: (value: boolean) => void;
}

export const usePlayerBasics = (
  videoRef?: React.RefObject<HTMLVideoElement>,
  youtubePlayer?: any,
  vimeoPlayer?: any,
  playerType?: 'html5' | 'youtube' | 'vimeo',
  playerMode: 'base' | 'extended' = 'base'
): PlayerBasicsActions => {
  
  // ✅ NUTZE CONTEXT FÜR GLOBALE STATES:
  const { 
    mediaPlayer: { 
      currentTime, isPlaying, hasStartedOnce, controlsVisible,
      setIsPlaying, setHasStartedOnce, setControlsVisible 
    } 
  } = usePlayer();

  // ✅ LOKALE STATES (NICHT GLOBAL):
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  // ✅ ALLE CONFIG CHECKS:
  const playPauseConfig = CONFIG.features.playPause?.[playerMode] || { enabled: false };
  const seekConfig = CONFIG.features.progressBar?.[playerMode] || { enabled: false };
  const volumeConfig = CONFIG.features.volume?.[playerMode] || { enabled: false };
  const muteConfig = CONFIG.features.mute?.[playerMode] || { enabled: false };
  const speedConfig = CONFIG.features.speed?.[playerMode] || { enabled: false };
  const skipForwardConfig = CONFIG.features.skipForward?.[playerMode] || { enabled: false };
  const skipBackwardConfig = CONFIG.features.skipBackward?.[playerMode] || { enabled: false };
  const returnToStartConfig = CONFIG.features.returnToStart?.[playerMode] || { enabled: false };

  // ✅ ALLE HANDLER (CONDITIONAL LOGIC INSIDE):
  const handlePlay = useCallback(() => {
    if (!playPauseConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.play();
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.play();    
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.play();
    }
    setIsPlaying(true);
    setHasStartedOnce(true);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, setIsPlaying, setHasStartedOnce, playPauseConfig.enabled]);

  const handlePause = useCallback(() => {
    if (!playPauseConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.pause();    
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.pause();     
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, setIsPlaying, playPauseConfig.enabled]);

  const handleTogglePlay = useCallback(() => {
    if (!playPauseConfig.enabled) return;
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [isPlaying, handlePlay, handlePause, playPauseConfig.enabled]);

  const handleSeek = useCallback((time: number) => {
    if (!seekConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.seekTo(time);
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.seekTo(time);
    } else if (playerType === 'html5' && mediaPlayer.seekTo) {
      mediaPlayer.seekTo(time);
    }
  }, [playerType, youtubePlayer, vimeoPlayer, mediaPlayer, seekConfig.enabled]);

  const handleSkipForward = useCallback((seconds = 10) => {
    if (!skipForwardConfig.enabled) return;
    const newTime = Math.min(currentTime + seconds, duration);
    handleSeek(newTime);
  }, [currentTime, duration, handleSeek, skipForwardConfig.enabled]);

  const handleSkipBackward = useCallback((seconds = 10) => {
    if (!skipBackwardConfig.enabled) return;
    const newTime = Math.max(currentTime - seconds, 0);
    handleSeek(newTime);
  }, [currentTime, handleSeek, skipBackwardConfig.enabled]);

  const handleReturnToStart = useCallback(() => {
    if (!returnToStartConfig.enabled) return;
    handleSeek(0);
  }, [handleSeek, returnToStartConfig.enabled]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    if (!volumeConfig.enabled) return;
    
    if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.setVolume(newVolume * 100);
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.setVolume(newVolume);
    } else if (playerType === 'html5' && videoRef?.current) {
      videoRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  }, [playerType, youtubePlayer, vimeoPlayer, videoRef, volumeConfig.enabled]);

  const handleToggleMute = useCallback(() => {
    if (!muteConfig.enabled) return;

    const newMuted = !isMuted;
    
    if (playerType === 'youtube' && youtubePlayer) {
      if (newMuted) {
        youtubePlayer.mute();
      } else {
        youtubePlayer.unMute();
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

  // ✅ CONDITIONAL RETURN - ALLE HANDLER WENN CONFIG ENABLED:
  const result: PlayerBasicsActions = {};

  if (playPauseConfig.enabled) {
    result.handlePlay = handlePlay;
    result.handlePause = handlePause;
    result.handleTogglePlay = handleTogglePlay;
  }

  if (seekConfig.enabled) {
    result.handleSeek = handleSeek;
  }

  if (skipForwardConfig.enabled) {
    result.handleSkipForward = handleSkipForward;
  }

  if (skipBackwardConfig.enabled) {
    result.handleSkipBackward = handleSkipBackward;
  }

  if (returnToStartConfig.enabled) {
    result.handleReturnToStart = handleReturnToStart;
  }

  if (volumeConfig.enabled) {
    result.handleVolumeChange = handleVolumeChange;
    result.volume = volume;
    result.setVolume = setVolume;
  }

  if (muteConfig.enabled) {
    result.handleToggleMute = handleToggleMute;
    result.isMuted = isMuted;
    result.setIsMuted = setIsMuted;
  }

  if (speedConfig.enabled) {
    result.handleSpeedChange = handleSpeedChange;
    result.playbackRate = playbackRate;
    result.setPlaybackRate = setPlaybackRate;
  }

  // ✅ DURATION - FÜR ProgressBar:
  result.duration = duration;
  result.setDuration = setDuration;

  // ✅ CONTROLS:
  result.controlsVisible = controlsVisible;
  result.setControlsVisible = setControlsVisible;
  result.hasStartedOnce = hasStartedOnce;
  result.setHasStartedOnce = setHasStartedOnce;

  return result;
};