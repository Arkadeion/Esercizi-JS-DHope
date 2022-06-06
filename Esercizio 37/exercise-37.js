class BankAccount {
    constructor (balance) {
        this.balance = balance;
    }

    deposit(input) {
        this.balance += input;
    }

    withdraw(input) {
        this.balance -= input;
    }

    view() {
        console.log(this.balance);
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();