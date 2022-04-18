const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
let grade = "";

// validasi
if (mtk === "" || bahasaIndonesia === "" || bahasaInggris === "" || ipa === "") {
  console.log("nilai harus di isi");
  process.exit();
} else {
  console.log("hasil UN");
}

const jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa;
const average = jumlah / 4;

// grade
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log(`nilai rata-rata adalah = ${average}
dan gradenya adalah = ${grade}`);
