// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення, отримане випадковим чином (Math.random)

const imgs = [
  "img/img(1).jpg",
  "img/img(2).jpg",
  "img/img(3).jpg",
  "img/img(4).jpg",
  "img/img(5).jpg",
  "img/img(6).jpg",
  "img/img(7).jpg",
  "img/img(8).jpg",
  "img/img(9).jpg",
];

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * imgs.length);
  while (randomIndex === imgs.length) {
    randomIndex = Math.floor(Math.random() * imgs.length);
  }

  const randomImageName = imgs[randomIndex];
  const randomImageElement = document.getElementById("randomImg");
  randomImageElement.src = randomImageName;
});
