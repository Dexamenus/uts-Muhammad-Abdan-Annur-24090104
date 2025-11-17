NAMA : Muhammad Abdan Annur<br>
NIM  : 24090104<br>
Link GitHub Repository: <br>
Link GitHub Pages: 

DESKRIPSI PROJECT
==================

--HALAMAN LOGIN--<br>
Email untuk Validasi: abdan@gmail.com<br>
Pass untuk Validasi : 24090104
- Menampilkan form login yang meminta input Email (sebagai username) dan Password (diisi dengan NIM).
- Menggunakan JavaScript untuk validasi: jika salah satu kolom kosong, akan muncul pesan error.
- Menggunakan JavaScript untuk validasi: jika ussername tidak menggunakan @gmail.com, akan muncul pesan error.
- Menggunakan JavaScript untuk validasi: jika email atau pass salah, akan muncul pesan Email atau Password (NIM) salah.
- Jika semua kolom terisi, akan muncul alert "Login berhasil" dan pengguna akan diarahkan ke halaman dashboard.html

--HALAMAN DASHBOARD--
- Halaman utama setelah login berhasil, menampilkan tiga "card" ringkasan: Total Produk, Total Penjualan, dan Total Revenue.
- Data untuk ringkasan ini diambil dari object di dalam file JavaScript.
- Memiliki tombol "Lihat Data Produk" yang akan mengarahkan pengguna ke halaman products.html.

--HALAMAN LIST DATA PRODUCT--
- Menampilkan data produk dalam bentuk tabel yang kolomnya terdiri dari No, Nama Produk, Harga, Stok, dan Aksi.
- Data tabel diambil dari array of objects di JavaScript dan ditampilkan ke HTML menggunakan manipulasi DOM (seperti forEach atau map).
- Kolom "Aksi" berisi tombol Edit (yang akan menampilkan alert saat diklik) dan tombol Delete (yang akan menghapus baris produk dari tabel setelah ada konfirmasi)
