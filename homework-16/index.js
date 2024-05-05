// Вам потрібно зробити конструктор сутності "Студент".
//  Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
//   І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
//  Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод 
//  .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
//   Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це 
//   властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
//  і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
//   якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і
//  показати використання цих методів.


const stud = {
    name: "Jon",
    surname: "Smith",
    birthday: new Date(1992, 6, 1),
    assessments: [100, 100, 100, 100, 87, 93, 99, 76],
    attendance: [],
  };
  const studTwo = {
    name: "Kit",
    surname: "Lon",
    birthday: new Date(1992, 6, 1),
    assessments: [90, 100, 80, 97, 89, 100, 100, 100, 100],
    attendance: [],
  };
  const studTree = {
    name: "Lana",
    surname: "Klint",
    birthday: new Date(1992, 6, 1),
    assessments: [20, 34, 54, 34, 47, 45, 34],
    attendance: [],
  };

  function Student(data) {
    const { name, surname, birthday, assessments, attendance } = data;
    this.age = function () {
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthday.getFullYear();
      return age;
    };
    this.gPA = function () {
      const averageGrade =
        assessments.reduce((total, grade) => total + grade, 0) /
        assessments.length;
      return Math.floor(averageGrade);
    };

    this.present = function () {
      if (attendance.length < 25) {
        attendance.push(true);
      } else {
        attendance.splice(25);
      }
      // console.log(attendance);
    };
    this.absent = function () {
      if (attendance.length < 25) {
        attendance.push(false);
      } else {
        attendance.splice(25);
      }
      // console.log(attendance);
    };

    this.averageAttendance = function () {
      const presentDays = attendance.filter((day) => day === true).length;
      const totalDays = attendance.length;
      const average = presentDays / totalDays;
      return average;
    };

    this.summary = function () {
      const averageGrade =
        assessments.reduce((total, grade) => total + grade, 0) /
        assessments.length;
      const presentDays = attendance.filter((day) => day === true).length;
      const totalDays = attendance.length;
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

  const studentOne = new Student(stud);
  studentOne.present();
  studentOne.present();
  studentOne.present();
  studentOne.absent();
  studentOne.absent();
  studentOne.absent();

  console.log("Age of student 1:", studentOne.age());
  console.log(
    "Average attendance of student 1:",
    studentOne.averageAttendance()
  );
  console.log("Average grade of student 1:", studentOne.gPA());
  console.log("Summary of student 1:", studentOne.summary());

  const studentTwo = new Student(studTwo);
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();
  studentTwo.present();

  console.log("Age of student 2:", studentTwo.age());
  console.log(
    "Average attendance of student 2:",
    studentTwo.averageAttendance()
  );
  console.log("Average grade of student 2:", studentTwo.gPA());
  console.log("Summary of student 2:", studentTwo.summary());

  const studentThree = new Student(studTree);
  studentThree.present();
  studentThree.present();
  studentThree.present();
  studentThree.absent();
  studentThree.absent();
  studentThree.absent();
  console.log("Age of student 3:", studentThree.age());
  console.log(
    "Average attendance of student 3:",
    studentThree.averageAttendance()
  );
  console.log("Average grade of student 3:", studentThree.gPA());
  console.log("Summary of student 3:", studentThree.summary());