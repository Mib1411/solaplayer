/**
 * Video Sources Hook - Single Responsibility: Video Source Management
 */

'use client';
import { useState, useCallback } from 'react';
import { VideoSources, VideoQuality } from '@/types/player';

export interface VideoSourcesState {
  videoSources: VideoSources;
  selectedQuality: string;
  videoSrc: string;
  availableQualities: VideoQuality[];
  playerType: 'video' | 'youtube' | 'vimeo' | 'btag';
  youtubePlayer: any;
  vimeoPlayer: any;
  videoTitle?: string;
  isPiPSupported: boolean;
  // Thumbnail support
  thumbnail: string | null;
}

export interface VideoSourcesActions {
  setVideoSources: (value: VideoSources) => void;
  setSelectedQuality: (value: string) => void;
  setVideoSrc: (value: string) => void;
  setAvailableQualities: (value: VideoQuality[]) => void;
  setPlayerType: (value: 'video' | 'youtube' | 'vimeo' | 'btag') => void;
  setYoutubePlayer: (value: any) => void;
  setVimeoPlayer: (value: any) => void;
  setVideoTitle: (value: string) => void;
  setIsPiPSupported: (value: boolean) => void;

  setThumbnail: (url: string) => void;
  generateThumbnail: (type: 'youtube' | 'vimeo', videoId: string) => void;
  switchQuality: (quality: string) => void;
}

export type VideoSourcesHook = VideoSourcesState & VideoSourcesActions;

export const useVideoSources = (): VideoSourcesHook => {
  // Video sources state
  const [videoSources, setVideoSources] = useState<VideoSources>({});
  const [selectedQuality, setSelectedQuality] = useState<string>('auto');
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [availableQualities, setAvailableQualities] = useState<VideoQuality[]>([]);
  const [playerType, setPlayerType] = useState<'video' | 'youtube' | 'vimeo' | 'btag'>('video');
  const [youtubePlayer, setYoutubePlayer] = useState<any>(null);
  const [vimeoPlayer, setVimeoPlayer] = useState<any>(null);
  const [videoTitle, setVideoTitle] = useState<string>('');
  const [isPiPSupported, setIsPiPSupported] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  // Helper actions
  const switchQuality = useCallback((quality: string) => {
    setSelectedQuality(quality);
    
    // Find matching video source
    const sources = videoSources;
    let newSrc = '';
    
    if (quality === 'auto' && sources.mp4) {
      const mp4Source = sources.mp4;
      newSrc = Array.isArray(mp4Source) ? mp4Source[0].url : (mp4Source as VideoQuality).url;
    } else if (sources[quality as keyof VideoSources]) {
      const source = sources[quality as keyof VideoSources] as VideoQuality[] | undefined;
      if (source) {
        newSrc = Array.isArray(source) ? source[0].url : (source as VideoQuality).url;
      }
    }
    
    setVideoSrc(newSrc);
  }, [videoSources]);

  const generateThumbnail = useCallback((type: 'youtube' | 'vimeo', videoId: string) => {
    if (type === 'youtube') {
      setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    } else if (type === 'vimeo') {
      setThumbnail(`https://vumbnail.com/${videoId}.jpg`);
    }
  }, []);

  // Memoized actions
  const actions = {
    setVideoSources: useCallback((value: VideoSources) => setVideoSources(value), []),
    setSelectedQuality: useCallback((value: string) => setSelectedQuality(value), []),
    setVideoSrc: useCallback((value: string) => setVideoSrc(value), []),
    setAvailableQualities: useCallback((value: VideoQuality[]) => setAvailableQualities(value), []),
    setPlayerType: useCallback((value: 'video' | 'youtube' | 'vimeo' | 'btag') => setPlayerType(value), []),
    setYoutubePlayer: useCallback((value: any) => setYoutubePlayer(value), []),
    setVimeoPlayer: useCallback((value: any) => setVimeoPlayer(value), []),
    setVideoTitle: useCallback((value: string) => setVideoTitle(value), []),
    setIsPiPSupported: useCallback((value: boolean) => setIsPiPSupported(value), []),
    setThumbnail: useCallback((url: string) => setThumbnail(url), []),
    generateThumbnail,
    switchQuality
  };

  return {
    // State
    videoSources,
    selectedQuality,
    videoSrc,
    availableQualities,
    playerType,
    youtubePlayer,
    vimeoPlayer,
    videoTitle,
    isPiPSupported,
    thumbnail,
    
    // Actions
    ...actions
  };
};