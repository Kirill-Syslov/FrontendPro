
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
// поверне нам "heo wor".
//  Вихідний рядок та символи для видалення задає користувач.

function removeCharacters(line, charactersToDelete) {
  let result = "";

  for (let i = 0; i < line.length; i++) {
    let currentValue = line[i];
    if (!charactersToDelete.includes(currentValue)) {
      result += currentValue;
    }
  }

  return result;
};

let line = prompt("enter a string:");
let charactersToDelete = prompt("enter the characters to delete:");

if (!line || !charactersToDelete) {
  alert("You have entered incorrect data. Please try again.");
} else {
  let result = removeCharacters(line, charactersToDelete.split(""));
  alert(`result: ${result}`);
};
