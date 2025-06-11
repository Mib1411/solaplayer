'use client';

import React from 'react';
import { formatTime } from '../../utils/player-utils';
import { PLAYER_LABELS, ARIA_LABELS } from '../../utils/constants';

interface ProgressBarProps {
  playerState: any;
  playerControls: any
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  playerState,
  playerControls
}) => {
  // ✅ DEBUG: Was ist in playerState?
  console.log('📊 ProgressBar Debug:', {
    playerState,
    currentTime: playerState?.currentTime,
    duration: playerState?.duration,
    bufferedTime: playerState?.bufferedTime,
    htmlPlayer: playerState?.htmlPlayer,
    playerStateKeys: playerState ? Object.keys(playerState) : 'undefined'
  });

  // ✅ Defensive checks
  if (!playerState || !playerControls) {
    console.warn('ProgressBar: playerState or playerControls is undefined');
    return null;
  }

  // ✅ RICHTIGE WERTE HOLEN:
  const currentTime = playerState?.htmlPlayer?.currentTime || playerState?.currentTime || 0;
  const duration = playerState?.htmlPlayer?.duration || playerState?.duration || 1;
  const buffered = playerState?.htmlPlayer?.bufferedTime || playerState?.bufferedTime || 0;
  
  console.log('📊 ProgressBar Values:', { currentTime, duration, buffered });
  
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufferedProgress = duration > 0 ? (buffered / duration) * 100 : 0;
  
  // ✅ COUNTDOWN: Remaining time (duration - currentTime)
  const remainingTime = Math.max(0, duration - currentTime);
  const isVideoEnded = currentTime >= duration && duration > 0;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number(e.target.value);
    if (playerControls.handleSeek) {
      playerControls.handleSeek(seekTime);
    }
  };

  return (
    <div className="progress-bar">
      {/* ✅ LEFT TIME: Current time in WHITE */}
      <span className="time-display time-display__current">
        {formatTime(currentTime)}
      </span>
      
      <div className="progress-bar__container">
        <div 
          className="progress-bar__buffered" 
          style={{ width: `${bufferedProgress}%` }}
        />
        <div 
          className="progress-bar__fill" 
          style={{ width: `${progress}%` }}
        />
        <input
          type="range"
          min={0}
          max={duration}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          className="progress-bar__input"
          aria-label={PLAYER_LABELS.SEEK}
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          aria-valuetext={`${formatTime(currentTime)} von ${formatTime(duration)}`}
        />
        <div 
          className="progress-bar__handle" 
          style={{ left: `${progress}%` }}
        />
      </div>
      
      {/* ✅ RIGHT TIME: Countdown (remaining time) */}
      <span className={`time-display time-display__countdown ${isVideoEnded ? 'ended' : ''}`}>
        {formatTime(remainingTime)}
      </span>
    </div>
  );
};