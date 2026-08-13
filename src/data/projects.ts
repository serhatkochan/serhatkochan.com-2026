export type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export const currentProjects: Project[] = [
  {
    title: 'serhatkochan.com / 2026',
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX', 'React', 'View Transitions'],
    description:
      'Notion API bağımlılığından vazgeçilerek sıfırdan yazıldı. MDX içerik koleksiyonları, seçici React island\'ları, animasyonlu nokta arka planı ve SEO odaklı statik üretimle performans hedefli kişisel site.',
    link: {
      label: 'github.com',
      href: 'https://github.com/serhatkochan/serhatkochan.com-2026',
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
    },
  },
];
