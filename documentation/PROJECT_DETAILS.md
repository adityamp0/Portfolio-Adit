# 📘 Dokumentasi Proyek: Portfolio-Adit

Dokumen ini berisi rincian teknis mendalam mengenai pengembangan, struktur, dan filosofi desain dari project **Portfolio-Adit**.

## 🎯 Filosofi Desain: "Sky Neon"
Tema **Sky Neon** dipilih untuk mencerminkan identitas yang modern, futuristik, namun tetap bersih (clean). 
- **Warna Utama**: `#00f3ff` (Sky Neon Blue).
- **Latar Belakang**: Kombinasi warna gelap pekat (`#030303`) untuk menciptakan kontras tinggi yang nyaman bagi mata (Dark Mode).
- **Interaktivitas**: Fokus pada *feedback* visual mikro, seperti glow saat hover, transisi smooth, dan kursor interaktif yang menambah kesan "Cyber-Security" atau "Modern Developer".

## 🏗️ Arsitektur Kode

### 1. Sistem Styling (`index.css`)
Seluruh sistem desain dikelola melalui variabel CSS untuk memudahkan modifikasi tema di masa mendatang.
- **Variabel Global**: Terdefinisi di `:root`, mencakup skema warna, radius border, dan lebar sidebar.
- **Custom Cursor**: Diimplementasikan menggunakan manipulasi DOM yang terikat ke pergerakan mouse, memberikan pengalaman unik bagi pengunjung.
- **Glassmorphism**: Menggunakan `backdrop-filter: blur()` dan transparansi variabel untuk kartu (cards) dan sidebar.

### 2. Komponen Modular (`src/components/`)
Project ini mengikuti prinsip *Component-Based Development*:
- **Hero.jsx**: Landing area dengan tipografi besar dan deskripsi singkat.
- **AcademicJourney.jsx**: Menggunakan desain timeline vertikal dengan logo institusi yang terintegrasi.
- **TechnicalRepertoire.jsx**: Mengelompokkan skill menjadi kategori logis untuk keterbacaan yang lebih baik.
- **SelectedWorks.jsx**: Grid interaktif untuk proyek profesional/pribadi.
- **ContactForm.jsx**: UI form modern dengan validasi visual dasar.

### 3. State Management & Perilaku
- **Theme Toggle**: Menggunakan atribut `data-theme` pada elemen `html` untuk beralih antara skema warna tanpa perlu memuat ulang halaman.
- **Scrolling**: Menggunakan standar browser dengan `scroll-behavior: smooth` dan optimasi performa pada perangkat mobile.

## 🛠️ Panduan Pengembangan

### Menambah Proyek Baru
1. Buka `src/components/SelectedWorks.jsx`.
2. Tambahkan objek baru ke dalam array data proyek yang ada.
3. Masukkan judul, deskripsi, tag teknologi, dan link (jika ada).

### Menambah Sertifikat
1. Buka `src/components/Certificates.jsx`.
2. Tambahkan data sertifikat baru. Pastikan gambar sertifikat diletakkan di folder `/public/` atau `/src/assets/`.

## 📱 Optimasi Mobile
Aplikasi ini sudah dioptimalkan melalui Media Queries:
- Sidebar otomatis berubah menjadi *overlay* dengan menu burger (hamburger) pada layar di bawah 1024px.
- Kursor kustom dinonaktifkan pada perangkat sentuh (touchscreen) untuk kenyamanan navigasi bawaan OS.
- Padding dan ukuran font disesuaikan secara dinamis menggunakan unit `clamp()` dan `rem`.

---

**Informasi Tambahan:**
Project ini dideploy melalui **Vercel** (`vercel.json` disertakan). Untuk pembaharuan otomatis, setiap push ke branch `main` akan memicu build di platform deployment terkait.
