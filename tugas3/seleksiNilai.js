const seleksiNilai = (nilaiAwal, nilaiAknir, arr) => {
  if (nilaiAwal > nilaiAknir) {
    //   validasi 1
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (arr.length < 5) {
    //   validasi 2
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
    //   jalankan proses mencari angka
    hasil = arr.sort((a, b) => a - b).filter((nilai) => nilai > nilaiAwal && nilai < nilaiAknir);
    if (hasil == 0) {
      return "nilai tidak di temukan";
    } else {
      return hasil;
    }
  }
};

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(5, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));

// console.log(seleksiNilai(7, 30, [100, 10, 50, 11, 75, 22, 3, 1, 43, 9]));
