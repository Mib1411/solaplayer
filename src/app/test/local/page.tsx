import Link from 'next/link';
import MinimalPlayer from '../../../components/MinimalPlayer'; // DEFAULT IMPORT
import FullPlayer from '../../../components/FullPlayer'; // DEFAULT IMPORT

export default function LocalVideoTest() {
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
        <h1>Lokales MP4 Video Test</h1>
        <p style={{ color: '#666', fontSize: 18 }}>
          Test des Video Players mit lokalem MP4 Video, Untertiteln und Audiodeskription
        </p>
      </header>

      <MinimalPlayer
        mp4="/videos/sample.mp4"
        link="/test/local"
        poster="/videos/poster.jpg"
        autoplay={false}
        muted={false}
      />

      <div style={{ marginBottom: 32, marginTop: 160 }}>
        <FullPlayer
          mp4="/videos/sample.mp4"
          captions="/videos/sample_captions.vtt"
          description="/videos/sample_description.vtt"
          poster="/videos/poster.jpg"
          chapters="/videos/sample_chapters.vtt"
          autoplay={false}
          muted={false}
        />
      </div>
    </div>
  );
}