import { ANIMSAT_SITE_URL } from './animsat/meta';
import { BIPROMPTER_SITE_URL } from './biprompter/meta';

export type ProjectLink = {
  href: string;
  label: string;
  /** true: GitHub vb. dış bağlantı. false: site içi sayfa. */
  external?: boolean;
};

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: ProjectLink;
};

export const currentProjects: Project[] = [
  {
    title: 'Fit Klan',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Cloudflare'],
    description:
      'Hocalar ve öğrenciler için antrenman programı, geri bildirim ve kapalı topluluklar üzerine geliştirilen fitness platformu. Erken erişim tanıtım sayfası yayında.',
    link: {
      label: 'fitklan.com',
      href: 'https://fitklan.com',
      external: true,
    },
  },
  {
    title: 'Outvoters',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Cloudflare'],
    description:
      'Steam hedefli indie ada ve eleme oyununun erken web prototipi. Kamp yaşamı, takım yarışmaları, yakınlık mikrofonu ve akşam konseyi bir arada. İnteraktif demoda kampını hazırla, atışını yap ve oylamaya katıl.',
    link: {
      label: 'outvoters.com',
      href: 'https://outvoters.com',
      external: true,
    },
  },
  {
    title: 'Mimo',
    techStack: ['C#', '.NET 9', 'WPF', 'Windows'],
    description:
      'Windows masaüstü için küçük, sürüklenebilir Pomodoro uygulaması. 10 özgün animasyonlu maskot, odak ve mola döngüleri, özelleştirilebilir süreler ve kompakt zaman paneli.',
    link: {
      label: 'mimo.serhatkochan.com',
      href: 'https://mimo.serhatkochan.com',
      external: true,
    },
  },
  {
    title: 'Mascot Reader',
    techStack: ['Python 3.11', 'PySide6', 'PyTorch', 'EMA Lightning'],
    description:
      'Markdown belgelerini Türkçe seslendiren çevrimdışı Windows uygulaması. 10 animasyonlu masaüstü maskotu, zaman çubuğu, metinden atlama ve WAV dışa aktarma.',
    link: {
      label: 'mascot-reader.serhatkochan.com',
      href: 'https://mascot-reader.serhatkochan.com',
      external: true,
    },
  },
  {
    title: 'Video Player',
    techStack: ['Rust', 'egui / eframe', 'libmpv', 'FFmpeg'],
    description:
      'Windows 11 için açık kaynak video ve ses oynatıcı. HEVC ve AV1 desteği, ses ve altyazı seçimi, kaldığın yerden devam etme ve çevrimdışı kurulum paketi. 0.1.0 ön sürümü yayında.',
    link: {
      label: 'videoplayer.serhatkochan.com',
      href: 'https://videoplayer.serhatkochan.com',
      external: true,
    },
  },
  {
    title: 'Biprompter',
    techStack: ['Tauri v2', 'Rust', 'React 19', 'Vosk Wasm', 'Astro', 'TypeScript', 'Tailwind CSS'],
    description:
      'Windows için Apple Dynamic Island estetiğinde, %100 yerel ve yapay zekâ ses takipli teleprompter. OBS hayalet modu, tıklama geçirgenliği ve sıfır bulut bağımlılığıyla açık kaynak.',
    link: {
      label: 'biprompter.serhatkochan.com',
      href: BIPROMPTER_SITE_URL,
      external: true,
    },
  },
  {
    title: 'Anımsat',
    techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    description:
      'Doğum günü, düğün, yolculuk… Tarihi kaydet, ana ekranda kaç gün kaldığını gör. Verilerin yalnızca bu cihazda durur. App Store\'da yayında.',
    link: {
      label: 'animsat.serhatkochan.com',
      href: ANIMSAT_SITE_URL,
      external: true,
    },
  },
  {
    title: 'serhatkochan.com / 2026',
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX', 'React', 'View Transitions'],
    description:
      'Notion API bağımlılığından vazgeçilerek sıfırdan yazıldı. MDX içerik koleksiyonları, seçici React island\'ları, animasyonlu nokta arka planı ve SEO odaklı statik üretimle performans hedefli kişisel site.',
    link: {
      label: 'github.com',
      href: 'https://github.com/serhatkochan/serhatkochan.com-2026',
      external: true,
    },
  },
];

export const pastProjects: Project[] = [
  {
    title: 'serhatkochan.com / 2024',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Notion API', 'Framer Motion', 'Vercel OG'],
    description:
      'Notlar ve blog yazıları Notion veritabanından çekilen Next.js sürümü. Tema geçişi, Framer Motion animasyonları, otomatik Open Graph görselleri ve Vercel dağıtımı içerir.',
    link: {
      label: 'github.com',
      href: 'https://github.com/serhatkochan/serhatkochan.com-2024',
      external: true,
    },
  },
  {
    title: 'serhatkochan.com / 2021',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Üniversite yıllarında PHP ile geliştirilen, Bootstrap arayüzlü ve MySQL destekli kişisel web sitesinin erken sürümü. Sunucu tarafı odaklı klasik web mimarisi.',
    link: {
      label: 'github.com',
      href: 'https://github.com/serhatkochan/serhatkochan.com-2021',
      external: true,
    },
  },
];
