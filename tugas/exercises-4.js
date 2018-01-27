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
  var cartItem = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  var resultObject = [];

  if (shoppers.length !== 0) {
    for (var i = 0; i < cartItem.length; i++) {
      var objectShoppers = {};
      var buyer = [];
      var purchase = 0;
      var stockItem = cartItem[i][2];
      var nameItem = cartItem[i][0];
      var price = cartItem[i][1];
      for (var j = 0; j < shoppers.length; j++) {
        var productNamePurchased = shoppers[j].product;
        var amountProductPurchased = shoppers[j].amount;
        var nameBuyers = shoppers[j].name;
        if (productNamePurchased === nameItem &&  purchase + amountProductPurchased <= stockItem) {
          purchase += amountProductPurchased;
          buyer.push(nameBuyers);
        }
      }
      console.log('+++ ' + purchase);
      objectShoppers.product = nameItem;
      objectShoppers.shoppers = buyer;
      objectShoppers.leftOver = stockItem - purchase;
      objectShoppers.totalProfit = price * purchase;
      resultObject.push(objectShoppers);
    }
    return resultObject;
  } else {
    return [];
  }
}


// TEST CASES
// console.log(countProfit([{
//   name: 'Windi',
//   product: 'Sepatu Stacattu',
//   amount: 2
// }, {
//   name: 'Vanessa',
//   product: 'Sepatu Stacattu',
//   amount: 3
// }, {
//   name: 'Rani',
//   product: 'Sweater Uniklooh',
//   amount: 2
// }]));
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
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]
