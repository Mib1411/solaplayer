# Development Guide - SolaPlayer

## Setup

### Prerequisites

- Node.js 18+ 
- npm oder yarn
- Git

### Installation

```bash
# Repository klonen
git clone https://github.com/your-repo/solaplayer.git
cd solaplayer

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

### Project Structure

```
solaplayer/
├── src/
│   ├── components/          # React Components
│   │   ├── VideoPlayer.tsx  # Main Player Component
│   │   ├── PlayerContainer.tsx
│   │   ├── PlayerControls.tsx
│   │   ├── PlayerSidebar.tsx
│   │   ├── PlayerModals.tsx
│   │   └── icons/           # SVG Icon Components
│   ├── hooks/               # Custom Hooks
│   │   ├── usePlayerState.ts
│   │   ├── usePlayerControls.ts
│   │   └── useAccessibility.ts
│   ├── types/               # TypeScript Types
│   │   └── player.ts
│   ├── utils/               # Utility Functions
│   │   ├── webvtt.ts
│   │   ├── time.ts
│   │   └── youtube.ts
│   └── styles/              # CSS Modules
├── docs/                    # Documentation
├── tests/                   # Test Files
└── public/                  # Static Assets
```

## Component Architecture

### Component Hierarchy

```tsx
VideoPlayer
└── PlayerProvider (Context)
    └── PlayerContainer
        ├── VideoElement / YouTubePlayer / VimeoPlayer
        ├── PlayerControls
        │   ├── ProgressBar
        │   ├── VolumeControl
        │   ├── SpeedControl
        │   └── QualityControl
        ├── PlayerSidebar
        │   ├── TranscriptPanel
        │   └── ChaptersPanel
        └── PlayerModals
            ├── SettingsModal
            └── InfoModal
```

### State Management

```tsx
// Context Provider
const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const playerState = usePlayerState();
  const playerControls = usePlayerControls(playerState);
  
  return (
    <PlayerContext.Provider value={{ playerState, playerControls }}>
      {children}
    </PlayerContext.Provider>
  );
};

// Hook Usage
const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
};
```

## Custom Hooks

### usePlayerState

Zentrales State Management für alle Player-Eigenschaften.

```tsx
export const usePlayerState = () => {
  // Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  
  // UI State
  const [controlsVisible, setControlsVisible] = useState(true);
  const [showCC, setShowCC] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  
  // Auto-hide Controls
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isPlaying && controlsVisible) {
      timeoutId = setTimeout(() => {
        setControlsVisible(false);
      }, 3000);
    }
    
    return () => clearTimeout(timeoutId);
  }, [isPlaying, controlsVisible]);
  
  return {
    // State
    isPlaying, currentTime, duration, volume, isMuted,
    controlsVisible, showCC, showTranscript,
    
    // Setters
    setIsPlaying, setCurrentTime, setDuration, setVolume,
    setIsMuted, setControlsVisible, setShowCC, setShowTranscript
  };
};
```

### usePlayerControls

Control Functions für verschiedene Player-Typen.

```tsx
export const usePlayerControls = (playerState: PlayerState) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const youtubePlayerRef = useRef<any>(null);
  const vimeoPlayerRef = useRef<any>(null);
  
  // Generic Controls
  const handlePlay = useCallback(() => {
    switch (playerState.playerType) {
      case 'video':
        videoRef.current?.play();
        break;
      case 'youtube':
        youtubePlayerRef.current?.playVideo();
        break;
      case 'vimeo':
        vimeoPlayerRef.current?.play();
        break;
    }
  }, [playerState.playerType]);
  
  const handlePause = useCallback(() => {
    switch (playerState.playerType) {
      case 'video':
        videoRef.current?.pause();
        break;
      case 'youtube':
        youtubePlayerRef.current?.pauseVideo();
        break;
      case 'vimeo':
        vimeoPlayerRef.current?.pause();
        break;
    }
  }, [playerState.playerType]);
  
  const handleSeek = useCallback((time: number) => {
    switch (playerState.playerType) {
      case 'video':
        if (videoRef.current) {
          videoRef.current.currentTime = time;
        }
        break;
      case 'youtube':
        youtubePlayerRef.current?.seekTo(time);
        break;
      case 'vimeo':
        vimeoPlayerRef.current?.setCurrentTime(time);
        break;
    }
  }, [playerState.playerType]);
  
  return {
    videoRef,
    youtubePlayerRef,
    vimeoPlayerRef,
    handlePlay,
    handlePause,
    handleSeek,
    // ... more controls
  };
};
```

### useAccessibility

Accessibility Features und Keyboard Navigation.

```tsx
export const useAccessibility = (playerState: PlayerState, playerControls: PlayerControls) => {
  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent default browser behavior for media keys
      if (['Space', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.code)) {
        event.preventDefault();
      }
      
      switch (event.code) {
        case 'Space':
          playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
          break;
        case 'ArrowLeft':
          playerControls.handleSeek(Math.max(0, playerState.currentTime - 10));
          break;
        case 'ArrowRight':
          playerControls.handleSeek(playerState.currentTime + 10);
          break;
        case 'ArrowUp':
          playerControls.handleVolumeChange(Math.min(1, playerState.volume + 0.1));
          break;
        case 'ArrowDown':
          playerControls.handleVolumeChange(Math.max(0, playerState.volume - 0.1));
          break;
        case 'KeyM':
          playerControls.handleMuteToggle();
          break;
        case 'KeyF':
          playerControls.handleFullscreen();
          break;
        case 'KeyC':
          playerState.setShowCC(!playerState.showCC);
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [playerState, playerControls]);
  
  // Screen Reader Announcements
  const announceChange = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, []);
  
  return { announceChange };
};
```

## YouTube Integration

### YouTube Player API

```tsx
import { YouTubePlayerAPI } from '@/utils/youtube';

export const useYouTubePlayer = (containerId: string, videoId: string) => {
  const [player, setPlayer] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Load YouTube API
    const loadYouTubeAPI = () => {
      if (window.YT) {
        initializePlayer();
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.onload = () => {
        window.onYouTubeIframeAPIReady = initializePlayer;
      };
      document.head.appendChild(script);
    };
    
    const initializePlayer = () => {
      const ytPlayer = new window.YT.Player(containerId, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: () => {
            setPlayer(ytPlayer);
            setIsReady(true);
          },
          onStateChange: handleStateChange,
          onPlaybackRateChange: handleRateChange,
          onError: handleError
        }
      });
    };
    
    loadYouTubeAPI();
  }, [containerId, videoId]);
  
  const handleStateChange = (event: any) => {
    const state = event.data;
    switch (state) {
      case window.YT.PlayerState.PLAYING:
        playerState.setIsPlaying(true);
        break;
      case window.YT.PlayerState.PAUSED:
        playerState.setIsPlaying(false);
        break;
      case window.YT.PlayerState.ENDED:
        playerState.setIsPlaying(false);
        break;
    }
  };
  
  return { player, isReady };
};
```

## Vimeo Integration

### Vimeo Player API

```tsx
import Player from '@vimeo/player';

export const useVimeoPlayer = (containerId: string, videoId: string) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    const vimeoPlayer = new Player(containerId, {
      id: videoId,
      controls: false,
      keyboard: false,
      title: false,
      portrait: false,
      byline: false
    });
    
    vimeoPlayer.ready().then(() => {
      setPlayer(vimeoPlayer);
      setIsReady(true);
      
      // Event Listeners
      vimeoPlayer.on('play', () => playerState.setIsPlaying(true));
      vimeoPlayer.on('pause', () => playerState.setIsPlaying(false));
      vimeoPlayer.on('ended', () => playerState.setIsPlaying(false));
      vimeoPlayer.on('timeupdate', (data) => {
        playerState.setCurrentTime(data.seconds);
      });
      vimeoPlayer.on('loaded', (data) => {
        playerState.setDuration(data.duration);
      });
    });
    
    return () => {
      vimeoPlayer.destroy();
    };
  }, [containerId, videoId]);
  
  return { player, isReady };
};
```

## WebVTT Processing

### Caption Parsing

```tsx
export const parseWebVTT = async (url: string): Promise<TextTrackCue[]> => {
  try {
    const response = await fetch(url);
    const text = await response.text();
    
    const cues: TextTrackCue[] = [];
    const lines = text.split('\n');
    let i = 0;
    
    // Skip WEBVTT header
    while (i < lines.length && !lines[i].includes('-->')) {
      i++;
    }
    
    while (i < lines.length) {
      const timeLine = lines[i];
      if (timeLine.includes('-->')) {
        const [startTime, endTime] = timeLine.split('-->').map(t => parseTime(t.trim()));
        i++;
        
        let text = '';
        while (i < lines.length && lines[i].trim() !== '') {
          text += lines[i] + '\n';
          i++;
        }
        
        const cue = new VTTCue(startTime, endTime, text.trim());
        cues.push(cue);
      }
      i++;
    }
    
    return cues;
  } catch (error) {
    console.error('Error parsing WebVTT:', error);
    return [];
  }
};

const parseTime = (timeString: string): number => {
  const parts = timeString.split(':');
  const seconds = parseFloat(parts.pop() || '0');
  const minutes = parseInt(parts.pop() || '0');
  const hours = parseInt(parts.pop() || '0');
  
  return hours * 3600 + minutes * 60 + seconds;
};
```

## Testing

### Unit Tests

```tsx
// PlayerControls.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { PlayerControls } from '../PlayerControls';

describe('PlayerControls', () => {
  const mockPlayerState = {
    isPlaying: false,
    volume: 0.5,
    currentTime: 30,
    duration: 120
  };
  
  const mockPlayerControls = {
    handlePlay: jest.fn(),
    handlePause: jest.fn(),
    handleVolumeChange: jest.fn()
  };
  
  it('should toggle play/pause on button click', () => {
    render(
      <PlayerControls 
        playerState={mockPlayerState} 
        playerControls={mockPlayerControls}
      />
    );
    
    const playButton = screen.getByRole('button', { name: /abspielen/i });
    fireEvent.click(playButton);
    
    expect(mockPlayerControls.handlePlay).toHaveBeenCalled();
  });
  
  it('should update volume on slider change', () => {
    render(
      <PlayerControls 
        playerState={mockPlayerState} 
        playerControls={mockPlayerControls}
      />
    );
    
    const volumeSlider = screen.getByRole('slider', { name: /lautstärke/i });
    fireEvent.change(volumeSlider, { target: { value: '0.8' } });
    
    expect(mockPlayerControls.handleVolumeChange).toHaveBeenCalledWith(0.8);
  });
});
```

### Integration Tests

```tsx
// VideoPlayer.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { VideoPlayer } from '../VideoPlayer';

describe('VideoPlayer Integration', () => {
  it('should load video and show controls', async () => {
    render(
      <VideoPlayer
        src="/test-video.mp4"
        controlsType="full"
        hasCC={true}
      />
    );
    
    // Video should be present
    const video = screen.getByRole('application', { name: /video-player/i });
    expect(video).toBeInTheDocument();
    
    // Controls should be visible
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /abspielen/i })).toBeVisible();
    });
    
    // CC button should be present when hasCC is true
    expect(screen.getByRole('button', { name: /untertitel/i })).toBeInTheDocument();
  });
});
```

### E2E Tests (Playwright)

```typescript
// e2e/player.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Video Player', () => {
  test('should play video and show captions', async ({ page }) => {
    await page.goto('/player-demo');
    
    // Start video
    await page.click('[data-testid="play-button"]');
    
    // Video should start playing
    await expect(page.locator('video')).toHaveAttribute('paused', 'false');
    
    // Enable captions
    await page.click('[data-testid="cc-button"]');
    
    // Captions should appear
    await expect(page.locator('[data-testid="captions"]')).toBeVisible();
    
    // Test keyboard navigation
    await page.keyboard.press('Space'); // Pause
    await expect(page.locator('video')).toHaveAttribute('paused', 'true');
    
    await page.keyboard.press('ArrowRight'); // Seek forward
    // Check if time has advanced
  });
  
  test('should be accessible with screen reader', async ({ page }) => {
    await page.goto('/player-demo');
    
    // Check ARIA labels
    await expect(page.locator('[role="application"]')).toHaveAttribute('aria-label', 'Video-Player');
    
    // Test tab navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toHaveAttribute('aria-label', /abspielen/i);
  });
});
```

## Build & Deployment

### Build Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:e2e": "playwright test",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true next build"
  }
}
```

### Environment Configuration

```bash
# .env.local
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key
NEXT_PUBLIC_VIMEO_ACCESS_TOKEN=your_vimeo_token
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Performance Optimization

```tsx
// Dynamic Imports
const YouTubePlayer = dynamic(() => import('./YouTubePlayer'), {
  loading: () => <div>Loading YouTube Player...</div>,
  ssr: false
});

const VimeoPlayer = dynamic(() => import('./VimeoPlayer'), {
  loading: () => <div>Loading Vimeo Player...</div>,
  ssr: false
});

// Lazy Loading
const PlayerSidebar = lazy(() => import('./PlayerSidebar'));
const PlayerModals = lazy(() => import('./PlayerModals'));
```

## Coding Standards

### TypeScript Guidelines

```tsx
// Use strict types
interface PlayerProps {
  src: string;
  autoPlay?: boolean;
  onPlay?: () => void;
}

// Use proper generics
interface UsePlayerReturn<T> {
  player: T | null;
  isReady: boolean;
}

// Use discriminated unions for player types
type PlayerType = 
  | { type: 'video'; src: string }
  | { type: 'youtube'; videoId: string }
  | { type: 'vimeo'; videoId: string };
```

### CSS Guidelines

```css
/* Use CSS Custom Properties */
.player-controls {
  --control-height: 48px;
  --control-spacing: 8px;
  --primary-color: #4a9eff;
}

/* Use logical properties */
.sidebar {
  margin-inline-start: var(--control-spacing);
  padding-block: var(--control-spacing);
}

/* Use container queries when available */
@container player (max-width: 768px) {
  .controls-row {
    flex-direction: column;
  }
}
```

### Component Guidelines

1. **Single Responsibility**: Jede Komponente hat einen klaren Zweck
2. **Composition over Inheritance**: Nutze Composition Pattern
3. **Props Interface**: Definiere klare Interfaces für Props
4. **Default Props**: Stelle sinnvolle Defaults bereit
5. **Error Boundaries**: Implementiere Error Handling
6. **Accessibility**: Berücksichtige A11y von Anfang an