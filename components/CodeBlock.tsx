'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper">
      <button
        onClick={copyToClipboard}
        className="copy-button"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <>
            <Check className="inline w-3 h-3 mr-1" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="inline w-3 h-3 mr-1" />
            Copy
          </>
        )}
      </button>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className={language ? `language-${language}` : ''}>
          {code}
        </code>
      </pre>
    </div>
  );
}
