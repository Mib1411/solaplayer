'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { TranscriptIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';


interface TranscriptButtonProps {
  playerState: any;
  playerControls: any;
  size?: number;
  hasTranscript?: boolean;
}

// ❌ COMPONENT NUTZT size ABER KRIEGT ES NICHT:
export const TranscriptButton: React.FC<TranscriptButtonProps> = ({
  playerState,
  playerControls,
  size,
  hasTranscript
}) => {

  return (
    <Button
      onClick={() => {
        playerControls.handleToggleTranscript();
      }}
      ariaLabel={PLAYER_LABELS.TOGGLE_TRANSCRIPT}
      variant="state"
      isActive={playerState?.ui?.showTranscript || false} // ✅ FIX: ui state verwenden
      icon={<TranscriptIcon />}
    />
  );
};