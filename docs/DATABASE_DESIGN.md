# DATABASE_DESIGN.md — Veritabanı Tasarımı

## 1. PostgreSQL Şeması (özet)

Users(Id, Email, PasswordHash, FullName, Role, CreatedAt)
Projects(Id, Slug, Title, Summary, CaseStudyContent, Tags[], IsFeatured, ViewCount)
Articles(Id, Slug, Title, Content, ReadingTimeMinutes, PublishedAt, IsPublished)
GameScores(Id, UserAlias, GameId, Score, DurationMs, CreatedAt)   -- YENİ: Cilt 14 için
DomainEventsOutbox(Id, EventType, Content JSONB, OccurredOnUtc, ProcessedOnUtc)


## 2. GameScores Tablosu — Oyun Alanı için
playground/scores uç noktasının arka planı. Anti-cheat için: sunucu tarafında DurationMs ile Score arasındaki oran mantıksal bir üst sınırla doğrulanır (ör. saniyede en fazla 1 relic toplanabilir); bu sınırı aşan skorlar flagged = true olarak işaretlenir ve genel skor tablosunda gösterilmez.

## 3. İndeksleme
IX_Projects_Slug, IX_Articles_Slug, IX_Outbox_Unprocessed (kısmi indeks, yalnızca ProcessedOnUtc IS NULL), IX_GameScores_GameId_Score (leaderboard sıralaması için).

## 4. Redis Önbellekleme Matrisi
| Anahtar | TTL | Notlar |
|---|---|---|
| Projects_List_Cache | 24s | Proje güncellemesinde evict |
| GitHub_Metrics_Cache | 1s | API kotasını korur |
| Leaderboard_Top10 | 5dk | Yüksek okuma trafiği, düşük yazma |

## 5. Migrasyon Stratejisi
EF Core Migrations, her migrasyon Up/Down çiftiyle geri alınabilir olmalı; üretimde expand → backfill → contract deseni izlenir (bkz. ROADMAP.md Faz 2), asla tek adımda yıkıcı şema değişikliği yapılmaz.

## 6. Blob Storage
Görseller, sertifikalar, proje ekran görüntüleri Cloudflare R2 üzerinde WEBP/AVIF formatında saklanır.