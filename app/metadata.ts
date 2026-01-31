import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "AI Internals - Production AI Engineering",
  description: "A curriculum-driven guide to building, deploying, and securing production AI systems. Structured engineering education without the fluff.",
  keywords: ["AI", "Machine Learning", "Production AI", "AI Engineering", "AI Systems", "Software Engineering"],
  authors: [{ name: "AI Internals" }],
  creator: "AI Internals",
  publisher: "AI Internals",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AI Internals',
    title: 'AI Internals - Production AI Engineering',
    description: 'A curriculum-driven guide to building, deploying, and securing production AI systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Internals - Production AI Engineering',
    description: 'A curriculum-driven guide to building, deploying, and securing production AI systems.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#111827',
  manifest: '/manifest.json',
};
