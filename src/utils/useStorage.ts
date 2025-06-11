import { CONFIG } from '../components/general/config/playerConfig';

const STORAGE_KEY = 'wcag-player-settings';

/**
 * Prüft ob Feature für playerMode enabled ist
 */
export const isFeatureEnabled = (featureName: string, playerMode: 'base' | 'extended'): boolean => {
  const feature = CONFIG.features[featureName as keyof typeof CONFIG.features];
  return feature?.[playerMode]?.enabled || false;
};

/**
 * Lädt Settings aus localStorage mit playerConfig Fallback
 */
export const loadPlayerSetting = (key: string, playerMode: 'base' | 'extended'): any => {
  // Erst prüfen ob Feature enabled ist
  if (key.startsWith('captions') && !isFeatureEnabled('captions', playerMode)) {
    return null;
  }
  if (key.startsWith('audioDescription') && !isFeatureEnabled('audioDescription', playerMode)) {
    return null;
  }
  if (key.startsWith('transcript') && !isFeatureEnabled('transcript', playerMode)) {
    return null;
  }

  if (typeof window === 'undefined') {
    return getPlayerConfigDefault(key);
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getPlayerConfigDefault(key);
    }

    const parsed = JSON.parse(stored);
    return parsed[key] !== undefined ? parsed[key] : getPlayerConfigDefault(key);

  } catch (error) {
    return getPlayerConfigDefault(key);
  }
};

/**
 * Speichert Setting in localStorage
 */
export const savePlayerSetting = (key: string, value: any): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const current = stored ? JSON.parse(stored) : {};
    
    current[key] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));

  } catch (error) {
    console.warn('Failed to save player setting:', error);
  }
};

/**
 * Holt Default aus playerConfig
 */
export const getPlayerConfigDefault = (key: string): any => {
  switch (key) {
    // Transcript
    case 'transcriptTimeBasedView':
      return CONFIG.featureConfigs.transcript.timeBasedView;
    case 'transcriptShowFullTranscript':
      return CONFIG.featureConfigs.transcript.showFullTranscript;
    case 'transcriptAutoScroll':
      return CONFIG.featureConfigs.transcript.autoScroll;
    
    // Captions
    case 'captionsFontSize':
      return CONFIG.featureConfigs.captions.fontSize;
    case 'captionsFontColor':
      return CONFIG.featureConfigs.captions.fontColor;
    case 'captionsBackgroundColor':
      return CONFIG.featureConfigs.captions.backgroundColor;
    
    // Audio Description
    case 'audioDescriptionMode':
      return CONFIG.featureConfigs.audioDescription.mode;
    case 'audioDescriptionAutoStart':
      return CONFIG.featureConfigs.audioDescription.tts.autoStart;
    case 'audioDescriptionAutoStop':
      return CONFIG.featureConfigs.audioDescription.tts.autoStop;
    case 'audioDescriptionPitch':
      return CONFIG.featureConfigs.audioDescription.tts.pitch;
    case 'audioDescriptionSelectedVoice':
      return CONFIG.featureConfigs.audioDescription.tts.selectedVoice;
    
    default:
      return null;
  }
};

/**
 * Löscht alle Settings
 */
export const clearPlayerSettings = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
};