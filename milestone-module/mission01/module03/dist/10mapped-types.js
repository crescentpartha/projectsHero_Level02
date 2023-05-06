"use strict";
/* 3.10 Mapped Types */
// Follow the documentations doc to understand organized way or properly
const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings); // [ '1', '2', '3' ]
const area1 = { height: 10, width: "Twelve" };
const rectangularArea = {
    height: 10,
    width: 12,
};
// access the property of object
// const obj = {
//     name: 'Persian'
// }
// console.log(obj['name']); // Persian
