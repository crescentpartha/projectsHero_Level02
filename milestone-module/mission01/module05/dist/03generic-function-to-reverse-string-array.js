"use strict";
/*
    Problem 3: Generic function to reverse a string array

    Create a TypeScript program that uses a generic function to reverse an array of strings,
    and takes a variable number of strings to the array using rest parameters.
    Provide an example of calling the function with a variable number of strings.
*/
// generic arrow function
const reverseString = (arr) => {
    const reverseArrayOfObject = arr.reverse();
    return reverseArrayOfObject;
};
// array of string
const stringArrayOfObject = ['2.0', 'Development', 'Web', 'Level', 'Next'];
const stringArrayOfObject2 = ['Partha', 'Nath', 'Deb', 'Crescent'];
// invoke functions
const result2 = reverseString(stringArrayOfObject);
const result3 = reverseString(stringArrayOfObject2);
// Output of functions
console.log(result2); // [ 'Next', 'Level', 'Web', 'Development', '2.0' ]
console.log(result3); // [ 'Crescent', 'Deb', 'Nath', 'Partha' ]
