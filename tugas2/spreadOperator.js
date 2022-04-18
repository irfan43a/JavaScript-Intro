const data = {
  id: 1,
  name: "Leanne Graham",
  userName: "Bret",
  email: "Sincere@aplri.biz",
  address: {
    street: "Kulkas Light",
    suite: "Apt.556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const data2 = {
  name: "irfan abidin",
  email: "irfan43abdin@gmail.com",
  hobi: ["touring", "traveling", "gaming"],
};

// soal a
const dataSaya = { ...data, ...data2, makananFavorit: ["mie", "baso", "urat", "terlor", "cincang"] };
console.log(dataSaya);

// soal b
const { street, city } = data.address;
console.log(street, city);
