'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PLAYER_LABELS, ARIA_LABELS_LISTS } from '@/utils/constants';
import { formatTime } from '@/utils/player-utils';
import { loadPlayerSetting } from '../../utils/useStorage';
import { usePlayer } from '../PlayerProvider';

interface TranscriptProps {
  playerState?: any;
  playerControls?: any;
  captionsUrl?: string;
  descriptionsUrl?: string;
}

export const TranscriptSidebar: React.FC<TranscriptProps> = ({
  playerState,
  playerControls,
  captionsUrl,
  descriptionsUrl
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { parsedContent, loadTranscript } = usePlayer();
  const transcript = parsedContent.transcript || [];

  const currentItemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const showFullTranscript = loadPlayerSetting('transcriptShowFullTranscript', 'extended') ?? false;
  const timeBasedView = loadPlayerSetting('transcriptTimeBasedView', 'extended') ?? true;
  const showTranscript = playerState?.ui?.showTranscript ?? false;
  const currentTime = playerState?.currentTime ?? 0;

  const currentCueIdx = transcript.findIndex((cue, idx) => {
    const nextCue = transcript[idx + 1];
    return currentTime >= cue.startTime &&
      (!nextCue || currentTime < nextCue.startTime);
  });

  const handleKeyDown = (event: React.KeyboardEvent, startTime: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      playerControls?.handleSeek?.(startTime);
    }
  };

  useEffect(() => {
    let isMounted = true;

    async function loadTranscriptData() {
      if (!captionsUrl && !descriptionsUrl) return;

      setIsLoading(true);
      setError(null);

      try {
        await loadTranscript(captionsUrl, descriptionsUrl);
        if (isMounted) setIsLoading(false);
      } catch (e) {
        if (isMounted) setError('Fehler beim Laden des Transkripts');
        if (isMounted) setIsLoading(false);
      }
    }

    loadTranscriptData();
    return () => { isMounted = false; };
  }, [captionsUrl, descriptionsUrl, loadTranscript]);

  useEffect(() => {
    if (timeBasedView && currentItemRef.current && contentRef.current && currentCueIdx >= 0) {
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
  }, [currentTime, timeBasedView, currentCueIdx]);

  if (isLoading) {
    return (
      <div className="transcript-container">
        <div className="transcript-header">{PLAYER_LABELS.TRANSCRIPT}</div>
        <p>Lade Transkript...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="transcript-container">
        <div className="transcript-header">{PLAYER_LABELS.TRANSCRIPT}</div>
        <p className="no-content">{error}</p>
      </div>
    );
  }


  const visibleCues = showFullTranscript
    ? transcript
    : (timeBasedView
      ? transcript.filter(cue => cue.startTime <= (currentTime + 1))
      : transcript.filter(cue => cue.startTime <= (currentTime + 1))
    );

  return (
    (showTranscript && visibleCues.length > 0) ?
      (
        <div className="transcript-container">
          <div className="transcript-header">
            {PLAYER_LABELS.TRANSCRIPT} ({visibleCues.length} {PLAYER_LABELS.ENTRIES})
          </div>

          <div
            className="transcript-content sidebar-content"
            ref={contentRef}
            role="log"
            aria-live="polite"
            aria-label={ARIA_LABELS_LISTS.TRANSCRIPT_LIST}
          >
            {visibleCues.map((cue, idx) => (
              <div
                key={idx}
                ref={idx === currentCueIdx ? currentItemRef : null}
                className={`transcript-item ${idx === currentCueIdx ? 'active' : ''
                  } ${cue.type}`}
                onClick={() => playerControls?.handleSeek?.(cue.startTime)}
                role="button"
                tabIndex={0}
                aria-label={`${formatTime(cue.startTime)}: ${cue.text}`}
                aria-current={idx === currentCueIdx ? 'true' : undefined}
                onKeyDown={(e) => handleKeyDown(e, cue.startTime)}
              >
                <div className="transcript-time">
                  {formatTime(cue.startTime)} [{cue.type}]
                </div>
                <div className="transcript-text">
                  {cue.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="transcript-container">
        </div>
      )
  );
};
