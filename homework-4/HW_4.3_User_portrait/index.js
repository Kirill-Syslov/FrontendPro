// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.

// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація: його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і
// на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому
// “ти живеш у місті…”, де місце точок – введене місто.

// Додаткове завдання

// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не
// захотіли ввести свій(ю) …” і вказуємо,що він не захотів вводити – дату народження, місто чи вид спорту .

let birthYear = prompt("What year were you born?:");

if (birthYear === null) {
  alert("You did not want to enter your year of birth.");
} else {
  let cityOfResidence = prompt("In which city do you live?:");

  if (cityOfResidence === null) {
    alert("You did not want to enter your city of residence.");
  } else {
    let favoriteSport = prompt("What kind of sport do you like?:");

    if (favoriteSport === null) {
      alert("You have not entered your favorite sport.");
    } else {
      const data = new Date();

      if (cityOfResidence === "Kyiv") {
        alert("You live in the capital of Ukraine.");
      } else if (cityOfResidence === "Washington") {
        alert("You live in the capital of USA.");
      } else if (cityOfResidence === "London") {
        alert("You live in the capital of England.");
      } else {
        alert(`you live in the city ${cityOfResidence}`);
      }

      alert(`Your age: ${data.getFullYear() - birthYear}`);
    }
  }
}

// Додаткове завдання *

// Вибираємо самі три види спорту та три чемпіони у цих видах.
// Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення
// “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
// Все це має бути відображено в одному вікні (алерті).

let myFavoriteSport = prompt("What kind of sport do you like?");

switch (true) {
  case myFavoriteSport === "box":
    alert("Cool! Want to be like Mike Tyson?");
    break;
  case myFavoriteSport === "mma":
    alert("Cool! Want to look like Conor McGregor?");
    break;
  case myFavoriteSport === "muay thai":
    alert("Cool! Want to look like Nai Khanom Tom?");
    break;
  default:
    alert("You have not entered anything again!");
}
