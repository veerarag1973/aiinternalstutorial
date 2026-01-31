import { MetadataRoute } from 'next';
import { getAllTutorials } from '@/lib/tutorials';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aiinternals.com';
  
  try {
    const tutorials = getAllTutorials();
    
    const tutorialPages = tutorials.flatMap(tutorial =>
      tutorial.versions.map(version => ({
        url: `${baseUrl}/tutorials/${tutorial.meta.slug}/${version}`,
        lastModified: new Date(tutorial.meta.published_at),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    );

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/start-here`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/tutorials`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      ...tutorialPages,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return basic sitemap if there's an error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/start-here`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/tutorials`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
    ];
  }
}
