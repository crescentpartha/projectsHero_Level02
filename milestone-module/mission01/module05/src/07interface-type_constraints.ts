
/* 
    optionalProblem 2: Interface and type constraints

    Create a TypeScript program that uses a conditional type to create a new type that is either a string or a number, 
    depending on whether a parameter of type string or number is passed to the function.

    Then, create an interface for a person with properties name and age, and use the new type as a constraint on the age property.

    Finally, create an object that satisfies the Person interface and log it to the console.
*/

// interface
interface Person2 {
    name: string;
    age: number;
}

// arrow function
const checkType = (param: string | number) => {
    // type guard
    if( typeof param === 'string') console.log(param);
    else if (typeof param === 'number' && param >=18) {
        console.log(`${param} is valid age`);
    }
}

// object
const object2: Person2 = { name: 'Kristen Stewart', age: 33 };

// output
checkType(object2.name); // Kristen Stewart
checkType(object2.age); // 33 is valid age
console.log(object2); // { name: 'Kristen Stewart', age: 33 }


