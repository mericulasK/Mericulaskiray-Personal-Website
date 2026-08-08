# SITE_MAP.md — Sayfa Haritası & Bilgi Mimarisi

## 1. Rota Hiyerarşisi

/ (Landing: Hero, Showcase, Timeline, Articles, Playground teaser)
/projects            (Vitrin)
  /projects/[slug]    (Vaka incelemesi)
/about                (Hakkımda, Timeline, Uses, Now)
/blog                 (MDX bilgi merkezi)
/dashboard            (GitHub + WakaTime canlı panel)
/playground           (Kalıntı Avcısı + Cipher Terminal + gelecekteki kartuşlar)
/admin                (Opsiyonel hibrit yönetim paneli)
/api                  (ASP.NET Core Web API)


## 2. Navigasyon & Katmanlar
1. Komut Paleti (Cmd/Ctrl+K): global arama, rotalar arası ışınlanma, dil/ses geçişi.
2. AI Assistant Drawer: her sayfadan erişilebilir sohbet paneli.
3. Ses Denetleyici: ambiyans sesini aç/kapat.

## 3. Geri Uyumluluk & Yönlendirmeler
Eski slug'lar (ör. /portfolio → /projects) 301 kalıcı yönlendirme ile korunur; SEO otoritesi kaybedilmez.

## 4. Yerelleştirme (i18n) Mimarisi
- Birincil diller: Türkçe (varsayılan) + İngilizce, tam kalite.
- Mimari: data-i18n anahtar sistemi + JSON dil paketleri — yeni bir dil eklemek yalnızca yeni bir locale.json dosyası gerektirir, bileşen kodunun değişmesini gerektirmez.
- hreflang etiketleri her dil varyantı için otomatik üretilir (GEO/SEO için kritik).
- Genişleme planı: ES, DE, FR, PT, RU, AR, ZH, JA, HI — öncelik sırası ROADMAP.md'de.