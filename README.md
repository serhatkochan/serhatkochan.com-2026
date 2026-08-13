# serhatkochan.com / 2026

[![Site](https://img.shields.io/badge/site-serhatkochan.com-6366f1?style=for-the-badge)](https://serhatkochan.com)
[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Yazılımcı, teknoloji tutkunu. **Serhat Koçhan**'ın kişisel web sitesinin 2026 sürümü.

Notion API bağımlılığından vazgeçilerek sıfırdan yazıldı. MDX tabanlı içerik koleksiyonları, seçici React island'ları, Sharp ile optimize edilmiş görseller ve SEO/GEO odaklı statik üretimle performans hedefli bir site.

**Canlı:** [serhatkochan.com](https://serhatkochan.com)

---

## Öne çıkanlar

- **Statik üretim** — Astro 7 ile hızlı, güvenli ve barındırması kolay HTML çıktısı
- **MDX notları** — `src/content/notes/` altında versiyon kontrollü içerik
- **Performans** — WebP görsel optimizasyonu, LCP preload, koşullu island yükleme
- **SEO & GEO** — JSON-LD schema, sitemap, RSS, `robots.txt`, `llms.txt`
- **Erişilebilirlik** — Skip link, anlamlı landmark'lar, klavye dostu navigasyon
- **Karanlık mod** — View Transition API ile animasyonlu tema geçişi
- **Minimal JS** — Yalnızca gerektiğinde hydrate edilen React island'ları

## Teknoloji

| Alan | Kullanılan |
| --- | --- |
| Framework | [Astro 7](https://astro.build) |
| Dil | TypeScript |
| Stil | Tailwind CSS v4, `@tailwindcss/typography` |
| İçerik | MDX, Astro Content Collections |
| Etkileşim | React 19 (island architecture) |
| Kod vurgulama | Shiki + notation transformers |
| Görsel | Sharp, `astro:assets` |
| Dağıtım | Statik site (`dist/`) |

## Proje yapısı

```
src/
├── assets/           # Optimize edilen görseller (portre, galeri, not görselleri)
├── components/
│   ├── layout/       # Header, Footer, Container, ArtDots
│   ├── mdx/          # MDX bileşenleri (MdxImage)
│   ├── notes/        # Not kartları ve paylaşım
│   ├── projects/     # Proje kartları
│   └── ui/           # Photos, Resume, OptimizedImage, SocialLink
├── content/notes/    # MDX blog yazıları
├── data/             # site, about, projects, photos
├── islands/          # ThemeToggle, MobileNav, ArtDotsCanvas
├── layouts/          # BaseLayout (SEO, schema, meta)
├── lib/              # seo, dates, share
├── pages/            # Rotalar ve RSS endpoint'i
└── styles/           # global.css

public/
├── assets/portrait.png   # OG / schema için sabit URL
├── robots.txt
├── llms.txt / llms-full.txt
└── manifest.webmanifest
```

## Başlangıç

### Gereksinimler

- Node.js **>= 22.12.0**
- npm

### Kurulum

```bash
git clone https://github.com/serhatkochan/serhatkochan.com-2026.git
cd serhatkochan.com-2026
npm install
```

### Geliştirme

```bash
npm run dev
```

Site varsayılan olarak [http://localhost:4321](http://localhost:4321) adresinde açılır.

### Production build

```bash
npm run build
npm run preview
```

Çıktı `dist/` klasörüne yazılır.

## Yeni not ekleme

1. `src/content/notes/` altına yeni bir `.mdx` dosyası oluştur:

```mdx
---
title: "Yazı başlığı"
description: "Kısa açıklama — meta ve önizleme kartlarında görünür."
publishedAt: 2026-08-13
inProgress: false
draft: false
---

Yazı içeriği buraya...
```

2. Görsel kullanacaksan dosyayı `src/assets/notes/<slug>/` altına koy ve `src/data/photos.ts` içindeki `noteImages` haritasına ekle.

3. `draft: true` olan notlar build'e dahil edilmez.

## Sayfalar

| Rota | Açıklama |
| --- | --- |
| `/` | Anasayfa — son notlar, fotoğraf galerisi, deneyim özeti |
| `/notes` | Tüm notlar |
| `/notes/[slug]` | Tekil not sayfası |
| `/projects` | Kişisel ve açık kaynak projeler |
| `/about` | Biyografi ve iletişim |
| `/rss.xml` | Notlar RSS feed'i |

## Site geçmişi

Bu repo, kişisel sitenin üçüncü büyük iterasyonu:

| Sürüm | Repo | Stack |
| --- | --- | --- |
| 2026 | [serhatkochan.com-2026](https://github.com/serhatkochan/serhatkochan.com-2026) | Astro, MDX, Tailwind v4 |
| 2024 | [serhatkochan.com-2024](https://github.com/serhatkochan/serhatkochan.com-2024) | Next.js, Notion API |
| 2021 | [serhatkochan.com-2021](https://github.com/serhatkochan/serhatkochan.com-2021) | PHP, MySQL, Bootstrap |

## İletişim

- **Web:** [serhatkochan.com](https://serhatkochan.com)
- **GitHub:** [@serhatkochan](https://github.com/serhatkochan)
- **LinkedIn:** [serhatkochan](https://www.linkedin.com/in/serhatkochan)
- **Twitter / X:** [@serhatkochan_](https://twitter.com/serhatkochan_)

---

MIT © [Serhat Koçhan](https://serhatkochan.com)
