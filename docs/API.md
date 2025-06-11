# SolaPlayer API Documentation

## Components

### VideoPlayer

Der Haupt-Player für alle Video-Typen mit automatischer Typ-Erkennung.

```tsx
interface VideoPlayerProps {
  // Video Sources
  src?: string;              // HTML5 Video URL
  youtubeId?: string;        // YouTube Video ID
  vimeoId?: string;          // Vimeo Video ID
  
  // Media Files
  poster?: string;           // Poster image URL
  captions?: string;         // WebVTT captions file
  description?: string;      // WebVTT audio description
  chapters?: string;         // WebVTT chapters file
  
  // Player Configuration
  controlsType?: 'minimal' | 'full';
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  
  // Feature Flags
  hasCC?: boolean;
  hasTranscript?: boolean;
  hasAudioDesc?: boolean;
  hasChapters?: boolean;
  
  // Callbacks
  onPlay?: () => void;
  onPause?: () => void;
  onTimeUpdate?: (time: number) => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
}
```

### PlayerContainer

Container-Komponente für Video-Element und Controls.

```tsx
interface PlayerContainerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  youtubeContainerRef: React.RefObject<HTMLDivElement>;
  vimeoContainerRef: React.RefObject<HTMLDivElement>;
  playerState: PlayerState;
  playerControls: PlayerControls;
  poster?: string;
  captions?: string;
  description?: string;
  chapters?: string;
  controlsType: 'minimal' | 'full';
  onFullPlayerClick?: () => void;
  cues?: TextTrackCue[];
  parsedChapters?: Chapter[];
}
```

### PlayerControls

#### PlayerControlsFull

Vollständige Player-Steuerung mit allen Features.

```tsx
interface PlayerControlsFullProps {
  playerState: PlayerState;
  playerControls: PlayerControls;
  hasCC: boolean;
  hasTranscript: boolean;
  hasAudioDesc: boolean;
  hasChapters: boolean;
}
```

**Features:**
- Play/Pause Button
- Progress Slider mit visueller Anzeige
- Volume Control (vertikaler Slider)
- Speed Control (0.25x - 2x)
- Quality Selection
- CC Toggle
- Transcript Toggle
- Audio Description Toggle
- Chapters Toggle
- PiP Support
- Fullscreen Toggle
- Settings Panel

#### PlayerControlsMinimal

Minimale Player-Steuerung für eingebettete Verwendung.

```tsx
interface PlayerControlsMinimalProps {
  playerState: PlayerState;
  playerControls: PlayerControls;
  onFullPlayerClick?: () => void;
}
```

**Features:**
- Play/Pause Button
- Mute Toggle
- Full Player Link

### PlayerSidebar

Seitenpanel für Transcript und Chapters.

```tsx
interface PlayerSidebarProps {
  playerState: PlayerState;
  cues: TextTrackCue[];
  parsedChapters: Chapter[];
  onChapterClick: (time: number) => void;
  currentTime: number;
}
```

**Features:**
- Transcript Panel mit Auto-Scroll
- Chapters Panel mit Navigation
- Responsive Tabs
- Current Time Highlighting

### PlayerModals

Modal-Container für Settings und Info.

```tsx
interface PlayerModalsProps {
  playerState: PlayerState;
}
```

## Hooks

### usePlayerState

Central State Management für Player.

```tsx
interface PlayerState {
  // Playback State
  isPlaying: boolean;
  isPaused: boolean;
  hasStartedOnce: boolean;
  isLoading: boolean;
  
  // Time & Duration
  currentTime: number;
  duration: number;
  bufferedTime: number;
  
  // Audio
  volume: number;
  isMuted: boolean;
  
  // Video Settings
  playbackRate: number;
  selectedQuality: string;
  
  // UI State
  controlsVisible: boolean;
  isFullscreen: boolean;
  isPiP: boolean;
  
  // Accessibility
  showCC: boolean;
  showTranscript: boolean;
  showChapters: boolean;
  audioDescActive: boolean;
  
  // Captions
  currentCaptionText: string;
  captionColor: string;
  captionSize: number;
  captionBackground: string;
  
  // Modals
  settingsOpen: boolean;
  infoOpen: boolean;
  
  // Player Type
  playerType: 'video' | 'youtube' | 'vimeo' | 'btag';
  videoSrc: string;
  
  // Platform Support
  isPiPSupported: boolean;
  isFullscreenSupported: boolean;
}
```

### usePlayerControls

Control Functions für Player.

```tsx
interface PlayerControls {
  // Basic Playback
  handlePlay: () => void;
  handlePause: () => void;
  handleSeek: (time: number) => void;
  
  // Volume
  handleVolumeChange: (volume: number) => void;
  handleMuteToggle: () => void;
  
  // Speed & Quality
  handleSpeedChange: (rate: number) => void;
  handleQualityChange: (quality: string) => void;
  
  // Fullscreen & PiP
  handleFullscreen: () => void;
  handlePiP: () => void;
  
  // YouTube Specific
  handleYouTubePlay: () => void;
  handleYouTubePause: () => void;
  handleYouTubeSeek: (time: number) => void;
  handleYouTubeVolumeChange: (volume: number) => void;
  handleYouTubeSpeedChange: (rate: number) => void;
  
  // Vimeo Specific
  handleVimeoPlay: () => void;
  handleVimeoPause: () => void;
  handleVimeoSeek: (time: number) => void;
  handleVimeoVolumeChange: (volume: number) => void;
  handleVimeoSpeedChange: (rate: number) => void;
  
  // Chapters
  handleChapterClick: (time: number) => void;
}
```

### useAccessibility

Accessibility Features.

```tsx
interface AccessibilityFeatures {
  // Keyboard Navigation
  handleKeyPress: (event: KeyboardEvent) => void;
  
  // Caption Management
  loadCaptions: (src: string) => void;
  parseCues: (track: TextTrack) => TextTrackCue[];
  updateCurrentCaption: (time: number) => void;
  
  // Audio Description
  loadAudioDescription: (src: string) => void;
  toggleAudioDescription: () => void;
  
  // Focus Management
  manageFocus: () => void;
  announceStateChanges: (state: string) => void;
}
```

## Types

### Chapter

```tsx
interface Chapter {
  id: string;
  title: string;
  startTime: number;
  endTime: number;
}
```

### CaptionCue

```tsx
interface CaptionCue {
  startTime: number;
  endTime: number;
  text: string;
}
```

### VideoSource

```tsx
interface VideoSource {
  src: string;
  type: string;
  quality?: string;
}
```

## Events

### Player Events

```tsx
// Playback Events
'play' | 'pause' | 'ended' | 'timeupdate' | 'loadstart' | 'loadeddata' | 'canplay'

// Volume Events
'volumechange'

// Fullscreen Events
'fullscreenchange' | 'enterpictureinpicture' | 'leavepictureinpicture'

// Error Events
'error' | 'abort'
```

### Custom Events

```tsx
// Caption Events
'captionload' | 'captionchange' | 'captionerror'

// Chapter Events
'chapterload' | 'chapterchange'

// Quality Events
'qualitychange'

// Speed Events
'ratechange'
```

## CSS Variables

### Player Theme

```css
:root {
  --player-primary-color: #4a9eff;
  --player-background: #000000;
  --player-control-bg: rgba(0, 0, 0, 0.8);
  --player-text-color: #ffffff;
  --player-border-radius: 6px;
  --player-transition: all 0.3s ease;
}
```

### Progress Bar

```css
.progressSlider {
  --progress: 0%; /* Dynamic progress value */
}
```

### Volume Slider

```css
.volumeSlider {
  --volume: 100%; /* Dynamic volume value */
}
```

## Error Handling

### Error Types

```tsx
enum PlayerError {
  MEDIA_ERR_ABORTED = 1,
  MEDIA_ERR_NETWORK = 2,
  MEDIA_ERR_DECODE = 3,
  MEDIA_ERR_SRC_NOT_SUPPORTED = 4,
  YOUTUBE_ERROR = 5,
  VIMEO_ERROR = 6,
  CAPTION_LOAD_ERROR = 7
}
```

### Error Handling

```tsx
const handleError = (error: PlayerError) => {
  switch(error) {
    case PlayerError.MEDIA_ERR_NETWORK:
      // Handle network errors
      break;
    case PlayerError.CAPTION_LOAD_ERROR:
      // Handle caption loading errors
      break;
    // ... other cases
  }
};
```

## Performance Optimizations

### Lazy Loading

- Video-Elemente werden erst bei Bedarf geladen
- Captions werden asynchron nachgeladen
- Chapters werden bei Bedarf geparst

### Memory Management

- Event Listeners werden beim Unmount entfernt
- Video-Buffer wird bei Player-Wechsel geleert
- Unused Components werden automatisch unmounted

### Bundle Optimization

- Tree-shaking für YouTube/Vimeo APIs
- CSS wird automatisch purged
- Icons werden als SVG Components geladen