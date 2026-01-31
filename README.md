<img width="1919" height="1079" alt="get" src="https://github.com/user-attachments/assets/44c5991b-6082-4bfa-8780-42252a42da51" /># 📚 Library Management API (Remedial Project)

Project ini adalah sebuah **RESTful API** sederhana untuk sistem manajemen perpustakaan. API ini memungkinkan pengguna untuk mengelola data buku (CRUD) dan mencatat transaksi peminjaman buku (*borrowing*) dengan lokasi geografis (latitude/longitude).

Project ini dibuat untuk memenuhi tugas **Pemrograman Web Service (PWS)**.

## 🛠️ Teknologi yang Digunakan
* **Backend:** Node.js (Runtime), Express.js (Framework)
* **Database:** MySQL
* **Testing Tool:** Postman

---

## 🚀 Cara Menjalankan Aplikasi

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal:
* [Node.js](https://nodejs.org/)
* [XAMPP](https://www.apachefriends.org/) (untuk database MySQL)
* [Postman](https://www.postman.com/) (untuk testing API)

### 2. Instalasi Project
1.  **Clone** atau **Download** repository ini.
2.  Buka terminal/CMD di folder project.
3.  Install dependencies yang diperlukan dengan perintah:
    ```bash
    npm install
    ```

### 3. Konfigurasi Database
1.  Nyalakan **Apache** dan **MySQL** pada XAMPP.
2.  Buka **phpMyAdmin** (`http://localhost/phpmyadmin`).
3.  Buat database baru dengan nama: `library_remedial_db`.
4.  Import file SQL yang disertakan (jika ada) atau pastikan tabel `books` dan `borrowlogs` sudah terbuat sesuai struktur di bawah.
5.  Sesuaikan konfigurasi database di file `src/config/db.js` (atau file koneksi database Anda) jika menggunakan password.

### 4. Menjalankan Server
Jalankan perintah berikut di terminal:
```bash
node app.js



🗄️ Struktur Database
Berikut adalah tampilan struktur dan data tabel di phpMyAdmin:

1. Tabel books
Menyimpan data buku (Judul, Penulis, Stok).
<img width="1919" height="1079" alt="Screenshot 2026-01-31 111145" src="https://github.com/user-attachments/assets/1b9ea135-5b26-4542-8fe9-524dc13e948b" />

2. Tabel borrowlogs
Menyimpan riwayat peminjaman buku beserta koordinat lokasi peminjam.
<img width="1919" height="1079" alt="Screenshot 2026-01-31 111136" src="https://github.com/user-attachments/assets/7b8e914d-e440-419f-8e80-c29b89a98599" />

🧪 Hasil Test Endpoint API (Postman)
Berikut adalah bukti pengujian (Testing) endpoint menggunakan Postman.

A. Manajemen Buku (Book CRUD)
1. GET All Books

Endpoint: GET /api/books

Deskripsi: Mengambil semua daftar buku yang tersedia.
<img width="1919" height="1079" alt="get" src="https://github.com/user-attachments/assets/64a8c9b3-9b03-481e-adec-ee6202bd112c" />

2. POST Create Book

Endpoint: POST /api/books

Deskripsi: Menambahkan buku baru ke database.
<img width="1919" height="1079" alt="post (2)" src="https://github.com/user-attachments/assets/9e323644-f610-474c-ba3f-7b4b25dd745a" />

3. PUT Update Book

Endpoint: PUT /api/books/:id

Deskripsi: Mengupdate detail buku (Judul & Stok) berdasarkan ID.
<img width="1919" height="1021" alt="put" src="https://github.com/user-attachments/assets/9d3be2f8-6eed-479b-a01d-c3f6bb66f499" />

4. DELETE Book

Endpoint: DELETE /api/books/:id

Deskripsi: Menghapus buku dari database berdasarkan ID.
<img width="1919" height="1019" alt="delete" src="https://github.com/user-attachments/assets/87179dfb-6e26-4a1d-8b99-58733efc2440" />

B. Transaksi Peminjaman (Borrowing)
1. POST Borrow Book

Endpoint: POST /api/borrow

Deskripsi: Mencatat peminjaman buku, mengurangi stok buku, dan menyimpan lokasi (Lat/Long).
<img width="1919" height="1021" alt="borrow" src="https://github.com/user-attachments/assets/17b1f8d0-ca4c-434f-9a4a-8ed1db1f1a05" />

C. Error Handling
1. Validasi Role (Header Check)

Skenario: Mengakses endpoint tanpa menyertakan role atau kredensial yang sesuai di Header.

Respon: 401 Unauthorized.
<img width="1917" height="1023" alt="message Akses ditolak Role tidak ditemukan di header" src="https://github.com/user-attachments/assets/f0a36f14-f079-46d2-9b61-279a4db68f03" />
