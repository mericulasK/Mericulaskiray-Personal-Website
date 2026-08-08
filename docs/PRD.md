# PRD.md — Product Requirements Document

## 1. Özet
Personal Digital HQ'nun fonksiyonel/fonksiyonel-olmayan gereksinimleri, modül bazlı kullanıcı hikayeleri ve kabul kriterleri.

## 2. Modül & Özellik Matrisi
### Modül 1 — Dynamic Hero & Kinetic Type
- F1.1 İmleç-duyarlı değişken font ağırlığı (Pedro Duarte deseni).
- F1.2 Hafif parçacık/ember arka plan (WebGL değil, Canvas 2D — mobilde de akıcı).
- **Kabul Kriteri:** Hero, düşük uçlu bir mobil cihazda dahi 50ms altında etkileşimli hale gelir.

### Modül 2 — Proje Vitrini
- F2.1 Teknolojiye/kategoriye göre anlık filtreleme.
- F2.2 Derin vaka incelemesi: Problem → Mimari → Sonuç, ölçülebilir ROI rakamlarıyla.
- F2.3 GitHub GraphQL API üzerinden canlı yıldız/commit verisi.
- **Kabul Kriteri:** API kesintisinde önbellekten son bilinen veri gösterilir, hata sayfası göstermez.

### Modül 3 — Zaman Çizelgesi & Deneyim
- F3.1 Yıla göre filtrelenebilir kariyer kilometre taşları.
- F3.2 Donanım/yazılım envanteri (Uses page).

### Modül 4 — MDX Blog & Bilgi Merkezi
- F4.1 Markdown içinde canlı bileşen çalıştırma.
- F4.2 Shiki/Prism kalitesinde kod renklendirme + tek tık kopyalama.
- F4.3 Scroll ile senkron İçindekiler paneli.

### Modül 5 — Kumanda Paneli
- F5.1 GitHub katkı haritası, dil dağılımı.
- F5.2 WakaTime tarzı haftalık kodlama süresi grafiği.

### Modül 6 — Gömülü AI Asistan
- F6.1 RAG tabanlı sohbet paneli — bu Atlas dosyasında **önizleme** (canned response) olarak, gerçek sitede API destekli.
- F6.2 Site içi semantik arama.

### Modül 7 — Oyun Alanı (Playground) — YENİ
- F7.1 3B "topla-ve-keşfet" mini oyunu (Cilt 14 §Kalıntı Avcısı).
- F7.2 Yazma hızı / mühendislik-refleksi mini oyunu (Cipher Terminal).
- **Kabul Kriteri:** Her iki oyun da harici model/ses dosyası indirmeden, sıfır ek ağ isteğiyle çalışır.

## 3. Kapsam Dışı — v1 (Explicit Out of Scope)
- Ödeme/e-ticaret akışları.
- Çoklu-kullanıcı skor tablosu (leaderboard) — v1'de yalnızca yerel skor; API'li leaderboard Faz 2'de (bkz. ROADMAP.md).

## 4. Fonksiyonel Olmayan Gereksinimler
1. Performans: TTI < 1.2s, FCP < 0.6s.
2. Erişilebilirlik: WCAG 2.1 AA, tam klavye navigasyonu, `prefers-reduced-motion` desteği.
3. Güvenlik: CSP, Rate Limiting (100req/dk), CORS sıkılaştırma, JWT HttpOnly Secure Cookies.
4. Tarayıcı uyumu: Chrome, Edge, Safari, Firefox, Brave + mobil eşdeğerleri.