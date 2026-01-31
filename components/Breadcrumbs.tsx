'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 overflow-x-auto py-2"
    >
      <Link 
        href="/" 
        className="hover:text-gray-900 transition-colors flex items-center whitespace-nowrap touch-manipulation"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2 whitespace-nowrap">
          <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href} 
              className="hover:text-gray-900 transition-colors truncate max-w-[150px] sm:max-w-none touch-manipulation"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
