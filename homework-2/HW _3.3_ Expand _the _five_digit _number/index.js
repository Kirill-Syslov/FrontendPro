// Розкласти за цифрами п'ятизначне число 
// і вивести у вихідному порядку через пробіл. Приклад:

let number = 10369;

let numberToString = String(number).split('');
console.log(numberToString.join(' '));

