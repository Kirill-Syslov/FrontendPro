// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function arithmeticMean(array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
          sum += array[i];
          count++;
      }
  }

  if (count === 0) {
      return 0;
  }
  return sum / count;
}

let array = ["hello", 3, "world", 6, "image", 9];
const result = arithmeticMean(array);
console.log(result); 
