'use client';

import React from 'react';
import { Button } from '../general/ui/Button/Button';
import { NextChapterIcon, PreviousChapterIcon } from '../../utils/icons';
import { PLAYER_LABELS } from '../../utils/constants';

interface ChapterButtonProps {
  playerState: any;
  playerControls: any;
}

// ✅ PREVIOUS CHAPTER BUTTON MIT chapterState:
export const PreviousChapterButton: React.FC<ChapterButtonProps> = ({
  playerState,
  playerControls
}) => {
  // ✅ NUTZE DIREKT playerControls PROPERTIES:
  const canGoToPrevious = playerControls?.canGoToPrevious || false;
  
  console.log('🔍 PreviousChapterButton SIMPLE:', {
    currentTime: playerState?.currentTime,
    canGoToPrevious,
    currentChapter: playerControls?.currentChapter?.title,
    previousChapter: playerControls?.previousChapter?.title
  });

  return (
    <Button
      onClick={() => {
        console.log('🔘 Previous chapter clicked');
        playerControls?.handlePreviousChapter?.();
      }}
      ariaLabel={PLAYER_LABELS.PREVIOUS_CHAPTER}
      variant="state"
      disabled={!canGoToPrevious}
      icon={<PreviousChapterIcon />}
      className={`previous-chapter-btn ${!canGoToPrevious ? 'disabled' : 'enabled'}`}
    />
  );
};

// ✅ NEXT CHAPTER BUTTON MIT chapterState:
export const NextChapterButton: React.FC<ChapterButtonProps> = ({
  playerState,
  playerControls
}) => {
  const canGoToNext = playerControls?.canGoToNext || false;
  
  console.log('🔍 NextChapterButton FULL DEBUG:', {
    playerControls: playerControls,
    canGoToNext,
    hasNextChapter: playerControls?.hasNextChapter,
    currentChapter: playerControls?.currentChapter,
    nextChapter: playerControls?.nextChapter,
    totalChapters: playerControls?.totalChapters,
    currentChapterIndex: playerControls?.currentChapterIndex,
    // ✅ CHECK UI STATE:
    uiChapterState: playerState?.ui?.chapterState,
    currentTime: playerState?.currentTime
  });

  return (
    <Button
      onClick={() => {
        console.log('🔘 Next chapter clicked, debug:', {
          canGoToNext,
          nextChapter: playerControls?.nextChapter,
          handleNextChapter: playerControls?.handleNextChapter
        });
        playerControls?.handleNextChapter?.();
      }}
      ariaLabel={PLAYER_LABELS.NEXT_CHAPTER}
      variant="state"
      disabled={!canGoToNext}
      icon={<NextChapterIcon />}
      className={`next-chapter-btn ${!canGoToNext ? 'disabled' : 'enabled'}`}
    />
  );
};
