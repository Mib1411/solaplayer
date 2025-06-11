import Link from 'next/link';

import { WcagPlayer } from '@/components/WcagPlayer';
export default function BundestagVideoTest() {
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
        <h1>Bundestag Video Test</h1>
        <p style={{ color: '#666', fontSize: 18 }}>
          Test des Video Players mit Bundestag.tv Video-Stream
        </p>
      </header>
<div style={{ marginBottom: 32, marginTop: 160 }}>
        <WcagPlayer
            btag="https://dbtg.tv/cvid/7631959"
            captionsUrl="/videos/sample_captions.vtt"
            descriptionsUrl="/videos/sample_description.vtt"
            playerMode="base"
            poster='/videos/poster.jpg'
            link='/test/bundestag/full'
            autoplay={false}
            muted={false}
        />
      </div>

    </div>
  );
}