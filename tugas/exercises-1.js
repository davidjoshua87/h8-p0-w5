/*
Logic Challenge - Mengelompokkan Angka
Problem
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka.
Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]

Code
*/

//code disini

function mengelompokkanAngka(arr) {
  var arrResult = [];
  // console.log(arrResult);
  var b1 = []; // arr yang genap
  var b2 = []; // arr yang ganjil
  var b3 = []; // arr kelipatan3
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      b3.push(arr[i]);
    }else if (arr[i] % 2 !== 0) {
      b2.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      b1.push(arr[i]);
    }
  }
  arrResult.push(b1, b2, b3); // console.log(b1);// console.log(b2);// console.log(b3);
  return arrResult;
}


// function mengelompokkanAngka(arr) {
//   var arrResult = [];
//   // console.log(arrResult);
//   var b1 = []; // arr yang genap
//   var b2 = []; // arr yang ganjil
//   var b3 = []; // arr kelipatan3
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
//       b2.push(arr[i]);
//     } else if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
//       b1.push(arr[i]);
//     } else if (arr[i] % 3 === 0) {
//       b3.push(arr[i]);
//     }
//   }
//   arrResult.push(b1, b2, b3); // console.log(b1);// console.log(b2);// console.log(b3);
//   return arrResult;
// }

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
