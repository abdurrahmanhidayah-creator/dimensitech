import type { L } from '../i18n/ui';

export type CaseStudy = {
  slug: string;
  client: string;
  logo: string;
  shot: string;
  category: L;
  title: L;
  summary: L;
  services: L[];
  results: { value: string; label: L }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'bacadulu',
    client: 'bacadulu.net',
    logo: '/assets/case-bacadulu-logo.png',
    shot: '/assets/case-bacadulu-screen.png',
    category: { en: 'Media Platform', id: 'Platform Media' },
    title: {
      en: 'A reading platform built for speed and daily habit',
      id: 'Platform baca yang dibangun untuk kecepatan dan kebiasaan harian',
    },
    summary: {
      en: 'A content platform redesigned around reading comfort, fast navigation, and an editorial workflow the newsroom can run without developer support.',
      id: 'Platform konten yang dirancang ulang berfokus pada kenyamanan membaca, navigasi cepat, dan alur kerja editorial yang bisa dijalankan redaksi tanpa bantuan developer.',
    },
    services: [
      { en: 'Creative UI/UX', id: 'Creative UI/UX' },
      { en: 'Website Development', id: 'Pengembangan Website' },
    ],
    results: [
      { value: '2.1s', label: { en: 'Median load time', id: 'Waktu muat median' } },
      { value: '+38%', label: { en: 'Pages per session', id: 'Halaman per sesi' } },
    ],
  },
  {
    slug: 'hokibank',
    client: 'HokiBank',
    logo: '/assets/case-hokibank-logo.png',
    shot: '/assets/case-hokibank-screen.png',
    category: { en: 'Financial Services', id: 'Jasa Keuangan' },
    title: {
      en: 'A digital front door for a growing financial brand',
      id: 'Pintu masuk digital untuk merek keuangan yang berkembang',
    },
    summary: {
      en: 'Product storytelling, clear rate comparison, and a lead flow that gives the sales team qualified enquiries instead of raw traffic.',
      id: 'Penyampaian produk yang jelas, perbandingan suku bunga yang mudah, dan alur prospek yang memberi tim penjualan pertanyaan berkualitas, bukan sekadar trafik.',
    },
    services: [
      { en: 'Creative UI/UX', id: 'Creative UI/UX' },
      { en: 'Website Development', id: 'Pengembangan Website' },
      { en: 'Design System', id: 'Design System' },
    ],
    results: [
      { value: '+52%', label: { en: 'Qualified enquiries', id: 'Prospek berkualitas' } },
      { value: '4 wks', label: { en: 'To first release', id: 'Menuju rilis pertama' } },
    ],
  },
  {
    slug: 'anabatic',
    client: 'Anabatic Solusi Digital',
    logo: '/assets/case-anabatic-logo.png',
    shot: '/assets/case-anabatic-screen.png',
    category: { en: 'Corporate Website', id: 'Website Korporat' },
    title: {
      en: 'Corporate presence for a digital solutions group',
      id: 'Kehadiran korporat untuk grup solusi digital',
    },
    summary: {
      en: 'A structured corporate site that explains a broad service portfolio without overwhelming the visitor on the first screen.',
      id: 'Situs korporat terstruktur yang menjelaskan portofolio layanan yang luas tanpa membanjiri pengunjung di layar pertama.',
    },
    services: [
      { en: 'Website Development', id: 'Pengembangan Website' },
      { en: 'Creative UI/UX', id: 'Creative UI/UX' },
    ],
    results: [
      { value: '8', label: { en: 'Service lines mapped', id: 'Lini layanan dipetakan' } },
      { value: '100%', label: { en: 'Editor-managed content', id: 'Konten dikelola editor' } },
    ],
  },
  {
    slug: 'pt-dika',
    client: 'PT Dika',
    logo: '/assets/case-dika-logo.png',
    shot: '/assets/case-dika-screen.png',
    category: { en: 'Corporate Website', id: 'Website Korporat' },
    title: {
      en: 'Clear positioning for an established operator',
      id: 'Positioning yang jelas untuk operator mapan',
    },
    summary: {
      en: 'A refreshed identity online: capability, track record, and contact routes made obvious within one scroll.',
      id: 'Identitas daring yang disegarkan: kapabilitas, rekam jejak, dan jalur kontak terlihat jelas dalam satu gulir.',
    },
    services: [
      { en: 'Website Development', id: 'Pengembangan Website' },
      { en: 'Project Management', id: 'Manajemen Proyek' },
    ],
    results: [
      { value: '3 wks', label: { en: 'Design to launch', id: 'Desain hingga peluncuran' } },
      { value: '+2x', label: { en: 'Contact submissions', id: 'Pengajuan kontak' } },
    ],
  },
];

export const talentCase = {
  client: 'SALT Indonesia',
  logo: '/assets/case-salt-logo.png',
  photo: '/assets/case-salt-photo.png',
  eyebrow: { en: 'IT TALENT OUTSOURCING', id: 'IT TALENT OUTSOURCING' } satisfies L,
  title: {
    en: 'Accelerating digital projects through best-fit IT talent',
    id: 'Mempercepat proyek digital melalui talenta TI yang paling sesuai',
  } satisfies L,
  body: {
    en: 'The collaboration focused on identifying specific IT talent needs and expectations, then placing screened engineers and analysts directly into active delivery teams.',
    id: 'Kolaborasi ini berfokus pada identifikasi kebutuhan dan ekspektasi talenta TI yang spesifik, lalu menempatkan engineer dan analis terseleksi langsung ke tim pengiriman yang sedang berjalan.',
  } satisfies L,
};
