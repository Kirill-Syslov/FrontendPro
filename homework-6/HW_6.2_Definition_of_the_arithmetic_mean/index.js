// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let array = ["hello", 3, "world", 6, "image", 9];

function arithmeticMean(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  return sum / array.length;
}

console.log(arithmeticMean(array));

