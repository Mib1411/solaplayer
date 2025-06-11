"use client"

import React, { useMemo, useEffect, useRef, useState } from 'react';
import { RenderArea } from '../components/general/RenderArea';
import { useScreenReaderAnnouncements } from '../hooks/useScreenReaderAnnouncements';
import { useVideoPlayer } from './general/hooks/useVideoPlayer';
import { PlayIcon } from '../utils/icons';
import { WcagPlayerProps } from '../types/player';
import { ARIA_LABELS, CSS_CLASSES, PLAYER_LABELS } from '../utils/constants';
import { extractBundestagId, extractBundestagVideo, extractVimeoId, extractYouTubeId } from '../utils/videoExtractors';
import { PlayerProvider, usePlayer } from './PlayerProvider';
import { YouTubePlayerWrapper } from './general/players/youtubePlayer'; // ✅ PLAYER FOLDER
import { VimeoPlayerWrapper } from './general/players/vimeoPlayer';     // ✅ PLAYER FOLDER
import '../styles/player-base.css';
import Image from 'next/image';


// Inner Component that uses the Provider context
const WcagPlayerInner: React.FC<WcagPlayerProps> = ({ 
  mp4, webm, youtube, vimeo, btag, poster, captionsUrl, descriptionsUrl, chaptersUrl, playerMode = 'base', link, onVideoOpen, videoId
}) => {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const youtubeContainerRef = useRef<HTMLDivElement>(null!);
  const vimeoContainerRef = useRef<HTMLDivElement>(null!);
  const [showPopup, setShowPopup] = useState(false);
  
  // ✅ NUTZE NEUE HOOK STRUCTURE:
  const { 
    mediaPlayer,
    playerBasicsActions,    // ✅ SEPARATE!
    captionsActions,
    descriptionsActions,
    chaptersActions,
    extensionsActions,
    accessibilityActions
  } = usePlayer();
  
  // ✅ videoRef an Provider weiterleiten:
  useEffect(() => {
    if (videoRef.current) {
      setVideoRef(videoRef);
    }
  }, [videoRef.current, setVideoRef]);

  const videoPlayer = useVideoPlayer();

  // ✅ ENHANCED PLAYER CONTROLS - KOMBINIERT ALLE HOOKS:
  const playerControls = useMemo(() => ({
    // ✅ MEDIA PLAYER (nur global states + seek):
    ...mediaPlayer,
    
    // ✅ PLAYER BASICS (alle handler):
    ...playerBasicsActions,
    
    // ✅ FEATURES:
    ...captionsActions,
    ...descriptionsActions,
    ...chaptersActions,
    ...extensionsActions,
    ...accessibilityActions,

  }), [mediaPlayer, playerBasicsActions, captionsActions, descriptionsActions, chaptersActions, extensionsActions, accessibilityActions]);

  // Video Source Setup mit PLAYER TYPE DETECTION
  useEffect(() => {
    console.log('🔍 WcagPlayer Props:', {
      mp4, youtube, vimeo, btag,
      captionsUrl, descriptionsUrl, chaptersUrl
    });
    
    if (mp4) {
      setPlayerType('html5');
      videoSources.setPlayerType('video');
      videoSources.setVideoSrc(typeof mp4 === 'string' ? mp4 : mp4[0]);
      
    } else if (youtube) {
      setPlayerType('youtube');
      videoSources.setPlayerType('youtube');
      const youtubeId = extractYouTubeId(youtube);
      if (youtubeId) {
        videoSources.setVideoSrc(youtubeId);
        videoSources.generateThumbnail('youtube', youtubeId);

        // ✅ INITIALIZE YOUTUBE PLAYER:
        setTimeout(() => {
          const container = youtubeContainerRef.current;
          if (container) {
            container.id = `youtube-player-${Date.now()}`;
            const ytPlayer = new YouTubePlayerWrapper(container.id, youtubeId);
            
            ytPlayer.init().then(() => {
              setYoutubePlayer(ytPlayer);
              
              // Connect events
              ytPlayer.on('play', () => mediaPlayer.setIsPlaying(true));
              ytPlayer.on('pause', () => mediaPlayer.setIsPlaying(false));
              ytPlayer.on('timeupdate', (data: any) => {
                mediaPlayer.setCurrentTime(data.currentTime);
                if (data.duration) mediaPlayer.setDuration(data.duration);
              });
            }).catch(console.error);
          }
        }, 100);
      }
      
    } else if (vimeo) {
      setPlayerType('vimeo');
      videoSources.setPlayerType('vimeo');
      const vimeoId = extractVimeoId(vimeo);
      if (vimeoId) {
        videoSources.setVideoSrc(vimeoId);
        videoSources.generateThumbnail('vimeo', vimeoId);

        // ✅ INITIALIZE VIMEO PLAYER:
        setTimeout(() => {
          const container = vimeoContainerRef.current;
          if (container) {
            container.id = `vimeo-player-${Date.now()}`;
            const vmPlayer = new VimeoPlayerWrapper(container.id, vimeoId);
            
            vmPlayer.init().then(() => {
              setVimeoPlayer(vmPlayer);
              
              // Connect events
              vmPlayer.on('play', () => mediaPlayer.setIsPlaying(true));
              vmPlayer.on('pause', () => mediaPlayer.setIsPlaying(false));
              vmPlayer.on('timeupdate', (data: any) => {
                mediaPlayer.setCurrentTime(data.currentTime);
                if (data.duration) mediaPlayer.setDuration(data.duration);
              });
            }).catch(console.error);
          }
        }, 100);
      }
      
    } else if (btag) {
      setPlayerType('html5');
      const bundestagId = extractBundestagId(btag);
      if (bundestagId) {
        extractBundestagVideo(btag).then(sources => {
          videoSources.setVideoSources(sources);
          if (sources.mp4?.[0]) {
            videoSources.setVideoSrc(sources.mp4[0].url);
          }
        }).catch(console.error);
      }
    }

    mediaPlayer.setIsLoading(false);
  }, [mp4, youtube, vimeo, btag, videoSources, mediaPlayer, setPlayerType, setYoutubePlayer, setVimeoPlayer]);

  const { announceChange } = useScreenReaderAnnouncements();

  const handleContainerClick = () => {
    if (!mediaPlayer.isPlaying && !mediaPlayer.hasStartedOnce) {
      playerControls.handlePlay?.();
      mediaPlayer.setControlsVisible(true);
      mediaPlayer.setHasStartedOnce(true);
    }
  };

  useEffect(() => {
    if (playerMode === 'base') {
      mediaPlayer.setControlsVisible(true);
    } else {
      mediaPlayer.setControlsVisible(mediaPlayer.hasStartedOnce);
    }
  }, [playerMode, mediaPlayer]);

  const handleFullPlayerClick = () => {
    if (link) {
      window.open(link, '_self');
    } else {
      setShowPopup(true);
    }
  };

  // ✅ availableContent MIT NEUEN HOOKS:
  const availableContent = useMemo(() => ({
    captionsUrl: captionsUrl,
    descriptionsUrl: descriptionsUrl, 
    chaptersUrl: chaptersUrl,
    hasCC: captionsActions.hasCC || false,
    hasTranscript: descriptionsActions.hasTranscript || false,
    hasChapters: chaptersActions.hasChapters || false,
    hasAudioDesc: descriptionsActions.hasAudioDesc || false
  }), [captionsUrl, descriptionsUrl, chaptersUrl, captionsActions, descriptionsActions, chaptersActions]);

  // ✅ playerState MIT NEUEN HOOKS:
  const playerState = useMemo(() => ({
    // Media State
    isPlaying: mediaPlayer.isPlaying,
    currentTime: mediaPlayer.currentTime,
    duration: mediaPlayer.duration,
    volume: mediaPlayer.volume,
    isMuted: mediaPlayer.isMuted,
    playbackRate: mediaPlayer.playbackRate,
    isLoading: mediaPlayer.isLoading,
    hasStartedOnce: mediaPlayer.hasStartedOnce,

    // UI State aus NEUEN HOOKS:
    ui: {
      showTranscript: descriptionsActions.showTranscript || false,
      showCC: captionsActions.showCC || false,
      showChapters: chaptersActions.showChapters || false,
      settingsOpen: extensionsActions.settingsOpen || false,
      infoOpen: extensionsActions.infoOpen || false,
      audioDescActive: descriptionsActions.audioDescActive || false,
      controlsVisible: basicsActions.controlsVisible,
    },
    
    // Video Sources
    videoSources: {
      playerType: videoSources.playerType,
      videoSrc: videoSources.videoSrc,
      thumbnail: videoSources.thumbnail,
      availableQualities: videoSources.availableQualities
    }
  }), [mediaPlayer, basicsActions, videoSources, captionsActions, descriptionsActions, chaptersActions, extensionsActions]);

  return (
    <>
      <div 
        role={ARIA_LABELS.APPLICATION}
        aria-label={PLAYER_LABELS.VIDEO_PLAYER}
        className={`wcag-player-container player-mode-${playerMode}`}
        onClick={handleContainerClick}
      >
        <div id="player-instructions" className={CSS_CLASSES.SCREEN_READER_ONLY}>
          {PLAYER_LABELS.KEYBOARD_INSTRUCTIONS}
        </div>

        {/* SIDEBAR LEFT */}
        {playerMode === 'extended' && (
          <div className="sidebar-container sidebar-left">
            <RenderArea
              playerMode={playerMode}
              area="sidebar"
              subArea="left"
              playerState={playerState}
              playerControls={playerControls}
              availableContent={availableContent}
            />
          </div>
        )}

        {/* VIDEO AREA */}
        <div className="video-area">
          <div className="player-area">
            
            {/* VIDEO ELEMENT */}
            {videoSources.playerType === 'video' && videoSources.videoSrc && (
              <video
                ref={videoRef}
                src={videoSources.videoSrc}
                poster={poster}
                className="video-element"
                controls={false}
                playsInline
                autoPlay={false}
                muted={mediaPlayer.isMuted}
              />
            )}

            {/* YOUTUBE CONTAINER */}
            {videoSources.playerType === 'youtube' && (
              <div ref={youtubeContainerRef} className="youtube-container" />
            )}

            {/* VIMEO CONTAINER */}
            {videoSources.playerType === 'vimeo' && (
              <div ref={vimeoContainerRef} className="vimeo-container" />
            )}

            {/* OVERLAY AREA */}
            <div className="overlay-area">
              
              {/* POSTER AREA */}
              {!mediaPlayer.hasStartedOnce && !mediaPlayer.isLoading && (
                <div className="poster-area">
                  {(poster || videoSources.thumbnail) && (
                    <Image 
                      src={poster || videoSources.thumbnail || ''} 
                      alt="Video Thumbnail"
                      className="poster-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  )}
                  <div className="play-button-large" onClick={handleContainerClick}>
                    <PlayIcon size={48} />
                  </div>
                </div>
              )}

              {/* LOADING OVERLAY */}
              {mediaPlayer.isLoading && (
                <div className="loading-overlay">
                  <div>Lädt...</div>
                </div>
              )}

              {/* CONTROLS AREA */}
                <div className={`controls-area ${mediaPlayer.controlsVisible ? 'controls-visible' : 'controls-hidden'}`}>
                  <div className="controls-top">
                    <RenderArea
                      playerMode={playerMode}
                      area="controls"
                      subArea="top"
                      playerState={playerState}
                      playerControls={playerControls}
                      availableContent={availableContent}
                    />
                  </div>

                  <div className="controls-bottom">
                    <div className="controls-left">
                      <RenderArea
                        playerMode={playerMode}
                        area="controls"
                        subArea="left"
                        playerState={playerState}
                        playerControls={playerControls}
                        availableContent={availableContent}
                      />
                    </div>
                
                    <div className="controls-right">
                      <RenderArea
                        playerMode={playerMode}
                        area="controls"
                        subArea="right"
                        playerState={playerState}
                        playerControls={playerControls}
                        availableContent={availableContent}
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR RIGHT */}
        {playerMode === 'extended' && (
          <div className="sidebar-container sidebar-right">
            <RenderArea
              playerMode={playerMode}
              area="sidebar"
              subArea="right"
              playerState={playerState}
              playerControls={playerControls}
              availableContent={availableContent}
            />
          </div>
        )}
      </div>

      {/* MODAL OVERLAY */}
      {(showPopup || playerState.ui.settingsOpen || playerState.ui.infoOpen) && (
        <div className="modal-overlay" onClick={() => {
          setShowPopup(false);
          extensionsActions.handleCloseModals?.();
        }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <RenderArea
              playerMode={playerMode}
              area="popup"
              subArea="center"
              playerState={playerState}
              playerControls={playerControls}
              availableContent={availableContent}
            />
          </div>
        </div>
      )}
    </>
  );
};

export const WcagPlayer: React.FC<WcagPlayerProps> = (props) => {
  return (
    <PlayerProvider 
      playerMode={props.playerMode}
      captionsUrl={props.captionsUrl}
      descriptionsUrl={props.descriptionsUrl}
      chaptersUrl={props.chaptersUrl}
    >
      <WcagPlayerInner {...props} />
    </PlayerProvider>
  );
};

