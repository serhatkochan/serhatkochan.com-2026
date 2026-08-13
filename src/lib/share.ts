import { site } from '../data/site';

export function buildTwitterShareUrl(pageUrl: string) {
  const text = `@${site.twitterHandle}'ın ${pageUrl} yazısını okuyorum.\n\nDüşüncelerim...`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
}
