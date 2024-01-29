"use strict";
class Account {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
}
class SalaryAccount extends Account {
    deposit(value) {
        this.balance += value;
    }
}
class currentAccount extends Account {
    constructor() {
        super(...arguments);
        this.transferFee = 0;
    }
    transfer(value, recipient) {
        recipient.balance += (value - this.transferFee);
        return true;
    }
}
