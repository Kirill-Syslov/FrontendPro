// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 3, 4, 6, 2, 5, 7];

// removeElement(array,4);

// console.log(array) - Результат: [1, 3, 6, 2, 5, 7]; 

function removeElement(array, item) {
    const newArray = array.filter(element => !item.includes(element));
    return newArray;
}

const array = [42, 3, 1, 4, 1, 5, 9, 2, 6];
const item = [3, 1, 4, 1];

const result = removeElement(array, item);
console.log(result);
