# Portfolio-Adit — Sky Neon Portfolio

Website portofolio pribadi **Aditya Maulana Pamungkas** untuk memperkenalkan profil sebagai Machine Learning Engineer, perjalanan akademik, proyek, sertifikasi, dan keahlian teknis. Dibangun sebagai aplikasi frontend React dengan Vite dan tampilan bertema **Sky Neon**.

Dokumen ini menjelaskan implementasi yang tersedia di repository, berdasarkan pembacaan kode dan konfigurasi proyek.

## Daftar isi

- [Gambaran proyek](#gambaran-proyek)
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Menjalankan secara lokal](#menjalankan-secara-lokal)
- [Perintah pengembangan](#perintah-pengembangan)
- [Struktur proyek](#struktur-proyek)
- [Arsitektur dan alur aplikasi](#arsitektur-dan-alur-aplikasi)
- [Konten portofolio](#konten-portofolio)
- [Panduan menyesuaikan konten](#panduan-menyesuaikan-konten)
- [Build dan deployment](#build-dan-deployment)
- [Batasan implementasi](#batasan-implementasi)
- [Pemeriksaan proyek](#pemeriksaan-proyek)
- [Pemilik dan lisensi](#pemilik-dan-lisensi)

## Gambaran proyek

| Aspek | Keterangan |
| --- | --- |
| Nama package | `aditya-pamungkas-portfolio` |
| Versi di `package.json` | `0.0.0` |
| Jenis aplikasi | Single Page Application (SPA), dirender di browser |
| Bahasa pemrograman | JavaScript dengan JSX dan ES Modules |
| Navigasi | Pergantian bagian menggunakan state React |
| Penyimpanan konten | Array dan objek lokal di source code |
| Tema awal | Dark |
| Bahasa awal | Inggris (`en`) |
| Mode tampilan awal | Modern/neon |
| Backend dan database | Belum tersedia dan tidak diperlukan untuk tampilan portofolio |

## Fitur

- **Beranda dan profil:** perkenalan, animasi mengetik jabatan, efek parallax, biodata, serta tombol menuju proyek dan kontak.
- **Perjalanan akademik:** timeline pendidikan dan program pelatihan dengan logo institusi.
- **Galeri proyek:** empat kartu proyek berisi gambar, kategori, deskripsi, poin utama, dan tautan repository.
- **Sertifikasi:** 15 entri pencapaian/sertifikat yang dapat difilter melalui tiga tab kategori.
- **Keahlian teknis:** 15 keterampilan dalam kategori Machine Learning/Data, Development, dan Infrastructure.
- **Kontak:** formulir nama, email, dan pesan dengan validasi HTML bawaan; pengiriman dilanjutkan melalui aplikasi email pengunjung.
- **Tema terang/gelap:** pergantian warna melalui CSS custom properties dan atribut `data-theme`.
- **Bahasa Indonesia/Inggris:** kamus terjemahan untuk navigasi, profil, judul bagian, dan label formulir. Sebagian konten masih berbahasa Inggris.
- **Mode produktivitas:** pilihan `NEON INTERFACE`/`MINIMAL` untuk mengurangi dekorasi, animasi CSS, bayangan, dan efek parallax.
- **Interaksi visual:** kursor crosshair, jejak kursor, ripple saat klik, efek hover kartu, grid latar, serta animasi kemunculan konten.
- **Tata letak responsif:** sidebar menjadi menu overlay pada lebar maksimal 1024 px; kartu dan konten menyesuaikan lebar layar.
- **Pemuatan bertahap:** bagian utama memakai `React.lazy` dan `Suspense`; sejumlah gambar memakai lazy loading.

## Teknologi

Versi berikut merupakan rentang yang dideklarasikan dalam [package.json](package.json), bukan klaim versi terbaru.

| Teknologi | Versi deklarasi | Penggunaan |
| --- | --- | --- |
| React / React DOM | `^19.2.4` | Komponen UI, state, dan rendering |
| Vite | `^8.0.4` | Development server dan build produksi |
| Plugin React untuk Vite | `^6.0.1` | Integrasi React dengan Vite |
| Lucide React | `^1.8.0` | Ikon antarmuka |
| CSS | — | Variabel tema, Flexbox, Grid, media query, dan keyframes |
| ESLint | `^9.39.4` | Pemeriksaan statis JavaScript/JSX |
| Three.js | `^0.184.0` | Dependensi komponen `CyberGrid` |
| React Three Fiber | `^9.6.0` | Renderer React untuk scene Three.js |
| React Three Drei | `^10.7.7` | Helper grid dan partikel pada `CyberGrid` |

`CyberGrid.jsx` tersedia, tetapi belum diimpor atau dirender oleh aplikasi utama. Latar pada tampilan aktif dibuat menggunakan CSS. Teknologi seperti Python, TensorFlow, Docker, dan database yang muncul pada bagian keahlian merupakan isi portofolio, bukan kebutuhan runtime website ini.

## Menjalankan secara lokal

### Prasyarat

- Node.js yang memenuhi rentang `^20.19.0 || >=22.12.0`, sesuai field `engines` Vite di `package-lock.json`.
- npm.
- Git jika mengambil proyek dengan clone.
- Browser dan koneksi internet untuk mengunduh dependensi serta memuat aset eksternal.

### Instalasi

```bash
git clone https://github.com/adityamp0/Portfolio-Adit.git
cd Portfolio-Adit
npm ci
npm run dev
```

Jika folder proyek sudah tersedia, jalankan dua perintah terakhir dari root proyek. `npm ci` menggunakan versi yang tercatat di `package-lock.json`. Gunakan `npm install` ketika sengaja menambah atau memperbarui dependensi.

Buka alamat lokal yang dicetak Vite di terminal, biasanya `http://localhost:5173`. Jika port tersebut sedang dipakai, ikuti alamat yang ditampilkan server.

Implementasi saat ini tidak membutuhkan file `.env`, API key, database, atau server backend.

## Perintah pengembangan

| Perintah | Fungsi |
| --- | --- |
| `npm ci` | Memasang dependensi berdasarkan lockfile |
| `npm run dev` | Menjalankan development server |
| `npm run lint` | Memeriksa file JavaScript/JSX menggunakan ESLint |
| `npm run build` | Menghasilkan build produksi dalam `dist/` |
| `npm run preview` | Menyajikan hasil build untuk pemeriksaan lokal |

Belum ada script `test` atau konfigurasi framework pengujian otomatis di repository.

## Struktur proyek

```text
Portfolio-Adit/
|-- documentation/
|   `-- PROJECT_DETAILS.md        # Dokumentasi teknis sebelumnya
|-- public/
|   |-- favicon.svg              # Favicon yang dirujuk index.html
|   `-- icons.svg                # Aset SVG tambahan
|-- src/
|   |-- assets/
|   |   |-- hero.png
|   |   |-- react.svg
|   |   `-- vite.svg
|   |-- components/
|   |   |-- About.jsx            # Profil dan generator fakta lokal
|   |   |-- AcademicJourney.jsx  # Timeline pendidikan/pelatihan
|   |   |-- Certificates.jsx     # Data dan filter sertifikasi
|   |   |-- ContactForm.jsx      # Formulir berbasis mailto
|   |   |-- CyberGrid.jsx        # Komponen 3D, belum dipasang
|   |   |-- Footer.jsx           # Footer terpisah, belum dipasang
|   |   |-- Hero.jsx             # Perkenalan dan tombol navigasi
|   |   |-- SelectedWorks.jsx    # Data dan galeri proyek
|   |   |-- Sidebar.jsx          # Navigasi, profil, dan kontrol tampilan
|   |   `-- TechnicalRepertoire.jsx # Daftar keahlian
|   |-- utils/
|   |   `-- translations.js      # Kamus en dan id
|   |-- App.jsx                  # State global dan pemilihan bagian
|   |-- App.css                  # Styling template, belum diimpor
|   |-- index.css                # Styling utama aplikasi
|   `-- main.jsx                 # Entry point React
|-- .gitignore
|-- DESIGN.md                    # Dokumen desain ShieldID; berbeda proyek
|-- eslint.config.js
|-- index.html                   # Root HTML dan metadata
|-- package.json
|-- package-lock.json
|-- projek.md                    # Dokumentasi implementasi ini
|-- README.md
|-- vercel.json                  # Rewrite dan cache header
`-- vite.config.js
```

Aset di `src/assets/` belum dirujuk oleh komponen aktif. Foto profil, gambar proyek, logo institusi, dan logo keahlian menggunakan URL eksternal.

## Arsitektur dan alur aplikasi

1. `index.html` menyediakan elemen `#root` dan memuat `src/main.jsx`.
2. `main.jsx` membuat root React dan merender `App` di dalam `StrictMode`.
3. `App.jsx` menyimpan state tema, bahasa, mode produktivitas, bagian aktif, posisi mouse, serta posisi scroll.
4. `Sidebar.jsx` memperbarui state bagian aktif melalui callback `setActiveSection`.
5. `renderSection()` memilih komponen yang ditampilkan. `Suspense` menampilkan indikator pemuatan saat modul bagian belum tersedia.
6. `IntersectionObserver` mengaktifkan kelas animasi pada elemen `.reveal` dan `.section-header` yang terlihat.

### Pemetaan navigasi

| Nilai `activeSection` | Tampilan |
| --- | --- |
| `#home` | `Hero` dan `About` |
| `#journey` | `AcademicJourney` |
| `#work` | `SelectedWorks` |
| `#certifications` | `Certificates` |
| `#skills` | `TechnicalRepertoire` |
| `#contact` | `ContactForm` |

Navigasi mencegah perilaku default anchor dan mengganti state. URL dan riwayat browser tidak disinkronkan dengan bagian aktif; nilai seperti `#work` berfungsi sebagai penanda internal. Aplikasi memulai kembali pada beranda ketika dimuat ulang.

Preferensi tema, bahasa, dan mode tampilan belum disimpan ke `localStorage`. Data konten dikirim ke komponen melalui props atau dibaca dari array lokal, tanpa CMS maupun permintaan API data.

### Sistem tampilan

Styling aktif berada di `src/index.css` dan inline style komponen. Font utama adalah **Quicksand**, dimuat melalui Google Fonts.

| Variabel | Nilai awal | Fungsi |
| --- | --- | --- |
| `--bg-color` | `#030303` | Latar utama |
| `--card-bg` | `#080808` | Latar kartu |
| `--text-main` | `#ffffff` | Teks utama |
| `--text-muted` | `#808080` | Teks sekunder |
| `--sky-neon` | `#00f3ff` | Aksen neon |
| `--sidebar-width` | `260px` | Lebar sidebar desktop |
| `--standard-radius` | `12px` | Radius sudut standar |

Tema terang menimpa variabel melalui `[data-theme='light']`; mode minimal memakai `[data-view='productivity']`. Kursor kustom disembunyikan oleh CSS pada lebar maksimal 1024 px.

## Konten portofolio

### Proyek terpilih

Daftar berikut merupakan konten showcase di `SelectedWorks.jsx`. Kode proyek-proyek tersebut berada di repository terpisah.

| Proyek | Kategori | Fokus yang ditampilkan |
| --- | --- | --- |
| Brazilian E-Commerce Analysis | Data Analysis | Analisis dataset Olist, RFM, geospasial, dan dashboard |
| Dog & Cat Classification | Machine Learning | Klasifikasi gambar menggunakan CNN |
| RFM Segmentation Dashboard | Data Science | Segmentasi pelanggan dan visualisasi interaktif |
| Duolingo Sentiment Analysis | NLP | Analisis sentimen, ekstraksi kata, dan WordCloud |

### Pendidikan dan sertifikasi

Timeline menampilkan **Universitas Gunadarma** serta **Asah led by Dicoding**. Sertifikasi dikelompokkan ke dalam `Machine Learning/Data`, `Web Developer`, dan `Programming Language`, dengan tautan dokumen Google Drive. Entri tertentu diberi penanda `featured`.

### Sumber aset eksternal

- GitHub Avatars untuk foto profil.
- Unsplash untuk gambar ilustrasi proyek.
- Google Fonts untuk font Quicksand.
- jsDelivr/Devicon untuk logo teknologi.
- CleanPNG dan CDN Dicoding untuk logo institusi.
- Google Drive untuk dokumen sertifikasi.

Ketersediaan aset dan akses dokumen mengikuti layanan asal. URL tersebut dibaca dari kode; akses dan isi layanan eksternal belum diverifikasi dalam penyusunan dokumen ini.

## Panduan menyesuaikan konten

| Perubahan | Lokasi |
| --- | --- |
| Nama, foto profil, jabatan, dan media sosial | `src/components/Sidebar.jsx` |
| Judul dan biodata dalam dua bahasa | `src/utils/translations.js` |
| Nama/jabatan yang masih ditulis langsung pada hero | `src/components/Hero.jsx` |
| Statistik profil dan daftar fakta | `src/components/About.jsx` |
| Pendidikan dan pelatihan | Array `journeys` di `AcademicJourney.jsx` |
| Proyek | Array `worksData` di `SelectedWorks.jsx` |
| Sertifikasi | Array `certsData` dan `categories` di `Certificates.jsx` |
| Keahlian | Array `repertoire` di `TechnicalRepertoire.jsx` |
| Email penerima formulir | `src/components/ContactForm.jsx` |
| Tema, ukuran, dan tata letak | `src/index.css` serta inline style komponen |
| Judul browser dan metadata sosial | `index.html` |

### Menambahkan proyek

Tambahkan objek baru ke `worksData` dengan `id` unik, `title`, `category`, `description`, `highlights`, `image`, dan `link`. Properti `tags` ada pada data lama, tetapi belum dirender pada kartu saat ini.

### Menambahkan sertifikat

Tambahkan objek dengan `id`, `category`, `title`, `provider`, `description`, `date`, `link`, dan `icon`. Gunakan `featured: true` bila diperlukan. Nilai `category` harus sesuai dengan daftar `categories` agar muncul pada filter; tambahkan kategori ke daftar tersebut jika membuat kategori baru.

### Mengubah bahasa dan identitas

Perbarui kedua objek `en` dan `id` dengan struktur key yang sama. Sejumlah teks masih ditulis langsung di komponen, sehingga perubahan kamus saja belum menerjemahkan semua konten. Untuk mengganti email, sesuaikan juga tautan kontak pada `Sidebar.jsx`.

## Build dan deployment

Buat serta periksa hasil produksi secara lokal:

```bash
npm run build
npm run preview
```

Hasil build berada di `dist/`. Folder tersebut diabaikan oleh Git dan dapat dipublikasikan melalui hosting statis.

Untuk konfigurasi proyek Vercel, gunakan:

| Pengaturan | Nilai |
| --- | --- |
| Framework | Vite |
| Root directory | Root repository |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

Konfigurasi [vercel.json](vercel.json) yang tersedia menetapkan:

- `cleanUrls: true`.
- Rewrite `/(.*)` ke `/index.html`.
- Header cache `public, max-age=31536000, immutable` untuk `/assets/(.*)`.

Repository memuat konfigurasi deployment, tetapi domain produksi dan status koneksi Vercel tidak dapat dipastikan dari file lokal. Deployment otomatis setelah push bergantung pada pengaturan integrasi Git di platform hosting.

Sebelum publikasi, sesuaikan metadata `og:url` di `index.html` dengan alamat website yang digunakan; nilai saat ini mengarah ke repository GitHub.

## Batasan implementasi

- **Form kontak menggunakan `mailto:`.** Browser membuka aplikasi email dengan nama, alamat email, dan pesan pengunjung. Pesan belum dikirim melalui backend, tidak disimpan, dan tidak memiliki konfirmasi pengiriman. State `sending` belum diaktifkan oleh handler. Nilai query juga belum di-encode, sehingga karakter khusus dapat memengaruhi isi email.
- **Generator fakta bersifat lokal.** Tombol memilih acak dari tujuh teks dengan jeda simulasi 800 ms, tanpa model AI atau API. Labelnya belum terhubung ke struktur kamus yang benar: komponen membaca `t.aiEngine` dan key sejenis, sedangkan kamus menyimpan nilai di `t.aiFact`.
- **Terjemahan belum menyeluruh.** Data proyek, sertifikat, pendidikan, statistik, serta beberapa tombol masih ditulis langsung dalam bahasa Inggris. Atribut `lang` pada HTML tetap `en`.
- **Mode produktivitas mengurangi efek visual.** Mode ini belum menghentikan semua listener, loop animasi JavaScript, atau efek mengetik.
- **Sebagian file belum digunakan.** `CyberGrid.jsx`, `Footer.jsx`, `App.css`, dan aset template tersedia tetapi tidak terhubung ke tampilan utama.
- **Dokumentasi lama perlu dibaca sesuai konteks.** `DESIGN.md` menjelaskan aplikasi ShieldID dengan stack dan kebutuhan berbeda. Implementasi portofolio ini memakai React/Vite dan CSS biasa; spesifikasi ShieldID tidak menggambarkan website yang berjalan.

## Pemeriksaan proyek

Dokumentasi ini diperiksa terhadap source code, script npm, konfigurasi, dan lockfile. Build, lint, serta pengujian browser belum dijalankan saat penyusunan karena dependensi belum terpasang di workspace.

Setelah instalasi, jalankan `npm run lint` dan `npm run build`, lalu periksa navigasi keenam bagian, tema, bahasa, mode minimal, filter sertifikat, menu mobile, dan form kontak pada browser. Repository belum menyediakan pengujian otomatis.

## Pemilik dan lisensi

**Aditya Maulana Pamungkas**

- GitHub: [adityamp0](https://github.com/adityamp0)
- LinkedIn: [Aditya Maulana Pamungkas](https://linkedin.com/in/adityamaulanapamungkas)
- Email: [ampaditya55@gmail.com](mailto:ampaditya55@gmail.com)

Repository belum menyertakan file `LICENSE` atau deklarasi lisensi pada `package.json`. Status package adalah `private: true`.
