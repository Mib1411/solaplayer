'use client';

import React, { lazy, Suspense } from 'react';
import { usePlayer } from '../PlayerProvider';
import { isFeatureEnabled } from '../../utils/player-utils';


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
}

export const ComponentLoader: React.FC<ComponentLoaderProps> = ({
  componentName,
  playerState,
  playerControls,
  playerMode = 'base',
  size = 18,
  onFullPlayerClick,
  ...otherProps
}) => {
  // ✅ NUTZE PLAYER CONTEXT:
  const { ui, availableContent, playerType } = usePlayer();

  const renderComponent = () => {
    switch (componentName) {
      case 'PlayPauseButton':
        if (!isFeatureEnabled('playPause', playerMode)) return null;
        return <PlayPauseButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size} 
        />;

      case 'VolumeButton':
        if (!isFeatureEnabled('volume', playerMode)) return null;
        return <VolumeButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size}
        />;

      case 'MuteButton':
        if (!isFeatureEnabled('mute', playerMode)) return null;
        return <MuteButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size} 
        />;

      case 'CaptionsButton':
        if (!isFeatureEnabled('captions', playerMode)) return null;
        // ✅ NUTZE availableContent.hasCaptions:
        if (!availableContent.hasCaptions) return null;
        return <CaptionsButton 
          playerState={playerState} 
          playerControls={playerControls} 
          hasCC={availableContent.hasCaptions}
          size={size} 
        />;

      case 'CaptionsOverlay':
        if (!isFeatureEnabled('captions', playerMode)) return null;
        // ✅ CONDITIONAL RENDERING MIT UI STATE:
        if (!ui.showCC || !availableContent.hasCaptions) return null;
        return <CaptionsOverlay
          playerState={playerState}
          captionsUrl={availableContent.captionsUrl || ''}
          size={size}
        />;

      case 'ProgressBar':
        if (!isFeatureEnabled('progressBar', playerMode)) return null;
        return <ProgressBar 
          playerControls={playerControls} 
          playerState={playerState} 
        />;

      case 'TranscriptButton':
        if (!isFeatureEnabled('transcript', playerMode)) return null;
        // ✅ NUTZE availableContent.hasDescriptions:
        if (!availableContent.hasDescriptions) return null;
        return <TranscriptButton 
          playerState={playerState}  
          playerControls={playerControls}
          hasTranscript={availableContent.hasDescriptions}
          size={size}
        />;

      case 'TranscriptSidebar':
        if (!isFeatureEnabled('transcript', playerMode)) return null;
        // ✅ CONDITIONAL RENDERING MIT UI STATE:
        if (!ui.showTranscript || !availableContent.hasDescriptions) return null;
        return <TranscriptSidebar
          playerState={playerState}
          playerControls={playerControls}
          captionsUrl={availableContent.captionsUrl || ''} 
          descriptionsUrl={availableContent.descriptionsUrl || ''}
        />;

      case 'ChaptersButton':
        if (!isFeatureEnabled('chapters', playerMode)) return null;
        // ✅ NUTZE availableContent.hasChapters:
        if (!availableContent.hasChapters) return null;      
        return <ChaptersButton 
          playerState={playerState} 
          playerControls={playerControls}
          hasChapters={availableContent.hasChapters}
          size={size}
        />;

      case 'PreviousChapterButton':
        if (!isFeatureEnabled('chapterSkipping', playerMode)) return null;
        // ✅ RENDER IMMER - DISABLED STATE WIRD IN COMPONENT GEHANDELT:
        return <PreviousChapterButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size}
        />;

      case 'NextChapterButton':
        if (!isFeatureEnabled('chapterSkipping', playerMode)) return null;
        // ✅ RENDER IMMER - DISABLED STATE WIRD IN COMPONENT GEHANDELT:
        return <NextChapterButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size}
        />;

      case 'ChaptersSidebar':
        if (!isFeatureEnabled('chapters', playerMode)) return null;
        // ✅ CONDITIONAL RENDERING MIT UI STATE:
        if (!ui.showChapters || !availableContent.hasChapters) return null;
        return <ChaptersSidebar
          playerState={playerState}
          playerControls={playerControls}
          chaptersUrl={availableContent.chaptersUrl || ''}
        />;

      case 'SettingsButton':
        if (!isFeatureEnabled('settings', playerMode)) return null;
        return <SettingsButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size} 
        />;

      case 'SettingsModal':
        if (!isFeatureEnabled('settings', playerMode)) return null;
        // ✅ NUTZE UI STATE AUS CONTEXT:
        return <SettingsModal
          open={ui.settingsOpen}
          onClose={playerControls?.handleToggleSettings || (() => {})}
          playerState={playerState}
        />;

      case 'InfoButton':
        if (!isFeatureEnabled('info', playerMode)) return null;
        return <InfoButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size}
        />;

      case 'InfoModal':
        if (!isFeatureEnabled('info', playerMode)) return null;
        // ✅ NUTZE UI STATE AUS CONTEXT:
        return <InfoModal
          open={ui.infoOpen}
          onClose={playerControls?.handleToggleInfo || (() => {})}
        />;

      case 'FullscreenButton':
        if (!isFeatureEnabled('fullscreen', playerMode)) return null;
        return <FullscreenButton 
          onToggle={playerControls?.handleToggleFullscreen || (() => {})}
          isActive={ui.isFullscreen}
          size={size}
        />;

      case 'PiPButton':
        if (!isFeatureEnabled('pip', playerMode)) return null;
        if (playerType !== 'html5') return null;
        return <PiPButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size} 
        />;

      case 'SkipBackButton':
        if (!isFeatureEnabled('skip', playerMode)) return null;
        return <SkipButton 
          playerState={playerState} 
          playerControls={playerControls} 
          type="back" 
          size={size} 
        />;

      case 'SkipForwardButton':
        if (!isFeatureEnabled('skip', playerMode)) return null;
        return <SkipButton 
          playerState={playerState} 
          playerControls={playerControls} 
          type="forward" 
          size={size} 
        />;

      case 'ReturnButton':
        if (!isFeatureEnabled('skip', playerMode)) return null;
        return <SkipButton 
          playerState={playerState} 
          playerControls={playerControls} 
          type="return" 
          size={size} 
        />;

      case 'SpeedButton':
        if (!isFeatureEnabled('speed', playerMode)) return null;
        return <SpeedButton 
          playerState={playerState} 
          playerControls={playerControls} 
          size={size} 
        />;

      case 'QualityButton':
        if (!isFeatureEnabled('qualitySelector', playerMode)) return null;
        // ✅ NUTZE availableContent.hasQualities:
        if (!availableContent.hasQualities) return null;
        return <QualityButton 
          playerState={playerState} 
          playerControls={playerControls} 
          availableQualities={availableContent.sources || []} 
          size={size} 
        />;

      case 'AudioDescButton':
        if (!isFeatureEnabled('audioDescription', playerMode)) return null;
        // ✅ NUTZE availableContent.hasDescriptions:
        if (!availableContent.hasDescriptions) return null;
        return <AudioDescButton 
          playerState={playerState} 
          playerControls={playerControls} 
          hasAudioDesc={availableContent.hasDescriptions}
          descriptionsUrl={availableContent.descriptionsUrl || ''}
          size={size}
        />;

      case 'ExpandButton':
        // ✅ EXPAND HAT KEINE CONFIG - IST IMMER VERFÜGBAR
        return <ExpandButton 
          onFullPlayerClick={onFullPlayerClick || (() => {})} 
          size={size} 
        />;

      default:
        console.warn(`Unknown component: ${componentName}`);
        return null;
    }
  };

  return (
    <Suspense fallback={<div className="component-loading">...</div>}>
      {renderComponent()}
    </Suspense>
  );
};