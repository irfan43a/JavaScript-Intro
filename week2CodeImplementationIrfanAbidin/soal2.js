const pijarFood = (price, voucher, jarak, pajak) => {
  let potongan = "";
  let subTotal = "";

  // voucher
  if (voucher.toLowerCase() === "pijarfoods") {
    if (price >= 50000) {
      potongan = (price * 50) / 100;
      if (potongan >= 50000) {
        potongan = 50000;
      } else {
        potongan = (price * 50) / 100;
      }
    } else {
      potongan = 0;
    }
  } else if (voucher.toLowerCase() === "ditraktirpijar") {
    if (price >= 25000) {
      potongan = (price * 60) / 100;
      if (potongan >= 30000) {
        potongan = 30000;
      } else {
        potongan = (price * 60) / 100;
      }
    } else {
      potongan = 0;
    }
  } else {
    potongan = false;
    console.log("tidak mendapat potongan");
  }
  // jarak
  if (jarak >= 2) {
    jarakTambahan = jarak - 2;
    biayaJarak = 5000 + jarakTambahan * 3000;
  } else if (jarak === 0) {
    biayaJarak = 0;
  } else {
    biayaJarak = 5000;
  }
  // pajak
  if (pajak) {
    pajak = (price * 5) / 100;
  } else {
    pajak = false;
  }
  // let jauh = ;

  subTotal = price - potongan + biayaJarak + pajak;

  // output
  console.log(`Harga       : ${price}
Potongan    : ${potongan}
Biaya Antar : ${biayaJarak}
Pajak       : ${pajak}
Sub Total   : ${subTotal}`);
};
pijarFood(1000000, "tidak punya", 0, true);
