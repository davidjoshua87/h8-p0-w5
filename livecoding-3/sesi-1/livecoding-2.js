// Competencies: Pseudocode / Algoritma problem solving
/*

==============
Catch Me if You Can
==============

Name :

Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.

Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2

2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you lose. You just got 2 villains


*/

// Algoritma / Pseudocode here..

// sebuah fungsi terdapat parameter array string
// inputan = ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
// output = Nice work, detective! You got all villains: 2
//
// inisialisasi
  // variable trap sama dengan 0
  // variable villains sama dengan 0
//
// buat perulangan untuk mengakses array berupa string
  // perulangan akan menghitung nilai ['@'','Villain'] dalam array parameter
    // jika terdapat array sama dengan 'Villain'
        // maka masukan dengan ditambah satu ke variable villains
      // jika terdapat array sama dengan '@'
        // maka masukan dengan ditambah satu ke variable  trap
        // menghitung peluang berhasil
          // membandingkan nilai  dapet hadiah dan nilai trap
          // jika nilai  ada trap sama dengan 3 maka
          // maka tuliskan 'Ooops, you lose. You just got'+ villains + ' villains'
  // jika tidak sesuai di kondisi di atas
    // maka tuliskan 'Nice work, detective! You got all villains:' + villains
//selesai fungsi

//code disini
function catchMe(str) {
  var villains = 0;
  var trap = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'Villain') {
      villains += 1;
    }
    if (str[i] === '@') {
      trap += 1;
      if (trap === 3) {
        return 'Ooops, you lose. You just got ' + villains + ' villains';
      }
    }
  }
  return 'Nice work, detective! You got all villains: ' + villains;
}
//TEST CASES
console.log(catchMe(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain'])); // Nice work, detective! You got all villains: 2
console.log(catchMe(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain'])); // Ooops, you lose. You just got 2 villains
