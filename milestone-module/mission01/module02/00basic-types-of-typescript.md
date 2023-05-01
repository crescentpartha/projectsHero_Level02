## Table of Contents

- [Module02: Explore Basic Types of Typescript](#module02-explore-basic-types-of-typescript)
  - [2.1 Installation typescript, nvm \& ts-node-dev](#21-installation-typescript-nvm--ts-node-dev)
    - [`Resources`](#resources)
    - [`Some Command and Basic Setup`](#some-command-and-basic-setup)
    - [`Run .ts and .js files`](#run-ts-and-js-files)
    - [`Globally accessible variable, function and object`](#globally-accessible-variable-function-and-object)
  - [2.2 Primitive types in typescript](#22-primitive-types-in-typescript)
    - [`Resources`](#resources-1)
    - [`Primitive Types`](#primitive-types)
    - [`Explicit Type` - as we ___declare type___ manually (immediately)](#explicit-type---as-we-declare-type-manually-immediately)
    - [`Implicit Type` - as we ___don't declare___ any type](#implicit-type---as-we-dont-declare-any-type)
  - [2.3 Array and Tuples in typescript](#23-array-and-tuples-in-typescript)
    - [`Resources`](#resources-2)
    - [`Array in Typescript`](#array-in-typescript)
    - [`Tuples in Typescript`](#tuples-in-typescript)
  - [2.4 Object, Literal Types and Optional Types](#24-object-literal-types-and-optional-types)
    - [`Resources`](#resources-3)
    - [`Object in Typescript`](#object-in-typescript)
  - [2.5 Functions in Typescript](#25-functions-in-typescript)
    - [`Resources`](#resources-4)
    - [`Normal function`](#normal-function)
    - [`Arrow function`](#arrow-function)
    - [`Callback function`](#callback-function)
    - [`Method in Object`](#method-in-object)
  - [2.6 Spread, Rest, Default Parameters and Destructuring](#26-spread-rest-default-parameters-and-destructuring)
    - [`Resources`](#resources-5)
    - [`Default Parameters` (Incorrect)](#default-parameters-incorrect)
    - [`Default Parameters` (Correct)](#default-parameters-correct)
    - [`Spread Operator`](#spread-operator)
    - [`Normal Invoke Function - Without Rest Parameter/Operator`](#normal-invoke-function---without-rest-parameteroperator)
    - [`Rest Operator`](#rest-operator)
    - [`Array Destructuring`](#array-destructuring)
    - [`Object Destructuring`](#object-destructuring)
    - [`Notes`](#notes)
  - [2.7 Type alias and optional types](#27-type-alias-and-optional-types)
    - [`Resources`](#resources-6)
    - [`Normal typescript Object`](#normal-typescript-object)
    - [`Type Alias`](#type-alias)
    - [`Boolean Type Alias`](#boolean-type-alias)
    - [`string type Alias`](#string-type-alias)
    - [`function type Alias`](#function-type-alias)
  - [2.8 Union, Intersection and Enum Types](#28-union-intersection-and-enum-types)
    - [`Resources`](#resources-7)
    - [`Union Types`](#union-types)
    - [`Intersection Type`](#intersection-type)
    - [`Enum Type`](#enum-type)
  - [2.9 Null, Unknown and Never Types](#29-null-unknown-and-never-types)
    - [`Resources`](#resources-8)
    - [`Null Types`](#null-types)
    - [`Unknown Types`](#unknown-types)
    - [`Never Types`](#never-types)
  - [2.10 Ternary Operator, Nullish Coalescing Operator, Module Summary - ___Question\_Mark___](#210-ternary-operator-nullish-coalescing-operator-module-summary---question_mark)
    - [`Resources`](#resources-9)
    - [`Ternary Operator`](#ternary-operator)
    - [`Nullish Coalescing Operator`](#nullish-coalescing-operator)
  - [Quiz 2](#quiz-2)

# Module02: Explore Basic Types of Typescript

## 2.1 Installation typescript, nvm & ts-node-dev

### `Resources`

- Install [Node.js](https://nodejs.org/en/download "Download nodejs")
- [NVM Install Guide - freeCodeCamp](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
- [nvm-windows](https://github.com/coreybutler/nvm-windows/releases "Download .exe file from github (click)")
- [Download TypeScript](https://www.typescriptlang.org/download)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev "It helps to run .ts file in the node environments without converting .js file")

**[🔼Back to Top](#table-of-contents)**

### `Some Command and Basic Setup`

``` JavaStrict
node -v // v16.15.1
```

> We frequently face package related problem. So we need to change node version. We can use different version of Node.js by using `NVM (Node Version Manager)`. <br /> So we can install and `switch` different version of node.js using NVM. `NVM used to control versions`.

``` JavaStrict
nvm --v // 1.1.11 (in Terminal)

nvm list // 16.15.1 | List all versions of node.js installations

nvm use 19.8.1 // To switch node.js version

npm install typescript --save-dev // To install locally

npm install -g typescript // To install globally

tsc --v // Version 5.0.4 | To check typescript version
```

> `tsc` means `typescript compiler`. Its `covert` the ___typescript code___ to ___javascript code___.

``` JavaStrict
tsc ./01index.ts // To convert equivalent javascript code && create 01index.js file

node ./01index.js // To run javascript code

node ./01index.ts // Can't run typescript file (Missing initializer)

tsc --init // To create Typescript configuration file (tsconfig.json)
```

> We use `nodemon` to start serve again and again, if we change any file. Before that we need to ___initialize___ `package.json` file.

``` JavaStrict
npm init -y // To initialize package.json file

npm i -D nodemon // To install nodemon as a dev dependency

nodemon -v // 2.0.22 | It creates node_modules folder

// Write start script
"scripts": {
    "start": "nodemon 01index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},

npm start // To run the server
```

``` JavaStrict
tsc ./01index.ts // To compile .ts file and create or update .js file
```

> `tsc ./01index.ts` ↪ If we modify typescript file and `compile`, it's automatically `update` javascript file. <br /> Then `nodemon` ___detect this modification___ immediately. For this reason, we need to open two terminal. <br /> We can simplify (use only one terminal) this using `ts-node-dev`. See ___console.log___ in one terminal. <br /> `ts-node-dev` helps to run `.ts` file in the ___node environments___ without converting `.js` file.

``` JavaStrict
npm i ts-node-dev // It helps to run .ts file in the node environments without converting .js file

// Replace nodemon
"scripts": {
    "start": "ts-node-dev --respawn --transpile-only 01index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

> `About tsconfig.json` <br /> We can keep `structure of our folder` like put all `.ts file in src` and all `.js file in dict` folder

``` JavaStrict
"rootDir": "./src",      /* Specify the root folder within your source files. */
"outDir": "./dist",      /* Specify an output folder for all emitted files. */
```

``` JavaStrict
tsc // It converts all .ts file to .js file in dist folder | Don't need to tell the folder name after completing setup rootDir and outDir

.gitignore > node_modules // create .gitignore file and write inside node_modules
```

**[🔼Back to Top](#table-of-contents)**

### `Run .ts and .js files`

- Run JavaScript file
  - `node 01primitive-types.js` 
  - `node dist/01primitive-types.js`
- Run Typescript file
  - `npx ts-node-dev 01primitive-types.ts`
  - `npx ts-node-dev src/01primitive-types.ts`
  - `npx ts-node-dev --respawn src/01primitive-types.ts`

> `Notes:` `--respawn` flag `reload the terminal` whenever running file modified.

**[🔼Back to Top](#table-of-contents)**

### `Globally accessible variable, function and object`

> `Notes:` Every `variable, function and object` are `globally accessible` in different files inside the same folder, So we `can't redeclare` same variable, function and object in different file. <br /> <br /> We need to `setup Node and Express`, to `fix this problem`. 

**[🔼Back to Top](#table-of-contents)**

## 2.2 Primitive types in typescript

### `Resources`

- [01primitive-types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/01primitive-types.ts) | [01primitive-types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/01primitive-types.js)

### `Primitive Types`

- string
- number
- boolean
- null
- undefined

### `Explicit Type` - as we ___declare type___ manually (immediately)

> `Implicit type` means that the type is ___manually declared___ for a variable.

``` TypeScript
// Explicit Type - as we declare type manually (immediately)

let course: string = "Next Level Web Development";

// course = 666; // Type 'number' is not assignable to type 'string'
course = "Apollo Next Level Web Development 2.0";
console.log(course);

let rollNumber: number = 123;
// rollNumber = "One Hundred twenty three"; // Type 'string' is not assignable to type 'number'
rollNumber = 46;

const isAdmin: boolean = true;
```

> Typescript give me `more productivity`, not constraint about types. <br /><br /> 1. If we `assign` ___different type value___ in ___different variable___, It will `catch the error` in the `run time`. <br /> 2. If we use `.` after variable, it's automatically ___suggest___ this `variable types methods`.

``` TypeScript
let rollNumber: number = 123;

rollNumber = 46.123;
rollNumber.toFixed(); // 46
rollNumber.toFixed(2); // 46.12
```

### `Implicit Type` - as we ___don't declare___ any type

> `Implicit type` means that the type is ___automatically declared___ for a variable.

``` TypeScript
// Implicit Type - as we don't assign any type | Typescript automatically (implicitly) define the type

let course2 = "Next Level Web Development"; // string type
let rollNumber2 = 123; // number type
const isAdmin2 = true; // boolean type
```

``` TypeScript
let course3; // any type | assign or reassign any value 

/* Should not declare in this way because we can assign any value of it */
course3 = 333;
course3 = "Next";
course3 = undefined;

// If we don't know the value of any variable. Then we should define the type without value;
let course4: string; // string type
course4 = "Next Level Web Development";
// course4 = 666; // Type 'number' is not assignable to type 'string'
```

``` TypeScript
// We also have null & undefined type variable which have some difference

/* Declaration */

let course5: null; // null type
let course6: undefined; // undefined type
// const course6: undefined; // 'const' declarations must be initialized

/* Assignment */

let course7; // any type | assign or reassign any value
const course8 = undefined; // undefined type
let course9 = undefined; // any type | assign or reassign any value
course9 = "Blah Blah";
course9 = true;
```

**[🔼Back to Top](#table-of-contents)**

## 2.3 Array and Tuples in typescript

### `Resources`

- [02array-and-tuples.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/02array-and-tuples.ts) | [02array-and-tuples.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/02array-and-tuples.js)

### `Array in Typescript`

``` Typescript
/* Array in Typescript */

// const names = ["abul", "babul", "kabul"]; // string type (implicitly)
const names: string[ ] = ["abul", "babul", "kabul"]; // string type (explicitly)

// const rollNumber: number[ ] = [23, 46, 4, 5, 99]; // 01primitive-types.ts(9, 5): 'rollNumber' was also declared here
const rollNumbers: number[ ] = [23, 46, 4, 5, 99];  // number type (explicitly)

rollNumbers[8] = 100;
// rollNumbers[9] = "One"; // Type 'string' is not assignable to type 'number'
```

``` Typescript
/* Variable's Methods */

// If we use dot (.) symbol after variable, it's automatically suggest different types of variable's methods

const roll: string[ ] = rollNumbers.map(roll => roll.toPrecision(3));
console.log(roll); // [ '23.0', '46.0', '4.00', '5.00', '99.0', <3 empty items>, '100' ]

const namesLength: number[ ] = names.map(name => name.length);
console.log(namesLength); // [ 4, 5, 5 ]
```

``` Typescript
/* Union type or Mixed type */

const names2 = ["abul", "babul", "kabul", 46, 23, true]; // Union type (mixed type) | (string, number, boolean) type
names2.push(33);
names2.push("Apollo");
names2.push(false);
// names2.push(null); // Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'
// names2.push(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'string | number | boolean'
console.log(names2); // [ 'abul', 'babul', 'kabul', 46, 23, true, 33, 'Apollo', false ]
```

**[🔼Back to Top](#table-of-contents)**

### `Tuples in Typescript`

- Tuples similar to ___couples___ | (Tuples = ___Double/Twice___ = Couples)
- Tuple = (__key, value__) pair
- Tuple is a ___special type of array___

``` Typescript
const user2 = [23, "Partha"]; // Union type (normal array)
user2[0] = "Twenty Three";
console.log(user2); // [ 'Twenty Three', 'Partha' ]

const user: [number, string] = [23, "Crescent"]; // tuples type
user[1] = "Partha";
console.log(user); // [ 23, 'Partha' ]

const user1: [number, boolean] = [23, false]; // tuples type
user1[1] = true;
console.log(user1); // [ 23, true ]
```

``` Typescript
const boyfriends: [string, string] = ["Abul", 'Abila']; // tuples type
const boyfriends2: [string, boolean] = ["Abul", true]; // tuples type

console.log(boyfriends); // [ 'Abul', 'Abila' ]
console.log(boyfriends2); // [ 'Abul', true ]
```

**[🔼Back to Top](#table-of-contents)**

## 2.4 Object, Literal Types and Optional Types

### `Resources`

- [03object-literal_types-optional_types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/03object-literal_types-optional_types.ts) | [03object-literal_types-optional_types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/03object-literal_types-optional_types.js)

### `Object in Typescript`

``` Typescript
/* Object in Typescript */

// Implicitly, It infers/guess the variable or properties types
const user3 = {
    name: "Montu Mia",
    age: 52,
    isMarried: true,
    wife: "Monira Khatun",
};
console.log(user3);
console.log(user3.name);
```

``` Typescript
// Explicit type
const user4: {
    company: "Programming Hero", // Literal type: (used for specific value)
    readonly location: string, // readonly | can't assign value
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string // Optional type or Intersection (?): used because it could be defined or undefined
} = {
    company: "Programming Hero",
    location: "Dhaka",
    name: "Montu Mia",
    age: 52,
    isMarried: true,
    wife: "Monira Khatun",
};
console.log(user4);
console.log(user4.company);

// user4.company = "Programming Hero Bangladesh"; // Type '"Programming Hero Bangladesh"' is not assignable to type '"Programming Hero"'
// user4.location = "Sylhet"; // Cannot assign to 'location' because it is a read-only property
```

**[🔼Back to Top](#table-of-contents)**

## 2.5 Functions in Typescript

### `Resources`

- [04functions.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/04functions.ts) | [04functions.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/04functions.js)

### `Normal function`

``` Typescript
// Normal function

function add(num1, num2) { // Any type | Show Error
    return num1 + num2;
}

// "noImplicitAny": true,    /* Enable error reporting for expressions and declarations with an implied 'any' type. */

/* Replace by false (In tsconfig.json): if you want not to catch error */

"noImplicitAny": false,      /* Enable error reporting for expressions and declarations with an implied 'any' type. */

function add(num1, num2) { // Any type | No Error
    return num1 + num2;
}
add('2', '2');
```

``` Typescript
// Normal function

/* 
function add(num1, num2) { // Any type | Show Error
    return num1 + num2;
}
add('2', '2');
 */

function add(num1: number, num2: number): number { // parameters and return type: number
    return num1 + num2;
}
console.log(add(2, 2)); // 4
```

### `Arrow function`

``` Typescript
// Arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addArrow(5, 5)); // 10
```

### `Callback function`

``` Typescript
// Callback function

// const arr = [1, 2, 3, 4, 5];
const arr: number[ ] = [1, 2, 3, 4, 5];

const newArray = arr.map((element: number) => element * element);
console.log(newArray); // [ 1, 4, 9, 16, 25 ]
```

### `Method in Object`

``` Typescript
/* Method in Object */

// We can use those function in object as a methods. So, if any function used in object, then we call this Method not a function.
const person: {
    name: string;
    balance: number;
    addBalance(money: number): number;
    addBalance2(money: number): string;
    addBalance3(money: number): void;
} = {
    name: "Mezba",
    balance: 5,
    addBalance(money: number): number {
        return this.balance + money;
    },
    addBalance2(money: number) {
        return `My New Balance is ${this.balance + money}`;
    }, 
    addBalance3(money: number) {
        console.log(`My New Balance is ${this.balance + money}`);
    },
};

console.log(person.addBalance(5)); // 10
console.log(person.addBalance2(10)); // My New Balance is 15
person.addBalance3(15); // My New Balance is 20
console.log(person.name, person.balance); // Mezba 5
```

**[🔼Back to Top](#table-of-contents)**

## 2.6 Spread, Rest, Default Parameters and Destructuring

### `Resources`

- [05spread-rest-default_parameters-and-destructuring.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/05spread-rest-default_parameters-and-destructuring.ts) | [05spread-rest-default_parameters-and-destructuring.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/05spread-rest-default_parameters-and-destructuring.js)

**[🔼Back to Top](#table-of-contents)**

### `Default Parameters` (Incorrect)

``` Typescript
// Default Parameters | 1st parameter (Not use ever)

function add2(num1: number = 10, num2: number): number { // parameters and return type: number | Default Parameter = 10
    return num1 + num2;
}

console.log(add2(5, 5)); // 10
console.log(add2(5)); // We don't use 1st parameter as a default parameter | (use & not use -> means the same) | Show Error
```

**[🔼Back to Top](#table-of-contents)**

### `Default Parameters` (Correct)

``` Typescript
// Default Parameters | Always use last parameter

function add2(num1: number, num2: number = 10,): number { // parameters and return type: number | Default Parameter = 10
    return num1 + num2;
}

console.log(add2(5, 5)); // 10
console.log(add2(5)); // 15
```

**[🔼Back to Top](#table-of-contents)**

### `Spread Operator`

``` Typescript
// Spread Operator - Separate the array items

const myFriends: string[ ] = ['chandler', 'joey', 'ross'];
const newFriends: string[ ] = ['monica', 'rachel', 'pheobe'];

myFriends.push(...newFriends);
console.log(myFriends); // [ 'chandler', 'joey', 'ross', 'monica', 'rachel', 'pheobe' ]
```

**[🔼Back to Top](#table-of-contents)**

### `Normal Invoke Function - Without Rest Parameter/Operator`

``` Typescript
// Rest Parameter/Operator - Create array by taking all items

// Normal Invoke Function

// const greatFriends = (friend1: string, friend2: string, friend3: string): void => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);
const greatFriends = (
    friend1: string,
    friend2: string,
    friend3: string
): void => console.log(`Hi ${friend1} \nHi ${friend2} \nHi ${friend3}`);

greatFriends("Nayeem", "Mohon", "Apu");

/* Output:
    Hi Nayeem
    Hi Mohon
    Hi Apu
*/
```

**[🔼Back to Top](#table-of-contents)**

### `Rest Operator`

``` Typescript
// Using Rest Operator

const greatFriends2 = (...friends: string[ ]): void => console.log(friends); // [ 'Nayeem', 'Mohon', 'Apu', 'Dipu', 'Topu', 'Tomal' ]
greatFriends2("Nayeem", "Mohon", "Apu", "Dipu", "Topu", "Tomal");

const greatFriends3 = (...friends: string[ ]): void => console.log(friends.forEach(friend => console.log(`Hi ${friend}`)));
greatFriends3("Nayeem", "Mohon", "Apu", "Dipu", "Topu", "Tomal");

/* Output:
    Hi Nayeem
    Hi Mohon
    Hi Apu
    Hi Dipu
    Hi Topu
    Hi Tomal
*/
```

**[🔼Back to Top](#table-of-contents)**

### `Array Destructuring`

``` Typescript
/* Array and Object Destructuring */

// Array Destructuring

const myFriends2: string[ ] = ['chandler', 'joey', 'ross'];

// const [bestFriend] = myFriends2;
// console.log(bestFriend); // chandler

const [bestFriend, goodFriend, roommate] = myFriends2;
console.log(bestFriend, goodFriend, roommate); // chandler joey ross
```

**[🔼Back to Top](#table-of-contents)**

### `Object Destructuring`

``` Typescript
// Object Destructuring

const myBestFriends = {
    friendName: "Pro Hero",
    age: 25,
};

// const {friendName} = myBestFriends;
// console.log(friendName); // Pro Hero

// const {friendName: string} = myBestFriends; // Take as name Alias (Take as name not type)
// console.log(string); // Pro Hero

const { friendName: string } = myBestFriends; // Take as name Alias (Take as name not type)
console.log({ string }); // { string: 'Pro Hero' }

// const {friendName: fullname} = myBestFriends; // Take as name Alias
// console.log(fullname); // Pro Hero
```

**[🔼Back to Top](#table-of-contents)**

### `Notes`

> `Default Parameter` ↪ Always used in ___last parameter___ | It takes ___by-default value___. <br /> `Spread Operator` ↪ used to ___separate the array items___. <br /> `Rest Parameter/Operator` ↪ ___Create array___ by taking all items. <br /> `Array Destructuring` ↪ We can use ___any variable___ to destructure from array. <br /> `Object Destructuring` ↪ We have to use ___given variable or properties___ to destructure from object.

**[🔼Back to Top](#table-of-contents)**

## 2.7 Type alias and optional types

### `Resources`

- [06type_alias-and-optional_types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/06type_alias-and-optional_types.ts) | [06type_alias-and-optional_types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/06type_alias-and-optional_types.js)

### `Normal typescript Object`

``` Typescript
const crush1: {
    name: string,
    age: number,
    profession: string,
    address: string
} = {
    name: "Moyna Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda"
};

const crush2: {
    name: string,
    age?: number, // Optional type 
    profession: string,
    address: string
} = {
    name: "Tia Pakhi",
    profession: "Next Level Web Developer",
    address: "Mexico"
};
```

**[🔼Back to Top](#table-of-contents)**

### `Type Alias`

> `Type Alias:` makes more organize and reuseable code. Type Alias not only works for `object`. It also works for `string, array, boolean` etc.

``` Typescript
// Type-Alias: makes more organize and reuseable code

type CrushType = {
    name: string,
    age?: number, // Optional type
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: "Moyna Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda"
};

const crush2: CrushType = {
    name: "Tia Pakhi",
    profession: "Next Level Web Developer",
    address: "Mexico"
};
```

**[🔼Back to Top](#table-of-contents)**

### `Boolean Type Alias`

``` Typescript
// const isCrushMarried: boolean = false;

/* Boolean Type Alias */

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;
```

**[🔼Back to Top](#table-of-contents)**

### `string type Alias`

``` Typescript
/* string type Alias */

type CourseNameType = string;
const courseName: CourseNameType = "Next Level Web Development";
```

**[🔼Back to Top](#table-of-contents)**

### `function type Alias`

``` Typescript
/* Normal Function */

const calculate = (number1: number, number2: number) => {
      return number1 + number2;
};
calculate(10, 20);
```

``` Typescript
/* function type Alias */

type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number, // 10
    number2: number, // 20
    // operation: (x: number, y: number) => number
    operation: OperationType // (x, y) => x + y | (10, 20) => 10 + 20
) => {
    return operation(number1, number2);
};
console.log(calculate(10, 20, (x, y) => x + y)); // 30
console.log(calculate(10, 20, (x, y) => x - y)); // -10
console.log(calculate(10, 20, (x, y) => x * y)); // 200
// calculate(10, 20, (x, y) => x + y);
```

**[🔼Back to Top](#table-of-contents)**

## 2.8 Union, Intersection and Enum Types

### `Resources`

- [07union-intersection-and-enum_types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/07union-intersection-and-enum_types.ts) | [07union-intersection-and-enum_types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/07union-intersection-and-enum_types.js)

**[🔼Back to Top](#table-of-contents)**

### `Union Types`

``` Typescript
/* Union Types */

type NoobDeveloper = {
    name: string,
};

type JuniorDeveloper = {
    name: string, 
    expertise: string, 
    experience: number,
};

// Union Types: | symbol indicate union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};
```

**[🔼Back to Top](#table-of-contents)**

### `Intersection Type`

``` Typescript
/* Intersection Type - Example01 */

type NoobDeveloper2 = {
    name: string,
};

// Intersection Type
type JuniorDeveloper2 = NoobDeveloper2 & {
    expertise: string, 
    experience: number,
};

// Union Types
const newDeveloper2: NoobDeveloper2 | JuniorDeveloper2 = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};
```

``` Typescript
/* Intersection Type - Example02 */

type NoobDeveloper2 = {
    name: string,
};

// Intersection Type
type JuniorDeveloper2 = NoobDeveloper2 & {
    expertise: string, 
    experience: number,
};

// Intersection Type
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    // level: string,
    level: "junior" | "mid" | "senior",
};

// Union Types
const newDeveloper2: NoobDeveloper2 | JuniorDeveloper2 = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};

const developer: NextLevelDeveloper = {
    name: "Next Level Bhai",
    expertise: "Typescript",
    experience: 2,
    leadershipExperience: 1,
    level: "mid",
};
```

**[🔼Back to Top](#table-of-contents)**

### `Enum Type`

> `Enum Type:` Used enum ___isn't best practice___. Ignore this type, just know that it exists in typescript. Mostly used `Union and Intersection` types. <br /> Enum, ___initially assign___ properties value `0, 1, 2` etc. But we can overwrite this enum types (example given below).

``` Typescript
/* Emum Type - Example */

type NoobDeveloper2 = {
    name: string,
};

// Intersection Type
type JuniorDeveloper2 = NoobDeveloper2 & {
    expertise: string,
    experience: number,
};

// Enum Type - Used enum isn't best practice | ignore it but know it exists
enum Level2 {
    junior, // 0
    mid, // 1
    senior, // 2
};

// Enum Type - We can overwrite properties
enum Level {
    junior = 'junior', // Level.junior = "junior"
    mid = 'mid', 
    senior = 'senior', 
};

// Intersection Type
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    // level: string,
    // level: "junior" | "mid" | "senior",
    level: Level,
};

// Union Types
const newDeveloper2: NoobDeveloper2 | JuniorDeveloper2 = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 1,
};

const developer: NextLevelDeveloper = {
    name: "Next Level Bhai",
    expertise: "Typescript",
    experience: 2,
    leadershipExperience: 1,
    // level: "Mid Level",
    // level: "mid",
    level: Level.junior,
};

console.log(developer.expertise); // Typescript
console.log(developer.name); // Next Level Bhai
```

> `Notes:` If we `inherit` any type, then must `use every properties` of this type. Otherwise, it shows error.

**[🔼Back to Top](#table-of-contents)**

## 2.9 Null, Unknown and Never Types

### `Resources`

- [08nullable-unknown-and-never_types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/08nullable-unknown-and-never_types.ts) | [08nullable-unknown-and-never_types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/08nullable-unknown-and-never_types.js)

### `Null Types`

``` Typescript
/* Null Type - Example01 */

// Search a name from database
const searchName = (value: string) => {
    if (value === null) {
        console.log("There is nothing to search!");
    }
    else {
        console.log("Searching");
    }
}

searchName("partha"); // Searching
// searchName(null); // Argument of type 'null' is not assignable to parameter of type 'string'
```

``` Typescript
/* In tsconfig.json - Fix the null error */ 

// But it isn't the best practice - Keep it by-default

// Before
// "strictNullChecks": true,   /* When type checking, take into account 'null' and 'undefined'. */

// After
"strictNullChecks": false,    /* When type checking, take into account 'null' and 'undefined'. */
```

``` Typescript
/* Null Type - Example02 */

// Search a name from database
const searchName = (value: string | null) => {
    if (value === null) {
        console.log("There is nothing to search!");
    }
    else {
        console.log("Searching");
    }
}

searchName(null); // There is nothing to search!
searchName("partha"); // Searching
```

**[🔼Back to Top](#table-of-contents)**

### `Unknown Types`

``` Typescript
/* Unknown Types */

// (Convert) kmh^-1 ==> ms^-1

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else if (typeof speed === 'string') {
        const [value, unit] = speed.split(" "); // ['10', 'kmh^-1']

        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log("There is wrong type");
    }
}

getMyCarSpeed(10); // My speed is 2.7777777777777777
getMyCarSpeed('10 kmh^-1'); // My speed is 2.7777777777777777
getMyCarSpeed(false); // There is wrong type
```

**[🔼Back to Top](#table-of-contents)**

### `Never Types`

``` Typescript
/* Never Types */

// If any function never return anything, then we can define this function as never type.

function throwError ( message: string): never {
    throw new Error(message);
}

// throwError('Error Happened');
throwError('Bhai Error hoyeche, please fix it!');
```

**[🔼Back to Top](#table-of-contents)**

## 2.10 Ternary Operator, Nullish Coalescing Operator, Module Summary - ___Question_Mark___

### `Resources`

- [09ternary-nullish_coalescing_operator.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/09ternary-nullish_coalescing_operator.ts) | [09ternary-nullish_coalescing_operator.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/09ternary-nullish_coalescing_operator.js)

**[🔼Back to Top](#table-of-contents)**

### `Ternary Operator`

``` Typescript
// Ternary Operator

const age: number = 22;

if (age >= 18) {
    console.log("Yes, Adult!"); // Yes, Adult!
}
else {
    console.log("No, Not Adult!");
}

const isYoung = age <= 40 ? "Young" : "Old"; // Ternary Operation
console.log(isYoung); // Young
```

**[🔼Back to Top](#table-of-contents)**

### `Nullish Coalescing Operator`

> The `nullish coalescing (??) operator` is a `logical operator` that returns its `right-hand side operand` when its left-hand side operand is `null` or `undefined`, and otherwise returns its `left-hand side operand`. <br /> <br /> `if (left-side === null || undefined)` print right-side, `otherwise` print left-side.

``` Typescript
// Nullish Coalescing Operator - Example01

/* 
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, 
and otherwise returns its left-hand side operand.

if (left-side === null || undefined) print right-side, otherwise print left-side.
*/

// const isAuthenticateUser = null;
// const isAuthenticateUser = undefined;
// const isAuthenticateUser = "Authenticate";
const isAuthenticateUser = "";
const userName = isAuthenticateUser ?? "Guest"; // Nullish Coalescing operation
const userName2 = isAuthenticateUser ? isAuthenticateUser : 'Guest'; // Ternary Operation
// console.log(userName); // Guest
// console.log(userName); // Guest
// console.log(userName); // Authenticate
console.log({ userName }, { userName2 }); // { userName: '' } { userName2: 'Guest' }
```

**[🔼Back to Top](#table-of-contents)**

``` Typescript
// Nullish Coalescing Operator - Example02

type Manush = {
    name: string,
    age: number,
    address: {
        city: "Panama",
        road: "Country Road",
        home?: "Sweet Home", // Optional type
    };
};

const manush1: Manush = {
    name: "Adom",
    age: 100,
    address: {
        city: "Panama",
        road: "Country Road",
    },
};

// Nullish Coalescing Operator
const home = manush1?.address?.home ?? "Sweet Home" // default "Sweet Home"
console.log(home); // Sweet Home
console.log({ home }); // { home: 'Sweet Home' }
```

**[🔼Back to Top](#table-of-contents)**

## Quiz 2

01. __What is TypeScript?__

    - [ ] A server-side scripting language
    - [ ] A client-side scripting language
    - [x] __A superset of JavaScript__
    - [ ] None
2.   __What type of assignment is this variable, `const course: string = 'Next Level Dev';`?__

     - [x] __Explicit__
     - [ ] Implicit
     - [ ] None
     - [ ] Inplicit
3.   __What is the difference between `“any”` and `“unknown”` in TypeScript?__

     - [ ] `Any` is a type that can be assigned any value, while `unknown` is a type that is assigned an unknown value.
     - [x] ___`Any` is a type that can be assigned any value, while `unknown` is a type that can only be assigned a value after a runtime check.___
     - [ ] `Any` is a type that can only be assigned a value after a runtime check, while `unknown` is a type that is assigned an unknown value.
     - [ ] There is no difference between `Any` and `unknown`
4.  __Which of the following is a primitive type in TypeScript?__

    - [ ] Object
    - [x] __String__
    - [ ] Array
    - [ ] All of above
5.  __Which of the following tuple in TS?__

    - [ ] `let name: string = "John";`
    - [ ] `let numbers: Array<number> = [1,2,3];`
    - [x] `let person: [string, number] = ["John", 32];`
    - [ ] `let age: number = [4,5,6];`
6.  __What is the difference between an array and a tuple in TypeScript?__

    - [ ] An array can have elements of different data types, while a tuple can only have elements of the same data type.
    - [x] __An array can have a variable number of elements, while a tuple has a fixed number of elements.__
    - [ ] An array is mutable, while a tuple is immutable.
7.   __What is the syntax for declaring an object type in TypeScript?__

     - [ ] `let obj: Object = { key: "value"};`
     - [ ] `let obj: {} = { key: "value"};`
     - [x] `let obj: {key: string} = { key: "value"};`
     - [ ] `let obj: [string, number] = {name: "John", age: 32}`
8.  __What is the output of the following code?__

    - [ ] Compilation error
    - [ ] 5 7
    - [ ] 7 5
    - [ ] 2 3 5
    - [ ] none

``` Typescript
function generateAdder(a: number): (b: number) => number {
  return function(b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
```


9.  __What is a default parameter in TypeScript?__

    - [x] __A parameter that has a default value assigned to it in the function declaration.__
    - [ ] A parameter that is required to be passed when calling a function.
    - [ ] A parameter that is used to specify the return type of a function.
    - [ ] The type checker considers only string assignable to anything.
10. __How do you define an alias for a type in TypeScript?__

    - [x] __Using the type keyword__
    - [ ] Using the interface keyword
    - [ ] Using the class keyword
    - [ ] Using the alias keyword

**[🔼Back to Top](#table-of-contents)**

