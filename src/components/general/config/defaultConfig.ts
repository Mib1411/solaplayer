import type { PlayerConfig } from './playerConfig';

export const DEFAULT_CONFIG: PlayerConfig = {
  core: {
    base: true,
    extended: true,
    videoTypes: {
      mp4: true,
      webm: true,
      youtube: true,
      vimeo: true,
      bundestag: true
    }
  },
  
  base: {
    settings: {
      playOnThumbnail: true,
      hideControls: false,
      autoHideControls: true,
      showProgress: true,
      showExtendedButton: true,
      extendedButtonMode: 'both'
    },
    features: {
      playPause: {
        enabled: true,
        components: {
          PlayPauseButton: { area: 'controls', subArea: 'left', position: 1, priority: 90 }
        }
      },
      mute: {
        enabled: true,
        components: {
          MuteButton: { area: 'controls', subArea: 'left', position: 2, priority: 85 }
        }
      },
      volume: {
        enabled: true,
        components: {
          VolumeControl: { area: 'controls', subArea: 'left', position: 3, priority: 80 },
          VolumeSlider: { area: 'controls', subArea: 'left', position: 4, priority: 75 }
        }
      },
      seek: {
        enabled: true,
        components: {
          SeekBar: { area: 'controls', subArea: 'progress', position: 1, priority: 90 },
          TimeDisplay: { area: 'controls', subArea: 'progress', position: 2, priority: 80 }
        }
      },
      skipBackward: {
        enabled: false,
        components: {
          SkipBackButton: { area: 'controls', subArea: 'left', position: 5, priority: 70 }
        }
      },
      skipForward: {
        enabled: false,
        components: {
          SkipForwardButton: { area: 'controls', subArea: 'left', position: 6, priority: 65 }
        }
      },
      returnToStart: {
        enabled: false,
        components: {
          ReturnButton: { area: 'controls', subArea: 'left', position: 0, priority: 95 }
        }
      },
      speed: {
        enabled: false,
        components: {
          SpeedButton: { area: 'controls', subArea: 'right', position: 5, priority: 50 },
          SpeedMenu: { area: 'popup', subArea: 'top', position: 1, priority: 80 }
        }
      },
      quality: {
        enabled: false,
        components: {
          QualityButton: { area: 'controls', subArea: 'right', position: 6, priority: 45 },
          QualityMenu: { area: 'popup', subArea: 'top', position: 2, priority: 75 }
        }
      },
      fullscreen: {
        enabled: true,
        components: {
          FullscreenButton: { area: 'controls', subArea: 'right', position: 10, priority: 10 }
        }
      },
      pip: {
        enabled: false,
        components: {
          PiPButton: { area: 'controls', subArea: 'right', position: 7, priority: 40 }
        }
      },
      captions: {
        enabled: true,
        specialProp: {
            prop: captionsUrl,
            type: 'string',
            description: 'URL to the captions file (e.g. VTT or SRT format).'
            usedBy : 'CaptionsOverlay'
        }
        components: {
          CaptionsButton: { area: 'controls', subArea: 'right', position: 1, priority: 80 },
          CaptionsOverlay: { area: 'overlay', subArea: 'top', position: 1, priority: 90 }
        }
      },
      audioDescription: {
        enabled: false,
        specialProp: {
            prop: descriptionUrl,
            type: 'string',
            description: 'URL to the description file (e.g. VTT or SRT format).'
            usedBy : 'AudioDescriptionOverlay'
        }
        components: {
          AudioDescriptionButton: { area: 'controls', subArea: 'right', position: 8, priority: 35 },
          AudioDescriptionOverlay: { area: 'overlay', subArea: 'top', position: 1, priority: 85 }
      }
    }
  },
  
  extended: {
    settings: {
      playOnThumbnail: true,
      hideControls: false,
      autoHideControls: true,
      showProgress: true
    },
    features: {
      playPause: {
        enabled: true,
        components: {
          PlayPauseButton: { area: 'controls', subArea: 'left', position: 1, priority: 90 }
        }
      },
      mute: {
        enabled: true,
        components: {
          MuteButton: { area: 'controls', subArea: 'left', position: 2, priority: 85 }
        }
      },
      volume: {
        enabled: true,
        components: {
          VolumeControl: { area: 'controls', subArea: 'left', position: 3, priority: 80 },
          VolumeSlider: { area: 'controls', subArea: 'left', position: 4, priority: 75 }
        }
      },
      seek: {
        enabled: true,
        components: {
          SeekBar: { area: 'controls', subArea: 'progress', position: 1, priority: 90 },
          TimeDisplay: { area: 'controls', subArea: 'progress', position: 2, priority: 80 },
          BufferBar: { area: 'controls', subArea: 'progress', position: 3, priority: 70 }
        }
      },
      skipBackward: {
        enabled: true,
        components: {
          SkipBackButton: { area: 'controls', subArea: 'left', position: 5, priority: 70 }
        }
      },
      skipForward: {
        enabled: true,
        components: {
          SkipForwardButton: { area: 'controls', subArea: 'left', position: 6, priority: 65 }
        }
      },
      returnToStart: {
        enabled: true,
        components: {
          ReturnButton: { area: 'controls', subArea: 'left', position: 0, priority: 95 }
        }
      },
      speed: {
        enabled: true,
        components: {
          SpeedButton: { area: 'controls', subArea: 'right', position: 5, priority: 50 },
          SpeedMenu: { area: 'popup', subArea: 'top', position: 1, priority: 80 }
        }
      },
      quality: {
        enabled: true,
        components: {
          QualityButton: { area: 'controls', subArea: 'right', position: 6, priority: 45 },
          QualityMenu: { area: 'popup', subArea: 'top', position: 2, priority: 75 }
        }
      },
      fullscreen: {
        enabled: true,
        components: {
          FullscreenButton: { area: 'controls', subArea: 'right', position: 10, priority: 10 }
        }
      },
      pip: {
        enabled: true,
        components: {
          PiPButton: { area: 'controls', subArea: 'right', position: 7, priority: 40 }
        }
      },
      captions: {
        enabled: true,
        specialProp: [{
          prop: captionsUrl,
          type: 'string',
          description: 'URL to the captions file (e.g. VTT or SRT format).',
          usedBy: 'CaptionsOverlay'
        }],
        components: {
          CaptionsButton: { area: 'controls', subArea: 'right', position: 1, priority: 80 },
          CaptionsOverlay: { area: 'overlay', subArea: 'top', position: 1, priority: 90 },
        }
      },
      audioDescription: {
        enabled: true,
        specialProp: [{
          prop: descriptionUrl,
          type: 'string',
          description: 'URL to the audio description file (e.g. VTT or SRT format).',
          usedBy: 'AudioDescriptionOverlay'
        }],
        components: {
          AudioDescriptionButton: { area: 'controls', subArea: 'right', position: 8, priority: 35 },
          AudioDescriptionOverlay: { area: 'overlay', subArea: 'top', position: 1, priority: 85 },
        }
      },
      
      // Sidebar Features (nur Extended)
      chapters: {
        enabled: true,
        specialProp: [{
          prop: chaptersUrl,
          type: 'string',
          description: 'URL to the chapters file (e.g. JSON format).',
          usedBy: 'ChaptersPanel'
        }],
        components: {
          ChaptersButton: { area: 'controls', subArea: 'right', position: 2, priority: 75 },
          ChaptersPanel: { area: 'sidebar', subArea: 'left', position: 1, priority: 90 },
        }
      },
      transcript: {
        enabled: true,
        specialProp: [{
          prop: captionsUrl,
          type: 'string',
          description: 'URL to the transcript file (e.g. VTT or SRT format).',
          usedBy: 'TranscriptSidebar'
        },
        {
          prop: descriptionUrl,
          type: 'string',
            description: 'URL to the audio description file (e.g. VTT or SRT format).',
            usedBy: 'TranscriptSidebar'
        }
        ]
        components: {
          TranscriptButton: { area: 'controls', subArea: 'right', position: 3, priority: 70 },
          TranscriptSidebar: { area: 'sidebar', subArea: 'right', position: 1, priority: 90 }
        }
      },
      
      // Modal Features (nur Extended)
      settings: {
        enabled: true,
        components: {
          SettingsButton: { area: 'controls', subArea: 'right', position: 9, priority: 20 },
          SettingsModal: { area: 'popup', subArea: 'top', position: 10, priority: 100 },

        }
      },
      info: {
        enabled: true,
        components: {
          InfoButton: { area: 'controls', subArea: 'right', position: 4, priority: 65 },
          InfoModal: { area: 'popup', subArea: 'top', position: 6, priority: 90 },
         
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
        autoStart: false,
        autoStop: true,
        pitch: 1,
        selectedVoice: 'system-default'
      }
    }
  }
};