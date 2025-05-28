// filepath: src/utils/youtubeApi.ts
interface YouTubeVideoInfo {
  id: string;
  title: string;
  duration: string;
  thumbnails: {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
  };
}
 
// YouTube API für Metadaten (Titel, Thumbnail, etc.)
export async function getYouTubeVideoInfo(videoId: string): Promise<YouTubeVideoInfo> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    throw new Error('YouTube API key not configured');
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      throw new Error('Video not found');
    }

    const video = data.items[0];
    return {
      id: video.id,
      title: video.snippet.title,
      duration: video.contentDetails.duration,
      thumbnails: video.snippet.thumbnails
    };
  } catch (error) {
    console.error('YouTube API request failed:', error);
    throw error;
  }
}

// YouTube Poster URL (wie AblePlayer)
export function getYouTubePosterUrl(youTubeId: string, width: number = 320): string {
  const baseUrl = `https://img.youtube.com/vi/${youTubeId}`;
  
  switch (width) {
    case 120:
      return `${baseUrl}/default.jpg`; // 120 x 90
    case 320:
      return `${baseUrl}/hqdefault.jpg`; // 320 x 180
    case 480:
      return `${baseUrl}/hqdefault.jpg`; // 480 x 360
    case 640:
      return `${baseUrl}/sddefault.jpg`; // 640 x 480
    default:
      return `${baseUrl}/hqdefault.jpg`;
  }
}