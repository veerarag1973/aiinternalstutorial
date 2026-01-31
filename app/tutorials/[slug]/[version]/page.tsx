import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTutorialContent, getAllTutorialVersionPaths, getTutorialBySlug } from '@/lib/tutorials';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { ReadingProgress } from '@/components/ReadingProgress';
import { TableOfContents } from '@/components/TableOfContents';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TutorialContent } from '@/components/TutorialContent';
import { SocialShare } from '@/components/SocialShare';
import { Clock, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const paths = getAllTutorialVersionPaths();
  return paths.map((path) => ({
    slug: path.slug,
    version: path.version,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string; version: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const tutorialContent = getTutorialContent(params.slug, params.version);
  
  if (!tutorialContent) {
    return {
      title: 'Tutorial Not Found',
    };
  }
  
  const versionSuffix = tutorialContent.isLatest ? '' : ` (${params.version})`;
  const canonicalUrl = tutorialContent.isLatest 
    ? `/tutorials/${params.slug}/${params.version}`
    : `/tutorials/${params.slug}/${tutorialContent.meta.latest}`;
  
  return {
    title: `${tutorialContent.meta.title}${versionSuffix} | AI Internals`,
    description: tutorialContent.meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

export default async function TutorialVersionPage(props: {
  params: Promise<{ slug: string; version: string }>;
}) {
  const params = await props.params;
  const tutorialContent = getTutorialContent(params.slug, params.version);
  
  if (!tutorialContent) {
    notFound();
  }
  
  const tutorial = getTutorialBySlug(params.slug);
  const contentHtml = await markdownToHtml(tutorialContent.content);
  
  return (
    <div className="relative">
      <ReadingProgress />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
            <article className="lg:col-span-8 xl:col-span-9">
              <Breadcrumbs 
                items={[
                  { label: 'Tutorials', href: '/tutorials' },
                  { label: tutorialContent.meta.title, href: `/tutorials/${params.slug}` },
                ]}
              />

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="px-2 sm:px-3 py-1 bg-gray-900 text-white text-xs sm:text-sm font-mono rounded">
                  {params.version}
                </span>
                {tutorialContent.isLatest && (
                  <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm font-semibold rounded border border-green-200">
                    Latest
                  </span>
                )}
                <span className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {tutorialContent.readingTime}
                </span>
                <span className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="hidden sm:inline">
                    {tutorialContent.meta.published_at ? new Date(tutorialContent.meta.published_at).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }) : 'N/A'}
                  </span>
                  <span className="sm:hidden">
                    {tutorialContent.meta.published_at ? new Date(tutorialContent.meta.published_at).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    }) : 'N/A'}
                  </span>
                </span>
              </div>
        
              {!tutorialContent.isLatest && (
                <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-xs sm:text-sm text-yellow-800 font-medium mb-2">
                    ⚠️ You're viewing an older version of this tutorial
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-700 mb-2 sm:mb-3">
                    A newer version is available with updated content and improvements.
                  </p>
                  <Link 
                    href={`/tutorials/${params.slug}/${tutorialContent.meta.latest}`}
                    className="text-xs sm:text-sm font-semibold text-yellow-900 underline hover:no-underline touch-manipulation"
                  >
                    View latest version ({tutorialContent.meta.latest}) →
                  </Link>
                </div>
              )}
              
              {tutorial && tutorial.versions.length > 1 && (
                <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Other Versions:</p>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.versions.map((v) => (
                      <Link
                        key={v}
                        href={`/tutorials/${params.slug}/${v}`}
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono rounded border transition-colors touch-manipulation ${
                          v === params.version
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                        }`}
                      >
                        {v}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              <TutorialContent contentHtml={contentHtml} />
              
              <SocialShare 
                title={tutorialContent.meta.title}
                url={`/tutorials/${params.slug}/${params.version}`}
              />
              
              <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
                <Link 
                  href="/tutorials" 
                  className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center touch-manipulation text-sm sm:text-base"
                >
                  ← Back to all tutorials
                </Link>
              </div>
            </article>

            <aside className="lg:col-span-4 xl:col-span-3 mt-8 lg:mt-0">
              <TableOfContents content={contentHtml} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
