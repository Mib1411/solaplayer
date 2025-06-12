'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { MuteIcon, UnmuteIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface MuteButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const MuteButton: React.FC<MuteButtonProps> = ({
  playerState,
  playerControls
}) => {
  return (
    <Button
      onClick={() => playerControls.handleMute()}
      ariaLabel={playerState.isMuted ? PLAYER_LABELS.UNMUTE : PLAYER_LABELS.MUTE}
      variant="toggle"
      isActive={playerState.isMuted}
      icon={<UnmuteIcon />}
      iconActive={<MuteIcon />}
    />
  );
};