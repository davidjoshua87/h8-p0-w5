/*
Logic Challenge - Change Me!
Problem
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan)
First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName,
lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
Code
*/

//code disini
function changeMe(arr) {
  function yearNow() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
  }
  var year = Number(yearNow());
  if (arr.length === 0) {
    console.log('');
  } else {
    for (var i = 0; i < arr.length; i++) {
      var personObj = {};
      personObj.firstName = arr[i][0];
      personObj.lastName = arr[i][1];
      personObj.gender = arr[i][2];
      if (arr[i][3] >= year || arr[i][3] === '' || arr[i][3] === 0 || arr[i][3] === undefined) {
        personObj.age = 'Invalid Birth Year';
      } else {
        personObj.age = year - arr[i][3];
      }
      console.log((i + 1) + '. ' + personObj.firstName + ' ' + personObj.lastName + ': ');
      console.log(personObj);
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982],['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
