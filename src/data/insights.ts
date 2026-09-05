import type { L } from '../i18n/ui';

export type Insight = {
  slug: string;
  date: string;
  readingTime: number;
  category: L;
  title: L;
  excerpt: L;
  /** Body paragraphs, rendered in order. */
  body: L[];
};

export const insights: Insight[] = [
  {
    slug: 'design-system-before-redesign',
    date: '2025-08-14',
    readingTime: 6,
    category: { en: 'Design', id: 'Desain' },
    title: {
      en: 'Build the design system before the redesign, not after',
      id: 'Bangun design system sebelum redesain, bukan sesudahnya',
    },
    excerpt: {
      en: 'Most teams treat a design system as clean-up work. Treating it as groundwork changes the economics of everything built after it.',
      id: 'Banyak tim memperlakukan design system sebagai pekerjaan pembersihan. Menjadikannya fondasi awal mengubah ekonomi dari semua yang dibangun setelahnya.',
    },
    body: [
      {
        en: 'A redesign that ships without a shared component language starts accumulating inconsistency on day one. The second screen borrows from the first, the fifth borrows from the third, and within a quarter nobody can say which button is the real button.',
        id: 'Redesain yang dirilis tanpa bahasa komponen bersama mulai menumpuk inkonsistensi sejak hari pertama. Layar kedua meniru layar pertama, layar kelima meniru layar ketiga, dan dalam satu kuartal tidak ada yang tahu tombol mana yang benar.',
      },
      {
        en: 'Starting with tokens and a small set of primitives costs a few weeks up front. It repays that on the third product, when a new team ships a coherent interface without a designer reviewing every pixel.',
        id: 'Memulai dengan token dan sekumpulan kecil primitif memakan beberapa minggu di awal. Investasi itu kembali pada produk ketiga, ketika tim baru merilis antarmuka yang koheren tanpa desainer memeriksa setiap piksel.',
      },
      {
        en: 'The signal that you needed one earlier is always the same: a spreadsheet tracking which shade of blue each screen uses.',
        id: 'Tanda bahwa Anda seharusnya membangunnya lebih awal selalu sama: sebuah spreadsheet yang mencatat warna biru mana yang dipakai tiap layar.',
      },
    ],
  },
  {
    slug: 'data-quality-first',
    date: '2025-07-02',
    readingTime: 5,
    category: { en: 'Data', id: 'Data' },
    title: {
      en: 'Your dashboard problem is a data quality problem',
      id: 'Masalah dasbor Anda sebenarnya masalah kualitas data',
    },
    excerpt: {
      en: 'Executives stop opening the dashboard the moment two departments quote different numbers for the same week.',
      id: 'Eksekutif berhenti membuka dasbor begitu dua departemen menyebut angka berbeda untuk minggu yang sama.',
    },
    body: [
      {
        en: 'Visualisation is the last ten percent of an analytics programme. The other ninety is definition, lineage, and ownership — deciding what "active customer" means and who is allowed to change that definition.',
        id: 'Visualisasi adalah sepuluh persen terakhir dari program analitik. Sembilan puluh persen sisanya adalah definisi, lineage, dan kepemilikan — menentukan arti "pelanggan aktif" dan siapa yang boleh mengubah definisi itu.',
      },
      {
        en: 'Teams that invest there end up with fewer charts and far more trust in them. Teams that skip it end up with a beautiful dashboard nobody uses to decide anything.',
        id: 'Tim yang berinvestasi di sana berakhir dengan lebih sedikit grafik namun jauh lebih dipercaya. Tim yang melewatkannya berakhir dengan dasbor cantik yang tidak dipakai untuk memutuskan apa pun.',
      },
    ],
  },
  {
    slug: 'outsourcing-that-works',
    date: '2025-05-20',
    readingTime: 7,
    category: { en: 'Delivery', id: 'Pengiriman' },
    title: {
      en: 'What separates IT outsourcing that works from the kind that does not',
      id: 'Yang membedakan IT outsourcing yang berhasil dari yang gagal',
    },
    excerpt: {
      en: 'The difference is rarely the rate card. It is whether the external team is inside your feedback loop or outside it.',
      id: 'Perbedaannya jarang soal tarif. Yang menentukan adalah apakah tim eksternal berada di dalam lingkaran umpan balik Anda atau di luarnya.',
    },
    body: [
      {
        en: 'An outsourced engineer who joins your standup, sees your tickets, and hears the customer complaint directly will make better calls than one who receives a specification and returns a build.',
        id: 'Engineer outsourcing yang ikut standup, melihat tiket Anda, dan mendengar langsung keluhan pelanggan akan mengambil keputusan lebih baik daripada yang hanya menerima spesifikasi lalu menyerahkan hasil build.',
      },
      {
        en: 'Screen for the second thing, not the first: how quickly can this person get into the loop, and how long do they stay in it.',
        id: 'Seleksilah hal kedua, bukan yang pertama: seberapa cepat orang ini masuk ke dalam lingkaran itu, dan berapa lama ia bertahan di dalamnya.',
      },
    ],
  },
  {
    slug: 'mobile-for-real-networks',
    date: '2025-04-08',
    readingTime: 5,
    category: { en: 'Engineering', id: 'Rekayasa' },
    title: {
      en: 'Design for the network your users actually have',
      id: 'Rancang untuk jaringan yang benar-benar dimiliki pengguna',
    },
    excerpt: {
      en: 'An app tested only on office wifi and a flagship phone is an app tested nowhere near its users.',
      id: 'Aplikasi yang hanya diuji di wifi kantor dan ponsel flagship adalah aplikasi yang belum diuji di dekat penggunanya.',
    },
    body: [
      {
        en: 'Throttle the connection, use a mid-range device, and run the core flow. Most performance problems are visible within two minutes of doing this, and most teams never do it.',
        id: 'Batasi kecepatan koneksi, gunakan perangkat kelas menengah, dan jalankan alur utama. Sebagian besar masalah performa terlihat dalam dua menit, dan sebagian besar tim tidak pernah melakukannya.',
      },
      {
        en: 'Offline-first is not a premium feature in most of the region. It is the baseline for an app people will keep on their home screen.',
        id: 'Offline-first bukan fitur premium di sebagian besar wilayah ini. Itu standar dasar bagi aplikasi yang ingin bertahan di layar utama pengguna.',
      },
    ],
  },
  {
    slug: 'accessibility-is-reach',
    date: '2025-02-19',
    readingTime: 4,
    category: { en: 'Design', id: 'Desain' },
    title: {
      en: 'Accessibility is a reach argument, not a compliance one',
      id: 'Aksesibilitas adalah soal jangkauan, bukan sekadar kepatuhan',
    },
    excerpt: {
      en: 'Contrast, focus states, and honest labels help every user in bright sunlight or a hurry — not only those using assistive technology.',
      id: 'Kontras, focus state, dan label yang jujur membantu semua pengguna di bawah sinar matahari atau saat terburu-buru — bukan hanya pengguna teknologi bantu.',
    },
    body: [
      {
        en: 'Every accessibility fix has a second audience: the person on a cracked screen, on a bus, at 40% battery, trying to finish one task.',
        id: 'Setiap perbaikan aksesibilitas punya audiens kedua: orang dengan layar retak, di dalam bus, dengan baterai 40%, yang berusaha menyelesaikan satu tugas.',
      },
      {
        en: 'That framing tends to get the work funded when the compliance framing does not.',
        id: 'Sudut pandang itu biasanya berhasil mendapatkan pendanaan ketika argumen kepatuhan gagal.',
      },
    ],
  },
  {
    slug: 'scope-drift-early-signals',
    date: '2025-01-15',
    readingTime: 6,
    category: { en: 'Delivery', id: 'Pengiriman' },
    title: {
      en: 'Three early signals that a project is drifting',
      id: 'Tiga tanda awal sebuah proyek mulai melenceng',
    },
    excerpt: {
      en: 'Scope rarely explodes overnight. It leaks, and the leak is visible weeks before the deadline moves.',
      id: 'Ruang lingkup jarang meledak dalam semalam. Ia bocor perlahan, dan kebocorannya terlihat berminggu-minggu sebelum tenggat bergeser.',
    },
    body: [
      {
        en: 'First: decisions get deferred to "the next meeting" more than once. Second: the demo starts covering what was built rather than what was asked for. Third: estimates stop changing even as requirements do.',
        id: 'Pertama: keputusan ditunda ke "rapat berikutnya" lebih dari sekali. Kedua: demo mulai membahas apa yang dibangun, bukan apa yang diminta. Ketiga: estimasi berhenti berubah meskipun kebutuhan terus berubah.',
      },
      {
        en: 'Each of those is cheap to correct in week three and expensive in week eleven.',
        id: 'Masing-masing murah untuk dikoreksi di minggu ketiga dan mahal di minggu kesebelas.',
      },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);

export const formatDate = (iso: string, lang: 'en' | 'id') =>
  new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T00:00:00Z`));
