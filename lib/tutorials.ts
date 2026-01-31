import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const tutorialsDirectory = path.join(process.cwd(), 'content', 'tutorials');

export interface TutorialMeta {
  title: string;
  slug: string;
  latest: string;
  status: 'stable' | 'updated' | 'deprecated';
  description: string;
  published_at: string;
}

export interface Tutorial {
  meta: TutorialMeta;
  versions: string[];
}

export interface TutorialContent {
  meta: TutorialMeta;
  version: string;
  content: string;
  isLatest: boolean;
  readingTime: string;
}

/**
 * Get all tutorials with their metadata
 */
export function getAllTutorials(): Tutorial[] {
  const tutorialSlugs = fs.readdirSync(tutorialsDirectory);
  
  const tutorials = tutorialSlugs.map((slug) => {
    const tutorialPath = path.join(tutorialsDirectory, slug);
    const metaPath = path.join(tutorialPath, 'meta.json');
    
    // Read meta.json
    const metaContent = fs.readFileSync(metaPath, 'utf8');
    const meta: TutorialMeta = JSON.parse(metaContent);
    
    // Get all version files
    const files = fs.readdirSync(tutorialPath);
    const versions = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace('.md', ''));
    
    return {
      meta,
      versions,
    };
  });
  
  // Sort by published date
  return tutorials.sort((a, b) => {
    return new Date(a.meta.published_at).getTime() - new Date(b.meta.published_at).getTime();
  });
}

/**
 * Get a specific tutorial by slug
 */
export function getTutorialBySlug(slug: string): Tutorial | null {
  const tutorialPath = path.join(tutorialsDirectory, slug);
  
  if (!fs.existsSync(tutorialPath)) {
    return null;
  }
  
  const metaPath = path.join(tutorialPath, 'meta.json');
  const metaContent = fs.readFileSync(metaPath, 'utf8');
  const meta: TutorialMeta = JSON.parse(metaContent);
  
  const files = fs.readdirSync(tutorialPath);
  const versions = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));
  
  return {
    meta,
    versions,
  };
}

/**
 * Get tutorial content for a specific version
 */
export function getTutorialContent(slug: string, version: string): TutorialContent | null {
  const tutorialPath = path.join(tutorialsDirectory, slug);
  
  if (!fs.existsSync(tutorialPath)) {
    return null;
  }
  
  // Read meta.json
  const metaPath = path.join(tutorialPath, 'meta.json');
  const metaContent = fs.readFileSync(metaPath, 'utf8');
  const meta: TutorialMeta = JSON.parse(metaContent);
  
  // Read version content
  const versionPath = path.join(tutorialPath, `${version}.md`);
  
  if (!fs.existsSync(versionPath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(versionPath, 'utf8');
  const { content } = matter(fileContent);
  const stats = readingTime(content);
  
  return {
    meta,
    version,
    content,
    isLatest: version === meta.latest,
    readingTime: stats.text,
  };
}

/**
 * Get the latest version for a tutorial
 */
export function getLatestVersion(slug: string): string | null {
  const tutorial = getTutorialBySlug(slug);
  return tutorial?.meta.latest || null;
}

/**
 * Get all tutorial slugs for static generation
 */
export function getAllTutorialSlugs(): string[] {
  const tutorialSlugs = fs.readdirSync(tutorialsDirectory);
  return tutorialSlugs;
}

/**
 * Get all version paths for static generation
 */
export function getAllTutorialVersionPaths(): { slug: string; version: string }[] {
  const slugs = getAllTutorialSlugs();
  const paths: { slug: string; version: string }[] = [];
  
  slugs.forEach((slug) => {
    const tutorial = getTutorialBySlug(slug);
    if (tutorial) {
      tutorial.versions.forEach((version) => {
        paths.push({ slug, version });
      });
    }
  });
  
  return paths;
}
