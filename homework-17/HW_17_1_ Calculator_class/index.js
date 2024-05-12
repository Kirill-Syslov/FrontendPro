// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій:
//  додавання, віднімання, множення та ділення.
// class Calculator {
//  // Ваш код тут
// }
// const calc = new Calculator();
// console.log(calc.add(5, 3)); // 8
// console.log(calc.subtract(10, 4)); // 6
// console.log(calc.multiply(3, 6)); // 18
// console.log(calc.divide(8, 2)); // 4

class Calculator {
  add(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  }

  multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }

  divide(firstNum, secondNum) {
    return firstNum / secondNum;
  }
}

const calc = new Calculator();
console.log(` The result of the sum of numbers:  ${calc.add(32, 10)}`);
console.log(` The result of the sum of subtract:  ${calc.subtract(213, 52)}`);
console.log(` The result of the sum of multiply:  ${calc.multiply(77, 52)}`);
console.log(` The result of the sum of multiply:  ${calc.divide(25, 5)}`);

