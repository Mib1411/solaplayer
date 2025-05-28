import Link from 'next/link';
import FullPlayer from '../../../components/FullPlayer';
import MinimalPlayer from '@/components/MinimalPlayer';

export default function YouTubeVideoTest() {
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
        <h1>YouTube Video Test</h1>
        <p style={{ color: '#666', fontSize: 18 }}>
          Test des Video Players mit eingebettetem YouTube Video
        </p>
      </header>
      <div style={{ marginBottom: 32, marginTop: 160 }}>
        <MinimalPlayer
            youtube="https://www.youtube.com/watch?v=ir9JzC5N2-g"
            link="/test/youtube"
            autoplay={false}
            muted={false}
        />
      </div>

      <div style={{ marginBottom: 32 }}>
        <FullPlayer
          youtube="https://www.youtube.com/watch?v=ir9JzC5N2-g"
          captions="/videos/captions.vtt"
          description="/videos/description.vtt"
          chapters="/videos/chapters.vtt"
          autoplay={false}
          muted={false}
        />
      </div>

    </div>
  );
}