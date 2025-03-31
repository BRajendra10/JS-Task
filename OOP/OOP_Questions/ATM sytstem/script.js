// 1. Encapsulation (Data Hiding)
// Scenario: You are building an ATM system where a user has a bank account. The balance should not be directly accessible but can be checked via a method.

// TODO:
// Create a BankAccount class with a private #balance property.
// Implement deposit(amount) and withdraw(amount) methods.
// Add a getBalance() method to return the balance.

class BankAccount{
    #balance = 1000000;

    getBalance(){
        document.writeln(`Current balance: ${this.#balance} <br>`);
    }

    deposit(amount){
        if(typeof amount == 'number' && amount > 0){
            document.writeln(`Deposit money: ${amount} <br>`);
            this.#balance = this.#balance+amount;
            document.writeln(`Current balance: ${this.#balance} <br>`);
        }else{
            document.writeln('deposit amount should be greater then 0 and it should be number <br>');
        }
    }

    withdraw(amount){
        if(typeof amount == 'number' && amount > 0){
            document.writeln(`withdrawal money: ${amount} <br>`);
            this.#balance = this.#balance-amount;
            document.writeln(`Current balance: ${this.#balance} <br>`);
        }else{
            document.writeln('current amount should be higher then withdrwal balance and it should be number');
        }
    }
}

const atm = new BankAccount();
atm.getBalance();
atm.deposit(500000);
atm.deposit(0);
atm.withdraw(1000000);
atm.withdraw(-50000);