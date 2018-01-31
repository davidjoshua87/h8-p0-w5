/*
Logic Challenge - Total Digit (Rekursif)
Problem
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka.
Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang.
Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

Code

*/
//code disini
//Solusi 1
function totalDigitRekursif(angka) {
  var angkaString = String(angka);
  if (angkaString.length === 1) {
    return Number(angkaString);
  } else {
    // console.log(angkaString);
    var angkaHasil = angkaString.slice(0, 1);
    angka = angkaString.slice(1);
    // console.log(angkaHasil);
    return Number(angkaHasil) + totalDigitRekursif(angka);
  }
}

//Solusi 2
function totalDigitRekursif(angka){
  return (angka < 10) ? angka : angka % 10 + totalDigitRekursif(Math.floor(angka / 10));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
