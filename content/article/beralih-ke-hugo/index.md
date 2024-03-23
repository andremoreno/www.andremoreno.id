---
title: "Beralih ke HUGO"
date: 2022-07-04
author: Andre Moreno
---
### Hugo


Artikel ini bukan tentang cara migrasi situs Jekyll / Wordpress ke Hugo, ini tentang transisi dari pola pikir WordPress Anda ke Hugo!

Situs web terakhir saya menggunakan Jekyll ([source code](https://github.com/andremoreno/www.andremoreno.com-old)). Lalu saya menggunakan Wordpress kembali, sebelum akhirnya memutuskan untuk mengupdate website saya kembali menggunakan Jekyll. Tetapi terlalu banyak yang berubah, dan saya banyak mengalami kesulitan untuk mengupdatenya. Lalu saya memutuskan untuk menggunakan generator lain, dan setelah mencoba dan memilih, akhirnya saya memutuskan untuk menggunakan Hugo. [Hugo](https://www.gohugo.io) adalah generator situs statis penuh fitur yang luar biasa yang juga open source dan gratis. Pengalaman saya dengan Hugo sejauh ini cukup bagus. Hugo cepat dan fleksibel.

Jika Anda belum memiliki situs Hugo, sangat mudah untuk menyiapkannya dan saya sangat merekomendasikannya untuk proyek besar dan kecil. Jika Anda memiliki pengalaman menggunakan CMS seperti WordPress, Anda akan senang mengetahui bahwa Hugo menggunakan banyak terminologi serupa.

### Form Netlify

Untuk kontak form awalnya saya menggunakan Formspree. Setelah menggunakan Netlify untuk hosting situs ini, saya baru memperhatikan satu fitur dari Netlify. Netlify Forms menawarkan cara yang efektif untuk mengintegrasikan formulir ke situs Anda. Tidak ada JavaScript yang diperlukan, dan formulir Anda tidak dikirim ke domain yang berbeda: Anda cukup menambahkan atribut netlify ke tag <form> Anda, dan Anda dapat mulai menerima kiriman di dashboard Netlify Anda. Ini dimungkinkan karena Netlify mem-parsing HTML situs Anda pada waktu penerapan, sehingga mereka dapat mengidentifikasi formulir Anda dan memastikan kode penanganan formulir yang diperlukan ada di lingkungan hosting situs.Tetapi fitur ini hanya tersedia jika Anda menggunakan platform Netlify untuk menyebarkan dan menghosting situs statis Anda. Netlify menawarkan 100 pengiriman per bulan di tingkat gratis, yang lebih dari cukup karena PENGIRIMAN SPAM TIDAK DIHITUNG.


### Install Go

{{< highlight Bash "linenos=table" >}}
cd $HOME/src
wget https://go.dev/dl/go1.20.3.linux-amd64.tar.gz
cd $HOME/src
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.3.linux-amd64.tar.gz

export PATH=$PATH:/usr/local/go/bin
source $HOME/.profile
{{< / highlight >}}

\\
### Check Go Version
{{< highlight Bash "linenos=table" >}}
go version
{{< / highlight >}}


\\
### Install Hugo

{{< highlight Bash "linenos=table" >}}
mkdir $HOME/src
cd $HOME/src
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install --tags extended
{{< / highlight >}}
