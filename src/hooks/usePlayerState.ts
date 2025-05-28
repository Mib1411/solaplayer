import { useState, useCallback } from 'react';

interface UsePlayerStateProps {
  autoplay: boolean;
  muted: boolean;
}

export const usePlayerState = ({ autoplay, muted }: UsePlayerStateProps) => {
  // Basic player state
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isPiPSupported, setIsPiPSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // UI state
  const [showTranscript, setShowTranscript] = useState(false);
  const [showCC, setShowCC] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  const [isSpooling, setIsSpooling] = useState(false);

  // Modal states
  const [audioDescSettingsOpen, setAudioDescSettingsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  // Audio description state
  const [audioDescActive, setAudioDescActive] = useState(false);
  const [ttsBusy, setTtsBusy] = useState(false);
  const [pitch, setPitch] = useState(1);
  const [autoStop, setAutoStop] = useState(true);
  const [autoStart, setAutoStart] = useState(true);
  const [audioDescMode, setAudioDescMode] = useState<'tts' | 'audio' | 'sign'>('tts');
  const [ttsAvailable, setTtsAvailable] = useState(true);
  const [ttsError, setTtsError] = useState('');
  const [hasAudioTrack, setHasAudioTrack] = useState(false);
  const [hasSignTrack, setHasSignTrack] = useState(false);

  // Content indexes
  const [currentCueIdx, setCurrentCueIdx] = useState<number>(-1);
  const [currentChapterIdx, setCurrentChapterIdx] = useState(-1);

  // Video sources and quality
  const [videoSources, setVideoSources] = useState<any>({});
  const [selectedQuality, setSelectedQuality] = useState<string>('auto');
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [availableQualities, setAvailableQualities] = useState<any[]>([]);

  // Player type and instances
  const [playerType, setPlayerType] = useState<'video' | 'youtube' | 'vimeo' | 'btag'>('video');
  const [youtubePlayer, setYoutubePlayer] = useState<any>(null);
  const [vimeoPlayer, setVimeoPlayer] = useState<any>(null);

  // Voice data for TTS
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');

  // NEU: State, um zu verfolgen, ob das Video einmal gestartet wurde
  const [hasStartedOnce, setHasStartedOnce] = useState(autoplay);

  // WICHTIG: Alle States + Setters zurückgeben
  return {
    // States
    isPlaying,
    isMuted,
    currentTime,
    duration,
    volume,
    playbackRate,
    controlsVisible,
    isPiPSupported,
    isLoading,
    showTranscript,
    showCC,
    showChapters,
    isSpooling,
    audioDescSettingsOpen,
    settingsOpen,
    infoOpen,
    audioDescActive,
    ttsBusy,
    pitch,
    autoStop,
    autoStart,
    audioDescMode,
    ttsAvailable,
    ttsError,
    hasAudioTrack,
    hasSignTrack,
    currentCueIdx,
    currentChapterIdx,
    videoSources,
    selectedQuality,
    videoSrc,
    availableQualities,
    playerType,
    youtubePlayer,
    vimeoPlayer,
    voices,
    selectedVoice,
    hasStartedOnce, // NEU

    // Setters - ALLE MÜSSEN HIER STEHEN!
    setIsPlaying: useCallback((value: boolean) => setIsPlaying(value), []),
    setIsMuted: useCallback((value: boolean) => setIsMuted(value), []),
    setCurrentTime: useCallback((value: number) => setCurrentTime(value), []),
    setDuration: useCallback((value: number) => setDuration(value), []),
    setVolume: useCallback((value: number) => setVolume(value), []),
    setPlaybackRate: useCallback((value: number) => setPlaybackRate(value), []),
    setControlsVisible: useCallback((value: boolean) => setControlsVisible(value), []),
    setIsPiPSupported: useCallback((value: boolean) => setIsPiPSupported(value), []),
    setIsLoading: useCallback((value: boolean) => setIsLoading(value), []),
    setShowTranscript: useCallback((value: boolean) => setShowTranscript(value), []),
    setShowCC: useCallback((value: boolean) => setShowCC(value), []),
    setShowChapters: useCallback((value: boolean) => setShowChapters(value), []),
    setIsSpooling: useCallback((value: boolean) => setIsSpooling(value), []),
    setAudioDescSettingsOpen: useCallback((value: boolean) => setAudioDescSettingsOpen(value), []),
    setSettingsOpen: useCallback((value: boolean) => setSettingsOpen(value), []),
    setInfoOpen: useCallback((value: boolean) => setInfoOpen(value), []),
    setAudioDescActive: useCallback((value: boolean) => setAudioDescActive(value), []),
    setTtsBusy: useCallback((value: boolean) => setTtsBusy(value), []),
    setPitch: useCallback((value: number) => setPitch(value), []),
    setAutoStop: useCallback((value: boolean) => setAutoStop(value), []),
    setAutoStart: useCallback((value: boolean) => setAutoStart(value), []),
    setAudioDescMode: useCallback((value: 'tts' | 'audio' | 'sign') => setAudioDescMode(value), []),
    setTtsAvailable: useCallback((value: boolean) => setTtsAvailable(value), []),
    setTtsError: useCallback((value: string) => setTtsError(value), []),
    setHasAudioTrack: useCallback((value: boolean) => setHasAudioTrack(value), []),
    setHasSignTrack: useCallback((value: boolean) => setHasSignTrack(value), []),
    setCurrentCueIdx: useCallback((value: number) => setCurrentCueIdx(value), []),
    setCurrentChapterIdx: useCallback((value: number) => setCurrentChapterIdx(value), []),
    setVideoSources: useCallback((value: any) => setVideoSources(value), []),
    setSelectedQuality: useCallback((value: string) => setSelectedQuality(value), []),
    setVideoSrc: useCallback((value: string) => setVideoSrc(value), []),
    setAvailableQualities: useCallback((value: any[]) => setAvailableQualities(value), []),
    setPlayerType: useCallback((value: 'video' | 'youtube' | 'vimeo' | 'btag') => setPlayerType(value), []),
    setYoutubePlayer: useCallback((value: any) => setYoutubePlayer(value), []),
    setVimeoPlayer: useCallback((value: any) => setVimeoPlayer(value), []),
    setVoices: useCallback((value: SpeechSynthesisVoice[]) => setVoices(value), []),
    setSelectedVoice: useCallback((value: string) => setSelectedVoice(value), []),
    setHasStartedOnce: useCallback((value: boolean) => setHasStartedOnce(value), [])
  };
};