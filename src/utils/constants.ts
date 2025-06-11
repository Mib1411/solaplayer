// Player Configuration Constants
export const PLAYER_CONFIG = {
  CONTROLS_AUTO_HIDE_DELAY: 3000,
  SEEK_STEP: 10,
  VOLUME_STEP: 0.1,
  PLAYBACK_SPEEDS: [0.25, 0.5, 1, 1.5, 2],
  QUALITY_OPTIONS: ['auto', '1080p', '720p', '480p', '240p'],
  DEFAULT_VOLUME: 1,
  CONTROLS_TIMEOUT: 3000,
  KEYBOARD_SEEK_STEP: 5,

  // Caption Settings
  CAPTION_DEFAULTS: {
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'bottom',
    fontFamily: 'Arial'
  },
  
  // Player Dimensions
  PLAYER_SIZES: {
    minimal: { minHeight: 200 },
    full: { minHeight: 400 }
  },
  
  // Missing config - ADD THESE:
  SKIP_INTERVALS: {
    BACK: 10,
    FORWARD: 10,
    CHAPTER_BACK: 30,
    CHAPTER_FORWARD: 30
  },
  
  VOLUME: {
    DEFAULT: 1,
    STEP: 0.1,
    MIN: 0,
    MAX: 1
  },
  
  KEYBOARD: {
    SPACE: ' ',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ESCAPE: 'Escape',
    ENTER: 'Enter',
    F: 'f',
    M: 'm',
    K: 'k'
  }
} as const;

// Keyboard Shortcuts
export const KEYBOARD_SHORTCUTS = {
  PLAY_PAUSE: 'Space',
  SEEK_BACKWARD: 'ArrowLeft',
  SEEK_FORWARD: 'ArrowRight',
  VOLUME_UP: 'ArrowUp',
  VOLUME_DOWN: 'ArrowDown',
  MUTE_TOGGLE: 'KeyM',
  FULLSCREEN: 'KeyF',
  PICTURE_IN_PICTURE: 'KeyP',
  CAPTIONS_TOGGLE: 'KeyC',
  TRANSCRIPT_TOGGLE: 'KeyT',
  CHAPTERS_TOGGLE: 'KeyH',
  INFO_TOGGLE: 'KeyI',
  SETTINGS_TOGGLE: 'KeyS',  ESCAPE: 'Escape'
} as const;


// Player Labels
export const PLAYER_LABELS = {
  PLAY: 'Abspielen',
  PAUSE: 'Pausieren',
  LOADING: 'Lädt...',
  VOLUME: 'Lautstärke',
  MUTE: 'Stumm schalten',
  UNMUTE: 'Stumm aufheben',
  VOLUME_LEVEL: 'Lautstärke-Pegel',
  FULLSCREEN: 'Vollbild',
  CAPTIONS: 'Untertitel',
  TRANSCRIPT: 'Transkript',
  CHAPTERS: 'Kapitel',
  SETTINGS: 'Einstellungen',
  INFO: 'Informationen',
  CLOSE: 'Schließen',
  VIDEO_PLAYER: 'Video-Player',
  PLAYER_CONTROLS: 'Player-Steuerung',
  KEYBOARD_INSTRUCTIONS: 'Verwenden Sie die Leertaste zum Abspielen/Pausieren, Pfeiltasten zur Navigation',
  ANNOUNCE_PLAY: 'Wiedergabe gestartet',
  ANNOUNCE_PAUSE: 'Wiedergabe pausiert',
  ANNOUNCE_SEEK: 'Springe zu',
  ANNOUNCE_VOLUME_CHANGE: 'Lautstärke geändert auf',
  ANNOUNCE_FULLSCREEN_ENTER: 'Vollbild aktiviert',
  ANNOUNCE_FULLSCREEN_EXIT: 'Vollbild verlassen',
  ANNOUNCE_CAPTIONS_ON: 'Untertitel aktiviert',
  ANNOUNCE_CAPTIONS_OFF: 'Untertitel deaktiviert',
  OPEN_FULL_PLAYER: 'Vollständiger Player öffnen',
  OPEN_IN_POPUP: 'In Popup öffnen',
  OPEN_SINGLE_PAGE: 'Einzelseite öffnen',
  SEEK: 'Zeitposition ändern',
  RETURN_TO_START: 'Zum Anfang springen',
  SKIP_BACK: '10 Sekunden zurück',
  SKIP_FORWARD: '10 Sekunden vor',
  NO_TRANSCRIPT_AVAILABLE: 'Kein Transkript verfügbar',
  ENTRIES: 'Einträge',
  AUDIO_DESCRIPTION: 'Audiodeskription',
  MODE: 'Modus',
  CAPTION_DISPLAY: 'Untertitel-Darstellung',
  TRANSCRIPT_DISPLAY: 'Transkript-Darstellung', 
  FONT_SIZE: 'Schriftgröße',
  FONT_COLOR: 'Schriftfarbe',
  BACKGROUND_COLOR: 'Hintergrundfarbe',
  QUALITY: 'Qualität',
  SPEED: 'Geschwindigkeit',
  PICTURE_IN_PICTURE: 'Bild-in-Bild',
  NEXT_CHAPTER: 'Nächstes Kapitel',
  PREVIOUS_CHAPTER: 'Vorheriges Kapitel',  
  GOTO_CHAPTER: 'Zu Kapitel springen',
  EXIT_FULLSCREEN: 'Vollbild beenden',
  CAPTIONS_ON: 'Untertitel aktiviert',
  CAPTIONS_OFF: 'Untertitel deaktiviert',
  TRANSCRIPT_OPEN: 'Transkript öffnen',
  TRANSCRIPT_CLOSE: 'Transkript schließen',
  CHAPTERS_OPEN: 'Kapitel öffnen',
  CHAPTERS_CLOSE: 'Kapitel schließen',
  TOGGLE_CAPTIONS: 'Untertitel ein/aus',
  TOGGLE_TRANSCRIPT: 'Transkript ein/aus',
  EXPAND_PLAYER: 'Player erweitern',
  TOGGLE_CHAPTERS: 'Kapitel ein/aus',
  TOGGLE_AUDIO_DESCRIPTION: 'Audiodeskription ein/aus',
  PIP: 'Bild-in-Bild',
  EXIT_PIP: 'Bild-in-Bild beenden',
  
  // Time related
  TIME_DISPLAY: 'Zeitanzeige',
  CURRENT_TIME: 'Aktuelle Zeit',
  TOTAL_DURATION: 'Gesamtdauer',
  
  // Progress
  VIDEO_PROGRESS: 'Video-Fortschritt',
  SEEK_TO: 'Springen zu',
  
  AUDIO_DESC_ON: 'Audiodeskription aktiviert',
  AUDIO_DESC_OFF: 'Audiodeskription deaktiviert',

} as const;

// ARIA Labels
export const ARIA_LABELS = {
  APPLICATION: 'application',
  TOOLBAR: 'toolbar',
  SLIDER: 'slider',
  LIVE: 'aria-live',
  ATOMIC: 'aria-atomic',
  LIVE_POLITE: 'polite',
  LIVE_ASSERTIVE: 'assertive',
  AUDIO_DESC_MODE: 'Audiodeskription Modus',
  CAPTION_FONT_SIZE: 'Untertitel Schriftgröße',
  CAPTION_COLOR: 'Untertitel Farbe',
  CAPTION_BACKGROUND: 'Untertitel Hintergrund',
  CLOSE_SETTINGS: 'Einstellungen schließen',
  VOICE_SELECT: 'Stimme auswählen',
  PITCH_SLIDER: 'Tonhöhe einstellen',
  TEST_VOICE: 'Stimme testen',
  TRANSCRIPT_LIST: 'Transkript-Liste',
  CHAPTERS_LIST: 'Kapitel-Liste',
  
  // Missing labels - ADD THESE:
  BUTTON: 'button',
  MENU: 'menu',
  MENUITEM: 'menuitem',
  PROGRESSBAR: 'progressbar',
  REGION: 'region',
  PREVIOUS_CHAPTER: 'Zum vorherigen Kapitel springen',
  NEXT_CHAPTER: 'Zum nächsten Kapitel springen',
    AUDIO_DESC_ON: 'Audiodeskription aktivieren',
  AUDIO_DESC_OFF: 'Audiodeskription deaktivieren',
} as const;

// Legacy support for components still using ARIA_LABELS_LISTS
export const ARIA_LABELS_LISTS = {
  TRANSCRIPT_LIST: 'Transkript-Liste',
  CHAPTERS_LIST: 'Liste der verfügbaren Kapitel',
} as const;

// CSS Classes
export const CSS_CLASSES = {
  SCREEN_READER_ONLY: 'sr-only',
  PLAYER_CONTAINER: 'player-container',
  VIDEO_AREA: 'video-area',
  SIDEBAR_AREA: 'sidebar-area',
  CONTROL_BAR: 'control-bar',
  CAPTIONS_TEXT: 'captions-text'
} as const;


export const SETTINGS_LABELS = { 
  AUDIO_DESC_MODE: 'Audiodeskription Modus',
  CAPTION_FONT_SIZE: 'Untertitel Schriftgröße',
  CAPTION_COLOR: 'Untertitel Farbe',
  CAPTION_BACKGROUND: 'Untertitel Hintergrund',
  CLOSE_SETTINGS: 'Einstellungen schließen',
  AUDIO_DESCRIPTION_SETTINGS: 'Audiodeskription Einstellungen',
  VOICE_SETTINGS: 'Stimmen-Einstellungen',
  TEST_VOICE: 'Stimme testen',
  AUTO_START: 'Automatisch starten',
  AUTO_STOP: 'Automatisch stoppen',
  TTS_MODE: 'Text-zu-Sprache',
  AUDIO_MODE: 'Audio-Spur',
  SIGN_MODE: 'Gebärdensprache',
  SETTINGS: 'Einstellungen',
  CLOSE: 'Schließen',
  AUDIO_DESCRIPTION: 'Audiodeskription',
  VOICE: 'Stimme',
  DEFAULT_VOICE: 'Standard-Stimme',
  VOICES_LOADING: 'Stimmen werden geladen...',
  PITCH: 'Tonhöhe',
  TESTING: 'Teste...',
  TTS_NOT_AVAILABLE: 'Text-zu-Sprache nicht verfügbar',
  AUDIO_TRACK_MODE: 'Audio-Spur Modus',
  SIGN_LANGUAGE_MODE: 'Gebärdensprache Modus',
  FONT_SIZE: 'Schriftgröße',
  FONT_COLOR: 'Schriftfarbe',
  BACKGROUND_COLOR: 'Hintergrundfarbe',
  CAPTION_DISPLAY: 'Untertitel Anzeige',
  TRANSCRIPT_DISPLAY: 'Transkript Anzeige',
  MODE: 'Modus',
  SMALL: 'Klein',
  MEDIUM: 'Mittel',
  LARGE: 'Groß',
  EXTRA_LARGE: 'Sehr groß',
  WHITE: 'Weiß',
  YELLOW: 'Gelb',
  GREEN: 'Grün',
  CYAN: 'Cyan',
  BLACK: 'Schwarz',
  DARK_GRAY: 'Dunkelgrau',
  TRANSPARENT: 'Transparent',
  TIME_BASED_VIEW: 'Zeitbasierte Ansicht',
  SHOW_FULL_TRANSCRIPT: 'Vollständiges Transkript anzeigen'
} as const;
