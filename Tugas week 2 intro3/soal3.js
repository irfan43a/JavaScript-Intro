// program 1

// let ekualValuePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let value1 = 2;
//     let value2 = "2";
//     const result = value1 === value2;
//     if (result) {
//       resolve("Success");
//     } else {
//       reject("failed");
//     }
//   }, 3000);
// });

// ekualValuePromise
//   .then((maessage) => {
//     console.log("perbandingan sama " + maessage);
//   })
//   .catch((maessage) => {
//     console.log("perbandingan tidak sesuai " + maessage);
//   });

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject({
        status: response.status,
      });
    }
  })
  .then((json) => {
    return "irfan";
    console.log(json);
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    if (error.status == 404) {
      console.log("Data tidak ditemukan");
    }
  });
