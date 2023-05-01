## Table of Contents

- [Module02: Explore Basic Types of Typescript](#module02-explore-basic-types-of-typescript)
  - [2.1 Installation typescript, nvm \& ts-node-dev](#21-installation-typescript-nvm--ts-node-dev)
  - [2.2 Primitive types in typescript](#22-primitive-types-in-typescript)

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
