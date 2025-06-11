import { useCallback, useEffect } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';
import { Chapter } from '@/types/player';

export interface ChaptersActions {
  handleToggleChapters?: () => void;
  handleNextChapter?: () => void;
  handlePreviousChapter?: () => void;
  showChapters?: boolean;
  hasChapters?: boolean;
  currentChapterIndex?: number;
  currentChapter?: Chapter | null;
  canGoToNext?: boolean;
  canGoToPrevious?: boolean;
}

export const useChapters = (
  chaptersUrl?: string,
  playerMode: 'base' | 'extended' = 'base'
): ChaptersActions => {
  
  const { parsedContent, loadChapters, mediaPlayer, ui } = usePlayer();
  
  // ✅ CONFIG CHECK:
  const chaptersConfig = CONFIG.features.chapters[playerMode];
  const isEnabled = chaptersConfig.enabled && !!chaptersUrl;

  if (!isEnabled) {
    return {};
  }

  // ✅ LOAD CHAPTERS:
  useEffect(() => {
    if (!chaptersUrl) return;
    
    async function preloadChapters() {
      try {
        await loadChapters(chaptersUrl!);
      } catch (error) {
        console.error('Error loading chapters:', error);
      }
    }
    
    preloadChapters();
  }, [chaptersUrl, loadChapters]);

  // ✅ FIND CURRENT CHAPTER:
  const currentChapterIndex = parsedContent.chapters?.findIndex((chapter, idx) => {
    const nextChapter = parsedContent.chapters![idx + 1];
    return mediaPlayer.currentTime >= chapter.startTime && 
           (!nextChapter || mediaPlayer.currentTime < nextChapter.startTime);
  }) ?? -1;

  const currentChapter = currentChapterIndex >= 0 ? parsedContent.chapters![currentChapterIndex] : null;
  const canGoToNext = currentChapterIndex >= 0 && currentChapterIndex < (parsedContent.chapters?.length ?? 0) - 1;
  const canGoToPrevious = currentChapterIndex > 0;

  // ✅ HANDLERS:
  const handleNextChapter = useCallback(() => {
    if (!canGoToNext || !parsedContent.chapters) return;
    
    const nextIndex = currentChapterIndex + 1;
    const nextChapter = parsedContent.chapters[nextIndex];
    if (mediaPlayer.seekTo) {
      mediaPlayer.seekTo(nextChapter.startTime);
    }
  }, [parsedContent.chapters, currentChapterIndex, canGoToNext, mediaPlayer]);

  const handlePreviousChapter = useCallback(() => {
    if (!canGoToPrevious || !parsedContent.chapters) return;
    
    const prevIndex = currentChapterIndex - 1;
    const prevChapter = parsedContent.chapters[prevIndex];
    if (mediaPlayer.seekTo) {
      mediaPlayer.seekTo(prevChapter.startTime);
    }
  }, [parsedContent.chapters, currentChapterIndex, canGoToPrevious, mediaPlayer]);

  const handleToggleChapters = useCallback(() => {
    ui.setShowChapters(!ui.showChapters);
  }, [ui]);

  // ✅ CONDITIONAL RETURN:
  const result: ChaptersActions = {};
  const components = chaptersConfig.components || {};

  if (components.ChaptersButton) {
    result.handleToggleChapters = handleToggleChapters;
    result.showChapters = ui.showChapters;
  }

  if (components.PreviousChapterButton || components.NextChapterButton) {
    if (components.PreviousChapterButton) {
      result.handlePreviousChapter = handlePreviousChapter;
      result.canGoToPrevious = canGoToPrevious;
    }
    if (components.NextChapterButton) {
      result.handleNextChapter = handleNextChapter;
      result.canGoToNext = canGoToNext;
    }
  }

  if (components.ChaptersSidebar) {
    result.hasChapters = (parsedContent.chapters?.length ?? 0) > 0;
    result.currentChapterIndex = currentChapterIndex;
    result.currentChapter = currentChapter;
  }

  return result;
};