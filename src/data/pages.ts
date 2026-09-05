import type { L } from '../i18n/ui';

type PageMeta = {
  eyebrow: L;
  title: L;
  /** Second line of the headline, rendered in the accent colour. */
  accent?: L;
  lead: L;
  metaTitle: L;
  metaDescription: L;
};

export const pages = {
  home: {
    eyebrow: { en: 'TRANSFORMING IDEAS INTO', id: 'MENGUBAH IDE MENJADI' },
    title: { en: 'Digital', id: 'Mahakarya' },
    accent: { en: 'Masterpieces', id: 'Digital' },
    lead: {
      en: 'We specialize in providing top-notch IT consulting services designed to help businesses navigate technology. We deliver tailored solutions that drive efficiency, enhance security, and promote growth.',
      id: 'Kami menyediakan layanan konsultasi TI kelas atas yang dirancang untuk membantu bisnis menavigasi teknologi. Kami menghadirkan solusi yang disesuaikan untuk mendorong efisiensi, memperkuat keamanan, dan menumbuhkan bisnis.',
    },
    metaTitle: {
      en: 'Dimensi — Transforming Ideas into Digital Masterpieces',
      id: 'Dimensi — Mengubah Ide Menjadi Mahakarya Digital',
    },
    metaDescription: {
      en: 'IT consulting, product development, UI/UX, websites, mobile apps, IT outsourcing, and big data analytics from Jakarta.',
      id: 'Konsultasi TI, pengembangan produk, UI/UX, website, aplikasi mobile, IT outsourcing, dan big data analytics dari Jakarta.',
    },
  },
  about: {
    eyebrow: { en: 'ABOUT US', id: 'TENTANG KAMI' },
    title: { en: 'Discover Who We Are', id: 'Kenali Siapa Kami' },
    accent: { en: 'and What Drives Us', id: 'dan Apa yang Menggerakkan Kami' },
    lead: {
      en: 'We specialize in providing top-notch IT consulting services designed to help businesses navigate technology. We deliver tailored solutions that drive efficiency, enhance security, and promote growth.',
      id: 'Kami menyediakan layanan konsultasi TI kelas atas yang dirancang untuk membantu bisnis menavigasi teknologi. Kami menghadirkan solusi yang disesuaikan untuk mendorong efisiensi, memperkuat keamanan, dan menumbuhkan bisnis.',
    },
    metaTitle: { en: 'About Us — Dimensi', id: 'Tentang Kami — Dimensi' },
    metaDescription: {
      en: 'Who Dimensi is, how we work, and the principles behind every engagement.',
      id: 'Siapa Dimensi, bagaimana kami bekerja, dan prinsip di balik setiap kerja sama.',
    },
  },
  services: {
    eyebrow: { en: 'OUR SERVICES', id: 'LAYANAN KAMI' },
    title: { en: 'Turn Ideas into', id: 'Ubah Ide Menjadi' },
    accent: { en: 'Impactful Solutions', id: 'Solusi Berdampak' },
    lead: {
      en: 'From creative digital experiences to data and technology delivery, our capabilities are built around outcomes you can measure.',
      id: 'Dari pengalaman digital yang kreatif hingga pengiriman data dan teknologi, kapabilitas kami dibangun untuk hasil yang bisa Anda ukur.',
    },
    metaTitle: { en: 'Our Services — Dimensi', id: 'Layanan Kami — Dimensi' },
    metaDescription: {
      en: 'Eight capabilities spanning design, engineering, data, outsourcing, and delivery management.',
      id: 'Delapan kapabilitas mencakup desain, rekayasa, data, outsourcing, dan manajemen pengiriman.',
    },
  },
  industries: {
    eyebrow: { en: 'INDUSTRIES', id: 'INDUSTRI' },
    title: { en: 'Sector Knowledge That', id: 'Pemahaman Sektor yang' },
    accent: { en: 'Shortens the Learning Curve', id: 'Memangkas Kurva Belajar' },
    lead: {
      en: 'We work across regulated and fast-moving sectors. That context means less time spent explaining your business and more spent improving it.',
      id: 'Kami bekerja di sektor yang teregulasi maupun yang bergerak cepat. Konteks itu berarti lebih sedikit waktu menjelaskan bisnis Anda dan lebih banyak waktu memperbaikinya.',
    },
    metaTitle: { en: 'Industries — Dimensi', id: 'Industri — Dimensi' },
    metaDescription: {
      en: 'Banking, healthcare, public sector, retail, manufacturing, and education technology delivery.',
      id: 'Pengiriman teknologi untuk perbankan, kesehatan, sektor publik, ritel, manufaktur, dan pendidikan.',
    },
  },
  work: {
    eyebrow: { en: 'OUR WORK', id: 'PORTOFOLIO' },
    title: { en: 'Selected Client', id: 'Kolaborasi Klien' },
    accent: { en: 'Collaborations', id: 'Terpilih' },
    lead: {
      en: 'Digital experiences, corporate platforms, and IT talent solutions delivered by Dimensi.',
      id: 'Pengalaman digital, platform korporat, dan solusi talenta TI yang dikerjakan Dimensi.',
    },
    metaTitle: { en: 'Our Work — Dimensi', id: 'Portofolio — Dimensi' },
    metaDescription: {
      en: 'Case studies across media, financial services, and corporate platforms.',
      id: 'Studi kasus di bidang media, jasa keuangan, dan platform korporat.',
    },
  },
  insights: {
    eyebrow: { en: 'INSIGHTS', id: 'WAWASAN' },
    title: { en: 'Notes from the', id: 'Catatan dari' },
    accent: { en: 'Delivery Floor', id: 'Ruang Kerja Kami' },
    lead: {
      en: 'Practical writing on design, engineering, data, and getting projects across the line.',
      id: 'Tulisan praktis tentang desain, rekayasa, data, dan cara menuntaskan proyek.',
    },
    metaTitle: { en: 'Insights — Dimensi', id: 'Wawasan — Dimensi' },
    metaDescription: {
      en: 'Articles on design systems, data quality, outsourcing, and delivery practice.',
      id: 'Artikel tentang design system, kualitas data, outsourcing, dan praktik pengiriman.',
    },
  },
  careers: {
    eyebrow: { en: 'CAREERS', id: 'KARIER' },
    title: { en: 'Build Things That', id: 'Bangun Hal yang' },
    accent: { en: 'Actually Ship', id: 'Benar-Benar Rilis' },
    lead: {
      en: 'We hire people who want ownership of real client outcomes, and we give them the room to take it.',
      id: 'Kami merekrut orang yang ingin bertanggung jawab atas hasil nyata bagi klien, dan kami memberi ruang untuk itu.',
    },
    metaTitle: { en: 'Careers — Dimensi', id: 'Karier — Dimensi' },
    metaDescription: {
      en: 'Open roles in design, engineering, data, quality assurance, and delivery.',
      id: 'Lowongan di bidang desain, rekayasa, data, quality assurance, dan pengiriman.',
    },
  },
  contact: {
    eyebrow: { en: 'CONTACT US', id: 'HUBUNGI KAMI' },
    title: { en: "Let's Talk About", id: 'Mari Bicarakan' },
    accent: { en: 'What You Are Building', id: 'Apa yang Anda Bangun' },
    lead: {
      en: 'Tell us about the product, platform, or team you need. We reply within one business day.',
      id: 'Ceritakan produk, platform, atau tim yang Anda butuhkan. Kami membalas dalam satu hari kerja.',
    },
    metaTitle: { en: 'Contact Us — Dimensi', id: 'Hubungi Kami — Dimensi' },
    metaDescription: {
      en: 'Reach the Dimensi team in Jakarta by email, phone, or the enquiry form.',
      id: 'Hubungi tim Dimensi di Jakarta melalui email, telepon, atau formulir.',
    },
  },
} satisfies Record<string, PageMeta>;

export const sections = {
  aboutHome: {
    eyebrow: { en: 'ABOUT US', id: 'TENTANG KAMI' } satisfies L,
    title: { en: 'Discover Who We Are', id: 'Kenali Siapa Kami' } satisfies L,
    accent: { en: 'and What Drives Us', id: 'dan Apa yang Menggerakkan Kami' } satisfies L,
  },
  servicesHome: {
    eyebrow: { en: 'OUR SERVICES', id: 'LAYANAN KAMI' } satisfies L,
    title: { en: 'Turn Ideas into', id: 'Ubah Ide Menjadi' } satisfies L,
    accent: { en: 'Impactful Solutions', id: 'Solusi Berdampak' } satisfies L,
  },
  industriesHome: {
    eyebrow: { en: 'INDUSTRIES', id: 'INDUSTRI' } satisfies L,
    title: { en: 'Where We', id: 'Di Mana Kami' } satisfies L,
    accent: { en: 'Do Our Best Work', id: 'Bekerja Paling Baik' } satisfies L,
  },
  workHome: {
    eyebrow: { en: 'CASE STUDIES', id: 'STUDI KASUS' } satisfies L,
    title: { en: 'Selected Client', id: 'Kolaborasi Klien' } satisfies L,
    accent: { en: 'Collaborations', id: 'Terpilih' } satisfies L,
  },
  partnersHome: {
    eyebrow: { en: 'STRATEGIC PARTNERS', id: 'MITRA STRATEGIS' } satisfies L,
    title: { en: 'A technology ecosystem', id: 'Ekosistem teknologi' } satisfies L,
    accent: { en: 'built for innovation', id: 'yang dibangun untuk inovasi' } satisfies L,
  },
  insightsHome: {
    eyebrow: { en: 'INSIGHTS', id: 'WAWASAN' } satisfies L,
    title: { en: 'Ideas Worth', id: 'Gagasan yang' } satisfies L,
    accent: { en: 'Your Ten Minutes', id: 'Layak Sepuluh Menit Anda' } satisfies L,
  },
  processHome: {
    eyebrow: { en: 'HOW WE WORK', id: 'CARA KAMI BEKERJA' } satisfies L,
    title: { en: 'A process built for', id: 'Proses yang dirancang untuk' } satisfies L,
    accent: { en: 'predictable delivery', id: 'pengiriman yang terprediksi' } satisfies L,
  },
};
