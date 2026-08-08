# ADMIN_PANEL.md — Yönetim Paneli & CMS Stratejisi

## 1. CMS Karşılaştırma
| Kriter | Özel Panel | Headless CMS | Hibrit (Tavsiye) |
|---|---|---|---|
| Kod Kontrolü | %100 | Sınırlı | %100 + hazır motor |
| Eforu | Yüksek | Düşük | Orta |
| Veri Mülkiyeti | Kendi DB | SaaS'a bağımlı | Kendi DB |

## 2. Hibrit Mimari
- **Blog/İçerik:** Git-tabanlı MDX (push → otomatik build).
- **Canlı Metrik/Yönetim:** ASP.NET Core Web API + özel React panel.

## 3. Oyun Skoru Moderasyonu — YENİ
Leaderboard'a giren skorlar admin panelinde flagged bayrağıyla listelenir; yönetici tek tıkla gizleyebilir. Otomatik anti-cheat eşiği aşılmadıkça manuel müdahale gerekmez — amaç, aşırı moderasyon yükü yaratmadan bariz kötüye kullanımı engellemektir.