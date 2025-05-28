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
  startTime: number;
  endTime: number;
  text: string;
  type: 'caption' | 'description';
}

export interface Chapter {
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
  playerState: any;
  playerControls: any;
  mp4?: string | string[];
  webm?: string | string[];
  poster?: string; // HINZUFÜGEN
  captions?: string;
  description?: string;
  chapters?: string;
  controlsType?: 'full' | 'minimal'; // NEU
  onFullPlayerClick?: () => void; // NEU
  cues?: TranscriptCue[];
  parsedChapters?: Chapter[];
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