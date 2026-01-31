import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Start Here | AI Internals',
  description: 'Learn how to approach production AI engineering with our structured curriculum. Understand expectations, versioning, and the learning philosophy.',
};

export default function StartHerePage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Start Here</h1>
        
        <div className="prose prose-base sm:prose-lg max-w-none">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12">
            This is not passive learning. You're here to build production AI systems that actually work.
          </p>

          {/* Learning Philosophy */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Learning Philosophy</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Most AI education focuses on surface-level APIs and toy examples. We go deeper.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              You'll learn the <strong>mental models</strong>, <strong>architectural patterns</strong>, 
              and <strong>production constraints</strong> that experienced engineers use. This means:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              <li>Understanding <em>why</em> things work, not just <em>how</em></li>
              <li>Learning patterns that transfer across tools and frameworks</li>
              <li>Building intuition for tradeoffs and failure modes</li>
              <li>Developing the judgment needed for real-world decisions</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              This takes time. This takes effort. But this is what separates engineers 
              who ship production systems from those who follow tutorials.
            </p>
          </section>

          {/* What We Expect */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">What We Expect From You</h2>
            <div className="bg-gray-50 border-l-4 border-gray-900 p-4 sm:p-6 mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-gray-800 font-medium mb-4">
                This curriculum is for serious learners only.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                If you're looking for quick wins, hype, or surface-level overviews—this isn't the place. 
                We assume you're willing to invest real time and mental energy.
              </p>
            </div>
            
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">You should:</p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>Have basic programming experience (Python or TypeScript preferred)</li>
              <li>Be comfortable reading technical documentation</li>
              <li>Have patience for concepts that take time to internalize</li>
              <li>Be willing to experiment, fail, and iterate</li>
              <li>Question assumptions and test your understanding</li>
            </ul>
          </section>

          {/* Tutorial Structure */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">How Tutorials Are Structured</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Each tutorial follows a consistent pattern:
            </p>
            <ol className="space-y-3 text-sm sm:text-base text-gray-700 list-decimal list-inside">
              <li><strong>Mental Model First</strong> — We establish the conceptual framework before code</li>
              <li><strong>Working Examples</strong> — Production-quality code, not quick hacks</li>
              <li><strong>Failure Modes</strong> — What breaks, why it breaks, and how to handle it</li>
              <li><strong>Tradeoffs</strong> — When to use this pattern and when not to</li>
            </ol>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
              Tutorials are <strong>cumulative</strong>. Later tutorials assume you've internalized 
              earlier ones. Don't skip ahead unless you're confident in the prerequisites.
            </p>
          </section>

          {/* Versioning */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Understanding Versioned Tutorials</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              AI tooling moves fast. Instead of deleting or overwriting content, we <strong>version</strong> tutorials.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Why Versioning?</h3>
              <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
                <li>✓ Old versions remain accessible and useful</li>
                <li>✓ You can see how patterns evolve over time</li>
                <li>✓ Links never break—content is permanent</li>
                <li>✓ You can reference the version that matches your project</li>
              </ul>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Each tutorial has a <strong>latest stable version</strong>, but older versions stay available. 
              When APIs change or better patterns emerge, we publish a new version with clear explanations of what changed and why.
            </p>
          </section>

          {/* Curriculum Roadmap */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Curriculum Roadmap</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
              The tutorials follow a deliberate progression. Start at Tutorial 1 and work forward.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-4 border-blue-600 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Phase 1: Foundations</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Core mental models, API patterns, and stateless thinking
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Phase 2: Production Patterns</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Error handling, retries, streaming, token management, cost optimization
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Phase 3: Agentic Systems</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Multi-step reasoning, tool use, agent architectures, orchestration
                </p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-3 sm:pl-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Phase 4: Deployment & Ops</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Monitoring, observability, security, compliance, scaling
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Begin?</h2>
            <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Start with Tutorial #1: The OpenAI SDK Mental Model (latest version).
            </p>
            <Link 
              href="/tutorials/openai-sdk-mental-model" 
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors rounded-md touch-manipulation text-sm sm:text-base"
            >
              Go to Tutorial #1
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}
