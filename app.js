// 1-masala //
function stringchopish(str, soz) {
  let index = str.indexOf(soz);
  if (index !== -1) {
    return str.slice(0, index) + str.slice(index + soz.length);
  }
  return str;
}

let gap = "Begzod aka bla";
let chopiladigansoz = "bla";
let yangistring = stringchopish(gap, chopiladigansoz);
console.log(yangistring);
// 2-masala //

let qavsolish = {
  "<div>": "div",
  "<span>": "span",
};

console.log(qavsolish);
// 3-masala //
function tubsonmi(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(tubsonmi(4));
console.log(tubsonmi(5));
// 4-masla //
function arrayyaratish(arr) {
  let bosharr = [];

  for (let item of arr) {
    let yangiarr = {
      country: item[0],
      city: item[1],
    };
    bosharr.push(yangiarr);
  }

  return bosharr;
}

let malumotlar = [
  ["Uzbekistan", "Tashkent"],
  ["USA", "New York"],
  ["Japan", "Tokyo"],
];

let yangiarray = arrayyaratish(malumotlar);
console.log(yangiarray);
// 5-masala //
function sonlaryigindisi(n1, n2) {
  let son = 0;

  for (let i = n1; i <= n2; i++) {
    son += i;
  }

  return son;
}

console.log(sonlaryigindisi(1, 2));
console.log(sonlaryigindisi(5, 10));
// 6-masala //
function takrorlanmagansonlar(arr) {
  let yagonasonlar = [];
  let raqamlarsoni = {};

  arr.forEach((element) => {
    if (raqamlarsoni[element]) {
      raqamlarsoni[element]++;
    } else {
      raqamlarsoni[element] = 1;
    }
  });

  for (let key in raqamlarsoni) {
    if (raqamlarsoni[key] === 1) {
      yagonasonlar.push(parseInt(key));
    }
  }

  return yagonasonlar;
}

let arr6 = [1, 5, 6, 1, 5, 7, 2];
console.log(takrorlanmagansonlar(arr6));
// 7-masala //
function oxshashinichopish(arr) {
  let turlixil = new Set();
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!turlixil.has(arr[i])) {
      turlixil.add(arr[i]);
      resultArray.push(arr[i]);
    }
  }

  return resultArray;
}

let arr = [1, 5, 6, 1, 5, 7, 2];
console.log(oxshashinichopish(arr));
// 8-masala //
function bazilariniochirish(arr, k, m) {
  if (k <= 0 || m >= arr.length || k >= m) {
    return "Noto'g'ri kirish! 0 < k < m < massiv uzunligi";
  }

  arr.splice(k, m - k + 1);

  return {
    "Elementlar soni": arr.length,
    Elementlar: arr,
  };
}

let arr8 = [1, 5, 6, 1, 5, 7];
let k = 1;
let m = 3;

console.log(bazilariniochirish(arr8, k, m));
// 9-masala //
let books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

books.forEach((book, index) => {
  let readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
  console.log(
    index +
      1 +
      ". " +
      book.author +
      "ning" +
      " " +
      book.title +
      " " +
      "kitobi" +
      " " +
      readStatus
  );
});
// 10-masala //
let products = [
  { name: "kitob", narxi: 20000, chegirmasi: 10, soni: 5 },
  { name: "daftar", narxi: 10000, chegirmasi: 20, soni: 4 },
  { name: "kle", narxi: 15000, chegirmasi: 8, soni: 10 },
  { name: "ruchka", narxi: 18000, chegirmasi: 5, soni: 6 },
  { name: "qalam", narxi: 5000, chegirmasi: 10, soni: 16 },
];

products.forEach((product) => {
  let umumiynarxi = product.narxi * (1 - product.chegirmasi / 100);
  console.log(product.name + "ning narxi:" + umumiynarxi);
});
