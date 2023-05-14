
## Table of Contents

- [l2tsa1-basic-typescript-crescentpartha](#l2tsa1-basic-typescript-crescentpartha)
  - [Problems Solving](#problems-solving)
    - [`Problem01: Functions and Default Parameters`](#problem01-functions-and-default-parameters)
    - [`Problem02: Returns object for conditionals age`](#problem02-returns-object-for-conditionals-age)
    - [`Problem03: Generic function to reverse a string array`](#problem03-generic-function-to-reverse-a-string-array)
    - [`Problem04: Person vs Student Class`](#problem04-person-vs-student-class)
    - [`Problem05: Unknown, type guard and error message`](#problem05-unknown-type-guard-and-error-message)
    - [`Problem06(optional): Array and Tuple types`](#problem06optional-array-and-tuple-types)
    - [`Problem07(optional): Interface and type constraints`](#problem07optional-interface-and-type-constraints)
  - [Interview Questions](#interview-questions)
    - [`What is TypeScript, and how is it different from JavaScript?`](#what-is-typescript-and-how-is-it-different-from-javascript)
    - [`Can you explain the difference between "interface" and "type" in TypeScript?`](#can-you-explain-the-difference-between-interface-and-type-in-typescript)
    - [`Can you give an example of how to use generics in TypeScript?`](#can-you-give-an-example-of-how-to-use-generics-in-typescript)
    - [`What is the difference between an "unknown" and "any" type in TypeScript?`](#what-is-the-difference-between-an-unknown-and-any-type-in-typescript)
    - [`Can you give an example of how to use enums in TypeScript?`](#can-you-give-an-example-of-how-to-use-enums-in-typescript)
    - [`What is the "as" keyword used for in TypeScript?`](#what-is-the-as-keyword-used-for-in-typescript)
    - [`Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?`](#can-you-explain-how-to-use-type-guards-with-in-and-typeof-operators-in-typescript)
  - [Optional Questions](#optional-questions)
    - [`Can you explain what a "tuple" is in TypeScript?`](#can-you-explain-what-a-tuple-is-in-typescript)
    - [`Can you give an example of how to use "readonly" properties in TypeScript?`](#can-you-give-an-example-of-how-to-use-readonly-properties-in-typescript)
    - [`Can you give an example of how to use "conditional types" in TypeScript?`](#can-you-give-an-example-of-how-to-use-conditional-types-in-typescript)

# l2tsa1-basic-typescript-crescentpartha

## Problems Solving

### `Problem01: Functions and Default Parameters`

``` Typescript
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
```

**[🔼Back to Top](#table-of-contents)**

### `Problem02: Returns object for conditionals age`

``` Typescript
/* 
    Problem 2: 🧨🧨 Returns object for conditionals age

    Write a function that takes in an array of objects with properties name and age, and returns only the objects 
    where the person's age is greater than or equal to 18.
*/

// type alias
type ObjectType = {
    name: string;
    age: number;
};

// declare array of object
let filteredArray: ObjectType[] = [];

// arrow function
const conditionalAge = (arrOfObj: ObjectType[]): ObjectType[] => {
    // console.log(arrOfObj);
    arrOfObj.forEach(user => {
        if (user.age >= 18) filteredArray?.push(user);
    })
    return filteredArray;
}

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
```

**[🔼Back to Top](#table-of-contents)**

### `Problem03: Generic function to reverse a string array`

``` Typescript
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
```

**[🔼Back to Top](#table-of-contents)**

### `Problem04: Person vs Student Class`

``` Typescript
/* 
    Problem 4: Person vs Student Class

    Create a TypeScript class called Person that has private properties name and age, and a public method getDetails 
    that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

    Create a TypeScript class called Student that extends the Person class and has an additional private property grade. 
    Define a public method getGrade that returns the student's grade. 
    Use the super keyword to call the constructor of the Person class and initialize the name and age properties.
*/

class Person {
    // parameter properties
    constructor(private name: string, private age: number) {}

    // method
    getDetails(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    // parameter properties
    constructor( name: string,  age: number, private grade: number){
        super(name, age);
    }

    // method
    getGrade() {
        return this.grade;
    }
}

// create an instance (object)
const student = new Student('Taylor Swift', 35, 3.81);
const person = new Person('Taylor Lautner', 40);

// output
console.log(student.getDetails()); // Taylor Swift is 35 years old.
console.log(student.getGrade()); // 3.81
console.log(person.getDetails()); // Taylor Lautner is 40 years old.
```

**[🔼Back to Top](#table-of-contents)**

### `Problem05: Unknown, type guard and error message`

``` Typescript
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
```

**[🔼Back to Top](#table-of-contents)**

### `Problem06(optional): Array and Tuple types`

``` Typescript
/* 
    optionalProblem 1: Array and Tuple types

    Create a TypeScript program that declares an array of strings and a tuple of a number and a string. 
    Add elements to both data structures, and log them to the console.
*/

// declare array of string and a tuple type
const arrayOfString: string[] = ['Next', 'Level', 'Web', 'Development', '2.0'];
const arrayOfTuple: (string | number)[] = ['Next', 'Level', 'Web', 'Development', 2.0];

// output
console.log(arrayOfString); // [ 'Next', 'Level', 'Web', 'Development', '2.0' ]
console.log(arrayOfTuple); // [ 'Next', 'Level', 'Web', 'Development', 2 ]

// add elements
arrayOfString.push('Apollo');
arrayOfTuple.push('Apollo');

// output
console.log(arrayOfString); // [ 'Next', 'Level', 'Web', 'Development', '2.0', 'Apollo' ]
console.log(arrayOfTuple); // [ 'Next', 'Level', 'Web', 'Development', 2, 'Apollo' ]
```

**[🔼Back to Top](#table-of-contents)**

### `Problem07(optional): Interface and type constraints`

``` Typescript
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
```

**[🔼Back to Top](#table-of-contents)**

## Interview Questions

### `What is TypeScript, and how is it different from JavaScript?`

> Typescript is an Object Oriented Programming Language that is built on top of JS with Extra Features.

💠 `Some reasons that make Typescript different from JavaScript:`

1. Object-oriented programming language
2. Compiled language
3. Static typed language
4. Easy to manage and maintain large codebase
5. Supports older browser
6. Increase your productivity
7. Less bugs and less testing
8. Rich tooling support

**[🔼Back to Top](#table-of-contents)**

### `Can you explain the difference between "interface" and "type" in TypeScript?`

- [Interfaces vs Types in TypeScript](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript)
- [Difference between Type and Interface in TypeScript](https://www.geeksforgeeks.org/what-is-the-difference-between-interface-and-type-in-typescript/)

| Type | Interface |
| :---: | :---: |
| It is used for types such as primitives, object, unions, and tuples | It is only used for object type |
| Types are more flexible, clean and readable | Interface is less flexible when compared to typescript types |
| It uses the `type` keyword for creating new type | It uses the `interface` keyword for declaring an interface |
| It does not have implementation purposes | It has an implementation purpose |

``` Typescript
/* Syntax */

// interface
interface Person {
    name: string;
    age: number;
};

// type alias
type Person = {
    name: string;
    age: number;
};
```

**[🔼Back to Top](#table-of-contents)**

### `Can you give an example of how to use generics in TypeScript?`

``` Typescript
// Example

// Generic (type alias)
type GenericArray<T> = Array<T>; 

// way-02 | array declaration
const classRollNumbers: GenericArray<number> = [44, 23, 12, 4];
const classRollNumbers1: GenericArray<string> = ["44", "23", "12", "4"];
const classRollNumbers2: GenericArray<boolean> = [true, false];

// Generic (Type Alias)
type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
    {
        name: "Mr. X",
        roll: 1,
    },
    {
        name: "Mr. Y",
        roll: 2,
    },
];
```

**[🔼Back to Top](#table-of-contents)**

### `What is the difference between an "unknown" and "any" type in TypeScript?`

| any | unknown |
| :---: | :---: |
| `any` should be avoided since using it makes you lose most of the TypeScript benefits | If you don't know what type a certain variable or a function parameter is, always prefer `unknown` |
| `any` is very useful when migrating JavaScript codebase into TypeScript | `unknown` type should be preferred when dealing with variables which types we can't determine |
| `any` → first letter is an `A` → `Avoid` TypeScript | `unknown` → first letter is a `U` → `Use` TypeScript |
| You can perform any operation on `any` | you have to do a ___type check___ or ___type assertion___ to operate on `unknown` |
| `unknown` is the ___parent type___ of all other types. it's a ___regular type___ in the type system | `any` means ___turn off the type check___. it's a compiler directive and kind of meta programming. |
| values of type `unknown` can only be assigned to `unknown` or `any` | `any` value is assignable to `unknown` |

**[🔼Back to Top](#table-of-contents)**

### `Can you give an example of how to use enums in TypeScript?`

``` Typescript
// Enum Type - initially assign properties value 0, 1, 2
enum Level2 {
    junior, // 0
    mid, // 1
    senior, // 2
};

// Enum Type - We can overwrite properties
enum Level {
    noob = 'noob', // Level.noob = "noob"
    intermediate = 'intermediate', 
    advanced = 'advanced', 
};

// Type Alias
type NextLevelGuitarPlayer = {
    name: string;
    expertise: string;
    experience: Level,
};

const guitarist: NextLevelGuitarPlayer = {
    name: "partha",
    expertise: "Guitar",
    experience: experience.intermediate
};

console.log(guitarist.experience); // intermediate
```

**[🔼Back to Top](#table-of-contents)**

### `What is the "as" keyword used for in TypeScript?`

> The `as` keyword is a `type assertion` in typescript. Type assertion is used such that we can set the data type of the variable on our own and tells the compiler not to infer it on its own. <br /> Type assertion is used to tell the compiler that we want to treat `any as a number`, or `string`.

``` Typescript
/* Syntax of Type Assertion */
let something: any;

(something as string).length; // Syntax-01
<string>something.length; // Syntax-02
```

**[🔼Back to Top](#table-of-contents)**

### `Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?`

> In TypeScript, the `type guards` are used to `determine a variable's type`, often inside a conditional or functional block. <br /> `Create constraints on type` in typescript called `Type Guards`. Type Guards used in ___Class and Function___. <br /> There are different types of Type Guards such as `keyof guard`, `in guard`, and `instanceof guard`.

``` Typescript
// keyof guard - works on run-time

type AlphaNumeric = string | number;
function addNum(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
    // keyof guard used
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

console.log(addNum('1', '2')); // 12
console.log(addNum(1, 2)); // 3
```

``` Typescript
// In guard (In used for object)

type NormalUserType = {
    name: string;
};

type AdminUserType = {
    name: string;
    role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
    // In guard used
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}

const normalUser1: NormalUserType = { name: "Mr. Kallu" };
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

console.log(getUser(normalUser1)); // I am a normal user
console.log(getUser(adminUser1)); // I am an admin and my role is admin
```

**[🔼Back to Top](#table-of-contents)**

## Optional Questions

### `Can you explain what a "tuple" is in TypeScript?`

> A tuple is a `typed array` with a `pre-defined length and types` for each index. It allows each element in the array to be a known type of value.

A tuple is a TypeScript type that works like an array with some special considerations:
- The ___number of elements___ of the array is ___fixed___.
- The ___type___ of the elements is ___known___.
- The ___type___ of the elements of the array need ___not be the same___.

``` Typescript
/* Tuple */

let user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Toylar", true, 35, "Admin"];// initialize tuple variable

const person: [number, string, number, boolean] = [1, "Taylor Lautner", 35, true];
```

**[🔼Back to Top](#table-of-contents)**

### `Can you give an example of how to use "readonly" properties in TypeScript?`

``` Typescript
// Explicit type
const user: {
    readonly name: string, // readonly | can't assign value
    age: number
} = {
    name: "Persian",
    age: 52
};

console.log(user.name);
user.name = "Partha"; // Can't assign to 'name' because it is a read-only property
```

**[🔼Back to Top](#table-of-contents)**

### `Can you give an example of how to use "conditional types" in TypeScript?`

``` Typescript
/* 
    Syntax of Conditional type: 
        first_type extends second_type ? true_type : false_type;
*/

type a1 = null;
type a2 = a1 extends string ? string : null;
```

**[🔼Back to Top](#table-of-contents)**



