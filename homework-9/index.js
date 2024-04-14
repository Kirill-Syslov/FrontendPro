// Дізнатись суму всіх зарплат користувачів:

// let company  ={
//     sales:[{name:'John', salary: 1000},{name:'Alice', salary: 600}],
//     development: {
//         web: [{name:'Peter', salary: 2000},{name:'Alex', salary: 1800}],
//         internals:[{name: 'Jack', salary: 1300}]
//     }
// };

// Об'єкт може містити невідому кількість департаментів та співробітників

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

let companyTwo = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  front: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "les", salary: 4000 },
    { name: "Ken", salary: 2000 },
  ],
  beak: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "Peter", salary: 400 },
    { name: "Alex", salary: 900 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

let companyTree = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  front: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "les", salary: 4000 },
    { name: "Ken", salary: 2000 },
  ],
  beak: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "Peter", salary: 400 },
    { name: "Alex", salary: 900 },
  ],
  development: {
    dev: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function getSalaryAllEmployees(company) {
  let totalSalary = 0;

  function calculateAllSalary(company) {
    for (let department in company) {
      if (Array.isArray(company[department])) {
        company[department].forEach((e) => {
          totalSalary += e.salary;
        });
      } else {
        calculateAllSalary(company[department]);
      }
    }
  }

  calculateAllSalary(company);
  return totalSalary;
}

let totalSalary = getSalaryAllEmployees(company);
console.log("The total salary of the company:", totalSalary);

let totalSalaryTwo = getSalaryAllEmployees(companyTwo);
console.log("The total salary of the companyTwo:", totalSalaryTwo);

let totalSalaryTree = getSalaryAllEmployees(companyTree);
console.log("The total salary of the companyTree:", totalSalaryTree);
