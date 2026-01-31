import Link from "next/link";
import { BookOpen, Code, Share2 } from "lucide-react";

export const metadata = {
  title: "About",
  description: "Learn more about AI Internals - a learning journey documenting the path to understanding production AI systems.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
          About This Site
        </h1>
        
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-8 rounded-r">
            <p className="text-base sm:text-lg text-blue-900 font-medium mb-2">
              Transparency First
            </p>
            <p className="text-sm sm:text-base text-blue-800">
              <strong>I'm not an expert.</strong> I'm a learner documenting my journey through AI engineering. 
              Everything here represents what I'm learning, experimenting with, and sharing along the way.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
            The Philosophy
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 my-8">
            <div className="flex flex-col items-start">
              <div className="bg-gray-900 text-white p-3 rounded-lg mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn</h3>
              <p className="text-sm text-gray-600">
                I learn by doing, breaking things, and figuring out how they work. These tutorials document that process.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="bg-gray-900 text-white p-3 rounded-lg mb-3">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-sm text-gray-600">
                Hands-on implementation is the best teacher. Every tutorial includes working code and real examples.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="bg-gray-900 text-white p-3 rounded-lg mb-3">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share</h3>
              <p className="text-sm text-gray-600">
                What I learn, I share. If it helps even one person avoid the mistakes I made, it's worth it.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            What This Is
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ A <strong>learning journal</strong> documenting my AI engineering journey</li>
            <li>✅ <strong>Practical tutorials</strong> based on real implementations</li>
            <li>✅ <strong>Honest mistakes and solutions</strong> - I show what didn't work too</li>
            <li>✅ <strong>Versioned content</strong> - as I learn more, tutorials get updated</li>
            <li>✅ A <strong>free resource</strong> for anyone learning production AI</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            What This Isn't
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>❌ Expert advice from a seasoned ML engineer</li>
            <li>❌ Production-ready solutions without testing</li>
            <li>❌ The "one true way" to build AI systems</li>
            <li>❌ A comprehensive academic resource</li>
            <li>❌ Guaranteed to be perfect or error-free</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 sm:p-6 my-8 rounded-r">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Use at Your Own Risk
            </h3>
            <p className="text-sm sm:text-base text-yellow-800">
              Always verify, test, and adapt any code or concepts to your specific needs. 
              What works in my learning environment may need adjustment for production systems.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Why Versioning Matters
          </h2>
          <p className="text-gray-700 mb-4">
            AI moves fast. What I understand today might be incomplete or outdated tomorrow. 
            Instead of deleting old content, I version it:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li><strong>Old versions stay accessible</strong> - you can see how understanding evolved</li>
            <li><strong>New versions get published</strong> - incorporating better practices and deeper knowledge</li>
            <li><strong>Context is preserved</strong> - mistakes and learnings are documented</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Found an Error?
          </h2>
          <p className="text-gray-700 mb-4">
            Please point it out! Since I'm learning, there will be mistakes. I want to correct them 
            and update the tutorials so others benefit from the correction.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            The Goal
          </h2>
          <p className="text-gray-700 mb-4">
            My goal is simple: <strong>document the messy, non-linear process of learning AI engineering</strong> 
            and make it easier for the next person. If you're also learning, you're in the right place. 
            We're learning together.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-lg mt-12 text-center">
            <p className="text-lg sm:text-xl text-gray-900 mb-4">
              Ready to start learning?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/start-here"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Start Here
              </Link>
              <Link 
                href="/tutorials"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Browse Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
