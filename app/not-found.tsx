import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-7xl sm:text-9xl font-bold text-gray-900 mb-4">404</h1>
          <div className="h-1 w-20 bg-gray-900 mx-auto mb-6"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist, has been moved, or the tutorial version might have been updated.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors rounded-md touch-manipulation"
          >
            <Home className="mr-2 w-4 h-4" />
            Back to Home
          </Link>
          
          <Link
            href="/tutorials"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors rounded-md touch-manipulation"
          >
            View Tutorials
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Tip:</strong> If you were looking for a specific tutorial, try checking the{' '}
            <Link href="/tutorials" className="text-blue-600 hover:underline">
              tutorials page
            </Link>{' '}
            to find the latest version.
          </p>
        </div>
      </div>
    </div>
  );
}
