import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTutorials } from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'Tutorials | AI Internals',
  description: 'A structured curriculum for production AI engineering. Ordered tutorials covering fundamentals through deployment.',
};

export default function TutorialsPage() {
  const tutorials = getAllTutorials();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'updated':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'deprecated':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <header className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Tutorials</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            A curriculum-driven progression through production AI engineering. 
            Start at the top and work your way down.
          </p>
        </header>

        {/* Tutorial List */}
        <div className="space-y-4 sm:space-y-6">
          {tutorials.map((tutorial, index) => (
            <article 
              key={tutorial.meta.slug}
              className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 hover:border-gray-900 transition-colors"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-300 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words">
                      <Link href={`/tutorials/${tutorial.meta.slug}`} className="hover:underline">
                        {tutorial.meta.title}
                      </Link>
                    </h2>
                  </div>
                </div>
                <span className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full border flex-shrink-0 ${getStatusColor(tutorial.meta.status)}`}>
                  {tutorial.meta.status}
                </span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                {tutorial.meta.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
                <div className="text-gray-500">
                  Latest: {tutorial.meta.latest} • {tutorial.versions.length} version{tutorial.versions.length !== 1 ? 's' : ''}
                </div>
                <Link 
                  href={`/tutorials/${tutorial.meta.slug}`}
                  className="text-gray-900 font-medium hover:underline touch-manipulation"
                >
                  Read Tutorial →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-6 bg-gray-50 border-l-4 border-gray-900">
          <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">New here?</h3>
          <p className="text-gray-700 text-sm sm:text-base mb-3">
            If you haven't read the <Link href="/start-here" className="underline hover:no-underline">Start Here</Link> page, 
            do that first. It explains the learning philosophy and how tutorials are structured.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>Tip:</strong> Tutorials are cumulative. Don't skip ahead unless you're confident in the prerequisites.
          </p>
        </div>
      </div>
    </div>
  );
}
