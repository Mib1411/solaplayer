'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { PlayIcon, PauseIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface PlayPauseButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  playerState,
  playerControls
}) => {
  return (
    <Button
      onClick={() => playerControls.handlePlayPause()}
      ariaLabel={playerState.isPlaying ? PLAYER_LABELS.PAUSE : PLAYER_LABELS.PLAY}
      variant="toggle"
      isActive={playerState.isPlaying}
      icon={<PlayIcon />}
      iconActive={<PauseIcon />}
    />
  );
};