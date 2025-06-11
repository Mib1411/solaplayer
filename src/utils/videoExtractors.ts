import { VideoQuality, VideoSources } from "../types/player";

// YouTube Video Extractor - Verwendet YouTube IFrame API (kein Download)
export async function extractYouTubeVideo(url: string): Promise<VideoSources> {
  const videoId = extractYouTubeId(url);
  if (!videoId) throw new Error('Invalid YouTube URL');

  // ✅ YOUTUBE MIT STANDARD HD DIMENSIONEN:
  return {
    mp4: [{
      url: videoId, // Nur die ID, nicht die embed URL
      quality: 'auto',
      width: 1920,
      height: 1080
    }]
  };
}
 
// ✅ VIMEO Video Extractor - MIT DYNAMISCHEN QUALITÄTEN:
export async function extractVimeoVideo(url: string): Promise<VideoSources> {
  const videoId = extractVimeoId(url);
  if (!videoId) throw new Error('Invalid Vimeo URL');

  try {
    // ✅ VIMEO oEmbed API für Video-Info:
    const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`);
    const data = await response.json();
    
    // ✅ STANDARD QUALITÄTEN (werden später durch Player API ersetzt):
    const standardQualities: VideoQuality[] = [
      { url: videoId, quality: 'auto', width: 1920, height: 1080 },
      { url: videoId, quality: '1080p', width: 1920, height: 1080 },
      { url: videoId, quality: '720p', width: 1280, height: 720 },
      { url: videoId, quality: '540p', width: 960, height: 540 },
      { url: videoId, quality: '360p', width: 640, height: 360 }
    ];

    return { mp4: standardQualities };
    
  } catch (error) {
    console.warn('Vimeo oEmbed failed, using fallback:', error);
    
    // ✅ FALLBACK bei API-Fehler:
    return {
      mp4: [{
        url: videoId,
        quality: 'auto',
        width: 1920,
        height: 1080
      }]
    };
  }
}

// ✅ NEUE FUNKTION: VIMEO QUALITÄTEN DYNAMISCH UPDATEN:
export async function updateVimeoQualitiesFromPlayer(vimeoPlayer: any, videoId: string): Promise<VideoQuality[]> {
  try {
    const qualities = await vimeoPlayer.getQualities();
    
    return qualities.map((q: any) => ({
      url: videoId,
      quality: q.label, // "1080p", "720p", "540p", etc.
      width: q.width || getWidthFromQuality(q.label),
      height: q.height || getHeightFromQuality(q.label)
    }));
    
  } catch (error) {
    console.warn('Failed to get Vimeo qualities from player:', error);
    
    // ✅ FALLBACK QUALITÄTEN:
    return [
      { url: videoId, quality: 'auto', width: 1920, height: 1080 },
      { url: videoId, quality: '720p', width: 1280, height: 720 },
      { url: videoId, quality: '540p', width: 960, height: 540 }
    ];
  }
}

// ✅ HELPER FUNKTIONEN FÜR QUALITY DIMENSIONEN:
function getWidthFromQuality(quality: string): number {
  const qualityMap: Record<string, number> = {
    '2160p': 3840, '4K': 3840,
    '1440p': 2560, '2K': 2560,
    '1080p': 1920, 'HD': 1920,
    '720p': 1280,
    '540p': 960,
    '480p': 854,
    '360p': 640,
    '240p': 426
  };
  return qualityMap[quality] || 1920;
}

function getHeightFromQuality(quality: string): number {
  const qualityMap: Record<string, number> = {
    '2160p': 2160, '4K': 2160,
    '1440p': 1440, '2K': 1440,
    '1080p': 1080, 'HD': 1080,
    '720p': 720,
    '540p': 540,
    '480p': 480,
    '360p': 360,
    '240p': 240
  };
  return qualityMap[quality] || 1080;
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