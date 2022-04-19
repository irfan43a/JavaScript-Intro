// 10 method bawaan atau build-in Functions pada java script
// beserta contoh penggunaanya

//String - Method
// 1. chartAt(index)
// method chartAt() digunakan untuk mencari atau menampilkan karakter dengan index yang spesifik
const kataString = "Saaya sedang belajar bahasa pemrograman javascript";
console.log(kataString.charAt(0), kataString.charAt(3), kataString.charAt(5), kataString.charAt(9), kataString.charAt(48));

// 2. charCodeAt(index)
// method charCodeAt() di gunakan untuk mengembalikan kode unik atau khusus darin karakter yang di tentukan dari index
// console.log(kataString.charCodeAt(0), kataString.charCodeAt(1), kataString.charCodeAt(2), kataString.charCodeAt(3));

// 3. concat()
// method concat() digunakan untuk menambahlkan atau menggabungkan dua atau lebih string dan mengembalikan string baru
const string1 = "saya sedanga belajar ";
const string2 = "pemograman menggunkan bahasa ";
const string3 = "Java Script";
const StringFinal = string1.concat(string2, string3);
// console.log(StringFinal);

// 4.substr()
// method substr() untuk mengembalikan karakter dalam bentuk string awal dalam lokasi spesifik sampai
// dengan spesifik panjang karakter yang di ekstrak atauy diambil
const kalimat = "Saya berenang ketepian";
console.log(kalimat.substr(1, 6));
console.log(kalimat.substr(5));

// Array method
// 5. Array.from()
// Method array.form() dapat melakukan beberapa hal dari menjalaknkan map()funsgsi pada data
// juga bisa merubah string menjadi array atau membuat array baru dari data
const arr = [1, 5, 6, 4, 8, 4];
// console.log(Array.from(arr));

const myString = "Hello Indonesia";
// console.log(Array.from(myString));

const newArr = Array.from(arr, (item) => item + 2);
// console.log(newArr);

// 6. String.repeat()
// method String.repeat sesuai namanya dapat mengulang string
const salam = "Hello haii ";
// console.log(salam.repeat(10));

// 7. Array shift()
// method shift() di berfungsi untuk menghapus element atau index pertama dari array
const element = [10, 100, 200, 12, 14, 6];
// console.log(element);
// const element2 = element.shift();
// console.log(element2);
// console.log(element);

// 8. array unshift()
// method unshift() berfungsi untuk menambahkan beberapa element di awal dari array
const buah = ["semangka", "nanas", "durian", "apel"];
// console.log(buah);
// console.log(buah.length);
const banyakbuah = buah.unshift("kedondong", "sirsak");
// console.log(buah);
// console.log(banyakbuah);

// 9.slice()
// method slice() berfungsi untuk mengambil element sesuai parameter yang spesifik
// yang akan menghasilkan array baru, paramerte pertama di ambil dan parameter ke 2 adalah panjang elemen
// yang di ambil

// const siswa = ["dadang", "dudung", "dedeng", "diding", "joko"];
// console.log(siswa.slice(1, 4));
// console.log(siswa);

// 10. splice()
// method splice() berfungsi untuk menambahkan dan menghapus element pada
// array yang di tentukan dengan paramerter awal, panjang elemet yang di hapus
// dan array yang ingin di tambahkan

const produk = ["kesehatan", "Obat", "Herbal", "olahraga", "Healing"];
// console.log(produk);
// const hapus = produk.splice(1, 3, "Vitamin", "suplement");
// console.log(`Produk yang di hapus : ${hapus}`);
// console.log(produk);
