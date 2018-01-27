// Competencies: Pseudocode / Algoritma problem solving
/*

==============
Merry Christmas!
==============

Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa




Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan

Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2

2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)


*/

// Algoritma / Pseudocode here..

// sebuah fungsi terdapat parameter array string
// inputan = ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
// output = Yeaaayyy, you got all presents: 2 (berupa string)
//
// inisialisasi
  // variable dapat hadiah sama dengan 0
  // variable hambatan sama dengan 0
//
// buat perulangan untuk mengakses array berupa string
  // perulangan akan menghitung nilai ['Pit Hitam','Hadiah', 'Nenek Penyihir'] dalam array parameter
    // jika terdapat array sama dengan 'Hadiah'
        // maka masukan dengan ditambah satu ke variable dapat hadiah
      // jika terdapat array sama dengan 'Pit Hitam' atau 'Nenek Penyihir'
        // maka masukan dengan ditambah satu ke variable  hambatan
        // menghitung peluang berhasil
          // membandingkan nilai  dapet hadiah dan nilai hambatan
          // jika nilai  ada hambatan sama dengan 3 maka
          // maka tuliskan 'Be brave, next time! But it's okay, you got'+ dapet hadiah + ' present(s)'
  // jika tidak sesuai di kondisi di atas
    // maka tuliskan 'Yeaaayyy, you got all presents:' + dapet hadiah
//selesai fungsi


//code disini
function sinterklas(str) {
  var dapetHadiah = 0;
  var adaHambatan = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'Hadiah') {
      dapetHadiah += 1;
    }
    if (str[i] === 'Pit Hitam' || str[i] === 'Nenek Penyihir') {
      adaHambatan += 1;
      if (adaHambatan === 3) {
        return 'Be brave, next time! But its okay, you got ' + dapetHadiah + ' present(s)';
      }
    }
  }
  return 'Yeaaayyy, you got all presents: ' + dapetHadiah;
}





//TEST CASES
console.log(sinterklas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*', 'Pit Hitam', 'Hadiah'])); // Yeaaayyy, you got all presents: 2
console.log(sinterklas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir', 'Hadiah', '*', 'Hadiah', 'Pit Hitam', 'Hadiah', 'Hadiah'])); // Be brave, next time! But it's okay, you got 2 presents
