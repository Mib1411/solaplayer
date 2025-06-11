import Link from 'next/link';
import { WcagPlayer } from '@/v2/components/features/skipForward/WcagPlayer';

export default function videopage() {
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
        <h1>SinglePage Video Test</h1>
        <p style={{ color: '#666', fontSize: 18 }}>
          Test der dynamic page
        </p>
      </header>      <div style={{ marginBottom: 32 }}>
        <WcagPlayer
          bundestag="https://dbtg.tv/cvid/7631959"
          captionsUrl="/videos/sample_captions.vtt"
          descriptionsUrl="/videos/sample_description.vtt"
          chaptersUrl="/videos/sample_chapters.vtt"
          playerMode="extended"
          poster="/videos/poster.jpg"
          autoplay={false}
          muted={false}
        />
      </div>
    </div>   
  );
}