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
    return new Promise((resolve, reject) => {
      this.player = new window.YT.Player(this.containerId, {
        videoId: this.videoId,
        playerVars: {
          autoplay: 0,
          controls: 0, // Keine YouTube Controls
          disablekb: 1, // Keine Keyboard Shortcuts
          enablejsapi: 1,
          fs: 0, // Kein Fullscreen Button
          iv_load_policy: 3, // Keine Annotations
          modestbranding: 1, // Kein YouTube Logo
          rel: 0, // Keine related videos
          showinfo: 0,
          cc_load_policy: 1, // Captions laden
          playsinline: 1
        },
        events: {
          onReady: () => {
            this.isReady = true;
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
        break;
      case window.YT.PlayerState.PAUSED:
        this.emit('pause');
        break;
      case window.YT.PlayerState.ENDED:
        this.emit('ended');
        break;
      case window.YT.PlayerState.BUFFERING:
        this.emit('waiting');
        break;
    }
    this.emit('statechange', state);
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