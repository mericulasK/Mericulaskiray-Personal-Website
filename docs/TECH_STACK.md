# TECH_STACK.md — Teknoloji Yığını

## 1. Ön Yüz (Üretim Hedefi — Next.js Sürümü)
| Teknoloji | Sürüm | Gerekçe |
|---|---|---|
| Next.js | 16+ | RSC, Streaming SSR |
| React | 19 | Server Actions, Compiler |
| TypeScript | 5.5+ | Uçtan uca tip güvenliği |
| Tailwind CSS | v4 | Zero-runtime, CSS değişkenleri |
| GSAP | Latest | ScrollTrigger, timeline |
| Three.js / R3F | Latest | 3B sahne yönetimi |
| Framer Motion | Latest | Sayfa geçişleri (yalnızca React ortamında) |

## 2. Bu Atlas Dosyasının Teknik Kapsamı (Şu An Elinizdeki Dosya)
Bu .html dosyası kasıtlı olarak **saf HTML/CSS/Vanilla JS + GSAP + Three.js (CDN)** ile inşa edilmiştir — React/Next.js/Framer Motion GEREKTİRMEZ, tek tıkla, build adımı olmadan her tarayıcıda çalışır. Üretim sitesi Next.js'e taşındığında, buradaki tüm bileşen mantığı (cursor, command palette, oyun motoru, i18n) doğrudan React bileşenlerine çevrilebilir — mimari zaten bileşen sınırlarına göre ayrıştırılmıştır.

## 3. Arka Yüz Mimarisi

PersonalHQ.Backend
├── Domain             (Entities, Value Objects, Domain Events)
├── Application         (CQRS/MediatR, FluentValidation, DTO)
├── Infrastructure       (EF Core, PostgreSQL, Redis, Outbox)
└── API                  (Controllers, Middleware, Health Checks)


## 4. Test Stratejisi
- Backend: xUnit + FluentAssertions, entegrasyon testleri Testcontainers ile gerçek PostgreSQL üzerinde.
- Frontend: Vitest (birim) + Playwright (e2e, Cmd+K ve oyun etkileşimlerini kapsayan senaryolar).
- Performans: Lighthouse CI her PR'da otomatik çalışır, regresyon eşiği %5.

## 5. Sürümleme Politikası
Majör bağımlılık yükseltmeleri (Next.js, .NET LTS) yalnızca yeni LTS sürümünde ve ayrı bir chore/upgrade dalında yapılır; asla main üzerinde doğrudan denenmez.