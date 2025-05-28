import React, { useEffect, useRef } from 'react';
import styles from './SettingsModal.module.css';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  playerState: any;
}
 
export const SettingsModal: React.FC<SettingsModalProps> = ({
  open,
  onClose,
  playerState
}) => {
  const firstFocusableRef = useRef<HTMLSelectElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  // STIMMEN LADEN
  useEffect(() => {
    if (open && 'speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = speechSynthesis.getVoices();
        playerState.setVoices(voices);
        playerState.setTtsAvailable(voices.length > 0);
      };
      
      loadVoices();
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, [open, playerState]);

  // Keyboard Navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          '[data-modal] select, [data-modal] input, [data-modal] button'
        );
        const first = focusableElements[0] as HTMLElement;
        const last = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => firstFocusableRef.current?.focus(), 100);
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Test TTS Function
  const testTTS = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance('Dies ist ein Test der Sprachausgabe.');
      const voice = playerState.voices.find((v: SpeechSynthesisVoice) => v.voiceURI === playerState.selectedVoice);
      if (voice) {
        utterance.voice = voice;
      }
      utterance.pitch = playerState.pitch;
      speechSynthesis.speak(utterance);
    }
  };

  if (!open) return null;

  return (
    <div 
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
    >
      <div 
        data-modal
        className={styles.modalContent}
        onClick={e => e.stopPropagation()}
      >
        <h2 id="settings-title" className={styles.modalTitle}>Einstellungen</h2>
        
        {/* AUDIODESKRIPTION SECTION */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Audiodeskription</h3>
          
          <label className={styles.label}>Modus:</label>
          <select 
            ref={firstFocusableRef}
            value={playerState.audioDescMode || 'tts'} 
            onChange={e => playerState.setAudioDescMode(e.target.value)} 
            className={styles.select}
          >
            <option value="tts">Transkript vorlesen</option>
            <option value="audio" disabled={!playerState.hasAudioTrack}>
              Zur Audiospur wechseln {playerState.hasAudioTrack ? '' : '(nicht verfügbar)'}
            </option>
            <option value="sign" disabled={!playerState.hasSignTrack}>
              Gebärdensprache-Overlay {playerState.hasSignTrack ? '' : '(nicht verfügbar)'}
            </option>
          </select>

          {playerState.audioDescMode === 'tts' && (
            <>
              <label className={styles.label}>Stimme:</label>
              <select 
                value={playerState.selectedVoice || ''} 
                onChange={e => playerState.setSelectedVoice(e.target.value)} 
                className={styles.select}
              >
                <option value="">Standardstimme</option>
                {playerState.voices && playerState.voices.length > 0 ? (
                  playerState.voices.map((v: SpeechSynthesisVoice) => (
                    <option key={v.voiceURI} value={v.voiceURI}>
                      {v.name} ({v.lang})
                    </option>
                  ))
                ) : (
                  <option disabled>Stimmen werden geladen...</option>
                )}
              </select>

              <div className={styles.rangeContainer}>
                <label className={styles.label}>
                  Tonhöhe: {(playerState.pitch || 1).toFixed(2)}
                </label>
                <input 
                  type="range" 
                  min={0.5} 
                  max={2} 
                  step={0.01} 
                  value={playerState.pitch || 1} 
                  onChange={e => playerState.setPitch(Number(e.target.value))} 
                  className={styles.rangeInput}
                />
              </div>

              <button
                onClick={testTTS}
                disabled={playerState.ttsBusy}
                className={styles.testButton}
              >
                {playerState.ttsBusy ? 'Wird getestet...' : 'Stimme testen'}
              </button>

              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={playerState.autoStop || false} 
                    onChange={e => playerState.setAutoStop(e.target.checked)} 
                    className={styles.checkbox}
                  /> 
                  Video automatisch stoppen
                </label>
                
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={playerState.autoStart || false} 
                    onChange={e => playerState.setAutoStart(e.target.checked)} 
                    className={styles.checkbox}
                  /> 
                  Video nach Vorlesen automatisch starten
                </label>
              </div>

              {!playerState.ttsAvailable && (
                <div className={styles.errorMessage}>
                  {playerState.ttsError || 'Text-to-Speech nicht verfügbar!'}
                </div>
              )}
            </>
          )}
        </div>

        {/* UNTERTITEL DARSTELLUNG */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Untertitel Darstellung</h3>
          
          <label className={styles.label}>Schriftgröße:</label>
          <select 
            value={playerState.captionFontSize || 'medium'}
            onChange={e => playerState.setCaptionFontSize && playerState.setCaptionFontSize(e.target.value)}
            className={styles.select}
          >
            <option value="small">Klein</option>
            <option value="medium">Mittel</option>
            <option value="large">Groß</option>
            <option value="xlarge">Extra Groß</option>
          </select>

          <label className={styles.label}>Schriftfarbe:</label>
          <select 
            value={playerState.captionColor || 'white'}
            onChange={e => playerState.setCaptionColor && playerState.setCaptionColor(e.target.value)}
            className={styles.select}
          >
            <option value="white">Weiß</option>
            <option value="yellow">Gelb</option>
            <option value="green">Grün</option>
            <option value="cyan">Cyan</option>
          </select>

          <label className={styles.label}>Hintergrundfarbe:</label>
          <select 
            value={playerState.captionBackground || 'black'}
            onChange={e => playerState.setCaptionBackground && playerState.setCaptionBackground(e.target.value)}
            className={styles.select}
          >
            <option value="black">Schwarz</option>
            <option value="darkgray">Dunkelgrau</option>
            <option value="transparent">Transparent</option>
          </select>
        </div>

        <button 
          ref={lastFocusableRef}
          onClick={onClose}
          className={styles.closeButton}
        >
          Schließen
        </button>
      </div>
    </div>
  );
};