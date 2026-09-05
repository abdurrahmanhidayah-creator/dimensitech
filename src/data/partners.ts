import type { L } from '../i18n/ui';

export type Partner = { name: string; logo: string; blurb: L };

export const partners: Partner[] = [
  {
    name: 'Crayon',
    logo: '/assets/partner-crayon.png',
    blurb: {
      en: 'IT optimization meets innovation — software, cloud, and AI advisory.',
      id: 'Optimalisasi TI bertemu inovasi — advisory perangkat lunak, cloud, dan AI.',
    },
  },
  {
    name: 'greytHR',
    logo: '/assets/partner-greythr.png',
    blurb: {
      en: 'Full-suite HRMS for payroll, attendance, and employee experience.',
      id: 'HRMS lengkap untuk payroll, kehadiran, dan pengalaman karyawan.',
    },
  },
  {
    name: 'Medisin',
    logo: '/assets/partner-medisin.png',
    blurb: {
      en: 'Medical technology platform connecting clinics, patients, and pharmacies.',
      id: 'Platform teknologi medis yang menghubungkan klinik, pasien, dan apotek.',
    },
  },
  {
    name: 'KNIME',
    logo: '/assets/partner-knime.png',
    blurb: {
      en: 'Data analytics and workflow automation for teams without deep code.',
      id: 'Analitik data dan otomasi alur kerja untuk tim tanpa keahlian koding mendalam.',
    },
  },
];

export const clientLogos = [
  '/assets/client-alam.png',
  '/assets/client-alomet.png',
  '/assets/client-amero.png',
  '/assets/client-dpbca.png',
  '/assets/client-ptduta.png',
  '/assets/client-salt.png',
];
