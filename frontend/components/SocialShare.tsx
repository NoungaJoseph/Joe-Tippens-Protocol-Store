import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

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

  const handleShare = (platform: string) => {
    let shareUrl = '';
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedImage = encodeURIComponent(image);

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=Check this out: ${encodedUrl}`;
        break;
    }

    if (shareUrl.startsWith('mailto')) {
        window.location.href = shareUrl;
    } else if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className={`flex gap-3 ${className}`}>
        {/* Facebook */}
        <button onClick={() => handleShare('facebook')} className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 hover:scale-110 transition-all shadow-sm" aria-label="Share on Facebook">
            <Facebook size={18} />
        </button>

        {/* Twitter */}
        <button onClick={() => handleShare('twitter')} className="p-2 bg-sky-50 text-sky-500 rounded-full hover:bg-sky-100 hover:scale-110 transition-all shadow-sm" aria-label="Share on Twitter">
            <Twitter size={18} />
        </button>

        {/* LinkedIn */}
        <button onClick={() => handleShare('linkedin')} className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 hover:scale-110 transition-all shadow-sm" aria-label="Share on LinkedIn">
            <Linkedin size={18} />
        </button>

        {/* Pinterest */}
        <button onClick={() => handleShare('pinterest')} className="p-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 hover:scale-110 transition-all shadow-sm flex items-center justify-center w-[34px] h-[34px]" aria-label="Share on Pinterest">
            <svg viewBox="0 0 24 24" fill="currentColor" height="16" width="16"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.487-.69-2.425-2.857-2.425-4.583 0-3.728 2.703-7.151 7.794-7.151 4.087 0 7.272 2.919 7.272 6.817 0 4.068-2.559 7.34-6.116 7.34-1.194 0-2.314-.62-2.7-1.352l-.736 2.813c-.276 1.046-1.019 2.352-1.518 3.149 1.134.35 2.387.539 3.691.539 6.622 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
        </button>

         {/* Email */}
         <button onClick={() => handleShare('email')} className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 hover:scale-110 transition-all shadow-sm" aria-label="Share via Email">
            <Mail size={18} />
        </button>
    </div>
  );
};

export default SocialShare;