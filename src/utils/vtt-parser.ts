/**
 * VTT Parser und Validierungs-Utilities
 * Reine Funktionen für das Parsen von WebVTT-Dateien
 */

import { TranscriptCue, Chapter } from '@/types/player';

/**
 * VTT Parsing Error
 */
export class VTTParseError extends Error {
  constructor(message: string, public line?: number) {
    super(message);
    this.name = 'VTTParseError';
  }
}

/**
 * Parst Zeit-String im VTT Format (HH:MM:SS.mmm)
 */
export const parseVTTTime = (timeStr: string): number => {
  const regex = /^(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/;
  const match = timeStr.match(regex);
  
  if (!match) {
    throw new VTTParseError(`Invalid time format: ${timeStr}`);
  }
  
  const [, hours, minutes, seconds, milliseconds] = match;
  return (
    parseInt(hours) * 3600 +
    parseInt(minutes) * 60 +
    parseInt(seconds) +
    parseInt(milliseconds) / 1000
  );
};

/**
 * Validiert VTT Header
 */
export const validateVTTHeader = (content: string): boolean => {
  const lines = content.split('\n');
  return lines[0].trim().startsWith('WEBVTT');
};

/**
 * Parst VTT-Inhalt zu TranscriptCues
 */
export const parseVTTContent = (content: string): TranscriptCue[] => {
  if (!validateVTTHeader(content)) {
    throw new VTTParseError('Invalid VTT header');
  }
  
  const lines = content.split('\n');
  const cues: TranscriptCue[] = [];
  let currentCue: Partial<TranscriptCue> = {};
  let lineNumber = 0;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    lineNumber = i + 1;
    
    // Skip empty lines
    if (!line) continue;
    
    // Time range line
    if (line.includes('-->')) {
      const [startStr, endStr] = line.split('-->').map(s => s.trim());
      
      try {
        currentCue.startTime = parseVTTTime(startStr);
        currentCue.endTime = parseVTTTime(endStr);
      } catch (error) {
        throw new VTTParseError(`Invalid time format at line ${lineNumber}`, lineNumber);
      }
      continue;
    }
    
    // Cue text
    if (currentCue.startTime !== undefined && currentCue.endTime !== undefined) {
      currentCue.text = line;
      currentCue.type = line.toLowerCase().includes('description') ? 'description' : 'caption';
      
      cues.push(currentCue as TranscriptCue);
      currentCue = {};
    }
  }
  
  return cues;
};

/**
 * Parst Chapter-VTT zu Chapter-Array
 */
export const parseChapterVTT = (content: string): Chapter[] => {
  if (!validateVTTHeader(content)) {
    throw new VTTParseError('Invalid VTT header');
  }
  
  const lines = content.split('\n');
  const chapters: Chapter[] = [];
  let currentChapter: Partial<Chapter> = {};
  let lineNumber = 0;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    lineNumber = i + 1;
    
    if (!line) continue;
    
    if (line.includes('-->')) {
      const [startStr, endStr] = line.split('-->').map(s => s.trim());
      
      try {
        currentChapter.startTime = parseVTTTime(startStr);
        currentChapter.endTime = parseVTTTime(endStr);
      } catch (error) {
        throw new VTTParseError(`Invalid time format at line ${lineNumber}`, lineNumber);
      }
      continue;
    }
    
    if (currentChapter.startTime !== undefined && currentChapter.endTime !== undefined) {
      currentChapter.title = line;
      chapters.push(currentChapter as Chapter);
      currentChapter = {};
    }
  }
  
  return chapters;
};

/**
 * Validiert Cue-Array auf Konsistenz
 */
export const validateCues = (cues: TranscriptCue[]): string[] => {
  const errors: string[] = [];
  
  for (let i = 0; i < cues.length; i++) {
    const cue = cues[i];
    
    // Zeit-Validierung
    if (cue.startTime >= cue.endTime) {
      errors.push(`Cue ${i + 1}: Start time must be before end time`);
    }
    
    // Überlappungs-Prüfung
    if (i > 0 && cue.startTime < cues[i - 1].endTime) {
      errors.push(`Cue ${i + 1}: Overlaps with previous cue`);
    }
    
    // Text-Validierung
    if (!cue.text || cue.text.trim().length === 0) {
      errors.push(`Cue ${i + 1}: Empty text`);
    }
  }
  
  return errors;
};

/**
 * Sortiert Cues nach Startzeit
 */
export const sortCuesByTime = (cues: TranscriptCue[]): TranscriptCue[] => {
  return [...cues].sort((a, b) => a.startTime - b.startTime);
};

/**
 * ✅ EXISTIERENDE parseWebVTT FUNKTION BLEIBT:
 */
export function parseWebVTT(vttContent: string, type: 'captions' | 'chapters' | 'descriptions') {
  // ... bestehende Implementierung
}

// ✅ NEU: loadCaptions MIT parsedContent CACHE CHECK:
export const loadCaptions = async (
  url: string,
  parsedContent: { captions: TranscriptCue[] | null },
  setParsedContent: (update: any) => void
): Promise<TranscriptCue[]> => {
  console.log('🔄 loadCaptions called with URL:', url);
  
  // ✅ CACHE CHECK:
  if (parsedContent.captions && parsedContent.captions.length > 0) {
    console.log('✅ Using cached captions from parsedContent');
    return parsedContent.captions;
  }
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new VTTParseError(`Failed to load captions: ${response.status}`);
    }
    
    const content = await response.text();
    console.log('📥 Captions raw text:', content.substring(0, 200) + '...');
    
    const parsed = parseVTTContent(content);
    console.log('✅ Captions parsed:', parsed.length);
    
    // ✅ UPDATE parsedContent:
    setParsedContent((prev: any) => ({ ...prev, captions: parsed }));
    
    return parsed;
  } catch (error) {
    console.error('❌ loadCaptions error:', error);
    setParsedContent((prev: any) => ({ ...prev, captions: [] }));
    throw error;
  }
};

// ✅ NEU: loadDescriptions MIT parsedContent CACHE CHECK:
export const loadDescriptions = async (
  url: string,
  parsedContent: { descriptions: TranscriptCue[] | null },
  setParsedContent: (update: any) => void
): Promise<TranscriptCue[]> => {
  console.log('🔄 loadDescriptions called with URL:', url);
  
  // ✅ CACHE CHECK:
  if (parsedContent.descriptions && parsedContent.descriptions.length > 0) {
    console.log('✅ Using cached descriptions from parsedContent');
    return parsedContent.descriptions;
  }
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new VTTParseError(`Failed to load descriptions: ${response.status}`);
    }
    
    const content = await response.text();
    console.log('📥 Descriptions raw text:', content.substring(0, 200) + '...');
    
    const parsed = parseVTTContent(content);
    console.log('✅ Descriptions parsed:', parsed.length);
    
    // ✅ UPDATE parsedContent:
    setParsedContent((prev: any) => ({ ...prev, descriptions: parsed }));
    
    return parsed;
  } catch (error) {
    console.error('❌ loadDescriptions error:', error);
    setParsedContent((prev: any) => ({ ...prev, descriptions: [] }));
    throw error;
  }
};

/**
 * Lädt und parst Transkripte von URLs
 */
export const loadTranscript = async (
  captionsUrl?: string,
  descriptionsUrl?: string,
  parsedContent?: { 
    captions: TranscriptCue[] | null;
    descriptions: TranscriptCue[] | null;
    transcript: TranscriptCue[] | null;
  },
  setParsedContent?: (update: any) => void
): Promise<TranscriptCue[]> => {
  console.log('🔄 loadTranscript called for:', { captionsUrl, descriptionsUrl });
  
  if (!parsedContent || !setParsedContent) {
    throw new Error('parsedContent and setParsedContent required for loadTranscript');
  }
  
  // ✅ CACHE CHECK FÜR KOMPLETTES TRANSCRIPT:
  if (parsedContent.transcript && parsedContent.transcript.length > 0) {
    console.log('✅ Using cached transcript from parsedContent');
    return parsedContent.transcript;
  }
  
  try {
    const allCues: TranscriptCue[] = [];
    
    // ✅ LADE CAPTIONS MIT CACHE CHECK:
    if (captionsUrl) {
      console.log('📡 Loading captions for transcript...');
      const captions = await loadCaptions(captionsUrl, parsedContent, setParsedContent);
      allCues.push(...captions.map(cue => ({ ...cue, type: 'caption' as const })));
    }
    
    // ✅ LADE DESCRIPTIONS MIT CACHE CHECK:
    if (descriptionsUrl) {
      console.log('📡 Loading descriptions for transcript...');
      const descriptions = await loadDescriptions(descriptionsUrl, parsedContent, setParsedContent);
      allCues.push(...descriptions.map(cue => ({ ...cue, type: 'description' as const })));
    }
    
    if (allCues.length === 0) {
      console.log('❌ No content loaded for transcript');
      return [];
    }
    
    // ✅ SORTIERE UND CACHE TRANSCRIPT:
    const sortedCues = sortCuesByTime(allCues);
    
    console.log('✅ Transcript combined:', {
      totalCues: sortedCues.length,
      captions: sortedCues.filter(c => c.type === 'caption').length,
      descriptions: sortedCues.filter(c => c.type === 'description').length
    });
    
    // ✅ UPDATE parsedContent.transcript:
    setParsedContent((prev: any) => ({ ...prev, transcript: sortedCues }));
    
    return sortedCues;
    
  } catch (error) {
    console.error('❌ loadTranscript error:', error);
    setParsedContent((prev: any) => ({ ...prev, transcript: [] }));
    throw error;
  }
};


// ✅ NEU: loadChapters MIT parsedContent CACHE CHECK:
export const loadChapters = async (
  url: string,
  parsedContent: { chapters: Chapter[] | null },
  setParsedContent: (update: any) => void
): Promise<Chapter[]> => {
  console.log('🔄 loadChapters called with URL:', url);
  
  // ✅ CACHE CHECK:
  if (parsedContent.chapters && parsedContent.chapters.length > 0) {
    console.log('✅ Using cached chapters from parsedContent');
    return parsedContent.chapters;
  }
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new VTTParseError(`Failed to load chapters: ${response.status}`);
    }
    
    const content = await response.text();
    console.log('📥 Chapters raw text:', content.substring(0, 200) + '...');
    
    const parsed = parseChapterVTT(content);
    console.log('✅ Chapters parsed:', parsed.length);
    
    // ✅ UPDATE parsedContent:
    setParsedContent((prev: any) => ({ ...prev, chapters: parsed }));
    
    return parsed;
  } catch (error) {
    console.error('❌ loadChapters error:', error);
    setParsedContent((prev: any) => ({ ...prev, chapters: [] }));
    throw error;
  }
};