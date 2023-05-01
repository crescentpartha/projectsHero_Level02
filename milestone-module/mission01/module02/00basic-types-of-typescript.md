## Table of Contents

- [Module02: Explore Basic Types of Typescript](#module02-explore-basic-types-of-typescript)
  - [2.1 Installation typescript, nvm \& ts-node-dev](#21-installation-typescript-nvm--ts-node-dev)
  - [2.2 Primitive types in typescript](#22-primitive-types-in-typescript)
  - [2.3 Array and Tuples in typescript](#23-array-and-tuples-in-typescript)
  - [2.4 Object, Literal Types and Optional Types](#24-object-literal-types-and-optional-types)
  - [2.5 Functions in Typescript](#25-functions-in-typescript)

# Module02: Explore Basic Types of Typescript

## 2.1 Installation typescript, nvm & ts-node-dev

- Install [Node.js](https://nodejs.org/en/download "Download nodejs")
- [NVM Install Guide - freeCodeCamp](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
- [nvm-windows](https://github.com/coreybutler/nvm-windows/releases "Download .exe file from github (click)")
- [Download TypeScript](https://www.typescriptlang.org/download)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev "It helps to run .ts file in the node environments without converting .js file")

💠 `Some Command and Basic Setup`

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

## 2.2 Primitive types in typescript

💠 `Resources`

- [01primitive-types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/01primitive-types.ts) | [01primitive-types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/01primitive-types.js)

💠 `Primitive Types`

- string
- number
- boolean
- null
- undefined

💠 `Explicit Type` - as we ___declare type___ manually (immediately)

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

💠 `Implicit Type` - as we ___don't declare___ any type

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

💠 `Resources`

- [02array-and-tuples.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/02array-and-tuples.ts) | [02array-and-tuples.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/02array-and-tuples.js)

💠 `Array in Typescript`

``` Typescript
/* Array in Typescript */

// const names = ["abul", "babul", "kabul"]; // string type (implicitly)
const names: string[] = ["abul", "babul", "kabul"]; // string type (explicitly)

// const rollNumber: number[] = [23, 46, 4, 5, 99]; // 01primitive-types.ts(9, 5): 'rollNumber' was also declared here
const rollNumbers: number[] = [23, 46, 4, 5, 99];  // number type (explicitly)

rollNumbers[8] = 100;
// rollNumbers[9] = "One"; // Type 'string' is not assignable to type 'number'
```

``` Typescript
/* Variable's Methods */

// If we use dot (.) symbol after variable, it's automatically suggest different types of variable's methods

const roll: string[] = rollNumbers.map(roll => roll.toPrecision(3));
console.log(roll); // [ '23.0', '46.0', '4.00', '5.00', '99.0', <3 empty items>, '100' ]

const namesLength: number[] = names.map(name => name.length);
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

💠 `Tuples in Typescript`

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

💠 `Resources`

- [03object-literal_types-optional_types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/03object-literal_types-optional_types.ts) | [03object-literal_types-optional_types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/03object-literal_types-optional_types.js)

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

💠 `Resources`

- [04functions.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/src/04functions.ts) | [04functions.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module02/dist/04functions.js)

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

``` Typescript
// Arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addArrow(5, 5)); // 10
```

``` Typescript
// Callback function

// const arr = [1, 2, 3, 4, 5];
const arr: number[] = [1, 2, 3, 4, 5];

const newArray = arr.map((element: number) => element * element);
console.log(newArray); // [ 1, 4, 9, 16, 25 ]
```

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
