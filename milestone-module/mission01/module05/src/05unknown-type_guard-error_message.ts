
/* 
    Problem 5: Unknown, type guard and error message

    Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. 
    If it is, log the string to the console. If it is not, log an error message.
*/

// arrow function
const unknownTypeGuardErrorMessage = (param: unknown): void => {
    // using type guard
    if (typeof param === 'string') console.log(param);
    else console.log("Error Message: Passed invalid argument!");
}

// invoke function
unknownTypeGuardErrorMessage('Next Level Web Development'); // Next Level Web Development
unknownTypeGuardErrorMessage(10); // Error Message: Passed invalid argument!
unknownTypeGuardErrorMessage(false); // Error Message: Passed invalid argument!


