import { NextRequest, NextResponse } from 'next/server';

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
    // Get video config from Vimeo
    const configResponse = await fetch(`https://player.vimeo.com/video/${videoId}/config`);
    
    if (!configResponse.ok) {
      throw new Error('Failed to fetch Vimeo config');
    }

    const config = await configResponse.json();
    
    // Extract progressive download URLs
    const progressiveFiles = config.request?.files?.progressive || [];
    
    return NextResponse.json({
      title: config.video?.title,
      duration: config.video?.duration,
      files: {
        progressive: progressiveFiles.map((file: any) => ({
          url: file.url,
          quality: file.quality,
          width: file.width,
          height: file.height,
          bitrate: file.bitrate
        }))
      }
    });
  } catch (error) {
    console.error('Vimeo extraction error:', error);
    return NextResponse.json(
      { error: 'Failed to extract Vimeo video' },
      { status: 500 }
    );
  }
}