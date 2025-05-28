import { useEffect, useRef } from 'react';
import { extractBundestagVideo } from '../utils/videoExtractors';
import { YouTubePlayerWrapper, extractYouTubeId } from '../utils/youtubePlayer';
import { VimeoPlayerWrapper, extractVimeoId } from '../utils/vimeoPlayer';
import { addPlayerStyles } from '../utils/videoUtils';
import { UsePlayerEffectsProps } from '../types/player';

export const usePlayerEffects = ({
  mp4,
  webm,
  youtube,
  vimeo,
  btag,
  captions,
  description,
  chapters,
  playerState,
  cues,
  parsedChapters,
  videoRef,
  youtubeContainerRef,
  vimeoContainerRef
}: UsePlayerEffectsProps) => {

  // useRef für autoHideTimeout
  const autoHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Video source resolution - REMOVED playerState from dependencies
  useEffect(() => {
    const resolveVideoSource = async () => {
      playerState.setIsLoading(true);
      try {
        if (mp4 || webm) {
          playerState.setPlayerType('video');
          const sources: any = {};
          
          if (mp4) {
            if (Array.isArray(mp4)) {
              sources.mp4 = mp4.map((url, index) => ({
                url,
                quality: `Quality ${index + 1}`,
                width: 1920,
                height: 1080
              }));
            } else {
              sources.mp4 = [{ url: mp4, quality: 'Original', width: 1920, height: 1080 }];
            }
          }
          
          if (webm) {
            if (Array.isArray(webm)) {
              sources.webm = webm.map((url, index) => ({
                url,
                quality: `Quality ${index + 1}`,
                width: 1920,
                height: 1080
              }));
            } else {
              sources.webm = [{ url: webm, quality: 'Original', width: 1920, height: 1080 }];
            }
          }
          
          playerState.setVideoSources(sources);
          
          // Set available qualities
          const qualities: any[] = [];
          if (sources.mp4) {
            sources.mp4.forEach((source: any) => {
              qualities.push({
                label: `${source.quality} (MP4) - ${source.width}x${source.height}`,
                value: source.quality,
                format: 'mp4',
                url: source.url
              });
            });
          }
          if (sources.webm) {
            sources.webm.forEach((source: any) => {
              qualities.push({
                label: `${source.quality} (WebM) - ${source.width}x${source.height}`,
                value: source.quality,
                format: 'webm',
                url: source.url
              });
            });
          }
          playerState.setAvailableQualities(qualities);
          
          // Set first available source
          if (sources.mp4?.[0]) {
            playerState.setVideoSrc(sources.mp4[0].url);
            playerState.setSelectedQuality(sources.mp4[0].quality);
          } else if (sources.webm?.[0]) {
            playerState.setVideoSrc(sources.webm[0].url);
            playerState.setSelectedQuality(sources.webm[0].quality);
          }
          
        } else if (youtube) {
          playerState.setPlayerType('youtube');
        } else if (vimeo) {
          playerState.setPlayerType('vimeo');
        } else if (btag) {
          playerState.setPlayerType('btag');
          const sources = await extractBundestagVideo(btag);
          playerState.setVideoSources(sources);
          
          const qualities: any[] = [];
          if (sources.mp4) {
            sources.mp4.forEach((source: any) => {
              qualities.push({
                label: `${source.quality} (${source.width}x${source.height})`,
                value: source.quality,
                format: 'mp4',
                url: source.url
              });
            });
          }
          playerState.setAvailableQualities(qualities);
          
          if (sources.mp4?.[0]) {
            playerState.setVideoSrc(sources.mp4[0].url);
            playerState.setSelectedQuality(sources.mp4[0].quality);
          }
        }
      } catch (error) {
        console.error('Video source resolution failed:', error);
      } finally {
        playerState.setIsLoading(false);
      }
    };

    resolveVideoSource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mp4, webm, youtube, vimeo, btag]); // ONLY the actual prop dependencies

  // YouTube player initialization - FIXED dependencies
  useEffect(() => {
    if (playerState.playerType === 'youtube' && youtube) {
      const initYouTubePlayer = async () => {
        const videoId = extractYouTubeId(youtube);
        if (!videoId) return;

        if (youtubeContainerRef.current) {
          const playerId = `youtube-player-${Math.random().toString(36).substr(2, 9)}`;
          youtubeContainerRef.current.innerHTML = `<div id="${playerId}"></div>`;
          
          try {
            const ytPlayer = new YouTubePlayerWrapper(playerId, videoId);
            await ytPlayer.init();
            playerState.setYoutubePlayer(ytPlayer);

            ytPlayer.on('ready', () => {
              playerState.setDuration(ytPlayer.getDuration());
              if (playerState.isMuted) ytPlayer.mute();
              playerState.setVolume(ytPlayer.getVolume());
            });

            ytPlayer.on('play', () => playerState.setIsPlaying(true));
            ytPlayer.on('pause', () => playerState.setIsPlaying(false));
            ytPlayer.on('ended', () => playerState.setIsPlaying(false));

          } catch (error) {
            console.error('Failed to initialize YouTube player:', error);
          }
        }
      };

      initYouTubePlayer();
    }

    return () => {
      if (playerState.youtubePlayer) {
        playerState.youtubePlayer.destroy();
        playerState.setYoutubePlayer(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState.playerType, youtube]); // REMOVED playerState from deps

  // Vimeo player initialization - FIXED dependencies
  useEffect(() => {
    if (playerState.playerType === 'vimeo' && vimeo) {
      const initVimeoPlayer = async () => {
        const videoId = extractVimeoId(vimeo);
        if (!videoId) return;

        if (vimeoContainerRef.current) {
          const playerId = `vimeo-player-${Math.random().toString(36).substr(2, 9)}`;
          vimeoContainerRef.current.innerHTML = `<div id="${playerId}"></div>`;
          
          try {
            const vimeoPlayer = new VimeoPlayerWrapper(playerId, videoId);
            await vimeoPlayer.init();
            playerState.setVimeoPlayer(vimeoPlayer);

            vimeoPlayer.on('ready', async () => {
              const duration = await vimeoPlayer.getDuration();
              playerState.setDuration(duration);
              if (playerState.isMuted) await vimeoPlayer.mute();
              const volume = await vimeoPlayer.getVolume();
              playerState.setVolume(volume);
            });

            vimeoPlayer.on('play', () => playerState.setIsPlaying(true));
            vimeoPlayer.on('pause', () => playerState.setIsPlaying(false));
            vimeoPlayer.on('ended', () => playerState.setIsPlaying(false));
            vimeoPlayer.on('timeupdate', (data: any) => {
              playerState.setCurrentTime(data.seconds);
            });

          } catch (error) {
            console.error('Failed to initialize Vimeo player:', error);
          }
        }
      };

      initVimeoPlayer();
    }

    return () => {
      if (playerState.vimeoPlayer) {
        playerState.vimeoPlayer.destroy();
        playerState.setVimeoPlayer(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState.playerType, vimeo]); // REMOVED playerState from deps

  // Native video event listeners - FIXED dependencies
  useEffect(() => {
    const video = videoRef.current;
    if (!video || (playerState.playerType !== 'video' && playerState.playerType !== 'btag')) return;
    
    const onTimeUpdate = () => playerState.setCurrentTime(video.currentTime);
    const onLoaded = () => playerState.setDuration(video.duration);
    
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoaded);
    
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoaded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState.playerType]); // REMOVED playerState from deps

  // Chapter highlighting - FIXED dependencies
  useEffect(() => {
    if (parsedChapters.length === 0) return;
    const idx = parsedChapters.findIndex((ch: any) => 
      playerState.currentTime >= ch.start && playerState.currentTime < ch.end
    );
    playerState.setCurrentChapterIdx(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState.currentTime, parsedChapters]); // REMOVED playerState from deps

  // Auto-hide controls - KORRIGIERT: Nur verstecken wenn Video läuft
  useEffect(() => {
    if (!playerState.controlsVisible || !playerState.isPlaying) return;
    
    if (autoHideTimeoutRef.current) {
      clearTimeout(autoHideTimeoutRef.current);
    }
    
    autoHideTimeoutRef.current = setTimeout(() => {
      if (playerState.isPlaying) {
        playerState.setControlsVisible(false);
      }
    }, 3000);
    
    return () => {
      if (autoHideTimeoutRef.current) {
        clearTimeout(autoHideTimeoutRef.current);
        autoHideTimeoutRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState.controlsVisible, playerState.isPlaying]);

  // Show controls on interaction - KORRIGIERT: Entfernt autoHideTimeout
  useEffect(() => {
    const show = () => {
      playerState.setControlsVisible(true);
    };
    
    window.addEventListener('mousemove', show);
    window.addEventListener('keydown', show);
    
    return () => {
      window.removeEventListener('mousemove', show);
      window.removeEventListener('keydown', show);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PiP support check - FIXED to run only once
  useEffect(() => {
    playerState.setIsPiPSupported(!!(document as any).pictureInPictureEnabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // EMPTY dependency array - run only once

  // CC toggle effect - FIXED dependencies
  useEffect(() => {
    if (videoRef.current && (playerState.playerType === 'video' || playerState.playerType === 'btag')) {
      const tracks = videoRef.current.textTracks;
      for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].kind === 'subtitles') {
          tracks[i].mode = playerState.showCC ? 'showing' : 'hidden';
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState.showCC, captions, playerState.playerType]); // REMOVED playerState and videoRef from deps

  // Add styles - FIXED to run only once
  useEffect(() => {
    return addPlayerStyles();
  }, []); // EMPTY dependency array - run only once
};