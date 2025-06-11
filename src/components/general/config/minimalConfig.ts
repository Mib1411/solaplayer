/**
 * Minimal Player Configuration
 * 
 * Nur Play/Pause + Captions für ersten funktionsfähigen Test.
 * Alle anderen Features deaktiviert.
 * 
 * @author WCAG Player Team
 * @version 2.0.0
 */

import type { PlayerConfig, Feature } from './playerConfig';

export const MINIMAL_CONFIG: PlayerConfig = {
  core: {
    base: true,
    extended: true,
    videoTypes: {
      mp4: true,
      webm: false,
      youtube: false,
      vimeo: false,
      bundestag: false
    }
  },
  
  base: {
    settings: {
      playOnThumbnail: true,
      hideControls: false,
      autoHideControls: true,
      showProgress: false,
      showExtendedButton: false,
      extendedButtonMode: 'popup'
    },
    features: {
      playPause: {
        enabled: true,
        components: {
          PlayPauseButton: { area: 'controls', subArea: 'left', position: 1, priority: 90 }
        }
      },
      captions: {
        enabled: true,
        components: {
          CaptionsButton: { area: 'controls', subArea: 'right', position: 1, priority: 80 },
          CaptionsOverlay: { area: 'overlay', subArea: 'top', position: 1, priority: 90 }
        }
      },
      
      // Alles andere disabled
      mute: { enabled: false, components: {} },
      volume: { enabled: false, components: {} },
      seek: { enabled: false, components: {} },
      skipBackward: { enabled: false, components: {} },
      skipForward: { enabled: false, components: {} },
      returnToStart: { enabled: false, components: {} },
      speed: { enabled: false, components: {} },
      quality: { enabled: false, components: {} },
      fullscreen: { enabled: false, components: {} },
      pip: { enabled: false, components: {} },
      audioDescription: { enabled: false, components: {} }
    }
  },
  
  extended: {
    settings: {
      playOnThumbnail: true,
      hideControls: false,
      autoHideControls: false,
      showProgress: false
    },
    features: {
      playPause: {
        enabled: true,
        components: {
          PlayPauseButton: { area: 'controls', subArea: 'left', position: 1, priority: 90 }
        }
      },
      captions: {
        enabled: true,
        components: {
          CaptionsButton: { area: 'controls', subArea: 'right', position: 1, priority: 80 },
          CaptionsOverlay: { area: 'overlay', subArea: 'top', position: 1, priority: 90 }
        }
      },
      
      // Alle anderen disabled
      mute: { enabled: false, components: {} },
      volume: { enabled: false, components: {} },
      seek: { enabled: false, components: {} },
      skipBackward: { enabled: false, components: {} },
      skipForward: { enabled: false, components: {} },
      returnToStart: { enabled: false, components: {} },
      speed: { enabled: false, components: {} },
      quality: { enabled: false, components: {} },
      fullscreen: { enabled: false, components: {} },
      pip: { enabled: false, components: {} },
      audioDescription: { enabled: false, components: {} },
      chapters: { enabled: false, components: {} },
      transcript: { enabled: false, components: {} },
      info: { enabled: false, components: {} },
      settings: { enabled: false, components: {} },
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
        selectedVoice: ''
      }
    }
  }
};