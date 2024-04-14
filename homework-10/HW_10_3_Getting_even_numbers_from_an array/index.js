// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
//  в якому лише парні числа з оригінального масиву.

//////////////////// 1
const arr2 = [12, 13, 42, 16, 7, 5, 9, 10, 2, 4, 3];

const newArr2 = arr2.filter((num) => num % 2 === 0);

console.log(newArr2);

//////////////////// 2

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrMap = arr
  .map((num) => (num % 2 === 0 ? num : null))
  .filter((num) => num !== null);

console.log(arrMap);

//////////////////// 3

const arrSlice = arr
.slice()
.filter((num) => num % 2 === 0);

console.log(arrSlice);

//////////////////// 4

const arrConcat = arr
.concat()
.filter((num) => num % 2 === 0);

console.log(arrConcat);
