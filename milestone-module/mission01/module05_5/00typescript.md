## Table of Contents

- [Module5.5: Bonus Module](#module55-bonus-module)
  - [5.5.1 What is module, different formats of module technique, import and export](#551-what-is-module-different-formats-of-module-technique-import-and-export)
    - [`Resources`](#resources)
    - [`What is module?`](#what-is-module)
    - [`Different formats of module technique, import and export`](#different-formats-of-module-technique-import-and-export)
      - [`CommonJS format`](#commonjs-format)
      - [`ES6 format OR Asynchronous Module Definition (AMD) format`](#es6-format-or-asynchronous-module-definition-amd-format)
    - [`Summary`](#summary)

# Module5.5: Bonus Module

## 5.5.1 What is module, different formats of module technique, import and export

### `Resources`

- [Modularization in Typescript](https://keyholesoftware.com/2013/01/14/modularization-in-typescript/)

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


