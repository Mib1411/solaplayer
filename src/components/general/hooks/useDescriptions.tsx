import { useCallback, useEffect, useState, useRef } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';

export interface DescriptionsActions {
  // Transcript - nur wenn enabled
  handleToggleTranscript?: () => void;
  showTranscript?: boolean;
  hasTranscript?: boolean;
  
  // Audio Description - nur wenn enabled
  handleToggleAudioDesc?: () => void;
  audioDescActive?: boolean;
  hasAudioDesc?: boolean;
  speak?: (text: string) => void;
  stop?: () => void;
  pause?: () => void;
  resume?: () => void;
  
  // State
  currentDescription?: any;
  isSupported?: boolean;
  isLoading?: boolean;
  error?: string | null;
}

export const useDescriptions = (
  descriptionsUrl?: string,
  playerMode: 'base' | 'extended' = 'base'
): DescriptionsActions => {
  
  const { parsedContent, loadDescriptions, mediaPlayer, ui } = usePlayer();
  
  // ✅ CONFIG CHECKS:
  const transcriptConfig = CONFIG.features.transcript[playerMode];
  const audioDescConfig = CONFIG.features.audioDescription[playerMode];
  
  const isTranscriptEnabled = transcriptConfig.enabled && !!descriptionsUrl;
  const isAudioDescEnabled = audioDescConfig.enabled && !!descriptionsUrl;

  // ✅ EARLY RETURN WENN BEIDE DISABLED:
  if (!isTranscriptEnabled && !isAudioDescEnabled) {
    return {};
  }

  // ✅ TTS STATE:
  const [isSupported, setIsSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentDescription, setCurrentDescription] = useState<any>(null);
  
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // ✅ LOAD DESCRIPTIONS:
  useEffect(() => {
    if (!descriptionsUrl) return;
    
    async function preloadDescriptions() {
      try {
        setIsLoading(true);
        await loadDescriptions(descriptionsUrl!);
        setIsLoading(false);
      } catch (error) {
        setError('Fehler beim Laden der Audiodeskription');
        setIsLoading(false);
      }
    }
    
    preloadDescriptions();
  }, [descriptionsUrl, loadDescriptions]);

  // ✅ TTS SETUP:
  useEffect(() => {
    if (!isAudioDescEnabled) return;
    
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      setIsSupported(true);
    }
  }, [isAudioDescEnabled]);

  // ✅ TTS FUNCTIONS:
  const speak = useCallback((text: string) => {
    if (!isSupported || !synthRef.current) return;
    
    synthRef.current.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported || !synthRef.current) return;
    synthRef.current.cancel();
    utteranceRef.current = null;
  }, [isSupported]);

  const pause = useCallback(() => {
    if (!isSupported || !synthRef.current) return;
    synthRef.current.pause();
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported || !synthRef.current) return;
    synthRef.current.resume();
  }, [isSupported]);

  // ✅ HANDLERS:
  const handleToggleTranscript = useCallback(() => {
    if (!isTranscriptEnabled) return;
    ui.setShowTranscript(!ui.showTranscript);
  }, [ui, isTranscriptEnabled]);

  const handleToggleAudioDesc = useCallback(() => {
    if (!isAudioDescEnabled) return;
    
    if (!ui.audioDescActive) {
      ui.setAudioDescActive(true);
    } else {
      stop();
      ui.setAudioDescActive(false);
    }
  }, [ui, isAudioDescEnabled, stop]);

  // ✅ CONDITIONAL RETURN:
  const result: DescriptionsActions = {};

  if (isTranscriptEnabled) {
    result.handleToggleTranscript = handleToggleTranscript;
    result.showTranscript = ui.showTranscript;
    result.hasTranscript = (parsedContent.descriptions?.length ?? 0) > 0;
  }

  if (isAudioDescEnabled) {
    result.handleToggleAudioDesc = handleToggleAudioDesc;
    result.audioDescActive = ui.audioDescActive;
    result.hasAudioDesc = (parsedContent.descriptions?.length ?? 0) > 0;
    result.speak = speak;
    result.stop = stop;
    result.pause = pause;
    result.resume = resume;
    result.currentDescription = currentDescription;
    result.isSupported = isSupported;
    result.isLoading = isLoading;
    result.error = error;
  }

  return result;
};