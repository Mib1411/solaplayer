'use client';

import React from 'react';
import { PLAYER_LABELS, ARIA_LABELS } from '@/utils/constants';
import { AudioDescIcon } from '@/utils/icons';

interface AudioDescButtonProps {
  playerState?: any;
  playerControls?: any;
  hasAudioDesc?: boolean;
  descriptionsUrl?: string;
  descriptions?: any[]; // ✅ DESCRIPTIONS ALS PROP!
  size?: number;
}

export const AudioDescButton: React.FC<AudioDescButtonProps> = ({
  playerState,
  playerControls,
  hasAudioDesc,
  descriptionsUrl,
  descriptions = [], // ✅ PROP NUTZEN!

}) => {
  // ❌ KEINE HOOKS! NUR PROPS!

  const isActive = playerState?.ui?.audioDescActive ?? false;

  console.log('🔍 AudioDescButton Props:', {
    hasAudioDesc,
    descriptionsCount: descriptions.length,
    isActive,
    descriptionsUrl
  });

  // ✅ PRÜFE hasAudioDesc PROP:
  if (!hasAudioDesc || descriptions.length === 0) {
    return null;
  }

  return (
    <button
      type="button"
      className={`btn-icon audio-desc-btn ${isActive ? 'active' : ''}`}
      onClick={playerControls?.handleToggleAudioDesc}
      aria-label={isActive ? ARIA_LABELS.AUDIO_DESC_OFF : ARIA_LABELS.AUDIO_DESC_ON}
      title={isActive ? PLAYER_LABELS.AUDIO_DESC_OFF : PLAYER_LABELS.AUDIO_DESC_ON}
      aria-pressed={isActive}
    >
      <AudioDescIcon  />
    </button>
  );
};