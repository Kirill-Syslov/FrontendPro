// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі.
//  Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
//  Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

let contactsBook = {
  users: [
    {
      userName: "Kim",
      phoneNumber: +18143511036,
      email: "kimChenYin@boom.com",
    },
    {
      userName: "Harry ",
      phoneNumber: +16102347736,
      email: "harry@doesNotWantToTheSlizaren",
    },
    {
      userName: "Neo ",
      phoneNumber: +15852135987,
      email: "Neo@IAmeAChosenOne",
    },
  ],

  foundContact: function (name) {
    for (let contact of this.users) {
      if (contact.userName === name) {
        return contact;
      }
    }
    return null;
  },

  addUser: function (name, phoneNumber, email) {
    let newUser = { name: name, phoneNumber: phoneNumber, email: email };
    this.users.push(newUser);
    return newUser;
  },
};



let foundUser = contactsBook.foundContact("Kim");
console.log(foundUser);

let newContact = contactsBook.addUser(
  "Alice",
  +5353535352,
  "alice@inWonderLend.com"
);
console.log(newContact);
