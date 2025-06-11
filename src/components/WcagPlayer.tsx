"use client"

import React, { useMemo, useEffect, useRef } from 'react';
import { RenderArea } from './general/RenderArea';
import { useScreenReaderAnnouncements } from '../hooks/useScreenReaderAnnouncements';
import { PlayIcon } from '../utils/icons';
import { WcagPlayerProps } from '../types/player';
import { ARIA_LABELS, CSS_CLASSES, PLAYER_LABELS } from '../utils/constants';
import { PlayerProvider, usePlayer } from './PlayerProvider';
import { CONFIG } from './general/config/playerConfig';

// ✅ HOOKS IMPORTIEREN:
import { useCaptions } from './general/hooks/useCaptions';
import { useDescriptions } from './general/hooks/useDescriptions';
import { useChapters } from './general/hooks/useChapters';
import { usePlayerBasics } from './general/hooks/usePlayerBasics';
import { usePlayerExtensions } from './general/hooks/usePlayerExtensions';
import { useAccessibility } from './general/hooks/useAccessibility';
import { useVideoSources } from './general/hooks/useVideoSources';

import '../styles/player-base.css';
import Image from 'next/image';

const WcagPlayerInner: React.FC<WcagPlayerProps> = ({ 
  mp4, webm, youtube, vimeo, btag, poster, captionsUrl, descriptionsUrl, chaptersUrl, playerMode = 'base', link, onVideoOpen, videoId
}) => {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const youtubeContainerRef = useRef<HTMLDivElement>(null!);
  const vimeoContainerRef = useRef<HTMLDivElement>(null!);
  
  // ✅ CONTEXT NUTZEN:
  const { 
    htmlPlayer,
    ui,
    availableContent,
    setVideoRef,
    setPlayerType,
    setAvailableContent
  } = usePlayer();
  
  // ✅ RICHTIGE CONFIG CHECKS NACH TATSÄCHLICHER STRUKTUR:
  const playOnThumbnailSetting = CONFIG.settings.playOnThumbnail[playerMode];
  
  // ✅ HOOKS AUFRUFEN:
  const basicsActions = usePlayerBasics(playerMode);
  const captionsActions = useCaptions(playerMode);
  const descriptionsActions = useDescriptions(playerMode);
  const chaptersActions = useChapters(playerMode);
  const extensionsActions = usePlayerExtensions(playerMode);
  const videoSources = useVideoSources();

  // ✅ AVAILABLE CONTENT RICHTIG SETZEN:
  useEffect(() => {
    const content = {
      hasCaptions: !!captionsUrl,
      hasChapters: !!chaptersUrl,
      hasDescriptions: !!descriptionsUrl,
      hasPoster: !!poster, // ✅ NUR ÜBERGEBENES POSTER
      hasQualities: false, // ✅ HINZUFÜGEN - wird von useVideoSources überschrieben
      
      // URLs nur wenn vorhanden:
      ...(captionsUrl && { captionsUrl }),
      ...(chaptersUrl && { chaptersUrl }),
      ...(descriptionsUrl && { descriptionsUrl }),
      ...(poster && { posterUrl: poster }),
      
      // ✅ SOURCES ARRAY HINZUFÜGEN:
      sources: [] // ✅ HINZUFÜGEN - wird von useVideoSources gefüllt
    };
    
    setAvailableContent(content);
  }, [captionsUrl, descriptionsUrl, chaptersUrl, poster, setAvailableContent]);

  // ✅ ACCESSIBILITY HOOK:
  const accessibilityActions = useAccessibility({
    playerMode,
    enabled: true,
    videoRef,
    onSpacePress: basicsActions.handlePlayPause,
    onLeftArrow: () => basicsActions.handleSeekBackward?.(10),
    onRightArrow: () => basicsActions.handleSeekForward?.(10),
    onUpArrow: basicsActions.handleVolumeUp,
    onDownArrow: basicsActions.handleVolumeDown,
    onM: basicsActions.handleMute,
    onF: extensionsActions.handleToggleFullscreen,
    onC: captionsActions.handleToggleCC,
    onT: descriptionsActions.handleToggleTranscript,
    onEscape: extensionsActions.handleCloseModals
  });
  
  // ✅ VIDEO REF AN PROVIDER WEITERLEITEN:
  useEffect(() => {
    if (videoRef.current) {
      setVideoRef(videoRef);
    }
  }, [setVideoRef]);

  // ✅ VIDEO SOURCE SETUP - MIT CONFIG CHECKS UND KORREKTEN PLAYER TYPES:
  useEffect(() => {
    if (mp4 && CONFIG.videoTypes.mp4) {
      setPlayerType('html5'); // ✅ NICHT 'html5' SONDERN 'html'
      videoSources.processVideoSources?.(mp4, 'mp4');
      
    } else if (webm && CONFIG.videoTypes.webm) {
      setPlayerType('html5'); // ✅ NICHT 'html5' SONDERN 'html'
      videoSources.processVideoSources?.(webm, 'webm');
      
    } else if (youtube && CONFIG.videoTypes.youtube) {
      setPlayerType('youtube'); // ✅ KORREKT
      videoSources.processVideoSources?.(youtube, 'youtube');
      
    } else if (vimeo && CONFIG.videoTypes.vimeo) {
      setPlayerType('vimeo'); // ✅ KORREKT
      videoSources.processVideoSources?.(vimeo, 'vimeo');
      
    } else if (btag && CONFIG.videoTypes.bundestag) {
      setPlayerType('html5'); // ✅ BUNDESTAG → HTML
      videoSources.processVideoSources?.(btag, 'bundestag');
      
    } else {
      // ✅ FALLBACK: KEIN UNTERSTÜTZTER VIDEO TYP
      console.warn('No supported video type provided or video type disabled in config');
      htmlPlayer.setIsLoading(false);
      return;
    }

    htmlPlayer.setIsLoading(false);
  }, [mp4, webm, youtube, vimeo, btag, videoSources, htmlPlayer, setPlayerType]);

  const { announceChange } = useScreenReaderAnnouncements();

  // ✅ PLAYER CONTROLS KOMBINIEREN:
  const playerControls = useMemo(() => ({
    ...htmlPlayer,
    ...basicsActions,
    ...captionsActions,
    ...descriptionsActions,
    ...chaptersActions,
    ...extensionsActions,
    ...accessibilityActions,
  }), [htmlPlayer, basicsActions, captionsActions, descriptionsActions, chaptersActions, extensionsActions, accessibilityActions]);

  // ✅ PLAYER STATE:
  const playerState = useMemo(() => ({
    isPlaying: htmlPlayer.isPlaying,
    currentTime: htmlPlayer.currentTime,
    duration: htmlPlayer.duration,
    isLoading: htmlPlayer.isLoading,
    volume: basicsActions.volume,
    isMuted: basicsActions.isMuted,
    playbackRate: basicsActions.playbackRate,
    ui: {
      hasStartedOnce: ui.hasStartedOnce,
      controlsVisible: ui.controlsVisible,
      showTranscript: ui.showTranscript,
      showCC: ui.showCC,
      showChapters: ui.showChapters,
      settingsOpen: ui.settingsOpen,
      infoOpen: ui.infoOpen,
      audioDescActive: ui.audioDescActive,
    },
    videoSources: {
      playerType: videoSources.playerType,
      videoSrc: videoSources.videoSrc,
      thumbnail: videoSources.thumbnail,
      availableQualities: videoSources.availableQualities
    }
  }), [htmlPlayer, basicsActions, ui, videoSources]);

  return (
    <>
      <div 
        role={ARIA_LABELS.APPLICATION}
        aria-label={PLAYER_LABELS.VIDEO_PLAYER}
        className={`wcag-player-container player-mode-${playerMode}`}
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
            {videoSources.playerType === 'html5' && availableContent?.sources && (
              <video
                ref={videoRef}
                poster={poster}
                className="video-element"
                controls={false}
                playsInline
                autoPlay={false}
                muted={basicsActions.isMuted}
              >
                {/* ✅ SOURCES AUS availableContent.sources: */}
                {availableContent.sources.map((source, index) => (
                  <source 
                    key={index}
                    src={source.url} 
                    type={`video/${source.url.split('.').pop()}`}
                    data-quality={source.quality}
                    data-width={source.width}
                    data-height={source.height}
                  />
                ))}
                
                {/* ✅ FALLBACK: */}
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
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
              {!ui.hasStartedOnce && !htmlPlayer.isLoading && (
                <div className="poster-area">
                  
                  {/* ✅ POSTER: NUR ÜBERGEBENES IMAGE */}
                  {poster && (
                    <Image 
                      src={poster} 
                      alt="Video Poster"
                      className="poster-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  )}
                  
                  {/* ✅ YOUTUBE/VIMEO THUMBNAIL: WENN KEIN POSTER */}
                  {!poster && videoSources.thumbnail && (videoSources.playerType === 'youtube' || videoSources.playerType === 'vimeo') && (
                    <Image 
                      src={videoSources.thumbnail} 
                      alt="Video Thumbnail"
                      className="thumbnail-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  
                  {/* ✅ HTML BLURRY OVERLAY: WENN KEIN POSTER */}
                  {!poster && videoSources.playerType === 'html5' && ( // ✅ 'video' → 'html'
                    <div className="blurry-overlay" />
                  )}
                  
                  {/* ✅ PLAY BUTTON AUS SETTING */}
                  {playOnThumbnailSetting && (
                    <button 
                      className="play-button-large"
                      onClick={basicsActions.handlePlay}
                      aria-label="Video abspielen"
                    >
                      <PlayIcon size={48} />
                    </button>
                  )}
                </div>
              )}

              {/* LOADING OVERLAY */}
              {htmlPlayer.isLoading && (
                <div className="loading-overlay">
                  <div>Lädt...</div>
                </div>
              )}

              {/* CONTROLS AREA */}
              <div className={`controls-area ${ui.controlsVisible ? 'controls-visible' : 'controls-hidden'}`}>
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
      {(ui.settingsOpen || ui.infoOpen) && (
        <div className="modal-overlay" onClick={() => {
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
    >
      <WcagPlayerInner {...props} />
    </PlayerProvider>
  );
};

