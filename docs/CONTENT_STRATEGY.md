# CONTENT_STRATEGY.md — İçerik Stratejisi

## 1. İçerik Sütunları
1. Derin vaka incelemeleri (problem → başarısız denemeler → mimari karar → sonuç).
2. Mimari/Clean Code denemeleri.
3. Açık kaynak araçlar.
4. Konuşmalar & sertifikalar.

## 2. Üretim Pipeline'ı
Makaleler /content/blog/*.mdx altında Git'te tutulur; push sonrası GitHub Actions lint + yayın yapar.

## 3. Editoryal Takvim & Tazelik Politikası
- Hedef: ayda en az 1 derin teknik yazı.
- Her makale 12 ayda bir "tazelik denetiminden" geçer: kod örnekleri güncel sürümlerle test edilir, kırık linkler onarılır, üstte "Son güncelleme" tarihi gösterilir — bu hem GEO hem kullanıcı güveni için kritik.