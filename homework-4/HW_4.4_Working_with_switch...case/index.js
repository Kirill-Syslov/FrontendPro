// Переписати код нижче з використанням конструкції switch…case

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

function numOrStr() {
  const stringOrNumber = prompt("input number or string");

  switch (true) {
    case stringOrNumber === null:
      console.log("You canceled");
      break;
    case stringOrNumber.trim() === "":
      console.log("Empty String");
      break;
    case isNaN(+stringOrNumber):
      console.log("The input is not a number");
      break;
    default:
      console.log("OK!");
  }
}

numOrStr();
