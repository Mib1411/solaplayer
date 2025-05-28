import { useState, useEffect } from 'react';
import { TranscriptCue, Chapter } from '../types/player';
import { parseVtt, parseChaptersVtt } from '../utils/videoUtils';

// TRANSCRIPT = CAPTIONS + DESCRIPTIONS kombiniert!
export const useTranscriptData = (captions?: string, description?: string) => {
  const [cues, setCues] = useState<TranscriptCue[]>([]);

  useEffect(() => {
    const loadTranscript = async () => {
      const allCues: TranscriptCue[] = [];
      
      try {
        // CAPTIONS laden
        if (captions) {
          const captionsText = await fetch(captions).then(r => r.text());
          const captionCues = parseVtt(captionsText, 'caption');
          allCues.push(...captionCues);
        }
        
        // DESCRIPTIONS laden  
        if (description) {
          const descText = await fetch(description).then(r => r.text());
          const descCues = parseVtt(descText, 'description');
          allCues.push(...descCues);
        }
        
        // Nach Zeit sortieren
        allCues.sort((a, b) => a.startTime - b.startTime);
        setCues(allCues);
        
      } catch (error) {
        console.error('Error loading transcript:', error);
        setCues([]);
      }
    };

    if (captions || description) {
      loadTranscript();
    } else {
      setCues([]);
    }
  }, [captions, description]);

  return { cues };
};

export const useChaptersData = (chapters?: string) => {
  const [parsedChapters, setParsedChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    if (!chapters) {
      setParsedChapters([]);
      return;
    }

    (async () => {
      try {
        const txt = await fetch(chapters).then(r => r.text());
        const parsed = parseChaptersVtt(txt);
        setParsedChapters(parsed);
      } catch (error) {
        console.error('Error loading chapters:', error);
        setParsedChapters([]);
      }
    })();
  }, [chapters]);

  return { parsedChapters }; // KORRIGIERT: Objekt mit parsedChapters property
};

export const useVoicesData = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState('');

  useEffect(() => {
    const updateVoices = () => {
      const vs = window.speechSynthesis.getVoices();
      setVoices(vs);
      if (!selectedVoice && vs.length > 0) setSelectedVoice(vs[0].voiceURI);
    };
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, [selectedVoice]);

  return { voices, selectedVoice, setSelectedVoice };
};