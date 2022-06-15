class NegativeAmountError extends Error {
  constructor (message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}

class WithdrawalNotPermittedError extends Error {
  constructor (message) {
    super(message);
    this.name = "WithdrawalNotPermittedError";
  }
}

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {

      if (amount < 0) {
        throw new NegativeAmountError(`L'ammontare depositato non può essere negativo.`);
      }
      this.#amount += amount;
    }
    catch (err) {
      console.error(err);
    }
  }

  withdraw(amount) {
    try {

      if (amount < 0) {
        throw new NegativeAmountError(`L'ammontare ritirato non può essere negativo.`);
      }

      if (amount > this.#amount) {
        throw new WithdrawalNotPermittedError(`L'ammontare ritirato è superiore al totale depositato sul conto.`);
      }

      // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      this.#amount -= amount;

    } catch (err) {
      console.error(err);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(-200);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(-200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}