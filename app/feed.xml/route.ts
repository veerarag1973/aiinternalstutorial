import { getAllTutorials } from '@/lib/tutorials';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aiinternals.com';
  
  try {
    const tutorials = getAllTutorials();
    
    const rssItems = tutorials.map(tutorial => {
      const tutorialUrl = `${baseUrl}/tutorials/${tutorial.meta.slug}/${tutorial.meta.latest}`;
      const pubDate = new Date(tutorial.meta.published_at).toUTCString();
      
      return `
    <item>
      <title><![CDATA[${tutorial.meta.title}]]></title>
      <link>${tutorialUrl}</link>
      <guid>${tutorialUrl}</guid>
      <description><![CDATA[${tutorial.meta.description}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    }).join('');
    
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Internals</title>
    <link>${baseUrl}</link>
    <description>A curriculum-driven guide to building, deploying, and securing production AI systems. Structured engineering education without the fluff.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;
    
    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}
