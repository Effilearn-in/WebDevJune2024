// (1) Implement a class for a simple Bank Account with deposit and withdraw functions.

class BankAccount{

    constructor(amount){
        this.balance=amount;
        console.log("Initial Balance :- "+this.balance);
    }

    deposit(amount){
        this.balance+=amount;
        console.log("Deposited amount :- "+amount+"  Total Balance :- "+this.balance);
    }

    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount;
            console.log("Withdrawal amount :- "+amount+"  Total Balance :- "+this.balance);
        }
        else{
            console.log("Insufficient Balance");
        }
    }
}

const amit=new BankAccount(1000);
amit.deposit(5000);
amit.withdraw(10000);
amit.withdraw(3000);