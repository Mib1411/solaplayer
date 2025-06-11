# Accessibility Guide - SolaPlayer

## Übersicht

Der SolaPlayer wurde von Grund auf für Barrierefreiheit entwickelt und erfüllt WCAG 2.1 AA Standards. Diese Anleitung erklärt alle verfügbaren Accessibility-Features und deren Implementierung.

## Tastaturnavigation

### Globale Shortcuts

| Taste | Aktion | Beschreibung |
|-------|--------|--------------|
| `Space` | Play/Pause | Startet oder pausiert die Wiedergabe |
| `←` | Zurückspulen | 10 Sekunden zurück |
| `→` | Vorspulen | 10 Sekunden vor |
| `↑` | Lautstärke + | Erhöht die Lautstärke um 10% |
| `↓` | Lautstärke - | Verringert die Lautstärke um 10% |
| `M` | Stumm | Schaltet den Ton stumm/an |
| `F` | Vollbild | Wechselt in/aus Vollbildmodus |
| `P` | Picture-in-Picture | Aktiviert PiP-Modus |
| `C` | Untertitel | Schaltet Untertitel ein/aus |
| `T` | Transkript | Öffnet/schließt Transkript |
| `H` | Kapitel | Öffnet/schließt Kapitel-Navigation |
| `I` | Info | Öffnet Info-Panel |
| `S` | Einstellungen | Öffnet Einstellungs-Modal |
| `Esc` | Schließen | Schließt Modals/Vollbild |

### Tab-Navigation

Der Player unterstützt vollständige Tab-Navigation:

1. **Play/Pause Button** - Hauptsteuerung
2. **Volume Control** - Lautstärke-Slider
3. **Progress Bar** - Zeitnavigation
4. **Speed Control** - Geschwindigkeits-Dropdown
5. **Quality Control** - Qualitäts-Dropdown
6. **CC Button** - Untertitel-Toggle
7. **Transcript Button** - Transkript-Toggle
8. **Chapters Button** - Kapitel-Toggle
9. **Settings Button** - Einstellungen
10. **Fullscreen Button** - Vollbild
11. **PiP Button** - Picture-in-Picture

### Focus Management

```tsx
// Focus wird automatisch verwaltet
const manageFocus = () => {
  // Bei Modal-Öffnung
  if (modalOpen) {
    // Focus auf erstes Element im Modal
    modalRef.current?.querySelector('button')?.focus();
  }
  
  // Bei Modal-Schließung
  else {
    // Focus zurück auf Trigger-Element
    triggerRef.current?.focus();
  }
};
```

## Untertitel (Closed Captions)

### WebVTT Format

```vtt
WEBVTT
KIND: captions
LANGUAGE: de

NOTE
Deutsche Untertitel für SolaPlayer

00:00:00.000 --> 00:00:03.000
Willkommen beim barrierefreien Video-Player.

00:00:03.000 --> 00:00:06.000
Dieser Player unterstützt Screenreader und Tastaturnavigation.

00:00:06.000 --> 00:00:09.000
[Musik spielt im Hintergrund]

00:00:09.000 --> 00:00:12.000
<v Sprecher>Jetzt beginnt die Demonstration der Features.</v>
```

### Anpassbare Untertitel

```tsx
// Untertitel-Styling über playerState
const customizeCaptions = () => {
  playerState.captionColor = '#ffffff';          // Textfarbe
  playerState.captionSize = 18;                  // Schriftgröße
  playerState.captionBackground = 'rgba(0,0,0,0.8)';  // Hintergrund
  playerState.captionPosition = 'bottom';        // Position
  playerState.captionFont = 'Arial';             // Schriftart
};
```

### CC-Einstellungen

```tsx
interface CaptionSettings {
  enabled: boolean;
  fontSize: number;          // 12-32px
  fontFamily: string;        // Arial, Georgia, etc.
  color: string;            // Hex-Farbe
  backgroundColor: string;   // Rgba-Wert
  opacity: number;          // 0-1
  position: 'top' | 'bottom';
  outline: boolean;         // Text-Umrandung
}
```

## Audiodeskription

### Audio Description Tracks

```vtt
WEBVTT
KIND: descriptions
LANGUAGE: de

NOTE
Audiodeskription für sehbehinderte Nutzer

00:00:05.000 --> 00:00:08.000
Ein Mann in blauem Anzug betritt von links das moderne Büro.

00:00:12.000 --> 00:00:15.000
Er geht zum Fenster und blickt auf die Stadtlandschaft hinaus.

00:00:20.000 --> 00:00:23.000
Auf dem Schreibtisch stehen ein Computer und ein Foto seiner Familie.
```

### Implementierung

```tsx
const loadAudioDescription = async (src: string) => {
  try {
    const track = document.createElement('track');
    track.kind = 'descriptions';
    track.src = src;
    track.srcLang = 'de';
    track.label = 'Audiodeskription';
    
    videoRef.current?.appendChild(track);
    
    track.addEventListener('load', () => {
      const textTrack = track.track;
      textTrack.mode = 'showing';
      
      // Audio Description aktivieren
      playerState.setAudioDescActive(true);
    });
  } catch (error) {
    console.error('Audio Description konnte nicht geladen werden:', error);
  }
};
```

## Transkript

### Vollständige Textversion

Das Transkript bietet eine vollständige, durchsuchbare Textversion des Videos:

```tsx
interface TranscriptEntry {
  startTime: number;
  endTime: number;
  speaker?: string;
  text: string;
  type: 'speech' | 'sound' | 'music';
}

const transcript: TranscriptEntry[] = [
  {
    startTime: 0,
    endTime: 3,
    speaker: "Moderator",
    text: "Willkommen zur Präsentation des SolaPlayers.",
    type: "speech"
  },
  {
    startTime: 3,
    endTime: 6,
    text: "[Hintergrundmusik beginnt]",
    type: "music"
  }
];
```

### Transkript-Features

- **Auto-Scroll**: Automatisches Scrollen zum aktuellen Zeitpunkt
- **Click-Navigation**: Klick auf Text springt zur entsprechenden Zeit
- **Suche**: Volltext-Suche im Transkript
- **Hervorhebung**: Aktueller Text wird hervorgehoben
- **Sprecher-Kennzeichnung**: Verschiedene Sprecher werden unterschieden

## Kapitel-Navigation

### Chapter-Struktur

```vtt
WEBVTT
KIND: chapters
LANGUAGE: de

Chapter 1
00:00:00.000 --> 00:02:30.000
Einführung und Überblick

Chapter 2
00:02:30.000 --> 00:05:00.000
Accessibility Features

Chapter 3
00:05:00.000 --> 00:07:30.000
Tastaturnavigation

Chapter 4
00:07:30.000 --> 00:10:00.000
Untertitel und Audiodeskription
```

### Navigation

```tsx
const ChapterNavigation = () => {
  return (
    <nav aria-label="Video-Kapitel">
      <ol>
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <button
              onClick={() => handleChapterClick(chapter.startTime)}
              aria-current={currentChapter === index ? 'true' : 'false'}
              className={currentChapter === index ? 'active' : ''}
            >
              <span className="chapter-title">{chapter.title}</span>
              <span className="chapter-time">
                {formatTime(chapter.startTime)} - {formatTime(chapter.endTime)}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};
```

## Screenreader-Unterstützung

### ARIA-Labels und Rollen

```tsx
// Player Container
<div
  role="application"
  aria-label="Video-Player"
  aria-describedby="player-instructions"
>
  {/* Video Element */}
  <video
    aria-label={`Video: ${videoTitle}`}
    aria-describedby="video-description"
  />
  
  {/* Controls */}
  <div role="toolbar" aria-label="Player-Steuerung">
    <button
      aria-label={isPlaying ? 'Pausieren' : 'Abspielen'}
      aria-pressed={isPlaying}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
    
    <input
      type="range"
      role="slider"
      aria-label="Video-Fortschritt"
      aria-valuemin={0}
      aria-valuemax={duration}
      aria-valuenow={currentTime}
      aria-valuetext={`${formatTime(currentTime)} von ${formatTime(duration)}`}
    />
  </div>
</div>
```

### Live-Ankündigungen

```tsx
const announceStateChanges = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Verwendung
announceStateChanges('Video pausiert');
announceStateChanges('Untertitel aktiviert');
announceStateChanges('Kapitel 2: Accessibility Features');
```

## Farbkontrast und Sichtbarkeit

### Kontrast-Standards

Alle UI-Elemente erfüllen WCAG 2.1 AA Kontrast-Anforderungen:

```css
/* Mindest-Kontrast 4.5:1 für normalen Text */
.player-button {
  color: #ffffff;           /* Weiß */
  background: #1a1a1a;      /* Dunkelgrau */
  /* Kontrast: 15.3:1 */
}

/* Mindest-Kontrast 3:1 für große Texte */
.player-title {
  color: #e0e0e0;           /* Hellgrau */
  background: #000000;      /* Schwarz */
  /* Kontrast: 12.6:1 */
}
```

### High Contrast Modus

```css
@media (prefers-contrast: high) {
  .player-controls {
    border: 2px solid currentColor;
    background: CanvasText;
    color: Canvas;
  }
  
  .player-button:focus {
    outline: 3px solid Highlight;
    outline-offset: 2px;
  }
}
```

## Reduced Motion

### Animation-Einstellungen

```css
@media (prefers-reduced-motion: reduce) {
  .player-controls,
  .modal-overlay,
  .sidebar-panel {
    transition: none !important;
    animation: none !important;
  }
  
  .progress-bar {
    transition: width 0.1s linear; /* Minimal für Usability */
  }
}
```

### JavaScript-Integration

```tsx
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
};
```

## Testing

### Automated Accessibility Testing

```bash
# Jest + Testing Library
npm test -- --testNamePattern="accessibility"

# Playwright + axe-core
npx playwright test accessibility.spec.ts
```

### Manual Testing Checklist

- [ ] **Tastatur-Navigation**: Alle Funktionen mit Tab/Shift+Tab/Enter/Space erreichbar
- [ ] **Screenreader**: NVDA/JAWS/VoiceOver lesen alle Elemente korrekt vor
- [ ] **Kontrast**: Alle Texte haben ausreichenden Kontrast
- [ ] **Zoom**: UI funktioniert bis 200% Zoom
- [ ] **Reduced Motion**: Animationen respektieren User-Präferenzen
- [ ] **Focus Management**: Focus ist immer sichtbar und logisch
- [ ] **Live Regions**: Statusänderungen werden angekündigt

### Accessibility Test Script

```javascript
// Axe-Core Integration
import { axe } from '@axe-core/playwright';

test('Player should be fully accessible', async ({ page }) => {
  await page.goto('/player');
  
  // Lade Player
  await page.click('[data-testid="play-button"]');
  await page.waitForSelector('video');
  
  // Teste Accessibility
  const results = await axe(page);
  expect(results.violations).toEqual([]);
  
  // Teste Tastatur-Navigation
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter'); // Play/Pause
  await page.keyboard.press('Tab');
  await page.keyboard.press('ArrowRight'); // Volume up
  
  // Teste Screenreader-Labels
  const playButton = page.locator('[aria-label="Abspielen"]');
  await expect(playButton).toBeVisible();
});
```

## Best Practices

### Implementierung

1. **Semantic HTML**: Verwende semantische Elemente (`<button>`, `<input>`, `<nav>`)
2. **ARIA-Labels**: Füge beschreibende Labels hinzu
3. **Focus Management**: Verwalte Focus bei Interaktionen
4. **Live Regions**: Kündige wichtige Änderungen an
5. **Keyboard Support**: Implementiere alle Funktionen über Tastatur

### Testing

1. **Automated Tests**: Nutze axe-core für automatisierte Tests
2. **Manual Testing**: Teste regelmäßig mit echten Screenreadern
3. **User Testing**: Beziehe Menschen mit Behinderungen ein
4. **Continuous Monitoring**: Überwache Accessibility in CI/CD

### Content Guidelines

1. **Alt-Texte**: Beschreibe visuelle Inhalte aussagekräftig
2. **Captions**: Stelle vollständige und genaue Untertitel bereit
3. **Audio Descriptions**: Beschreibe wichtige visuelle Informationen
4. **Clear Language**: Verwende klare, verständliche Sprache