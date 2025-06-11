'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { FullscreenIcon, ExitFullscreenIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface FullscreenButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const FullscreenButton: React.FC<FullscreenButtonProps> = ({
  playerState,
  playerControls
}) => {
  return (
    <Button
      onClick={() => playerControls.handleToggleFullscreen()}
      ariaLabel={playerState.isFullscreen ? PLAYER_LABELS.EXIT_FULLSCREEN : PLAYER_LABELS.FULLSCREEN}
      variant="toggle"
      isActive={playerState.isFullscreen}
      icon={<FullscreenIcon />}
      iconActive={<ExitFullscreenIcon />}
    />
  );
};