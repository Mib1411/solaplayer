'use client';

import React from 'react';
import { Dropdown } from '../general/ui/Dropdown/Dropdown';
import { SpeedIcon } from '../../utils/icons';
import { PLAYER_CONFIG, PLAYER_LABELS } from '../../utils/constants';

interface SpeedButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const SpeedButton: React.FC<SpeedButtonProps> = ({
  playerState,
  playerControls
}) => {
  const currentSpeed = playerState?.playbackRate || 1;
  
  const speedOptions = PLAYER_CONFIG.PLAYBACK_SPEEDS.map(speed => ({
    value: speed,
    label: `${speed}x`
  }));

  const handleSpeedChange = (speed: string | number) => {
    if (playerControls?.handlePlaybackRateChange) {
      playerControls.handlePlaybackRateChange(Number(speed));
    }
  };

  return (
    <Dropdown
      options={speedOptions}
      value={currentSpeed}
      onChange={handleSpeedChange}
      ariaLabel={PLAYER_LABELS.SPEED}
      icon={<SpeedIcon />}
    />
  );
};