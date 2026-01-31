import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Production AI Engineering<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Without the Fluff
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
          A curriculum-driven guide to building, deploying, and securing production AI systems. 
          This is not a blog. This is a structured engineering education.
        </p>

        {/* Mission Statement */}
        <div className="mb-12 sm:mb-16 p-4 sm:p-6 border-l-4 border-gray-900 bg-gray-50">
          <p className="text-base sm:text-lg leading-relaxed">
            Most AI content is shallow. We teach the internals—the mental models, 
            architecture decisions, and production patterns that separate prototypes from systems.
          </p>
        </div>

        {/* Who This Is For */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Who This Is For</h2>
          <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✓</span>
              <span>Engineers building production AI systems</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✓</span>
              <span>Technical leaders making architectural decisions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✓</span>
              <span>Developers who want to understand how things actually work</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✓</span>
              <span>Readers willing to invest time in deep learning</span>
            </li>
          </ul>
        </div>

        {/* Who This Is NOT For */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Who This Is Not For</h2>
          <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✗</span>
              <span>Beginners looking for "AI in 5 minutes" tutorials</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✗</span>
              <span>Readers seeking hype, trends, or hot takes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✗</span>
              <span>Anyone expecting quick wins without depth</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 flex-shrink-0">✗</span>
              <span>Casual browsers—this requires commitment</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            href="/start-here" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors rounded-md touch-manipulation"
          >
            Start Here
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
          
          <Link 
            href="/tutorials" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors rounded-md touch-manipulation"
          >
            View Tutorials
          </Link>
        </div>
      </section>
    </div>
  );
}

