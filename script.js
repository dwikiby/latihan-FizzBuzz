const nilai = document.getElementById('nilai');
const kirimHasil = document.getElementById('btn');
const cetakHasil = document.getElementById('hasil');

kirimHasil.addEventListener("click", function (e) {
    //mengecek inputan
    if ( nilai.value > 0 ) {
        console.log(nilai.value);
        cetakHasil.innerText = nilai.value
            if (nilai.value % 3 == 0 && nilai.value % 5 == 0) {
             cetakHasil.innerText = 'FizzBuzz!';
            } 
            else if (nilai.value % 3 == 0) {
             cetakHasil.innerText = 'Fizz!';
            } 
            else if (nilai.value % 5 == 0) {
             cetakHasil.innerText = 'Buzz!';
            } 
            else {
             cetakHasil.innerText = nilai.value 
            }
  } else {
        console.log("invalid input")
        cetakHasil.innerText = 'Invalid Input';
    }
});