/* 
Principio de inversion de dependencias!!

Los modulos de alto nivel no deben depender de los modulos
de bajo nivel. Ambos deben depender de abstracciones.
Las abstracciones no deben depender de los detalles.
Los detalles deben depender de las abstracciones.
*/

interface BankAccount {
  deposit(amount: number): void;
  retire(amount: number): void;
  getBalance(): number;
}

class SavingAccount implements BankAccount {
  private balance: number = 0;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  retire(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// =========== Example
const myAccountOne = new SavingAccount(1000);
myAccountOne.deposit(500);
console.log("Balance after deposit:", myAccountOne.getBalance()); // 1500

myAccountOne.retire(200);
console.log("Balance after retirement:", myAccountOne.getBalance()); // 1300

try {
  myAccountOne.retire(2000); // This will throw an error
} catch (error) {
  console.error(error instanceof Error ? error.message : "An error occurred"); // Insufficient funds
}

console.log("==============================");

const myAccountTwo = new SavingAccount(2000);
myAccountTwo.deposit(1000);
console.log("Balance after deposit:", myAccountTwo.getBalance()); // 3000

myAccountTwo.retire(500);
console.log("Balance after retirement:", myAccountTwo.getBalance()); // 2500

try {
  myAccountTwo.retire(4000); // This will throw an error
} catch (error) {
  console.error(error instanceof Error ? error.message : "An error occurred"); // Insufficient funds
}
