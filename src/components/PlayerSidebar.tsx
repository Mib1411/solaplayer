import React from 'react';
import { Transcript } from './TranscriptSidebar';
import { ChaptersSidebar } from './ChaptersSidebar';
import styles from './PlayerSidebar.module.css';

interface PlayerSidebarProps {
  playerState: any;
  currentTime?: number;
  cues?: any[];
  parsedChapters?: any[];
  onChapterClick: (time: number) => void;
}
 
export const PlayerSidebar: React.FC<PlayerSidebarProps> = ({
  playerState,
  cues = [],
  parsedChapters = [],
  onChapterClick
}) => {
  console.log('PlayerSidebar render:', {
    showTranscript: playerState.showTranscript,
    showChapters: playerState.showChapters,
    cuesLength: cues?.length,
    chaptersLength: parsedChapters?.length
  });

  const hasTranscript = playerState.showTranscript && cues && cues.length > 0;
  const hasChapters = playerState.showChapters && parsedChapters && parsedChapters.length > 0;

  if (!hasTranscript && !hasChapters) {
    return null;
  }

  return (
    <div className={styles.sidebarContainer}>
      {/* Transcript */}
      {hasTranscript && (
        <Transcript
          currentTime={playerState.currentTime} 
          cues={cues}
          currentCueIdx={playerState.currentCueIdx || 0}
          visible={playerState.showTranscript}
        />
      )}

      {/* Chapters Sidebar */}
      {hasChapters && (
        <ChaptersSidebar
          chapters={parsedChapters}
          currentChapterIdx={playerState.currentChapterIdx || 0}
          onChapterClick={onChapterClick}
          visible={playerState.showChapters}
        />
      )}
    </div>
  );
};