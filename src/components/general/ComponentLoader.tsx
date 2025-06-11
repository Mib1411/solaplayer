'use client';

import React, { lazy, Suspense } from 'react';
import { usePlayer } from '../PlayerProvider'; // ✅ HINZUFÜGEN!

// DYNAMISCHE IMPORTS für alle Components
const PlayPauseButton = lazy(() => import('../controls/PlayPauseButton').then(m => ({ default: m.PlayPauseButton })));
const VolumeButton = lazy(() => import('../controls/VolumeButton').then(m => ({ default: m.VolumeButton })));
const MuteButton = lazy(() => import('../controls/MuteButton').then(m => ({ default: m.MuteButton })));
const CaptionsButton = lazy(() => import('../controls/CaptionsButton').then(m => ({ default: m.CaptionsButton })));
const CaptionsOverlay = lazy(() => import('../controls/CaptionsOverlay').then(m => ({ default: m.CaptionsOverlay })));
const TranscriptButton = lazy(() => import('../controls/TranscriptButton').then(m => ({ default: m.TranscriptButton })));
const TranscriptSidebar = lazy(() => import('../controls/TranscriptSidebar').then(m => ({ default: m.TranscriptSidebar })));
const ChaptersButton = lazy(() => import('../controls/ChaptersButton').then(m => ({ default: m.ChaptersButton })));
const ChaptersSidebar = lazy(() => import('../controls/ChaptersSidebar').then(m => ({ default: m.ChaptersSidebar })));
const SettingsButton = lazy(() => import('../controls/SettingsButton').then(m => ({ default: m.SettingsButton })));
const SettingsModal = lazy(() => import('../controls/SettingsModal').then(m => ({ default: m.SettingsModal })));
const InfoButton = lazy(() => import('../controls/InfoButton').then(m => ({ default: m.InfoButton })));
const InfoModal = lazy(() => import('../controls/InfoModal').then(m => ({ default: m.InfoModal })));
const ProgressBar = lazy(() => import('../controls/ProgressBar').then(m => ({ default: m.ProgressBar })));
const FullscreenButton = lazy(() => import('../controls/FullscreenButton').then(m => ({ default: m.FullscreenButton })));
const PiPButton = lazy(() => import('../controls/PiPButton').then(m => ({ default: m.PiPButton })));
const SkipButton = lazy(() => import('../controls/SkipButton').then(m => ({ default: m.SkipButton })));
const SpeedButton = lazy(() => import('../controls/SpeedButton').then(m => ({ default: m.SpeedButton })));
const QualityButton = lazy(() => import('../controls/QualityButton').then(m => ({ default: m.QualityButton })));
const AudioDescButton = lazy(() => import('../controls/AudioDescButton').then(m => ({ default: m.AudioDescButton })));
const ExpandButton = lazy(() => import('../controls/ExpandButton').then(m => ({ default: m.ExpandButton })));
const PreviousChapterButton = lazy(() => import('../controls/ChaptersSkipButtons').then(m => ({ default: m.PreviousChapterButton })));
const NextChapterButton = lazy(() => import('../controls/ChaptersSkipButtons').then(m => ({ default: m.NextChapterButton })));

const size: number = 18; // Default size for icons

interface ComponentLoaderProps {
  componentName: string;
  playerState?: any;
  playerControls?: any;
  hasCC?: boolean;
  hasTranscript?: boolean;
  hasChapters?: boolean;
  hasAudioDesc?: boolean;
  availableQualities?: any[];
  onFullPlayerClick?: () => void;
  size?: number;
  type?: string;
  [key: string]: any;
  availableContent?: any;
}

export const ComponentLoader: React.FC<ComponentLoaderProps> = ({
  componentName,
  playerState,
  playerControls,
  chapterState,
  hasCC,
  hasTranscript,
  hasChapters,
  hasAudioDesc,
  availableQualities,
  onFullPlayerClick,
  size = 18,
  availableContent,
  ...otherProps
}) => {
  const { ui } = usePlayer(); // ✅ UI State direkt holen!

  
  const renderComponent = () => {
    switch (componentName) {
      case 'PlayPauseButton':
        return <PlayPauseButton playerState={playerState} playerControls={playerControls} size={size} />;
      case 'VolumeButton':
        return <VolumeButton playerState={playerState} playerControls={playerControls} />;
      case 'MuteButton':
        return <MuteButton playerState={playerState} playerControls={playerControls} size={size} />;
      case 'CaptionsButton':
        console.log('CaptionsButton Props:', { hasCC, availableContent });
        return <CaptionsButton playerState={playerState} playerControls={playerControls} hasCC={hasCC || false} size={size} />;
      case 'CaptionsOverlay':
        // ✅ CONDITIONAL RENDERING HINZUFÜGEN!
        if (!playerState?.ui?.showCC) return null;
        return <CaptionsOverlay
          playerState={playerState}
          captionsUrl={availableContent?.captionsUrl || ''}
          size={size}
        />;
      case 'ProgressBar':
        return <ProgressBar playerControls={playerControls} playerState={playerState} />;
      case 'TranscriptButton':
        if (!hasTranscript ) return null;
        return <TranscriptButton playerState={playerState}  playerControls={playerControls} />;
      case 'TranscriptSidebar':
        return <TranscriptSidebar
          playerState={playerState}
          playerControls={playerControls}
          captionsUrl={availableContent?.captionsUrl || ''} 
          descriptionsUrl={availableContent?.descriptionsUrl || ''}
        />;
      case 'ChaptersButton':
        if (!hasChapters ) return null;      
       return <ChaptersButton playerState={playerState} playerControls={playerControls}   />;

      case 'PreviousChapterButton':
          // ✅ RENDER IMMER - DISABLED STATE WIRD IN COMPONENT GEHANDELT:
          return <PreviousChapterButton 
            playerState={playerState} 
            playerControls={playerControls} 
          />;

      case 'NextChapterButton':
        // ✅ RENDER IMMER - DISABLED STATE WIRD IN COMPONENT GEHANDELT:
        return <NextChapterButton 
          playerState={playerState} 
          playerControls={playerControls} 
        />;

      case 'ChaptersSidebar':
        if (!playerState?.ui?.showChapters) return null;
        return <ChaptersSidebar
          playerState={playerState}
          playerControls={playerControls}
          chaptersUrl={availableContent?.chaptersUrl || ''}
        />;
      case 'SettingsButton':
        return <SettingsButton playerState={playerState} playerControls={playerControls} size={size} />;
      case 'SettingsModal':
        console.log('SettingsModal render:', {
          open: ui?.settingsOpen,
          playerState: playerState,
          playerControls: playerControls
        });
        return <SettingsModal
          open={ui?.settingsOpen || false}
          onClose={playerControls?.handleToggleSettings || (() => { })}
          playerState={playerState}
        />;
      case 'InfoButton':
        return <InfoButton playerState={playerState} playerControls={playerControls} />;
      case 'InfoModal':
        console.log('InfoModal render:', {
          open: ui?.infoOpen,
          playerState: playerState,
          playerControls: playerControls
        });
        return <InfoModal
          open={ui?.infoOpen || false}
          onClose={playerControls?.handleToggleInfo || (() => { })}
        />;
      case 'FullscreenButton':
        return <FullscreenButton playerState={playerState} playerControls={playerControls} size={size} />;
      case 'PiPButton':
        return <PiPButton playerState={playerState} playerControls={playerControls} size={size} />;
      case 'SkipBackButton':
        return <SkipButton playerState={playerState} playerControls={playerControls} type="back" size={size} />;
      case 'SkipForwardButton':
        return <SkipButton playerState={playerState} playerControls={playerControls} type="forward" size={size} />;
      case 'ReturnButton':
        return <SkipButton playerState={playerState} playerControls={playerControls} type="return" size={size} />;
      case 'SpeedButton':
        return <SpeedButton playerState={playerState} playerControls={playerControls} size={size} />;
      case 'QualityButton':
        return <QualityButton playerState={playerState} playerControls={playerControls} availableQualities={availableQualities || []} size={size} />;
      case 'AudioDescButton':
        return <AudioDescButton 
          playerState={playerState} 
          playerControls={playerControls} 
          hasAudioDesc={hasAudioDesc || false}
          descriptionsUrl={availableContent?.descriptionsUrl || ''}
          size={size}
        />;
      case 'ExpandButton':
        return <ExpandButton onFullPlayerClick={onFullPlayerClick || (() => { })} size={size} />;
      default:
        console.warn(`Unknown component: ${componentName}`);
        return null;
    }
  };

  return (
    <Suspense fallback={<div className="component-loading">..</div>}>
      {renderComponent()}
    </Suspense>
  );
};