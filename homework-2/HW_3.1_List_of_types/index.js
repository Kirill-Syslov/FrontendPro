// Створити репозиторій із файлом index.html.
// Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль.
// Використовуючи оператор typeof та console.log

let listOfTypes = [42, null, true, undefined, "apple", {}, [], function () {}];

listOfTypes.forEach((item) => {
  console.log(item, ", type:", typeof item);
});
