const tampil = (error, month) => {
  if (!error) {
    month.map((month) => console.log(month));
  } else {
    console.log(error);
  }
};

const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(error, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 3000);
};

getMonth(tampil);
