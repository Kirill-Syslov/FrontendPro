// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const num = +prompt("Enter an integer:");

    for (let i = 1; i <= 100; i++) {
        const square = i * i;
        if (square <= num) {
            console.log(i);
        } else {
            break;
        }
    };


