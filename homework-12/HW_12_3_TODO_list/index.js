// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань.
//  Ваше ціль - використовуючи делегування подій,
//  створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

// Покроковий план:

// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTaskInput");
const addNewTaskButton = document.getElementById("addNewTaskButton");

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteTask")) {
    e.target.parentElement.remove();
  }
});

addNewTaskButton.addEventListener("click", () => {
  const newTaskText = newTaskInput.value;
  if (newTaskText !== "") {
    const li = document.createElement("li");
    li.textContent = newTaskText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete task";
    deleteButton.classList.add("deleteTask");
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    newTaskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});
