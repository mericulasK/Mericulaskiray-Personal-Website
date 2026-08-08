# ANIMATION_GUIDE.md — Hareket Rehberi

## 1. Hareket Katmanları
1. **GSAP:** Sekme geçişleri, giriş animasyonları, HUD sayaçları.
2. **IntersectionObserver + CSS/GSAP:** Scroll ile ortaya çıkma (reveal) — ScrollTrigger yerine tercih edilir çünkü sekmeler `display:none` ile gizlenip gösterildiğinde konum hesaplamaları kırılganlaşır; IntersectionObserver her gösterimde doğal olarak yeniden tetiklenir.
3. **Web Audio API:** Tık/onay sesleri + üretimsel ambiyans (gerçek bir film/oyun müziği değil, orijinal drone sentez).
4. **Three.js requestAnimationFrame döngüsü:** Yalnızca Oyun Alanı sekmesi aktifken çalışır, diğer sekmelerde duraklatılır (pil/CPU tasarrufu).

## 2. Kolaylaştırma (Easing) Referansı
| İsim | Eğri | Ruh Hali |
|---|---|---|
| Atlas Ease | cubic-bezier(0.16,1,0.3,1) | Kesin, kendinden emin |
| Power3 Out | GSAP power3.out | Yumuşak iniş |
| Power1 In | GSAP power1.in | Hızlı çıkış (sekme kapanışı) |

## 3. Reduced Motion Stratejisi
@media (prefers-reduced-motion: reduce) bloğu tüm animation-duration/transition-duration değerlerini 0.001ms'e indirir; hiçbir bilgi yalnızca animasyonla iletilmez (ör. skor değişimi her zaman sayısal olarak da yazılıdır).

## 4. Oyun Döngüsü (Game Loop) Deseni

function tick(time) {
  const delta = clock.getDelta();
  updatePhysics(delta);
  checkCollisions();
  renderer.render(scene, camera);
  if (gameActive) requestAnimationFrame(tick);
}

Sekme değişiminde gameActive = false yapılarak döngü doğal olarak durur — cancelAnimationFrame çağrısına gerek kalmadan temiz bir durdurma sağlanır.