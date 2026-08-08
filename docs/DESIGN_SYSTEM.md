# DESIGN_SYSTEM.md — Atlas Protokolü Tasarım Sistemi

## 1. Kimlik Bildirisi
Atlas Protokolü, kadim yıldız-atlasları ve dövülmüş metal zanaatinden ilham alan, **tamamen özgün** bir görsel dildir. Hiçbir film, oyun ya da marka evrenine ait isim, logo, sembol ya da müzik içermez — yalnızca "epik, kadim, ustalık" duygusunu özgün biçimde inşa eder. **Kesinlikle siberpunk-neon değildir.**

## 2. Renk Token Katmanları (Primitive → Semantic → Component)
| Primitive | Hex | Semantic Rolü |
|---|---|---|
| Void | #0B0906 | Taban arka plan |
| Ember | #C9762B | Birincil vurgu / CTA |
| Gold Leaf | #E8BF6A | İstatistik, öne çıkan rakam |
| Crimson | #7A2530 | İkincil vurgu / uyarı |
| Verdigris | #3F8172 | Aktif/çevrimiçi durum |
| Ink | #EEE5D3 | Birincil metin (parşömen tonu) |

## 3. Tipografi Sistemi
- **Cinzel** — başlıklar, kısıtlı kullanım (oyulmuş taş karakteri).
- **Cormorant Garamond (italik)** — alt başlık/manifesto cümleleri.
- **Manrope** — gövde metni ve arayüz (Inter/Roboto DEĞİL — bilinçli bir seçim, bkz. $10K Checklist §2).
- **JetBrains Mono** — kod ve veri.

## 4. Hareket Kişiliği & Süre Tokenları
| Token | Süre | Kullanım |
|---|---|---|
| --dur-fast | 180ms | Hover, buton geri bildirimi |
| --dur-mid | 350ms | Kart geçişleri, sekme değişimi |
| --dur-slow | 700ms | Sayfa/loader geçişleri |
Easing: cubic-bezier(0.16,1,0.3,1) — "Atlas ease", ani başlayıp yumuşak biten, kesinlik hissi veren bir eğri.

## 5. Bileşen Durumları (States)
Her etkileşimli bileşen 5 durumu tanımlamalıdır: default, hover, focus-visible, active/pressed, disabled. Focus-visible daima 2px --accent-primary-2 halkasıyla belirtilir — hiçbir zaman `outline: none` yazılıp geri konulmadan bırakılmaz.

## 6. Doğrulama: Ne DEĞİLDİR
- ❌ Siberpunk/neon (elektrik mavisi-macenta parıltı, tarama çizgileri).
- ❌ Gerçek bir film/oyun/marka evreninin isim, logo veya müziğinin kopyası.
- ❌ Varsayılan "AI tasarım" kalıpları: krem+turuncu-kil paleti, ya da salt siyah+tek neon vurgu.