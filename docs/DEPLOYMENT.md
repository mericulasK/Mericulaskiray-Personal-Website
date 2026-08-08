# DEPLOYMENT.md — Yayına Alma & CI/CD

## 1. Ortamlar
| Ortam | Amaç | URL Deseni |
|---|---|---|
| dev | Yerel geliştirme | localhost |
| staging | PR önizlemeleri | *.preview.hq.dev |
| production | Canlı | hq.dev |

## 2. Topoloji

Cloudflare CDN → Vercel Edge (Next.js) + Railway/VPS (ASP.NET Core API, Docker)
                                   → Managed PostgreSQL + Redis Cloud


## 3. Geri Alma (Rollback) Stratejisi
Her dağıtım immutable bir sürüm etiketi alır; bir regresyon tespit edildiğinde Vercel/Railway üzerinde tek tıkla bir önceki immutable sürüme dönülür — veritabanı migrasyonları her zaman geriye dönük uyumlu (expand/contract) olduğundan, rollback şema kilitlenmesi yaratmaz.

## 4. İzleme & Uyarı
OpenTelemetry + Grafana/Prometheus (veya Azure Monitor); P99 gecikme, hata oranı ve Core Web Vitals için eşik-tabanlı uyarılar Slack/e-posta kanalına düşer.

## 5. Dockerfile (özet)
Multi-stage build: SDK imajı ile derleme → ASP.NET runtime imajı ile yayınlama, imaj boyutu küçük tutulur.