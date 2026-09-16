import React, { useMemo, useState } from 'react';
import { Facebook, Linkedin, Link as LinkIcon, Mail, Send, Share2 } from 'lucide-react';

interface SocialShareProps {
  url?: string;
  title?: string;
  image?: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = window.location.href,
  title = document.title,
  image = '',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = useMemo(() => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedImage = encodeURIComponent(image);

    return [
      {
        id: 'facebook',
        label: 'Facebook',
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        icon: <Facebook size={20} />,
        className: 'bg-[#1877F2] text-white shadow-[0_12px_30px_rgba(24,119,242,0.25)]'
      },
      {
        id: 'telegram',
        label: 'Telegram',
        href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
        icon: <Send size={20} />,
        className: 'bg-[#229ED9] text-white shadow-[0_12px_30px_rgba(34,158,217,0.22)]'
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
        icon: <Linkedin size={20} />,
        className: 'bg-[#0A66C2] text-white shadow-[0_12px_30px_rgba(10,102,194,0.22)]'
      },
      {
        id: 'pinterest',
        label: 'Pinterest',
        href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`,
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" height="18" width="18" aria-hidden="true">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.487-.69-2.425-2.857-2.425-4.583 0-3.728 2.703-7.151 7.794-7.151 4.087 0 7.272 2.919 7.272 6.817 0 4.068-2.559 7.34-6.116 7.34-1.194 0-2.314-.62-2.7-1.352l-.736 2.813c-.276 1.046-1.019 2.352-1.518 3.149 1.134.35 2.387.539 3.691.539 6.622 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
          </svg>
        ),
        className: 'bg-[#E60023] text-white shadow-[0_12px_30px_rgba(230,0,35,0.18)]'
      },
      {
        id: 'email',
        label: 'Email',
        href: `mailto:?subject=${encodedTitle}&body=Check this out: ${encodedUrl}`,
        icon: <Mail size={20} />,
        className: 'bg-white text-[#334155] border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.08)]'
      }
    ];
  }, [image, title, url]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {shareLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 hover:-translate-y-1 ${item.className}`}
          aria-label={`Share on ${item.label}`}
        >
          {item.icon}
        </a>
      ))}

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-w-[144px] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-slate-300"
        aria-label="Copy share link"
      >
        {copied ? <Share2 size={18} /> : <LinkIcon size={18} />}
        {copied ? 'Copied Link' : 'Copy Link'}
      </button>
    </div>
  );
};

export default SocialShare;
