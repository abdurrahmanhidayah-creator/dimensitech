import type { L } from '../i18n/ui';
import type { IconName } from '../lib/icons';

export type Service = {
  slug: string;
  icon: IconName;
  title: L;
  short: L;
  /** Terse line for the narrow cards in the home-page services row. */
  blurb: L;
  intro: L;
  deliverables: L[];
  outcomes: L[];
};

export const services: Service[] = [
  {
    slug: 'creative-ui-ux',
    icon: 'palette',
    title: { en: 'Creative UI/UX', id: 'Creative UI/UX' },
    short: {
      en: 'Designing digital products that are visually appealing and easy to use.',
      id: 'Merancang produk digital yang menarik secara visual dan mudah digunakan.',
    },
    blurb: {
      en: 'Interfaces shaped by research.',
      id: 'Antarmuka yang lahir dari riset.',
    },
    intro: {
      en: 'We shape interfaces around evidence, not opinion. Research, information architecture, and interaction design come together so every screen serves a clear user need and a measurable business goal.',
      id: 'Kami merancang antarmuka berdasarkan bukti, bukan asumsi. Riset, arsitektur informasi, dan desain interaksi disatukan agar setiap layar menjawab kebutuhan pengguna sekaligus target bisnis yang terukur.',
    },
    deliverables: [
      { en: 'User research and usability testing', id: 'Riset pengguna dan uji kegunaan' },
      { en: 'Information architecture and user flows', id: 'Arsitektur informasi dan alur pengguna' },
      { en: 'Wireframes and high-fidelity prototypes', id: 'Wireframe dan prototipe high-fidelity' },
      { en: 'Visual design and interaction specs', id: 'Desain visual dan spesifikasi interaksi' },
    ],
    outcomes: [
      { en: 'Higher task completion and conversion', id: 'Penyelesaian tugas dan konversi lebih tinggi' },
      { en: 'Fewer support tickets from confusion', id: 'Tiket dukungan akibat kebingungan berkurang' },
      { en: 'A design language your team can extend', id: 'Bahasa desain yang bisa dikembangkan tim Anda' },
    ],
  },
  {
    slug: 'product-development',
    icon: 'code',
    title: { en: 'Product Development', id: 'Pengembangan Produk' },
    short: {
      en: 'Create and deliver solutions that meet user needs and drive business value.',
      id: 'Membangun dan mengirimkan solusi yang memenuhi kebutuhan pengguna serta menciptakan nilai bisnis.',
    },
    blurb: {
      en: 'From discovery to a live product.',
      id: 'Dari discovery sampai produk tayang.',
    },
    intro: {
      en: 'From discovery to launch, we build products in short, verifiable increments. Each release is instrumented, reviewed with stakeholders, and shaped by what real usage tells us.',
      id: 'Dari discovery hingga peluncuran, kami membangun produk dalam iterasi pendek yang dapat diverifikasi. Setiap rilis terukur, ditinjau bersama pemangku kepentingan, dan disempurnakan berdasarkan data penggunaan nyata.',
    },
    deliverables: [
      { en: 'Product discovery and roadmap', id: 'Product discovery dan roadmap' },
      { en: 'MVP scoping and delivery', id: 'Perumusan dan pengiriman MVP' },
      { en: 'API and backend engineering', id: 'Rekayasa API dan backend' },
      { en: 'QA, release, and post-launch support', id: 'QA, rilis, dan dukungan pasca peluncuran' },
    ],
    outcomes: [
      { en: 'Faster time from idea to market', id: 'Waktu dari ide ke pasar lebih singkat' },
      { en: 'Lower rework through early validation', id: 'Pengerjaan ulang berkurang lewat validasi awal' },
      { en: 'A codebase built to be maintained', id: 'Basis kode yang dirancang untuk dirawat' },
    ],
  },
  {
    slug: 'design-system',
    icon: 'layers',
    title: { en: 'Design System', id: 'Design System' },
    short: {
      en: 'Reusable elements for consistent and integrated user interfaces.',
      id: 'Elemen yang dapat digunakan ulang untuk antarmuka yang konsisten dan terintegrasi.',
    },
    blurb: {
      en: 'One vocabulary for every screen.',
      id: 'Satu kosakata untuk semua layar.',
    },
    intro: {
      en: 'A design system turns one-off screens into a shared vocabulary. We deliver tokens, components, and documentation that keep design and engineering pointed at the same target.',
      id: 'Design system mengubah desain sekali pakai menjadi kosakata bersama. Kami menyediakan token, komponen, dan dokumentasi agar tim desain dan teknik bergerak ke arah yang sama.',
    },
    deliverables: [
      { en: 'Design tokens for color, type, and spacing', id: 'Design token untuk warna, tipografi, dan spasi' },
      { en: 'Component library in Figma and code', id: 'Pustaka komponen di Figma dan kode' },
      { en: 'Accessibility and usage guidelines', id: 'Panduan aksesibilitas dan penggunaan' },
      { en: 'Governance and contribution model', id: 'Model tata kelola dan kontribusi' },
    ],
    outcomes: [
      { en: 'Consistent experience across products', id: 'Pengalaman konsisten di seluruh produk' },
      { en: 'Shorter build time for new screens', id: 'Waktu membangun layar baru lebih singkat' },
      { en: 'Design debt that stops accumulating', id: 'Utang desain berhenti menumpuk' },
    ],
  },
  {
    slug: 'website-development',
    icon: 'monitor',
    title: { en: 'Website Development', id: 'Pengembangan Website' },
    short: {
      en: 'Functional, user-friendly websites aligned with your brand.',
      id: 'Website fungsional dan ramah pengguna yang selaras dengan merek Anda.',
    },
    blurb: {
      en: 'Fast sites your editors can run.',
      id: 'Situs cepat yang dikelola tim Anda.',
    },
    intro: {
      en: 'Corporate sites, campaign microsites, and content platforms engineered for speed, search visibility, and editors who need to publish without waiting on developers.',
      id: 'Situs korporat, microsite kampanye, dan platform konten yang dirancang untuk kecepatan, visibilitas pencarian, serta editor yang ingin menerbitkan tanpa menunggu developer.',
    },
    deliverables: [
      { en: 'Responsive front-end implementation', id: 'Implementasi front-end responsif' },
      { en: 'CMS integration and editor training', id: 'Integrasi CMS dan pelatihan editor' },
      { en: 'Technical SEO and performance tuning', id: 'SEO teknis dan optimasi performa' },
      { en: 'Analytics and conversion tracking', id: 'Analitik dan pelacakan konversi' },
    ],
    outcomes: [
      { en: 'Pages that load fast on real networks', id: 'Halaman yang cepat di jaringan nyata' },
      { en: 'Content updates without engineering', id: 'Pembaruan konten tanpa bantuan teknis' },
      { en: 'Better organic reach and engagement', id: 'Jangkauan organik dan keterlibatan meningkat' },
    ],
  },
  {
    slug: 'mobile-app-development',
    icon: 'smartphone',
    title: { en: 'Mobile App Development', id: 'Pengembangan Aplikasi Mobile' },
    short: {
      en: 'Intuitive, high-performing, and secure applications.',
      id: 'Aplikasi yang intuitif, berkinerja tinggi, dan aman.',
    },
    blurb: {
      en: 'Apps built for real networks.',
      id: 'Aplikasi untuk jaringan nyata.',
    },
    intro: {
      en: 'Native and cross-platform applications built for the conditions your users actually face: patchy connectivity, mid-range devices, and strict security review.',
      id: 'Aplikasi native maupun lintas platform yang dibangun untuk kondisi nyata pengguna: koneksi tidak stabil, perangkat kelas menengah, dan tinjauan keamanan yang ketat.',
    },
    deliverables: [
      { en: 'iOS and Android delivery', id: 'Pengembangan iOS dan Android' },
      { en: 'Offline-first and sync strategy', id: 'Strategi offline-first dan sinkronisasi' },
      { en: 'App store release management', id: 'Manajemen rilis di app store' },
      { en: 'Crash monitoring and iteration', id: 'Pemantauan crash dan iterasi' },
    ],
    outcomes: [
      { en: 'Higher retention after first install', id: 'Retensi lebih tinggi setelah instalasi pertama' },
      { en: 'Stable performance on low-end devices', id: 'Performa stabil di perangkat kelas bawah' },
      { en: 'Release cycles measured in weeks', id: 'Siklus rilis dalam hitungan minggu' },
    ],
  },
  {
    slug: 'it-outsourcing',
    icon: 'cloud',
    title: { en: 'IT Outsourcing', id: 'IT Outsourcing' },
    short: {
      en: 'Enhancing efficiency, reducing costs, and accessing specialized expertise.',
      id: 'Meningkatkan efisiensi, menekan biaya, dan mengakses keahlian khusus.',
    },
    blurb: {
      en: 'Engineers who join your team.',
      id: 'Talenta TI untuk tim Anda.',
    },
    intro: {
      en: 'Dedicated engineers, designers, analysts, and QA specialists embedded into your team — screened against your stack, your process, and your delivery cadence.',
      id: 'Engineer, desainer, analis, dan spesialis QA khusus yang menyatu dengan tim Anda — diseleksi sesuai teknologi, proses, dan ritme pengiriman Anda.',
    },
    deliverables: [
      { en: 'Talent sourcing and technical screening', id: 'Pencarian talenta dan seleksi teknis' },
      { en: 'Dedicated or managed team models', id: 'Model tim dedicated atau managed' },
      { en: 'Onboarding and performance reviews', id: 'Onboarding dan evaluasi kinerja' },
      { en: 'Contract, payroll, and compliance handling', id: 'Pengelolaan kontrak, payroll, dan kepatuhan' },
    ],
    outcomes: [
      { en: 'Capacity added in weeks, not quarters', id: 'Kapasitas bertambah dalam minggu, bukan kuartal' },
      { en: 'Predictable cost per delivery', id: 'Biaya per pengiriman yang dapat diprediksi' },
      { en: 'Skills you do not need to hire permanently', id: 'Keahlian tanpa perlu rekrutmen permanen' },
    ],
  },
  {
    slug: 'big-data-analytics',
    icon: 'database',
    title: { en: 'Big Data Analytics', id: 'Big Data Analytics' },
    short: {
      en: 'Turning large and complex data into actionable insights.',
      id: 'Mengubah data besar dan kompleks menjadi wawasan yang dapat ditindaklanjuti.',
    },
    blurb: {
      en: 'Data you can decide on.',
      id: 'Data yang layak jadi dasar keputusan.',
    },
    intro: {
      en: 'Pipelines, warehouses, and dashboards that make your data trustworthy enough to decide on — with governance and lineage handled from the start, not bolted on later.',
      id: 'Pipeline, data warehouse, dan dasbor yang membuat data Anda cukup andal untuk dijadikan dasar keputusan — dengan tata kelola dan lineage dirancang sejak awal, bukan ditambal belakangan.',
    },
    deliverables: [
      { en: 'Data pipeline and warehouse design', id: 'Perancangan pipeline dan data warehouse' },
      { en: 'Dashboards and self-service reporting', id: 'Dasbor dan pelaporan mandiri' },
      { en: 'Data quality and governance framework', id: 'Kerangka kualitas dan tata kelola data' },
      { en: 'Predictive and AI-assisted models', id: 'Model prediktif dan berbantuan AI' },
    ],
    outcomes: [
      { en: 'One agreed number across departments', id: 'Satu angka yang disepakati lintas departemen' },
      { en: 'Reporting effort cut dramatically', id: 'Beban pelaporan berkurang drastis' },
      { en: 'Decisions grounded in current data', id: 'Keputusan berdasarkan data terkini' },
    ],
  },
  {
    slug: 'project-management',
    icon: 'settings',
    title: { en: 'Project Management', id: 'Manajemen Proyek' },
    short: {
      en: 'Strategic objectives delivered on time and on budget.',
      id: 'Sasaran strategis yang tercapai tepat waktu dan sesuai anggaran.',
    },
    blurb: {
      en: 'Delivery without late surprises.',
      id: 'Pengiriman tanpa kejutan di akhir.',
    },
    intro: {
      en: 'Experienced delivery leads who keep scope, risk, and stakeholders aligned — and who tell you early when something is drifting, while it is still cheap to correct.',
      id: 'Delivery lead berpengalaman yang menjaga keselarasan ruang lingkup, risiko, dan pemangku kepentingan — serta memberi tahu sejak dini saat ada penyimpangan, ketika koreksi masih murah.',
    },
    deliverables: [
      { en: 'Delivery planning and estimation', id: 'Perencanaan dan estimasi pengiriman' },
      { en: 'Risk register and mitigation plan', id: 'Daftar risiko dan rencana mitigasi' },
      { en: 'Stakeholder and vendor coordination', id: 'Koordinasi pemangku kepentingan dan vendor' },
      { en: 'Progress reporting and retrospectives', id: 'Pelaporan progres dan retrospektif' },
    ],
    outcomes: [
      { en: 'Fewer surprises near the deadline', id: 'Lebih sedikit kejutan menjelang tenggat' },
      { en: 'Clear ownership at every milestone', id: 'Kepemilikan yang jelas di tiap milestone' },
      { en: 'Budget variance kept within range', id: 'Deviasi anggaran tetap terkendali' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
