// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) .
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста,
// текст або цикл закінчує всі ітерації,
// то функція виводить в консоль останній введення користувача і завершує функцію.


function getNumFromUser() {
    let i = 0;
    let input;

    while (i < 10) {
        input = +prompt(`enter a number greater than 100 (iteration ${i + 1}):`);

        if (input === 0 || isNaN(input)) {
            console.log("You have entered or canceled text. Last input:", input);
            return;
        }

        if (input > 100) {
            console.log("Last input:", input);
            return;
        } else {
            alert("enter a number greater than 100.");
        }

        i++;
    }

    console.log("maximum number of iterations (10).");
}

getNumFromUser();

