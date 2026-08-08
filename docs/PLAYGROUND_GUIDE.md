# PLAYGROUND_GUIDE.md — Oyun Alanı Tasarım Rehberi

## 1. Amaç
Bruno Simon'ın "3B araba sahnesi ne kadar akılda kalıcıysa" ve umutkorkmaz.net'in "100 kartuşluk The Lab"ı ne kadar mühendislik güveni veriyorsa, Atlas'ın Oyun Alanı da aynı işlevi görür: pasif okumayı aktif kanıta çevirmek.

## 2. Tasarım Kararları
- **Sıfır dış varlık:** Hiçbir .glb/.mp3 dosyası yok — tüm geometri Three.js primitifleriyle (BoxGeometry, IcosahedronGeometry, CylinderGeometry), tüm ses Web Audio osilatörleriyle anlık üretilir. Bu, dosyayı gerçekten "tek dosya" ve anında açılabilir tutar.
- **Opt-in performans:** Three.js sahnesi yalnızca kullanıcı "Oyunu Başlat"a bastığında kurulur; sekmeden çıkıldığında döngü durur.
- **Erişilebilirlik önce:** Klavye + dokunmatik kontrol paralel; oyunu oynamayan ziyaretçi için legend paneli aynı bilgiyi statik olarak sunar.

## 3. Kalıntı Avcısı — Teknik Özet
Three.js r128 (global THREE ad alanı, build adımı gerektirmez). Üçüncü şahıs takip kamerası, kutu-gövdeli araç, ivme/sürtünme tabanlı kinematik (tam fizik motoru yok — kasıtlı sadelik, güvenilirlik için). Çarpışma: basit mesafe kontrolü. Skor + süre HUD'da.

## 4. Genişleme Modeli (2029-2030 için)
umutkorkmaz.net'teki kartuş-rafı deseninden ilham alan bir "cartridge" mimarisi: her yeni mini oyun {id, title, category, mount(), unmount()} arayüzüne uyan bağımsız bir modül olarak eklenir; mevcut oyunlar hiç dokunulmadan yeni kartuşlar rafa eklenebilir (bkz. ROADMAP.md Faz 3).

## 5. Erişilebilirlik Notları
- Tüm oyun kontrolleri klavyeyle ulaşılabilir (tab-sırası, aria-label).
- Zamanlayıcı bir engel değil bilgi amaçlıdır — hiçbir görev katı bir süre sınırına bağlı değildir.
- prefers-reduced-motion aktifse parçacık/titreşim efektleri sadeleştirilir, oyun mekaniği değişmez.