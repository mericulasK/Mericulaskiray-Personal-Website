/* ==========================================================================
   THE SANCTUM CODEX — 50+ LANGUAGE INTERNATIONALIZATION ENGINE
   Meriç Ulaş Kıray · Senior Full Stack Developer & Software Engineer
   ========================================================================== */

const i18nLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文 (简体)', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sr', name: 'Српски', flag: '🇷🇸' },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
  { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
  { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
  { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
  { code: 'kk', name: 'Қазақша', flag: '🇰🇿' },
  { code: 'uz', name: "O'zbekcha", flag: '🇺🇿' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭' }
];

const translations = {
  en: {
    navAbout: "About Sanctum",
    navProjects: "Artifacts",
    navSkills: "Tech Matrix",
    navExperience: "Chronicles",
    navSanctum: "Games Sanctum",
    navContact: "Initiate Contact",
    statusBadge: "Available for Full-Stack & Software Engineering Roles",
    heroTitle: "Architect of High-Performance Systems & Digital Realms",
    heroSubtitle: "Merging engineering precision with dark sci-fi & high fantasy aesthetics",
    heroDesc: "I build enterprise .NET Core, React, and Node.js solutions designed for sub-second performance, bulletproof reliability, and unforgettable visual experiences.",
    btnExplore: "Explore Sanctum",
    btnContact: "Contact Architect",
    statExp: "Hands-on Experience",
    statProjects: "Enterprise Projects",
    statUptime: "System Uptime Goal",
    aboutTitle: "The Architect's Vision",
    aboutTag: "I · FOUNDATION",
    aboutText1: "I am Meriç Ulaş Kıray, a Full Stack Developer and Software Engineer trained under the BilgeAdam BOOST program. My passion lies in crafting complex web applications, backend APIs, microservices, and interactive web experiences.",
    aboutText2: "Grounded in SOLID principles, layered architecture, and scalable design patterns, I bridge the gap between heavy enterprise backend logic (.NET Core, Express) and cutting-edge frontend interfaces (React, TypeScript, Three.js).",
    codexTitle: "Architect Identification",
    codexRole: "Role",
    codexRoleVal: "Full Stack Developer & Software Developer",
    codexLocation: "Location",
    codexLocVal: "Lüleburgaz / Kırklareli, Turkey",
    codexEducation: "Education",
    codexEduVal: "BilgeAdam BOOST & Kırklareli University",
    codexLanguages: "Spoken",
    codexLangVal: "Turkish (Native), English (B2), German (A2)",
    projectsTitle: "Masterwork Artifacts",
    projectsTag: "II · ARTIFACTS",
    skillsTitle: "Tech Matrix & Skill Arsenal",
    skillsTag: "III · MATRIX",
    timelineTitle: "Chronicles of Journey",
    timelineTag: "IV · CHRONICLES",
    gamesTitle: "Interactive Arcade Sanctum",
    gamesTag: "V · SANCTUM",
    contactTitle: "Transmit Signal",
    contactTag: "VI · SIGNAL",
    footerCopy: "© 2026 Meriç Ulaş Kıray. Built for Awwwards Excellence & $10K Standards."
  },
  tr: {
    navAbout: "Hakkımda",
    navProjects: "Projeler",
    navSkills: "Yetenekler",
    navExperience: "Deneyim",
    navSanctum: "Oyun Alanı",
    navContact: "İletişim",
    statusBadge: "Full-Stack & Yazılım Mühendisliği Pozisyonları İçin Müsait",
    heroTitle: "Yüksek Performanslı Sistemlerin ve Dijital Dünyaların Mimarı",
    heroSubtitle: "Mühendislik hassasiyetini karanlık sci-fi ve epik fantezi estetiğiyle harmanlıyorum",
    heroDesc: "Milisaniyeler mertebesinde performans, sarsılmaz güvenilirlik ve unutulmaz görsel deneyimler sunan kurumsal .NET Core, React ve Node.js çözümleri geliştiriyorum.",
    btnExplore: "Sistemi Keşfet",
    btnContact: "İletişime Geç",
    statExp: "Uygulamalı Deneyim",
    statProjects: "Kurumsal Projeler",
    statUptime: "Sistem Çalışma Süresi",
    aboutTitle: "Mimarın Vizyonu",
    aboutTag: "I · TEMEL",
    aboutText1: "Ben Meriç Ulaş Kıray; BilgeAdam BOOST Yıldız Yazılımcı Yetiştirme Programı mezunu Full Stack Developer ve Yazılım Mühendisiyim. Karmaşık web uygulamaları, backend API'leri, mikroservisler ve etkileşimli dijital deneyimler üretme tutkusuna sahibim.",
    aboutText2: "SOLID prensipleri, katmanlı mimari ve ölçeklenebilir tasarım desenleri ışığında; .NET Core ve Express ile backend mantığı kurarken, React, TypeScript ve Three.js ile kullanıcı dostu arayüzler geliştiriyorum.",
    codexTitle: "Geliştirici Kimlik Kartı",
    codexRole: "Unvan",
    codexRoleVal: "Full Stack Developer & Software Developer",
    codexLocation: "Konum",
    codexLocVal: "Lüleburgaz / Kırklareli, Türkiye",
    codexEducation: "Eğitim",
    codexEduVal: "BilgeAdam BOOST & Kırklareli Üniversitesi",
    codexLanguages: "Bildiği Diller",
    codexLangVal: "Türkçe (Ana Dil), İngilizce (B2), Almanca (A2)",
    projectsTitle: "Önemli Projeler ve Vitrin",
    projectsTag: "II · ÜRETİMLER",
    skillsTitle: "Teknoloji Matrisi ve Yetenekler",
    skillsTag: "III · UZMANLIK",
    timelineTitle: "Kariyer ve Eğitim Yolculuğu",
    timelineTag: "IV · GEÇMİŞ",
    gamesTitle: "İnteraktif Oyun ve Test Alanı",
    gamesTag: "V · DENEYİM",
    contactTitle: "Sinyal Gönder / İletişim",
    contactTag: "VI · BAĞLANTI",
    footerCopy: "© 2026 Meriç Ulaş Kıray. Awwwards mükemmellik standartları ile tasarlanmıştır."
  },
  de: {
    navAbout: "Über mich",
    navProjects: "Projekte",
    navSkills: "Fähigkeiten",
    navExperience: "Erfahrung",
    navSanctum: "Spielplatz",
    navContact: "Kontakt",
    statusBadge: "Verfügbar für Full-Stack & Software Engineering Positionen",
    heroTitle: "Architekt von Hochleistungssystemen & Digitalen Welten",
    heroSubtitle: "Verschmelzung von Ingenieurspräzision mit Sci-Fi & Fantasy-Ästhetik",
    btnExplore: "System Erkunden",
    btnContact: "Kontakt Aufnehmen",
    aboutTitle: "Die Vision des Architekten",
    aboutTag: "I · TEMEL",
    projectsTitle: "Meisterwerke & Vitrine",
    projectsTag: "II · ÜRETİMLER",
    skillsTitle: "Technologiematrix & Fähigkeiten",
    skillsTag: "III · UZMANLIK",
    timelineTitle: "Karriere & Bildungsweg",
    timelineTag: "IV · GEÇMİŞ",
    gamesTitle: "Interaktiver Spielbereich",
    gamesTag: "V · DENEYİM",
    contactTitle: "Signal Senden / Kontakt",
    contactTag: "VI · BAĞLANTI"
  },
  fr: {
    navAbout: "À propos",
    navProjects: "Projets",
    navSkills: "Compétences",
    navExperience: "Expérience",
    navSanctum: "Jeux",
    navContact: "Contact",
    statusBadge: "Disponible pour les postes de Full-Stack & Génie Logiciel",
    heroTitle: "Architecte de Systèmes Haute Performance & Mondes Numériques",
    heroSubtitle: "Fusion de la précision de l'ingénierie avec l'esthétique sci-fi",
    btnExplore: "Explorer le Système",
    btnContact: "Prendre Contact",
    aboutTitle: "La Vision de l'Architecte",
    aboutTag: "I · TEMEL",
    projectsTitle: "Projets Majeurs & Vitrine",
    projectsTag: "II · ÜRETİMLER",
    skillsTitle: "Matrice de Compétences",
    skillsTag: "III · UZMANLIK",
    timelineTitle: "Parcours Professionnel",
    timelineTag: "IV · GEÇMİŞ",
    gamesTitle: "Espace Interactif & Jeux",
    gamesTag: "V · DENEYİM",
    contactTitle: "Envoyer un Signal / Contact",
    contactTag: "VI · BAĞLANTI"
  },
  es: {
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navExperience: "Experiencia",
    navSanctum: "Juegos",
    navContact: "Contacto",
    statusBadge: "Disponible para Roles de Full-Stack e Ingeniería de Software",
    heroTitle: "Arquitecto de Sistemas de Alto Rendimiento y Mundos Digitales",
    heroSubtitle: "Fusión de precisión de ingeniería con estética sci-fi y fantasía",
    btnExplore: "Explorar Sistema",
    btnContact: "Iniciar Contacto",
    aboutTitle: "La Visión del Arquitecto",
    aboutTag: "I · TEMEL",
    projectsTitle: "Proyectos Principales y Escaparate",
    projectsTag: "II · ÜRETİMLER",
    skillsTitle: "Matriz Tecnológica y Habilidades",
    skillsTag: "III · UZMANLIK",
    timelineTitle: "Trayectoria Profesional",
    timelineTag: "IV · GEÇMİŞ",
    gamesTitle: "Área Interactiva de Juegos",
    gamesTag: "V · DENEYİM",
    contactTitle: "Enviar Señal / Contacto",
    contactTag: "VI · BAĞLANTI"
  },
  az: {
    navAbout: "Haqqımda",
    navProjects: "Layihələr",
    navSkills: "Biliklər",
    navExperience: "Təcrübə",
    navSanctum: "Oyun Sahəsi",
    navContact: "Əlaqə",
    statusBadge: "Full-Stack və Proqram Təminatı Mühəndisliyi Vəzifələri Üçün Əlverişlidir",
    heroTitle: "Yüksək Məhsuldarlıqlı Sistemlərin və Rəqəmsal Dünyaların Memarı",
    heroSubtitle: "Mühəndislik dəqiqliyini sci-fi və fantastika estetikası ilə birləşdirirəm",
    btnExplore: "Sistemi Kəşf Et",
    btnContact: "Əlaqə Qur",
    aboutTitle: "Memarın Vizyonu",
    aboutTag: "I · TEMEL",
    projectsTitle: "Əsas Layihələr və Vitrin",
    projectsTag: "II · ÜRETİMLER",
    skillsTitle: "Texnologiya Matrisi və Bacarıqlar",
    skillsTag: "III · UZMANLIK",
    timelineTitle: "Karyera və Təhsil Yolu",
    timelineTag: "IV · GEÇMİŞ",
    gamesTitle: "İnteraktiv Oyun Sahəsi",
    gamesTag: "V · DENEYİM",
    contactTitle: "Siqnal Göndər / Əlaqə",
    contactTag: "VI · BAĞLANTI"
  }
};

let currentLang = 'tr';

function setLanguage(langCode) {
  currentLang = langCode;
  localStorage.setItem('sanctum_lang', langCode);
  
  // Safe fallback dictionary merge
  const baseDict = translations['tr'] || {};
  const fallbackDict = translations['en'] || {};
  const targetDict = translations[langCode] || {};

  const dict = Object.assign({}, baseDict, fallbackDict, targetDict);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update button label
  const langBtnText = document.getElementById('current-lang-text');
  if (langBtnText) {
    const langObj = i18nLanguages.find(l => l.code === langCode) || i18nLanguages[0];
    langBtnText.textContent = `${langObj.flag} ${langObj.code.toUpperCase()}`;
  }

  // Update active state in language modal grid
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('onclick') === `selectLanguage('${langCode}')`) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function initI18n() {
  const saved = localStorage.getItem('sanctum_lang') || 'tr';
  
  // Populate Language Selector Modal
  const grid = document.getElementById('lang-grid');
  if (grid) {
    grid.innerHTML = i18nLanguages.map(l => `
      <button class="lang-btn ${l.code === saved ? 'active' : ''}" onclick="selectLanguage('${l.code}')">
        <span>${l.flag} ${l.name}</span>
        <span style="opacity:0.6">${l.code.toUpperCase()}</span>
      </button>
    `).join('');
  }

  setLanguage(saved);
}

function selectLanguage(code) {
  setLanguage(code);
  closeModal('lang-modal');
}
