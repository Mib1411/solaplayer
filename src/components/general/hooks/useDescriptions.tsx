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
  
  // ✅ NUTZE CONFIG:
  const transcriptConfig = CONFIG.features.transcript[playerMode];
  const audioDescConfig = CONFIG.features.audioDescription[playerMode];
  
  const isTranscriptEnabled = transcriptConfig.enabled && !!descriptionsUrl;
  const isAudioDescEnabled = audioDescConfig.enabled && !!descriptionsUrl;

  // ✅ EARLY RETURN WENN BEIDE DISABLED:
  if (!isTranscriptEnabled && !isAudioDescEnabled) {
    return {};
  }

  // ✅ UI STATE AUS ui CONTEXT:
  const showTranscript = ui.showTranscript;
  const audioDescActive = ui.audioDescActive;
  
  // ✅ TTS STATE DIREKT HIER:
  const [isSupported, setIsSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentDescription, setCurrentDescription] = useState<any>(null);
  
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // ✅ LOAD DESCRIPTIONS VIA PlayerProvider:
  useEffect(() => {
    if ((!isTranscriptEnabled && !isAudioDescEnabled) || !descriptionsUrl) return;
    
    async function preloadDescriptions() {
      if (!descriptionsUrl) return; // Additional type guard
      
      try {
        console.log('🔄 PRE-LOADING DESCRIPTIONS VIA PROVIDER:', descriptionsUrl);
        setIsLoading(true);
        await loadDescriptions(descriptionsUrl);
        console.log('✅ DESCRIPTIONS PRE-LOADED VIA PROVIDER');
        setIsLoading(false);
      } catch (error) {
        console.error('❌ DESCRIPTIONS PRE-LOADING FAILED:', error);
        setError('Fehler beim Laden der Audiodeskription');
        setIsLoading(false);
      }
    }
    
    preloadDescriptions();
  }, [descriptionsUrl, isTranscriptEnabled, isAudioDescEnabled, loadDescriptions]);

  // ✅ CHECK TTS SUPPORT:
  useEffect(() => {
    if (!isAudioDescEnabled) return;
    
    const checkSupport = () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        synthRef.current = window.speechSynthesis;
        setIsSupported(true);
        console.log('✅ TTS supported');
      } else {
        console.log('❌ TTS not supported');
        setIsSupported(false);
      }
    };
    
    checkSupport();
  }, [isAudioDescEnabled]);

  // ✅ FIND CURRENT DESCRIPTION:
  useEffect(() => {
    if (!parsedContent.descriptions || !audioDescActive) return;
    
    const description = parsedContent.descriptions.find((desc, idx) => {
      const nextDesc = parsedContent.descriptions![idx + 1];
      return mediaPlayer.currentTime >= desc.startTime && 
             (!nextDesc || mediaPlayer.currentTime < nextDesc.startTime);
    });
    
    if (description && description !== currentDescription) {
      setCurrentDescription(description);
      
      // ✅ AUTO-SPEAK WHEN PLAYING:
      if (mediaPlayer.isPlaying && isSupported) {
        speak(description.text);
      }
    }
  }, [mediaPlayer.currentTime, parsedContent.descriptions, audioDescActive, mediaPlayer.isPlaying]);

  // ✅ PAUSE/RESUME BASED ON VIDEO STATE:
  useEffect(() => {
    if (!isSupported || !synthRef.current) return;
    
    if (mediaPlayer.isPlaying && audioDescActive) {
      if (synthRef.current.paused) {
        resume();
      }
    } else {
      if (synthRef.current.speaking && !synthRef.current.paused) {
        pause();
      }
    }
  }, [mediaPlayer.isPlaying, audioDescActive, isSupported]);

  // ✅ TTS FUNCTIONS DIREKT HIER:
  const speak = useCallback((text: string) => {
    if (!isSupported || !synthRef.current) return;
    
    stop();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    utterance.onstart = () => {
      console.log('🔊 TTS started:', text.substring(0, 50) + '...');
    };
    
    utterance.onend = () => {
      console.log('🔇 TTS ended');
      utteranceRef.current = null;
    };
    
    utterance.onerror = (event) => {
      console.error('❌ TTS error:', event);
      setError('TTS Fehler: ' + event.error);
    };
    
    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported || !synthRef.current) return;
    
    synthRef.current.cancel();
    utteranceRef.current = null;
    console.log('🛑 TTS stopped');
  }, [isSupported]);

  const pause = useCallback(() => {
    if (!isSupported || !synthRef.current) return;
    
    synthRef.current.pause();
    console.log('⏸️ TTS paused');
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported || !synthRef.current) return;
    
    synthRef.current.resume();
    console.log('▶️ TTS resumed');
  }, [isSupported]);

  // ✅ UI HANDLERS NUTZEN ui CONTEXT:
  const handleToggleTranscript = useCallback(() => {
    if (!isTranscriptEnabled) return;
    
    console.log('Toggle Transcript - Before:', showTranscript);
    ui.setShowTranscript(!showTranscript);
    console.log('Toggle Transcript - After:', !showTranscript);
  }, [showTranscript, isTranscriptEnabled, ui]);

  const handleToggleAudioDesc = useCallback(() => {
    if (!isAudioDescEnabled) return;
    
    console.log('Toggle AudioDesc - Before:', audioDescActive);
    
    if (!audioDescActive) {
      console.log('🔊 Enabling Audio Description');
      ui.setAudioDescActive(true);
    } else {
      console.log('🔇 Disabling Audio Description');
      stop();
      ui.setAudioDescActive(false);
    }
    
    console.log('Toggle AudioDesc - After:', !audioDescActive);
  }, [audioDescActive, isAudioDescEnabled, ui, stop]);

  // ✅ CLEANUP:
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

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