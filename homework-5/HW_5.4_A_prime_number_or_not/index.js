// Дано ціле число (ввести через 'prompt').
//  З'ясувати, чи просте воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let num = +prompt("Enter an integer:");

function primeNumberOrNot(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (primeNumberOrNot(num)) {
  alert(`${num} integer number.`);
} else {
  alert(`${num} not an integer number.`);
}
