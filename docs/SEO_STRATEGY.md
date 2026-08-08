# SEO_STRATEGY.md — SEO & GEO Stratejisi

## 1. JSON-LD (Person / ProfilePage)
Kişi ve profil şeması, hem klasik arama motorları hem de LLM tabanlı "generative engine" tarayıcıları (ChatGPT, Perplexity, Google AI Overviews) için yapılandırılmış veri sağlar.

## 2. GEO (Generative Engine Optimization)
- Net, kendi kendini açıklayan başlıklar (LLM özetleme için).
- /llms.txt dosyası: sitenin AI ajanlarına kendini tanıttığı basit metin dosyası.
- Yanıltıcı/aşırı-optimize edilmiş anahtar kelime yığını yok — GEO, klasik SEO'nun aksine "makine tarafından okunabilir dürüstlük" ister.

## 3. Hreflang & Uluslararasılaştırma
Her dil varyantı için <link rel="alternate" hreflang="..">; x-default İngilizce sürüme işaret eder.

## 4. Core Web Vitals İzleme
Vercel Analytics / Web Vitals API ile gerçek kullanıcı verisi (RUM) toplanır; LCP/INP/CLS aylık trend raporu ROADMAP gözden geçirmelerine girdi sağlar.

## 5. Dynamic OG & Sitemap
Her proje/blog için 1200×630 dinamik OG görseli; /sitemap.xml 24 saatte bir yeniden üretilir; robots.txt AI-crawler'ları (GPTBot, ClaudeBot vb.) bilinçli olarak izin verir.