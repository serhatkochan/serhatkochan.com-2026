export type AlternateLink = {
  hreflang: string;
  href: string;
};

export type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: Date;
  modifiedTime?: Date;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  preloadImage?: string;
  noIndex?: boolean;
  htmlLang?: string;
  ogLocale?: string;
  alternates?: AlternateLink[];
};
