'use client';

import { useEffect, useCallback } from 'react';
import { KEYBOARD_SHORTCUTS, PLAYER_LABELS } from '@/utils/constants';

interface UseKeyboardNavigationProps {
  playerState: any;
  playerControls: any;
  announceChange: (message: string) => void;
  isModalOpen?: boolean;
  isDropdownOpen?: boolean;
}

export const useKeyboardNavigation = ({
  playerState,
  playerControls,
  announceChange,
  isModalOpen = false,
  isDropdownOpen = false
}: UseKeyboardNavigationProps) => {
  
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Don't handle keyboard shortcuts when modals or dropdowns are open
    if (isModalOpen || isDropdownOpen) {
      // Only handle Escape key
      if (event.code === KEYBOARD_SHORTCUTS.ESCAPE) {
        event.preventDefault();
        if (playerState.settingsOpen) {
          playerState.setSettingsOpen(false);
        }
        if (playerState.infoOpen) {
          playerState.setInfoOpen(false);
        }
      }
      return;
    }    // Prevent default for media keys when focused on player
    const mediaKeys = [
      KEYBOARD_SHORTCUTS.PLAY_PAUSE,
      KEYBOARD_SHORTCUTS.SEEK_BACKWARD,
      KEYBOARD_SHORTCUTS.SEEK_FORWARD,
      KEYBOARD_SHORTCUTS.VOLUME_UP,
      KEYBOARD_SHORTCUTS.VOLUME_DOWN
    ] as const;
    
    if (mediaKeys.includes(event.code as any)) {
      event.preventDefault();
    }

    switch (event.code) {
      case KEYBOARD_SHORTCUTS.PLAY_PAUSE:
        if (playerState.isPlaying) {
          playerControls.handlePause();
          announceChange(PLAYER_LABELS.ANNOUNCE_PAUSE);
        } else {
          playerControls.handlePlay();
          announceChange(PLAYER_LABELS.ANNOUNCE_PLAY);
        }
        break;

      case KEYBOARD_SHORTCUTS.SEEK_BACKWARD:
        const newTimeBackward = Math.max(0, (playerState.currentTime || 0) - 10);
        playerControls.handleSeek(newTimeBackward);
        announceChange(`${PLAYER_LABELS.ANNOUNCE_SEEK}: ${formatTime(newTimeBackward)}`);
        break;

      case KEYBOARD_SHORTCUTS.SEEK_FORWARD:
        const newTimeForward = (playerState.currentTime || 0) + 10;
        playerControls.handleSeek(newTimeForward);
        announceChange(`${PLAYER_LABELS.ANNOUNCE_SEEK}: ${formatTime(newTimeForward)}`);
        break;

      case KEYBOARD_SHORTCUTS.VOLUME_UP:
        const newVolumeUp = Math.min(1, (playerState.volume || 0) + 0.1);
        playerControls.handleVolumeChange(newVolumeUp);
        announceChange(`${PLAYER_LABELS.ANNOUNCE_VOLUME_CHANGE}: ${Math.round(newVolumeUp * 100)}%`);
        break;

      case KEYBOARD_SHORTCUTS.VOLUME_DOWN:
        const newVolumeDown = Math.max(0, (playerState.volume || 0) - 0.1);
        playerControls.handleVolumeChange(newVolumeDown);
        announceChange(`${PLAYER_LABELS.ANNOUNCE_VOLUME_CHANGE}: ${Math.round(newVolumeDown * 100)}%`);
        break;

      case KEYBOARD_SHORTCUTS.MUTE_TOGGLE:
        playerControls.handleMuteToggle();
        announceChange(playerState.isMuted ? PLAYER_LABELS.UNMUTE : PLAYER_LABELS.MUTE);
        break;

      case KEYBOARD_SHORTCUTS.FULLSCREEN:
        playerControls.handleFullscreen();
        announceChange(
          playerState.isFullscreen 
            ? PLAYER_LABELS.ANNOUNCE_FULLSCREEN_EXIT 
            : PLAYER_LABELS.ANNOUNCE_FULLSCREEN_ENTER
        );
        break;

      case KEYBOARD_SHORTCUTS.PICTURE_IN_PICTURE:
        if (playerState.isPiPSupported) {
          playerControls.handlePiP();
        }
        break;

      case KEYBOARD_SHORTCUTS.CAPTIONS_TOGGLE:
        const newCCState = !playerState.showCC;
        playerState.setShowCC(newCCState);
        announceChange(
          newCCState 
            ? PLAYER_LABELS.ANNOUNCE_CAPTIONS_ON 
            : PLAYER_LABELS.ANNOUNCE_CAPTIONS_OFF
        );
        break;

      case KEYBOARD_SHORTCUTS.TRANSCRIPT_TOGGLE:
        const newTranscriptState = !playerState.showTranscript;
        playerState.setShowTranscript(newTranscriptState);
        if (newTranscriptState && playerState.showChapters) {
          playerState.setShowChapters(false);
        }
        break;

      case KEYBOARD_SHORTCUTS.CHAPTERS_TOGGLE:
        const newChaptersState = !playerState.showChapters;
        playerState.setShowChapters(newChaptersState);
        if (newChaptersState && playerState.showTranscript) {
          playerState.setShowTranscript(false);
        }
        break;

      case KEYBOARD_SHORTCUTS.INFO_TOGGLE:
        playerState.setInfoOpen(!playerState.infoOpen);
        break;

      case KEYBOARD_SHORTCUTS.SETTINGS_TOGGLE:
        playerState.setSettingsOpen(!playerState.settingsOpen);
        break;

      default:
        // Handle number keys for quick seek (1-9 = 10%-90%)
        if (event.code >= 'Digit1' && event.code <= 'Digit9') {
          event.preventDefault();
          const percentage = parseInt(event.code.slice(-1)) / 10;
          const seekTime = (playerState.duration || 0) * percentage;
          playerControls.handleSeek(seekTime);
          announceChange(`${PLAYER_LABELS.ANNOUNCE_SEEK}: ${Math.round(percentage * 100)}%`);
        }
        break;
    }
  }, [
    playerState,
    playerControls,
    announceChange,
    isModalOpen,
    isDropdownOpen
  ]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { handleKeyDown };
};

// Utility function for time formatting
const formatTime = (seconds: number): string => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};