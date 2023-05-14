"use strict";
/*
    optionalProblem 1: Array and Tuple types

    Create a TypeScript program that declares an array of strings and a tuple of a number and a string.
    Add elements to both data structures, and log them to the console.
*/
// declare array of string and a tuple type
const arrayOfString = ['Next', 'Level', 'Web', 'Development', '2.0'];
const arrayOfTuple = ['Next', 'Level', 'Web', 'Development', 2.0];
// output
console.log(arrayOfString); // [ 'Next', 'Level', 'Web', 'Development', '2.0' ]
console.log(arrayOfTuple); // [ 'Next', 'Level', 'Web', 'Development', 2 ]
// add elements
arrayOfString.push('Apollo');
arrayOfTuple.push('Apollo');
// output
console.log(arrayOfString); // [ 'Next', 'Level', 'Web', 'Development', '2.0', 'Apollo' ]
console.log(arrayOfTuple); // [ 'Next', 'Level', 'Web', 'Development', 2, 'Apollo' ]
