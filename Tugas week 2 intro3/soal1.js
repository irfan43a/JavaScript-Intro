const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => item === day);
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error(`Hari ${day} bukan hari kerja`));
      }
    }, 2000);
  });
};

// then catch
// cekHariKerja("minggu")
// .then((response) => console.log("ok :" + response + " adalah hari kerja"))
// .catch((error) => console.log("Not ok!" + error));

// try catch
const result = async (day) => {
  try {
    const result = await cekHariKerja(day);
    console.log("hari " + result + " hari kerja");
  } catch (error) {
    console.log(error);
  }
};
result("sabtu");
