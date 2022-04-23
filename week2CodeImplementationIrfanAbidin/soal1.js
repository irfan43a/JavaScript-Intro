// palindrome

// const isPalindrome = (kalimat) => {
//   let kalimat1 = kalimat.toLowerCase();
//   let huruf = "";
//   for (let i = kalimat1.length - 1; i >= 0; i--) {
//     huruf = huruf + "" + kalimat1[i];
//   }
//   const palindrome = huruf === kalimat1 ? `${kalimat1} palindrome true` : `${kalimat1} bukan palindrome false`;
//   console.log(palindrome);
// };
// // isPalindrome("kAsurRusak");

// reverse Words

// method
const reverseWords = (kalimat) => {
  let kata = kalimat.split(" ").reverse().join(" ");
  console.log(kata);
};
// reverseWords("saya belajar javascript");

// looping
const balikKata = (kalimat) => {
  const kata = kalimat.split(" ");
  let kataBalik = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    kataBalik = kataBalik + " " + kata[i];
  }
  console.log(kataBalik);
};

// balikKata("saya belajar javascript");
