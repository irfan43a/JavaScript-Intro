function balikan(kata) {
  const subKata = kata.split("");
  const panjangKata = kata.length;

  const subKataTerbalik = subKata.map((hutuf, indeks) => subKata[panjangKata - (1 + indeks)]);

  const kataFinal = subKataTerbalik.join("");
  console.log(kataFinal);
}

balikan("Javascript");

const reverseString = (kata) =>
  kata
    .split("")
    .map((huruf, indexs) => kata[kata.length - (1 + indexs)])
    .join("");

console.log(reverseString("Javascript"));
