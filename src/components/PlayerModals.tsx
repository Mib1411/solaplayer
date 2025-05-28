import React from 'react';
import { SettingsModal } from './SettingsModal';
import { InfoModal } from './InfoModal';

interface PlayerModalsProps {
  playerState: any;
  hasCC: boolean;
  hasTranscript: boolean;
}

export const PlayerModals: React.FC<PlayerModalsProps> = ({
  playerState,
  hasCC,
  hasTranscript
}) => {
  return (
    <>
      {/* Settings Modal - OHNE CC/Transcript checkboxes */}
      <SettingsModal
        open={playerState.settingsOpen}
        onClose={() => playerState.setSettingsOpen(false)}
        playerState={playerState}
      />

      {/* Info Modal */}
      <InfoModal
        open={playerState.infoOpen}
        onClose={() => playerState.setInfoOpen(false)}
      />
    </>
  );
};