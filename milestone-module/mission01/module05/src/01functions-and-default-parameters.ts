
/* 
    Problem 1: Functions and Default Parameters

    Create a TypeScript program that declares a function that takes two parameters, a string and a number. 
    The function should log the string parameter repeated the number of times specified by the number parameter. 
    If the number parameter is not provided, it should default to 3.
*/

// arrow function
const functionsAndDefaultParameters = (str: string, num: number = 3): void => {
    let i = 1;
    while (i <= num) {
        console.log(str);
        i++;
    }
}

// invoke function
functionsAndDefaultParameters('Partha and Persian, they are closed friend!', 5);
functionsAndDefaultParameters('Next Level Web Development (Assignment-01 - Problem-01)');


