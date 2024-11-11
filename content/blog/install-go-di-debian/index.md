---
title: "Install Go di Debian (WSL)"
date: 2022-07-01
author: Andre Moreno
---
### Installing Go

Pertama, kita ingin memastikan tidak ada instalasi Go versi sebelumnya. Jalankan perintah berikut di WSL Debian:
{{< highlight bash "linenos=table" >}}
sudo rm -rf /usr/local/go* && sudo rm -rf /usr/local/go
{{< / highlight >}}

Kemudian kita perlu mengunduh versi terbaru ~~(saat ini 1.18.3)~~(saat ini 1.23.3).

Untuk versi terbaru juga bisa dicek di [https://go.dev/dl](https://go.dev/dl). Kita bisa menjalankan perintah berikut:

{{< highlight bash "linenos=table" >}}
cd $HOME/src
wget https://go.dev/dl/go1.23.3.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.23.3.linux-amd64.tar.gz

export PATH=$PATH:/usr/local/go/bin
source $HOME/.profile
{{< / highlight >}}

&nbsp;

### Periksa Versi Go
Setelah proses instalasi selesai, kita bisa melanjutkan dengan memeriksa versi go untuk memastikan go terinstall dengan benar.

{{< highlight shell "linenos=table" >}}
go version
{{< / highlight >}}