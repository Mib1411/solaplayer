/**
 * Player Context Provider - NUR Context bereitstellen
 * Single Responsibility: Context Provider für Player State
 */

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Chapter, TranscriptCue, CaptionCue, ParsedContent } from '../types/player';
import { loadChapters, loadCaptions, loadDescriptions, loadTranscript } from '../utils/vtt-parser';

// ✅ AVAILABLE CONTENT INTERFACE HINZUFÜGEN:
export interface AvailableContent {
  hasChapters: boolean;
  hasCaptions: boolean;
  hasDescriptions: boolean;
  hasPoster: boolean; 
  hasQualities: boolean;
  chaptersUrl?: string;
  captionsUrl?: string;
  descriptionsUrl?: string;
  posterUrl?: string; // Optional, falls Poster-URL verfügbar ist
  sources?: Array<{
    url: string;
    quality: string;
    width: number;
    height: number;
  }>;
}

// ✅ CONTEXT NUR FÜR SHARED STATE:
export interface PlayerContextType {
  htmlPlayer: {
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    isLoading: boolean;
    isSeeking: boolean;
    bufferedTime: number;
    setCurrentTime: (value: number) => void;
    setDuration: (value: number) => void;
    setIsPlaying: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
    setIsSeeking: (value: boolean) => void;
    setBufferedTime: (value: number) => void;
    seekTo: (time: number) => void;
  };
  
  parsedContent: ParsedContent;
  setParsedContent: React.Dispatch<React.SetStateAction<ParsedContent>>;
  
  // ✅ AVAILABLE CONTENT HINZUFÜGEN:
  availableContent: AvailableContent;
  setAvailableContent: React.Dispatch<React.SetStateAction<AvailableContent>>;
  
  ui: {
    showTranscript: boolean;
    showCC: boolean;
    showChapters: boolean;
    settingsOpen: boolean;
    infoOpen: boolean;
    audioDescActive: boolean;
    hasStartedOnce: boolean;
    controlsVisible: boolean;
    isFullscreen: boolean; // ✅ GLOBALER FULLSCREEN STATE HINZUFÜGEN
    setHasStartedOnce: (value: boolean) => void;
    setControlsVisible: (value: boolean) => void;
    setShowTranscript: (value: boolean) => void;
    setShowCC: (value: boolean) => void;
    setShowChapters: (value: boolean) => void;
    setSettingsOpen: (value: boolean) => void;
    setInfoOpen: (value: boolean) => void;
    setAudioDescActive: (value: boolean) => void;
    setIsFullscreen: (value: boolean) => void; // ✅ SETTER HINZUFÜGEN
  };
  
  // ✅ PLAYER REFS - KORRIGIERTE TYPES:
  videoRef?: React.RefObject<HTMLVideoElement>;
  playerType: 'html5' | 'youtube' | 'vimeo'; // ✅ 'html5' → 'html5'
  youtubePlayer?: any;
  vimeoPlayer?: any;
  setVideoRef: (ref: React.RefObject<HTMLVideoElement>) => void;
  setPlayerType: (type: 'html5' | 'youtube' | 'vimeo') => void; // ✅ 'html5' → 'html5'
  setYoutubePlayer: (player: any) => void;
  setVimeoPlayer: (player: any) => void;
  
  // Loading functions
  loadChapters: (url: string) => Promise<Chapter[]>;
  loadCaptions: (url: string) => Promise<CaptionCue[]>;
  loadDescriptions: (url: string) => Promise<TranscriptCue[]>;
  loadTranscript: (captionsUrl?: string, descriptionsUrl?: string) => Promise<TranscriptCue[]>;
}

// ✅ PROPS KORRIGIEREN:
interface PlayerProviderProps {
  children: React.ReactNode;
  playerMode?: 'base' | 'extended';
  // ✅ DIESE PROPS WERDEN NICHT VOM PROVIDER VERWALTET SONDERN VON WCAGPLAYER:
  // captionsUrl?, descriptionsUrl?, chaptersUrl?, qualities? ENTFERNEN
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<PlayerProviderProps> = ({
  children, 
  playerMode = 'base'
  // ✅ ALLE ANDEREN PROPS ENTFERNT
}) => {
  
  // ✅ PLAYER STATE:
  const [videoRef, setVideoRef] = useState<React.RefObject<HTMLVideoElement> | undefined>(undefined);
  const [playerType, setPlayerType] = useState<'html5' | 'youtube' | 'vimeo'>('html5'); // ✅ 'html5' → 'html5'
  const [youtubePlayer, setYoutubePlayer] = useState<any>(null);
  const [vimeoPlayer, setVimeoPlayer] = useState<any>(null);
  
  // ✅ MEDIA PLAYER STATES:
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
  const [isFullscreen, setIsFullscreen] = useState(false); // ✅ FULLSCREEN STATE HINZUFÜGEN

  // ✅ ZENTRALE PARSED CONTENT:
  const [parsedContent, setParsedContent] = useState<ParsedContent>({
    chapters: [],
    captions: [],
    descriptions: [],
    transcript: []
  });

  // ✅ AVAILABLE CONTENT INITIAL STATE - LEER:
  const [availableContent, setAvailableContent] = useState<AvailableContent>({
    hasChapters: false,
    hasCaptions: false,
    hasDescriptions: false,
    hasPoster: false,
    hasQualities: false,
    sources: [] // ✅ LEERES ARRAY INITIAL
  });

  // ✅ SEEK FUNCTION:
  const seekTo = useCallback((time: number) => {
    if (playerType === 'html5' && videoRef?.current) { // ✅ 'html5' → 'html5'
      setIsSeeking(true);
      const video = videoRef.current;
      video.currentTime = time;
      
      const handleSeeked = () => {
        setIsSeeking(false);
        setCurrentTime(time);
        video.removeEventListener('seeked', handleSeeked);
      };
      
      video.addEventListener('seeked', handleSeeked);
    } else if (playerType === 'youtube' && youtubePlayer) {
      youtubePlayer.seekTo(time);
    } else if (playerType === 'vimeo' && vimeoPlayer) {
      vimeoPlayer.setCurrentTime(time);
    }
  }, [playerType, videoRef, youtubePlayer, vimeoPlayer]);

  // ✅ HTML5 EVENT LISTENERS:
  useEffect(() => {
    if (playerType !== 'html5' || !videoRef?.current) return; // ✅ 'html5' → 'html5'

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

  // ✅ LOADING FUNCTIONS BLEIBEN GLEICH...
  const loadChaptersCallback = useCallback(async (url: string): Promise<Chapter[]> => {
    try {
      const chapters = await loadChapters(url, parsedContent, setParsedContent);
      return chapters;
    } catch (error) {
      console.error('Error loading chapters:', error);
      throw error;
    }
  }, [parsedContent]);

  const loadCaptionsCallback = useCallback(async (url: string): Promise<CaptionCue[]> => {
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

  // ✅ CONTEXT VALUE:
  const contextValue: PlayerContextType = {
    htmlPlayer: {
      currentTime, setCurrentTime,
      duration, setDuration,
      isPlaying, setIsPlaying,
      isLoading, setIsLoading,
      isSeeking, setIsSeeking,
      bufferedTime, setBufferedTime,
      seekTo,
    },
    
    parsedContent,
    setParsedContent,
    
    // ✅ AVAILABLE CONTENT HINZUFÜGEN:
    availableContent,
    setAvailableContent, // ✅ JETZT VERFÜGBAR!
    
    ui: {
      showTranscript, setShowTranscript,
      showCC, setShowCC,
      showChapters, setShowChapters,
      settingsOpen, setSettingsOpen,
      infoOpen, setInfoOpen,
      audioDescActive, setAudioDescActive,
      hasStartedOnce: hasStartedOnce,
      setHasStartedOnce: setHasStartedOnce,
      controlsVisible: controlsVisible,
      setControlsVisible: setControlsVisible,
      isFullscreen, setIsFullscreen, // ✅ FULLSCREEN HINZUFÜGEN
    },
    
    videoRef,
    playerType,
    youtubePlayer,
    vimeoPlayer,
    setVideoRef,
    setPlayerType,
    setYoutubePlayer,
    setVimeoPlayer,
    
    loadChapters: loadChaptersCallback,
    loadCaptions: loadCaptionsCallback,
    loadDescriptions: loadDescriptionsCallback,
    loadTranscript: loadTranscriptCallback,
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