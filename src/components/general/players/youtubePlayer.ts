interface YouTubePlayerState {
  UNSTARTED: -1;
  ENDED: 0;
  PLAYING: 1;
  PAUSED: 2;
  BUFFERING: 3;
  CUED: 5;
}

interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number): void;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  setVolume(volume: number): void;
  getVolume(): number;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  setSize(width: number, height: number): void;
  setPlaybackRate(rate: number): void;
  getPlaybackRate(): number;
  getAvailablePlaybackRates(): number[];
  addEventListener(event: string, listener: (event: any) => void): void;
  removeEventListener(event: string, listener: (event: any) => void): void;
  destroy(): void;
}

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: any) => YouTubePlayer;
      PlayerState: YouTubePlayerState;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export class YouTubePlayerWrapper {
  private player: YouTubePlayer | null = null;
  private containerId: string;
  private videoId: string;
  private isReady = false;
  private eventListeners: { [key: string]: ((event: any) => void)[] } = {};

  constructor(containerId: string, videoId: string) {
    this.containerId = containerId;
    this.videoId = videoId;
  }

  async init(): Promise<void> {
    await this.loadYouTubeAPI();
    return this.createPlayer();
  }

  private async loadYouTubeAPI(): Promise<void> {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve();
        return;
      }

      window.onYouTubeIframeAPIReady = () => {
        resolve();
      };

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.head.appendChild(script);
      }
    });
  }

  private createPlayer(): Promise<void> {
    return new Promise((resolve, reject) => {      this.player = new window.YT.Player(this.containerId, {
        videoId: this.videoId,        playerVars: {
          // BASIC CONTROLS - NUR das nötigste deaktivieren
          autoplay: 0,
          controls: 0,          // Keine YouTube Controls
          enablejsapi: 1,       // JS API aktivieren (WICHTIG!)
          
          // MINIMAL BRANDING
          modestbranding: 1,    // YouTube Logo verstecken
          rel: 0,               // Keine related videos am Ende
          
          // MOBILE
          playsinline: 1,       // Inline abspielen auf mobil
          
          // CAPTIONS
          cc_load_policy: 1,    // Captions laden wenn verfügbar
        },
        events: {
          onReady: () => {
            this.isReady = true;
            // Zusätzliche DOM-Manipulationen nach dem Laden
            this.hideRemainingYouTubeElements();
            this.emit('ready');
            resolve();
          },
          onStateChange: (event: any) => {
            this.handleStateChange(event.data);
          },
          onError: (event: any) => {
            this.emit('error', event);
            reject(new Error(`YouTube Player Error: ${event.data}`));
          }
        }
      });
    });
  }
  private handleStateChange(state: number): void {
    switch (state) {
      case window.YT.PlayerState.PLAYING:
        this.emit('play');
        this.startTimeUpdates();
        break;
      case window.YT.PlayerState.PAUSED:
        this.emit('pause');
        this.stopTimeUpdates();
        break;
      case window.YT.PlayerState.ENDED:
        this.emit('ended');
        this.stopTimeUpdates();
        break;
      case window.YT.PlayerState.BUFFERING:
        this.emit('waiting');
        break;
    }
    this.emit('statechange', state);
  }

  private timeUpdateInterval: number | null = null;

  private startTimeUpdates(): void {
    this.stopTimeUpdates();
    this.timeUpdateInterval = window.setInterval(() => {
      if (this.player && this.isReady) {
        const currentTime = this.getCurrentTime();
        const duration = this.getDuration();
        this.emit('timeupdate', { currentTime, duration });
      }
    }, 1000);
  }
  private stopTimeUpdates(): void {
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
      this.timeUpdateInterval = null;
    }
  }

  // Zusätzliche DOM-Manipulationen um YouTube Elemente zu verstecken
  private hideRemainingYouTubeElements(): void {
    setTimeout(() => {
      const container = document.getElementById(this.containerId);
      if (container) {
        const iframe = container.querySelector('iframe');
        if (iframe && iframe.contentDocument) {
          try {
            // Diese Elemente sind oft noch sichtbar trotz playerVars
            const style = iframe.contentDocument.createElement('style');
            style.textContent = `
              .ytp-chrome-top,
              .ytp-chrome-bottom,
              .ytp-gradient-top,
              .ytp-gradient-bottom,
              .ytp-chrome-controls,
              .ytp-progress-bar-container,
              .ytp-play-button,
              .ytp-pause-button,
              .ytp-mute-button,
              .ytp-volume-slider,
              .ytp-time-display,
              .ytp-fullscreen-button,
              .ytp-settings-button,
              .ytp-miniplayer-button,
              .ytp-size-button,
              .ytp-remote-button,
              .ytp-share-button,
              .ytp-watch-later-button,
              .ytp-cards-teaser,
              .ytp-ce-element,
              .ytp-watermark,
              .ytp-cued-thumbnail-overlay,
              .ytp-endscreen-element,
              .iv-branding,
              .annotation,
              .ytp-paid-content-overlay,
              .ytp-ad-overlay-container,
              .ytp-ad-text-overlay {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
              }
              
              /* Video container auf volle Größe */
              .html5-video-container,
              .html5-video-player {
                width: 100% !important;
                height: 100% !important;
              }
            `;
            iframe.contentDocument.head.appendChild(style);
          } catch (e) {
            // Cross-origin iframe, können nicht zugreifen
            console.log('Cannot access YouTube iframe content (cross-origin)');
          }
        }
      }
    }, 1000); // Kurz warten bis YouTube geladen ist
  }

  // Event System
  on(event: string, listener: (event?: any) => void): void {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(listener);
  }

  off(event: string, listener: (event?: any) => void): void {
    if (this.eventListeners[event]) {
      const index = this.eventListeners[event].indexOf(listener);
      if (index > -1) {
        this.eventListeners[event].splice(index, 1);
      }
    }
  }

  private emit(event: string, data?: any): void {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach(listener => listener(data));
    }
  }

  // Player Control Methods
  play(): void {
    if (this.player && this.isReady) {
      this.player.playVideo();
    }
  }

  pause(): void {
    if (this.player && this.isReady) {
      this.player.pauseVideo();
    }
  }

  seekTo(seconds: number): void {
    if (this.player && this.isReady) {
      this.player.seekTo(seconds);
    }
  }

  getCurrentTime(): number {
    if (this.player && this.isReady) {
      return this.player.getCurrentTime();
    }
    return 0;
  }

  getDuration(): number {
    if (this.player && this.isReady) {
      return this.player.getDuration();
    }
    return 0;
  }

  setVolume(volume: number): void {
    if (this.player && this.isReady) {
      this.player.setVolume(volume * 100); // YouTube erwartet 0-100
    }
  }

  getVolume(): number {
    if (this.player && this.isReady) {
      return this.player.getVolume() / 100; // Normalisieren auf 0-1
    }
    return 1;
  }

  mute(): void {
    if (this.player && this.isReady) {
      this.player.mute();
    }
  }

  unmute(): void {
    if (this.player && this.isReady) {
      this.player.unMute();
    }
  }

  isMuted(): boolean {
    if (this.player && this.isReady) {
      return this.player.isMuted();
    }
    return false;
  }

  setPlaybackRate(rate: number): void {
    if (this.player && this.isReady) {
      this.player.setPlaybackRate(rate);
    }
  }

  getPlaybackRate(): number {
    if (this.player && this.isReady) {
      return this.player.getPlaybackRate();
    }
    return 1;
  }

  setSize(width: number, height: number): void {
    if (this.player && this.isReady) {
      this.player.setSize(width, height);
    }
  }

  destroy(): void {
    if (this.player) {
      this.player.destroy();
      this.player = null;
      this.isReady = false;
    }
  }
}
 
// Helper function für YouTube ID Extraktion (wie AblePlayer)
export function extractYouTubeId(url: string): string | null {
  if (url.indexOf('youtu') !== -1) {
    // AblePlayer Logik: die letzten 11 Zeichen
    url = url.trim();
    const idStartPos = url.length - 11;
    const id = url.substring(idStartPos);
    return id;
  }
  return null;
}