import { useCallback, useState } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';

export interface PlayerExtensionsActions {
  // Fullscreen - nur wenn enabled
  handleToggleFullscreen?: () => void;
  isFullscreen?: boolean;
  
  // Picture in Picture - nur wenn enabled
  handleTogglePiP?: () => void;
  isPiPSupported?: boolean;
  isPiPActive?: boolean;
  
  // Modals - nur wenn enabled
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
  
  const { mediaPlayer } = usePlayer();
  
  // ✅ NUTZE CONFIG:
  const fullscreenConfig = CONFIG.features.fullscreen[playerMode];
  const pipConfig = CONFIG.features.pip[playerMode];
  const infoConfig = CONFIG.features.info[playerMode];
  const settingsConfig = CONFIG.features.settings[playerMode];
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPiPActive, setIsPiPActive] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // ✅ ALLE HANDLERS ALWAYS DEFINED - CONDITIONAL LOGIC INSIDE:
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
    
    setInfoOpen(!infoOpen);
    if (settingsOpen) setSettingsOpen(false);
  }, [infoOpen, settingsOpen, infoConfig.enabled]);

  const handleToggleSettings = useCallback(() => {
    if (!settingsConfig.enabled) return;
    
    setSettingsOpen(!settingsOpen);
    if (infoOpen) setInfoOpen(false);
  }, [settingsOpen, infoOpen, settingsConfig.enabled]);


  const handleCloseModals = useCallback(() => {
    setInfoOpen(false);
    setSettingsOpen(false);
  }, []);

  // ✅ CONDITIONAL RETURN - NUR ENABLED FEATURES:
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
    result.infoOpen = infoOpen;
  }

  if (settingsConfig.enabled) {
    result.handleToggleSettings = handleToggleSettings;
    result.settingsOpen = settingsOpen;
  }

  if (infoConfig.enabled || settingsConfig.enabled) {
    result.handleCloseModals = handleCloseModals;
  }

  return result;
};