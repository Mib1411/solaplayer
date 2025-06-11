'use client';

import React from 'react';
import { PLAYER_LABELS } from '@/utils/constants';


interface InfoModalProps {
  open: boolean;
  onClose: () => void;
}
 
export const InfoModal: React.FC<InfoModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-title"
    >
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >        <h2 id="info-title" className="modal-title">
          Informationen & Tastaturnavigation
        </h2>
          <div className="modal-section">
          <h3 className="modal-section-title">Tastatursteuerung</h3>
          <div className="shortcut-table"><div className="shortcut-row">
              <span className="shortcut-key">Leertaste</span>
              <span className="shortcut-desc">Wiedergabe/Pause</span>
            </div>
            <div className="shortcut-row">
              <span className="shortcut-key">← →</span>
              <span className="shortcut-desc">5 Sekunden zurück/vor</span>
            </div>
            <div className="shortcut-row">
              <span className="shortcut-key">↑ ↓</span>
              <span className="shortcut-desc">Lautstärke erhöhen/verringern</span>
            </div>
            <div className="shortcut-row">
              <span className="shortcut-key">M</span>
              <span className="shortcut-desc">Stumm schalten</span>
            </div>
            <div className="shortcut-row">
              <span className="shortcut-key">F</span>
              <span className="shortcut-desc">Vollbild</span>
            </div>
          </div>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Barrierefreiheit</h3>
          <ul className="feature-list">
            <li>Vollständige Tastaturnavigation</li>
            <li>Screen Reader kompatibel</li>
            <li>Untertitel verfügbar</li>
            <li>Audiodeskription verfügbar</li>
            <li>Transkript verfügbar</li>
            <li>Anpassbare Schriftgrößen</li>
          </ul>
        </div>

        <div className="modal-section">
          <h3 className="modal-section-title">Technische Informationen</h3>
          <p>Dieser Player unterstützt:</p>
          <ul className="feature-list">
            <li>MP4, WebM Video-Formate</li>
            <li>YouTube und Vimeo Einbettungen</li>
            <li>VTT Untertitel und Kapitel</li>
            <li>Verschiedene Videoqualitäten</li>
            <li>Picture-in-Picture Modus</li>
          </ul>
        </div>        
        <div className="modal-actions center">
          <button 
            onClick={onClose}
            className="modal-button full-width"
            aria-label="Informationen schließen"
          >
            {PLAYER_LABELS.CLOSE}
          </button>
        </div>
      </div>
    </div>
  );
};