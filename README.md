# SOLA Video Player 

Ein vollständig WCAG 2.1 konformer, barrierefreier Video-Player für React/Next.js mit fortgeschrittenen Accessibility-Features.

## 🎯 Features

### 🌟 **Dual-Mode Architektur**
- **`minimal`** - Kompakter Player für content-reiche Umgebungen
- **`full`** - Vollständiger Player mit allen Accessibility-Features

### ♿ **WCAG 2.1 Konformität**
- Vollständige Tastaturnavigation
- Screen Reader Unterstützung  
- Audiodeskription (TTS + Audio-Track)
- Anpassbare Untertitel
- High Contrast Mode
- Reduced Motion Support

### 🎮 **Player Modi**

#### **Minimal Mode** (`playerMode="minimal"`)
- Optimiert für Video-Grids, Slider und content-reiche Seiten
- Nur essenzielle Controls (Play/Pause, Mute, Link)
- Kleinere Bundle-Size durch conditional imports
- Link-Button für Popup oder Single-Page Öffnung

#### **Full Mode** (`playerMode="full"`)  
- Vollständige Player-Features
- Transkript & Kapitel-Navigation
- Einstellungen & Audiodeskription
- Barrierefreiheits-Features

## 🚀 Schnellstart

### Basic Usage

```tsx
import WcagPlayer from '@/components/WcagPlayer';

// Minimal Mode für Video-Listen
<WcagPlayer 
  mp4="video.mp4"
  poster="poster.jpg"
  playerMode="minimal"
  videoId="unique-id"
  onVideoOpen={handleVideoOpen}
/>

// Full Mode für einzelne Videos
<WcagPlayer 
  mp4="video.mp4"
  captions="captions.vtt"
  chapters="chapters.vtt" 
  description="description.vtt"
  playerMode="full"
/>
```

### Video-Öffnung implementieren

```tsx
const handleVideoOpen = (videoId: string, mode: 'popup' | 'page', videoData?: VideoData) => {
  if (mode === 'popup') {
    // Popup mit Full-Player öffnen
    setPopupVideo({ videoId, ...videoData });
  } else {
    // Zu Single-Page navigieren
    router.push(`/videos/${videoId}`);
  }
};
```

### Single Video Page

```tsx
// pages/videos/[id].tsx
export default function VideoPage({ videoData }) {
  return (
    <WcagPlayer 
      {...videoData}
      playerMode="full"
    />
  );
}
```

## 📋 API Reference

### WcagPlayer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `playerMode` | `'minimal' \| 'full'` | `'minimal'` | Player-Modus |
| `mp4` | `string \| string[]` | - | MP4 Video-Quellen |
| `webm` | `string \| string[]` | - | WebM Video-Quellen |
| `youtube` | `string` | - | YouTube Video-ID |
| `vimeo` | `string` | - | Vimeo Video-ID |
| `poster` | `string` | - | Poster-Bild |
| `captions` | `string` | - | VTT Untertitel-Datei |
| `description` | `string` | - | VTT Audiodeskriptions-Datei |
| `chapters` | `string` | - | VTT Kapitel-Datei |
| `videoId` | `string` | - | Eindeutige Video-ID für Routing |
| `title` | `string` | - | Video-Titel |
| `onVideoOpen` | `function` | - | Callback für Video-Öffnung |
| `link` | `string` | - | External Link (nur minimal) |
| `autoplay` | `boolean` | `false` | Automatische Wiedergabe |
| `muted` | `boolean` | `false` | Stumm geschaltet |

## 🏗️ Architektur

### Component-Struktur

```
WcagPlayer (Haupt-Component)
├── PlayerProvider (Context)
├── PlayerContainer (UI-Container)
├── PlayerControls (Minimal/Full)
└── Sidebars & Modals (nur Full)
    ├── TranscriptSidebar
    ├── ChaptersSidebar  
    ├── SettingsModal
    └── InfoModal
```

### Hook-System

```
useMediaPlayer     → Core Player State
usePlayerUI        → UI State Management  
useVideoSources    → Video Source Logic
usePlayerControls  → Control Actions (Full)
usePlayerControlsMinimal → Control Actions (Minimal)
```

## ⚡ Performance

### Bundle Optimization

- **Minimal Mode**: ~40% kleinere Bundle-Size
- **Conditional Imports**: Nur benötigte Features laden
- **Tree Shaking**: Ungenutzte Components werden entfernt
- **Lazy Loading**: Schwere Komponenten bei Bedarf laden

### Loading Strategy

```tsx
// Automatische Optimierung basierend auf playerMode
playerMode === 'minimal' 
  ? import('./usePlayerControlsMinimal')  // Leichtgewichtig
  : import('./usePlayerControls')         // Vollständig
```
