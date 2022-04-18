const kalimat = "kasur rusak";

const isPalindrome = (kalimat) => {
  let huruf = "";
  for (let i = kalimat.length - 1; i >= 0; i--) {
    huruf = huruf + "" + kalimat[i];
  }
  const palindrome = huruf === kalimat ? "palindrome " + true : "buakan palindrome " + false;
  console.log(palindrome);
};

isPalindrome(kalimat);
