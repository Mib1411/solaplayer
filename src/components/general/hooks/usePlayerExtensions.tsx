import { useCallback, useEffect, useState } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';

export interface PlayerExtensionsActions {
  handleToggleFullscreen?: () => void;
  isFullscreen?: boolean;
  handleTogglePiP?: () => void;
  isPiPSupported?: boolean;
  isPiPActive?: boolean;
  handleToggleInfo?: () => void;
  handleToggleSettings?: () => void;
  handleCloseModals?: () => void;
  infoOpen?: boolean;
  settingsOpen?: boolean;
}

export const usePlayerExtensions = (
  playerMode: 'base' | 'extended' = 'base',
  videoRef?: React.RefObject<HTMLVideoElement>
): PlayerExtensionsActions => {
  
  const { ui } = usePlayer();
  
  // ✅ KEIN LOKALER FULLSCREEN STATE MEHR - NUTZE UI.ISFULLSCREEN
  // const [isFullscreen, setIsFullscreen] = useState(false); ← ENTFERNT
  
  // ✅ NUR LOKALER PiP STATE (nicht global relevant):
  const [isPiPActive, setIsPiPActive] = useState(false);

  // ✅ CONFIG CHECKS:
  const fullscreenConfig = CONFIG.features.fullscreen?.[playerMode] || { enabled: false };
  const pipConfig = CONFIG.features.pip?.[playerMode] || { enabled: false };
  const infoConfig = CONFIG.features.info?.[playerMode] || { enabled: false };
  const settingsConfig = CONFIG.features.settings?.[playerMode] || { enabled: false };

  // ✅ FULLSCREEN HANDLER - NUTZT GLOBALEN STATE:
  const handleToggleFullscreen = useCallback(() => {
    if (!fullscreenConfig.enabled) return;
    
    if (!document.fullscreenElement) {
      const element = videoRef?.current || document.documentElement;
      element.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, [videoRef, fullscreenConfig.enabled]);

  // ✅ PiP SUPPORT CHECK:
  const isPiPSupported = pipConfig.enabled && 
                        typeof window !== 'undefined' && 
                        'pictureInPictureEnabled' in document &&
                        !!videoRef?.current?.requestPictureInPicture;

  const handleTogglePiP = useCallback(async () => {
    if (!pipConfig.enabled || !isPiPSupported || !videoRef?.current) return;
    
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (error) {
      console.error('PiP error:', error);
    }
  }, [videoRef, pipConfig.enabled, isPiPSupported]);

  const handleToggleInfo = useCallback(() => {
    if (!infoConfig.enabled) return;
    ui.setInfoOpen(!ui.infoOpen);
    if (ui.settingsOpen) ui.setSettingsOpen(false);
  }, [ui, infoConfig.enabled]);

  const handleToggleSettings = useCallback(() => {
    if (!settingsConfig.enabled) return;
    ui.setSettingsOpen(!ui.settingsOpen);
    if (ui.infoOpen) ui.setInfoOpen(false);
  }, [ui, settingsConfig.enabled]);

  const handleCloseModals = useCallback(() => {
    ui.setInfoOpen(false);
    ui.setSettingsOpen(false);
  }, [ui]);

  // ✅ FULLSCREEN EVENT LISTENER - UPDATED GLOBALEN STATE:
  useEffect(() => {
    const handleFullscreenChange = () => {
      ui.setIsFullscreen(!!document.fullscreenElement); // ✅ GLOBALEN STATE UPDATEN
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [ui]);

  // ✅ PiP EVENT LISTENER - BLEIBT LOKAL:
  useEffect(() => {
    const handlePiPChange = () => {
      setIsPiPActive(!!document.pictureInPictureElement);
    };

    document.addEventListener('enterpictureinpicture', handlePiPChange);
    document.addEventListener('leavepictureinpicture', handlePiPChange);
    
    return () => {
      document.removeEventListener('enterpictureinpicture', handlePiPChange);
      document.removeEventListener('leavepictureinpicture', handlePiPChange);
    };
  }, []);

  // ✅ CONDITIONAL RETURN - NUTZT GLOBALEN FULLSCREEN STATE:
  const result: PlayerExtensionsActions = {};

  if (fullscreenConfig.enabled) {
    result.handleToggleFullscreen = handleToggleFullscreen;
    result.isFullscreen = ui.isFullscreen; // ✅ GLOBALER STATE AUS CONTEXT
  }

  if (pipConfig.enabled) {
    result.handleTogglePiP = handleTogglePiP;
    result.isPiPSupported = isPiPSupported;
    result.isPiPActive = isPiPActive;
  }

  if (infoConfig.enabled) {
    result.handleToggleInfo = handleToggleInfo;
    result.infoOpen = ui.infoOpen;
  }

  if (settingsConfig.enabled) {
    result.handleToggleSettings = handleToggleSettings;
    result.settingsOpen = ui.settingsOpen;
  }

  if (infoConfig.enabled || settingsConfig.enabled) {
    result.handleCloseModals = handleCloseModals;
  }

  return result;
};