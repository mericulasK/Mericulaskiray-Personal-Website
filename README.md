# Meriç Ulaş Kıray - Personal Website Protocol 

Bir Full Stack Developer / Software Engineer kişisel web sitesini **dünya standartlarında**
inşa etmek için hazırlanmış, tek dosyalık interaktif araştırma atlası + 16 parça kurumsal
mimari dokümantasyonu.

## Bu Klasörde Ne Var?

```
Personal_Digital_HQ_Atlas/
├── Personal_Digital_HQ_Atlas.html   ← Çift tıkla aç, her tarayıcıda çalışır (build yok, sunucu yok)
├── docs/                             ← 16 mimari doküman (aynı içerik, dosya olarak da mevcut)
│   ├── PROJECT_VISION.md
│   ├── PRD.md
│   ├── SITE_MAP.md
│   ├── DESIGN_SYSTEM.md
│   ├── UI_UX_GUIDE.md
│   ├── ANIMATION_GUIDE.md
│   ├── TECH_STACK.md
│   ├── DATABASE_DESIGN.md
│   ├── API_SPECIFICATION.md
│   ├── ADMIN_PANEL.md
│   ├── SEO_STRATEGY.md
│   ├── CONTENT_STRATEGY.md
│   ├── DEPLOYMENT.md
│   ├── ROADMAP.md
│   ├── RESEARCH_SYNTHESIS.md         ← 100+ site / 12 kategori araştırma sentezi + $10K Checklist
│   └── PLAYGROUND_GUIDE.md           ← Mini oyunların tasarım gerekçesi
└── README.md                         ← Bu dosya
```

Doküman içeriği hem `docs/*.md` dosyalarında hem de HTML dosyasının içindeki
**Doküman Arşivi** sekmesinde birebir aynıdır — HTML sürümü görüntüleme/indirme
kolaylığı, `.md` dosyaları ise doğrudan bir Git deposuna veya Notion/Obsidian'a
taşımanız için.

## Nasıl Açılır?

`Personal_Digital_HQ_Atlas.html` dosyasına çift tıklayın. İnternet bağlantısı yalnızca
Google Fonts + GSAP + Three.js CDN'lerini yüklemek için kullanılır (üçü de yalnızca
görsel/estetik iyileştirme amaçlıdır — dosya bağlantı olmadan da çalışmaya devam eder,
yalnızca yazı tipleri sistem fontuna düşer ve Oyun Alanı'ndaki 3B oyun devre dışı kalır).

## Neler İçeriyor?

- **14 Araştırma Cildi** — Hall of Fame incelemesi, Hero/Cursor/Scroll/GSAP/Three.js
  teknikleri, proje vitrini, blog, dashboard, responsive/erişilebilirlik, tipografi/renk,
  nihai mimari, .NET 10 + Next.js 16 yazılım mimarisi ve **Cilt 14: Oyun Alanı**.
- **Cilt 14 — Oyun Alanı:** iki tam çalışan, sıfır dış varlıklı mini oyun —
  *Kalıntı Avcısı* (Three.js 3B keşif) ve *Şifre Terminali* (yazma hızı testi).
- **Komut Paleti** (`Ctrl/Cmd + K`), **TR/EN dil geçişi**, **ambiyans ses denetleyicisi**,
  **AI Asistan önizlemesi**, özgün "Atlas Protokolü" görsel kimliği (siberpunk/neon **değil**,
  hiçbir film/oyun evrenine ait marka/logo/müzik içermeyen tamamen orijinal bir tasarım dili).
- **16 mimari doküman** — vizyon, ürün gereksinimleri, tasarım sistemi, veritabanı, API,
  SEO/GEO, dağıtım, yol haritası ve araştırma sentezi.

## Bu Sistem Nasıl Kullanılır — 4 Adımlı Brief Yöntemi

Bundan sonra bu Atlas'ı temel alarak gerçek sitenizi (Next.js/React) inşa ederken,
her yeni bölüm veya sayfa için şu 4 adımı izleyin (RESEARCH_SYNTHESIS.md §5'te detaylı):

1. **Markayı Tanımla** — kim olduğun, hedef kitlen, marka karakterin.
2. **Tasarım Dilini Belirle** — renk paleti, tipografi, referans siteler (bkz. DESIGN_SYSTEM.md).
3. **Sayfa Deneyimini Planla** — bölüm yapısı, 3B/video kullanımı, scroll/hover, CTA'lar.
4. **Teknik Beklentileri Yaz** — teknolojiler, responsive kurallar, performans hedefleri,
   kaçınılması gerekenler (bkz. TECH_STACK.md, PRD.md §4).

## Bu Dosya vs. Gerçek Üretim Sitesi

Bu HTML dosyası bilinçli olarak **tek dosya, sıfır bağımlılık, build'siz** tutulmuştur —
amacı bir referans/prototip atlası olmaktır. Gerçek üretim siteniz `TECH_STACK.md`'de
tarif edilen Next.js 16 + ASP.NET Core .NET 10 mimarisiyle inşa edilecektir; bu HTML'deki
her bileşen (imleç, komut paleti, oyun motoru, i18n) doğrudan React bileşenlerine
çevrilebilecek şekilde, bilinçli olarak bileşen sınırlarına göre yazılmıştır.

---

*Kaynaklar: kullanıcı tarafından paylaşılan araştırma oturumları (100+ site / 12 kategori),
$10K Website Checklist (Metics Media), umutkorkmaz.net canlı incelemesi ve doğrudan
verilen tasarım talimatları. Hiçbir telifli marka, logo veya müzik kullanılmamıştır.*
