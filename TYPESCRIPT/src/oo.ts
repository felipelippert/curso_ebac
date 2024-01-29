class Person {
    name: string;
    income?: number;

    constructor(name: string, income?: number) {
        this.name = name
        this.income = income
    }

    saysHi(): string {
        return `${this.name} says hello!`
    }
}

class bankAccount {
    protected balance: number = 0;
    public accountNumber: number;

    constructor(accountNumber: number) {
        this.accountNumber = accountNumber;
    }

    static returnBankCode() {
        return 125;
    }
    
    private getBalance() {
        return this.balance;
    }

    deposit(value: number) {
        this.balance += value;
    }
}

class personalAccount extends bankAccount {
    deposit(value: number): void {
        this.balance = value * 2;
    }
}

const felipesAccount = new personalAccount(123456)

bankAccount.returnBankCode