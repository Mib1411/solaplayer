import Link from 'next/link';
import { WcagPlayer } from '@/components/WcagPlayer';
export default function LocalVideoTest() {
  return (
    <div>
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
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '24px' }}>
        <WcagPlayer
          mp4="/videos/sample.mp4"
          link="/test/local"
          poster="/videos/poster.jpg"
          autoplay={false}
          muted={false}
        />
      </div>

    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '24px' }}>
        <WcagPlayer
          playerMode="extended"
          mp4={['/videos/SampleVideo_md.mp4','/videos/SampleVideo_sd.mp4']}
          captionsUrl="/videos/sample_captions.vtt"
          descriptionsUrl="/videos/sample_description.vtt"
          poster="/videos/poster.jpg"
          chaptersUrl="/videos/sample_chapters.vtt"
          autoplay={false}
          muted={false}
        />
      </div>
      </div>
  );
}