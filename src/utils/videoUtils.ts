import { TranscriptCue, Chapter } from '../types/player';

export const parseVtt = (vtt: string, type: 'caption' | 'description'): TranscriptCue[] => {
  const cues: TranscriptCue[] = [];
  const lines = vtt.replace(/^WEBVTT.*\n/, '').split(/\r?\n/).filter(l => l.trim() !== '');
  
  let i = 0;
  while (i < lines.length) {
    // Skip cue numbers
    if (/^\d+$/.test(lines[i])) {
      i++;
    }
    
    // Parse timestamps - BEIDE FORMATE unterstützen
    if (/^\d{2}:\d{2}:\d{2}[\.,]\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}[\.,]\d{3}/.test(lines[i])) {
      const timeMatch = lines[i].match(/^(\d{2}:\d{2}:\d{2}[\.,]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[\.,]\d{3})/);
      if (timeMatch) {
        const startTime = toSeconds(timeMatch[1]);
        const endTime = toSeconds(timeMatch[2]);
        i++;
        
        // Text sammeln
        let text = '';
        while (i < lines.length && 
               !/^\d{2}:\d{2}:\d{2}[\.,]\d{3}\s*-->/.test(lines[i]) && 
               !/^\d+$/.test(lines[i]) &&
               lines[i].trim() !== '') {
          text += (text ? ' ' : '') + lines[i].trim();
          i++;
        }
        
        if (text.trim()) {
          cues.push({ 
            startTime, 
            endTime, 
            text: text.trim(), 
            type 
          });
        }
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  
  console.log(`Parsed ${cues.length} ${type} cues:`, cues);
  return cues;
};

export const toSeconds = (timeString: string): number => {
  // Sowohl Punkt als auch Komma als Dezimaltrennzeichen unterstützen
  const normalized = timeString.replace(',', '.');
  const [time, ms] = normalized.split('.');
  const [h, m, s] = time.split(':').map(Number);
  
  return h * 3600 + m * 60 + s + (ms ? Number(ms) / 1000 : 0);
};

export const parseChaptersVtt = (vtt: string): Chapter[] => {
  const chapters: Chapter[] = [];
  const lines = vtt.replace(/^WEBVTT.*\n/, '').split(/\r?\n/).filter(l => l.trim() !== '');
  let i = 0;
  while (i < lines.length) {
    if (/^\d+$/.test(lines[i])) i++;
    if (/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i])) {
      const [startTime, endTime] = lines[i].split(' --> ').map(toSeconds);
      i++;
      let title = '';
      while (i < lines.length && !/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i]) && !/^\d+$/.test(lines[i])) {
        title += (title ? ' ' : '') + lines[i];
        i++;
      }
      chapters.push({ startTime, endTime, title });
    } else {
      i++;
    }
  }
  return chapters;
};

export const formatTime = (sec: number): string => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

export const addPlayerStyles = (): () => void => {
  const style = document.createElement('style');
  style.innerHTML = `
    .player-btn:focus {
      outline: 3px solid #1976d2;
      outline-offset: 2px;
      z-index: 2;
    }
  `;
  document.head.appendChild(style);
  return () => { document.head.removeChild(style); };
};