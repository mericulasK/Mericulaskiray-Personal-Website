# RESEARCH_SYNTHESIS.md — Saha Araştırması Sentezi (100+ Site, 12 Kategori)

## 1. Yöntem
Bu doküman, kullanıcının paylaştığı iki ayrı derin araştırma oturumunun (Gemini + ChatGPT) ve doğrudan incelenen canlı örneklerin (umutkorkmaz.net, barandasdemir.com) damıtılmış sentezidir. Amaç kopyalamak değil, kalıpları çıkarıp özgün bir kimliğe uyarlamaktır.

## 2. 12 Kategori — Damıtılmış Dersler
| # | Kategori | Referans Örnek(ler) | Atlas'a Uyarlanışı |
|---|---|---|---|
| 1 | Hall of Fame | Bruno Simon, Dennis Snellenberg, Rauno Freiberg | Cilt 1 inceleme matrisi |
| 2 | Hero | Pedro Duarte (imleç→font-weight) | Cilt 2 canlı demo |
| 3 | Cursor/Micro | Emil Kowalski (spring+ses), Dennis Snellenberg (durum makinesi imleç) | Sigil imleç + manyetik buton |
| 4 | Scroll | Lenis/lerp deseni | ANIMATION_GUIDE.md §1 |
| 5 | GSAP | Olivier Larose (text-split, clip-path) | Cilt 3 kod örneği |
| 6 | Three.js/R3F | Bruno Simon, Jordan Breton | Cilt 14 Kalıntı Avcısı |
| 7 | Proje Vitrini | Brian Lovin, Delba de Oliveira (canlı GitHub metrikleri) | Cilt 6 vaka kartları |
| 8 | Blog | Anthony Fu, Lee Robinson (MDX + Shiki) | Cilt 8 |
| 9 | About | Rauno Freiberg, Henry Heffernan (filtrelenebilir timeline) | Cilt 7 |
| 10 | Mobil | Paco Coursey (alt navigasyon, haptic) | Cilt 10 |
| 11 | Performans | Lee Robinson (100/100 Lighthouse) | Cilt 10 |
| 12 | Awwwards Kriterleri | Design %20 / Usability %30 / Creativity %25 / Developer %25 | §3 aşağıda |

## 3. Awwwards Değerlendirme Ağırlıkları (yön verici, garanti değil)
Tasarım (%20): tipografik ölçek, tutarlı palet, bilinçli boşluk. Kullanılabilirlik (%30): tam klavye erişimi, WCAG AA kontrast, kırık link yok. Yaratıcılık (%25): şablon değil, özgün bir kavram (Atlas Protokolü bu kutuyu işaretler). Mühendislik (%25): Core Web Vitals mükemmelliği, 60-120 FPS, temiz mimari.

## 4. "$10K Checklist" — Damıtılmış 8 İlke
1. Şablon değil, net bir bakış açısı — kararlılıkla uygulanmış bir yön (Atlas: kadim atlas + dövülmüş metal).
2. İş yapan tipografi — Inter/Roboto değil, kasıtlı bir eşleştirme (Cinzel + Manrope).
3. Kısıtlı renk sistemi — 3-5 ana renk, tutarlı kullanım.
4. Nefes alan hiyerarşi — boşluk ve kontrast, çabasız yön gösterir.
5. Amaçlı görsel — stok görsel değil, üretilen/özel içerik.
6. Fısıldayan hareket — el işçiliği hissi veren mikro etkileşim, "AOS-fade-up" klişesi değil.
7. Küçültülmüş değil, mobil için tasarlanmış deneyim.
8. Görünmez pahalılık — <2s yükleme, WCAG AA, klavye navigasyonu, semantik HTML, gerçek meta etiketleri.

## 5. Brief Yöntemi — 4 Adımlı Prompt Çerçevesi
Bundan sonra Atlas'a yapılacak her büyük tasarım talebi şu 4 adımla çerçevelenir (kaynak: kullanıcının $10K Checklist ekiyle birlikte paylaştığı görsel):
1. **Markayı Tanımla:** Marka bilgisi, hedef kitle, marka karakteri.
2. **Tasarım Dilini Belirle:** Renk paleti, tipografi, görsel atmosfer, referans siteler.
3. **Sayfa Deneyimini Planla:** Bölüm yapısı, video/görsel/3B kullanımı, scroll/hover efektleri, CTA alanları.
4. **Teknik Beklentileri Yaz:** Kullanılacak teknolojiler, responsive yapı, performans hedefleri, kaçınılması gerekenler.

## 6. Bilinçli Olarak Uygulanmayan Öneriler ve Neden
- **Framer Motion / 21st.dev / doğrudan React bileşenleri:** Bu dosya tek-dosya, sıfır-bağımlılık, build'siz çalışma hedefiyle çeliştiği için GSAP + Vanilla JS ile eşdeğer kalitede uygulanmıştır (bkz. TECH_STACK.md §2). Üretim Next.js sürümünde birebir uygulanabilir.
- **Siberpunk/neon tema:** Kullanıcı tarafından açıkça hariç tutuldu; bunun yerine özgün Atlas Protokolü tercih edildi (bkz. DESIGN_SYSTEM.md §1).
- **50+ dil tam çeviri:** Güvenilirlik riski nedeniyle sağlam bir mimari + kaliteli çekirdek dil seti ile sınırlandı (bkz. SITE_MAP.md §4).