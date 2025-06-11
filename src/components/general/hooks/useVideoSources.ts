/**
 * Video Sources Hook - Single Responsibility: Video Source Management
 */

'use client';
import { useState, useCallback } from 'react';
import { VideoSources, VideoQuality } from '../../../types/player';
import { usePlayer } from '../../PlayerProvider';
import { extractBundestagId, extractBundestagVideo, extractVimeoId, extractYouTubeId, extractYouTubeVideo, extractVimeoVideo, updateVimeoQualitiesFromPlayer } from '../../../utils/videoExtractors';

export interface VideoSourcesState {
  videoSources: VideoSources;
  selectedQuality: string;
  videoSrc: string;
  availableQualities: VideoQuality[];
  playerType: 'html5' | 'youtube' | 'vimeo'; // ✅ NICHT 'video' | 'btag' SONDERN 'html5'
  youtubePlayer: any;
  vimeoPlayer: any;
  videoTitle?: string;
  isPiPSupported: boolean;
  thumbnail: string | null;
}

export interface VideoSourcesActions {
  setVideoSources: (value: VideoSources) => void;
  setSelectedQuality: (value: string) => void;
  setVideoSrc: (value: string) => void;
  setAvailableQualities: (value: VideoQuality[]) => void;
  setPlayerType: (value: 'html5' | 'youtube' | 'vimeo') => void; // ✅ KORRIGIERT
  setYoutubePlayer: (value: any) => void;
  setVimeoPlayer: (value: any) => void;
  setVideoTitle: (value: string) => void;
  setIsPiPSupported: (value: boolean) => void;
  setThumbnail: (url: string) => void;
  generateThumbnail: (type: 'youtube' | 'vimeo', videoId: string) => void;
  switchQuality: (quality: string) => void;
  
  // ✅ NEU - COMPLEX VIDEO PROCESSING:
  processVideoSources: (sources: any, type: 'mp4' | 'webm' | 'youtube' | 'vimeo' | 'bundestag') => Promise<void>;
}

export type VideoSourcesHook = VideoSourcesState & VideoSourcesActions;

export const useVideoSources = (): VideoSourcesHook => {
  const { setAvailableContent, availableContent } = usePlayer();
  
  // Video sources state
  const [videoSources, setVideoSources] = useState<VideoSources>({});
  const [selectedQuality, setSelectedQuality] = useState<string>('auto');
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [availableQualities, setAvailableQualities] = useState<VideoQuality[]>([]);
  const [playerType, setPlayerType] = useState<'html5' | 'youtube' | 'vimeo'>('html5'); // ✅ KORRIGIERT
  const [youtubePlayer, setYoutubePlayer] = useState<any>(null);
  const [vimeoPlayer, setVimeoPlayer] = useState<any>(null);
  const [videoTitle, setVideoTitle] = useState<string>('');
  const [isPiPSupported, setIsPiPSupported] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  // ✅ COMPLEX VIDEO PROCESSING:
  const processVideoSources = useCallback(async (sources: any, type: 'mp4' | 'webm' | 'youtube' | 'vimeo' | 'bundestag') => {
    const currentContent = availableContent || {};
    
    switch (type) {
      case 'mp4':
      case 'webm':
        // ✅ BEIDE FÄLLE BEHANDELN:
        if (Array.isArray(sources)) {
          const qualityObjects: VideoQuality[] = [];
          let firstUrl = '';
          
          sources.forEach((source: any, index: number) => {
            if (typeof source === 'object' && source.url) {
              // Object: {url: '', quality: '1080p', height: 1080}
              const height = source.height || parseInt(source.quality) || 0;
              const quality = source.quality || `${height}p`; // ✅ WENN NICHT ÜBERMITTELT → height+"p"
              
              qualityObjects.push({
                url: source.url,
                quality: quality,
                width: source.width || 0,
                height: height,
                bitrate: source.bitrate
              });
              
              if (index === 0) firstUrl = source.url;
            } else if (typeof source === 'string') {
              // String in Array: ['/video1.mp4', '/video2.mp4']
              qualityObjects.push({
                url: source,
                quality: 'default', // ✅ DEFAULT QUALITY für String
                width: 0,
                height: 0
              });
              if (index === 0) firstUrl = source;
            }
          });
          
          setVideoSources({ [type]: qualityObjects });
          setAvailableQualities(qualityObjects);
          setVideoSrc(firstUrl);
          
          // ✅ AVAILABLE CONTENT - KORREKTE SOURCES STRUKTUR:
          setAvailableContent({
            ...currentContent,
            hasQualities: qualityObjects.length > 1,
            sources: qualityObjects.map(q => ({ // ✅ NICHT videoSrc SONDERN sources!
              url: q.url,
              quality: q.quality,
              width: q.width,
              height: q.height
            }))
          });
          
        } else if (typeof sources === 'string') {
          // ✅ SINGLE STRING: mp4="/videos/sample.mp4"
          const qualityObject: VideoQuality = {
            url: sources,
            quality: 'default',
            width: 0,
            height: 0
          };
          
          setVideoSources({ [type]: [qualityObject] });
          setAvailableQualities([qualityObject]);
          setVideoSrc(sources);
          
          setAvailableContent({
            ...currentContent,
            hasQualities: false,
            sources: [{ // ✅ SINGLE SOURCE als Array
              url: sources,
              quality: 'default',
              width: 0,
              height: 0
            }]
          });
        }
        break;
        
      // ✅ YOUTUBE CASE:
      case 'youtube':
        const youtubeId = extractYouTubeId(sources);
        if (youtubeId) {
          try {
            const extractedSources = await extractYouTubeVideo(sources);
            setVideoSrc(youtubeId);
            
            if (!currentContent.posterUrl && !currentContent.hasPoster) {
              generateThumbnail('youtube', youtubeId);
              
              setAvailableContent({
                ...currentContent,
                hasPoster: true,
                posterUrl: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
                hasQualities: false,
                sources: extractedSources.mp4?.map(q => ({
                  url: q.url,
                  quality: q.quality,
                  width: q.width,
                  height: q.height
                })) || []
              });
            } else {
              setAvailableContent({
                ...currentContent,
                hasQualities: false,
                sources: extractedSources.mp4?.map(q => ({
                  url: q.url,
                  quality: q.quality,
                  width: q.width,
                  height: q.height
                })) || []
              });
            }
          } catch (error) {
            console.error('YouTube processing failed:', error);
          }
        }
        break;
        
      // ✅ VIMEO CASE:
      case 'vimeo':
        const vimeoId = extractVimeoId(sources);
        if (vimeoId) {
          try {
            const extractedSources = await extractVimeoVideo(sources);
            setVideoSrc(vimeoId);
            
            if (!currentContent.posterUrl && !currentContent.hasPoster) {
              generateThumbnail('vimeo', vimeoId);
              
              setAvailableContent({
                ...currentContent,
                hasPoster: true,
                posterUrl: `https://vumbnail.com/${vimeoId}.jpg`,
                hasQualities: extractedSources.mp4 ? extractedSources.mp4.length > 1 : false,
                sources: extractedSources.mp4?.map(q => ({
                  url: q.url,
                  quality: q.quality,
                  width: q.width,
                  height: q.height
                })) || []
              });
            } else {
              setAvailableContent({
                ...currentContent,
                hasQualities: extractedSources.mp4 ? extractedSources.mp4.length > 1 : false,
                sources: extractedSources.mp4?.map(q => ({
                  url: q.url,
                  quality: q.quality,
                  width: q.width,
                  height: q.height
                })) || []
              });
            }
          } catch (error) {
            console.error('Vimeo processing failed:', error);
          }
        }
        break;
        
      case 'bundestag':
        // ✅ BUNDESTAG LOGIC:
        const bundestagId = extractBundestagId(sources);
        if (bundestagId) {
          try {
            const extractedSources = await extractBundestagVideo(sources);
            setVideoSources(extractedSources);
            
            if (extractedSources.mp4?.[0]) {
              setVideoSrc(extractedSources.mp4[0].url);
              setAvailableQualities(extractedSources.mp4);
              
              // ✅ BUNDESTAG SOURCES - KORREKTE STRUKTUR:
              setAvailableContent({
                ...currentContent,
                hasQualities: extractedSources.mp4.length > 1,
                sources: extractedSources.mp4.map(q => ({ // ✅ NICHT videoSrc SONDERN sources!
                  url: q.url,
                  quality: q.quality || `${q.height}p`, // ✅ FALLBACK ZU height+"p"
                  width: q.width,
                  height: q.height
                }))
              });
            }
          } catch (error) {
            console.error('Bundestag video extraction failed:', error);
          }
        }
        break;
    }
  }, [availableContent, setAvailableContent]);

  // Helper actions
  const switchQuality = useCallback((quality: string) => {
    setSelectedQuality(quality);
    
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
    setPlayerType: useCallback((value: 'html5' | 'youtube' | 'vimeo') => setPlayerType(value), []), // ✅ KORRIGIERT
    setYoutubePlayer: useCallback((value: any) => setYoutubePlayer(value), []),
    setVimeoPlayer: useCallback((value: any) => setVimeoPlayer(value), []),
    setVideoTitle: useCallback((value: string) => setVideoTitle(value), []),
    setIsPiPSupported: useCallback((value: boolean) => setIsPiPSupported(value), []),
    setThumbnail: useCallback((url: string) => setThumbnail(url), []),
    generateThumbnail,
    switchQuality,
    processVideoSources
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