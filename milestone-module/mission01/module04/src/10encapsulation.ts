/* 4.10 Encapsulation and module summary */

/* 
    - Encapsulation in object-oriented programming refers to restricting unauthorized access and mutation of specific properties of an object.
    - Access modifiers are used to achieve encapsulation. By default, all class properties in a class are public.
    - We can Encapsulate using private, protected, readonly (access modifier)
    - We can Encapsulate using setter and getter methods
*/

class BankAccount3 {
    public readonly id: number;
    public name: string;
    private _balance: number; // Convention: use _ for private access modifier
    protected bankName: string;

    constructor(id: number, name: string, balance: number, bankName: string) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankName = bankName;
    }

    // access method using setter and getter
    private getTestBalance(): number {
        return this._balance;
    }
    // getter 
    get Test(): number {
        return this.getTestBalance();
    }

    // access properties using setter and getter
    // getter
    get balance(): number {
        return this._balance;
    }
    // getBalance(): number {
    //     // console.log(`My current balance is ${this._balance}tk`);
    //     return this._balance;
    // }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount3 extends BankAccount3 {
    test() {
        // this. 
    }
}

const myAccount3 = new BankAccount3(123, 'Persian', 20000, "Pubali Bank");
// myAccount3.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount3'.

// myAccount3.addDeposit(20);
// console.log(myAccount3.getBalance());
console.log(myAccount3); // BankAccount3 { id: 123, name: 'Persian', _balance: 20000, bankName: 'Pubali Bank' }

console.log(myAccount3.name); // Persian
// console.log(myAccount3._balance); // If we want to access private property directly, then we need to use setter and getter
console.log(myAccount3.balance); // 20000 (using getter)

myAccount3.deposit = 50;
console.log(myAccount3.balance); // 20050


