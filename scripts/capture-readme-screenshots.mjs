import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', '.github', 'screenshots');
const baseUrl = process.env.PREVIEW_URL ?? 'http://localhost:4321';
const viewportWidth = 1280;
const maxCaptureHeight = 9000;

const pages = [
  { file: 'home-light.png', path: '/', theme: 'light' },
  { file: 'home-dark.png', path: '/', theme: 'dark' },
  { file: 'notes.png', path: '/notes', theme: 'light' },
  { file: 'projects.png', path: '/projects', theme: 'light' },
  { file: 'about.png', path: '/about', theme: 'light' },
];

const hideUiCss = `
  astro-dev-toolbar,
  #astro-dev-toolbar,
  [data-astro-dev-toolbar] {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  .site-background {
    display: none !important;
  }
`;

function buildPattern(theme) {
  const isDark = theme === 'dark';
  const dotFill = isDark ? 'rgba(113,113,122,0.5)' : 'rgba(113,113,122,0.55)';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><circle cx="7.5" cy="7.5" r="1" fill="${dotFill}" /></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

async function prepareForScreenshot(page, theme, docHeight) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? '#050505' : '#ffffff';
  const pattern = buildPattern(theme);

  await page.addStyleTag({ content: hideUiCss });

  await page.evaluate(
    ({ bgColor, pattern, docHeight }) => {
      document.documentElement.classList.remove('ready');
      document.documentElement.style.backgroundColor = bgColor;
      document.documentElement.style.minHeight = `${docHeight}px`;

      Object.assign(document.body.style, {
        backgroundColor: bgColor,
        backgroundImage: pattern,
        backgroundSize: '15px 15px',
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0',
        minHeight: `${docHeight}px`,
      });
    },
    { bgColor, pattern, docHeight },
  );
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: viewportWidth, height: 800 },
  deviceScaleFactor: 1,
});

for (const pageConfig of pages) {
  const page = await context.newPage();

  await page.addInitScript((theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, pageConfig.theme);

  await page.goto(`${baseUrl}${pageConfig.path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(750);

  const docHeight = await page.evaluate(() =>
    Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
  );
  const captureHeight = Math.min(docHeight, maxCaptureHeight);

  await page.setViewportSize({ width: viewportWidth, height: captureHeight });
  await page.waitForTimeout(300);
  await prepareForScreenshot(page, pageConfig.theme, captureHeight);
  await page.waitForTimeout(100);

  await page.screenshot({
    path: path.join(outDir, pageConfig.file),
    fullPage: false,
    animations: 'disabled',
  });

  await page.close();
  console.log(`Saved ${pageConfig.file} (${viewportWidth}x${captureHeight})`);
}

await browser.close();
