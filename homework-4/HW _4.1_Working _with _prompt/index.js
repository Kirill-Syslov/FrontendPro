// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те,
// що ввів користувач

const userName = prompt("What is your name?")

function helloUser () {
    if(userName) {
        alert(`Hello, ${userName}! How are you?`)
    }else{
        alert("No name enter")
    }
}

helloUser();