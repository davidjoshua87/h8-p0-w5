/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis baransg yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya).
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang,
siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/


function countProfit(shoppers) {
  //list cart item
  var cartItem = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  // variable penampung object product
  var arrObject = [];

  // pengecekan data pembelian kosong atau tidak
  if (shoppers.length !== 0) {
    // stok product
    var stockShoe = cartItem[0][2];
    var stockShirtZoro = cartItem[1][2];
    var stockShirtUniklooh = cartItem[2][2];

    // variable menampung hasil pengecekan
    var shoeBuyers = [];
    var shirtZoroBuyers = [];
    var shirtUnikloohBuyers = [];
    var buyers;
    var leftovers;

    // mengecek pembelian barang dan menghitung jumlah stock
    for (var i = 0; i < shoppers.length; i++) {
      if (shoppers[i].product === 'Sepatu Stacattu') {
        // jika stok masih ada, maka bisa dijual
        if (stockShoe >= shoppers[i].amount) {
          shoeBuyers.push(shoppers[i].name);
          stockShoe -= shoppers[i].amount;
        }
      } else if (shoppers[i].product === 'Baju Zoro') {
        if (stockShirtZoro >= shoppers[i].amount) {
          shirtZoroBuyers.push(shoppers[i].name);
          stockShirtZoro -= shoppers[i].amount;
        }
      } else if (shoppers[i].product === 'Sweater Uniklooh') {
        if (stockShirtUniklooh >= shoppers[i].amount) {
          shirtUnikloohBuyers.push(shoppers[i].name);
          stockShirtUniklooh -= shoppers[i].amount;
        }
      }
    }

    // menghitung sisa stock, profit dan mengecek nama pembeli
    for (var j = 0; j < cartItem.length; j++) {
      //variable nama isi cart item
      var nameItem = cartItem[j][0];
      var stockItem = cartItem[j][2];
      var price = cartItem[j][1];

      if (nameItem === 'Sepatu Stacattu') {
        buyers = shoeBuyers;
        leftovers = stockShoe;
        profit = (stockItem - stockShoe) * price;
      } else if (nameItem === 'Baju Zoro') {
        buyers = shirtZoroBuyers;
        leftovers = stockShirtZoro;
        profit = (stockItem - stockShirtZoro) * price;
      } else if (nameItem === 'Sweater Uniklooh') {
        buyers = shirtUnikloohBuyers;
        leftovers = stockShirtUniklooh;
        profit = (stockItem - stockShirtUniklooh) * price;
      }

      //list object product
      var objectProduct = {};
      objectProduct.product = nameItem;
      objectProduct.shoppers = buyers;
      objectProduct.leftOver = leftovers;
      objectProduct.totalProfit = profit;
      arrObject.push(objectProduct);
    }
    return arrObject;
  } else {
    return [];
  }
}

// TEST CASES
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 2
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 3
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 8
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 10
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 1
}, {
  name: 'Devi',
  product: 'Baju Zoro',
  amount: 1
}, {
  name: 'Lisa',
  product: 'Baju Zoro',
  amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]
