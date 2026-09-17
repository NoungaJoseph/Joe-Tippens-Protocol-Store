import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  keywords?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_DESCRIPTION =
  'Official Joe Tippens Protocol & PureProtocol store. Buy high-purity Fenbendazole, Ivermectin, Vitamin B17 & oncology supplements with fast worldwide shipping.';
const DEFAULT_IMAGE = 'https://pureprotocols.com/logo-v2.png';
const BASE_URL = 'https://pureprotocols.com';

const truncateDescription = (desc: string): string => {
  const cleaned = desc.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= 158) return cleaned;
  const sliced = cleaned.slice(0, 155);
  const lastSpace = sliced.lastIndexOf(' ');
  return (lastSpace > 30 ? sliced.slice(0, lastSpace) : sliced) + '...';
};

export const useSEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords,
  jsonLd,
}: SEOProps) => {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    // 1. Document Title
    const formattedTitle = title.includes('PureProtocol')
      ? title
      : `${title} | PureProtocol Store`;
    document.title = formattedTitle;

    // Sanitize description length to strictly stay within Bing/Google limits (25-160 chars)
    const sanitizedDescription = truncateDescription(description);

    // Helper to update or create meta tag
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', sanitizedDescription);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    const fullCanonical = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`
      : `${BASE_URL}${window.location.pathname}`;

    // 3. Open Graph
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', sanitizedDescription);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:url', fullCanonical);

    // 4. Twitter Card
    setMetaTag('property', 'twitter:title', formattedTitle);
    setMetaTag('property', 'twitter:description', sanitizedDescription);
    setMetaTag('property', 'twitter:image', image);
    setMetaTag('property', 'twitter:card', 'summary_large_image');

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonical);

    // 6. Dynamic JSON-LD Structured Data
    const SCRIPT_ID = 'dynamic-json-ld';
    let scriptTag = document.getElementById(SCRIPT_ID);
    if (jsonLdString) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = jsonLdString;
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonical, image, type, keywords, jsonLdString]);
};

export default useSEO;

