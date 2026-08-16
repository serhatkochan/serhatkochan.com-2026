// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.serhatkochan.com',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  redirects: {
    '/animsat/policy': '/animsat/tr/policy',
    '/animsat/en/policy': '/animsat/en-US/policy',
    '/animsat/de/policy': '/animsat/de-DE/policy',
    '/animsat/fr/policy': '/animsat/fr-FR/policy',
    '/animsat/es/policy': '/animsat/es-ES/policy',
    '/animsat/nl/policy': '/animsat/nl-NL/policy',
    '/animsat/pt/policy': '/animsat/pt-BR/policy',
    '/animsat/ar/policy': '/animsat/ar-SA/policy',
    '/animsat/zh/policy': '/animsat/zh-Hans/policy',
    '/animsat/en-GB/policy': '/animsat/en-US/policy',
    '/animsat/en-AU/policy': '/animsat/en-US/policy',
    '/animsat/en-CA/policy': '/animsat/en-US/policy',
    '/animsat/fr-CA/policy': '/animsat/fr-FR/policy',
    '/animsat/es-MX/policy': '/animsat/es-ES/policy',
    '/animsat/pt-PT/policy': '/animsat/pt-BR/policy',
  },
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) => !page.includes('/creating'),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      wrap: false,
      transformers: [
        transformerNotationWordHighlight(),
        transformerNotationHighlight(),
        transformerNotationDiff(),
      ],
    },
  },
});
