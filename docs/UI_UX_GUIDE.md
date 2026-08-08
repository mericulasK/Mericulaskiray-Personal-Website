# UI_UX_GUIDE.md — Arayüz & Kullanıcı Deneyimi

## 1. Temel İlkeler
1. **Dokunsal Geri Bildirim:** Her etkileşim milisaniyelik görsel + opsiyonel işitsel (Web Audio) yanıt verir.
2. **Sıfır Bekleme Algısı:** Skeleton loader + optimistic UI.
3. **Akıllı Gezinme:** Cmd+K komut paleti + yapışkan başlık.

## 2. Yay Fiziği Standartları

springSmooth = { stiffness: 300, damping: 30, mass: 0.8 }
springBouncy = { stiffness: 450, damping: 20, mass: 0.5 }


## 3. Mikro Etkileşim Kataloğu
- Manyetik butonlar (imlece %20-28 çekim).
- Sigil imleç: hover'da genişleyen döner halka.
- Kart eğilme (tilt) efekti: fareye doğru 6-10° perspektif.

## 4. Oyunlaştırma UX İlkeleri (Cilt 14 için)
- Bir oyun asla otomatik başlamaz — her zaman net bir "Başlat" eylemi ile devreye girer (kullanıcı kontrolü).
- Klavye VE dokunmatik kontrol paralel sağlanır; hiçbir mekanik yalnızca fareye bağımlı olmaz.
- Oyunu atlayan kullanıcı için içerik kaybı olmaz — legend/skor paneli aynı bilgiyi metinle de sunar.

## 5. Nielsen Sezgisel Kontrol Listesi (uyarlanmış)
| İlke | Atlas Karşılığı |
|---|---|
| Sistem durumu görünürlüğü | Yükleme çubuğu, oyun HUD, "Kaydedildi" toast'ları |
| Kullanıcı kontrolü & özgürlük | Her modal ESC ile kapanır, her oyun duraklatılabilir |
| Tutarlılık | Tek bir buton/kart/renk dili tüm site boyunca |
| Hata önleme | Devre dışı butonlar disabled state ile netleşir |