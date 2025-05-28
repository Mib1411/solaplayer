import React from 'react';

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
}
 
export const InfoModal: React.FC<InfoModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: 12,
          padding: 24,
          maxWidth: 600,
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto'
        }}
        onClick={e => e.stopPropagation()}
      >
        <h2>Informationen & Tastaturnavigation</h2>
        
        <div style={{ marginBottom: 16 }}>
          <h3>Tastatursteuerung</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>Leertaste</td>
                <td style={{ padding: 8 }}>Wiedergabe/Pause</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>← →</td>
                <td style={{ padding: 8 }}>5 Sekunden vor/zurück</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>↑ ↓</td>
                <td style={{ padding: 8 }}>Lautstärke erhöhen/verringern</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>Home</td>
                <td style={{ padding: 8 }}>Zum Anfang springen</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>M</td>
                <td style={{ padding: 8 }}>Stumm schalten</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>F</td>
                <td style={{ padding: 8 }}>Vollbild</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>C</td>
                <td style={{ padding: 8 }}>Untertitel ein/aus</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8, fontWeight: 'bold' }}>T</td>
                <td style={{ padding: 8 }}>Transkript ein/aus</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginBottom: 16 }}>
          <h3>Barrierefreiheit</h3>
          <ul>
            <li>Vollständige Tastaturnavigation</li>
            <li>Screen Reader kompatibel</li>
            <li>Untertitel verfügbar</li>
            <li>Audiodeskription verfügbar</li>
            <li>Transkript verfügbar</li>
            <li>Anpassbare Schriftgrößen</li>
          </ul>
        </div>

        <div style={{ marginBottom: 16 }}>
          <h3>Technische Informationen</h3>
          <p>Dieser Player unterstützt:</p>
          <ul>
            <li>MP4, WebM Video-Formate</li>
            <li>YouTube und Vimeo Einbettungen</li>
            <li>VTT Untertitel und Kapitel</li>
            <li>Verschiedene Videoqualitäten</li>
            <li>Picture-in-Picture Modus</li>
          </ul>
        </div>

        <button 
          onClick={onClose}
          style={{
            background: '#007acc',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: 6,
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Schließen
        </button>
      </div>
    </div>
  );
};