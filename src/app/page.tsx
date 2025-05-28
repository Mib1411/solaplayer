import styles from "./page.module.css";
import Link from 'next/link';

const videoTests = [
  {
    id: 'local',
    title: 'Lokales MP4 Video',
    description: 'Test mit lokalem MP4 Video, Untertiteln und Audiodeskription',
    poster: '/videos/posters/local-video.jpg',
    href: '/test/local'
  },
  {
    id: 'youtube',
    title: 'YouTube Video',
    description: 'Test mit eingebettetem YouTube Video',
    poster: '/videos/posters/youtube-video.jpg',
    href: '/test/youtube'
  },
  {
    id: 'vimeo',
    title: 'Vimeo Video',
    description: 'Test mit eingebettetem Vimeo Video',
    poster: '/videos/posters/vimeo-video.jpg',
    href: '/test/vimeo'
  },
  {
    id: 'bundestag',
    title: 'Bundestag Video',
    description: 'Test mit Bundestag.tv Video',
    poster: '/videos/posters/bundestag-video.jpg',
    href: '/test/bundestag'
  }
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>Barrierefreier Video Player</h1>
            <p className={styles.subtitle}>
              Testen Sie unseren vollständig barrierefreien Video Player mit verschiedenen Video-Quellen
            </p>
          </header>

          <div className={styles.videoGrid}>
            {videoTests.map((test) => (
              <Link 
                key={test.id} 
                href={test.href}
                className={styles.videoCard}
              >
                <div className={styles.cardContainer}>
                  {/* Poster Image */}
                  <div className={styles.poster}>
                    {/* Fallback wenn kein Poster vorhanden */}
                    <div className={styles.posterIcon}>
                      {test.id === 'local' && '🎬'}
                      {test.id === 'youtube' && '📺'}
                      {test.id === 'vimeo' && '🎥'}
                      {test.id === 'bundestag' && '🏛️'}
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className={styles.playButton}>
                      ▶️
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>
                      {test.title}
                    </h3>
                    <p className={styles.cardDescription}>
                      {test.description}
                    </p>

                    {/* Features */}
                    <div className={styles.features}>
                      {['Untertitel', 'Audiodeskription', 'Kapitel', 'Tastatur'].map((feature) => (
                        <span key={feature} className={styles.featureTag}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Info */}
          <footer className={styles.footer}>
            <h3 className={styles.footerTitle}>Barrierefreiheits-Features</h3>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <h4>🎯 Tastaturnavigation</h4>
                <p>Vollständige Steuerung ohne Maus</p>
              </div>
              <div className={styles.featureItem}>
                <h4>👁️ Screen Reader</h4>
                <p>ARIA-Labels und semantisches HTML</p>
              </div>
              <div className={styles.featureItem}>
                <h4>🔤 Untertitel</h4>
                <p>WebVTT Untertitel verfügbar</p>
              </div>
              <div className={styles.featureItem}>
                <h4>🎙️ Audiodeskription</h4>
                <p>TTS und Audio-Tracks</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
