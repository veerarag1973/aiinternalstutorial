'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract headings from content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const headingElements = tempDiv.querySelectorAll('h1, h2, h3');
    const tocItems: TocItem[] = [];
    
    headingElements.forEach((heading, index) => {
      const text = heading.textContent || '';
      const level = parseInt(heading.tagName[1]);
      const id = `heading-${index}`;
      
      // Add ID to actual heading in the document
      const actualHeading = document.getElementById(id) || 
        Array.from(document.querySelectorAll('h1, h2, h3')).find(
          h => h.textContent === text
        );
      
      if (actualHeading && !actualHeading.id) {
        actualHeading.id = id;
      }
      
      tocItems.push({ id, text, level });
    });
    
    setHeadings(tocItems);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile/Tablet Collapsible TOC */}
      <nav className="lg:hidden mb-6 border border-gray-200 rounded-lg bg-gray-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
          aria-expanded={isOpen}
        >
          <span className="text-sm">Table of Contents</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          )}
        </button>
        {isOpen && (
          <div className="px-4 pb-4 space-y-1 max-h-96 overflow-y-auto">
            {headings.map(({ id, text, level }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`toc-link ${activeId === id ? 'active' : ''}`}
                style={{ paddingLeft: `${(level - 1) * 0.75}rem` }}
              >
                {text}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Desktop Sticky TOC */}
      <nav className="hidden lg:block lg:sticky lg:top-24">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">On this page</h3>
          <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
            {headings.map(({ id, text, level }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`toc-link ${activeId === id ? 'active' : ''}`}
                style={{ paddingLeft: `${(level - 1) * 0.75}rem` }}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
