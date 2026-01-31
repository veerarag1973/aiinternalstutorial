'use client';

import { useState } from 'react';
import { Twitter, Linkedin, Facebook, Link as LinkIcon, Check, Printer } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url?: string;
}

export function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareText = `Check out: ${title}`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks];
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="border-t border-b border-gray-200 py-4 sm:py-6 my-8 sm:my-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
            Found this helpful?
          </h3>
          <p className="text-sm text-gray-600">
            Share with your network or save for later
          </p>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => handleShare('twitter')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors touch-manipulation"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
            <span className="text-sm font-medium">Twitter</span>
          </button>
          
          <button
            onClick={() => handleShare('linkedin')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#084d92] transition-colors touch-manipulation"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm font-medium">LinkedIn</span>
          </button>
          
          <button
            onClick={() => handleShare('facebook')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#1664d8] transition-colors touch-manipulation"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-4 h-4" />
            <span className="text-sm font-medium">Facebook</span>
          </button>
          
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors touch-manipulation"
            aria-label="Copy link"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">Copied!</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Copy Link</span>
              </>
            )}
          </button>
          
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors touch-manipulation"
            aria-label="Print tutorial"
          >
            <Printer className="w-4 h-4" />
            <span className="text-sm font-medium">Print</span>
          </button>
        </div>
      </div>
    </div>
  );
}
