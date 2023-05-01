"use strict";
/* 2.7 Type alias and optional types */
const crush1 = {
    name: "Moyna Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda"
};
const crush2 = {
    name: "Tia Pakhi",
    profession: "Next Level Web Developer",
    address: "Mexico"
};
const isCrushMarried = false;
const courseName = "Next Level Web Development";
const calculate = (number1, // 10
number2, // 20
// operation: (x: number, y: number) => number
operation // (x, y) => x + y | (10, 20) => 10 + 20
) => {
    return operation(number1, number2);
};
console.log(calculate(10, 20, (x, y) => x + y)); // 30
console.log(calculate(10, 20, (x, y) => x - y)); // -10
console.log(calculate(10, 20, (x, y) => x * y)); // 200
// calculate(10, 20, (x, y) => x + y);
