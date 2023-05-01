"use strict";
/* Functions in Typescript */
// Normal function
/*
function add(num1, num2) { // Any type | Show Error
    return num1 + num2;
}
add('2', '2');
 */
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 2)); // 4
// Arrow function
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(5, 5)); // 10
// Callback function
// const arr = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((element) => element * element);
console.log(newArray); // [ 1, 4, 9, 16, 25 ]
/* Method in Object */
// We can use those function in object as a methods. So, if any function used in object, then we call this Method not a function.
const person = {
    name: "Mezba",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    },
    addBalance2(money) {
        return `My New Balance is ${this.balance + money}`;
    },
    addBalance3(money) {
        console.log(`My New Balance is ${this.balance + money}`);
    },
};
console.log(person.addBalance(5)); // 10
console.log(person.addBalance2(10)); // My New Balance is 15
person.addBalance3(15); // My New Balance is 20
console.log(person.name, person.balance); // Mezba 5
