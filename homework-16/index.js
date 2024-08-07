// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
// І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод
// .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це
// властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і
// показати використання цих методів.

function Student(name, surname, birthday, assessments) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.assessments = assessments;
  this.attendance = new Array(25).fill(undefined);

  this.age = function () {
    const currentDate = new Date();
    return currentDate.getFullYear() - this.birthday.getFullYear();
  };

  this.gPA = function () {
    const averageGrade =
      this.assessments.reduce((total, grade) => total + grade, 0) /
      this.assessments.length;
    return Math.floor(averageGrade);
  };

  this.present = function () {
    if (this.attendance.length < 25) {
      this.attendance.push(true);
    } else {
      this.attendance.shift();
      this.attendance.push(true);
    }
  };

  this.absent = function () {
    if (this.attendance.length < 25) {
      this.attendance.push(false);
    } else {
      this.attendance.shift();
      this.attendance.push(false);
    }
  };

  this.averageAttendance = function () {
    const presentDays = this.attendance.filter((day) => day === true).length;
    const totalDays = this.attendance.length;
    return presentDays / totalDays;
  };

  this.summary = function () {
    const averageGrade =
      this.assessments.reduce((total, grade) => total + grade, 0) /
      this.assessments.length;
    const presentDays = this.attendance.filter((day) => day === true).length;
    const totalDays = this.attendance.length;
    const averageAttendance = presentDays / totalDays;

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Well done!";
    } else if (averageGrade < 90 && averageAttendance < 0.9) {
      return "Redish!";
    } else {
      return "Good, but it can be better!";
    }
  };
}

const studentOne = new Student(
  "Jon",
  "Smith",
  new Date(1992, 6, 1),
  [100, 100, 100, 100, 87, 93, 99, 76]
);

studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();
studentOne.present();

console.log("Name student 1:", studentOne.name);
console.log("Surname student 1:", studentOne.surname);
console.log("Age of student 1:", studentOne.age());
console.log("Average attendance of student 1:", studentOne.averageAttendance());
console.log("Average grade of student 1:", studentOne.gPA());
console.log("Summary of student 1:", studentOne.summary());

const studentTwo = new Student(
  "Kit",
  "Lon",
  new Date(1992, 6, 1),
  [90, 100, 80, 97, 89, 100, 100, 100, 100]
);

studentTwo.present();
studentTwo.present();
studentTwo.present();
studentTwo.absent();
studentTwo.absent();
studentTwo.absent();

console.log("Name student 2", studentTwo.name);
console.log("Surname student 2", studentTwo.surname);
console.log("Age of student 2:", studentTwo.age());
console.log("Average attendance of student 2:", studentTwo.averageAttendance());
console.log("Average grade of student 2:", studentTwo.gPA());
console.log("Summary of student 2:", studentTwo.summary());

const studentThree = new Student(
  "Den",
  "Klint",
  new Date(1992, 6, 1),
  [20, 34, 54, 34, 47, 45, 34]
);
studentThree.present();
studentThree.present();
studentThree.present();
studentThree.absent();
studentThree.absent();
studentThree.absent();
studentThree.present();
studentThree.present();
studentThree.present();
studentThree.absent();
studentThree.absent();
studentThree.absent();

console.log("Name student 3", studentThree.name);
console.log("Surname student 3", studentThree.surname);
console.log("Age of student 3:", studentThree.age());
console.log(
  "Average attendance of student 3:",
  studentThree.averageAttendance()
);
console.log("Average grade of student 3:", studentThree.gPA());
console.log("Summary of student 3:", studentThree.summary());
