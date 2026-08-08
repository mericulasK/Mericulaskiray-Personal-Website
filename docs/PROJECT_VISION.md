# PROJECT_VISION.md — Personal Digital HQ · Atlas Protokolü

## 1. Misyon
Bu proje standart bir "portföy sitesi" değil; geliştiricinin tüm kariyeri boyunca büyüyen, dijital varlığının merkezinde yer alan Personal Digital HQ ekosistemidir. 2027'de yayına alınacak platform, 2032'de bile mimari değişikliğe ihtiyaç duymadan yeni projeleri, makaleleri, açık kaynak katkılarını ve yapay zeka yeteneklerini bünyesine katabilmelidir.

## 2. Temel Sütunlar
1. Dünya standartlarında estetik & mühendislik (Awwwards/Site of the Day seviyesi).
2. Kurumsal sınıf arka yüz mimarisi (ASP.NET Core .NET 10, Clean Architecture, CQRS).
3. Geleceğe hazır yapay zeka ekosistemi (RAG tabanlı asistan, semantik arama).
4. Uzun vadeli sürdürülebilirlik (5-10 yıl ölçeklenebilirlik).
5. Özgün görsel kimlik — Atlas Protokolü: kadim atlas + dövülmüş metal estetiği, hiçbir markaya ait olmayan, tamamen özgün bir tasarım dili (bkz. RESEARCH_SYNTHESIS.md §4).

## 3. Kapsam Dışı (Non-Goals) — v1
- Gerçek zamanlı çok kullanıcılı işbirliği (multiplayer) özellikleri.
- Native mobil uygulama (ilk sürüm yalnızca responsive web).
- 50'den fazla dilde tam içerik çevirisi — bunun yerine sağlam bir i18n altyapısı + kaliteli çekirdek dil seti tercih edilir (bkz. SITE_MAP.md §4).
- Kullanıcı hesabı / girişi gerektiren özellikler (site tek-yönlü bir vitrin, çift-yönlü bir platform değil).

## 4. Riskler & Azaltma
| Risk | Etki | Azaltma |
|---|---|---|
| Aşırı görsel efekt → performans kaybı | Yüksek | WebGL sahneleri opt-in (Cilt 14), lazy-init, mobilde hafif mod |
| Telifli marka/estetik taklidi | Yüksek | Özgün token sistemi, hiçbir gerçek marka/logo/müzik kullanılmaz |
| 3B oyunun tarayıcı uyumsuzluğu | Orta | Three.js r128 (geniş uyumluluk), WebGL yoksa zarif metin geri dönüşü |
| İçerik bakımsızlığı (5 yıl sonra eskime) | Orta | MDX + Git tabanlı içerik, çeyreklik ROADMAP.md gözden geçirmesi |

## 5. Başarı Metrikleri (KPI)
1. Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100.
2. 60 FPS taban çizgisi (masaüstünde 120 FPS'e kadar), reduced-motion tam destek.
3. LCP < 1.2s, INP < 200ms, CLS = 0.
4. Ortalama oturum süresi > 2.5 dk, Oyun Alanı etkileşim oranı > %20.