'use client';

import React from 'react';
import { loadPlayerSetting } from '../../utils/useStorage';

interface CaptionsOverlayProps {
  playerState?: any;
  captionsUrl?: string;
  captions?: any[]; // ✅ CAPTIONS ALS PROP!
  size?: number;
}

export const CaptionsOverlay: React.FC<CaptionsOverlayProps> = ({
  playerState,
  captionsUrl,
  captions = [], // ✅ PROP NUTZEN!
  size
}) => {
  // ❌ KEINE HOOKS! NUR PROPS!

  const showCC = playerState?.ui?.showCC ?? false;
  const currentTime = playerState?.currentTime ?? 0;
  const isPlaying = playerState?.isPlaying ?? false;

  // Settings aus localStorage laden
  const captionsFontSize = loadPlayerSetting('captionsFontSize', 'extended') || 'medium';
  const captionsFontColor = loadPlayerSetting('captionsFontColor', 'extended') || 'white';
  const captionsBackgroundColor = loadPlayerSetting('captionsBackgroundColor', 'extended') || 'black';

  // Font Size Mapping
  const getFontSize = (size: string): string => {
    switch (size) {
      case 'small': return '14px';
      case 'medium': return '18px';
      case 'large': return '24px';
      default: return '18px';
    }
  };

  // ✅ AKTUELLE CAPTION FINDEN:
  const currentCue = captions.find(cue =>
    currentTime >= cue.startTime &&
    currentTime <= cue.endTime &&
    cue.type === 'caption'
  );

  if (!showCC || !isPlaying || !currentCue) {
    return null;
  }

  return (
    <div
      className="captions-overlay"
      style={{
        fontSize: getFontSize(captionsFontSize),
        color: captionsFontColor,
        backgroundColor: captionsBackgroundColor === 'transparent' ? 'transparent' : captionsBackgroundColor
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="captions-text">
        {currentCue.text}
      </div>
    </div>
  );  
};