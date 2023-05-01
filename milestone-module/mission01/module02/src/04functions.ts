/* Functions in Typescript */

// Normal function

/* 
function add(num1, num2) { // Any type | Show Error
    return num1 + num2;
}
add('2', '2');
 */

function add(num1: number, num2: number): number { // parameters and return type: number
    return num1 + num2;
}
console.log(add(2, 2)); // 4

// Arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addArrow(5, 5)); // 10

// Callback function

// const arr = [1, 2, 3, 4, 5];
const arr: number[] = [1, 2, 3, 4, 5];

const newArray = arr.map((element: number) => element * element);
console.log(newArray); // [ 1, 4, 9, 16, 25 ]

/* Method in Object */

// We can use those function in object as a methods. So, if any function used in object, then we call this Method not a function.
const person: {
    name: string;
    balance: number;
    addBalance(money: number): number;
    addBalance2(money: number): string;
    addBalance3(money: number): void;
} = {
    name: "Mezba",
    balance: 5,
    addBalance(money: number): number {
        return this.balance + money;
    },
    addBalance2(money: number) {
        return `My New Balance is ${this.balance + money}`;
    }, 
    addBalance3(money: number) {
        console.log(`My New Balance is ${this.balance + money}`);
    },
};

console.log(person.addBalance(5)); // 10
console.log(person.addBalance2(10)); // My New Balance is 15
person.addBalance3(15); // My New Balance is 20
console.log(person.name, person.balance); // Mezba 5

