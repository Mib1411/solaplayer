'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { LinkIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface ExpandButtonProps {
  onFullPlayerClick: () => void;
  size?: number;
}

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  onFullPlayerClick,
}) => {
  return (
    <Button
      onClick={onFullPlayerClick}
      ariaLabel={PLAYER_LABELS.EXPAND_PLAYER}
      variant="state"
      icon={<LinkIcon />}
    />
  );
};