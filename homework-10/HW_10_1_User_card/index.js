// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.

let user = {
  name: "Roy",
  surname: "Smith",
  age: 42,
  placeOfBirth: "New-York",
  getUserInformation: function () {
    return ` User name: ${this.name},   
 User surname: ${this.surname}, 
 The ${this.name} is: ${this.age} years old ,
 ${this.name} was born in: ${this.placeOfBirth},`;
  },
};

console.log(user.getUserInformation());
