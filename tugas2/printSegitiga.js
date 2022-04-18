let printSegitiga = "";
let panjang = 5;
if (typeof panjang === "string") {
  console.log("harus number");
} else {
  for (let i = panjang; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      printSegitiga += j;
    }
    printSegitiga += "\n";
  }
  console.log(printSegitiga);
}
