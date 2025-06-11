'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { SettingsIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';


interface SettingsButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const SettingsButton: React.FC<SettingsButtonProps> = ({
  playerState,
  playerControls
}) => {
  if (playerState?.isFullscreen) return null;

  const handleClick = () => {
    console.log('SettingsButton clicked!');
    console.log('playerControls:', playerControls);
    console.log('handleToggleSettings exists:', typeof playerControls?.handleToggleSettings);
    
    if (playerControls?.handleToggleSettings) {
      playerControls.handleToggleSettings();
    } else {
      console.error('handleToggleSettings not found!');
    }
  };

  return (
    <Button
      onClick={handleClick}
      ariaLabel={PLAYER_LABELS.SETTINGS}
      variant="state"
      icon={<SettingsIcon />}
    />
  );
};