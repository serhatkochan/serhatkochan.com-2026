import type { SEOProps } from '../types/seo';
import { site, socialMedia } from '../data/site';
import { ANIMSAT_NAME, ANIMSAT_POLICY_UPDATED_ISO, ANIMSAT_SITE_URL } from '../data/animsat/meta';

export function buildCanonical(path: string, base = site.url) {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalized, base).href;
}

export function buildAbsoluteAsset(path: string) {
  return new URL(path, site.url).href;
}

export function buildPageMeta({
  title,
  description,
  path = '/',
  canonical: canonicalOverride,
  siteName,
  absoluteTitle = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords = [],
  image,
  imageAlt,
  imageWidth = 480,
  imageHeight = 600,
  preloadImage,
  noIndex = false,
  htmlLang,
  ogLocale,
  alternates = [],
}: SEOProps) {
  const brand = siteName ?? site.name;
  const canonical = canonicalOverride ?? buildCanonical(path);
  const pageTitle = absoluteTitle
    ? (title ?? brand)
    : path === '/'
      ? site.title
      : `${title ?? brand} | ${brand}`;
  const pageDescription = description ?? site.description;
  const imageUrl = buildAbsoluteAsset(image ?? site.assets.ogImage);
  const alt = imageAlt ?? (path === '/' ? site.title : `${brand} — ${title ?? 'sayfa'}`);
  const locale = ogLocale ?? site.locale;
  const language = htmlLang ?? site.language;
  const alternateLinks =
    alternates.length > 0
      ? alternates
      : [{ hreflang: site.language, href: canonical }];

  return {
    title: pageTitle,
    description: pageDescription,
    canonical,
    image: imageUrl,
    imageAlt: alt,
    imageWidth,
    imageHeight,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    keywords: [...keywords, 'serhat koçhan', 'yazılımcı', 'teknoloji tutkunu', 'yazılım', 'teknoloji'],
    htmlLang: language,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      type,
      siteName: brand,
      locale,
      image: imageUrl,
      imageAlt: alt,
      imageWidth,
      imageHeight,
      ...(publishedTime ? { publishedTime: publishedTime.toISOString() } : {}),
      ...(modifiedTime ? { modifiedTime: modifiedTime.toISOString() } : {}),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: pageTitle,
      description: pageDescription,
      image: imageUrl,
      creator: site.twitter,
    },
    article: publishedTime
      ? {
          publishedTime: publishedTime.toISOString(),
          modifiedTime: (modifiedTime ?? publishedTime).toISOString(),
        }
      : undefined,
    preloadImage,
    alternates: alternateLinks,
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    image: buildAbsoluteAsset(site.assets.portrait),
    email: site.email,
    sameAs: socialMedia.map((profile) => profile.link),
    jobTitle: site.jobTitle,
    description: site.description,
    knowsAbout: ['React', 'JavaScript', 'TypeScript', 'Web Development', 'Software Development'],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'tr-TR',
    author: { '@type': 'Person', name: site.name, url: site.url },
    publisher: { '@type': 'Person', name: site.name, url: site.url },
  };
}

export function profilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema(),
    url: `${site.url}/about`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.path),
    })),
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Anımsat',
    alternateName: 'Kaç Gün Kaldı',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, Android',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
    author: { '@type': 'Person', name: site.name, url: site.url },
    url: ANIMSAT_SITE_URL,
    description:
      'Doğum günü, düğün, yolculuk… Tarihi kaydet, ana ekranda kaç gün kaldığını gör. Verilerin yalnızca bu cihazda durur.',
    inLanguage: ['tr', 'en', 'de', 'fr', 'es', 'it', 'nl', 'ja', 'ko', 'zh', 'ar', 'pt', 'ru'],
  };
}

export function privacyPolicySchema({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: title,
    description,
    url: buildCanonical(path),
    inLanguage: locale,
    dateModified: ANIMSAT_POLICY_UPDATED_ISO,
    about: {
      '@type': 'SoftwareApplication',
      name: 'Anımsat',
      url: ANIMSAT_SITE_URL,
    },
    publisher: { '@type': 'Person', name: site.name, url: site.url },
    isPartOf: { '@type': 'WebSite', name: ANIMSAT_NAME, url: ANIMSAT_SITE_URL },
  };
}

export function blogPostingSchema(note: {
  title: string;
  description: string;
  slug: string;
  publishedAt: Date;
  updatedAt?: Date;
}) {
  const url = `${site.url}/notes/${note.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: note.title,
    description: note.description,
    author: { '@type': 'Person', name: site.name, url: site.url },
    publisher: { '@type': 'Person', name: site.name, url: site.url },
    datePublished: note.publishedAt.toISOString(),
    dateModified: (note.updatedAt ?? note.publishedAt).toISOString(),
    url,
    mainEntityOfPage: url,
    image: buildAbsoluteAsset(site.assets.portrait),
    articleSection: 'Yazılım',
    inLanguage: 'tr-TR',
  };
}
