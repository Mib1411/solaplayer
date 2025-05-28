import { VideoQuality, VideoSources } from "../types/player";

// YouTube Video Extractor - Verwendet YouTube IFrame API (kein Download)
export async function extractYouTubeVideo(url: string): Promise<VideoSources> {
  const videoId = extractYouTubeId(url);
  if (!videoId) throw new Error('Invalid YouTube URL');

  // Für YouTube verwenden wir die IFrame API, nicht direkte URLs
  // Diese Funktion ist nur für Kompatibilität - eigentliche Logik ist in YouTubePlayerWrapper
  return {
    mp4: [{
      url: `https://www.youtube.com/embed/${videoId}?enablejsapi=1`,
      quality: 'iframe',
      width: 1280,
      height: 720
    }]
  };
}
 
// Vimeo Video Extractor - Verwendet Vimeo Player API
export async function extractVimeoVideo(url: string): Promise<VideoSources> {
  const videoId = extractVimeoId(url);
  if (!videoId) throw new Error('Invalid Vimeo URL');

  // Für Vimeo verwenden wir die Player API, nicht direkte URLs
  // Diese Funktion ist nur für Kompatibilität - eigentliche Logik ist in VimeoPlayerWrapper
  return {
    mp4: [{
      url: `https://player.vimeo.com/video/${videoId}`,
      quality: 'player',
      width: 1280,
      height: 720
    }]
  };
}

// Bundestag Video Extractor - Direkte MP4 URLs
export async function extractBundestagVideo(url: string): Promise<VideoSources> {
  const videoId = extractBundestagId(url);
  if (!videoId) throw new Error('Invalid Bundestag URL');

  const baseUrl = 'https://cldf-od.r53.cdn.tv1.eu/1000153copo/ondemand/app144277506/145293313';
  
  const qualities: VideoQuality[] = [
    {
      url: `${baseUrl}/${videoId}/${videoId}_h264_1920_1080_8000kb_baseline_de_8000.mp4`,
      quality: '1080p',
      width: 1920,
      height: 1080,
      bitrate: 8000
    },
    {
      url: `${baseUrl}/${videoId}/${videoId}_h264_1280_720_3000kb_baseline_de_3000.mp4`,
      quality: '720p',
      width: 1280,
      height: 720,
      bitrate: 3000
    },
    {
      url: `${baseUrl}/${videoId}/${videoId}_h264_640_360_1000kb_baseline_de_1000.mp4`,
      quality: '360p',
      width: 640,
      height: 360,
      bitrate: 1000
    },
    {
      url: `${baseUrl}/${videoId}/${videoId}_h264_512_288_514kb_baseline_de_514.mp4`,
      quality: '288p',
      width: 512,
      height: 288,
      bitrate: 514
    }
  ];

  return { mp4: qualities };
}

// Helper functions für URL-Parsing
export function extractYouTubeId(url: string): string | null {
  // Wie AblePlayer: die letzten 11 Zeichen bei YouTube URLs
  if (url.indexOf('youtu') !== -1) {
    url = url.trim();
    const idStartPos = url.length - 11;
    const id = url.substring(idStartPos);
    return id;
  }
  return null;
}

export function extractVimeoId(url: string): string | null {
  const regex = /vimeo\.com\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function extractBundestagId(url: string): string | null {
  const regex = /dbtg\.tv\/cvid\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}