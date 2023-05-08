/* 4.6 Getters and Setters in Typescript */

/* 
    Using getter and setter, we can directly get and set value without calling any function.
*/

class BankAccount2 {
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

class StudentAccount2 extends BankAccount2 {
    test() {
        // this.
    }
}

const myAccount2 = new BankAccount2(123, 'Persian', 20000, "Pubali Bank");
// myAccount2.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount2'.

// myAccount2.addDeposit(20);
// console.log(myAccount2.getBalance());
console.log(myAccount2);

console.log(myAccount2.name); // Persian
// console.log(myAccount2._balance); // If we want to access private property directly, then we need to use getter
console.log(myAccount2.balance); // 20020 (using getter)

myAccount2.deposit = 50;
console.log(myAccount2.balance); // 20050

