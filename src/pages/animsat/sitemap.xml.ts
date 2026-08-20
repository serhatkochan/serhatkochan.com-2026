import { ANIMSAT_POLICY_LOCALES, animsatCanonical, landingCanonical } from '../../data/animsat';

export async function GET() {
  const urls = [
    landingCanonical('tr'),
    ...ANIMSAT_POLICY_LOCALES.filter((item) => item.id !== 'tr').map((item) => landingCanonical(item.id)),
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
