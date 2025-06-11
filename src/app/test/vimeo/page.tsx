import Link from 'next/link';

import { WcagPlayer } from '@/components/WcagPlayer';
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
      </header>
      <div style={{ marginBottom: 32, marginTop: 160 }}>   
        <WcagPlayer
            playerMode='extended'
            poster="/images/sample_poster.jpg"
            vimeo="https://vimeo.com/329615442"
            captionsUrl="/videos/sample_captions.vtt"
            descriptionsUrl="/videos/sample_description.vtt"
            autoplay={false}
            muted={false}
        />
        </div>

 
    </div>
  );
}