# API_SPECIFICATION.md — API Sözleşmeleri

## 1. Projects API
- GET /api/v1/projects — GetProjectsQuery{Category,Tag,Page,PageSize}, Redis 24s cache.
- GET /api/v1/projects/{slug} — GetProjectBySlugQuery.
- POST /api/v1/projects (Admin) — cache invalidation + Outbox event.

## 2. Playground API — YENİ
- POST /api/v1/playground/scores — { gameId, score, durationMs }, sunucu tarafı anti-cheat doğrulaması (bkz. DATABASE_DESIGN.md §2).
- GET /api/v1/playground/leaderboard/{gameId} — Redis Leaderboard_Top10 üzerinden.

## 3. AI RAG Assistant API
- POST /api/v1/ai/chat — SSE/chunked stream, { prompt, conversationId }.

## 4. Hata Sözleşmesi (RFC 7807 ProblemDetails)

{
  "type": "https://hq.dev/errors/not-found",
  "title": "Project not found",
  "status": 404,
  "traceId": "00-..."
}

Her hata yanıtı bu şemaya uyar; istemci asla ham stack trace görmez.

## 5. Sürümleme & Sayfalama Kuralları
- URL tabanlı sürümleme: /api/v1/..., kırıcı değişiklik → /v2.
- Sayfalama: page/pageSize query, yanıt zarfı { items, total, page, pageSize }.
- Rate limiting: 100 istek/dk/IP, aşımda 429 + Retry-After başlığı.