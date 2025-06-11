/**
 * Player Configuration Interface
 * 
 * TypeScript Interface für Player Konfiguration.
 * Definiert alle verfügbaren Settings und Features.
 * 
 * @author WCAG Player Team
 * @version 2.0.0
 */


export interface FeatureComponent {
  area: 'controls' | 'sidebar' | 'overlay' | 'popup';
  subArea: 'left' | 'right' | 'progress' | 'top' | 'bottom' | 'center';
  position: number;
  specialProps?: { [key: string]: string };
}

export interface ModeConfig {
  enabled: boolean;
  components?: {
    [componentName: string]: FeatureComponent;
  };
}

export interface Feature {
  base: ModeConfig;
  extended: ModeConfig;
}

export interface Setting {
  base: boolean;
  extended: boolean;
}

export interface PlayerConfig {
  settings: {
    playOnThumbnail: Setting;
    hideControls: Setting;
    autoHideControls: Setting;
    autoHideDelay: number;
  };
  
  videoTypes: {
    mp4: boolean;
    webm: boolean;
    youtube: boolean;
    vimeo: boolean;
    bundestag: boolean;
  };
  
  features: {
    playPause: Feature;
    volume: Feature;
    mute: Feature;
    progressBar: Feature;
    expand: Feature;
    skipBackward: Feature;
    skipForward: Feature;
    returnToStart: Feature;
    speed: Feature;
    quality: Feature;
    fullscreen: Feature;
    pip: Feature;
    captions: Feature;
    audioDescription: Feature;
    chapters: Feature;
    transcript: Feature;
    settings: Feature;
    info: Feature;
  };
  
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
      };
    };
  };
}

export const CONFIG: PlayerConfig = {
  settings: {
    playOnThumbnail: { base: false, extended: true },
    hideControls: { base: false, extended: true },
    autoHideControls: { base: true, extended: true },
    autoHideDelay: 2000 
  },
  
  videoTypes: {
    mp4: true,
    webm: true,
    youtube: true,
    vimeo: true,
    bundestag: true
  },
  
  features: {
    playPause: {
      base: { enabled: true, components: { PlayPauseButton: { area: 'controls', subArea: 'left', position: 1 } } },
      extended: { enabled: true, components: { PlayPauseButton: { area: 'controls', subArea: 'left', position: 1 } } }
    },
    volume: {
      base: { enabled: false, components: { VolumeButton: { area: 'controls', subArea: 'left', position: 2 } } },
      extended: { enabled: true, components: { VolumeButton: { area: 'controls', subArea: 'left', position: 2 } } }
    },
    mute: {
      base: { enabled: true, components: { MuteButton: { area: 'controls', subArea: 'left', position: 3 } } },
      extended: { enabled: false, components: { MuteButton: { area: 'controls', subArea: 'left', position: 3 } } }
    },
    progressBar: {
      base: { enabled: false, components: { ProgressBar: { area: 'controls', subArea: 'top', position: 2 } } },
      extended: { enabled: true, components: { ProgressBar: { area: 'controls', subArea: 'top', position: 2 } } }
    },
    skipBackward: {
      base: { enabled: false, components: { SkipBackButton: { area: 'controls', subArea: 'left', position: 4 } } },
      extended: { enabled: true, components: { SkipBackButton: { area: 'controls', subArea: 'left', position: 4 } } }
    },
    skipForward: {
      base: { enabled: false, components: { SkipForwardButton: { area: 'controls', subArea: 'left', position: 5 } } },
      extended: { enabled: true, components: { SkipForwardButton: { area: 'controls', subArea: 'left', position: 5 } } }
    },
    returnToStart: {
      base: { enabled: false, components: { ReturnButton: { area: 'controls', subArea: 'left', position: 6 } } },
      extended: { enabled: true, components: { ReturnButton: { area: 'controls', subArea: 'left', position: 6 } } }
    },
    speed: {
      base: { enabled: false, components: { SpeedButton: { area: 'controls', subArea: 'right', position: 1 } } },
      extended: { enabled: true, components: { SpeedButton: { area: 'controls', subArea: 'right', position: 1 } } }
    },
    quality: {
      base: { enabled: false, components: { QualityButton: { area: 'controls', subArea: 'right', position: 2 } } },
      extended: { enabled: true, components: { QualityButton: { area: 'controls', subArea: 'right', position: 2 } } }
    },
    fullscreen: {
      base: { enabled: false, components: { FullscreenButton: { area: 'controls', subArea: 'right', position: 3 } } },
      extended: { enabled: true, components: { FullscreenButton: { area: 'controls', subArea: 'right', position: 3 } } }
    },
    pip: {
      base: { enabled: false, components: { PiPButton: { area: 'controls', subArea: 'right', position: 4 } } },
      extended: { enabled: true, components: { PiPButton: { area: 'controls', subArea: 'right', position: 4 } } }
    },
    captions: {
      base: { 
        enabled: false, 
        components: { 
          CaptionsButton: { area: 'controls', subArea: 'right', position: 5 },
          CaptionsOverlay: { area: 'overlay', subArea: 'top', position: 1, specialProps: { captionsUrl: 'captionsUrl' } }
        } 
      },
      extended: { 
        enabled: true, 
        components: { 
          CaptionsButton: { area: 'controls', subArea: 'right', position: 5 },
          CaptionsOverlay: { area: 'overlay', subArea: 'top', position: 1, specialProps: { captionsUrl: 'captionsUrl' } }
        } 
      }
    },
    expand: {
      base: { enabled: true, components: { ExpandButton: { area: 'controls', subArea: 'right', position: 7 } } },
      extended: { enabled: false, components: { } }
    },
    audioDescription: {
      base: { enabled: false, components: { AudioDescButton: { area: 'controls', subArea: 'right', position: 6, specialProps: { captionsUrl: 'captionsUrl', descriptionsUrl: 'descriptionsUrl' } } } },
      extended: { enabled: true, components: { AudioDescButton: { area: 'controls', subArea: 'right', position: 6, specialProps: { captionsUrl: 'captionsUrl', descriptionsUrl: 'descriptionsUrl' } } } }
    },
    chapters: {
      base: { enabled: false, components: {} },
      extended: { 
        enabled: true, 
        components: { 
          ChaptersButton: { area: 'controls', subArea: 'right', position: 5 },
          ChaptersSidebar: { area: 'sidebar', subArea: 'left', position: 1, specialProps: { chaptersUrl: 'chaptersUrl' } },
          PreviousChapterButton: { area: 'controls', subArea: 'left', position: 7 },
          NextChapterButton: { area: 'controls', subArea: 'left', position: 8 }
        } 
      }
    },
    transcript: {
      base: { enabled: false, components: {} },
      extended: { 
        enabled: true, 
        components: { 
          TranscriptButton: { area: 'controls', subArea: 'right', position: 6 },
          TranscriptSidebar: { area: 'sidebar', subArea: 'right', position: 1, specialProps: { captionsUrl: 'captionsUrl', descriptionsUrl: 'descriptionsUrl' } }
        } 
      }
    },
    settings: {
      base: { enabled: false, components: {} },
      extended: { 
        enabled: true, 
        components: { 
          SettingsButton: { area: 'controls', subArea: 'right', position: 3 },
          SettingsModal: { area: 'popup', subArea: 'center', position: 1 }
        } 
      }
    },
    info: {
      base: { enabled: false, components: {} },
      extended: { 
        enabled: true, 
        components: { 
          InfoButton: { area: 'controls', subArea: 'right', position: 4 },
          InfoModal: { area: 'popup', subArea: 'center', position: 2 }
        } 
      }
    }
  },

  featureConfigs: {
    transcript: {
      timeBasedView: true,
      showFullTranscript: false,
      autoScroll: true
    },
    captions: {
      fontSize: 'medium',
      fontColor: 'white',
      backgroundColor: 'black'
    },
    audioDescription: {
      mode: 'tts',
      tts: {
        autoStart: true,
        autoStop: true,
        pitch: 1.0,
        selectedVoice: 'default'
      }
    }
  }
};



