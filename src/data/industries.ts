import type { L } from '../i18n/ui';
import type { IconName } from '../lib/icons';

export type Industry = {
  slug: string;
  icon: IconName;
  name: L;
  summary: L;
  challenges: L[];
};

export const industries: Industry[] = [
  {
    slug: 'banking-financial-services',
    icon: 'bank',
    name: { en: 'Banking & Financial Services', id: 'Perbankan & Jasa Keuangan' },
    summary: {
      en: 'Digital channels, onboarding journeys, and data platforms built to satisfy regulators as well as customers.',
      id: 'Kanal digital, perjalanan onboarding, dan platform data yang memenuhi tuntutan regulator sekaligus nasabah.',
    },
    challenges: [
      { en: 'Legacy core integration', id: 'Integrasi core system lama' },
      { en: 'Regulatory reporting and audit trails', id: 'Pelaporan regulasi dan jejak audit' },
      { en: 'Fraud-aware customer onboarding', id: 'Onboarding nasabah yang sadar risiko fraud' },
    ],
  },
  {
    slug: 'healthcare',
    icon: 'heart',
    name: { en: 'Healthcare & Life Sciences', id: 'Kesehatan & Ilmu Hayati' },
    summary: {
      en: 'Clinical and administrative systems where accuracy, privacy, and uptime are not negotiable.',
      id: 'Sistem klinis dan administratif yang menuntut akurasi, privasi, dan ketersediaan tanpa kompromi.',
    },
    challenges: [
      { en: 'Patient data privacy and consent', id: 'Privasi dan persetujuan data pasien' },
      { en: 'Interoperability between systems', id: 'Interoperabilitas antarsistem' },
      { en: 'Adoption by busy clinical staff', id: 'Adopsi oleh tenaga klinis yang sibuk' },
    ],
  },
  {
    slug: 'public-sector',
    icon: 'globe',
    name: { en: 'Government & Public Sector', id: 'Pemerintahan & Sektor Publik' },
    summary: {
      en: 'Citizen-facing services designed for the widest possible range of devices, connections, and abilities.',
      id: 'Layanan publik yang dirancang untuk rentang perangkat, koneksi, dan kemampuan pengguna seluas mungkin.',
    },
    challenges: [
      { en: 'Accessibility and inclusive design', id: 'Aksesibilitas dan desain inklusif' },
      { en: 'Procurement and compliance constraints', id: 'Kendala pengadaan dan kepatuhan' },
      { en: 'Load spikes during public deadlines', id: 'Lonjakan beban saat tenggat publik' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    icon: 'cart',
    name: { en: 'Retail & E-Commerce', id: 'Ritel & E-Commerce' },
    summary: {
      en: 'Storefronts, loyalty, and fulfilment systems that hold up during campaign traffic.',
      id: 'Etalase digital, loyalitas, dan sistem pemenuhan yang tetap stabil saat trafik kampanye melonjak.',
    },
    challenges: [
      { en: 'Checkout conversion and drop-off', id: 'Konversi checkout dan tingkat drop-off' },
      { en: 'Omnichannel inventory accuracy', id: 'Akurasi inventaris omnichannel' },
      { en: 'Peak-season scalability', id: 'Skalabilitas saat musim puncak' },
    ],
  },
  {
    slug: 'manufacturing-logistics',
    icon: 'factory',
    name: { en: 'Manufacturing & Logistics', id: 'Manufaktur & Logistik' },
    summary: {
      en: 'Operational visibility from the plant floor to the last mile, built on data people trust.',
      id: 'Visibilitas operasional dari lantai produksi hingga last mile, di atas data yang dipercaya.',
    },
    challenges: [
      { en: 'Fragmented operational data', id: 'Data operasional yang terfragmentasi' },
      { en: 'Field usage on rugged devices', id: 'Penggunaan lapangan di perangkat rugged' },
      { en: 'Planning against real demand', id: 'Perencanaan berdasarkan permintaan nyata' },
    ],
  },
  {
    slug: 'education',
    icon: 'book',
    name: { en: 'Education & Training', id: 'Pendidikan & Pelatihan' },
    summary: {
      en: 'Learning platforms that work for students, instructors, and the administrators behind them.',
      id: 'Platform pembelajaran yang bekerja untuk pelajar, pengajar, dan administrator di baliknya.',
    },
    challenges: [
      { en: 'Engagement and completion rates', id: 'Tingkat keterlibatan dan penyelesaian' },
      { en: 'Content delivery on low bandwidth', id: 'Pengiriman konten di bandwidth rendah' },
      { en: 'Assessment integrity', id: 'Integritas penilaian' },
    ],
  },
];
