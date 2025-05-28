import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const videoId = searchParams.get('id');

  if (!videoId) {
    return NextResponse.json(
      { error: 'Missing video ID' },
      { status: 400 }
    );
  }

  try {
    // Use yt-dlp to extract video formats
    const { stdout } = await execAsync(`yt-dlp -j "https://www.youtube.com/watch?v=${videoId}"`);
    const videoInfo = JSON.parse(stdout);
    
    // Filter for video formats with audio
    const formats = videoInfo.formats?.filter((format: any) => 
      format.vcodec !== 'none' && 
      format.acodec !== 'none' &&
      format.ext === 'mp4'
    ) || [];

    return NextResponse.json({
      title: videoInfo.title,
      duration: videoInfo.duration,
      formats: formats.map((format: any) => ({
        url: format.url,
        quality: format.format_note || `${format.height}p`,
        qualityLabel: format.format_note,
        width: format.width,
        height: format.height,
        bitrate: format.tbr,
        container: format.ext,
        hasVideo: format.vcodec !== 'none',
        hasAudio: format.acodec !== 'none'
      }))
    });
  } catch (error) {
    console.error('YouTube extraction error:', error);
    return NextResponse.json(
      { error: 'Failed to extract YouTube video' },
      { status: 500 }
    );
  }
}