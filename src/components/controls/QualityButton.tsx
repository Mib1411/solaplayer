'use client';

import React from 'react';
import { Dropdown } from '../general/ui/Dropdown/Dropdown';
import { QualityIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface QualityButtonProps {
  playerState: any;
  playerControls: any;
  availableQualities?: string[];
  size?: number;
}

export const QualityButton: React.FC<QualityButtonProps> = ({
  playerState,
  playerControls,
  availableQualities = ['240p', '480p', '720p', '1080p'],
}) => {
  const currentQuality = playerState?.currentQuality || 'auto';
  
  // Quality Options mit Auto option
  const qualityOptions = [
    { value: 'auto', label: 'Auto' },
    ...availableQualities.map(quality => ({
      value: quality,
      label: quality
    }))
  ];

  const handleQualityChange = (quality: string | number) => {
    if (playerControls?.handleQualityChange) {
      playerControls.handleQualityChange(String(quality));
    }
  };

  return (
    <Dropdown
      options={qualityOptions}
      value={currentQuality}
      onChange={handleQualityChange}
      ariaLabel={`${PLAYER_LABELS.QUALITY}: ${currentQuality}`}
      icon={<QualityIcon />}
    />
  );
};