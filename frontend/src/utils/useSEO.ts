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
  'Official destination for PureProtocol & Joe Tippens Protocol supplements. Find high-quality Fenbendazole, Ivermectin, and specialized wellness therapeutics with fast worldwide shipping.';
const DEFAULT_IMAGE = 'https://pureprotocols.com/src/assets/images/logo-v2.png';
const BASE_URL = 'https://pureprotocols.com';

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
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    const fullCanonical = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`
      : window.location.href;

    // 3. Open Graph
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:url', fullCanonical);

    // 4. Twitter Card
    setMetaTag('property', 'twitter:title', formattedTitle);
    setMetaTag('property', 'twitter:description', description);
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

