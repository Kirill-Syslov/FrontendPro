// Написати функцію, яка приймає 1 параметр. Та складае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

// console.log(sum(6)); // 10

// console.log(sum(10)); // 20

// console.log(sum(7)); // 27

function locking() {
  let sum = 0;

  return function (num) {
    sum += num;
    return sum;
  };
}

let getNum = locking();

console.log(getNum(3));
console.log(getNum(4));
console.log(getNum(1));
console.log(getNum(42));
