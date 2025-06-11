'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PLAYER_LABELS, ARIA_LABELS_LISTS } from '@/utils/constants';
import { formatTime } from '@/utils/player-utils';
import { usePlayer } from '../PlayerProvider';

interface ChaptersSidebarProps {
  playerState?: any;
  playerControls?: any;
  chaptersUrl?: string;
}

export const ChaptersSidebar: React.FC<ChaptersSidebarProps> = ({
  playerState,
  playerControls,
  chaptersUrl
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { parsedContent, loadChapters } = usePlayer();
  const chapters = parsedContent.chapters || [];

  // ✅ DEBUG CHAPTERS LOADING:
  console.log('🔍 ChaptersSidebar DEBUG:', {
    chaptersUrl,
    chapters,
    chaptersLength: chapters.length,
    parsedContent,
    isLoading,
    error
  });

  // ✅ FORCE LOAD CHAPTERS:
  useEffect(() => {
    let isMounted = true;
    
    async function loadChaptersData() {
      if (!chaptersUrl) {
        console.log('❌ NO CHAPTERS URL PROVIDED');
        return;
      }
      
      console.log('🔄 LOADING CHAPTERS FROM:', chaptersUrl);
      setIsLoading(true);
      setError(null);
      
      try {
        const loadedChapters = await loadChapters(chaptersUrl);
        console.log('✅ CHAPTERS LOADED:', loadedChapters);
        
        if (isMounted) setIsLoading(false);
      } catch (e) {
        console.error('❌ CHAPTER LOADING ERROR:', e);
        if (isMounted) setError('Fehler beim Laden der Kapitel');
        if (isMounted) setIsLoading(false);
      }
    }
    
    loadChaptersData();
    return () => { isMounted = false; };
  }, [chaptersUrl, loadChapters]);

  const showChapters = playerState?.ui?.showChapters ?? false;
  const currentTime = playerState?.currentTime ?? 0;

  // ✅ NUTZE CONTEXT PARSING:
  const { parsedContent: contextParsedContent } = usePlayer();
  const contextChapters = contextParsedContent.chapters || [];
  
  // ✅ NUTZE playerControls CHAPTER STATE:
  const currentChapterIndex = playerControls?.currentChapterIndex ?? -1;
  const currentChapter = playerControls?.currentChapter;
  const hasNextChapter = playerControls?.hasNextChapter ?? false;
  const hasPreviousChapter = playerControls?.hasPreviousChapter ?? false;

  const currentItemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChapterClick = (chapterIndex: number) => {
    if (chapterIndex >= 0 && chapterIndex < chapters.length) {
      const chapter = chapters[chapterIndex];
      console.log('🔍 Chapter clicked:', chapter.title, 'time:', chapter.startTime);
      playerControls?.handleSeek?.(chapter.startTime);
    }
  };

  // ✅ AUTO-SCROLL ZU CURRENT CHAPTER:
  useEffect(() => {
    if (currentItemRef.current && contentRef.current && currentChapterIndex >= 0) {
      const container = contentRef.current;
      const currentItem = currentItemRef.current;
      
      const containerHeight = container.clientHeight;
      const itemTop = currentItem.offsetTop - container.offsetTop;
      const itemHeight = currentItem.clientHeight;
      
      const scrollTop = itemTop - (containerHeight / 2) + (itemHeight / 2);
      
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }, [currentChapterIndex]);

  // ✅ LOADING STATE:
  if (isLoading) {
    return (
      <div className="chapters-container">
        <div className="chapters-header">{PLAYER_LABELS.CHAPTERS}</div>
        <p>Lade Kapitel...</p>
      </div>
    );
  }

  // ✅ ERROR STATE:
  if (error) {
    return (
      <div className="chapters-container">
        <div className="chapters-header">{PLAYER_LABELS.CHAPTERS}</div>
        <p className="no-content">{error}</p>
      </div>
    );
  }

  // ✅ KORREKTE CONDITIONAL RENDERING:
  if (!showChapters || !chapters || chapters.length === 0) {
    return null;
  }

  return (
    <div className="chapters-container">
      <div className="chapters-header">
        {PLAYER_LABELS.CHAPTERS} ({chapters.length} {PLAYER_LABELS.ENTRIES})
        {/* ✅ SIMPLE DEBUG: */}
        {currentChapter && (
          <div className="chapter-status">
            <small>
              Aktuell: {currentChapter.title}
              {currentChapterIndex === 0 && <span> (Erstes Kapitel)</span>}
              {currentChapterIndex === chapters.length - 1 && <span> (Letztes Kapitel)</span>}
            </small>
          </div>
        )}
      </div>
      
      <div className="chapters-content sidebar-content" ref={contentRef}>
        {chapters.map((chapter, idx) => {
          const isActive = idx === currentChapterIndex; // ✅ SIMPLE COMPARISON
          
          return (
            <div
              key={idx}
              ref={isActive ? currentItemRef : null}
              className={`chapter-item ${isActive ? 'active' : ''}`}
              onClick={() => handleChapterClick(idx)} // ✅ NUTZE INDEX
              role="button"
              tabIndex={0}
              aria-label={`${formatTime(chapter.startTime)}: ${chapter.title}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <div className="chapter-time">
                {formatTime(chapter.startTime)}
                {isActive && <span className="chapter-indicator"> ▶</span>}
              </div>
              <div className="chapter-title">
                {chapter.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
