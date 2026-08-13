import type { SEOProps } from '../types/seo';
import { site, socialMedia } from '../data/site';

export function buildCanonical(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalized, site.url).href;
}

export function buildAbsoluteAsset(path: string) {
  return new URL(path, site.url).href;
}

export function buildPageMeta({
  title,
  description,
  path = '/',
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
}: SEOProps) {
  const canonical = buildCanonical(path);
  const pageTitle = path === '/' ? site.title : `${title ?? site.name} | ${site.name}`;
  const pageDescription = description ?? site.description;
  const imageUrl = buildAbsoluteAsset(image ?? site.assets.ogImage);
  const alt = imageAlt ?? (path === '/' ? site.title : `${site.name} — ${title ?? 'sayfa'}`);

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
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      type,
      siteName: site.name,
      locale: site.locale,
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
