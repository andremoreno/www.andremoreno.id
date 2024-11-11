---
layout: post
title: "Cara Cepat Mendapatkan Extensi File Dengan Menggunakan PHP"
date: 2016-10-09
summary: Mungkin kita perlu untuk mendapatkan ekstensi dari file-file yang diunggah atau untuk memeriksa ekstensi dari berkas-berkas yang ada di website kita dengan menggunakan PHP.
author: Andre Moreno
---

Mendapatkan ekstensi sebuah file / berkas bisa sangat penting dalam memvalidasi berkas. Mungkin kita perlu untuk mendapatkan ekstensi dari file-file yang diunggah atau untuk memeriksa ekstensi dari berkas-berkas yang ada di website kita dengan menggunakan PHP.

Kita menggunakan fungsi php <a href="http://php.net/manual/en/function.pathinfo.php">pathInfo()</a> pada sebuah file. (contoh: "/var/www/andremoreno/nama.berkas.jpg"), yang akan memberikan informasi lengkap akan file tersebut. Sebagai contoh, kita akan menjalankan kode berikut:


{{< gist andremoreno 5b2ae768c802cae636cf3d77128229db "1.php" >}}

Yang bila dijalankan akan menghasilkan:

{{< gist andremoreno 5b2ae768c802cae636cf3d77128229db "2.php" >}}

Seperti yang kita bisa lihat, bagian "extension" berisi ekstensi dari file tersebut.
Bisa dilihat di tautan berikut ini: <a href="http://codepad.org/NeCvCPkB">http://codepad.org/NeCvCPkB</a>

Sekarang kita bisa menyingkat fungsi diatas tadi ini dengan menambahkan **PATHINFO_EXTENSION** dengan tujuan hanya mengambil ekstensi berkas tanpa informasi tambahan.

{{< gist andremoreno 5b2ae768c802cae636cf3d77128229db "3.php" >}}

Kode bisa dilihat ditautan berikut: <a href="http://codepad.org/AN9ZnolN">http://codepad.org/AN9ZnolN</a>

