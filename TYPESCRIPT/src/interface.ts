class Account {
    accountNumber: number;
    balance: number = 0;

    constructor(accountNumber : number) {
        this.accountNumber = accountNumber;
    }
}

class SalaryAccount extends Account {
    deposit(value: number) {
        this.balance += value;
    }
}

interface ITransaction {
    transfer: (value: number, recipient: Account) => boolean;
    transferFee: number;
}


class currentAccount extends Account implements ITransaction {
    transfer(value: number, recipient: Account) {
        recipient.balance += (value - this.transferFee);
        return true;
    }
    transferFee: number = 0;

}