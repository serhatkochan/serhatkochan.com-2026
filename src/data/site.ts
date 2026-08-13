export const site = {
  name: 'Serhat Koçhan',
  title: 'Serhat Koçhan — Teknoloji Tutkunu',
  description:
    'Yazılımcı, teknoloji tutkunu. Yazılım notları, projeler ve deneyimler.',
  jobTitle: 'Yazılımcı, Teknoloji Tutkunu',
  url: 'https://www.serhatkochan.com',
  locale: 'tr_TR',
  language: 'tr',
  author: 'Serhat Koçhan',
  twitter: '@serhatkochan_',
  email: 'serhatkochan@hotmail.com.tr',
  assets: {
    portrait: '/assets/portrait.png',
    ogImage: '/assets/portrait.png',
  },
} as const;

export const tagline = '"Quantum-Level Senior Developer, Prompt Whisperer"';

export const socialMedia = [
  { name: 'Twitter', link: 'https://twitter.com/serhatkochan_', icon: 'x' as const },
  { name: 'Instagram', link: 'https://www.instagram.com/serhatkochan_/', icon: 'instagram' as const },
  { name: 'Github', link: 'https://github.com/serhatkochan', icon: 'github' as const },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/serhatkochan', icon: 'linkedin' as const },
] as const;

export const navigation = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Notlar', href: '/notes' },
  { name: 'Projeler', href: '/projects' },
  { name: 'Hakkında', href: '/about' },
] as const;
