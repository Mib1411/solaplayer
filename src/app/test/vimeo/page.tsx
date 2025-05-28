import Link from 'next/link';
import FullPlayer from '../../../components/FullPlayer';
import MinimalPlayer from '@/components/MinimalPlayer';

export default function VimeoVideoTest() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <header style={{ marginBottom: 32 }}>
        <Link 
          href="/" 
          style={{ 
            color: '#007acc', 
            textDecoration: 'none',
            fontSize: 16,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16
          }}
        >
          ← Zurück zur Übersicht
        </Link>
        <h1>Vimeo Video Test</h1>
        <p style={{ color: '#666', fontSize: 18 }}>
          Test des Video Players mit eingebettetem Vimeo Video
        </p>
      </header><div style={{ marginBottom: 32, marginTop: 160 }}>   
        <MinimalPlayer
            vimeo="https://vimeo.com/329615442"
            link="/test/vimeo"
            autoplay={false}
            muted={false}
        />
        </div>
      <div style={{ marginBottom: 32 }}>
        <FullPlayer
          vimeo="https://vimeo.com/329615442"
          captions="/videos/sample_captions.vtt"
          description="/videos/sample_description.vtt"
          autoplay={false}
          muted={false}
        />
      </div>

      <section style={{ 
        background: '#e8f4fd', 
        padding: 24, 
        borderRadius: 8,
        marginBottom: 24,
        border: '1px solid #74b9ff'
      }}>
        <h2>🎬 Vimeo Integration</h2>
        <ul style={{ lineHeight: 1.6, marginBottom: 0 }}>
          <li>Vimeo Player API wird automatisch geladen</li>
          <li>Hochwertige Video-Qualität verfügbar</li>
          <li>Responsive Design mit anpassbarer Größe</li>
          <li>Externe Untertitel und Audiodeskription</li>
          <li>Vollständige Tastatursteuerung</li>
        </ul>
      </section>

    </div>
  );
}