/*
======================
Highest Global Minimum
======================

Name :

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.

[]

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/
function highestGlobalMinimum(firstArr, secondArr) {
  var arrBaru = [];
  // mengurutkan nilai array firstArr
  for (var i = 0; i < firstArr.length; i++) {
    for (var j = i; j < firstArr.length; j++) {
      if (firstArr[i] > firstArr[j]) {
        var tampung = firstArr[i];
        firstArr[i] = firstArr[j];
        firstArr[j] = tampung;
      }
    }
  }
  // console.log('---'+firstArr);
  // mengurutkan nilai array secondarr
  for (var x = 0; x < secondArr.length; x++) {
    for (var y = x; y < secondArr.length; y++) {
      if (secondArr[x] > secondArr[y]) {
        var tampung2 = secondArr[x];
        secondArr[x] = secondArr[y];
        secondArr[y] = tampung2;
      }
    }
  }
  // membandingkan nilai array firstArr dan secondArr yg terbesar
  if (firstArr[0] > secondArr[0]) {
    return firstArr[0];
  }
  return secondArr[0];
}


//TEST CASES
console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
