'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { PiPIcon, ExitPiPIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface PiPButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const PiPButton: React.FC<PiPButtonProps> = ({
  playerState,
  playerControls
}) => {
  // Check if PiP is supported - SSR safe
  if (typeof document === 'undefined' || !document.pictureInPictureEnabled) {
    return null;
  }

  return (
    <Button
      onClick={() => playerControls.handleTogglePiP()}
      ariaLabel={playerState.isPiP ? PLAYER_LABELS.EXIT_PIP : PLAYER_LABELS.PIP}
      variant="toggle"
      isActive={playerState.isPiP}
      icon={<PiPIcon />}
      iconActive={<ExitPiPIcon />}
    />
  );
};