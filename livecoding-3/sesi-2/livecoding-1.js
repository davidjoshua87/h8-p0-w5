/*
======================
Lowest Local Maximum
======================

Name :_____________

[INSTRUCTIONS]

lowestLocalMaximum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka maksimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka maksimum yang paling kecil.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.

[]

[EXAMPLE]
lowestLocalMaximum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai maksimum dari firstArr = 1
nilai maksimum dari secondArr = 17

karena 1 < 17, maka function lowestLocalMaximum akan me-return 1.
*/
//inisialisasi variable tampung bentuk arrBaru
//sebuah fungsi parameter firstArr dan secondArr
//buat pengurutan dari terbesar ke terkecil pada firstArr return nilai array firstArr
//buat pengurutan dari terbesar ke terkecil pada secondArr return nilai array secondArr
//masukan hasil pengurutan firstArr index pertama atau yang memiliki nilai terbesar ke arrBaru
//masukan hasil pengurutan secondArr index pertama atau yang memiliki nilai terbesar ke arrBaru
//lalu urutkan kedua nilai yang tertampung diarrBaru sehingga mendapatkan nilai terkecilnya
//return arrBaru dengan index pertama

//code disini

// function lowestLocalMaximum(firstArr, secondArr) {
//   var arrBaru = [];
//   firstArr.sort(function(value1, value2) {
//     return value1 < value2;
//   });
//   // console.log(firstArr);
//   secondArr.sort(function(value1, value2) {
//     return value1 < value2;
//   });
//   // console.log(secondArr);
//   arrBaru.push(firstArr[0]);
//   arrBaru.push(secondArr[0]);
//   arrBaru.sort(function(value1, value2) {
//       return value1 < value2;
//     });
//     return arrBaru[arrBaru.length - 1];
//   }


function lowestLocalMaximum(firstArr, secondArr) {
  var arrBaru = [];
  // mengurutkan nilai array firstArr
  for (var i = 0; i < firstArr.length; i++) {
    for (var j = i; j < firstArr.length; j++) {
      if (firstArr[i] < firstArr[j]) {
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
      if (secondArr[x] < secondArr[y]) {
        var tampung2 = secondArr[x];
        secondArr[x] = secondArr[y];
        secondArr[y] = tampung2;
      }
    }
  }
  // console.log('==='+secondArr);
  // masukan nilai yg tertnggi di variable tampung arrBaru
  arrBaru.push(firstArr[0]);
  arrBaru.push(secondArr[0]);
  // console.log('<<<<' + arrBaru);

  // mengurutkan nilai array arrBaru dari terkecil ke besar
  for (var z = 0; z < arrBaru.length; z++) {
    for (var w = z; w < arrBaru.length; w++) {
      if (arrBaru[z] > arrBaru[w]) {
        var tampung3 = arrBaru[z];
        arrBaru[z] = arrBaru[w];
        arrBaru[w] = tampung3;
      }
    }
  }
  // console.log(arrBaru);
  // tampilkan nilai yang pertama
  return arrBaru[0];
}

console.log(lowestLocalMaximum([1, 1, 1], [8, 15, 17, 9])); // 1
console.log(lowestLocalMaximum([4, 8, 9, 12], [33, 88, 99, 11])); // 12
console.log(lowestLocalMaximum([1, 2, 5, 2, 2], [67, 45, 55])); // 5
console.log(lowestLocalMaximum([6, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 10
console.log(lowestLocalMaximum([5, 11, 18, 6], [3, 1, 8, 13])); // 13
