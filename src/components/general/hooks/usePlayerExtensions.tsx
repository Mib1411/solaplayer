import { useCallback, useState } from 'react';
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
  
  // ✅ CONFIG CHECKS:
  const fullscreenConfig = CONFIG.features.fullscreen[playerMode];
  const pipConfig = CONFIG.features.pip[playerMode];
  const infoConfig = CONFIG.features.info[playerMode];
  const settingsConfig = CONFIG.features.settings[playerMode];
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPiPActive, setIsPiPActive] = useState(false);

  // ✅ HANDLERS:
  const handleToggleFullscreen = useCallback(() => {
    if (!fullscreenConfig.enabled) return;
    
    if (!document.fullscreenElement) {
      videoRef?.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, [videoRef, fullscreenConfig.enabled]);

  const isPiPSupported = pipConfig.enabled && 
                        typeof window !== 'undefined' && 
                        'pictureInPictureEnabled' in document &&
                        !!videoRef?.current?.requestPictureInPicture;

  const handleTogglePiP = useCallback(async () => {
    if (!pipConfig.enabled || !isPiPSupported || !videoRef?.current) return;
    
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        setIsPiPActive(false);
      } else {
        await videoRef.current.requestPictureInPicture();
        setIsPiPActive(true);
      }
    } catch (error) {
      console.warn('PiP not supported or failed:', error);
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

  // ✅ CONDITIONAL RETURN:
  const result: PlayerExtensionsActions = {};

  if (fullscreenConfig.enabled) {
    result.handleToggleFullscreen = handleToggleFullscreen;
    result.isFullscreen = isFullscreen;
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