//SOal no1
function rand(min, max) {
  if (min === null && max === null) {
    return 0;
  } else if (max === null) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(rand(20, 1)); // misalnya menghasilkan 4
console.log(rand(1, 10)); // misalnya menghasilkan 1
console.log(rand(6)); // misalnya menghasilkan 2
console.log(rand()); // menghasilkan 0

//Soal no2
function setDecimalLimit(n, d) {
  if (isNaN(n) || isNaN(d)) {
    return "Input harus berupa angka";
  }
  const factor = Math.pow(10, d);
  return Math.round(n * factor) / factor;
}
console.log(setDecimalLimit(3.14159265359, 2));
console.log(setDecimalLimit(0.123456789, 5)); 
console.log(setDecimalLimit(7, 3)); 
console.log(setDecimalLimit("bukan angka", 2)); 

//Soalno3
function isItNumeric(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}
console.log(isItNumeric(12)); // true
console.log(isItNumeric('abcd')); // false
console.log(isItNumeric('12')); // true
console.log(isItNumeric(' ')); // false
console.log(isItNumeric(1.20)); // true
console.log(isItNumeric(-200)); // true
//Soalno4
function roundUpToFive(n) {
  return Math.ceil(n/5) * 5;
}
console.log(roundUpToFive(32)); // 35
console.log(roundUpToFive(137)); // 140
console.log(roundUpToFive(142)); // 145
