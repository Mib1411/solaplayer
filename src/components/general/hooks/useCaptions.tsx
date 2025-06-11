import { useCallback, useEffect, useState } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';
import { TranscriptCue } from '@/types/player';

export interface CaptionsActions {
  handleToggleCC?: () => void;
  showCC?: boolean;
  hasCC?: boolean;
  currentCue?: TranscriptCue | null;
  currentCueIndex?: number;
  // ✅ ADD MISSING:
  currentCueIdx?: number;
  setCurrentCueIdx?: (idx: number) => void;
}

export const useCaptions = (
  captionsUrl?: string,
  playerMode: 'base' | 'extended' = 'base'
): CaptionsActions => {
  
  const { parsedContent, loadCaptions, mediaPlayer } = usePlayer();
  
  // ✅ CONFIG CHECK:
  const captionsConfig = CONFIG.features.captions[playerMode];
  const isEnabled = captionsConfig.enabled && !!captionsUrl;

  // ✅ LOCAL STATE:
  const [showCC, setShowCC] = useState(false);
  const [currentCueIdx, setCurrentCueIdx] = useState(-1);

  if (!isEnabled) {
    return {};
  }

  // ✅ FIND CURRENT CUE:
  const currentCueIndex = parsedContent.captions?.findIndex((cue, idx) => {
    const nextCue = parsedContent.captions![idx + 1];
    return mediaPlayer.currentTime >= cue.startTime && 
           (!nextCue || mediaPlayer.currentTime < nextCue.startTime);
  }) ?? -1;

  const currentCue = currentCueIndex >= 0 ? parsedContent.captions![currentCueIndex] : null;

  // ✅ UPDATE LOCAL INDEX:
  useEffect(() => {
    if (currentCueIndex !== currentCueIdx) {
      setCurrentCueIdx(currentCueIndex);
    }
  }, [currentCueIndex, currentCueIdx]);

  const handleToggleCC = useCallback(() => {
    setShowCC(!showCC);
  }, [showCC]);

  // ✅ CONDITIONAL RETURN:
  const result: CaptionsActions = {};
  const components = captionsConfig.components || {};

  if (components.CaptionsButton) {
    result.handleToggleCC = handleToggleCC;
    result.showCC = showCC;
  }

  if (components.CaptionsOverlay) {
    result.hasCC = (parsedContent.captions?.length ?? 0) > 0;
    result.currentCue = currentCue;
    result.currentCueIndex = currentCueIndex;
    result.currentCueIdx = currentCueIdx;
    result.setCurrentCueIdx = setCurrentCueIdx;
  }

  return result;
};