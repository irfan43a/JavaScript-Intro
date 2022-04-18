const seleksiNilai = (nilaiAwal, nilaiAknir, arr) => {
  if (nilaiAwal > nilaiAknir) {
    //   validasi 1
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  } else if (arr.length < 5) {
    //   validasi 2
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  } else {
    //   jalankan proses
    hasil1 = arr.filter((nilaiAwal) => nilaiAwal <= nilaiAknir);
    hasil2 = hasil1.filter((nilaiAknir) => nilaiAknir >= nilaiAwal);
    sort = hasil2.sort((a, b) => a - b);

    if (sort === []) {
      console.log("nilai tidak di temukan");
    } else {
      console.log(sort);
    }
  }
};

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(5, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));

// console.log(seleksiNilai(7, 30, [100, 10, 50, 11, 75, 22, 3, 1, 43, 9]));
