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
}

export const useChapters = (
  chaptersUrl?: string,
  playerMode: 'base' | 'extended' = 'base'
): ChaptersActions => {
  
  const { parsedContent, loadChapters, mediaPlayer, ui } = usePlayer();
  
  // ✅ NUTZE CONFIG:
  const chaptersConfig = CONFIG.features.chapters[playerMode];
  const isEnabled = chaptersConfig.enabled && !!chaptersUrl;

  // ✅ EARLY RETURN WENN DISABLED:
  if (!isEnabled) {
    return {};
  }

  // ✅ LOAD CHAPTERS VIA PlayerProvider:
  useEffect(() => {
    if (!chaptersUrl) return;
    
    async function preloadChapters() {
      try {
        console.log('🔄 PRE-LOADING CHAPTERS VIA PROVIDER:', chaptersUrl);
        await loadChapters(chaptersUrl!);
        console.log('✅ CHAPTERS PRE-LOADED VIA PROVIDER');
      } catch (error) {
        console.error('❌ CHAPTERS PRE-LOADING FAILED:', error);
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

  // ✅ HANDLERS - MIT SEEK AUS usePlayerBasics:
  const handleNextChapter = useCallback(() => {
    if (!parsedContent.chapters || currentChapterIndex === -1) return;
    
    const nextIndex = currentChapterIndex + 1;
    if (nextIndex < parsedContent.chapters.length) {
      const nextChapter = parsedContent.chapters[nextIndex];
      // ✅ NUTZE handleSeek AUS PlayerProvider CONTEXT:
      if (mediaPlayer.handleSeek) {
        mediaPlayer.handleSeek(nextChapter.startTime);
      }
      console.log('⏭️ Next chapter:', nextChapter.title, 'at', nextChapter.startTime);
    }
  }, [parsedContent.chapters, currentChapterIndex, mediaPlayer]);

  const handlePreviousChapter = useCallback(() => {
    if (!parsedContent.chapters || currentChapterIndex === -1) return;
    
    const prevIndex = currentChapterIndex - 1;
    if (prevIndex >= 0) {
      const prevChapter = parsedContent.chapters[prevIndex];
      // ✅ NUTZE handleSeek AUS PlayerProvider CONTEXT:
      if (mediaPlayer.handleSeek) {
        mediaPlayer.handleSeek(prevChapter.startTime);
      }
      console.log('⏮️ Previous chapter:', prevChapter.title, 'at', prevChapter.startTime);
    }
  }, [parsedContent.chapters, currentChapterIndex, mediaPlayer]);

  const handleToggleChapters = useCallback(() => {
    ui.setShowChapters(!ui.showChapters);
  }, [ui]);

  // ✅ CONDITIONAL RETURN - CHECK CONFIG COMPONENTS:
  const result: ChaptersActions = {};
  const components = chaptersConfig.components || {};

  // ✅ TOGGLE HANDLER - WENN ChaptersButton ENABLED:
  if (components.ChaptersButton) {
    result.handleToggleChapters = handleToggleChapters;
    result.showChapters = ui.showChapters;
  }

  // ✅ NAVIGATION HANDLERS - WENN Navigation Buttons ENABLED:
  if (components.PreviousChapterButton || components.NextChapterButton) {
    if (components.PreviousChapterButton) {
      result.handlePreviousChapter = handlePreviousChapter;
    }
    if (components.NextChapterButton) {
      result.handleNextChapter = handleNextChapter;
    }
  }

  // ✅ CHAPTER DATA - WENN ChaptersSidebar ENABLED:
  if (components.ChaptersSidebar) {
    result.hasChapters = (parsedContent.chapters?.length ?? 0) > 0;
    result.currentChapterIndex = currentChapterIndex;
    result.currentChapter = currentChapter;
  }

  return result;
};