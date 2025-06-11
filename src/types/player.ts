export interface FullPlayerProps {
  mp4?: string | string[];
  webm?: string | string[];
  youtube?: string;
  vimeo?: string;
  btag?: string;
  poster?: string; // HINZUGEFÜGT
  captions?: string;
  description?: string;
  chapters?: string;
  autoplay?: boolean;
  muted?: boolean;
}

export interface TranscriptCue {
  id?: string; // Optional ID for easier reference
  startTime: number;
  endTime: number;
  text: string;
  type?: 'caption' | 'description';
}

export interface Chapter {
  id?: string; // Optional ID for easier reference
  startTime: number;
  endTime: number;
  title: string;
}

export interface VideoQuality {
  url: string;
  quality: string;
  width: number;
  height: number;
  bitrate?: number;
}

export interface VideoSources {
  mp4?: VideoQuality[];
  webm?: VideoQuality[];
}

export interface PlayerContainerProps {
  videoRef?: React.RefObject<HTMLVideoElement>;
  youtubeContainerRef?: React.RefObject<HTMLDivElement>;
  vimeoContainerRef?: React.RefObject<HTMLDivElement>;
  playerState: PlayerStateWithActions;
  playerControls: PlayerControlsActions;
  mp4?: string | string[];
  webm?: string | string[];
  poster?: string;
  captions?: string;
  description?: string;
  chapters?: string;
  controlsType?: 'full' | 'minimal';
  onFullPlayerClick?: () => void;
  cues?: TranscriptCue[];
  parsedChapters?: Chapter[];
}

export interface PlayerControlsActions {
  handlePlay: () => void;
  handlePause: () => void;
  handleVolumeChange: (volume: number) => void;
  handleSeek: (time: number) => void;
  handleChapterClick: (time: number) => void;
  handleToggleFullscreen: () => void;
  handleTogglePiP: () => void;
  handleToggleMute: () => void;
  handlePlaybackRateChange: (rate: number) => void;
  handleCueClick?: (time: number) => void;
}

export interface AudioDescSettingsProps {
  open: boolean;
  onClose: () => void;
  voices: SpeechSynthesisVoice[];
  selectedVoice: string;
  setSelectedVoice: (v: string) => void;
  pitch: number;
  setPitch: (p: number) => void;
  autoStop: boolean;
  setAutoStop: (b: boolean) => void;
  autoStart: boolean;
  setAutoStart: (b: boolean) => void;
  mode: string;
  setMode: (m: string) => void;
  hasAudioTrack: boolean;
  hasSignTrack: boolean;
  ttsAvailable: boolean;
  ttsError: string;
}

export interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  showCC: boolean;
  showTranscript: boolean;
  hasCC: boolean;
  hasTranscript: boolean;
}

export interface InfoModalProps {
  open: boolean;
  onClose: () => void;
}

export interface UsePlayerEffectsProps {
  mp4?: string | string[];
  webm?: string | string[];
  youtube?: string;
  vimeo?: string;
  btag?: string;
  poster?: string;
  captions?: string;
  description?: string;
  chapters?: string;
  playerState: any;
  cues: any[];
  parsedChapters: any[];
  videoRef: React.RefObject<HTMLVideoElement>;
  youtubeContainerRef: React.RefObject<HTMLDivElement>;
  vimeoContainerRef: React.RefObject<HTMLDivElement>;
}

export interface PlayerState {
  // Basic player state
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  controlsVisible: boolean;
  isPiPSupported: boolean;
  isLoading: boolean;
  
  // UI state
  showTranscript: boolean;
  showCC: boolean;
  showChapters: boolean;
  isSpooling: boolean;
  
  // Transcript settings
  transcriptTimeBasedView: boolean;
  transcriptShowFull: boolean;
  
  // Modal states
  settingsOpen: boolean;
  infoOpen: boolean;
  
  // Audio description state
  audioDescActive: boolean;
  ttsBusy: boolean;
  pitch: number;
  autoStop: boolean;
  autoStart: boolean;
  audioDescMode: 'tts' | 'audio' | 'sign';
  ttsAvailable: boolean;
  ttsError: string;
  hasAudioTrack: boolean;
  hasSignTrack: boolean;
  
  // Content indexes
  currentCueIdx: number;
  currentChapterIdx: number;
  
  // Video sources and quality
  videoSources: VideoSources;
  selectedQuality: string;
  videoSrc: string;
  availableQualities: VideoQuality[];
  
  // Player type and instances
  playerType: 'video' | 'youtube' | 'vimeo' | 'btag';
  youtubePlayer: any;
  vimeoPlayer: any;
  
  // Voice data for TTS
  voices: SpeechSynthesisVoice[];
  selectedVoice: string;
  
  // Lifecycle state
  hasStartedOnce: boolean;
  
  // Caption customization
  captionFontSize?: string;
  captionColor?: string;
  captionBackground?: string;
  currentCaptionText?: string;
  videoTitle?: string;
}

export interface PlayerActions {
  // Basic controls
  setIsPlaying: (value: boolean) => void;
  setIsMuted: (value: boolean) => void;
  setCurrentTime: (value: number) => void;
  setDuration: (value: number) => void;
  setVolume: (value: number) => void;
  setPlaybackRate: (value: number) => void;
  setControlsVisible: (value: boolean) => void;
  setIsPiPSupported: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  
  // UI controls
  setShowTranscript: (value: boolean) => void;
  setShowCC: (value: boolean) => void;
  setShowChapters: (value: boolean) => void;
  setIsSpooling: (value: boolean) => void;
  setTranscriptTimeBasedView: (value: boolean) => void;
  setTranscriptShowFull: (value: boolean) => void;
  
  // Modal controls
  setSettingsOpen: (value: boolean) => void;
  setInfoOpen: (value: boolean) => void;
  
  // Audio description controls
  setAudioDescActive: (value: boolean) => void;
  setTtsBusy: (value: boolean) => void;
  setPitch: (value: number) => void;
  setAutoStop: (value: boolean) => void;
  setAutoStart: (value: boolean) => void;
  setAudioDescMode: (value: 'tts' | 'audio' | 'sign') => void;
  setTtsAvailable: (value: boolean) => void;
  setTtsError: (value: string) => void;
  setHasAudioTrack: (value: boolean) => void;
  setHasSignTrack: (value: boolean) => void;
  
  // Content controls
  setCurrentCueIdx: (value: number) => void;
  setCurrentChapterIdx: (value: number) => void;
  
  // Video source controls
  setVideoSources: (value: VideoSources) => void;
  setSelectedQuality: (value: string) => void;
  setVideoSrc: (value: string) => void;
  setAvailableQualities: (value: VideoQuality[]) => void;
  setPlayerType: (value: 'video' | 'youtube' | 'vimeo' | 'btag') => void;
  setYoutubePlayer: (value: any) => void;
  setVimeoPlayer: (value: any) => void;
  
  // Voice controls
  setVoices: (value: SpeechSynthesisVoice[]) => void;
  setSelectedVoice: (value: string) => void;
  
  // Lifecycle controls
  setHasStartedOnce: (value: boolean) => void;
  
  // Caption controls
  setCaptionFontSize?: (value: string) => void;
  setCaptionColor?: (value: string) => void;
  setCaptionBackground?: (value: string) => void;
}

export type PlayerStateWithActions = PlayerState & PlayerActions;

// WCAG Player Types
export interface WcagPlayerProps {
  mp4?: string | string[];
  webm?: string | string[];
  youtube?: string;
  vimeo?: string;
  btag?: string;
  poster?: string;
  captionsUrl?: string;
  descriptionsUrl?: string;
  chaptersUrl?: string;
  autoplay?: boolean;
  muted?: boolean;
  playerMode?: 'base' | 'extended' ;
  link?: string;
  onVideoOpen?: (videoId: string, mode: 'popup' | 'page', videoData?: VideoData) => void;
  videoId?: string;
}

export interface VideoData {
  mp4?: string | string[];
  webm?: string | string[];
  youtube?: string;
  vimeo?: string;
  btag?: string;
  poster?: string;
  captionsUrl?: string;
  descriptionsUrl?: string;
  chaptersUrl?: string;
}

// Updated PlayerContainer Props
export interface PlayerContainerPropsNew {
  videoRef?: React.RefObject<HTMLVideoElement>;
  youtubeContainerRef?: React.RefObject<HTMLDivElement>;
  vimeoContainerRef?: React.RefObject<HTMLDivElement>;
  playerState: any; // Context state
  playerControls: any; // Control actions
  mp4?: string | string[];
  webm?: string | string[];
  poster?: string;
  captionsUrl?: string;
  descriptionsUrl?: string;
  chaptersUrl?: string;
  playerMode?: 'base' | 'extended';
  onVideoOpen?: (mode: 'popup' | 'page') => void;
  link?: string;
  cues?: TranscriptCue[];
  parsedChapters?: Chapter[];
}