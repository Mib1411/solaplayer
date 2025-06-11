import { useCallback, useState, useEffect } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';

interface TranscriptCue {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
  speaker?: string;
  type?: 'speech' | 'sound' | 'music' | 'description';
}

export interface DescriptionsActions {
  handleToggleTranscript?: () => void;
  handleToggleAudioDesc?: () => void;
  showTranscript?: boolean;
  hasTranscript?: boolean;
  hasAudioDesc?: boolean;
  audioDescActive?: boolean;
  transcriptText?: string;
  currentTranscriptCue?: TranscriptCue | null;
  currentTranscriptIdx?: number;
  allTranscriptCues?: TranscriptCue[];
  goToNextTranscriptCue?: () => void;
  goToPrevTranscriptCue?: () => void;
  goToTranscriptCue?: (index: number) => void;
  updateCurrentTranscriptCue?: (currentTime: number) => void;
  searchInTranscript?: (query: string) => TranscriptCue[];
  fontSize?: number;
  setFontSize?: (size: number) => void;
  autoScroll?: boolean;
  setAutoScroll?: (scroll: boolean) => void;
  showSpeakers?: boolean;
  setShowSpeakers?: (show: boolean) => void;
  showTimestamps?: boolean;
  setShowTimestamps?: (show: boolean) => void;
  audioDescVolume?: number;
  setAudioDescVolume?: (volume: number) => void;
}

export const useDescriptions = (
  playerMode: 'base' | 'extended' = 'base'
): DescriptionsActions => {
  
  // ✅ CONTEXT NUTZEN:
  const { parsedContent, ui, htmlPlayer } = usePlayer();
  
  // ✅ LOKALE STATES:
  const [transcriptText, setTranscriptText] = useState('');
  const [currentTranscriptCue, setCurrentTranscriptCue] = useState<TranscriptCue | null>(null);
  const [currentTranscriptIdx, setCurrentTranscriptIdx] = useState<number>(-1);
  const [fontSize, setFontSize] = useState(14);
  const [autoScroll, setAutoScroll] = useState(true);
  const [showSpeakers, setShowSpeakers] = useState(true);
  const [showTimestamps, setShowTimestamps] = useState(false);
  const [audioDescVolume, setAudioDescVolume] = useState(0.8);

  // ✅ CONFIG CHECKS:
  const transcriptConfig = CONFIG.features.transcript?.[playerMode] || { enabled: false };
  const audioDescConfig = CONFIG.features.audioDescription?.[playerMode] || { enabled: false };

  // ✅ GET DATA FROM CONTEXT:
  const allTranscriptCues = parsedContent.transcript || [];
  const hasTranscript = allTranscriptCues.length > 0;
  const hasAudioDesc = (parsedContent.descriptions || []).length > 0;

  // ✅ TOGGLE FUNCTIONS (UPDATES CONTEXT):
  const handleToggleTranscript = useCallback(() => {
    if (!transcriptConfig.enabled) return;
    ui.setShowTranscript(!ui.showTranscript);
  }, [transcriptConfig.enabled, ui]);

  const handleToggleAudioDesc = useCallback(() => {
    if (!audioDescConfig.enabled) return;
    ui.setAudioDescActive(!ui.audioDescActive);
  }, [audioDescConfig.enabled, ui]);

  // ✅ CUE NAVIGATION:
  const goToNextTranscriptCue = useCallback(() => {
    if (!transcriptConfig.enabled || currentTranscriptIdx >= allTranscriptCues.length - 1) return;
    
    const nextIdx = currentTranscriptIdx + 1;
    setCurrentTranscriptIdx(nextIdx);
    setCurrentTranscriptCue(allTranscriptCues[nextIdx]);
    return allTranscriptCues[nextIdx].startTime;
  }, [transcriptConfig.enabled, currentTranscriptIdx, allTranscriptCues]);

  const goToPrevTranscriptCue = useCallback(() => {
    if (!transcriptConfig.enabled || currentTranscriptIdx <= 0) return;
    
    const prevIdx = currentTranscriptIdx - 1;
    setCurrentTranscriptIdx(prevIdx);
    setCurrentTranscriptCue(allTranscriptCues[prevIdx]);
    return allTranscriptCues[prevIdx].startTime;
  }, [transcriptConfig.enabled, currentTranscriptIdx, allTranscriptCues]);

  const goToTranscriptCue = useCallback((index: number) => {
    if (!transcriptConfig.enabled || index < 0 || index >= allTranscriptCues.length) return;
    
    setCurrentTranscriptIdx(index);
    setCurrentTranscriptCue(allTranscriptCues[index]);
    return allTranscriptCues[index].startTime;
  }, [transcriptConfig.enabled, allTranscriptCues]);

  // ✅ TIME UPDATE:
  const updateCurrentTranscriptCue = useCallback((currentTime: number) => {
    if (!transcriptConfig.enabled || allTranscriptCues.length === 0) return;
    
    const cueIndex = allTranscriptCues.findIndex(cue => 
      currentTime >= cue.startTime && currentTime <= cue.endTime
    );
    
    if (cueIndex !== -1 && cueIndex !== currentTranscriptIdx) {
      setCurrentTranscriptIdx(cueIndex);
      setCurrentTranscriptCue(allTranscriptCues[cueIndex]);
      setTranscriptText(allTranscriptCues[cueIndex].text);
    } else if (cueIndex === -1 && currentTranscriptCue !== null) {
      setCurrentTranscriptCue(null);
      setCurrentTranscriptIdx(-1);
      setTranscriptText('');
    }
  }, [transcriptConfig.enabled, allTranscriptCues, currentTranscriptIdx, currentTranscriptCue]);

  // ✅ AUTO-UPDATE ON TIME CHANGE:
  useEffect(() => {
    updateCurrentTranscriptCue(htmlPlayer.currentTime);
  }, [htmlPlayer.currentTime, updateCurrentTranscriptCue]);

  // ✅ SEARCH IN TRANSCRIPT:
  const searchInTranscript = useCallback((query: string): TranscriptCue[] => {
    if (!transcriptConfig.enabled || !query) return [];
    
    return allTranscriptCues.filter(cue => 
      cue.text.toLowerCase().includes(query.toLowerCase()) ||
      (cue.speaker && cue.speaker.toLowerCase().includes(query.toLowerCase()))
    );
  }, [transcriptConfig.enabled, allTranscriptCues]);

  // ✅ CONDITIONAL RETURN:
  const result: DescriptionsActions = {};

  if (transcriptConfig.enabled) {
    result.handleToggleTranscript = handleToggleTranscript;
    result.showTranscript = ui.showTranscript; // ✅ FROM CONTEXT
    result.hasTranscript = hasTranscript;
    result.transcriptText = transcriptText;
    result.currentTranscriptCue = currentTranscriptCue;
    result.currentTranscriptIdx = currentTranscriptIdx;
    result.allTranscriptCues = allTranscriptCues;
    result.goToNextTranscriptCue = goToNextTranscriptCue;
    result.goToPrevTranscriptCue = goToPrevTranscriptCue;
    result.goToTranscriptCue = goToTranscriptCue;
    result.updateCurrentTranscriptCue = updateCurrentTranscriptCue;
    result.searchInTranscript = searchInTranscript;
    result.fontSize = fontSize;
    result.setFontSize = setFontSize;
    result.autoScroll = autoScroll;
    result.setAutoScroll = setAutoScroll;
    result.showSpeakers = showSpeakers;
    result.setShowSpeakers = setShowSpeakers;
    result.showTimestamps = showTimestamps;
    result.setShowTimestamps = setShowTimestamps;
  }

  if (audioDescConfig.enabled) {
    result.handleToggleAudioDesc = handleToggleAudioDesc;
    result.hasAudioDesc = hasAudioDesc;
    result.audioDescActive = ui.audioDescActive; // ✅ FROM CONTEXT
    result.audioDescVolume = audioDescVolume;
    result.setAudioDescVolume = setAudioDescVolume;
  }

  return result;
};