// Дано тризначне число, яке надае користувач, потрибно визначити:

// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

const userNumber = prompt("Enter a three-digit number");

const allDigitsSame =
  userNumber[0] === userNumber[1] && userNumber[1] === userNumber[2];
const anyTwoDigitsSame =
  userNumber[0] === userNumber[1] || userNumber[1] === userNumber[2] || userNumber[0] === userNumber[2];

function numberCheck() {
  alert(allDigitsSame ? "All digits of the number are the same" : "Not all digits of a number are the same");
  alert(anyTwoDigitsSame ? "There are at least two identical numbers among the numbers" : "No two numbers are the same");
}

numberCheck();
