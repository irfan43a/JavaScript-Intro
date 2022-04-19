const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function callback(kata, str) {
  // validasi
  if (kata.toLowerCase().includes(str)) {
    return kata;
  }
}
const searchName = (str, n, callback) => {
  const panjangKata = name.length;
  let proses = [];
  let hasil = [];

  // mencari semuah element yang yang akan di masukan ke proses
  for (let i = 0; i < panjangKata; i++) {
    let data = callback(name[i], str);
    if (data !== undefined) {
      proses.push(data);
    }
  }

  // seleksi jumlah panjang kata yang akan di tampilkan
  for (let i = 0; i < proses.length; i++) {
    if (i < n) {
      hasil.push(proses[i]);
    }
  }
  hasil === 0 ? console.log("nama tidak di temukan") : console.log(hasil);
};

searchName("irfaan", 4, callback);
