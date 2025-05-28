import React from 'react';
import { TranscriptCue } from '../types/player';
import styles from './TranscriptSidebar.module.css';

interface TranscriptProps {
  cues: TranscriptCue[];
  currentCueIdx: number;
  visible: boolean;
  currentTime: number;
}
 
export const Transcript: React.FC<TranscriptProps> = ({ 
  cues, 
  currentCueIdx, 
  visible, 
  currentTime 
}) => {
  console.log('Transcript render:', { 
    visible, 
    cuesLength: cues?.length, 
    currentTime,
    firstFewCues: cues?.slice(0, 3).map(c => ({ 
      startTime: c.startTime, 
      text: c.text.substring(0, 30),
      type: c.type 
    }))
  });
  
  if (!visible) return null;
  
  if (!cues || cues.length === 0) {
    return (
      <div className={styles.transcriptContainer}>
        <div className={styles.transcriptHeader}>Transkript</div>
        <p className={styles.noContent}>Kein Transkript verfügbar</p>
      </div>
    );
  }

  // ALLE CUES bis currentTime + 1 Sekunde Puffer anzeigen
  const visibleCues = cues.filter(cue => cue.startTime <= (currentTime + 1));
  
  console.log('Visible cues:', {
    total: cues.length,
    visible: visibleCues.length,
    currentTime,
    firstVisible: visibleCues[0]
  });

  return (
    <div className={styles.transcriptContainer}>
      <div className={styles.transcriptHeader}>
        Transkript ({cues.length} Einträge)
      </div>
      <div className={styles.transcriptContent}>
        {visibleCues.length > 0 ? (
          visibleCues.map((cue, idx) => {
            const originalIdx = cues.indexOf(cue);
            const isCurrent = cue.startTime <= currentTime && cue.endTime >= currentTime;
            
            return (
              <div
                key={originalIdx}
                className={`${styles.transcriptItem} ${
                  isCurrent ? styles.current : ''
                } ${styles[cue.type] || styles.description}`}
              >
                <span className={styles.transcriptTime}>
                  {formatTime(cue.startTime)} [{cue.type}]
                </span>
                <span className={styles.transcriptText}>
                  {cue.text}
                </span>
              </div>
            );
          })
        ) : (
          <p className={styles.noContent}>
            Noch kein Inhalt bis {formatTime(currentTime)}
            <br />
            Erstes Element bei: {cues[0] ? formatTime(cues[0].startTime) : 'N/A'}
          </p>
        )}
      </div>
    </div>
  );
};

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
