import { ANIMSAT_POLICY_LOCALES, animsatCanonical } from '../../data/animsat';

export async function GET() {
  const urls = [
    animsatCanonical('/'),
    ...ANIMSAT_POLICY_LOCALES.map((item) => animsatCanonical(`/${item.id}/policy`)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
