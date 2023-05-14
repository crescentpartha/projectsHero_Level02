"use strict";
/*
    Problem 2: 🧨🧨 Returns object for conditionals age

    Write a function that takes in an array of objects with properties name and age, and returns only the objects
    where the person's age is greater than or equal to 18.
*/
// declare array of object
let filteredArray = [];
// arrow function
const conditionalAge = (arrOfObj) => {
    // console.log(arrOfObj);
    arrOfObj.forEach(user => {
        if (user.age >= 18)
            filteredArray === null || filteredArray === void 0 ? void 0 : filteredArray.push(user);
    });
    return filteredArray;
};
// object
const object = [
    { name: 'Crescent', age: 18 },
    { name: 'Parsian', age: 17 },
    { name: 'Debnath', age: 19 },
    { name: 'Partha', age: 25 }
];
// invoke function
const result1 = conditionalAge(object);
// function's output
console.log(result1);
/*
    [
        { name: 'Crescent', age: 18 },
        { name: 'Debnath', age: 19 },
        { name: 'Partha', age: 25 }
    ]
*/
