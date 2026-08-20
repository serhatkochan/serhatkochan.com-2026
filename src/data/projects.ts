import { ANIMSAT_SITE_URL } from './animsat/meta';

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
    title: 'Anımsat',
    techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    description:
      'Doğum günü, düğün, yolculuk… Tarihi kaydet, ana ekranda kaç gün kaldığını gör. Verilerin yalnızca bu cihazda durur.',
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
