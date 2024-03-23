---
title: "The target='_blank' vulnerability"
date: 2017-02-12
image: images/blog/target-blank-vulnerability-thumb.jpg
feature_image: images/blog/target-blank-vulnerability-details.jpg
author: Andre Moreno
draft: true
---
Selama bertahun-tahun, saya adalah penggemar menggunakan target="_blank" di dalam setiap tag link di situs web saya yang tertaut ke situs eksternal sehingga akan membuat pemirsa tetap berada di situs saya di latar belakang sehingga mereka dapat dengan mudah kembali lagi nanti. Namun, Ben Halpern menjelaskan masalah (dengan contoh) bagaimana masalah tersebut muncul [di halaman ini](https://dev.to/ben/the-targetblank-vulnerability-by-example) dan bagaimana jendela/tab yang berisi situs web asal (yaitu yang memiliki tag link target) dapat dimanipulasi untuk mengelabui pengguna agar memberikan detail ke situs setara palsu.

Tetapi untuk menjelaskan cara mengatasi kerentanan, Anda harus menambahkan yang berikut ini ke elemen tag link apa pun yang menargetkan jendela/tab baru:

{{< highlight html "linenos=table" >}}
rel="noopener noreferrer"
{{< / highlight >}}

Stay safe out there!
