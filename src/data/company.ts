import type { L } from '../i18n/ui';
import type { IconName } from '../lib/icons';

export type ValueProp = { icon: IconName; title: L; body: L };

/** The four-up strip under the hero. */
export const valueStrip: ValueProp[] = [
  {
    icon: 'bulb',
    title: { en: 'Innovative Solutions', id: 'Solusi Inovatif' },
    body: {
      en: 'Leveraging the latest technologies for real impact.',
      id: 'Memanfaatkan teknologi terkini untuk dampak nyata.',
    },
  },
  {
    icon: 'users',
    title: { en: 'Experienced Team', id: 'Tim Berpengalaman' },
    body: {
      en: 'Certified professionals with proven track records.',
      id: 'Profesional bersertifikat dengan rekam jejak teruji.',
    },
  },
  {
    icon: 'shield',
    title: { en: 'Secure & Reliable', id: 'Aman & Andal' },
    body: {
      en: 'Delivering trusted and scalable solutions.',
      id: 'Menghadirkan solusi tepercaya dan terukur.',
    },
  },
  {
    icon: 'chart',
    title: { en: 'Business Growth', id: 'Pertumbuhan Bisnis' },
    body: {
      en: 'Your success is our priority.',
      id: 'Kesuksesan Anda adalah prioritas kami.',
    },
  },
];

export const stats: { icon: IconName; value: string; label: L }[] = [
  { icon: 'users', value: '100+', label: { en: 'Happy Clients', id: 'Klien Puas' } },
  { icon: 'doc', value: '250+', label: { en: 'Successful Projects', id: 'Proyek Sukses' } },
  { icon: 'award', value: '10+', label: { en: 'Years of Experience', id: 'Tahun Pengalaman' } },
];

export const principles: ValueProp[] = [
  {
    icon: 'target',
    title: { en: 'Outcomes over output', id: 'Hasil di atas keluaran' },
    body: {
      en: 'We measure a project by what changed for the business, not by how many features shipped.',
      id: 'Kami mengukur proyek dari perubahan yang terjadi pada bisnis, bukan dari banyaknya fitur yang dirilis.',
    },
  },
  {
    icon: 'eye',
    title: { en: 'Transparent by default', id: 'Transparan sejak awal' },
    body: {
      en: 'Progress, risks, and bad news reach you early — while there is still time to act on them.',
      id: 'Progres, risiko, dan kabar buruk sampai kepada Anda lebih awal — saat masih ada waktu untuk bertindak.',
    },
  },
  {
    icon: 'compass',
    title: { en: 'Fit before fashion', id: 'Kesesuaian sebelum tren' },
    body: {
      en: 'We recommend the technology your team can operate, not the one that reads best in a proposal.',
      id: 'Kami merekomendasikan teknologi yang bisa dioperasikan tim Anda, bukan yang paling menarik di atas proposal.',
    },
  },
  {
    icon: 'shield',
    title: { en: 'Built to be handed over', id: 'Dibangun untuk diserahterimakan' },
    body: {
      en: 'Documentation, tests, and knowledge transfer are part of delivery, not an optional extra.',
      id: 'Dokumentasi, pengujian, dan transfer pengetahuan adalah bagian dari pengiriman, bukan tambahan opsional.',
    },
  },
];

export const process: { step: string; title: L; body: L }[] = [
  {
    step: '01',
    title: { en: 'Discover', id: 'Discover' },
    body: {
      en: 'We map the business goal, the users, and the constraints before proposing a single solution.',
      id: 'Kami memetakan tujuan bisnis, pengguna, dan batasan sebelum mengusulkan satu solusi pun.',
    },
  },
  {
    step: '02',
    title: { en: 'Design', id: 'Design' },
    body: {
      en: 'Flows, prototypes, and architecture are validated with real users and your technical team.',
      id: 'Alur, prototipe, dan arsitektur divalidasi bersama pengguna nyata dan tim teknis Anda.',
    },
  },
  {
    step: '03',
    title: { en: 'Deliver', id: 'Deliver' },
    body: {
      en: 'Short increments, visible progress, and a working release you can review at every milestone.',
      id: 'Iterasi pendek, progres yang terlihat, dan rilis yang bisa Anda tinjau di setiap milestone.',
    },
  },
  {
    step: '04',
    title: { en: 'Grow', id: 'Grow' },
    body: {
      en: 'Post-launch measurement, iteration, and knowledge transfer so your team can carry it forward.',
      id: 'Pengukuran pasca peluncuran, iterasi, dan transfer pengetahuan agar tim Anda bisa melanjutkannya.',
    },
  },
];

export const timeline: { year: string; title: L; body: L }[] = [
  {
    year: '2014',
    title: { en: 'Founded in Jakarta', id: 'Didirikan di Jakarta' },
    body: {
      en: 'Dimensi starts as a small consulting team focused on web and enterprise integration.',
      id: 'Dimensi dimulai sebagai tim konsultan kecil yang fokus pada web dan integrasi enterprise.',
    },
  },
  {
    year: '2018',
    title: { en: 'Design practice established', id: 'Praktik desain dibentuk' },
    body: {
      en: 'A dedicated UI/UX and design system practice joins the delivery organisation.',
      id: 'Praktik UI/UX dan design system khusus bergabung dengan organisasi pengiriman.',
    },
  },
  {
    year: '2021',
    title: { en: 'Data and analytics', id: 'Data dan analitik' },
    body: {
      en: 'Big data capability added, supported by partnerships across analytics and cloud.',
      id: 'Kapabilitas big data ditambahkan, didukung kemitraan di bidang analitik dan cloud.',
    },
  },
  {
    year: '2024',
    title: { en: 'IT talent at scale', id: 'Talenta TI dalam skala besar' },
    body: {
      en: 'Outsourcing practice grows to place screened engineers directly into client delivery teams.',
      id: 'Praktik outsourcing berkembang, menempatkan engineer terseleksi langsung ke tim klien.',
    },
  },
];
