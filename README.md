# Portfolio-Adit

Portofolio pribadi **Aditya Maulana Pamungkas**, Machine Learning Engineer dengan minat pada data, AI, dan pengembangan antarmuka web. Dibangun menggunakan **React 19 + Vite 8** sebagai Single Page Application (SPA).

Desain editorial mengutamakan tipografi, ruang kosong, garis pemisah tipis, serta warna netral dengan aksen biru redup. Nama menjadi fokus beranda, sementara proyek disajikan dengan gambar besar dan komposisi yang bervariasi.

## Fitur

- **Navigasi bernomor:** enam bagian melalui sidebar desktop dan menu ringkas pada mobile.
- **Beranda dan profil:** perkenalan, biodata, informasi pendidikan, dan fokus keahlian.
- **Perjalanan akademik:** pendidikan Universitas Gunadarma dan pelatihan Asah led by Dicoding.
- **Karya terpilih:** empat proyek dengan deskripsi, poin utama, teknologi, dan tautan repository.
- **Sertifikasi:** 15 entri dengan filter Semua, Machine Learning/Data, Web, dan Pemrograman.
- **Direktori keahlian:** 15 keterampilan dalam tiga kategori.
- **Tema gelap dan terang:** dark mode sebagai tampilan awal.
- **Bahasa Inggris dan Indonesia:** pergantian teks antarmuka; bahasa awal adalah Inggris. Sebagian data portofolio tetap berbahasa Inggris.
- **Formulir kontak:** validasi HTML dan pembuatan draf melalui aplikasi email pengunjung.
- **Dukungan keyboard:** skip link, indikator fokus, menu mobile dengan pengelolaan fokus dan tombol Escape.
- **Pemuatan bertahap:** `React.lazy`, `Suspense`, dan lazy loading gambar.
- **Transisi editorial:** pembuka nama bertahap, pergantian halaman, kemunculan proyek, serta transisi menu, tema, dan filter dengan dukungan `prefers-reduced-motion`.

## Gerak dan transisi

Animasi menggunakan CSS dan IntersectionObserver, tanpa library tambahan.

| Interaksi | Perilaku |
| --- | --- |
| Nama pada hero | Muncul per baris melalui mask, naik 18 px selama 450 ms dengan jeda 65 ms; sekali setiap pemuatan website |
| Pergantian bagian | Memudar masuk dan naik 8 px selama 260 ms setelah komponen siap |
| Proyek | Gambar dan deskripsi muncul bersama selama 350 ms saat mendekati viewport; sekali per kunjungan bagian |
| Tautan | Garis bawah memanjang dan panah bergeser maksimal 2 px selama 180 ms saat hover/fokus |
| Gambar proyek | Zoom maksimal 1,025 kali, khusus hover pada perangkat dengan pointer presisi |
| Menu mobile | Drawer bergeser 240 ms, overlay memudar 180 ms; menu yang ditutup langsung berhenti menerima fokus |
| Tema dan filter | Warna berubah 220 ms dan hasil filter memudar masuk 180 ms |

Pergantian tema atau bahasa tidak mengulang pembuka nama. Reduced motion menonaktifkan animasi dan langsung menampilkan konten. Proyek tetap terlihat jika IntersectionObserver tidak tersedia, dan muncul ketika tautannya menerima fokus keyboard.

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Antarmuka | React 19, React DOM, JavaScript/JSX |
| Development dan build | Vite 8, plugin React untuk Vite |
| Styling | CSS custom properties, Flexbox, Grid, dan media query |
| Tipografi | Manrope untuk teks utama, IBM Plex Mono untuk metadata |
| Ikon | Lucide React |
| Pemeriksaan kode | ESLint 9, aturan React Hooks dan React Refresh |
| Konfigurasi hosting | Vercel |

Three.js, React Three Fiber, dan Drei masih tercatat sebagai dependensi komponen `CyberGrid.jsx` yang belum digunakan pada tampilan aktif. Aplikasi tidak memerlukan backend, database, atau API key.

## Menjalankan secara lokal

### Prasyarat

- Node.js sesuai rentang `^20.19.0 || >=22.12.0`, mengikuti kebutuhan Vite dalam lockfile proyek.
- npm.
- Git untuk melakukan clone repository.

```bash
git clone https://github.com/adityamp0/Portfolio-Adit.git
cd Portfolio-Adit
npm ci
npm run dev
```

Buka alamat yang ditampilkan terminal, biasanya **http://localhost:5173**. Jika port tersebut digunakan aplikasi lain, Vite dapat memilih port berikutnya.

Tidak diperlukan konfigurasi `.env`. Koneksi internet digunakan untuk instalasi dependensi serta pemuatan font Google Fonts dan gambar proyek dari Unsplash.

Pada PowerShell yang membatasi eksekusi `npm.ps1`, gunakan `npm.cmd`, misalnya `npm.cmd run dev`.

## Perintah npm

| Perintah | Fungsi |
| --- | --- |
| `npm ci` | Memasang dependensi sesuai `package-lock.json` |
| `npm run dev` | Menjalankan development server |
| `npm run lint` | Memeriksa JavaScript dan JSX |
| `npm run build` | Membuat hasil produksi pada folder `dist/` |
| `npm run preview` | Menyajikan hasil build untuk pemeriksaan lokal |

Jalankan `npm run build` sebelum `npm run preview`. Gunakan `npm install` ketika sengaja menambah atau memperbarui dependensi.

## Struktur proyek

```text
Portfolio-Adit/
|-- documentation/
|   `-- PROJECT_DETAILS.md
|-- public/                       # Favicon dan aset statis
|-- src/
|   |-- assets/                   # Aset lokal yang tersedia
|   |-- components/
|   |   |-- Sidebar.jsx           # Navigasi, tema, bahasa, menu mobile
|   |   |-- Hero.jsx              # Perkenalan dan tautan navigasi
|   |   |-- About.jsx             # Profil dan informasi pribadi
|   |   |-- AcademicJourney.jsx   # Pendidikan dan pelatihan
|   |   |-- SelectedWorks.jsx     # Data dan presentasi proyek
|   |   |-- Certificates.jsx      # Sertifikasi dan filter kategori
|   |   |-- TechnicalRepertoire.jsx # Direktori keahlian
|   |   |-- ContactForm.jsx       # Formulir draf email
|   |   |-- SectionHeader.jsx     # Header bagian yang digunakan bersama
|   |   |-- CyberGrid.jsx         # Komponen lama, tidak digunakan
|   |   `-- Footer.jsx            # Komponen lama, tidak digunakan
|   |-- utils/
|   |   `-- translations.js       # Teks antarmuka EN/ID
|   |-- App.jsx                   # State, pemilihan bagian, footer aktif
|   |-- main.jsx                  # Entry point React
|   |-- index.css                 # Sistem desain dan layout responsif
|   `-- App.css                   # Styling template, tidak diimpor
|-- index.html                    # HTML sumber dan metadata
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- eslint.config.js
|-- vercel.json
`-- README.md
```

`dist/` dihasilkan saat build dan diabaikan oleh Git. Ubah kode di `src/` atau `index.html` pada root, lalu jalankan build kembali untuk memperbarui hasil produksi.

## Alur aplikasi

`index.html` memuat `main.jsx`, yang merender `App` di dalam `StrictMode`. `App.jsx` mengelola tema, bahasa, dan bagian aktif menggunakan state React.

| Navigasi | Komponen |
| --- | --- |
| Index / Indeks | `Hero` dan `About` |
| Journey / Perjalanan | `AcademicJourney` |
| Work / Karya | `SelectedWorks` |
| Certifications / Sertifikasi | `Certificates` |
| Skills / Keahlian | `TechnicalRepertoire` |
| Contact / Kontak | `ContactForm` |

Navigasi mengganti komponen melalui state, tanpa router tambahan. Bagian aktif belum disinkronkan dengan URL atau riwayat browser. Preferensi tema dan bahasa belum disimpan; memuat ulang halaman mengembalikan tampilan awal.

## Proyek yang ditampilkan

| Proyek | Fokus |
| --- | --- |
| [Brazilian E-Commerce Analysis](https://github.com/adityamp0/Project-Data-Analis-Submission) | Analisis data Olist, RFM, geospasial, dan dashboard |
| [Dog & Cat Classification](https://github.com/adityamp0/Klasifikasi-Gambar) | Klasifikasi gambar menggunakan CNN |
| [RFM Segmentation Dashboard](https://github.com/adityamp0/visualisasi-dashboard) | Segmentasi dan visualisasi perilaku pelanggan |
| [Duolingo Sentiment Analysis](https://github.com/adityamp0/Project-Analisis-Sentimen) | Analisis sentimen, ekstraksi kata, dan WordCloud |

Daftar ini merupakan konten showcase. Implementasi masing-masing proyek berada pada repository terpisah.

## Menyesuaikan konten

| Kebutuhan | Lokasi perubahan |
| --- | --- |
| Nama, jabatan, dan media sosial | `Sidebar.jsx` dan `Hero.jsx`; nama footer di `App.jsx` |
| Teks antarmuka dan biodata EN/ID | `src/utils/translations.js` |
| Informasi profil | `About.jsx` |
| Pendidikan dan pelatihan | Array `journeys` di `AcademicJourney.jsx` |
| Proyek | Array `worksData` di `SelectedWorks.jsx` |
| Sertifikasi | Array `certsData` dan `categories` di `Certificates.jsx` |
| Keahlian | Array `repertoire` di `TechnicalRepertoire.jsx` |
| Email dan tautan kontak | `ContactForm.jsx` |
| Warna, font, spacing, dan responsivitas | `src/index.css` |
| Judul browser dan metadata sosial | `index.html` pada root |

Saat menambahkan kategori sertifikasi, sesuaikan juga label filter pada kedua bahasa di `translations.js`.

## Formulir kontak

Formulir memvalidasi nama, email, dan pesan melalui atribut HTML. Saat dikirim, formulir membuka URI `mailto:` dengan subjek dan isi yang sudah di-encode, termasuk karakter khusus dan baris baru.

Pengunjung melanjutkan pengiriman melalui aplikasi emailnya. Website tidak mengirim atau menyimpan pesan melalui server, dan tidak menampilkan konfirmasi bahwa email telah terkirim.

## Build dan deployment

```bash
npm run lint
npm run build
npm run preview
```

Untuk deployment Vercel, gunakan konfigurasi proyek berikut:

| Pengaturan | Nilai |
| --- | --- |
| Framework | Vite |
| Root directory | Root repository |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

`vercel.json` mengaktifkan clean URLs, rewrite ke `/index.html`, dan cache satu tahun dengan `immutable` untuk `/assets/`.

Sesuaikan `og:url` pada `index.html` dengan domain publik sebelum publikasi. Nilai saat ini mengarah ke repository GitHub. Deployment otomatis mengikuti konfigurasi integrasi Git pada akun hosting.

## Validasi redesign

Pada pemeriksaan redesign editorial:

- `npm run lint` dan `npm run build` berhasil.
- Edge headless memeriksa 144 kombinasi: enam bagian, dua tema, dua bahasa, dan enam lebar layar (320, 375, 430, 768, 1024, dan 1440 px).
- Tidak ditemukan overflow horizontal atau error JavaScript pada kombinasi tersebut.
- Filter sertifikat menghasilkan 15 entri keseluruhan, 6 Machine Learning/Data, 7 Web, dan 2 Pemrograman.
- Target tautan keempat proyek, pemuatan gambar, jumlah konten, tombol Escape pada menu mobile, validasi form, dan encoding draf email diperiksa.

Pemeriksaan browser tersebut dilakukan sebagai validasi implementasi. Repository belum menyediakan script `test` atau suite Playwright yang tersimpan.

## Pemilik dan lisensi

**Aditya Maulana Pamungkas**

- [GitHub](https://github.com/adityamp0)
- [LinkedIn](https://linkedin.com/in/adityamaulanapamungkas)
- [Email](mailto:ampaditya55@gmail.com)

Repository belum menyertakan file `LICENSE`. Package ditandai `private: true` pada `package.json`.
