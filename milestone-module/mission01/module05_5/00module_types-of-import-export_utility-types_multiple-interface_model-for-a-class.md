## Table of Contents

- [Module5.5: Bonus Module](#module55-bonus-module)
  - [5.5.1 What is module, different formats of module technique, import and export](#551-what-is-module-different-formats-of-module-technique-import-and-export)
    - [`Resources`](#resources)
    - [`What is module?`](#what-is-module)
    - [`Different formats of module technique, import and export`](#different-formats-of-module-technique-import-and-export)
      - [`CommonJS format`](#commonjs-format)
      - [`ES6 format OR Asynchronous Module Definition (AMD) format`](#es6-format-or-asynchronous-module-definition-amd-format)
    - [`Summary`](#summary)
  - [5.5.2 Different types of import and export statement](#552-different-types-of-import-and-export-statement)
    - [`Resources`](#resources-1)
    - [`Different types of import and export statement`](#different-types-of-import-and-export-statement)
      - [`Common way of import & export`](#common-way-of-import--export)
      - [`WildCard import`](#wildcard-import)
      - [`default export`](#default-export)
      - [`Common name of default export & default export by object`](#common-name-of-default-export--default-export-by-object)
      - [`export from utils folder & SyntaxError (import from outside a module)`](#export-from-utils-folder--syntaxerror-import-from-outside-a-module)
      - [`export from utils folder & SyntaxError (import from outside a module) & Reduce lines of Code`](#export-from-utils-folder--syntaxerror-import-from-outside-a-module--reduce-lines-of-code)
  - [5.5.3 Know about utility Types](#553-know-about-utility-types)
    - [`Resources`](#resources-2)
    - [`Utility Types`](#utility-types)
      - [`Pick<Type, Keys>`](#picktype-keys)
      - [`Omit<Type, Keys>`](#omittype-keys)
      - [`Partial<Type>`](#partialtype)
      - [`Required<Type>`](#requiredtype)
      - [`Readonly<Type>`](#readonlytype)
      - [`Record<Keys, Type> & index signature`](#recordkeys-type--index-signature)
  - [5.5.4: How to use multiple interface as a type and create a model for a class](#554-how-to-use-multiple-interface-as-a-type-and-create-a-model-for-a-class)
    - [`Resources`](#resources-3)
    - [`Example`](#example)

# Module5.5: Bonus Module

## 5.5.1 What is module, different formats of module technique, import and export

### `Resources`

- [Modularization in Typescript](https://keyholesoftware.com/2013/01/14/modularization-in-typescript/)
- `In src folder:` [01main.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/01main.ts) | [02module.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/02module.ts)
- `In dist folder:` [01main.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/01main.js) | [02module.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/02module.js)

**[🔼Back to Top](#table-of-contents)**

### `What is module?`

> JavaScript has a ___concept of modules___. TypeScript shares this concept. <br /><br />  __Modules are executed within their own scope, not in the global scope;__ <br /> This means that variables, functions, classes, etc. ___declared in a module are not visible outside the module___ unless they are ___explicitly exported___ using ___one of the export forms___. <br /> Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be ___imported___ using ___one of the import forms___. <br /><br /> Pair of JavaScript ___modularization___ standards – `CommonJS` and `Asynchronous Module Definition (AMD)` or `ES6 format`.

**[🔼Back to Top](#table-of-contents)**

### `Different formats of module technique, import and export`

#### `CommonJS format`

``` Typescript
// In tsconfig.json

/* Modules */
"module": "commonjs",    /* Specify what module code is generated. */
```

---

``` Typescript
// In src/02module.ts

/* 5.5.1: What is module, different formats of module technique, import and export */

/* 
    Cannot redeclare block-scoped variable 'add'
    - Solution: modularization

    When we export a function, it create own scope. So, it didn't show (error for) naming conflict of global scope.
    But we need to use Alias for two same variable or function and gave a different name to avoid naming conflict on same file.
    If any file don't contain same named variable or function, then we don't need to use Alias. We can use it as usual.
*/

export const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

export const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}
```

``` JavaScript
// In dist/02module.js

"use strict";
/* 5.5.1: What is module, different formats of module technique, import and export */
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = void 0;
/*
    Cannot redeclare block-scoped variable 'add'
    - Solution: modularization

    When we export a function, it create own scope. So, it didn't show (error for) naming conflict of global scope.
    But we need to use Alias for two same variable or function and gave a different name to avoid naming conflict on same file.
    If any file don't contain same named variable or function, then we don't need to use Alias. We can use it as usual.
*/
const add = (param1, param2) => {
    return param1 + param2;
};
exports.add = add;
const subtract = (param1, param2) => {
    return param1 - param2;
};
exports.subtract = subtract;
```

---

``` Typescript
// In src/01main.ts

/* 5.5.1: What is module, different formats of module technique, import and export */

import { add as addToo, subtract } from './02module';

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res = addToo(4, 6);
console.log(res); // 10

const res2 = subtract(4, 6);
console.log(res2); // -2
```

``` JavaScript
// In dist/01main.js

"use strict";
/* 5.5.1: What is module, different formats of module technique, import and export */
Object.defineProperty(exports, "__esModule", { value: true });
const _02module_1 = require("./02module");
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const res = (0, _02module_1.add)(4, 6);
console.log(res); // 10
const res2 = (0, _02module_1.subtract)(4, 6);
console.log(res2); // -2
```

**[🔼Back to Top](#table-of-contents)**

#### `ES6 format OR Asynchronous Module Definition (AMD) format`

``` Typescript
// In tsconfig.json

/* Modules */
    "module": "ES2015",                                /* Specify what module code is generated. */

// Shortcut: Ctrl + spacebar = To show module list
```

---

``` Typescript
// In src/02module.ts

/* 5.5.1: What is module, different formats of module technique, import and export */

/* 
    Cannot redeclare block-scoped variable 'add'
    - Solution: modularization

    When we export a function, it create own scope. So, it didn't show (error for) naming conflict of global scope.
    But we need to use Alias for two same variable or function and gave a different name to avoid naming conflict on same file.
    If any file don't contain same named variable or function, then we don't need to use Alias. We can use it as usual.
*/

export const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

export const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}
```

``` JavaScript
// In dist/02module.js

/* 5.5.1: What is module, different formats of module technique, import and export */
/*
    Cannot redeclare block-scoped variable 'add'
    - Solution: modularization

    When we export a function, it create own scope. So, it didn't show (error for) naming conflict of global scope.
    But we need to use Alias for two same variable or function and gave a different name to avoid naming conflict on same file.
    If any file don't contain same named variable or function, then we don't need to use Alias. We can use it as usual.
*/
export const add = (param1, param2) => {
    return param1 + param2;
};
export const subtract = (param1, param2) => {
    return param1 - param2;
};
```

---

``` Typescript
// In src/01main.ts

/* 5.5.1: What is module, different formats of module technique, import and export */

import { add as addToo, subtract } from './02module';

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res = addToo(4, 6);
console.log(res); // 10

const res2 = subtract(4, 6);
console.log(res2); // -2
```

``` JavaScript
// In dist/01main.js

/* 5.5.1: What is module, different formats of module technique, import and export */
import { add as addToo, subtract } from './02module';
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const res = addToo(4, 6);
console.log(res); // 10
const res2 = subtract(4, 6);
console.log(res2); // -2
```

**[🔼Back to Top](#table-of-contents)**

### `Summary`

``` Typescript
// CommonJS Syntax
exports.add = add; // declare `add property` in `exports object` and then add `add function` to it.
```

> `Ctrl + spacebar` = ___To show module list___ | ___To change module format___ <br /> Change module --> "module": "___commonjs___", to "module": "___ES2015___", <br /> <br /> Once upon a time, people were using `CommonJS`. Nowadays, people are using `ES2015` <br /> Because of using ___Typescript___, We can fill the syntax of ___import___ and ___export___. <br /><br /> So, because of changing `moduler format`, we can ___organize our code___. ___create own scope___ to avoid ___naming conflict___.

**[🔼Back to Top](#table-of-contents)**

## 5.5.2 Different types of import and export statement

### `Resources`

- `In src folder:` [01main.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/01main.ts) | [02module.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/02module.ts) | [03index.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/03index.ts)
- `In dist folder:` [01main.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/01main.js) | [02module.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/02module.js) | [03index.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/03index.js)
- `In src/utils folder:` [add.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/utils/add.ts) | [subtract.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/utils/subtract.ts) | [multiply.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/utils/multiply.ts) | [average.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/utils/average.ts) | [index.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/utils/index.ts)
- `In dist/utils folder:` [add.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/utils/add.js) | [subtract.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/utils/subtract.js) | [multiply.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/utils/multiply.js) | [average.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/utils/average.js) | [index.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/utils/index.js)

**[🔼Back to Top](#table-of-contents)**

### `Different types of import and export statement`

#### `Common way of import & export`

``` Typescript
// In 02module.ts

/* way-01 | Common way of export */

export const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

export const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}

export const multiply = (param1: number, param2: number): number => {
    return param1 * param2;
}
```

``` Typescript
// In 01main.ts

/* way-01 | Common way of import */

import { add as addToo, subtract, multiply } from './02module'; // Common way of import

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res = addToo(4, 6);
console.log(res); // 10

const res2 = subtract(4, 6);
console.log(res2); // -2
```

**[🔼Back to Top](#table-of-contents)**

#### `WildCard import`

``` Typescript
// In 02module.ts

/* way-01 | Common way of export */

export const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

export const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}

export const multiply = (param1: number, param2: number): number => {
    return param1 * param2;
}
```

``` Typescript
// In 01main.ts

/* way-02 | WildCard import */

import * as Methods from './02module'; // WildCard Import

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res = Methods.add(4, 6);
console.log(res); // 10

const res2 = Methods.subtract(4, 6);
console.log(res2); // -2
```

**[🔼Back to Top](#table-of-contents)**

#### `default export`

``` Typescript
// In 02module.ts

/* way-03 | default export */

export const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

export const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}

const average = (param1: number, param2: number): number => {
    return (param1 + param2) / 2;
}

export default average; // default export
```

``` Typescript
// In 01main.ts

/* way-03 | default import & normal import */

// import React, { useState, useEffect } from 'react'; // default import & normal import
import average, { add as addToo, subtract } from "./02module";

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res = addToo(4, 6);
console.log(res); // 10

const res2 = subtract(4, 6);
console.log(res2); // -2

const res3 = average(4, 6);
```

**[🔼Back to Top](#table-of-contents)**

#### `Common name of default export & default export by object`

``` Typescript
// In 02module.ts

/* way-04 | default export by object */

const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}

const multiply = (param1: number, param2: number): number => {
    return param1 * param2;
}

const average = (param1: number, param2: number): number => {
    return (param1 + param2) / 2;
}

// default export by object
export default {
    add,
    subtract,
    multiply,
    average,
};
```

``` Typescript
// In 01main.ts

/* way-04 | Common name of default import */

import Jekonu from './02module'; // common name of default export

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res = Jekonu.add(4, 6);
console.log(res); // 10

const res2 = Jekonu.subtract(4, 6);
console.log(res2); // -2

const res3 = Jekonu.average(4, 6);
```

**[🔼Back to Top](#table-of-contents)**

#### `export from utils folder & SyntaxError (import from outside a module)`

``` Typescript
// In src/utils/add.ts

const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

export default add;
```

``` Typescript
// In src/utils/subtract.ts

const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}

export default subtract;
```

``` Typescript
// In src/utils/multiply.ts

const multiply = (param1: number, param2: number): number => {
    return param1 * param2;
}

export default multiply;
```

``` Typescript
// In src/utils/average.ts

const average = (param1: number, param2: number): number => {
    return (param1 + param2) / 2;
}

export default average;
```

---

``` Typescript
// In src/03index.ts

/* way-05 | export from utils folder */

import addTwo from './utils/add';
import subtract from './utils/subtract';
import multiply from './utils/add';
import average from './utils/average';

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res1 = addTwo(4, 6); // 10
const res2 = subtract(4, 6); // -2
const res3 = multiply(4, 6); // 24
const res4 = average(4, 6); // 5
console.log(res1, res2, res3, res4); // SyntaxError: Cannot use import statement outside a module
```

> `Notes:` We got `SyntaxError: Cannot use import statement outside a module` error because ___utils___ is a child folder of ___src___. <br /> So, `src/03index.ts` use import statement from outside a module. <br /> ___utils files create a scope on utils folder___.

**[🔼Back to Top](#table-of-contents)**

#### `export from utils folder & SyntaxError (import from outside a module) & Reduce lines of Code`

``` Typescript
// In src/utils/index.ts

import addTwo from './add';
import subtract from './subtract';
import multiply from './multiply';
import average from './average';

/* 
    - This file used to default export all utils such as add, subtract, multiply, and average.
    - So that we can reduce lines of Code
*/

export default {
    addTwo,
    subtract,
    multiply,
    average,
};
```

``` Typescript
// In src/utils/add.ts

const add = (param1: number, param2: number): number => {
    return param1 + param2;
}

export default add;
```

``` Typescript
// In src/utils/subtract.ts

const subtract = (param1: number, param2: number): number => {
    return param1 - param2;
}

export default subtract;
```

``` Typescript
// In src/utils/multiply.ts

const multiply = (param1: number, param2: number): number => {
    return param1 * param2;
}

export default multiply;
```

``` Typescript
// In src/utils/average.ts

const average = (param1: number, param2: number): number => {
    return (param1 + param2) / 2;
}

export default average;
```

---

``` Typescript
// In src/03index.ts

/* way-05 | export from utils folder */

// import addTwo from './utils/add';
// import subtract from './utils/subtract';
// import multiply from './utils/add';
// import average from './utils/average';

// Reduce lines of Code
import methods from './utils/index';

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res1 = methods.addTwo(4, 6); // 10
const res2 = methods.subtract(4, 6); // -2
const res3 = methods.multiply(4, 6); // 24
const res4 = methods.average(4, 6); // 5
console.log(res1, res2, res3, res4); // SyntaxError: Cannot use import statement outside a module
```

> `Notes:` We got `SyntaxError: Cannot use import statement outside a module` error because ___utils___ is a child folder of ___src___. <br /> So, `src/03index.ts` use import statement from outside a module. <br /> ___utils files create a scope on utils folder___.

**[🔼Back to Top](#table-of-contents)**

## 5.5.3 Know about utility Types

### `Resources`

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Index Signatures in TypeScript](https://dmitripavlutin.com/typescript-index-signatures/) 
- [Index Signatures](https://basarat.gitbook.io/typescript/type-system/index-signatures)
- `In src folder:` [04utility-types.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/04utility-types.ts)
- `In dist folder:` [04utility-types.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/04utility-types.js)

**[🔼Back to Top](#table-of-contents)**

### `Utility Types`

> TypeScript provides ___several utility types___ to ___facilitate common type transformations___. These utilities are ___available globally___.

#### `Pick<Type, Keys>`

``` Typescript
// 01. Pick<Type, Keys>

interface Person {
    name: string;
    email?: string;
    contactNo: string;
};

/* 
    - Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type. 
    - To select property
*/
type Email = Pick<Person, "email">;
type ContactNo = Pick<Person, "contactNo">;
type Contact = Pick<Person, "contactNo" | "email">;
```

**[🔼Back to Top](#table-of-contents)**

#### `Omit<Type, Keys>`

``` Typescript
// 02. Omit<Type, Keys>

/* 
    - Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). 
    - The opposite of Pick.
    - To remove property
*/

interface Person {
    name: string;
    email?: string;
    contactNo: string;
};

type Name = Omit<Person, "email" | "contactNo">;
type ContactNo2 = Omit<Person, "name">;
```

**[🔼Back to Top](#table-of-contents)**

#### `Partial<Type>`

``` Typescript
// 03. Partial<Type>

/* 
    - Constructs a type with all properties of Type set to optional. 
    - This utility will return a type that represents all subsets of a given type.
    - To make all the properties be optional type
*/

interface Person {
    name: string;
    email?: string;
    contactNo: string;
};

type Optional = Partial<Person>;
```

**[🔼Back to Top](#table-of-contents)**

#### `Required<Type>`

``` Typescript
// 04. Required<Type>

/* 
    - Constructs a type consisting of all properties of Type set to required. 
    - The opposite of Partial.
*/

interface Person {
    name: string;
    email?: string;
    contactNo: string;
};

type RequiredProps = Required<Person>;
```

**[🔼Back to Top](#table-of-contents)**

#### `Readonly<Type>`

``` Typescript
// 05. Readonly<Type>

/* 
    - Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
*/

interface Person {
    name: string;
    email?: string;
    contactNo: string;
};

const person: Readonly<Person> = {
    name: "Persian",
    email: "abc@gmail.com",
    contactNo: '12341234'
};

// person.name = 'Partha'; // Cannot assign to 'name' because it is a read-only property
```

**[🔼Back to Top](#table-of-contents)**

#### `Record<Keys, Type> & index signature`

``` Typescript
// 06. Record<Keys, Type>

/* 
    - Constructs an object type whose property keys are Keys and whose property values are Type. 
    - This utility can be used to map the properties of a type to another type.
*/

// type myObj = {
//     a: string;
//     b: string;
//     c: string;
// };

// using index signature
// type myObj = {
//     // [key: string]: string;
//     [key: 'a' | 'b' | 'c']: string;
// };

// using Record Utility - 'a' | 'b' | 'c'
// type myObj = Record<string, string>;
type myObj = Record<'a' | 'b' | 'c', string>;

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    // d: 4     /* Type 'number' is not assignable to type 'string' */
    // d: "4"   /* 'd' does not exist in type 'myObj' */
};
```

**[🔼Back to Top](#table-of-contents)**

## 5.5.4: How to use multiple interface as a type and create a model for a class

### `Resources`

- [How do I implement multiple interfaces in a class?](https://stackoverflow.com/questions/46075181/how-do-i-implement-multiple-interfaces-in-a-class)
- `In src folder:` [05multiple_interface-&-model_for_a_class.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/src/05multiple_interface-&-model_for_a_class.ts)
- `In dist folder:` [05multiple_interface-&-model_for_a_class.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module05_5/dist/05multiple_interface-&-model_for_a_class.js)

**[🔼Back to Top](#table-of-contents)**

### `Example`

``` Typescript
/* 
    class (has)
        1. props   --> (create) interface
        2. methods --> (create) interface
        interface + interface = model // combine both interface and create a type called model
    class will use this model using "class X implements typeName"
*/

// create generic model
interface Model<TData, TMethods> {
    data: TData;
    methods: TMethods;
};

// Properties interface
interface IUser {
    firstName: string;
    lastName: string;
};
// Methods interface
interface IMethods {
    fullName(): string;
}

// create type from model
type model = Model<IUser, IMethods>;

// class implements this type
class User implements model {
    data: IUser;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`,
        }
    }
}

// create an instance (object)
const user1 = new User('Crescent', 'Partha');

console.log(user1.methods.fullName()); // Crescent Partha
console.log(user1.data.firstName); // Crescent
console.log(user1.data.lastName); // Partha
```

**[🔼Back to Top](#table-of-contents)**

