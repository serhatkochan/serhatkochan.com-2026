import { ANIMSAT_POLICY_LOCALES, landingCanonical, policyCanonical } from '../../data/animsat';

const POLICY_UPDATED = '2026-08-16';

function xhtmlLinks(
  pages: { hreflang: string; href: string }[],
) {
  return pages
    .map(
      (item) =>
        `    <xhtml:link rel="alternate" hreflang="${item.hreflang}" href="${item.href}"/>`,
    )
    .join('\n');
}

export async function GET() {
  const landingAlternates = [
    ...ANIMSAT_POLICY_LOCALES.map((item) => ({
      hreflang: item.hreflang,
      href: landingCanonical(item.id),
    })),
    { hreflang: 'x-default', href: landingCanonical('tr') },
  ];

  const policyAlternates = [
    ...ANIMSAT_POLICY_LOCALES.map((item) => ({
      hreflang: item.hreflang,
      href: policyCanonical(item.id),
    })),
    { hreflang: 'x-default', href: policyCanonical('tr') },
  ];

  const landingUrls = ANIMSAT_POLICY_LOCALES.map((item) => ({
    loc: landingCanonical(item.id),
    lastmod: POLICY_UPDATED,
    alternates: landingAlternates,
  }));

  const policyUrls = ANIMSAT_POLICY_LOCALES.map((item) => ({
    loc: policyCanonical(item.id),
    lastmod: POLICY_UPDATED,
    alternates: policyAlternates,
  }));

  const urls = [...landingUrls, ...policyUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
${xhtmlLinks(item.alternates)}
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
