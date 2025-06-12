'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { FullscreenIcon, ExitFullscreenIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface FullscreenButtonProps {
  onToggle: () => void;
  isActive: boolean; // ✅ AUS UI CONTEXT
  size?: number;
}

export const FullscreenButton: React.FC<FullscreenButtonProps> = ({
  onToggle,
  isActive,
  size = 18
}) => {
  return (
    <Button
      onClick={onToggle}
      ariaLabel={isActive ? PLAYER_LABELS.EXIT_FULLSCREEN : PLAYER_LABELS.FULLSCREEN}
      variant="toggle"
      isActive={isActive}
      size={size}
    >
      {isActive ? <ExitFullscreenIcon size={size} /> : <FullscreenIcon size={size} />}
    </Button>
  );
};