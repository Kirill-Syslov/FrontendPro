// Створіть клас BankAccount, який буде представляти банківський рахунок.
// Додайте властивість балансу та методи для внесення та зняття грошей.

// class BankAccount {

// // Ваш код тут

// }

// const account1 = new BankAccount(1000);
// console.log(account1.getBalance()); // 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // 1300

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  }
}

const accountOne = new BankAccount(1000);
console.log(accountOne.getBalance());
accountOne.deposit(500);
console.log(accountOne.getBalance());
accountOne.withdraw(1000);
console.log(accountOne.getBalance());
