// app/api/download-image/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const imageName = searchParams.get('image');
  const fileName = searchParams.get('filename');

  if (!imageName || !fileName) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    // Map image names to file paths
    const imageMap: { [key: string]: string } = {
      'ceo': 'marshall.jpg',
      'coo': 'Bartek.jpeg',
      'vp': 'Aisha.jpeg',
      'cmo': 'fidelis1.jpeg',
    };

    const actualFileName = imageMap[imageName];
    if (!actualFileName) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    const imagePath = path.join(process.cwd(), 'public', actualFileName);
    
    if (!fs.existsSync(imagePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const imageBuffer = fs.readFileSync(imagePath);
    const mimeType = actualFileName.endsWith('.png') ? 'image/png' : 'image/jpeg';

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': imageBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}