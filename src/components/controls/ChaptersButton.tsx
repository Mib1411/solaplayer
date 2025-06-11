'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { ChaptersIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface ChaptersButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
}

export const ChaptersButton: React.FC<ChaptersButtonProps> = ({
  playerState,
  playerControls,

}) => {
  if ( playerState?.isFullscreen) return null;

  console.log('ChaptersButton Debug:', {

    handleToggleChapters: !!playerControls?.handleToggleChapters
  });

  return (
    <Button
      onClick={() => {
        console.log('ChaptersButton clicked!');
        playerControls.handleToggleChapters();
      }}
      ariaLabel={PLAYER_LABELS.TOGGLE_CHAPTERS}
      variant="state"
      isActive={playerState?.ui?.showChapters || false} // ✅ FIX: ui state verwenden
      icon={<ChaptersIcon />}
    />
  );
};