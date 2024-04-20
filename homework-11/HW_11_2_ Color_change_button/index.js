// Є блок із текстом на сторінці та кнопку. При натисканні на кнопку текст змінює колір.
//  При повторному натисканні – повертається попередній колір!

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const currentColor = text.style.color;

  if (currentColor === "blue") {
    text.style.color = "black";
  } else {
    text.style.color = "blue";
  }
});
