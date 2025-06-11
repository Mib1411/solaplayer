/**
 * Custom Hook für Accessibility und Keyboard Navigation
 * Zentralisiert Keyboard-Handler und Screen Reader Support
 */

import { useCallback, useEffect } from 'react';
import { usePlayer } from '../../PlayerProvider';

export interface AccessibilityActions {
  announceToScreenReader?: (message: string, priority?: 'polite' | 'assertive') => void;
  manageFocus?: (selector: string) => void;
  skipToContent?: () => void;
  focusPlayer?: () => void;
  handlePlayerKeyboard?: () => any;
  enabled?: boolean;
  playerMode?: 'base' | 'extended';
}

interface UseAccessibilityProps {
  playerMode?: 'base' | 'extended';
  enabled?: boolean;
  videoRef?: React.RefObject<HTMLVideoElement>;
  onSpacePress?: () => void;
  onLeftArrow?: () => void;
  onRightArrow?: () => void;
  onUpArrow?: () => void;
  onDownArrow?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
  onM?: () => void;
  onF?: () => void;
  onC?: () => void;
  onT?: () => void;
  preventDefaultKeys?: string[];
}

export const useAccessibility = ({
  playerMode = 'base',
  enabled = true,
  videoRef,
  onSpacePress,
  onLeftArrow,
  onRightArrow,
  onUpArrow,
  onDownArrow,
  onEnter,
  onEscape,
  onM,
  onF,
  onC,
  onT,
  preventDefaultKeys = ['Space', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
}: UseAccessibilityProps): AccessibilityActions => {
  
  // ✅ CONTEXT NUTZEN:
  const { videoRef: contextVideoRef } = usePlayer();
  
  // ✅ USE CONTEXT VIDEO REF IF NO LOCAL ONE PROVIDED:
  const actualVideoRef = videoRef || contextVideoRef;
  
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return;
    
    // Don't handle keys if user is typing in an input
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return;
    }
    
    // Prevent default for specified keys
    if (preventDefaultKeys.includes(event.code)) {
      event.preventDefault();
    }
    
    switch (event.code) {
      case 'Space':
        onSpacePress?.();
        break;
      case 'ArrowLeft':
        onLeftArrow?.();
        break;
      case 'ArrowRight':
        onRightArrow?.();
        break;
      case 'ArrowUp':
        onUpArrow?.();
        break;
      case 'ArrowDown':
        onDownArrow?.();
        break;
      case 'Enter':
        onEnter?.();
        break;
      case 'Escape':
        onEscape?.();
        break;
      case 'KeyM':
        onM?.();
        break;
      case 'KeyF':
        onF?.();
        break;
      case 'KeyC':
        onC?.();
        break;
      case 'KeyT':
        onT?.();
        break;
    }
  }, [
    enabled,
    onSpacePress,
    onLeftArrow,
    onRightArrow,
    onUpArrow,
    onDownArrow,
    onEnter,
    onEscape,
    onM,
    onF,
    onC,
    onT,
    preventDefaultKeys
  ]);

  useEffect(() => {
    if (!enabled) return;
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, enabled]);

  // Screen Reader Announcement Helper
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'screen-reader-only';
    announcement.style.cssText = `
      position: absolute !important;
      left: -10000px !important;
      width: 1px !important;
      height: 1px !important;
      overflow: hidden !important;
    `;
    
    document.body.appendChild(announcement);
    announcement.textContent = message;
    
    // Remove after announcement
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }, []);

  // Focus Management Helper
  const manageFocus = useCallback((selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
    }
  }, []);

  // Skip to Content Helper
  const skipToContent = useCallback(() => {
    const mainContent = document.querySelector('main, [role="main"], #main-content') as HTMLElement;
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Focus Player Helper
  const focusPlayer = useCallback(() => {
    if (actualVideoRef?.current) {
      actualVideoRef.current.focus();
    } else {
      const playerElement = document.querySelector('.wcag-player-container') as HTMLElement;
      if (playerElement) {
        playerElement.focus();
      }
    }
  }, [actualVideoRef]);

  // Keyboard Navigation Helpers
  const handlePlayerKeyboard = useCallback(() => {
    return {
      playPause: onSpacePress,
      seekBackward: onLeftArrow,
      seekForward: onRightArrow,
      volumeUp: onUpArrow,
      volumeDown: onDownArrow,
      toggleMute: onM,
      toggleFullscreen: onF,
      toggleCaptions: onC,
      toggleTranscript: onT,
      closeModals: onEscape
    };
  }, [onSpacePress, onLeftArrow, onRightArrow, onUpArrow, onDownArrow, onM, onF, onC, onT, onEscape]);

  // ✅ CONDITIONAL RETURN:
  if (!enabled) return {};

  return {
    announceToScreenReader,
    manageFocus,
    skipToContent,
    focusPlayer,
    handlePlayerKeyboard,
    enabled,
    playerMode
  };
};