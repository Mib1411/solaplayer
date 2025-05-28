import React from 'react';
import { Chapter } from '../types/player';
import styles from './ChaptersSidebar.module.css';

interface ChaptersSidebarProps {
  chapters: Chapter[];
  currentChapterIdx: number;
  visible: boolean;
  onChapterClick: (time: number) => void;
}

export const ChaptersSidebar: React.FC<ChaptersSidebarProps> = ({
  chapters,
  currentChapterIdx,
  visible,
  onChapterClick
}) => {
  if (!visible || chapters.length === 0) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.chaptersContainer}>
      <div className={styles.chaptersHeader}>
        Kapitel
      </div>
      <ul className={styles.chaptersList}>
        {chapters.map((chapter, idx) => (
          <li
            key={idx}
            className={`${styles.chapterItem} ${
              idx === currentChapterIdx ? styles.current : ''
            }`}
            onClick={() => onChapterClick(chapter.startTime)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onChapterClick(chapter.startTime);
              }
            }}
          >
            <div className={styles.chapterTime}>
              {formatTime(chapter.startTime)}
            </div>
            <div className={styles.chapterTitle}>
              {chapter.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

