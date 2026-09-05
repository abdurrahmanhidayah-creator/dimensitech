import type { L } from '../i18n/ui';
import type { IconName } from '../lib/icons';

export type Job = {
  slug: string;
  title: L;
  department: L;
  location: L;
  type: L;
  level: L;
  summary: L;
  responsibilities: L[];
  requirements: L[];
};

export const jobs: Job[] = [
  {
    slug: 'senior-product-designer',
    title: { en: 'Senior Product Designer', id: 'Senior Product Designer' },
    department: { en: 'Design', id: 'Desain' },
    location: { en: 'Jakarta / Hybrid', id: 'Jakarta / Hybrid' },
    type: { en: 'Full-time', id: 'Penuh waktu' },
    level: { en: 'Senior', id: 'Senior' },
    summary: {
      en: 'Own end-to-end design for client products, from research through to a system engineering can build from.',
      id: 'Memimpin desain end-to-end untuk produk klien, dari riset hingga sistem yang siap dibangun tim teknik.',
    },
    responsibilities: [
      { en: 'Lead discovery and usability sessions with client users', id: 'Memimpin sesi discovery dan uji kegunaan bersama pengguna klien' },
      { en: 'Produce flows, prototypes, and production-ready specs', id: 'Menghasilkan alur, prototipe, dan spesifikasi siap produksi' },
      { en: 'Maintain and extend the shared design system', id: 'Merawat dan mengembangkan design system bersama' },
    ],
    requirements: [
      { en: '5+ years designing digital products', id: 'Pengalaman 5+ tahun merancang produk digital' },
      { en: 'A portfolio showing decisions, not only screens', id: 'Portofolio yang menunjukkan keputusan, bukan sekadar layar' },
      { en: 'Comfortable presenting to senior stakeholders', id: 'Terbiasa presentasi ke pemangku kepentingan senior' },
    ],
  },
  {
    slug: 'fullstack-engineer',
    title: { en: 'Full-Stack Engineer', id: 'Full-Stack Engineer' },
    department: { en: 'Engineering', id: 'Rekayasa' },
    location: { en: 'Jakarta / Remote', id: 'Jakarta / Remote' },
    type: { en: 'Full-time', id: 'Penuh waktu' },
    level: { en: 'Mid–Senior', id: 'Menengah–Senior' },
    summary: {
      en: 'Build and ship client applications across the stack, with real ownership of what you release.',
      id: 'Membangun dan merilis aplikasi klien di seluruh lapisan teknologi, dengan kepemilikan nyata atas apa yang Anda rilis.',
    },
    responsibilities: [
      { en: 'Deliver features from API to interface', id: 'Mengerjakan fitur dari API hingga antarmuka' },
      { en: 'Review code and mentor junior engineers', id: 'Mereview kode dan membimbing engineer junior' },
      { en: 'Keep services observable and well tested', id: 'Menjaga layanan tetap terpantau dan teruji' },
    ],
    requirements: [
      { en: '3+ years with TypeScript and a modern framework', id: 'Pengalaman 3+ tahun dengan TypeScript dan framework modern' },
      { en: 'Solid relational database fundamentals', id: 'Dasar basis data relasional yang kuat' },
      { en: 'Experience with CI/CD and cloud deployment', id: 'Pengalaman dengan CI/CD dan deployment cloud' },
    ],
  },
  {
    slug: 'data-engineer',
    title: { en: 'Data Engineer', id: 'Data Engineer' },
    department: { en: 'Data', id: 'Data' },
    location: { en: 'Jakarta / Hybrid', id: 'Jakarta / Hybrid' },
    type: { en: 'Full-time', id: 'Penuh waktu' },
    level: { en: 'Mid', id: 'Menengah' },
    summary: {
      en: 'Design pipelines and models that make client data dependable enough to run a business on.',
      id: 'Merancang pipeline dan model data agar data klien cukup andal untuk menjalankan bisnis.',
    },
    responsibilities: [
      { en: 'Build ingestion and transformation pipelines', id: 'Membangun pipeline ingesti dan transformasi' },
      { en: 'Model warehouse schemas for analytics use', id: 'Memodelkan skema warehouse untuk kebutuhan analitik' },
      { en: 'Instrument data quality checks and alerting', id: 'Menyiapkan pemeriksaan kualitas data dan peringatan' },
    ],
    requirements: [
      { en: 'SQL fluency and Python for data work', id: 'Mahir SQL dan Python untuk pekerjaan data' },
      { en: 'Experience with a cloud data warehouse', id: 'Pengalaman dengan data warehouse berbasis cloud' },
      { en: 'Understanding of governance and lineage', id: 'Memahami tata kelola dan lineage data' },
    ],
  },
  {
    slug: 'qa-engineer',
    title: { en: 'QA Engineer', id: 'QA Engineer' },
    department: { en: 'Engineering', id: 'Rekayasa' },
    location: { en: 'Jakarta', id: 'Jakarta' },
    type: { en: 'Full-time', id: 'Penuh waktu' },
    level: { en: 'Junior–Mid', id: 'Junior–Menengah' },
    summary: {
      en: 'Protect release quality with a mix of exploratory testing and dependable automation.',
      id: 'Menjaga kualitas rilis melalui kombinasi pengujian eksploratif dan otomasi yang andal.',
    },
    responsibilities: [
      { en: 'Write and maintain automated test suites', id: 'Menulis dan merawat suite pengujian otomatis' },
      { en: 'Run exploratory testing before each release', id: 'Menjalankan pengujian eksploratif sebelum tiap rilis' },
      { en: 'Report defects with reproducible detail', id: 'Melaporkan cacat dengan detail yang dapat direproduksi' },
    ],
    requirements: [
      { en: '2+ years in software quality assurance', id: 'Pengalaman 2+ tahun di quality assurance perangkat lunak' },
      { en: 'Familiarity with Playwright, Cypress, or similar', id: 'Familiar dengan Playwright, Cypress, atau sejenisnya' },
      { en: 'Precise written communication', id: 'Komunikasi tertulis yang presisi' },
    ],
  },
  {
    slug: 'project-manager',
    title: { en: 'Project Manager', id: 'Project Manager' },
    department: { en: 'Delivery', id: 'Pengiriman' },
    location: { en: 'Jakarta / Hybrid', id: 'Jakarta / Hybrid' },
    type: { en: 'Full-time', id: 'Penuh waktu' },
    level: { en: 'Mid–Senior', id: 'Menengah–Senior' },
    summary: {
      en: 'Keep multi-team engagements aligned on scope, risk, and the outcome the client signed up for.',
      id: 'Menjaga keselarasan ruang lingkup, risiko, dan hasil yang dijanjikan pada engagement lintas tim.',
    },
    responsibilities: [
      { en: 'Plan delivery and track progress against it', id: 'Merencanakan pengiriman dan memantau progresnya' },
      { en: 'Surface risks early with a mitigation plan', id: 'Mengangkat risiko sejak dini beserta rencana mitigasi' },
      { en: 'Run stakeholder reporting and retrospectives', id: 'Menjalankan pelaporan pemangku kepentingan dan retrospektif' },
    ],
    requirements: [
      { en: '4+ years managing software delivery', id: 'Pengalaman 4+ tahun mengelola pengiriman perangkat lunak' },
      { en: 'Agile practice with real-world adaptation', id: 'Praktik agile dengan adaptasi nyata di lapangan' },
      { en: 'Fluent English and Bahasa Indonesia', id: 'Fasih berbahasa Inggris dan Indonesia' },
    ],
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);

export type Perk = { icon: IconName; title: L; body: L };

export const perks: Perk[] = [
  {
    icon: 'spark',
    title: { en: 'Work that ships', id: 'Pekerjaan yang benar-benar rilis' },
    body: {
      en: 'Client projects that go live and get used, not prototypes that stall in review.',
      id: 'Proyek klien yang benar-benar tayang dan dipakai, bukan prototipe yang mandek di tahap review.',
    },
  },
  {
    icon: 'users',
    title: { en: 'Small, senior teams', id: 'Tim kecil dan senior' },
    body: {
      en: 'You will have room to make decisions and people nearby to pressure-test them.',
      id: 'Anda punya ruang untuk mengambil keputusan dan rekan terdekat untuk mengujinya.',
    },
  },
  {
    icon: 'book',
    title: { en: 'Learning budget', id: 'Anggaran belajar' },
    body: {
      en: 'Certification and conference support across cloud, data, and design practice.',
      id: 'Dukungan sertifikasi dan konferensi di bidang cloud, data, dan praktik desain.',
    },
  },
  {
    icon: 'clock',
    title: { en: 'Flexible hybrid', id: 'Hybrid yang fleksibel' },
    body: {
      en: 'Core hours for collaboration, and trust for the rest of your schedule.',
      id: 'Jam inti untuk kolaborasi, selebihnya kami percayakan pada Anda.',
    },
  },
];
