       
       /* Follow the documentations file for more structure and readable contents */

/* 3.2 Interface, Type vs Interface */

// We can extend type alias too using Union and Intersection

// type alias | Object type
type User = {
    name: string;
    age: number;
};

type ExtendedUser = User & {
    role: string;
};

const user2: ExtendedUser = {
    name: "Adom",
    age: 2000,
    role: "Unknown",
};
console.log(user2.name); // Adom



/* 
  This object we can present in another way called interface 
    - We will use type alias for primitive type data
    - And we will use interface for object type data
    Facility of using interface - we can extend interface

    For Object - we can use anyone between Interface and Type Alias 
    For Primitive type - we can use only Type Alias because Primitive type in Typescript is build-in type. 
                         So, we can't customize it using interface.
*/

type rollNumber = number; // we can define number type using Type Alias - It isn't possible using interface

// Interface only for Object type (Object, Function, Array)

// type signature using Type Alias
type addNumbersType = (num1: number, num2: number) => number;

// const addNumbers = (num1: number, num2: number): number => num1 + num2;
const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

/* --------------------------------- */

// type signature using Interface
interface IAddNumbers {
    (num1: number, num2: number): number;
}

const addNumbers2: IAddNumbers = (num1, num2) => num1 + num2;

// Suggestion: We use Type Alias for function. (Clean Code)

/* --------------------------------- */

// Array is the special types of object. So, we can use interface instead of type alias.

// using type alias
type rollNumbersType = number[]

// const rollNumbers: number[] = [1, 2, 3, 4, 5];
const rollNumbers: rollNumbersType = [1, 2, 3, 4, 5];

// using interface
interface IRollNumbers {
    [index: number]: number; // Indexing nature (index type : hold type)
}

// const rollNumbers2: number[] = [1, 2, 3, 4, 5]; // [index]
const rollNumbers2: IRollNumbers = [1, 2, 3, 4, 5]; // [index]

// Suggestion: Type Alias syntax is more clean & readable instead of interface.

/* --------------------------------- */

// interface
interface IUser {
    name: string;
    age: number;
}

interface IExtendedUser extends IUser {
    role: string;
}

const user: IExtendedUser = {
    name: "Adom",
    age: 2000,
    role: "Unknown",
};
console.log(user.name); // Adom

// // Object
// const userWithTypeAlias: User = {
//     name: "Type Alias",
//     age: 100
// };
// userWithTypeAlias.name = "Type alias";
// console.log(userWithTypeAlias.name); // Type alias

// // Object
// const userWithInterface: IUser = {
//     name: "Interface",
//     age: 200,
// };
// userWithInterface.name = "interface";
// console.log(userWithInterface.name); // interface



