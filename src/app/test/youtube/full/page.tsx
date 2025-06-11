import Link from 'next/link';
import { WcagPlayer } from '@/components/WcagPlayer';

export default function YouTubeVideoTestFull() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <header style={{ marginBottom: 32 }}>
        <Link 
          href="/test/youtube" 
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
          ← Zurück zum Minimal Player
        </Link>
        <h1>YouTube Video Test - Full Player</h1>
        <p style={{ color: '#666', fontSize: 18 }}>
          Vollständiger Video Player mit YouTube Video
        </p>
      </header>

      <div style={{ marginBottom: 32 }}>
        <WcagPlayer
          youtube="https://www.youtube.com/watch?v=ir9JzC5N2-g"
          captionsUrl="/videos/sample_captions.vtt"
          descriptionsUrl="/videos/sample_description.vtt"
          chaptersUrl="/videos/sample_chapters.vtt"
          playerMode="extended"
          autoplay={false}
          muted={false}
        />
      </div>
    </div>
  );
}