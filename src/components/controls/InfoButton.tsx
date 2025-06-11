'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { InfoIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface InfoButtonProps {
  playerState: any;
  playerControls: any
}

export const InfoButton: React.FC<InfoButtonProps> = ({
  playerState,
  playerControls,
}) => {
  if (playerState?.isFullscreen) return null;

  return (
    <Button
      onClick={() => playerControls.handleToggleInfo()}
      ariaLabel={PLAYER_LABELS.INFO}
      variant="state"
      icon={<InfoIcon />}
    />
  );
};