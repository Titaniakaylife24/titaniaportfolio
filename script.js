/**
 * ============================================================================
 * TITANIA KAYLIFE PUTRI — PERSONAL PORTFOLIO JAVASCRIPT ENGINE
 * Modern Creative Developer & Interactive Personal Brand
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL TRANSLATION DICTIONARY (ID & EN)
     ========================================================================== */
  const translations = {
    en: {
      // Nav
      nav_home: "Home",
      nav_about: "About",
      nav_education: "Education",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_contact: "Contact",
      nav_cta: "Let's Talk",

      // Hero
      hero_status: "Available for Collaboration & Internship Opportunities",
      hero_greeting: "Hello world, I'm",
      hero_typing_prefix: "Passionate",
      hero_bio: "Designing thoughtful digital experiences through <strong>Fullstack Web Development</strong>, <strong>System Architecture</strong>, and <strong>UI/UX Design</strong>. Passionate about building modern, human-centered applications that are visually captivating, intuitive, and high-performing.",
      hero_btn_work: "Explore Projects",
      hero_btn_cv: "Download CV",
      hero_btn_connect: "Let's Connect",
      stat_projects: "Completed Projects",
      stat_gpa: "Current GPA / 4.00",
      stat_roles: "Leadership Roles",
      stat_passion: "Commitment & Passion",
      hero_pill_title: "Information Systems",
      hero_pill_sub: "UPN \"Veteran\" Jawa Timur",

      // Typewriter phrases
      typewriter_words: [
        "Fullstack Web Developer",
        "UI/UX Designer",
        "Information Systems Student",
        "Creative Digital Builder",
        "Problem Solver"
      ],

      // About
      about_tag: "About Me",
      about_title_span: "Designing Experiences",
      about_title_rest: "with Logic & Creativity",
      about_subtitle: "Bridging technical engineering and human-centered design to craft impactful digital solutions.",
      about_heading_hi: "Information Systems Student",
      about_heading_sub: "Creative Developer",
      about_p1: "I am an undergraduate Information Systems student at <strong>UPN “Veteran” Jawa Timur</strong> with an unwavering passion for fullstack web development, modern system architectures, and UI/UX product design.",
      about_p2: "My journey combines analytical rigor with aesthetic empathy. I love turning complex business workflows into seamless, responsive, and visually delightful web applications. From architectural database design to micro-interactions in Figma, I thrive at the intersection where code meets human emotion.",
      about_p3: "Beyond engineering, I actively participate in leadership and technological organizations, sharpening my abilities in cross-functional collaboration, project management, and strategic problem-solving.",
      about_point_1: "Fast Learner & Adaptive",
      about_point_2: "Detail-Oriented Design",
      about_point_3: "Strong Team Collaboration",
      about_point_4: "Modern Tech Enthusiast",
      pillar_1_title: "Fullstack Web Development",
      pillar_1_desc: "Building accessible, responsive end-to-end web applications combining dynamic frontends with robust backends using Laravel, Vue.js, Tailwind CSS, PHP, JavaScript, MySQL, and PostgreSQL with clean code standards.",
      pillar_2_title: "UI/UX & Interactive Design",
      pillar_2_desc: "Crafting user journeys, wireframes, high-fidelity prototypes, and design systems in Figma that prioritize accessibility, aesthetic clarity, and intuitive interaction.",
      pillar_3_title: "Business & Systems Analysis",
      pillar_3_desc: "Analyzing business requirements, mapping user workflows, and structuring system architectures that directly solve real-world user and business pain points.",

      // Education
      edu_tag: "Academic Background",
      edu_title_span: "Education &",
      edu_title_rest: "Milestones",
      edu_subtitle: "Strong foundation in information systems, computer networking, and software engineering principles.",
      edu_status_active: "Current Degree",
      edu_univ_degree: "Bachelor of Information Systems",
      edu_univ_desc: "Focusing on software development, database architecture, user-centered interface design, business intelligence, and enterprise system analysis.",
      edu_gpa_label: "Current Academic GPA:",
      edu_status_grad: "Graduated",
      edu_voc_degree: "Computer & Network Engineering",
      edu_voc_desc: "Specialized in network infrastructure, computer hardware diagnostics, operating systems installation, and foundational software logic.",
      edu_voc_dept: "Department of Science & Information Technology",

      // Experience
      exp_tag: "Track Record",
      exp_title_span: "Experience &",
      exp_title_rest: "Organizational Leadership",
      exp_subtitle: "Growing through technical responsibilities, creative marketing, and campus student leadership.",
      filter_all: "All Experience",
      filter_work: "Professional & Internships",
      filter_org: "Leadership & Organizations",
      exp_fullstack_role: "Fullstack Web Developer Internship",
      exp_fullstack_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Developed Majadigi Checker, a web-based system for checking and monitoring Majadigi services using Laravel, Vue.js, and PostgreSQL.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Implemented service checking, monitoring, and status management features to support structured service management.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Developed role-based access control and user management features based on different system roles.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Designed responsive user interfaces using Vue.js and integrated the frontend with Laravel and PostgreSQL for data management.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Applied the Scrum methodology throughout the analysis, design, development, and testing phases.</span></li></ul>",
      exp_webcontent_role: "Web Content Staff",
      exp_webcontent_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Maintained website content and improved user interface accessibility through responsive content management.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Optimized website layout and user interface to improve accessibility and user experience.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Handled online registration system management through website platforms.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Collaborated in maintaining informative and responsive web content.</span></li></ul>",
      exp_adminmarketing_role: "Admin Marketing",
      exp_adminmarketing_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Managed digital marketing activities through social media platforms.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Analyzed audience engagement and social media performance insights.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Assisted in online branding and digital campaign optimization.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Supported content planning and online customer interaction strategies.</span></li></ul>",
      exp_itsupport_role: "IT Support Intern",
      exp_itsupport_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Assembled and configured PC and laptop hardware based on user requirements.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Performed hardware maintenance, troubleshooting, and system diagnostics.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Assisted in identifying technical issues and improving device performance.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Conducted software installation and basic network configuration support.</span></li></ul>",
      exp_cader_role: "Staff of Cader Formation",
      exp_cader_desc: "Drove new student regeneration programs, organized team-building workshops, and facilitated organizational communication within the Information Systems Student Association.",
      exp_edisi_role: "Project Leader — EDISI 2025",
      exp_edisi_desc: "Directed cross-divisional committee workflows, budget scheduling, and end-to-end event execution to achieve seamless implementation and high participant engagement.",
      exp_army_role: "Head of Publication & Ticketing",
      exp_army_desc: "Oversaw multi-channel event publicity strategies, digital marketing collateral, online ticketing workflows, and customer service for hundreds of audience members.",
      exp_robotics_role: "Secretary of Robotics & Intelligent Systems",
      exp_robotics_desc: "Managing organizational documentation, executive meeting logistics, internal communications, and supporting robotics community technology workshops and competitions.",
      exp_1_role: "Fullstack Web Developer Internship",
      exp_2_role: "Web Content Staff",
      exp_3_role: "Admin Marketing",
      exp_4_role: "IT Support Intern",
      exp_5_role: "Staff of Cader Formation",
      exp_6_role: "Project Leader — EDISI 2025",
      exp_7_role: "Secretary of Robotics & Intelligent Systems",

      // Projects
      proj_tag: "Portfolio Showcase",
      proj_title_span: "Selected Projects &",
      proj_title_rest: "Digital Innovations",
      proj_subtitle: "A curated collection of web apps, mobile solutions, and UI/UX prototypes crafted with modern technologies.",
      filter_proj_all: "All Projects",
      filter_proj_web: "Web Development",
      filter_proj_mobile: "Mobile Apps",
      filter_proj_design: "UI/UX Design",
      filter_proj_desktop: "Desktop Systems",
      btn_view_details: "View Details",
      proj_flomartmobile_desc: "Mobile plant marketplace developed using Flutter featuring smooth catalog exploration, cart management, and modern responsive user interface.",
      proj_flomartweb_desc: "Trust-based plant e-commerce web platform featuring comprehensive botanical data, secure user transactions, and modern responsive design built with Laravel.",
      proj_kokinaja_desc: "Mobile interface design & high-fidelity prototype focused on accessibility, intuitive ordering user flows, and aesthetic visual hierarchy.",
      proj_takakurakit_desc: "Sustainable digital platform prototype supporting the commerce of Takakura composting tools with eco-friendly educational content and engaging UX.",
      proj_jwmarriot_desc: "Desktop reservation and room allocation management software developed in Java GUI with robust MySQL transactional database handling.",
      proj_shuttleclick_desc: "Desktop-based badminton court rental application developed for Sony Dwi Kuncoro Hall featuring court scheduling, booking, and transaction billing.",

      // Skills
      skills_tag: "Technical Arsenal",
      skills_title_span: "Skills &",
      skills_title_rest: "Tech Stack",
      skills_subtitle: "Technologies, frameworks, and design tooling I leverage to build scalable, beautiful digital products.",
      skill_cat_frontend: "Frontend Engineering",
      skill_cat_backend: "Backend & Databases",
      skill_cat_mobile: "Mobile & Desktop",
      skill_cat_design: "UI/UX & Product Design",
      skill_cat_tools: "Workflow & Developer Tools",

      // Contact & Footer
      contact_label: "Let's Connect",
      contact_title_span: "Ready to Collaborate on",
      contact_title_rest: "Impactful Digital Ideas?",
      contact_desc: "Whether you have an internship opportunity, a freelance web or UI/UX project, or simply want to chat about technology — my inbox and channels are always open!",
      contact_status: "Available for new opportunities & collaborations",
      footer_rights: "Designed with Creativity, Simplicity, Passion, and Love.",
      modal_features_title: "Key Features & Highlights:",
      toast_email_copied: "Email copied to clipboard!",
      modal_btn_github: "View GitHub Repo",
      modal_btn_prototype: "Launch Figma Prototype",
      modal_btn_private: "Confidential Project"
    },

    id: {
      // Nav
      nav_home: "Beranda",
      nav_about: "Tentang",
      nav_education: "Pendidikan",
      nav_experience: "Pengalaman",
      nav_projects: "Proyek",
      nav_skills: "Keahlian",
      nav_contact: "Kontak",
      nav_cta: "Hubungi Saya",

      // Hero
      hero_status: "Terbuka untuk Kolaborasi & Peluang Magang",
      hero_greeting: "Halo dunia, saya",
      hero_typing_prefix: "Fokus pada",
      hero_bio: "Membangun pengalaman digital bermakna melalui <strong>Fullstack Web Development</strong>, <strong>Arsitektur Sistem</strong>, dan <strong>UI/UX Design</strong>. Berdedikasi menghadirkan aplikasi modern yang berpusat pada pengguna, memikat secara visual, intuitif, dan berkinerja tinggi.",
      hero_btn_work: "Lihat Proyek",
      hero_btn_cv: "Unduh CV",
      hero_btn_connect: "Mari Terhubung",
      stat_projects: "Proyek Selesai",
      stat_gpa: "IPK Saat Ini / 4.00",
      stat_roles: "Peran Organisasi",
      stat_passion: "Komitmen & Dedikasi",
      hero_pill_title: "Sistem Informasi",
      hero_pill_sub: "UPN \"Veteran\" Jawa Timur",

      // Typewriter phrases
      typewriter_words: [
        "Fullstack Web Developer",
        "UI/UX Designer",
        "Mahasiswa Sistem Informasi",
        "Creative Digital Builder",
        "Problem Solver"
      ],

      // About
      about_tag: "Tentang Saya",
      about_title_span: "Merancang Pengalaman",
      about_title_rest: "dengan Logika & Kreativitas",
      about_subtitle: "Menjembatani rekayasa teknis dan desain berpusat pada manusia untuk menghadirkan solusi digital berdampak nyata.",
      about_heading_hi: "Mahasiswa Sistem Informasi",
      about_heading_sub: "Fullstack Web Developer",
      about_p1: "Saya adalah mahasiswa program sarjana Sistem Informasi di <strong>UPN “Veteran” Jawa Timur</strong> dengan ketertarikan mendalam pada pengembangan web fullstack, arsitektur sistem modern, dan desain produk UI/UX.",
      about_p2: "Perjalanan saya memadukan ketajaman analisis sistem dengan kepekaan estetika visual. Saya senang mentransformasikan alur bisnis yang rumit menjadi aplikasi web yang responsif, rapi, dan nyaman digunakan. Dari perancangan basis data hingga mikro-interaksi di Figma, saya berkembang di titik temu antara kode dan pengalaman manusia.",
      about_p3: "Di luar bidang teknis, saya aktif berkontribusi dalam organisasi kepemimpinan dan komunitas teknologi kampus, mengasah kemampuan komunikasi lintas divisi, manajemen proyek, dan penyelesaian masalah strategis.",
      about_point_1: "Cepat Belajar & Adaptif",
      about_point_2: "Perhatian pada Detail Desain",
      about_point_3: "Kolaborasi Tim yang Solid",
      about_point_4: "Antusias pada Teknologi Modern",
      pillar_1_title: "Pengembangan Web Fullstack",
      pillar_1_desc: "Membangun aplikasi web end-to-end yang responsif dan terintegrasi, memadukan frontend interaktif dengan backend handal memanfaatkan Laravel, Vue.js, Tailwind CSS, PHP, JavaScript, PostgreSQL, dan MySQL.",
      pillar_2_title: "Desain UI/UX & Interaktif",
      pillar_2_desc: "Merancang alur pengguna, wireframe, prototipe interaktif high-fidelity, dan design system di Figma yang memprioritaskan aksesibilitas dan kemudahan interaksi.",
      pillar_3_title: "Analisis Bisnis & Sistem",
      pillar_3_desc: "Menganalisis kebutuhan bisnis, memetakan workflow pengguna, dan menyusun arsitektur sistem yang secara langsung menjawab tantangan nyata bisnis dan pengguna.",

      // Education
      edu_tag: "Latar Belakang Akademik",
      edu_title_span: "Pendidikan &",
      edu_title_rest: "Pencapaian",
      edu_subtitle: "Fondasi kokoh dalam sistem informasi, rekayasa jaringan komputer, dan prinsip rekayasa perangkat lunak.",
      edu_status_active: "Studi Berjalan",
      edu_univ_degree: "S1 Sistem Informasi",
      edu_univ_desc: "Fokus pada pengembangan perangkat lunak, arsitektur basis data, desain antarmuka pengguna, analitika bisnis, dan analisis sistem enterprise.",
      edu_gpa_label: "IPK Akademik Saat Ini:",
      edu_status_grad: "Lulus",
      edu_voc_degree: "Teknik Komputer dan Jaringan",
      edu_voc_desc: "Spesialisasi dalam infrastruktur jaringan komputer, diagnostik perangkat keras PC/laptop, instalasi sistem operasi, dan logika dasar software.",
      edu_voc_dept: "Jurusan Sains & Teknologi Informasi",

      // Experience
      exp_tag: "Rekam Jejak",
      exp_title_span: "Pengalaman &",
      exp_title_rest: "Kepemimpinan Organisasi",
      exp_subtitle: "Tumbuh melalui tanggung jawab teknis, pemasaran digital kreatif, dan kepemimpinan organisasi kemahasiswaan.",
      filter_all: "Semua Pengalaman",
      filter_work: "Profesional & Magang",
      filter_org: "Kepemimpinan & Organisasi",
      exp_fullstack_role: "Fullstack Web Developer Internship",
      exp_fullstack_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Mengembangkan Majadigi Checker, sistem berbasis web untuk pengecekan dan monitoring layanan Majadigi menggunakan Laravel, Vue.js, dan PostgreSQL.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Mengimplementasikan fitur pengecekan, monitoring, dan manajemen status layanan untuk mendukung tata kelola layanan yang terstruktur.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Mengembangkan fitur role-based access control dan manajemen pengguna berdasarkan berbagai peran sistem.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Merancang antarmuka pengguna yang responsif menggunakan Vue.js serta mengintegrasikan frontend dengan Laravel dan PostgreSQL untuk pengelolaan data.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Menerapkan metodologi Scrum di sepanjang tahapan analisis, desain, pengembangan, dan pengujian.</span></li></ul>",
      exp_webcontent_role: "Web Content Staff",
      exp_webcontent_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Mengelola konten website dan meningkatkan aksesibilitas antarmuka pengguna melalui manajemen konten yang responsif.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Mengoptimalkan tata letak website dan antarmuka pengguna untuk meningkatkan aksesibilitas dan pengalaman pengguna.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Menangani pengelolaan sistem pendaftaran online melalui platform website.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Berkolaborasi dalam memelihara konten web yang informatif dan responsif.</span></li></ul>",
      exp_adminmarketing_role: "Admin Marketing",
      exp_adminmarketing_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Mengelola aktivitas pemasaran digital melalui platform media sosial.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Menganalisis interaksi audiens dan wawasan kinerja media sosial.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Membantu branding online dan optimalisasi kampanye digital.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Mendukung perencanaan konten dan strategi interaksi pelanggan secara online.</span></li></ul>",
      exp_itsupport_role: "IT Support Intern",
      exp_itsupport_desc: "<ul class=\"timeline-responsibilities\"><li><i class=\"fa-solid fa-angle-right\"></i><span>Merakit dan mengonfigurasi perangkat keras PC dan laptop berdasarkan kebutuhan pengguna.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Melakukan pemeliharaan perangkat keras, troubleshooting, dan diagnostik sistem.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Membantu mengidentifikasi kendala teknis dan meningkatkan performa perangkat.</span></li><li><i class=\"fa-solid fa-angle-right\"></i><span>Melakukan instalasi perangkat lunak dan dukungan konfigurasi jaringan dasar.</span></li></ul>",
      exp_cader_role: "Staff of Cader Formation",
      exp_cader_desc: "Menggerakkan program kaderisasi dan pembinaan mahasiswa baru, mengorganisasi workshop team building, serta memperlancar komunikasi dalam Himpunan Mahasiswa Sistem Informasi.",
      exp_edisi_role: "Project Leader — EDISI 2025",
      exp_edisi_desc: "Memimpin koordinasi kepanitiaan lintas divisi, manajemen linimasa anggaran, dan eksekusi acara dari awal hingga akhir guna memastikan kelancaran kegiatan.",
      exp_army_role: "Head of Publication & Ticketing",
      exp_army_desc: "Mengelola strategi publikasi acara multi-kanal, desain materi promosi digital, alur ticketing online, dan layanan informasi ratusan penonton.",
      exp_robotics_role: "Secretary of Robotics & Intelligent Systems",
      exp_robotics_desc: "Mengelola administrasi organisasi, jadwal rapat eksekutif, koordinasi komunikasi internal, serta mendukung workshop teknologi dan kompetisi komunitas robotika.",
      exp_1_role: "Fullstack Web Developer Internship",
      exp_2_role: "Web Content Staff",
      exp_3_role: "Admin Marketing",
      exp_4_role: "IT Support Intern",
      exp_5_role: "Staff of Cader Formation",
      exp_6_role: "Project Leader — EDISI 2025",
      exp_7_role: "Secretary of Robotics & Intelligent Systems",

      // Projects
      proj_tag: "Showcase Portofolio",
      proj_title_span: "Proyek Pilihan &",
      proj_title_rest: "Inovasi Digital",
      proj_subtitle: "Koleksi aplikasi web, solusi mobile, dan prototipe UI/UX yang dikembangkan dengan teknologi modern.",
      filter_proj_all: "Semua Proyek",
      filter_proj_web: "Web Development",
      filter_proj_mobile: "Aplikasi Mobile",
      filter_proj_design: "Desain UI/UX",
      filter_proj_desktop: "Sistem Desktop",
      btn_view_details: "Lihat Detail",
      proj_flomartmobile_desc: "Aplikasi mobile marketplace tanaman berbasis Flutter dengan eksplorasi katalog produk interaktif, keranjang belanja, dan UI responsif modern.",
      proj_flomartweb_desc: "Platform web e-commerce jual beli tanaman terpercaya berbasis Laravel dengan data botani lengkap, transaksi aman, dan tampilan responsif.",
      proj_kokinaja_desc: "Desain antarmuka mobile & prototipe interaktif yang memprioritaskan aksesibilitas, alur pemesanan intuitif, dan hierarki visual yang bersih.",
      proj_takakurakit_desc: "Prototipe platform digital berkelanjutan untuk pembelian alat kompos metode Takakura dengan edukasi ramah lingkungan dan pengalaman UX yang memikat.",
      proj_jwmarriot_desc: "Aplikasi desktop reservasi hotel dan manajemen alokasi kamar yang dikembangkan menggunakan Java GUI dan basis data transaksional MySQL.",
      proj_shuttleclick_desc: "Aplikasi desktop penyewaan lapangan bulutangkis untuk Gedung Sony Dwi Kuncoro dengan fitur penjadwalan lapangan, booking, dan transaksi.",

      // Skills
      skills_tag: "Kemampuan Teknis",
      skills_title_span: "Keahlian &",
      skills_title_rest: "Tech Stack",
      skills_subtitle: "Teknologi, framework, dan perangkat desain yang saya gunakan dalam membangun produk digital berkualitas.",
      skill_cat_frontend: "Frontend Engineering",
      skill_cat_backend: "Backend & Basis Data",
      skill_cat_mobile: "Mobile & Desktop",
      skill_cat_design: "UI/UX & Desain Produk",
      skill_cat_tools: "Alat Kerja & Workflow",

      // Contact & Footer
      contact_label: "Mari Terhubung",
      contact_title_span: "Siap Berkolaborasi untuk",
      contact_title_rest: "Mewujudkan Ide Digital?",
      contact_desc: "Apakah Anda memiliki peluang magang, proyek web atau UI/UX freelance, atau sekadar ingin berdiskusi seputar teknologi — pintu komunikasi saya selalu terbuka!",
      contact_status: "Terbuka untuk kolaborasi & peluang karier baru",
      footer_rights: "Dirancang dengan Kreativitas, Kesederhanaan, Semangat, dan Cinta.",
      modal_features_title: "Fitur Utama & Sorotan Proyek:",
      toast_email_copied: "Email berhasil disalin ke clipboard!",
      modal_btn_github: "Buka Repositori GitHub",
      modal_btn_prototype: "Jalankan Prototipe Figma",
      modal_btn_private: "Proyek Privat"
    }
  };

  /* ==========================================================================
     2. PROJECT DATABASE (FOR DYNAMIC MODAL)
     ========================================================================== */
  const projectsData = {
    flomartmobile: {
      title: "FLOMART Mobile App",
      category: "Mobile Application",
      category_id: "Aplikasi Mobile",
      desc_en: "A modern mobile e-commerce platform designed specifically for plant enthusiasts. The application offers seamless plant catalog discovery, real-time search, cart management, and fluid mobile interactions built with Flutter and Firebase.",
      desc_id: "Aplikasi marketplace tanaman berbasis mobile yang dirancang khusus untuk pecinta tanaman. Aplikasi ini menghadirkan eksplorasi katalog tanaman yang lancar, pencarian real-time, manajemen keranjang, serta interaksi mobile yang mulus dengan Flutter dan Firebase.",
      features_en: [
        "Mobile-first intuitive shopping and checkout experience",
        "Rich interactive plant catalog with care guidelines",
        "Real-time state and database integration via Firebase",
        "Polished UI/UX wireframes converted into production Flutter code",
        "Responsive across all screen sizes and mobile aspect ratios"
      ],
      features_id: [
        "Pengalaman belanja mobile-first yang intuitif dan praktis",
        "Katalog tanaman interaktif lengkap dengan petunjuk perawatan",
        "Integrasi basis data dan sinkronisasi real-time dengan Firebase",
        "Desain UI/UX rapi yang diimplementasikan presisi ke Flutter",
        "Responsif di berbagai ukuran layar dan resolusi ponsel"
      ],
      tech: ["Flutter", "Dart", "Firebase", "Figma", "Mobile UI"],
      github: "https://github.com/Titaniakaylife24/FLOMART_mobile.git",
      prototype: null
    },

    flomartweb: {
      title: "FLOMART Web App",
      category: "Full-Stack Web Application",
      category_id: "Aplikasi Web Full-Stack",
      desc_en: "A trust-based e-commerce platform dedicated to botanical commerce. Built with Laravel and MySQL, it features comprehensive botanical information, secure order processing, authentication, and a clean interface styled with Tailwind CSS.",
      desc_id: "Platform web e-commerce jual beli tanaman berbasis kepercayaan. Dibangun dengan framework Laravel dan MySQL, platform ini menyediakan informasi botani mendalam, alur pemesanan aman, autentikasi pengguna, dan tampilan bersih dengan Tailwind CSS.",
      features_en: [
        "Complete plant marketplace and product classification engine",
        "Trust-based transaction workflow ensuring safe plant trading",
        "User authentication, session handling, and role-based access",
        "Administrative dashboard for product inventory & transaction records",
        "Responsive, modern layout crafted with Tailwind CSS and PHP"
      ],
      features_id: [
        "Sistem marketplace tanaman dan klasifikasi produk terlengkap",
        "Alur transaksi aman berbasis kepercayaan penjual dan pembeli",
        "Autentikasi akun, manajemen sesi, dan hak akses bertingkat",
        "Dashboard admin untuk kontrol stok produk dan riwayat transaksi",
        "Tampilan web modern dan responsif dibangun dengan Tailwind CSS & PHP"
      ],
      tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Titaniakaylife24/FLOMART-uas.git",
      prototype: null
    },

    kokinaja: {
      title: "KOK.IN AJA",
      category: "Mobile UI/UX Design & Prototype",
      category_id: "Desain UI/UX & Prototipe Mobile",
      desc_en: "An accessible, user-friendly mobile application prototype crafted in Figma. Developed around modern user flow methodologies, the project focuses on clear information hierarchy, high usability, and frictionless digital ordering.",
      desc_id: "Prototipe aplikasi mobile interaktif dan ramah pengguna yang dirancang di Figma. Berfokus pada metodologi user-centered design, proyek ini menonjolkan hierarki informasi yang jernih, aksesibilitas tinggi, dan pemesanan digital tanpa hambatan.",
      features_en: [
        "In-depth user journey mapping and problem space definition",
        "Comprehensive low-fidelity wireframes to high-fidelity mockups",
        "Interactive clickable prototype with realistic micro-animations",
        "Harmonious typography scale and accessible color contrasts",
        "Component-based Figma design system with auto-layout"
      ],
      features_id: [
        "Pemetaan user journey mendalam dan analisis kebutuhan pengguna",
        "Alur komprehensif dari wireframe sketsa hingga mockup high-fidelity",
        "Prototipe interaktif dengan animasi transisi yang natural",
        "Skala tipografi proporsional dengan kontras warna aksesibel",
        "Design system berbasis komponen modular dan auto-layout di Figma"
      ],
      tech: ["Figma", "UI Design", "UX Research", "Wireframing", "Interactive Prototyping"],
      github: null,
      prototype: "https://www.figma.com/design/2ygeSSZN2QS7oXkyHI7Q4z/KOK.IN-AJA?node-id=1031-5071&t=XGHMH2md9aGjb34c-1"
    },

    takakurakit: {
      title: "TakakuraKit.id",
      category: "Sustainable Digital Platform Prototype",
      category_id: "Prototipe Platform Digital Berkelanjutan",
      desc_en: "A sustainable digital platform designed to encourage domestic composting using the renowned Takakura method. Combines educational content, community composting guides, and a streamlined marketplace for starter kits.",
      desc_id: "Platform digital berkelanjutan yang dirancang untuk menggalakkan pengelolaan sampah organik rumah tangga melalui metode Takakura. Memadukan materi edukasi interaktif, panduan kompos, dan marketplace pembelian starter kit.",
      features_en: [
        "Educational onboarding explaining the biological Takakura composting method",
        "Clean e-commerce interface for ordering composting kits and microbial starters",
        "Eco-friendly visual design language reflecting sustainability and nature",
        "Interactive web prototype created with comprehensive Figma components",
        "Engaging layout built to educate and convert environmentally conscious citizens"
      ],
      features_id: [
        "Onboarding edukatif yang menjelaskan tahapan metode pengomposan Takakura",
        "Antarmuka e-commerce terstruktur untuk pemesanan starter kit dan bakteri pengurai",
        "Bahasa visual bernuansa alam yang mencerminkan keberlanjutan lingkungan",
        "Prototipe web interaktif lengkap menggunakan komponen modular Figma",
        "Tata letak menarik untuk memotivasi gaya hidup minim sampah organik"
      ],
      tech: ["Figma", "UI Design", "UX Research", "Design System", "Sustainable Tech"],
      github: null,
      prototype: "https://www.figma.com/proto/kudJYdY3MoGceI4gZfTTaO/TakakuraKit.id?page-id=0%3A1&node-id=2-2&viewport=-8543%2C-12177%2C0.51&t=eLNB44dx2LDWRn1N-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1"
    },

    jwmarriot: {
      title: "JW Marriott System",
      category: "Desktop Reservation Software",
      category_id: "Perangkat Lunak Reservasi Desktop",
      desc_en: "A desktop-based hotel reservation management system engineered for front-office hospitality operations. Facilitates customer check-in, room category allocation, booking scheduling, and MySQL transactional data handling.",
      desc_id: "Sistem aplikasi desktop manajemen reservasi hotel yang dirancang untuk operasional front office perhotelan. Memfasilitasi check-in pelanggan, alokasi tipe kamar, penjadwalan pemesanan, dan pencatatan transaksi terintegrasi MySQL.",
      features_en: [
        "Full CRUD functionality for customer profiles and reservation records",
        "Room status tracking with real-time vacancy inspection",
        "Relational MySQL database integration with data consistency guarantees",
        "Intuitive desktop GUI constructed using NetBeans and Java Swing",
        "Transaction reporting and billing generation capabilities"
      ],
      features_id: [
        "Fungsionalitas CRUD lengkap untuk data pelanggan dan catatan reservasi",
        "Pemantauan status kamar dengan pengecekan ketersediaan real-time",
        "Integrasi basis data relasional MySQL dengan validasi data",
        "Tampilan GUI desktop praktis dibangun dengan Java Swing & NetBeans",
        "Kemampuan pelaporan transaksi dan rekapitulasi data pembayaran"
      ],
      tech: ["Java", "Java Swing", "MySQL", "NetBeans IDE", "Desktop App"],
      github: "https://github.com/Titaniakaylife24/JW-Marriot.git",
      prototype: null
    },

    shuttleclick: {
      title: "ShuttleClick",
      category: "Sports Facility Desktop System",
      category_id: "Sistem Desktop Fasilitas Olahraga",
      desc_en: "A dedicated desktop booking and court scheduling software developed for the Sony Dwi Kuncoro Badminton Hall. Features real-time slot reservation, payment logging, and administrative oversight.",
      desc_id: "Aplikasi desktop penjadwalan dan penyewaan lapangan bulutangkis yang dikembangkan untuk Gedung Bulutangkis Sony Dwi Kuncoro. Dilengkapi fitur reservasi jadwal, pencatatan transaksi kasir, dan rekapitulasi operasional.",
      features_en: [
        "Interactive court schedule matrix preventing double-booking conflicts",
        "Direct point-of-sale transaction registration and booking confirmation",
        "Relational database storage powered by MySQL",
        "Structured Windows Forms interface with responsive keyboard shortcuts",
        "Comprehensive administrative dashboard for operational staff"
      ],
      features_id: [
        "Matriks jadwal lapangan interaktif untuk mencegah bentrok jadwal booking",
        "Pencatatan transaksi langsung kasir dan bukti konfirmasi reservasi",
        "Penyimpanan data relasional aman menggunakan MySQL",
        "Antarmuka Windows Forms yang terstruktur dan mudah dioperasikan staf",
        "Dashboard administrasi komprehensif untuk pengelola gedung"
      ],
      tech: ["VB .NET", "MySQL", "Windows Forms", "Visual Studio", "Desktop System"],
      github: null,
      prototype: null,
      isPrivate: true
    }
  };

  /* ==========================================================================
     3. STATE MANAGEMENT
     ========================================================================== */
  let currentLang = localStorage.getItem('titania_lang') || 'en';
  let currentTheme = localStorage.getItem('titania_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  let currentActiveProject = null;

  /* ==========================================================================
     4. DOM CACHE
     ========================================================================== */
  const htmlRoot = document.documentElement;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const currentLangText = document.getElementById('currentLangText');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const siteHeader = document.getElementById('siteHeader');
  const desktopNavLinks = document.querySelectorAll('.nav-menu .nav-link');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const menuToggleIcon = document.getElementById('menuToggleIcon');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-links .mobile-link');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const typingElement = document.getElementById('hero-typing');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Modal elements
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTech = document.getElementById('modalTech');
  const modalActions = document.getElementById('modalActions');

  /* ==========================================================================
     5. THEME ENGINE
     ========================================================================== */
  function applyTheme(theme) {
    currentTheme = theme;
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('titania_theme', theme);

    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  /* ==========================================================================
     6. BILINGUAL ENGINE
     ========================================================================== */
  function applyLanguage(lang) {
    currentLang = lang;
    htmlRoot.setAttribute('lang', lang);
    localStorage.setItem('titania_lang', lang);

    if (currentLangText) {
      currentLangText.textContent = lang === 'en' ? 'EN' : 'ID';
    }

    const dict = translations[lang] || translations.en;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update Typewriter phrases
    initTypewriter(dict.typewriter_words);

    // Refresh Project Modal if currently open
    if (currentActiveProject && projectModal.classList.contains('active')) {
      renderProjectModal(currentActiveProject);
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'id' : 'en';
      applyLanguage(nextLang);
    });
  }

  /* ==========================================================================
     7. TYPEWRITER EFFECT
     ========================================================================== */
  let typeTimeout = null;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function initTypewriter(wordsList) {
    if (!typingElement) return;
    if (typeTimeout) clearTimeout(typeTimeout);

    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typingElement.textContent = '';

    function typeLoop() {
      const currentWord = wordsList[wordIndex % wordsList.length];
      const typingSpeed = isDeleting ? 40 : 80;

      if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          typeTimeout = setTimeout(typeLoop, 2000);
          return;
        }
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex++;
          typeTimeout = setTimeout(typeLoop, 400);
          return;
        }
      }

      typeTimeout = setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
  }

  /* ==========================================================================
     8. SCROLLSPY, HEADER BLUR & PROGRESS BAR
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header Blur & Compact
    if (scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Scroll Progress Bar
    if (scrollProgressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgressBar.style.width = `${progress}%`;
    }

    // Back to Top Button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Scrollspy Active Nav Links
    let activeId = 'home';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        activeId = sec.getAttribute('id');
      }
    });

    desktopNavLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileNavLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     9. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  if (mobileToggle && mobileNavDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = mobileNavDrawer.classList.toggle('active');
      menuToggleIcon.className = isActive ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    // Close when clicking any nav link
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        menuToggleIcon.className = 'fa-solid fa-bars';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileNavDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileNavDrawer.classList.remove('active');
        menuToggleIcon.className = 'fa-solid fa-bars';
      }
    });
  }

  /* ==========================================================================
     10. CATEGORY FILTERING (PROJECTS & EXPERIENCE)
     ========================================================================== */
  // Project category filters
  const projFilterBtns = document.querySelectorAll('[data-proj-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  projFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      projFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-proj-filter');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-proj-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Experience type filters
  const expFilterBtns = document.querySelectorAll('[data-exp-filter]');
  const expItems = document.querySelectorAll('.timeline-item');

  expFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      expFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-exp-filter');

      expItems.forEach((item) => {
        const type = item.getAttribute('data-exp-type');
        if (filter === 'all' || type === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 20);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ==========================================================================
     11. INTERACTIVE PROJECT DETAILS MODAL
     ========================================================================== */
  function renderProjectModal(projectKey) {
    const data = projectsData[projectKey];
    if (!data) return;

    currentActiveProject = projectKey;
    const isIndo = currentLang === 'id';
    const dict = translations[currentLang] || translations.en;

    modalSubtitle.textContent = isIndo ? (data.category_id || data.category) : data.category;
    modalTitle.textContent = data.title;
    modalDescription.textContent = isIndo ? data.desc_id : data.desc_en;

    // Features
    const features = isIndo ? data.features_id : data.features_en;
    modalFeatures.innerHTML = features
      .map((f) => `<li><i class="fa-solid fa-circle-check"></i><span>${f}</span></li>`)
      .join('');

    // Tech Pills
    modalTech.innerHTML = data.tech
      .map((t) => `<span class="project-tech-pill">${t}</span>`)
      .join('');

    // Action buttons
    let actionsHtml = '';
    if (data.github) {
      actionsHtml += `
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i>
          <span>${dict.modal_btn_github}</span>
        </a>
      `;
    }

    if (data.prototype) {
      actionsHtml += `
        <a href="${data.prototype}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-figma"></i>
          <span>${dict.modal_btn_prototype}</span>
        </a>
      `;
    }

    if (data.isPrivate) {
      actionsHtml += `
        <span class="btn btn-secondary btn-sm" style="cursor: default; opacity: 0.85;">
          <i class="fa-solid fa-lock"></i>
          <span>${dict.modal_btn_private}</span>
        </span>
      `;
    }

    modalActions.innerHTML = actionsHtml;
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
    currentActiveProject = null;
  }

  // Open modal on View Details button click
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.project-btn-detail');
    if (detailBtn) {
      const projectKey = detailBtn.getAttribute('data-project');
      renderProjectModal(projectKey);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    // Close on backdrop overlay click
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    });
  }

  /* ==========================================================================
     12. COPY EMAIL TO CLIPBOARD WITH TOAST FEEDBACK
     ========================================================================== */
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'titaniakaylifeputri@gmail.com';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(showToast).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }

      function fallbackCopy() {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
          document.execCommand('copy');
          showToast();
        } catch (err) {
          console.error('Could not copy email', err);
        }
        document.body.removeChild(tempInput);
      }

      function showToast() {
        const dict = translations[currentLang] || translations.en;
        if (toastMessage) {
          toastMessage.textContent = dict.toast_email_copied;
        }
        if (toastNotification) {
          toastNotification.classList.add('active');
          setTimeout(() => {
            toastNotification.classList.remove('active');
          }, 3200);
        }
      }
    });
  }

  /* ==========================================================================
     13. SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.fade-in-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((el) => el.classList.add('active-reveal'));
  }

  /* ==========================================================================
     14. INITIALIZATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    onScroll();
  });

})();
