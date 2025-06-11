'use client';

import { useCallback } from 'react';
import { CSS_CLASSES, ARIA_LABELS } from '@/utils/constants';

export const useScreenReaderAnnouncements = () => {
  
  const announceChange = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Create announcement element
    const announcement = document.createElement('div');
    announcement.setAttribute(ARIA_LABELS.LIVE, priority);
    announcement.setAttribute(ARIA_LABELS.ATOMIC, 'true');
    announcement.className = CSS_CLASSES.SCREEN_READER_ONLY;
    announcement.textContent = message;
    
    // Add to DOM
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }, []);

  const announceProgress = useCallback((currentTime: number, duration: number) => {
    const percentage = Math.round((currentTime / duration) * 100);
    const formattedTime = formatTime(currentTime);
    const formattedDuration = formatTime(duration);
    
    announceChange(`${percentage}% abgespielt. ${formattedTime} von ${formattedDuration}`, 'polite');
  }, [announceChange]);

  const announceCaption = useCallback((text: string) => {
    // Only announce if captions are enabled and text has changed
    announceChange(`Untertitel: ${text}`, 'polite');
  }, [announceChange]);

  const announceChapter = useCallback((chapterTitle: string, chapterNumber: number) => {
    announceChange(`Kapitel ${chapterNumber}: ${chapterTitle}`, 'polite');
  }, [announceChange]);

  const announceError = useCallback((errorMessage: string) => {
    announceChange(`Fehler: ${errorMessage}`, 'assertive');
  }, [announceChange]);

  return {
    announceChange,
    announceProgress,
    announceCaption,
    announceChapter,
    announceError
  };
};

// Utility function for time formatting (same as in keyboard hook)
const formatTime = (seconds: number): string => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};