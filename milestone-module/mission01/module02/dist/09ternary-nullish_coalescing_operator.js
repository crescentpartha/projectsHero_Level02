"use strict";
/* 2.10 Ternary Operator, Nullish Coalescing Operator, Module Summary - Question_Mark */
var _a, _b;
// Ternary Operator
const age = 22;
if (age >= 18) {
    console.log("Yes, Adult!"); // Yes, Adult!
}
else {
    console.log("No, Not Adult!");
}
const isYoung = age <= 40 ? "Young" : "Old"; // Ternary Operation
console.log(isYoung); // Young
/* ------------------------------------------ */
// Nullish Coalescing Operator - Example01
/*
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
and otherwise returns its left-hand side operand.

if (left-side === null || undefined) print right-side, otherwise print left-side.
*/
// const isAuthenticateUser = null;
// const isAuthenticateUser = undefined;
// const isAuthenticateUser = "Authenticate";
const isAuthenticateUser = "";
const userName = isAuthenticateUser !== null && isAuthenticateUser !== void 0 ? isAuthenticateUser : "Guest"; // Nullish Coalescing operation
const userName2 = isAuthenticateUser ? isAuthenticateUser : 'Guest'; // Ternary Operation
// console.log(userName); // Guest
// console.log(userName); // Guest
// console.log(userName); // Authenticate
console.log({ userName }, { userName2 }); // { userName: '' } { userName2: 'Guest' }
const manush1 = {
    name: "Adom",
    age: 100,
    address: {
        city: "Panama",
        road: "Country Road",
    },
};
// Nullish Coalescing Operator
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "Sweet Home"; // default "Sweet Home"
console.log(home); // Sweet Home
console.log({ home }); // { home: 'Sweet Home' }
