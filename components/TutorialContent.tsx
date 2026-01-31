'use client';

import { useEffect } from 'react';
import 'highlight.js/styles/github-dark.css';

interface TutorialContentProps {
  contentHtml: string;
}

export function TutorialContent({ contentHtml }: TutorialContentProps) {
  useEffect(() => {
    // Add syntax highlighting on the client side if needed
    const loadHighlight = async () => {
      try {
        const hljs = await import('highlight.js');
        document.querySelectorAll('pre code').forEach((block) => {
          if (block instanceof HTMLElement) {
            hljs.default.highlightElement(block);
          }
        });
      } catch (error) {
        console.error('Failed to load syntax highlighting:', error);
      }
    };

    loadHighlight();
  }, [contentHtml]);

  return (
    <div 
      className="prose prose-sm sm:prose-base lg:prose-lg prose-gray max-w-none
        prose-headings:font-bold prose-headings:text-gray-900 prose-headings:scroll-mt-24
        prose-h1:text-2xl sm:prose-h1:text-3xl lg:prose-h1:text-4xl prose-h1:mb-4 sm:prose-h1:mb-6
        prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-12 prose-h2:mb-3 sm:prose-h2:mb-4
        prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-2 sm:prose-h3:mb-3
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-a:break-words
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] prose-code:break-words
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-3 sm:prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:shadow-lg prose-pre:-mx-4 sm:prose-pre:mx-0
        prose-ul:text-gray-700 prose-ul:mb-4 prose-ol:text-gray-700 prose-ol:mb-4
        prose-li:my-1
        prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
        prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:overflow-x-auto prose-table:block sm:prose-table:table
        prose-thead:border-b-2 prose-thead:border-gray-900
        prose-th:px-2 sm:prose-th:px-4 prose-th:py-2 sm:prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-th:bg-gray-50 prose-th:text-sm sm:prose-th:text-base
        prose-td:px-2 sm:prose-td:px-4 prose-td:py-2 sm:prose-td:py-3 prose-td:border-t prose-td:border-gray-200 prose-td:text-gray-700 prose-td:text-sm sm:prose-td:text-base
        prose-tr:border-b prose-tr:border-gray-200
        prose-img:rounded-lg prose-img:shadow-md prose-img:w-full"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
