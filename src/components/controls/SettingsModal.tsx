'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  loadPlayerSetting, 
  savePlayerSetting, 
  isFeatureEnabled 
} from '../../utils/useStorage';
import { SETTINGS_LABELS, ARIA_LABELS } from '@/utils/constants';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  playerState: any;
  playerMode?: 'base' | 'extended';
}
 
export const SettingsModal: React.FC<SettingsModalProps> = ({
  open,
  onClose,
  playerState,
  playerMode = 'extended'
}) => {
  const firstFocusableRef = useRef<HTMLSelectElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  // ✅ FIX: LOCAL VOICES STATE - nicht über playerState!
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  // ✅ Settings State...
  const [settings, setSettings] = useState({
    audioDescriptionMode: loadPlayerSetting('audioDescriptionMode', playerMode) || 'tts',
    audioDescriptionSelectedVoice: loadPlayerSetting('audioDescriptionSelectedVoice', playerMode) || '',
    audioDescriptionPitch: loadPlayerSetting('audioDescriptionPitch', playerMode) || 1,
    audioDescriptionAutoStop: loadPlayerSetting('audioDescriptionAutoStop', playerMode) || true,
    audioDescriptionAutoStart: loadPlayerSetting('audioDescriptionAutoStart', playerMode) || false,
    captionsFontSize: loadPlayerSetting('captionsFontSize', playerMode) || 'medium',
    captionsFontColor: loadPlayerSetting('captionsFontColor', playerMode) || 'white',
    captionsBackgroundColor: loadPlayerSetting('captionsBackgroundColor', playerMode) || 'black',
    transcriptTimeBasedView: loadPlayerSetting('transcriptTimeBasedView', playerMode) || true,
    transcriptShowFullTranscript: loadPlayerSetting('transcriptShowFullTranscript', playerMode) || false
  });

  // ✅ FIX: VOICES RICHTIG LADEN
  useEffect(() => {
    if (open && 'speechSynthesis' in window) {
      console.log('Loading voices...');
      
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        console.log('Voices found:', availableVoices.length, availableVoices);
        
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
          setVoicesLoaded(true);
        } else {
          console.log('No voices found, retrying...');
          // Retry after a short delay
          setTimeout(loadVoices, 100);
        }
      };

      // Initial load
      loadVoices();
      
      // Listen for voices changed event
      speechSynthesis.onvoiceschanged = loadVoices;
      
      return () => {
        speechSynthesis.onvoiceschanged = null;
      };
    }
  }, [open]);

  // ✅ Settings beim Öffnen laden
  useEffect(() => {
    if (open) {
      setSettings({
        audioDescriptionMode: loadPlayerSetting('audioDescriptionMode', playerMode) || 'tts',
        audioDescriptionSelectedVoice: loadPlayerSetting('audioDescriptionSelectedVoice', playerMode) || '',
        audioDescriptionPitch: loadPlayerSetting('audioDescriptionPitch', playerMode) || 1,
        audioDescriptionAutoStop: loadPlayerSetting('audioDescriptionAutoStop', playerMode) || true,
        audioDescriptionAutoStart: loadPlayerSetting('audioDescriptionAutoStart', playerMode) || false,
        captionsFontSize: loadPlayerSetting('captionsFontSize', playerMode) || 'medium',
        captionsFontColor: loadPlayerSetting('captionsFontColor', playerMode) || 'white',
        captionsBackgroundColor: loadPlayerSetting('captionsBackgroundColor', playerMode) || 'black',
        transcriptTimeBasedView: loadPlayerSetting('transcriptTimeBasedView', playerMode) || true,
        transcriptShowFullTranscript: loadPlayerSetting('transcriptShowFullTranscript', playerMode) || false
      });
    }
  }, [open, playerMode]);

  // ✅ FIX: Settings ändern
  const handleSettingChange = (key: string, value: any) => {
    console.log('Setting change:', { key, value });
    
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    
    savePlayerSetting(key, value);
    
    if (key === 'transcriptTimeBasedView' && playerState.ui?.setTranscriptTimeBasedView) {
      playerState.ui.setTranscriptTimeBasedView(value);
    }
    if (key === 'transcriptShowFullTranscript' && playerState.ui?.setTranscriptShowFull) {
      playerState.ui.setTranscriptShowFull(value);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => firstFocusableRef.current?.focus(), 100);
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // ✅ FIX: Test TTS mit LOCAL VOICES
  const testTTS = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Dies ist ein Test der Sprachausgabe.');
      
      // ✅ Use local voices state
      const voice = voices.find((v: SpeechSynthesisVoice) => v.voiceURI === settings.audioDescriptionSelectedVoice);
      if (voice) {
        utterance.voice = voice;
      }
      
      utterance.pitch = settings.audioDescriptionPitch;
      speechSynthesis.speak(utterance);
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 id="settings-title" className="modal-title">
          Player Einstellungen
        </h2>
        
        {/* DEBUG INFO */}
        <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
          <small>
            Debug: Voices loaded: {voicesLoaded ? 'Yes' : 'No'} | 
            Count: {voices.length} | 
            TTS available: {'speechSynthesis' in window ? 'Yes' : 'No'}
          </small>
        </div>
        
        {/* AUDIODESKRIPTION SECTION */}
        {isFeatureEnabled('audioDescription', playerMode) && (
          <div className="modal-section">
            <h3 className="modal-section-title">{SETTINGS_LABELS.AUDIO_DESCRIPTION}</h3>
            
            <label className="modal-label">{SETTINGS_LABELS.MODE}:</label>
            <select 
              ref={firstFocusableRef}
              value={settings.audioDescriptionMode} 
              onChange={e => handleSettingChange('audioDescriptionMode', e.target.value)} 
              className="modal-select"
            >
              <option value="tts">{SETTINGS_LABELS.TTS_MODE}</option>
              <option value="audio">{SETTINGS_LABELS.AUDIO_TRACK_MODE}</option>
            </select>

            {settings.audioDescriptionMode === 'tts' && (
              <>
                <label className="modal-label">{SETTINGS_LABELS.VOICE}:</label>
                <select 
                  value={settings.audioDescriptionSelectedVoice} 
                  onChange={e => handleSettingChange('audioDescriptionSelectedVoice', e.target.value)} 
                  className="modal-select"
                >
                  <option value="">{SETTINGS_LABELS.DEFAULT_VOICE}</option>
                  {/* ✅ FIX: Use local voices state */}
                  {voices.length > 0 ? (
                    voices.map((v: SpeechSynthesisVoice) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {v.name} ({v.lang})
                      </option>
                    ))
                  ) : (
                    <option disabled>
                      {voicesLoaded ? 'Keine Stimmen verfügbar' : 'Stimmen werden geladen...'}
                    </option>
                  )}
                </select>

                <div className="modal-range-container">
                  <label className="modal-label">
                    {SETTINGS_LABELS.PITCH}: {settings.audioDescriptionPitch.toFixed(2)}
                  </label>
                  <input 
                    type="range" 
                    min={0.5} 
                    max={2} 
                    step={0.01} 
                    value={settings.audioDescriptionPitch} 
                    onChange={e => handleSettingChange('audioDescriptionPitch', Number(e.target.value))} 
                    className="modal-range"
                  />
                </div>

                <button
                  onClick={testTTS}
                  disabled={voices.length === 0}
                  className="modal-button"
                >
                  {voices.length === 0 ? 'Stimmen laden...' : SETTINGS_LABELS.TEST_VOICE}
                </button>

                <div className="modal-checkbox-container">
                  <label className="modal-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={settings.audioDescriptionAutoStop} 
                      onChange={e => handleSettingChange('audioDescriptionAutoStop', e.target.checked)} 
                      className="modal-checkbox"
                    /> 
                    {SETTINGS_LABELS.AUTO_STOP}
                  </label>
                  
                  <label className="modal-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={settings.audioDescriptionAutoStart} 
                      onChange={e => handleSettingChange('audioDescriptionAutoStart', e.target.checked)} 
                      className="modal-checkbox"
                    /> 
                    {SETTINGS_LABELS.AUTO_START}
                  </label>
                </div>
              </>
            )}
          </div>
        )}

        {/* UNTERTITEL DARSTELLUNG */}
        {isFeatureEnabled('captions', playerMode) && (
          <div className="modal-section">
            <h3 className="modal-section-title">{SETTINGS_LABELS.CAPTION_DISPLAY}</h3>
            
            <label className="modal-label">{SETTINGS_LABELS.FONT_SIZE}:</label>
            <select 
              value={settings.captionsFontSize}
              onChange={e => handleSettingChange('captionsFontSize', e.target.value)}
              className="modal-select"
              aria-label={ARIA_LABELS.CAPTION_FONT_SIZE}
            >
              <option value="small">{SETTINGS_LABELS.SMALL}</option>
              <option value="medium">{SETTINGS_LABELS.MEDIUM}</option>
              <option value="large">{SETTINGS_LABELS.LARGE}</option>
              <option value="xlarge">{SETTINGS_LABELS.EXTRA_LARGE}</option>
            </select>

            <label className="modal-label">{SETTINGS_LABELS.FONT_COLOR}:</label>
            <select 
              value={settings.captionsFontColor}
              onChange={e => handleSettingChange('captionsFontColor', e.target.value)}
              className="modal-select"
              aria-label={ARIA_LABELS.CAPTION_COLOR}
            >
              <option value="white">{SETTINGS_LABELS.WHITE}</option>
              <option value="yellow">{SETTINGS_LABELS.YELLOW}</option>
              <option value="green">{SETTINGS_LABELS.GREEN}</option>
              <option value="cyan">{SETTINGS_LABELS.CYAN}</option>
            </select>

            <label className="modal-label">{SETTINGS_LABELS.BACKGROUND_COLOR}:</label>
            <select 
              value={settings.captionsBackgroundColor}
              onChange={e => handleSettingChange('captionsBackgroundColor', e.target.value)}
              className="modal-select"
              aria-label={ARIA_LABELS.CAPTION_BACKGROUND}
            >
              <option value="black">{SETTINGS_LABELS.BLACK}</option>
              <option value="darkgray">{SETTINGS_LABELS.DARK_GRAY}</option>
              <option value="transparent">{SETTINGS_LABELS.TRANSPARENT}</option>
            </select>
          </div>
        )}

        {/* TRANSKRIPT DARSTELLUNG */}
        {isFeatureEnabled('transcript', playerMode) && (
          <div className="modal-section">
            <h3 className="modal-section-title">{SETTINGS_LABELS.TRANSCRIPT_DISPLAY}</h3>
            
            <div className="modal-checkbox-container">
              <label className="modal-checkbox-label">
                <input 
                  type="checkbox" 
                  checked={settings.transcriptTimeBasedView} 
                  onChange={e => handleSettingChange('transcriptTimeBasedView', e.target.checked)} 
                  className="modal-checkbox"
                /> 
                {SETTINGS_LABELS.TIME_BASED_VIEW}
              </label>
              
              <label className="modal-checkbox-label">
                <input 
                  type="checkbox" 
                  checked={settings.transcriptShowFullTranscript} 
                  onChange={e => handleSettingChange('transcriptShowFullTranscript', e.target.checked)} 
                  className="modal-checkbox"
                /> 
                {SETTINGS_LABELS.SHOW_FULL_TRANSCRIPT}
              </label>
            </div>
          </div>
        )}

        <div className="modal-actions center">
          <button 
            ref={lastFocusableRef}
            onClick={onClose}
            className="modal-button full-width"
          >
            {SETTINGS_LABELS.CLOSE}
          </button>
        </div>
      </div>
    </div>
  );
};