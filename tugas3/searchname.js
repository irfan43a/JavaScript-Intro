const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function callback(kata, str) {
  if (kata.toLowerCase().includes(str)) {
    return kata;
  }
}
const searchName = (str, n, callback) => {
  const panjangKata = name.length;
  let proses = [];
  let hasil = [];

  for (let i = 0; i < panjangKata; i++) {
    let data = callback(name[i], str);
    if (data !== undefined) {
      proses.push(data);
    }
  }

  for (let i = 0; i < proses.length; i++) {
    if (i < n) {
      hasil.push(proses[i]);
    }
  }
  console.log(hasil);
  return hasil;
};

searchName("an", 3, callback);

// const searchName = (str) => {
//   for (let i = 0; i < name.length; i++) {
//     const nama = name[i];
//     if (nama.toLowerCase().includes(str)) {
//       console.log(nama);
//     }
//   }
// };

// searchName("an");
