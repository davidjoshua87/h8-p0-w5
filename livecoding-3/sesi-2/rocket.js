/*
*/
/*
========================
The Alphabetical Express
========================

Name :_____________

[INSTRUCTIONS]

formTrainSeating adalah sebuah function yang menerima satu parameter berupa string.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.

Gerbong terdiri dari 5, yaitu gerbong A, gerbong B, C, D, dan E.

Function akan membentuk kereta dalam bentuk multidimension array.
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf tiap penumpang.

Setiap gerbong hanya boleh menampung penumpang dengan nama yang sesuai dengan nama gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara A, B, C, D, atau E.

Bentuk Kereta:

[ GERBONG A, GERBONG B, GERBONG C, GERBONG D, GERBONG E ]

Bentuk Gerbong:

Contoh bentuk gerbong A
[ 'A', 'A' ]

Contoh bentuk gerbong B
[ 'B', 'B' ]

Kumpulan penumpang direpresentasikan dalam string.

Contoh:

input: 'ABCA'

maka, ada penumpang A, B, C, dan A.

Kita masukkan setiap penumpang ke masing-masing gerbong.

output: [ ['A', 'A'], ['B'], ['C'], [], []]

gerbong A berisi dua A,
gerbong B berisi satu B,
gerbong C berisi satu C,
gerbong D kosong,
dan gerbong E kosong.

Function akan me-return array kereta yang telah dibentuk.


[RULE]
Tidak perlu pseudocode!
Dilarang menggunakan sintaks .split()!
*/
//sebuah fungsi dengan parameter string
//inisialisasi
//buat variable tampung A,
//buat variable tampung B,
//buat variable tampung C,
//buat variable tampung D,
//buat variable tampung E,
//buat variable tampung hasil,
// buat perulangan untuk mengecek parameter string untuk mendapakan nama penumpang
// buat kondisi
  // jika ditemukan penumpang dengan nama string A maka
    // masukan ke variable tampung a
  // jika ditemukan penumpang dengan nama string B maka
    // masukan ke variable tampung b
  // jika ditemukan penumpang dengan nama string C maka
    // masukan ke variable tampung c
  // jika ditemukan penumpang dengan nama string D maka
    // masukan ke variable tampung d
  // jika ditemukan penumpang dengan nama string E maka
    // masukan ke variable tampung e
// lalu masukan semua hasil tampungan ke variable hasil
// tampilkan hasil

//code disini
function formTrainSeating(passengers) {
  var a = [];
  var b = [];
  var c = [];
  var d = [];
  var e = [];
  var hasil = [];
  for (i = 0; i < passengers.length; i++) {
    if (passengers[i] === 'A') {
      a.push('A');
    } else if (passengers[i] === 'B') {
      b.push('B');
    } else if (passengers[i] === 'C') {
      c.push('C');
    } else if (passengers[i] === 'D') {
      d.push('D');
    } else {
      e.push('E');
    }
  }
  hasil.push(a, b, c, d, e);
  return hasil;
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
