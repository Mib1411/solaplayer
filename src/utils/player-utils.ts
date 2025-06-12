import { CONFIG } from '../components/general/config/playerConfig'
/*
 * Player Utility Functions
 * Reine Funktionen ohne Seiteneffekte für Player-Logic
 */

/**
 * Formatiert Zeit in Sekunden zu MM:SS Format
 */
export const formatTime = (seconds: number): string => {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Konvertiert Prozent zu Zeit basierend auf Dauer
 */
export const percentToTime = (percent: number, duration: number): number => {
  return Math.max(0, Math.min(duration, (percent / 100) * duration));
};

/**
 * Konvertiert Zeit zu Prozent basierend auf Dauer
 */
export const timeToPercent = (time: number, duration: number): number => {
  if (duration === 0) return 0;
  return Math.max(0, Math.min(100, (time / duration) * 100));
};

/**
 * Berechnet den aktuellen Kapitel-Index basierend auf der Zeit
 */
export const getCurrentChapterIndex = (
  currentTime: number, 
  chapters: Array<{ startTime: number; endTime: number }>
): number => {
  return chapters.findIndex(
    chapter => currentTime >= chapter.startTime && currentTime < chapter.endTime
  );
};

/**
 * Berechnet den aktuellen Cue-Index basierend auf der Zeit
 */
export const getCurrentCueIndex = (
  currentTime: number,
  cues: Array<{ startTime: number; endTime: number }>
): number => {
  return cues.findIndex(
    cue => currentTime >= cue.startTime && currentTime < cue.endTime
  );
};

// Bundestag.tv URL Parser - ORIGINAL VERSION
export const parseBundestagUrl = (url: string): string | null => {
  if (!url.includes('dbtg.tv') && !url.includes('bundestag.de')) {
    return null;
  }
  
  // Extract video ID from Bundestag URL
  const match = url.match(/cvid\/(\d+)/);
  if (match) {
    const videoId = match[1];
    // Return direct HLS stream URL (original format)
    return `https://dbtg.tv/fvideo/videostream.php?video=${videoId}`;
  }
  
  return null;
};

// YouTube URL Parser
export const parseYouTubeUrl = (url: string): string | null => {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return null;
};

// Vimeo URL Parser
export const parseVimeoUrl = (url: string): string | null => {
  const patterns = [
    /vimeo\.com\/(\d+)/,
    /player\.vimeo\.com\/video\/(\d+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return null;
};

/**
 * Prüft ob Feature für playerMode enabled ist
 */
export const isFeatureEnabled = (featureName: string, playerMode: 'base' | 'extended'): boolean => {
  const feature = CONFIG.features[featureName as keyof typeof CONFIG.features];
  return feature?.[playerMode]?.enabled || false;
};
