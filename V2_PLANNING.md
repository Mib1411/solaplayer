# WCAG Player - Modulare Architektur

## 📋 Aktueller Stand & Probleme

### Aktuelle Probleme:
- `usePlayerControls.ts` ist **monolithisch** und enthält alles
- **Keine modulare Feature-Struktur**
- Alle Features werden **immer geladen**, auch wenn nicht benötigt
- Player-spezifische Logik ist **vermischt** (YouTube, Vimeo, HTML5)
- UI-Logik ist in Control-Hooks statt in UI-Hooks
- Keine Konfigurationsmöglichkeit für Features

### Beispiel aktueller Code:
```typescript
// usePlayerControls.ts - PROBLEMATISCH
const handleSeek = useCallback((time: number) => {
  if (videoSources.playerType === 'youtube' && youtubePlayer) {
    youtubePlayer.seekTo(time);  // YouTube API
  } else if (videoSources.playerType === 'vimeo' && vimeoPlayer) {
    vimeoPlayer.setCurrentTime(time);  // Vimeo API
  } else if (videoRef?.current) {
    videoRef.current.currentTime = time;  // HTML5 API
  }
}, []);
```

---

## ⚙️ Configuration System

### Player Modi

#### Base Mode
- **Ziel**: Einfache Kontrollen ohne Sidebars/Modals
- **Features**: Alles was **inline** funktioniert
- **Plus**: Link-Button für erweiterten Player

#### Extended Mode  
- **Ziel**: Vollständige Funktionalität
- **Features**: Alle Features inkl. Sidebars & Modals

### Configuration Interface

```typescript
interface PlayerConfig {
  core: {
    base: boolean;         // Base Mode aktiviert
    extended: boolean;     // Extended Mode aktiviert
    videoTypes: {
      mp4: boolean;
      webm: boolean;
      youtube: boolean;
      vimeo: boolean;
      bundestag: boolean;
    };
  };
  
  base: {
    settings: {
      playOnThumbnail: boolean;
      hideControls: boolean;
      autoHideControls: boolean;
      showProgress: boolean;
      showExtendedButton: boolean;     // Link zu Extended Player
      extendedButtonMode: 'link' | 'popup' | 'both';  // Wo Extended Button hinführt           
    };
    features: {
      // Inline Features (alle deaktivierbar in Base Mode)
      playPause: boolean;
      mute: boolean;
      volume: boolean;             
      seek: boolean;
      skipBackward: boolean;       
      skipForward: boolean;        
      returnToStart: boolean;      
      speed: boolean;
      quality: boolean;
      fullscreen: boolean;
      pip: boolean;
      captions: boolean;           // Video Overlay Feature
      audioDescription: boolean;  
    };
  };
  
  extended: {
    settings: {
      playOnThumbnail: boolean;
      hideControls: boolean;
      autoHideControls: boolean;
      showProgress: boolean;
    };
    features: {
      // Alle Inline Features (deaktivierbar)
      playPause: boolean;
      mute: boolean;
      volume: boolean;
      seek: boolean;
      skipBackward: boolean;
      skipForward: boolean;
      returnToStart: boolean;
      speed: boolean;
      quality: boolean;
      fullscreen: boolean;
      pip: boolean;
      captions: boolean;           // Video Overlay Feature
      audioDescription: boolean;  
      
      // Sidebar Features (nur Extended Mode, deaktivierbar)
      chapters: boolean;           
      transcript: boolean;         
      
      // Modal Features (nur Extended Mode, deaktivierbar)
      settings: boolean;           
      info: boolean;              
    };
    
    // Feature-spezifische Konfigurationen, werden im Settings Modal angezeigt wenn aktiviert, ansosten wird Default config benutzt
    featureConfigs: {
      transcript: {
        timeBasedView: boolean;
        showFullTranscript: boolean;
        autoScroll: boolean;
      };
      captions: {
        fontSize: 'small' | 'medium' | 'large' | 'xlarge';
        fontColor: 'white' | 'yellow' | 'green' | 'cyan';
        backgroundColor: 'black' | 'darkgray' | 'transparent';
      };
      audioDescription: {
        mode: 'tts' | 'audio' | 'sign';
        tts: {
            autoStart: boolean;
            autoStop: boolean;
            pitch: number;
            selectedVoice: string;
        }
      };
    };
  };
}
```

### IMMER AKTIVE Features (nicht in Config):

```typescript
// Diese Features sind IMMER aktiv für WCAG-Konformität:
const ALWAYS_ACTIVE_FEATURES = {
  poster: true,                    // Poster/Thumbnail Support
  loading: true,                   // Loading Overlay
  keyboardNavigation: true,        // WCAG AA Requirement
  screenReaderAnnouncements: true, // WCAG AA Requirement
};

// Diese werden automatisch geladen und können NICHT deaktiviert werden!
```

---

## 🏗️ Geplante Neue Architektur

### 1. Ordner-Struktur - KORRIGIERT & AUSGEBAUT

```
src-v2/                   # NEUE VERSION
├── players/              # API-spezifische Wrapper & Extraktoren
│   ├── html5/
│   │   ├── Html5VideoPlayer.ts          // NEU: Native HTML5 Video 
│   │   ├── HTML5PlayerAdapter.ts
│   │   └── types.ts
│   ├── youtube/
│   │   ├── YouTubePlayerWrapper.ts
│   │   ├── youtubeExtractor.ts
│   │   ├── types.ts
│   │   └── constants.ts
│   ├── vimeo/
│   │   ├── VimeoPlayerWrapper.ts
│   │   ├── vimeoExtractor.ts
│   │   └── types.ts
│   └── bundestag/
│       ├── BundestagPlayerAdapter.ts
│       ├── bundestagExtractor.ts
│       └── types.ts
│
├── features/             # Modulare Features (nur DEAKTIVIERBARE Features!)
│   ├── playPause/
│   │   ├── hooks/
│   │   │   └── usePlayPause.ts
│   │   ├── components/
│   │   │   └── PlayPauseButton.tsx
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── seek/
│   │   ├── hooks/
│   │   │   └── useSeek.ts
│   │   ├── components/
│   │   │   └── SeekSlider.tsx
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── volume/
│   │   ├── hooks/
│   │   │   └── useVolume.ts
│   │   ├── components/
│   │   │   ├── VolumeButton.tsx
│   │   │   └── VolumeSlider.tsx
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── speed/
│   │   ├── hooks/
│   │   │   └── useSpeed.ts
│   │   ├── components/
│   │   │   ├── SpeedButton.tsx
│   │   │   └── SpeedDropdown.tsx
│   │   ├── constants/
│   │   │   ├── labels.ts
│   │   │   └── speeds.ts
│   │   └── index.ts
│   ├── quality/
│   │   ├── hooks/
│   │   │   └── useQuality.ts
│   │   ├── components/
│   │   │   ├── QualityButton.tsx
│   │   │   └── QualityDropdown.tsx
│   │   ├── constants/
│   │   │   ├── labels.ts
│   │   │   └── qualities.ts
│   │   └── index.ts
│   ├── navigation/       # Skip Features
│   │   ├── hooks/
│   │   │   └── useNavigation.ts
│   │   ├── components/
│   │   │   ├── SkipBackButton.tsx
│   │   │   ├── SkipForwardButton.tsx
│   │   │   └── ReturnToStartButton.tsx
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── fullscreen/
│   │   ├── hooks/
│   │   │   └── useFullscreen.ts
│   │   ├── components/
│   │   │   └── FullscreenButton.tsx
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── pip/
│   │   ├── hooks/
│   │   │   └── usePiP.ts
│   │   ├── components/
│   │   │   └── PiPButton.tsx
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── captions/         # Video Overlay Feature
│   │   ├── hooks/
│   │   │   ├── useCaptions.ts
│   │   │   └── useCaptionParser.ts
│   │   ├── components/
│   │   │   ├── CaptionsButton.tsx
│   │   │   └── CaptionsOverlay.tsx
│   │   ├── utils/
│   │   │   └── vttParser.ts
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── audioDescription/ # Button Feature (kein Modal!)
│   │   ├── hooks/
│   │   │   └── useAudioDescription.ts
│   │   ├── components/
│   │   │   └── AudioDescButton.tsx    # Nur Button!
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── transcript/       # Sidebar Feature
│   │   ├── hooks/
│   │   │   └── useTranscript.ts
│   │   ├── components/
│   │   │   ├── TranscriptButton.tsx
│   │   │   └── TranscriptSidebar.tsx
│   │   ├── utils/
│   │   │   ├── transcriptParser.ts
│   │   │   └── timeParser.ts
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── chapters/         # Sidebar Feature
│   │   ├── hooks/
│   │   │   └── useChapters.ts
│   │   ├── components/
│   │   │   ├── ChaptersButton.tsx
│   │   │   └── ChaptersSidebar.tsx
│   │   ├── utils/
│   │   │   ├── chapterParser.ts
│   │   │   └── timeParser.ts
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   ├── settings/         # Modal Feature
│   │   ├── hooks/
│   │   │   └── useSettings.ts
│   │   ├── components/
│   │   │   ├── SettingsButton.tsx
│   │   │   └── SettingsModal.tsx
│   │   ├── constants/
│   │   │   └── labels.ts
│   │   └── index.ts
│   └── info/            # Modal Feature
│       ├── hooks/
│       │   └── useInfo.ts
│       ├── components/
│       │   ├── InfoButton.tsx
│       │   └── InfoModal.tsx
│       ├── constants/
│       │   └── labels.ts
│       └── index.ts
│
├── core/                 # IMMER AKTIVE Core Features
│   ├── loading/         # IMMER aktiv - Loading Support
│   │   ├── components/
│   │   │   └── LoadingOverlay.tsx
│   │   └── index.ts
│   ├── keyboard/        # IMMER aktiv - WCAG Requirement!
│   │   ├── hooks/
│   │   │   └── useKeyboardNavigation.ts
│   │   └── index.ts
│   ├── accessibility/   # IMMER aktiv - WCAG Requirement!
│   │   ├── hooks/
│   │   │   └── useScreenReaderAnnouncements.ts
│   │   └── index.ts
│   ├── FeatureLoader.ts
│   ├── EventBus.ts
│   ├── PlayerRegistry.ts
│   ├── ConfigValidator.ts
│   └── PlayerProvider.tsx  # Provider + Context kombiniert
│
├── general/              # UI-Primitive & Styling
│   ├── areas/
│   │   ├── VideoArea/
│   │   │   ├── VideoArea.tsx
│   │   │   ├── VideoArea.css
│   │   │   └── index.ts
│   │   ├── ControlsArea/
│   │   │   ├── ControlsArea.tsx
│   │   │   ├── ControlsArea.css
│   │   │   └── index.ts
│   │   ├── SidebarArea/
│   │   │   ├── SidebarArea.tsx
│   │   │   ├── SidebarArea.css
│   │   │   └── index.ts
│   │   ├── ModalArea/
│   │   │   ├── ModalArea.tsx
│   │   │   ├── ModalArea.css
│   │   │   └── index.ts
│   │   └── PopupArea/
│   │       ├── PopupArea.tsx
│   │       ├── PopupArea.css
│   │       └── index.ts
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   └── index.ts
│   │   ├── Slider/
│   │   │   ├── Slider.tsx              # Für Progress, Volume, etc.
│   │   │   ├── Slider.css
│   │   │   └── index.ts
│   │   ├── Dropdown/
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Dropdown.css
│   │   │   └── index.ts
│   │   └── Modal/
│   │       ├── Modal.tsx
│   │       ├── Modal.css
│   │       └── index.ts
│   └── styles/
│       ├── variables.css
│       ├── base.css
│       └── animations.css
│
├── config/               # Feature-Konfiguration
│   ├── playerConfig.ts                 # PlayerConfig Interface
│   └── defaultConfigs.ts               # Alle Standard-Konfigurationen
│
├── types/                # TypeScript Definitionen
│   ├── player.ts
│   ├── features.ts
│   └── config.ts
│
└── components/           # Player-Komponenten
    ├── WcagPlayer.tsx                  # Haupt-Player-Komponente
    └── index.ts                        # Exports
```

### KORREKTUREN & KLARSTELLUNGEN:

#### 1. **constants/labels.ts für JEDES Feature mit UI:**
✅ Jedes Feature mit Button/UI hat jetzt `constants/labels.ts`

#### 2. **audioDescription ist KEIN Modal:**
```typescript
// audioDescription/components/AudioDescButton.tsx
// Nur ein Button der Audio Description aktiviert/deaktiviert
// KEIN Modal! Funktionalität läuft im Hintergrund
```

#### 3. **transcript/chapters brauchen utils:**
✅ Hinzugefügt:
- `transcriptParser.ts` - Parst Transcript-Daten
- `chapterParser.ts` - Parst Chapter-Daten  
- `timeParser.ts` - Zeit-Utilities (beiden gemeinsam)

#### 4. **List ENTFERNT aus general:**
✅ List war überflüssig - Chapters/Transcript verwenden normale div-Strukturen

#### 5. **baseConfig.ts/extendedConfig.ts ENTFERNT:**
✅ Alles in `defaultConfigs.ts` - keine Trennung nötig

#### 6. **BasePlayer/ExtendedPlayer ENTFERNT:**
```typescript
// Nur noch WcagPlayer.tsx - der entscheidet intern:
export const WcagPlayer = ({ config, ...props }) => {
  const isBaseMode = config.core.base && !config.core.extended;
  const isExtendedMode = config.core.extended;
  
  return (
    <div className={isBaseMode ? 'base-player' : 'extended-player'}>
      {/* Feature Loading basierend auf config */}
      {config.features.playPause && <PlayPauseFeature />}
      {isExtendedMode && config.features.chapters && <ChaptersFeature />}
    </div>
  );
};
```

**Ein Player - verschiedene Modi durch Config, nicht durch separate Komponenten!**

---

## 🔧 Technische Implementierung

### 1. Player Strategy Pattern

```typescript
interface PlayerAdapter {
  seek(time: number): void | Promise<void>;
  setVolume(volume: number): void | Promise<void>;
  play(): void | Promise<void>;
  pause(): void | Promise<void>;
  setPlaybackRate(rate: number): void | Promise<void>;
}

class HTML5PlayerAdapter implements PlayerAdapter {
  constructor(private videoRef: React.RefObject<HTMLVideoElement>) {}
  
  seek(time: number) { 
    this.videoRef.current.currentTime = time; 
  }
  
  setVolume(volume: number) { 
    this.videoRef.current.volume = volume; 
  }
}

class YouTubePlayerAdapter implements PlayerAdapter {
  constructor(private player: any) {}
  
  seek(time: number) { 
    this.player.seekTo(time); 
  }
  
  setVolume(volume: number) { 
    this.player.setVolume(volume * 100); // YouTube: 0-100
  }
}
```

### 2. Feature Loading System

```typescript
export class FeatureLoader {
  static async loadFeatures(config: PlayerConfig) {
    const features = new Map();
    
    // Base Features
    if (config.base?.features.playPause || config.extended?.features.playPause) {
      const playPause = await import('../features/playPause');
      features.set('playPause', playPause);
    }
    
    if (config.base?.features.volume || config.extended?.features.volume) {
      const volume = await import('../features/volume');
      features.set('volume', volume);
    }
    
    // Extended Features (nur wenn Extended Mode)
    if (config.extended?.features.chapters) {
      const chapters = await import('../features/chapters');
      features.set('chapters', chapters);
    }
    
    if (config.extended?.features.transcript) {
      const transcript = await import('../features/transcript');
      features.set('transcript', transcript);
    }
    
    return features;
  }
}
```

---

## 🎯 Vorteile der neuen Architektur

### ✅ **Modularität**
- Jedes Feature ist isoliert und optional
- Tree Shaking: Unbenutzte Features werden nicht geladen
- Kleinere Bundle-Größe

### ✅ **Flexibilität**  
- Base Mode ohne Sidebars/Modals für einfache Integration
- Extended Mode mit allen Accessibility-Features
- Features einzeln aktivierbar/deaktivierbar

### ✅ **Performance**
- Code Splitting auf Feature-Ebene
- Lazy Loading von nicht benötigten Features
- Optimierte Bundle-Größe

### ✅ **Wartbarkeit**
- Klare Separation of Concerns
- Jedes Feature testbar in Isolation
- Neue Features einfach hinzufügbar

---

## 📝 Nächste Schritte

1. **Ordner-Struktur erstellen** ✅ 
3. **Feature-Hooks aus usePlayerControls extrahieren**✅
4. **Config-System implementieren**  ✅
5. **Dynamic Feature Loading implementieren**
6. **UI-Components für modulare Features erstellen**✅
7. **Base/Extended Player-Modi implementieren**

---

## 💡 Beispiel - Wie es werden soll

```typescript
// Minimaler Base Player
const config = {
  base: {
    features: {
      playPause: true,
      volume: false,      // <- Volume komplett deaktiviert
      captions: false,    // <- Captions komplett deaktiviert  
      seek: true,
      fullscreen: true
    }
  }
};

// Ergebnis: Nur PlayPause, Seek, Fullscreen werden geladen
// Volume & Captions Code wird nie geladen -> Kleinere Bundle Size!
```

**Das ist die Vision: Ein modularer, konfigurierbarer und performanter Video Player mit optimaler Accessibility-Unterstützung.**

## Anwendungs Szenarios
### Ein Slider mit Videobeiträgen

In einem Slider will man so wenig zusätzliche FUnktionen wie möglich haben
Eigentlich nur das Thumbnail und den extendedButton, der dann die Videos im PopUp mit allen Access. Features spielt


### Contentpages mit TextMedia Komponenten

Ein Textbeitrag wird mit Videos ergänzt, die nebeneinader dargstellt werden, der Player läuft im Basemode, hat aber Features wie Captions und Audiodescription aktiviert, der extendedLink führt zu einer Video Singlepage, das ermöglicht einerseits Transkriptanzeige und SEO-Wertigkeit für den Videocontent