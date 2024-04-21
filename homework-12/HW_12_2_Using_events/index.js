// Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу,
// який відслідковуватиме кліки на всіх кнопках.

// Покроковий план:

// 1. Створіть HTML-елементи: батьківський контейнер з декількома вкладеними кнопками.

// 2. Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.

// 3. Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.

const parentElement = document.getElementById("container");
parentElement.addEventListener("click", function (e) {
  const target = e.target;
  if (target.id == "btnOne") {
    alert("You click button one 1");
  } else if (target.id == "btnTwo") {
    alert("You click button two 2");
  } else if (target.id == "btnTree") {
    alert("You click button tree 3");
  }
});