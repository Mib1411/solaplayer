'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../general/ui/Button/Button';
import { VolumeOffIcon, VolumeLowIcon, VolumeMediumIcon, VolumeHighIcon } from '../../utils/icons';
import { PLAYER_LABELS, ARIA_LABELS } from '../../utils/constants';

interface VolumeButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const VolumeButton: React.FC<VolumeButtonProps> = ({
  playerState,
  playerControls,
  size
}) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const volumeContainerRef = useRef<HTMLDivElement>(null);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (volumeContainerRef.current && !volumeContainerRef.current.contains(event.target as Node)) {
        setShowVolumeSlider(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getVolumeIcon = () => {
    const volume = playerState?.isMuted ? 0 : (playerState?.volume || 1);

    if (volume === 0) return <VolumeOffIcon />;
    if (volume <= 0.33) return <VolumeLowIcon />;
    if (volume <= 0.66) return <VolumeMediumIcon />;
    return <VolumeHighIcon />;
  };

  const currentVolume = playerState?.isMuted ? 0 : (playerState?.volume || 1);

  const handleVolumeChange = (value: number) => {
    if (playerControls?.handleVolumeChange) {
      playerControls.handleVolumeChange(value);
    } else {
      console.warn('VolumeButton: handleVolumeChange not available');
    }
  };

  // ✅ Helper function to calculate volume from mouse position
  const calculateVolumeFromPosition = (clientY: number) => {
    if (!sliderTrackRef.current) return currentVolume;
    
    const rect = sliderTrackRef.current.getBoundingClientRect();
    const y = clientY - rect.top;
    const height = rect.height;
    const newVolume = Math.max(0, Math.min(1, 1 - (y / height)));
    return newVolume;
  };

  // ✅ Click on track handler
  const handleTrackClick = (e: React.MouseEvent) => {
    const newVolume = calculateVolumeFromPosition(e.clientY);
    handleVolumeChange(newVolume);
  };

  // ✅ Knob drag start handler
  const handleKnobMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newVolume = calculateVolumeFromPosition(moveEvent.clientY);
      handleVolumeChange(newVolume);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="dropdown" ref={volumeContainerRef}>
      <Button
        onClick={() => setShowVolumeSlider(!showVolumeSlider)}
        ariaLabel={`${PLAYER_LABELS.VOLUME} ${Math.round(currentVolume * 100)}%`}
        variant="dropdown"
        isActive={showVolumeSlider}
        icon={getVolumeIcon()}
        aria-expanded={showVolumeSlider}
        aria-haspopup="true"
      />
      
      {showVolumeSlider && (
        <div className="dropdown__list dropdown__slider-container">
          <div className="volume-slider-wrapper">
            {/* Volume Percentage Display */}
            <div className="volume-display">
              {Math.round(currentVolume * 100)}%
            </div>
            
            {/* ✅ Custom Volume Slider */}
            <div 
              className="volume-slider-track-container"
              ref={sliderTrackRef}
            >
              {/* Background Track */}
              <div className="volume-slider-track">
                <div 
                  className="volume-slider-fill" 
                  style={{ height: `${currentVolume * 100}%` }}
                />
              </div>
              
              {/* ✅ Click Area für Track Clicks */}
              <div 
                className="volume-slider-clickarea"
                onMouseDown={handleTrackClick}
              />
              
              {/* ✅ Draggable Knob */}
              <div 
                className={`volume-slider-knob ${isDragging ? 'dragging' : ''}`}
                style={{ bottom: `${currentVolume * 100}%` }}
                onMouseDown={handleKnobMouseDown}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};