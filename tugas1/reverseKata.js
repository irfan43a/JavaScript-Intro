const kalimat = "saya ada irfan";

const reverseKata = (kalimat) => {
  let kata = kalimat.split(" ");
  let balikKata = kata.reverse().join(" ");
  console.log(balikKata);
};
reverseKata(kalimat);

const balikKata = (kalimat) => {
  const kata = kalimat.split(" ");
  let kataBalik = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    kataBalik = kataBalik + " " + kata[i];
  }
  console.log(kataBalik);
};

balikKata(kalimat);
