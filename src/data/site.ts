import type { L } from '../i18n/ui';

export const site = {
  name: 'Dimensi',
  legalName: 'PT Dimensi Kreasi Nusantara',
  tagline: {
    en: 'Transforming Ideas into Digital Masterpieces',
    id: 'Mengubah Ide Menjadi Mahakarya Digital',
  } satisfies L,
  email: 'info@dimensitech.com',
  phone: '+62 811 1227 528',
  phoneHref: '+628111227528',
  address: {
    en: 'Palma Tower, 20th Floor, TB Simatupang, Jakarta Selatan 12310, Indonesia',
    id: 'Palma Tower, Lantai 20, TB Simatupang, Jakarta Selatan 12310, Indonesia',
  } satisfies L,
  motto: ['INNOVATE', 'UNDERSTAND', 'FOSTER', 'BUILD'],
};

export type NavItem = {
  label: L;
  href: string;
  children?: { label: L; href: string }[];
};

export const nav: NavItem[] = [
  { label: { en: 'Home', id: 'Beranda' }, href: '/' },
  { label: { en: 'About Us', id: 'Tentang Kami' }, href: '/about' },
  { label: { en: 'Our Services', id: 'Layanan' }, href: '/services' },
  { label: { en: 'Industries', id: 'Industri' }, href: '/industries' },
  { label: { en: 'Our Work', id: 'Portofolio' }, href: '/work' },
  { label: { en: 'Insights', id: 'Wawasan' }, href: '/insights' },
  { label: { en: 'Careers', id: 'Karier' }, href: '/careers' },
  { label: { en: 'Contact Us', id: 'Kontak' }, href: '/contact' },
];

export const ui = {
  letsTalk: { en: "Let's Talk", id: 'Hubungi Kami' } satisfies L,
  search: { en: 'Search', id: 'Cari' } satisfies L,
  searchPlaceholder: { en: 'Search the site…', id: 'Cari di situs ini…' } satisfies L,
  menu: { en: 'Menu', id: 'Menu' } satisfies L,
  readMore: { en: 'Read more', id: 'Baca selengkapnya' } satisfies L,
  viewAll: { en: 'View All Services', id: 'Lihat Semua Layanan' } satisfies L,
  learnMore: { en: 'Learn More About Us', id: 'Kenali Kami Lebih Jauh' } satisfies L,
  explore: { en: 'Explore Our Services', id: 'Jelajahi Layanan Kami' } satisfies L,
  discover: { en: 'Discover Who We Are', id: 'Kenali Siapa Kami' } satisfies L,
  backTo: { en: 'All services', id: 'Semua layanan' } satisfies L,
  applyNow: { en: 'Apply now', id: 'Lamar sekarang' } satisfies L,
  langLabel: { en: 'Bahasa Indonesia', id: 'English' } satisfies L,
  skipToContent: { en: 'Skip to content', id: 'Lewati ke konten' } satisfies L,
};

export const cta = {
  eyebrow: { en: 'READY TO TRANSFORM?', id: 'SIAP BERTRANSFORMASI?' } satisfies L,
  title: { en: "Let's turn your ideas into", id: 'Mari ubah ide Anda menjadi' } satisfies L,
  titleAccent: { en: 'digital masterpieces.', id: 'mahakarya digital.' } satisfies L,
  body: {
    en: 'Talk to Dimensi about your next digital product, website, application, data initiative, or IT delivery challenge.',
    id: 'Diskusikan dengan Dimensi tentang produk digital, website, aplikasi, inisiatif data, atau tantangan pengiriman TI Anda berikutnya.',
  } satisfies L,
};

export const footerNav = {
  company: { en: 'Company', id: 'Perusahaan' } satisfies L,
  services: { en: 'Services', id: 'Layanan' } satisfies L,
  contact: { en: 'Contact', id: 'Kontak' } satisfies L,
  office: { en: 'Office', id: 'Kantor' } satisfies L,
  rights: { en: 'All rights reserved.', id: 'Seluruh hak cipta dilindungi.' } satisfies L,
};
