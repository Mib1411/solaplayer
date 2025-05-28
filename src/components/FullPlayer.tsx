"use client"

import React, { useRef, useState, useEffect } from 'react';
import { PlayIcon, PauseIcon, MuteIcon, UnmuteIcon, TranscriptIcon, SpeedIcon, CCIcon, FullscreenIcon, PiPIcon, VolumeIcon, AudioDescIcon, ChaptersIcon } from './icons';

interface FullPlayerProps {
  src: string;
  captions?: string;
  description?: string;
  chapters?: string;
  autoplay?: boolean;
  muted?: boolean;
}

interface TranscriptCue {
  start: number;
  end: number;
  text: string;
  type: 'caption' | 'description';
}

interface Chapter {
  start: number;
  end: number;
  title: string;
}

const parseVtt = (vtt: string, type: 'caption' | 'description'): TranscriptCue[] => {
  const cues: TranscriptCue[] = [];
  // Entferne Header und leere Zeilen
  const lines = vtt.replace(/^WEBVTT.*\n/, '').split(/\r?\n/).filter(l => l.trim() !== '');
  let i = 0;
  while (i < lines.length) {
    // Optional: Cue-Nummer überspringen
    if (/^\d+$/.test(lines[i])) i++;
    // Zeitstempel
    if (/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i])) {
      const [start, end] = lines[i].split(' --> ').map(toSeconds);
      i++;
      let text = '';
      while (i < lines.length && !/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i]) && !/^\d+$/.test(lines[i])) {
        text += (text ? ' ' : '') + lines[i];
        i++;
      }
      cues.push({ start, end, text, type });
    } else {
      i++;
    }
  }
  return cues;
};

const toSeconds = (s: string) => {
  const [h, m, rest] = s.split(':');
  const [sec, ms] = rest.split(',');
  return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(sec) + (ms ? parseInt(ms) / 1000 : 0);
};

const parseChaptersVtt = (vtt: string): Chapter[] => {
  const chapters: Chapter[] = [];
  const lines = vtt.replace(/^WEBVTT.*\n/, '').split(/\r?\n/).filter(l => l.trim() !== '');
  let i = 0;
  while (i < lines.length) {
    if (/^\d+$/.test(lines[i])) i++;
    if (/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i])) {
      const [start, end] = lines[i].split(' --> ').map(toSeconds);
      i++;
      let title = '';
      while (i < lines.length && !/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i]) && !/^\d+$/.test(lines[i])) {
        title += (title ? ' ' : '') + lines[i];
        i++;
      }
      chapters.push({ start, end, title });
    } else {
      i++;
    }
  }
  return chapters;
};

// Audio-Description Settings Modal
const AudioDescSettingsModal: React.FC<{
  open: boolean;
  onClose: () => void;
  voices: SpeechSynthesisVoice[];
  selectedVoice: string;
  setSelectedVoice: (v: string) => void;
  pitch: number;
  setPitch: (p: number) => void;
  autoStop: boolean;
  setAutoStop: (b: boolean) => void;
  autoStart: boolean;
  setAutoStart: (b: boolean) => void;
  mode: string;
  setMode: (m: string) => void;
  hasAudioTrack: boolean;
  hasSignTrack: boolean;
  ttsAvailable: boolean;
  ttsError: string;
}> = ({ open, onClose, voices, selectedVoice, setSelectedVoice, pitch, setPitch, autoStop, setAutoStop, autoStart, setAutoStart, mode, setMode, hasAudioTrack, hasSignTrack, ttsAvailable, ttsError }) => {
  const [testText, setTestText] = useState('Audiodeskription Test');
  const handleTest = () => {
    if (!ttsAvailable) return;
    const utter = new window.SpeechSynthesisUtterance(testText);
    utter.voice = voices.find(v => v.voiceURI === selectedVoice) || null;
    utter.pitch = pitch;
    window.speechSynthesis.speak(utter);
  };
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 8, padding: 24, minWidth: 320, maxWidth: 400 }}>
        <h2 id="ad-modal-title" style={{ marginTop: 0 }}>Audiodeskription Einstellungen</h2>
        <label>Modus:</label>
        <select value={mode} onChange={e => setMode(e.target.value)} style={{ width: '100%', marginBottom: 12 }}>
          <option value="tts">Transkript vorlesen</option>
          <option value="audio" disabled={!hasAudioTrack}>Zur Audiospur wechseln {hasAudioTrack ? '' : '(nicht verfügbar)'}</option>
          <option value="sign" disabled={!hasSignTrack}>Gebärdensprache-Overlay {hasSignTrack ? '' : '(nicht verfügbar)'}</option>
        </select>
        {mode === 'tts' && <>
          <label htmlFor="ad-voice">Stimme:</label>
          <select id="ad-voice" value={selectedVoice} onChange={e => setSelectedVoice(e.target.value)} style={{ width: '100%', marginBottom: 12 }}>
            {voices.map(v => <option key={v.voiceURI} value={v.voiceURI}>{v.name} ({v.lang})</option>)}
          </select>
          <label htmlFor="ad-pitch">Pitch: {pitch.toFixed(2)}</label>
          <input id="ad-pitch" type="range" min={0.5} max={2} step={0.01} value={pitch} onChange={e => setPitch(Number(e.target.value))} style={{ width: '100%' }} />
          <div style={{ margin: '12px 0' }}>
            <label><input type="checkbox" checked={autoStop} onChange={e => setAutoStop(e.target.checked)} /> Video automatisch stoppen</label><br />
            <label><input type="checkbox" checked={autoStart} onChange={e => setAutoStart(e.target.checked)} /> Video nach Vorlesen automatisch starten</label>
          </div>
          <label htmlFor="ad-test">Testtext:</label>
          <input id="ad-test" type="text" value={testText} onChange={e => setTestText(e.target.value)} style={{ width: '100%' }} />
          <button style={{ margin: '8px 0' }} onClick={handleTest} disabled={!ttsAvailable}>Stimme testen</button>
          {!ttsAvailable && <div style={{ color: 'red', marginTop: 8 }}>{ttsError || 'Text-to-Speech nicht verfügbar!'}</div>}
        </>}
        {mode === 'audio' && <div style={{ margin: '12px 0', color: hasAudioTrack ? '#333' : '#aaa' }}>Zur Audiospur wechseln {hasAudioTrack ? '' : '(nicht verfügbar)'}</div>}
        {mode === 'sign' && <div style={{ margin: '12px 0', color: hasSignTrack ? '#333' : '#aaa' }}>Gebärdensprache-Overlay {hasSignTrack ? '' : '(nicht verfügbar)'}</div>}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>
  );
};

const FullPlayer: React.FC<FullPlayerProps> = ({ src, captions, description, chapters, autoplay, muted }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [showTranscript, setShowTranscript] = useState(true);
  const [cues, setCues] = useState<TranscriptCue[]>([]);
  const [currentCueIdx, setCurrentCueIdx] = useState<number>(-1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [audioDescActive, setAudioDescActive] = useState(true);
  const [ttsBusy, setTtsBusy] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showCC, setShowCC] = useState(true);
  const [showChapters, setShowChapters] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isPiPSupported, setIsPiPSupported] = useState(false);
  const [currentChapterIdx, setCurrentChapterIdx] = useState(-1);
  // Spulen mit gedrückt halten
  const spoolingRef = useRef<NodeJS.Timeout | null>(null);
  const [isSpooling, setIsSpooling] = useState(false);
  const lastDescIdxRef = useRef<number>(-1);
  const [parsedChapters, setParsedChapters] = useState<Chapter[]>([]);
  const [audioDescSettingsOpen, setAudioDescSettingsOpen] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [pitch, setPitch] = useState(1);
  const [autoStop, setAutoStop] = useState(true);
  const [autoStart, setAutoStart] = useState(true);
  const [audioDescMode, setAudioDescMode] = useState<'tts' | 'audio' | 'sign'>('tts');
  const [ttsAvailable, setTtsAvailable] = useState(true);
  const [ttsError, setTtsError] = useState('');
  const [hasAudioTrack, setHasAudioTrack] = useState(false);
  const [hasSignTrack, setHasSignTrack] = useState(false);

  // Beide VTTs laden und kombinieren
  useEffect(() => {
    let cap: TranscriptCue[] = [];
    let desc: TranscriptCue[] = [];
    (async () => {
      if (captions) {
        const txt = await fetch(captions).then(r => r.text());
        cap = parseVtt(txt, 'caption');
      }
      if (description) {
        const txt = await fetch(description).then(r => r.text());
        desc = parseVtt(txt, 'description');
      }
      setCues([...cap, ...desc].sort((a, b) => a.start - b.start));
    })();
  }, [captions, description]);

  // Kapitel-VTT laden
  useEffect(() => {
    if (!chapters) return;
    fetch(chapters)
      .then(r => r.text())
      .then(txt => setParsedChapters(parseChaptersVtt(txt)));
  }, [chapters]);

  // Kapitel-Highlighting
  useEffect(() => {
    if (parsedChapters.length === 0) return;
    const idx = parsedChapters.findIndex((ch: Chapter) => currentTime >= ch.start && currentTime < ch.end);
    setCurrentChapterIdx(idx);
  }, [currentTime, parsedChapters]);

  // Fortschritt und Dauer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoaded = () => setDuration(video.duration);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoaded);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoaded);
    };
  }, []);

  // Automatisches Ausblenden der Controls
  useEffect(() => {
    if (!controlsVisible || !isPlaying) return;
    const timeout = setTimeout(() => setControlsVisible(false), 3000);
    return () => clearTimeout(timeout);
  }, [controlsVisible, isPlaying, currentTime]);

  // Mausbewegung/Tab holt Controls zurück
  useEffect(() => {
    const show = () => setControlsVisible(true);
    window.addEventListener('mousemove', show);
    window.addEventListener('keydown', show);
    return () => {
      window.removeEventListener('mousemove', show);
      window.removeEventListener('keydown', show);
    };
  }, []);

  // PiP-Support prüfen
  useEffect(() => {
    setIsPiPSupported(!!(document as any).pictureInPictureEnabled && typeof (videoRef.current as any)?.requestPictureInPicture === 'function');
  }, []);

  // Stimmen laden
  useEffect(() => {
    const updateVoices = () => {
      const vs = window.speechSynthesis.getVoices();
      setVoices(vs);
      if (!selectedVoice && vs.length > 0) setSelectedVoice(vs[0].voiceURI);
    };
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, [selectedVoice]);

  // Prüfe verfügbare Tracks
  useEffect(() => {
    const checkTracks = () => {
      const video = videoRef.current;
      if (!video) return;
      // Dummy-Check: In echten Playern müsste man video.audioTracks/video.textTracks/video.videoTracks prüfen
      setHasAudioTrack(!!video.querySelector('track[kind="descriptions"]'));
      setHasSignTrack(!!video.querySelector('track[kind="sign"]'));
    };
    checkTracks();
  }, []);

  // TTS verfügbar?
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setTtsAvailable(false);
      setTtsError('Text-to-Speech wird von diesem Browser nicht unterstützt.');
    } else {
      setTtsAvailable(true);
      setTtsError('');
    }
  }, []);

  // Audio-Description: Video pausiert, TTS liest vor, dann weiter
  useEffect(() => {
    if (!videoRef.current || cues.length === 0) return;
    const video = videoRef.current;
    let ttsUtter: SpeechSynthesisUtterance | null = null;
    const onTimeUpdate = () => {
      const t = video.currentTime;
      const idx = cues.findIndex(cue => t >= cue.start && t <= cue.end && (
        (audioDescMode === 'tts' && cue.type === 'description') ||
        (audioDescMode === 'tts' && cue.type === 'caption' && !cues.some(c => c.type === 'description'))
      ));
      setCurrentCueIdx(idx);
      if (
        audioDescActive &&
        audioDescMode === 'tts' &&
        idx !== -1 &&
        !ttsBusy &&
        lastDescIdxRef.current !== idx &&
        ttsAvailable
      ) {
        setTtsBusy(true);
        lastDescIdxRef.current = idx;
        if (autoStop) video.pause();
        ttsUtter = new window.SpeechSynthesisUtterance(cues[idx].text);
        ttsUtter.voice = voices.find(v => v.voiceURI === selectedVoice) || null;
        ttsUtter.pitch = pitch;
        ttsUtter.onend = () => {
          setTtsBusy(false);
          if (autoStart) video.play();
        };
        window.speechSynthesis.speak(ttsUtter);
      }
      // Reset lastDescIdxRef wenn kein Description-Cue aktiv
      if (idx === -1) {
        lastDescIdxRef.current = -1;
      }
      // Audiospur wechseln (Dummy)
      if (audioDescActive && audioDescMode === 'audio' && hasAudioTrack) {
        // Hier müsste in echten Playern die Audiospur gewechselt werden
        // Dummy: Zeige Hinweis
        // alert('Wechsel auf Audiospur (Demo)');
      }
      // Gebärdensprache-Overlay (Dummy)
      if (audioDescActive && audioDescMode === 'sign' && hasSignTrack) {
        // Hier müsste ein Overlay-Video eingeblendet werden
        // Dummy: Zeige Hinweis
        // alert('Gebärdensprache-Overlay (Demo)');
      }
    };
    video.addEventListener('timeupdate', onTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      if (ttsUtter) window.speechSynthesis.cancel();
    };
  }, [cues, audioDescActive, ttsBusy, voices, selectedVoice, pitch, autoStop, autoStart, audioDescMode, ttsAvailable, hasAudioTrack, hasSignTrack]);

  // Playbackrate setzen
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Lautstärke setzen
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  // Tastaturfokus sichtbar machen (WCAG)
  useEffect(() => {
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
  }, []);

  // Fullscreen
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Picture-in-Picture
  const handlePiP = () => {
    if (videoRef.current && (videoRef.current as any).requestPictureInPicture) {
      (videoRef.current as any).requestPictureInPicture();
    }
  };

  // CC-Button: Untertitelspur toggeln
  useEffect(() => {
    if (videoRef.current) {
      const tracks = videoRef.current.textTracks;
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = showCC ? 'showing' : 'hidden';
      }
    }
  }, [showCC, captions]);

  // Spulen mit gedrückt halten
  const handleSpool = (dir: 'back' | 'forward') => {
    if (!videoRef.current) return;
    setIsSpooling(true);
    videoRef.current.muted = true;
    spoolingRef.current = setInterval(() => {
      if (!videoRef.current) return;
      videoRef.current.currentTime += dir === 'forward' ? 0.2 : -0.2;
    }, 20);
  };
  const stopSpool = () => {
    setIsSpooling(false);
    if (spoolingRef.current) clearInterval(spoolingRef.current);
    if (videoRef.current) videoRef.current.muted = !!isMuted;
  };

  return (
    <section aria-label="Barrierefreier Video Player" style={{ maxWidth: 900, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <video
          ref={videoRef}
          width="100%"
          aria-label="Video mit Untertiteln und Beschreibung"
          muted={isMuted}
          tabIndex={0}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          autoPlay={autoplay}
          playsInline
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          {captions && <track kind="subtitles" src={captions} srcLang="de" label="Deutsch" default />}
          {description && <track kind="descriptions" src={description} srcLang="de" label="Audiodeskription" />}
          {chapters && <track kind="chapters" src={chapters} srcLang="de" label="Kapitel" />}
        </video>
        {/* Progressbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4, width: '100%' }}>
          <span style={{ minWidth: 48, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 1}
            step={0.01}
            value={currentTime}
            onChange={e => { if (videoRef.current) videoRef.current.currentTime = Number(e.target.value); }}
            aria-label="Fortschritt"
            style={{ flex: 1 }}
          />
          <span style={{ minWidth: 48, textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>{formatTime(duration)}</span>
        </div>
        {/* Controls */}
        {controlsVisible && (
          <nav ref={controlsRef} aria-label="Player-Steuerung" style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', background: 'rgba(255,255,255,0.95)', borderRadius: 4, padding: 4 }}>
            <button className="player-btn" onClick={() => { if (videoRef.current) videoRef.current.currentTime = 0; }} aria-label="Zum Start" title="Zum Start">|&#9664;</button>
            <button className="player-btn" onClick={() => { if (videoRef.current) videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause(); }} aria-label={isPlaying ? 'Pause' : 'Abspielen'} title={isPlaying ? 'Pause' : 'Abspielen'}>
              {isPlaying ? <PauseIcon aria-label="Pause" /> : <PlayIcon aria-label="Abspielen" />}
            </button>
            <button
              className="player-btn"
              onClick={() => { if (videoRef.current) videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10); }}
              onMouseDown={() => handleSpool('back')}
              onMouseUp={stopSpool}
              onMouseLeave={stopSpool}
              onTouchStart={() => handleSpool('back')}
              onTouchEnd={stopSpool}
              aria-label="10 Sekunden zurück" title="10 Sekunden zurück"
            >&#9664;&#9664;</button>
            <button
              className="player-btn"
              onClick={() => { if (videoRef.current) videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 10); }}
              onMouseDown={() => handleSpool('forward')}
              onMouseUp={stopSpool}
              onMouseLeave={stopSpool}
              onTouchStart={() => handleSpool('forward')}
              onTouchEnd={stopSpool}
              aria-label="10 Sekunden vor" title="10 Sekunden vor"
            >&#9654;&#9654;</button>
            <button className="player-btn" onClick={() => setIsMuted(m => !m)} aria-label={isMuted ? 'Ton an' : 'Ton aus'} title={isMuted ? 'Ton an' : 'Ton aus'}>
              {isMuted ? <UnmuteIcon aria-label="Ton an" /> : <MuteIcon aria-label="Ton aus" />}
            </button>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <VolumeIcon aria-label="Lautstärke" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                aria-label="Lautstärke"
                style={{ width: 80 }}
              />
            </span>
            <button
              className={`player-btn${audioDescActive ? ' active' : ''}`}
              style={{ background: audioDescActive ? '#b3e5fc' : undefined }}
              onClick={() => setAudioDescSettingsOpen(true)}
              aria-pressed={audioDescActive}
              aria-label="Audiodeskription Einstellungen"
              title="Audiodeskription Einstellungen"
            >
              <AudioDescIcon style={{verticalAlign:'middle'}} aria-label="Audiodeskription" />
            </button>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <SpeedIcon style={{verticalAlign:'middle'}} aria-label="Geschwindigkeit" />
              <input
                type="range"
                min={0.5}
                max={2}
                step={0.05}
                value={playbackRate}
                onChange={e => setPlaybackRate(Number(e.target.value))}
                aria-label="Geschwindigkeit"
                style={{ width: 80 }}
              />
              <span style={{ minWidth: 32, textAlign: 'center' }}>{playbackRate.toFixed(2)}x</span>
            </span>
            {captions && (
              <button className="player-btn" onClick={() => setShowCC(v => !v)} aria-pressed={showCC} aria-label="Untertitel ein-/ausblenden" title="Untertitel ein-/ausblenden">
                <CCIcon style={{verticalAlign:'middle'}} aria-label="CC" />
              </button>
            )}
            <button className="player-btn" onClick={handleFullscreen} aria-label="Vollbild" title="Vollbild">
              <FullscreenIcon style={{verticalAlign:'middle'}} aria-label="Vollbild" />
            </button>
            {isPiPSupported && (
              <button className="player-btn" onClick={handlePiP} aria-label="Bild-in-Bild" title="Bild-in-Bild">
                <PiPIcon style={{verticalAlign:'middle'}} aria-label="Bild-in-Bild" />
              </button>
            )}
            <button className="player-btn" onClick={() => setShowChapters(v => !v)} aria-pressed={showChapters} aria-label="Kapitel anzeigen/verbergen" title="Kapitel anzeigen/verbergen">
              <ChaptersIcon style={{verticalAlign:'middle'}} aria-label="Kapitel" />
            </button>
            <button className="player-btn" onClick={() => setShowTranscript(v => !v)} aria-pressed={showTranscript} aria-label="Transkript anzeigen/verbergen" title="Transkript anzeigen/verbergen">
              <TranscriptIcon style={{verticalAlign:'middle'}} aria-label="Transkript" />
            </button>
          </nav>
        )}
        {showTranscript && cues.length > 0 && (
          <div
            style={{ marginTop: 16, background: '#f5f5f5', padding: 8, borderRadius: 4, minHeight: 40 }}
            aria-live="polite"
            role="region"
            aria-label="Synchronisiertes Transkript"
          >
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {cues.map((cue, idx) => (
                <li
                  key={idx}
                  aria-current={idx === currentCueIdx ? 'true' : undefined}
                  tabIndex={idx === currentCueIdx ? 0 : -1}
                  style={{
                    background: idx === currentCueIdx ? (cue.type === 'caption' ? '#ffe082' : '#b3e5fc') : 'transparent',
                    fontWeight: idx === currentCueIdx ? 'bold' : 'normal',
                    color: cue.type === 'caption' ? '#333' : '#0277bd',
                    padding: '0 2px',
                    borderRadius: 2,
                    marginRight: 2,
                    outline: idx === currentCueIdx ? '2px solid #1976d2' : 'none',
                    display: 'inline-block',
                    marginBottom: 2
                  }}
                >
                  <span aria-label={cue.type === 'caption' ? 'Untertitel' : 'Beschreibung'}>{cue.text + ' '}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
      {parsedChapters && showChapters && parsedChapters.length > 0 && (
        <aside style={{ width: 220, marginLeft: 16, background: '#f0f4f8', borderRadius: 4, padding: 12, height: '100%', maxHeight: 480, overflowY: 'auto' }} aria-label="Kapitel-Liste">
          <h3 style={{ fontSize: 18, margin: '0 0 8px 0' }}>Kapitel</h3>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {parsedChapters.map((ch: Chapter, idx: number) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                <button
                  className="player-btn"
                  style={{ width: '100%', textAlign: 'left', background: idx === currentChapterIdx ? '#ffe082' : '#fff', border: '1px solid #bbb', borderRadius: 3, padding: 6, cursor: 'pointer', fontWeight: idx === currentChapterIdx ? 'bold' : 'normal' }}
                  onClick={() => { if (videoRef.current) videoRef.current.currentTime = ch.start; }}
                  aria-label={`Springe zu ${ch.title}`}
                >
                  {ch.title} <span style={{ float: 'right', color: '#888', fontSize: 12 }}>{formatTime(ch.start)}</span>
                </button>
              </li>
            ))}
          </ol>
        </aside>
      )}
      <AudioDescSettingsModal
        open={audioDescSettingsOpen}
        onClose={() => setAudioDescSettingsOpen(false)}
        voices={voices}
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
        pitch={pitch}
        setPitch={setPitch}
        autoStop={autoStop}
        setAutoStop={setAutoStop}
        autoStart={autoStart}
        setAutoStart={setAutoStart}
        mode={audioDescMode}
        setMode={m => setAudioDescMode(m as 'tts' | 'audio' | 'sign')}
        hasAudioTrack={hasAudioTrack}
        hasSignTrack={hasSignTrack}
        ttsAvailable={ttsAvailable}
        ttsError={ttsError}
      />
    </section>
  );
};

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default FullPlayer; 