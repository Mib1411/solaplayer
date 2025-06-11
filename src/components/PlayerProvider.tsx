/**
 * Player Context Provider - Zentrales State Management
 * Single Responsibility: Context Provider für Player State
 */

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useVideoSources } from './general/hooks/useVideoSources';
import { usePlayerBasics } from './general/hooks/usePlayerBasics';
import { useCaptions } from './general/hooks/useCaptions';
import { useDescriptions } from './general/hooks/useDescriptions';
import { useChapters } from './general/hooks/useChapters';
import { usePlayerExtensions } from './general/hooks/usePlayerExtensions';
import { useAccessibility } from './general/hooks/useAccessibility';
import { Chapter, TranscriptCue } from '../types/player';
import { loadChapters, loadCaptions, loadDescriptions, loadTranscript } from '../utils/vtt-parser';

// ✅ PARSED CONTENT MIT TRANSCRIPT:
interface ParsedContent {
  chapters: Chapter[];
  captions: TranscriptCue[];
  descriptions: TranscriptCue[];
  transcript: TranscriptCue[]; // ✅ HINZUGEFÜGT
}

// ✅ SIMPLIFIED CONTEXT - NUR NEUE HOOKS:
export interface PlayerContextType {
  mediaPlayer: {
    // ✅ NUR GLOBALE STATES:
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    hasStartedOnce: boolean;
    controlsVisible: boolean;
    isLoading: boolean;
    isSeeking: boolean;
    bufferedTime: number;
    
    // ✅ SETTERS:
    setCurrentTime: (value: number) => void;
    setDuration: (value: number) => void;
    setIsPlaying: (value: boolean) => void;
    setHasStartedOnce: (value: boolean) => void;
    setControlsVisible: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
    setIsSeeking: (value: boolean) => void;
    setBufferedTime: (value: number) => void;
    
    // ✅ SEEK FUNCTION:
    seekTo: (time: number) => void;
  };
  
  videoSources: any;
  parsedContent: ParsedContent;
  setParsedContent: React.Dispatch<React.SetStateAction<ParsedContent>>;
  
  // ✅ UI STATE:
  ui: {
    showTranscript: boolean;
    showCC: boolean;
    showChapters: boolean;
    settingsOpen: boolean;
    infoOpen: boolean;
    audioDescActive: boolean;
    setShowTranscript: (value: boolean) => void;
    setShowCC: (value: boolean) => void;
    setShowChapters: (value: boolean) => void;
    setSettingsOpen: (value: boolean) => void;
    setInfoOpen: (value: boolean) => void;
    setAudioDescActive: (value: boolean) => void;
  };
  
  // ✅ HOOK ACTIONS - NICHT MEDIA PLAYER:
  playerBasicsActions: any;
  captionsActions: any;
  descriptionsActions: any;
  chaptersActions: any;
  extensionsActions: any;
  accessibilityActions: any;
  
  // Loading functions
  loadChapters: (url: string) => Promise<Chapter[]>;
  loadCaptions: (url: string) => Promise<TranscriptCue[]>;
  loadDescriptions: (url: string) => Promise<TranscriptCue[]>;
  loadTranscript: (captionsUrl?: string, descriptionsUrl?: string) => Promise<TranscriptCue[]>;
  
  // Setters
  setVideoRef: (ref: React.RefObject<HTMLVideoElement>) => void;
  setPlayerType: (type: 'html5' | 'youtube' | 'vimeo') => void;
  setYoutubePlayer: (player: any) => void;
  setVimeoPlayer: (player: any) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

interface PlayerProviderProps {
  children: React.ReactNode;
  playerMode?: 'base' | 'extended';
  captionsUrl?: string;
  descriptionsUrl?: string;
  chaptersUrl?: string;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({
  children, playerMode = 'base', captionsUrl, descriptionsUrl, chaptersUrl
}) => {
  
  // ✅ PLAYER TYPE STATE:
  const [videoRef, setVideoRef] = useState<React.RefObject<HTMLVideoElement> | undefined>(undefined);
  const [playerType, setPlayerType] = useState<'html5' | 'youtube' | 'vimeo'>('html5');
  const [youtubePlayer, setYoutubePlayer] = useState<any>(null);
  const [vimeoPlayer, setVimeoPlayer] = useState<any>(null);
  
  // ✅ GLOBALE STATES (ENTFERNE duration):
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [bufferedTime, setBufferedTime] = useState(0);
  
  // ✅ UI STATES:
  const [showTranscript, setShowTranscript] = useState(false);
  const [showCC, setShowCC] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [audioDescActive, setAudioDescActive] = useState(false);
  
  // ✅ PARSED CONTENT MIT TRANSCRIPT:
  const [parsedContent, setParsedContent] = useState<ParsedContent>({
    chapters: [],
    captions: [],
    descriptions: [],
    transcript: []
  });

  // ✅ SEEK FUNCTION:
  const seekTo = useCallback((time: number) => {
    if (playerType === 'html5' && videoRef?.current) {
      setIsSeeking(true);
      const video = videoRef.current;
      video.currentTime = time;
      
      const handleSeeked = () => {
        setIsSeeking(false);
        setCurrentTime(time);
        video.removeEventListener('seeked', handleSeeked);
      };
      
      video.addEventListener('seeked', handleSeeked);
    }
  }, [playerType, videoRef]);

  // ✅ HTML5 EVENT LISTENERS:
  useEffect(() => {
    if (playerType !== 'html5' || !videoRef?.current) return;

    const video = videoRef.current;
    
    const handleTimeUpdate = () => {
      if (isSeeking) return;
      setCurrentTime(video.currentTime);
      
      if (video.buffered.length > 0) {
        const buffered = video.buffered.end(video.buffered.length - 1);
        setBufferedTime(buffered);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setHasStartedOnce(true);
    };

    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoRef, playerType, isSeeking]);

  // ✅ HOOKS:
  const videoSources = useVideoSources();
  const playerBasicsActions = usePlayerBasics(videoRef, youtubePlayer, vimeoPlayer, playerType, playerMode);
  const captionsActions = useCaptions(captionsUrl, playerMode);
  const descriptionsActions = useDescriptions(descriptionsUrl, playerMode);
  const chaptersActions = useChapters(chaptersUrl, playerMode);
  const extensionsActions = usePlayerExtensions(playerMode, videoRef);
  const accessibilityActions = useAccessibility({ playerMode, enabled: true });

  // ✅ LOADING FUNCTIONS:
  const loadChaptersCallback = useCallback(async (url: string): Promise<Chapter[]> => {
    try {
      const chapters = await loadChapters(url, parsedContent, setParsedContent);
      return chapters;
    } catch (error) {
      console.error('Error loading chapters:', error);
      throw error;
    }
  }, [parsedContent]);

  const loadCaptionsCallback = useCallback(async (url: string): Promise<TranscriptCue[]> => {
    try {
      const captions = await loadCaptions(url, parsedContent, setParsedContent);
      return captions;
    } catch (error) {
      console.error('Error loading captions:', error);
      throw error;
    }
  }, [parsedContent]);

  const loadDescriptionsCallback = useCallback(async (url: string): Promise<TranscriptCue[]> => {
    try {
      const descriptions = await loadDescriptions(url, parsedContent, setParsedContent);
      return descriptions;
    } catch (error) {
      console.error('Error loading descriptions:', error);
      throw error;
    }
  }, [parsedContent]);

  const loadTranscriptCallback = useCallback(async (captionsUrl?: string, descriptionsUrl?: string): Promise<TranscriptCue[]> => {
    try {
      const transcript = await loadTranscript(captionsUrl, descriptionsUrl, parsedContent, setParsedContent);
      return transcript;
    } catch (error) {
      console.error('Error loading transcript:', error);
      throw error;
    }
  }, [parsedContent]);

  const contextValue: PlayerContextType = {
    mediaPlayer: {
      currentTime, setCurrentTime,
      duration, setDuration,
      isPlaying, setIsPlaying,
      hasStartedOnce, setHasStartedOnce,
      controlsVisible, setControlsVisible,
      isLoading, setIsLoading,
      isSeeking, setIsSeeking,
      bufferedTime, setBufferedTime,
      seekTo,
    },
    
    videoSources,
    parsedContent,
    setParsedContent,
    
    ui: {
      showTranscript, setShowTranscript,
      showCC, setShowCC,
      showChapters, setShowChapters,
      settingsOpen, setSettingsOpen,
      infoOpen, setInfoOpen,
      audioDescActive, setAudioDescActive,
    },
    
    playerBasicsActions,
    captionsActions,
    descriptionsActions,
    chaptersActions,
    extensionsActions,
    accessibilityActions,
    
    loadChapters: loadChaptersCallback,
    loadCaptions: loadCaptionsCallback,
    loadDescriptions: loadDescriptionsCallback,
    loadTranscript: loadTranscriptCallback,
    setVideoRef,
    setPlayerType,
    setYoutubePlayer,
    setVimeoPlayer,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};