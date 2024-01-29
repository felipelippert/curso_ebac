"use strict";
class Person {
    constructor(name, income) {
        this.name = name;
        this.income = income;
    }
    saysHi() {
        return `${this.name} says hello!`;
    }
}
class bankAccount {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
    static returnBankCode() {
        return 125;
    }
    getBalance() {
        return this.balance;
    }
    deposit(value) {
        this.balance += value;
    }
}
class personalAccount extends bankAccount {
    deposit(value) {
        this.balance = value * 2;
    }
}
const felipesAccount = new personalAccount(123456);
bankAccount.returnBankCode;
