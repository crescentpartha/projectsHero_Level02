
/* 
    Problem 3: Generic function to reverse a string array

    Create a TypeScript program that uses a generic function to reverse an array of strings, 
    and takes a variable number of strings to the array using rest parameters. 
    Provide an example of calling the function with a variable number of strings.
*/

// type alias
type stringArray = string[];

// generic arrow function
const reverseString = <T extends stringArray> (arr: T): stringArray => {
    const reverseArrayOfObject = arr.reverse();
    return reverseArrayOfObject;
}

// array of string
const stringArrayOfObject: stringArray = ['2.0', 'Development', 'Web', 'Level', 'Next'];
const stringArrayOfObject2: stringArray = ['Partha', 'Nath', 'Deb', 'Crescent'];

// invoke functions
const result2: stringArray = reverseString(stringArrayOfObject);
const result3: stringArray = reverseString(stringArrayOfObject2);

// Output of functions
console.log(result2); // [ 'Next', 'Level', 'Web', 'Development', '2.0' ]
console.log(result3); // [ 'Crescent', 'Deb', 'Nath', 'Partha' ]


