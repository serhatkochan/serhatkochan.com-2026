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
  site: 'https://serhatkochan.com',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
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
