"use strict";
/* 4.5 Access Modifiers: Public, Private, Protected, Readonly */
class BankAccount {
    constructor(id, name, balance, bankName) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankName = bankName;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}tk`);
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
        // this.bankName // accessible (protected)
        // this._balance // not accessible out of class (private)
        /*
            # Normally, we should use private and readonly.
            # public don't use, if we don't use parameter properties
            # protected use only for special reason. It creates bug frequently
        */
    }
}
const myAccount1 = new BankAccount(123, 'Persian', 20000, "Pubali Bank");
// myAccount1.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount'.
console.log(myAccount1); // BankAccount { id: 123, name: 'Persian', _balance: 20000, bankName: 'Pubali Bank' }
