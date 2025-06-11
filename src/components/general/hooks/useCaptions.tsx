import { useCallback, useState, useEffect } from 'react';
import { CONFIG } from '../config/playerConfig';
import { CaptionCue } from '../../../types/player';
import { usePlayer } from '../../PlayerProvider'; // ✅ CONTEXT NUTZEN

export interface CaptionsActions {
  handleToggleCC?: () => void;
  showCC?: boolean;
  hasCC?: boolean;
  captionsText?: string;
  currentCue?: CaptionCue | null;
  currentCueIdx?: number;
  allCues?: CaptionCue[];
  goToNextCue?: () => void;
  goToPrevCue?: () => void;
  goToCue?: (index: number) => void;
  updateCurrentCue?: (currentTime: number) => void;
  searchInCaptions?: (query: string) => CaptionCue[];
  fontSize?: number;
  setFontSize?: (size: number) => void;
  captionStyle?: 'default' | 'black' | 'white' | 'yellow';
  setCaptionStyle?: (style: string) => void;
}

export const useCaptions = (
  playerMode: 'base' | 'extended' = 'base'
): CaptionsActions => {
  
  // ✅ CONTEXT NUTZEN:
  const { parsedContent, ui, htmlPlayer } = usePlayer();
  
  // ✅ LOKALE STATES:
  const [captionsText, setCaptionsText] = useState('');
  const [currentCue, setCurrentCue] = useState<CaptionCue | null>(null);
  const [currentCueIdx, setCurrentCueIdx] = useState<number>(-1);
  const [fontSize, setFontSize] = useState(16);
  const [captionStyle, setCaptionStyle] = useState<'default' | 'black' | 'white' | 'yellow'>('default');

  // ✅ CONFIG CHECKS:
  const captionsConfig = CONFIG.features.captions?.[playerMode] || { enabled: false };

  // ✅ GET DATA FROM CONTEXT:
  const allCues = parsedContent.captions || [];
  const hasCC = allCues.length > 0;

  // ✅ TOGGLE CC (UPDATES CONTEXT):
  const handleToggleCC = useCallback(() => {
    if (!captionsConfig.enabled) return;
    ui.setShowCC(!ui.showCC);
  }, [captionsConfig.enabled, ui]);

  // ✅ CUE NAVIGATION:
  const goToNextCue = useCallback(() => {
    if (!captionsConfig.enabled || currentCueIdx >= allCues.length - 1) return;
    
    const nextIdx = currentCueIdx + 1;
    setCurrentCueIdx(nextIdx);
    setCurrentCue(allCues[nextIdx]);
    return allCues[nextIdx].startTime;
  }, [captionsConfig.enabled, currentCueIdx, allCues]);

  const goToPrevCue = useCallback(() => {
    if (!captionsConfig.enabled || currentCueIdx <= 0) return;
    
    const prevIdx = currentCueIdx - 1;
    setCurrentCueIdx(prevIdx);
    setCurrentCue(allCues[prevIdx]);
    return allCues[prevIdx].startTime;
  }, [captionsConfig.enabled, currentCueIdx, allCues]);

  const goToCue = useCallback((index: number) => {
    if (!captionsConfig.enabled || index < 0 || index >= allCues.length) return;
    
    setCurrentCueIdx(index);
    setCurrentCue(allCues[index]);
    return allCues[index].startTime;
  }, [captionsConfig.enabled, allCues]);

  // ✅ TIME UPDATE - FIND CURRENT CUE:
  const updateCurrentCue = useCallback((currentTime: number) => {
    if (!captionsConfig.enabled || allCues.length === 0) return;
    
    const cueIndex = allCues.findIndex(cue => 
      currentTime >= cue.startTime && currentTime <= cue.endTime
    );
    
    if (cueIndex !== -1 && cueIndex !== currentCueIdx) {
      setCurrentCueIdx(cueIndex);
      setCurrentCue(allCues[cueIndex]);
      setCaptionsText(allCues[cueIndex].text);
    } else if (cueIndex === -1 && currentCue !== null) {
      setCurrentCue(null);
      setCurrentCueIdx(-1);
      setCaptionsText('');
    }
  }, [captionsConfig.enabled, allCues, currentCueIdx, currentCue]);

  // ✅ AUTO-UPDATE ON TIME CHANGE:
  useEffect(() => {
    updateCurrentCue(htmlPlayer.currentTime);
  }, [htmlPlayer.currentTime, updateCurrentCue]);

  // ✅ SEARCH IN CAPTIONS:
  const searchInCaptions = useCallback((query: string): CaptionCue[] => {
    if (!captionsConfig.enabled || !query) return [];
    
    return allCues.filter(cue => 
      cue.text.toLowerCase().includes(query.toLowerCase())
    );
  }, [captionsConfig.enabled, allCues]);

  // ✅ CONDITIONAL RETURN:
  const result: CaptionsActions = {};

  if (captionsConfig.enabled) {
    result.handleToggleCC = handleToggleCC;
    result.showCC = ui.showCC; // ✅ FROM CONTEXT
    result.hasCC = hasCC;
    result.captionsText = captionsText;
    result.currentCue = currentCue;
    result.currentCueIdx = currentCueIdx;
    result.allCues = allCues;
    result.goToNextCue = goToNextCue;
    result.goToPrevCue = goToPrevCue;
    result.goToCue = goToCue;
    result.updateCurrentCue = updateCurrentCue;
    result.searchInCaptions = searchInCaptions;
    result.fontSize = fontSize;
    result.setFontSize = setFontSize;
    result.captionStyle = captionStyle;
  
  }

  return result;
};