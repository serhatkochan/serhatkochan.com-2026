import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { buildAbsoluteAsset, buildCanonical } from '../lib/seo';

export async function GET() {
  const notes = await getCollection('notes', ({ data }) => !data.draft && !data.inProgress);
  const sorted = notes.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  const items = sorted
    .map((note) => {
      const url = buildCanonical(`/notes/${note.id}`);
      return `
    <item>
      <title><![CDATA[${note.data.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${note.data.description}]]></description>
      <pubDate>${note.data.publishedAt.toUTCString()}</pubDate>
    </item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${site.name} — Notlar</title>
    <link>${site.url}/notes/</link>
    <description>${site.description}</description>
    <language>tr-tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${buildAbsoluteAsset(site.assets.portrait)}</url>
      <title>${site.name}</title>
      <link>${site.url}</link>
    </image>${items}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
