'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { CaptionsIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface CaptionsButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
  hasCC: boolean;
}

export const CaptionsButton: React.FC<CaptionsButtonProps> = ({
  playerState,
  playerControls,
  hasCC
}) => {
  if (!hasCC) return null;
  
  // ✅ Korrekte State-Zugriffe
  const showCC = playerState?.ui?.showCC || false;
  
  console.log('CaptionsButton Debug:', {
    hasCC,
    showCC,
    playerStateStructure: Object.keys(playerState || {}),
    uiStructure: Object.keys(playerState?.ui || {}),
    handleToggleCC: !!playerControls?.handleToggleCC
  });
  
  return (
    <Button
      onClick={() => {
        console.log('CaptionsButton clicked!', { showCC });
        if (playerControls?.handleToggleCC) {
          playerControls.handleToggleCC();
        }
      }}
      ariaLabel={`${PLAYER_LABELS.TOGGLE_CAPTIONS} ${showCC ? 'ausschalten' : 'einschalten'}`}
      variant="state"
      isActive={showCC}
      icon={<CaptionsIcon />}
    />
  );
};