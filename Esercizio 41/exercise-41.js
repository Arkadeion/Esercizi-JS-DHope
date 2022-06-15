class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {

      if (amount < 0) {
        throw new Error(`L'ammontare depositato non può essere negativo.`);
      }
      this.#amount += amount;
    }
    catch (err) {
      console.error(err.message);
    }
  }

  withdraw(amount) {
    try {

      if (amount < 0) {
        throw new Error(`L'ammontare ritirato non può essere negativo.`);
      }

      if (amount > this.#amount) {
        throw new Error(`L'ammontare ritirato è superiore al totale depositato sul conto.`);
      }

      // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      this.#amount -= amount;

    } catch (err) {
      console.error(err.message);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(-500);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(-200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();