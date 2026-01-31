'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

// Note: metadata cannot be exported from client components
// Metadata is defined in the root layout.metadata.ts or via generateMetadata

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-40 backdrop-blur-sm bg-white/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="font-bold text-lg sm:text-xl text-gray-900 hover:text-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI Internals
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
              Home
            </Link>
            <Link href="/start-here" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
              Start Here
            </Link>
            <Link href="/tutorials" className="text-gray-700 hover:text-gray-900 transition-colors py-2">
              Tutorials
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/start-here"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Here
            </Link>
            <Link
              href="/tutorials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tutorials
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
              <a href="/feed.xml" className="hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                RSS Feed
              </a>
              <span>•</span>
              <a href="/sitemap.xml" className="hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                Sitemap
              </a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
