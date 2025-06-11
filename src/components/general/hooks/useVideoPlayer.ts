'use client';
import { useRef, useState } from 'react';
import { YouTubePlayerWrapper } from '../players/youtubePlayer';
import { VimeoPlayerWrapper } from '../players/vimeoPlayer';
import { extractYouTubeId, extractVimeoId } from '../../../utils/videoExtractors';

export interface VideoPlayerState {
  youtubePlayer: YouTubePlayerWrapper | null;
  vimeoPlayer: VimeoPlayerWrapper | null;
  youtubeContainerRef: React.RefObject<HTMLDivElement>;
  vimeoContainerRef: React.RefObject<HTMLDivElement>;
}

export interface VideoPlayerActions {
  initializeExternalPlayer: (type: 'youtube' | 'vimeo', url: string, onStateChange: (state: any) => void) => void;
}

export const useVideoPlayer = (): VideoPlayerState & VideoPlayerActions => {
  const [youtubePlayer, setYoutubePlayer] = useState<YouTubePlayerWrapper | null>(null);
  const [vimeoPlayer, setVimeoPlayer] = useState<VimeoPlayerWrapper | null>(null);
  
  const youtubeContainerRef = useRef<HTMLDivElement>(null!);
  const vimeoContainerRef = useRef<HTMLDivElement>(null!);

  const initializeExternalPlayer = (type: 'youtube' | 'vimeo', url: string, onStateChange: (state: any) => void) => {
    if (type === 'youtube') {
      const youtubeId = extractYouTubeId(url);
      if (youtubeId) {
        setTimeout(() => {
          const container = youtubeContainerRef.current;
          if (container) {
            container.id = `youtube-player-${Date.now()}`;
            const ytPlayer = new YouTubePlayerWrapper(container.id, youtubeId);
            
            ytPlayer.init().then(() => {
              setYoutubePlayer(ytPlayer);
              
              // Connect events
              ytPlayer.on('play', () => onStateChange({ type: 'play' }));
              ytPlayer.on('pause', () => onStateChange({ type: 'pause' }));
              ytPlayer.on('timeupdate', (data: any) => onStateChange({ 
                type: 'timeupdate', 
                currentTime: data.currentTime, 
                duration: data.duration 
              }));
            }).catch(console.error);
          }
        }, 100);
      }
    } else if (type === 'vimeo') {
      const vimeoId = extractVimeoId(url);
      if (vimeoId) {
        setTimeout(() => {
          const container = vimeoContainerRef.current;
          if (container) {
            container.id = `vimeo-player-${Date.now()}`;
            const vmPlayer = new VimeoPlayerWrapper(container.id, vimeoId);
            
            vmPlayer.init().then(() => {
              setVimeoPlayer(vmPlayer);
              
              // Connect events
              vmPlayer.on('play', () => onStateChange({ type: 'play' }));
              vmPlayer.on('pause', () => onStateChange({ type: 'pause' }));
              vmPlayer.on('timeupdate', (data: any) => onStateChange({ 
                type: 'timeupdate', 
                currentTime: data.currentTime, 
                duration: data.duration 
              }));
            }).catch(console.error);
          }
        }, 100);
      }
    }
  };

  return {
    youtubePlayer,
    vimeoPlayer,
    youtubeContainerRef,
    vimeoContainerRef,
    initializeExternalPlayer
  };
};