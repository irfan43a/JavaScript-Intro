data = fetch("https://jsonplaceholder.typicode.com/users/")
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
    json.map((hasil) => console.log(hasil.name));
  })
  .catch((error) => {
    if (error.status == 404) {
      console.log("Data tidak ditemukan");
    }
  });
