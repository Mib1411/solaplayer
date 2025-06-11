'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { ReturnIcon, SkipBackIcon, SkipForwardIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface SkipButtonProps {
  playerState: any;
  playerControls: any;
  type: 'return' | 'back' | 'forward';
  size?: number;
}

export const SkipButton: React.FC<SkipButtonProps> = ({
  playerState,
  playerControls,
  type
}) => {
  const handleClick = () => {
    switch (type) {
      case 'return':
        // ✅ NUTZE handleSeek:
        playerControls.handleSeek(0);
        break;
      case 'back':
        // ✅ NUTZE handleSeek:
        playerControls.handleSeek(Math.max(0, (playerState.currentTime || 0) - 10));
        break;
      case 'forward':
        // ✅ NUTZE handleSeek:
        playerControls.handleSeek((playerState.currentTime || 0) + 10);
        break;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'return': return <ReturnIcon />;
      case 'back': return <SkipBackIcon />;
      case 'forward': return <SkipForwardIcon />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'return': return PLAYER_LABELS.RETURN_TO_START;
      case 'back': return PLAYER_LABELS.SKIP_BACK;
      case 'forward': return PLAYER_LABELS.SKIP_FORWARD;
    }
  };

  return (
    <Button
      onClick={handleClick}
      ariaLabel={getLabel()}
      variant="state"
      icon={getIcon()}
    />
  );
};