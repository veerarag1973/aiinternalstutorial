import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/Navigation';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://aiinternals.com'),
  title: {
    default: 'AI Internals - Production AI Engineering',
    template: '%s | AI Internals',
  },
  description: 'A curriculum-driven guide to building, deploying, and securing production AI systems. Structured engineering education without the fluff.',
  keywords: ['AI', 'Machine Learning', 'Production AI', 'AI Engineering', 'AI Systems', 'Software Engineering', 'Deep Learning', 'MLOps'],
  authors: [{ name: 'AI Internals' }],
  creator: 'AI Internals',
  publisher: 'AI Internals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'AI Internals',
    title: 'AI Internals - Production AI Engineering',
    description: 'A curriculum-driven guide to building, deploying, and securing production AI systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Internals - Production AI Engineering',
    description: 'A curriculum-driven guide to building, deploying, and securing production AI systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="AI Internals RSS Feed" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        {/* Global Navigation */}
        <Navigation />

        {/* Page Content */}
        <main id="main-content">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              © {new Date().getFullYear()} AI Internals. All tutorials are versioned and updated.
            </p>
            <p className="text-xs text-gray-500 mb-3">
              Content remains permanently accessible. Old versions never deleted.
            </p>
            <div className="flex justify-center gap-4 text-xs text-gray-600">
              <Link href="/feed.xml" className="hover:text-gray-900 transition-colors">
                RSS Feed
              </Link>
              <span>•</span>
              <Link href="/sitemap.xml" className="hover:text-gray-900 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
