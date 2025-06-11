import { useCallback, useEffect, useState } from 'react';
import { usePlayer } from '../../PlayerProvider';
import { CONFIG } from '../config/playerConfig';


interface Chapter {
  id: string;
  title: string;
  startTime: number;
  endTime?: number;
  description?: string;
  thumbnail?: string;
}

export interface ChaptersActions {
  handleToggleChapters?: () => void;
  handleNextChapter?: () => void;
  handlePreviousChapter?: () => void;
  handleJumpToChapter?: (index: number) => void;
  showChapters?: boolean;
  hasChapters?: boolean;
  currentChapterIndex?: number;
  currentChapter?: Chapter | null;
  allChapters?: Chapter[];
  canGoToNext?: boolean;
  canGoToPrevious?: boolean;
  updateCurrentChapter?: (currentTime: number) => void;
  searchInChapters?: (query: string) => Chapter[];
  getChapterProgress?: (chapterIndex: number, currentTime: number) => number;
  getCurrentChapterProgress?: (currentTime: number) => number;
}

export const useChapters = (
  playerMode: 'base' | 'extended' = 'base'
): ChaptersActions => {
  
  // ✅ CONTEXT NUTZEN:
  const { parsedContent, ui, htmlPlayer } = usePlayer();
  
  // ✅ LOKALE STATES:
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(-1);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);

  // ✅ CONFIG CHECKS:
  const chaptersConfig = CONFIG.features.chapters?.[playerMode] || { enabled: false };

  // ✅ GET DATA FROM CONTEXT:
  const allChapters = parsedContent.chapters || [];
  const hasChapters = allChapters.length > 0;

  // ✅ NAVIGATION HELPERS:
  const canGoToNext = currentChapterIndex >= 0 && currentChapterIndex < allChapters.length - 1;
  const canGoToPrevious = currentChapterIndex > 0;

  // ✅ TOGGLE CHAPTERS (UPDATES CONTEXT):
  const handleToggleChapters = useCallback(() => {
    if (!chaptersConfig.enabled) return;
    ui.setShowChapters(!ui.showChapters);
  }, [chaptersConfig.enabled, ui]);

  // ✅ CHAPTER NAVIGATION:
  const handleNextChapter = useCallback(() => {
    if (!chaptersConfig.enabled || !canGoToNext) return;
    
    const nextIndex = currentChapterIndex + 1;
    const nextChapter = allChapters[nextIndex];
    
    if (nextChapter) {
      setCurrentChapterIndex(nextIndex);
      setCurrentChapter(nextChapter);
      return nextChapter.startTime;
    }
  }, [chaptersConfig.enabled, canGoToNext, currentChapterIndex, allChapters]);

  const handlePreviousChapter = useCallback(() => {
    if (!chaptersConfig.enabled || !canGoToPrevious) return;
    
    const prevIndex = currentChapterIndex - 1;
    const prevChapter = allChapters[prevIndex];
    
    if (prevChapter) {
      setCurrentChapterIndex(prevIndex);
      setCurrentChapter(prevChapter);
      return prevChapter.startTime;
    }
  }, [chaptersConfig.enabled, canGoToPrevious, currentChapterIndex, allChapters]);

  const handleJumpToChapter = useCallback((index: number) => {
    if (!chaptersConfig.enabled || index < 0 || index >= allChapters.length) return;
    
    const chapter = allChapters[index];
    setCurrentChapterIndex(index);
    setCurrentChapter(chapter);
    return chapter.startTime;
  }, [chaptersConfig.enabled, allChapters]);

  // ✅ TIME UPDATE:
  const updateCurrentChapter = useCallback((currentTime: number) => {
    if (!chaptersConfig.enabled || allChapters.length === 0) return;
    
    const chapterIndex = allChapters.findIndex((chapter, idx) => {
      const nextChapter = allChapters[idx + 1];
      return currentTime >= chapter.startTime && 
             (!nextChapter || currentTime < nextChapter.startTime);
    });
    
    if (chapterIndex !== -1 && chapterIndex !== currentChapterIndex) {
      setCurrentChapterIndex(chapterIndex);
      setCurrentChapter(allChapters[chapterIndex]);
    } else if (chapterIndex === -1 && currentChapter !== null) {
      setCurrentChapter(null);
      setCurrentChapterIndex(-1);
    }
  }, [chaptersConfig.enabled, allChapters, currentChapterIndex, currentChapter]);

  // ✅ AUTO-UPDATE ON TIME CHANGE:
  useEffect(() => {
    updateCurrentChapter(htmlPlayer.currentTime);
  }, [htmlPlayer.currentTime, updateCurrentChapter]);

  // ✅ SEARCH IN CHAPTERS:
  const searchInChapters = useCallback((query: string): Chapter[] => {
    if (!chaptersConfig.enabled || !query) return [];
    
    return allChapters.filter(chapter => 
      chapter.title.toLowerCase().includes(query.toLowerCase()) ||
      (chapter.description && chapter.description.toLowerCase().includes(query.toLowerCase()))
    );
  }, [chaptersConfig.enabled, allChapters]);

  // ✅ PROGRESS CALCULATIONS:
  const getChapterProgress = useCallback((chapterIndex: number, currentTime: number): number => {
    if (!chaptersConfig.enabled || chapterIndex < 0 || chapterIndex >= allChapters.length) return 0;
    
    const chapter = allChapters[chapterIndex];
    const nextChapter = allChapters[chapterIndex + 1];
    const chapterEnd = nextChapter ? nextChapter.startTime : chapter.endTime || currentTime;
    const chapterDuration = chapterEnd - chapter.startTime;
    
    if (chapterDuration <= 0) return 0;
    
    const elapsed = currentTime - chapter.startTime;
    return Math.min(Math.max(elapsed / chapterDuration, 0), 1);
  }, [chaptersConfig.enabled, allChapters]);

  const getCurrentChapterProgress = useCallback((currentTime: number): number => {
    if (currentChapterIndex === -1) return 0;
    return getChapterProgress(currentChapterIndex, currentTime);
  }, [currentChapterIndex, getChapterProgress]);

  // ✅ CONDITIONAL RETURN:
  const result: ChaptersActions = {};

  if (chaptersConfig.enabled) {
    result.handleToggleChapters = handleToggleChapters;
    result.handleNextChapter = handleNextChapter;
    result.handlePreviousChapter = handlePreviousChapter;
    result.handleJumpToChapter = handleJumpToChapter;
    
    result.showChapters = ui.showChapters; // ✅ FROM CONTEXT
    result.hasChapters = hasChapters;
    result.currentChapterIndex = currentChapterIndex;
    result.currentChapter = currentChapter;
    result.allChapters = allChapters;
    
    result.canGoToNext = canGoToNext;
    result.canGoToPrevious = canGoToPrevious;
    
    result.updateCurrentChapter = updateCurrentChapter;
    result.searchInChapters = searchInChapters;
    result.getChapterProgress = getChapterProgress;
    result.getCurrentChapterProgress = getCurrentChapterProgress;
  }

  return result;
};