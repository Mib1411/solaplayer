
interface VimeoPlayer {
  play(): Promise<void>;
  pause(): Promise<void>;
  setCurrentTime(seconds: number): Promise<number>;
  getCurrentTime(): Promise<number>;
  getDuration(): Promise<number>;
  setVolume(volume: number): Promise<number>;
  getVolume(): Promise<number>;
  setMuted(muted: boolean): Promise<boolean>;
  getMuted(): Promise<boolean>;
  setPlaybackRate(rate: number): Promise<number>;
  getPlaybackRate(): Promise<number>;
  on(event: string, callback: (data?: any) => void): void;
  off(event: string, callback?: (data?: any) => void): void;
  destroy(): Promise<void>;
}

declare global {
  interface Window {
    Vimeo: {
      Player: new (element: string | HTMLElement, options: any) => VimeoPlayer;
    };
  }
}

export class VimeoPlayerWrapper {
  private player: VimeoPlayer | null = null;
  private containerId: string;
  private videoId: string;
  private isReady = false;
  private eventListeners: { [key: string]: ((event: any) => void)[] } = {};

  constructor(containerId: string, videoId: string) {
    this.containerId = containerId;
    this.videoId = videoId;
  }

  async init(): Promise<void> {
    await this.loadVimeoAPI();
    return this.createPlayer();
  }

  private async loadVimeoAPI(): Promise<void> {
    return new Promise((resolve) => {
      if (window.Vimeo && window.Vimeo.Player) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  private createPlayer(): Promise<void> {
    return new Promise((resolve, reject) => {
      const container = document.getElementById(this.containerId);
      if (!container) {
        reject(new Error('Container element not found'));
        return;
      }

      this.player = new window.Vimeo.Player(container, {
        id: this.videoId,
        width: 800,
        height: 450,
        controls: false, // Keine Vimeo Controls
        autoplay: false,
        muted: false,
        responsive: true
      });

      // Event Listeners
      this.player.on('loaded', () => {
        this.isReady = true;
        this.emit('ready');
        resolve();
      });

      this.player.on('play', () => {
        this.emit('play');
      });

      this.player.on('pause', () => {
        this.emit('pause');
      });

      this.player.on('ended', () => {
        this.emit('ended');
      });

      this.player.on('timeupdate', (data) => {
        this.emit('timeupdate', data);
      });

      this.player.on('error', (error) => {
        this.emit('error', error);
        reject(error);
      });
    });
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
  async play(): Promise<void> {
    if (this.player && this.isReady) {
      try {
        await this.player.play();
      } catch (error) {
        console.error('Vimeo play error:', error);
      }
    }
  }

  async pause(): Promise<void> {
    if (this.player && this.isReady) {
      try {
        await this.player.pause();
      } catch (error) {
        console.error('Vimeo pause error:', error);
      }
    }
  }

  async seekTo(seconds: number): Promise<void> {
    if (this.player && this.isReady) {
      try {
        await this.player.setCurrentTime(seconds);
      } catch (error) {
        console.error('Vimeo seek error:', error);
      }
    }
  }

  async getCurrentTime(): Promise<number> {
    if (this.player && this.isReady) {
      try {
        return await this.player.getCurrentTime();
      } catch (error) {
        console.error('Vimeo getCurrentTime error:', error);
      }
    }
    return 0;
  }

  async getDuration(): Promise<number> {
    if (this.player && this.isReady) {
      try {
        return await this.player.getDuration();
      } catch (error) {
        console.error('Vimeo getDuration error:', error);
      }
    }
    return 0;
  }

  async setVolume(volume: number): Promise<void> {
    if (this.player && this.isReady) {
      try {
        await this.player.setVolume(volume); // Vimeo erwartet 0-1
      } catch (error) {
        console.error('Vimeo setVolume error:', error);
      }
    }
  }

  async getVolume(): Promise<number> {
    if (this.player && this.isReady) {
      try {
        return await this.player.getVolume();
      } catch (error) {
        console.error('Vimeo getVolume error:', error);
      }
    }
    return 1;
  }

  async mute(): Promise<void> {
    if (this.player && this.isReady) {
      try {
        await this.player.setMuted(true);
      } catch (error) {
        console.error('Vimeo mute error:', error);
      }
    }
  }

  async unmute(): Promise<void> {
    if (this.player && this.isReady) {
      try {
        await this.player.setMuted(false);
      } catch (error) {
        console.error('Vimeo unmute error:', error);
      }
    }
  }

  async isMuted(): Promise<boolean> {
    if (this.player && this.isReady) {
      try {
        return await this.player.getMuted();
      } catch (error) {
        console.error('Vimeo getMuted error:', error);
      }
    }
    return false;
  }

  async setPlaybackRate(rate: number): Promise<void> {
    if (this.player && this.isReady) {
      try {
        await this.player.setPlaybackRate(rate);
      } catch (error) {
        console.error('Vimeo setPlaybackRate error:', error);
      }
    }
  }

  async getPlaybackRate(): Promise<number> {
    if (this.player && this.isReady) {
      try {
        return await this.player.getPlaybackRate();
      } catch (error) {
        console.error('Vimeo getPlaybackRate error:', error);
      }
    }
    return 1;
  }

  async destroy(): Promise<void> {
    if (this.player) {
      try {
        await this.player.destroy();
        this.player = null;
        this.isReady = false;
      } catch (error) {
        console.error('Vimeo destroy error:', error);
      }
    }
  }
}

// Helper function für Vimeo ID Extraktion
export function extractVimeoId(url: string): string | null {
  const regex = /vimeo\.com\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}