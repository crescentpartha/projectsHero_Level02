## Table of Contents

- [Module02: Explore Advance Types of Typescript](#module02-explore-advance-types-of-typescript)
  - [3.1 Type Assertion](#31-type-assertion)
    - [`Resources`](#resources)
    - [`Description`](#description)
    - [`Syntax of Type Assertion`](#syntax-of-type-assertion)
    - [`Examples`](#examples)
  - [3.2 Interface, Type vs Interface](#32-interface-type-vs-interface)
    - [`Resources`](#resources-1)
    - [`Examples`](#examples-1)
      - [`Interface & Type Alias`](#interface--type-alias)
      - [`Extends another interface`](#extends-another-interface)
      - [`Extends another type alias`](#extends-another-type-alias)
      - [`Interface vs Type Alias`](#interface-vs-type-alias)
      - [`Type Signature in Function using Type Alias & Interface`](#type-signature-in-function-using-type-alias--interface)
      - [`Type Signature in Array using Type Alias & Interface`](#type-signature-in-array-using-type-alias--interface)
  - [3.3 Introduction of Generic in Type](#33-introduction-of-generic-in-type)
    - [`Resources`](#resources-2)
    - [`Examples`](#examples-2)
      - [`Array Declaration in 2 ways`](#array-declaration-in-2-ways)
      - [`Type Alias`](#type-alias)
      - [`Generic (type alias) | Example-03`](#generic-type-alias--example-03)
      - [`Generic (type alias) | Example-04`](#generic-type-alias--example-04)
      - [`Generic (Tuple - type alias) | Example-05` ___Bed Practice (using Object)___](#generic-tuple---type-alias--example-05-bed-practice-using-object)
      - [`Generic (Tuple - type alias) | Example-06` ___Bed Practice (using Object)___](#generic-tuple---type-alias--example-06-bed-practice-using-object)
      - [`Generic (Tuple - type alias) | Example-07` ___Good Practice___](#generic-tuple---type-alias--example-07-good-practice)
  - [3.4 Generic in Interface](#34-generic-in-interface)
    - [`Resources`](#resources-3)
    - [`Examples`](#examples-3)
      - [`System of using Interface`](#system-of-using-interface)
      - [`Use Generic Interface`](#use-generic-interface)
      - [`Declare multiple generic type inside the Interface`](#declare-multiple-generic-type-inside-the-interface)
      - [`Declare multiple generic type inside the Interface along with Default Parameter`](#declare-multiple-generic-type-inside-the-interface-along-with-default-parameter)
      - [`Declare multiple generic type inside the Interface along with Default Parameter (for object)`](#declare-multiple-generic-type-inside-the-interface-along-with-default-parameter-for-object)
  - [3.5 Generic in Function](#35-generic-in-function)
    - [`Resources`](#resources-4)
    - [`Examples`](#examples-4)
      - [`Generic Arrow Function`](#generic-arrow-function)
      - [`(More than one) Generic Arrow Function`](#more-than-one-generic-arrow-function)
      - [`Spread Operator in Arrow Function`](#spread-operator-in-arrow-function)
      - [`Generic in Arrow Function`](#generic-in-arrow-function)
      - [`Generic in Normal Function`](#generic-in-normal-function)
  - [3.6 Constraints in Generics](#36-constraints-in-generics)
    - [`Resources`](#resources-5)
    - [`Examples`](#examples-5)
      - [`Normal Generic Function`](#normal-generic-function)
      - [`Generic Constraints`](#generic-constraints)
      - [`Generic Constraints with Type Alias`](#generic-constraints-with-type-alias)
      - [`Generic Constraints with Interface`](#generic-constraints-with-interface)
  - [3.7 Generic Constraints Using Key Of (Part-01)](#37-generic-constraints-using-key-of-part-01)
    - [`Resources`](#resources-6)
    - [`Examples`](#examples-6)
      - [`About keyof`](#about-keyof)
      - [`Generic Constraints using keyof`](#generic-constraints-using-keyof)

# Module02: Explore Advance Types of Typescript

## 3.1 Type Assertion

### `Resources`

- [TypeScript Type Assertion](https://www.javatpoint.com/typescript-type-assertion#:~:text=In%20TypeScript%2C%20type%20assertion%20is,type%20using%20a%20type%20assertion.)
- [01type-assertion.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/src/01type-assertion.ts) | [01type-assertion.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/dist/01type-assertion.js)

**[🔼Back to Top](#table-of-contents)**

### `Description`

> In TypeScript, `Type Assertion` is a mechanism which `tells the compiler` about the `type of a variable`. <br /> When TypeScript determines that the `assignment is invalid`, then we have an option to `override the type` using a type assertion. <br /> <br /> Type assertion is `explicitly telling the compiler` that we want to treat the entity as a different type. <br /> It allows us to treat `any as a number`, or `number as a string`. <br /> <br /> Type assertion is `commonly used` when we are `migrating` over code from `JavaScript to TypeScript`. <br /> <br /> Type assertion works like `typecasting`, but it `does not perform type checking`. <br /> <br /> The `typecasting` comes with `runtime support`, whereas type assertion has no impact on runtime. <br /> However, `type assertions` are purely a `compile-time construct` and provide hints to the compiler on how we want our code to be analyzed. <br /> <br /> `Moral of the Story:` ___We assert or understand types better than TypeScript___.

**[🔼Back to Top](#table-of-contents)**

### `Syntax of Type Assertion`

``` Typescript
/* Syntax of Type Assertion: */

let something: any;

(something as string).length; // Syntax-01
<string>something.length; // Syntax-02
```

> `Notes:` Syntax-02 ___doesn't work___ on `tpsx` (file type - may be). So, ___Always use Syntax-01___ (better approach)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

``` Typescript
/* Variable Example-01 */

let something: any; // type any

something = "Next level web development"; // type any
// something. // It doesn't give any auto-suggestion about property or methods.
// (something as string). // Now auto-suggestion intelligence apply

(something as string).length; // (way-01) apply type assertion | (gives string related auto-suggestion)
<string>something.length; // (way-02) apply type assertion
```

**[🔼Back to Top](#table-of-contents)**

``` Typescript
/* Variable Example-02 */

let something2: any; // type any
something2 = 666;

(something2 as number).toFixed(); // (way-01) apply type assertion | (gives number related auto-suggestion)
<number>something2.toFixed(); // (way-02) apply type assertion
```

**[🔼Back to Top](#table-of-contents)**

``` Typescript
/* Function Example */

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    else if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number; // (way-01) apply type assertion
const resultToBeNumber2 = <number>kgToGram(1000); // (way-02) apply type assertion
console.log(resultToBeNumber, resultToBeNumber2); // 1000000 1000000

const resultToBeString = kgToGram("1000") as string; // (way-01) apply type assertion
const resultToBeString2 = <string>kgToGram("1000"); // (way-02) apply type assertion
console.log(resultToBeString); // The converted result is: 1000000 gram
console.log(resultToBeString2); // The converted result is: 1000000 gram

/* 
    Be careful when you use type assertion
    const resultToBeString = kgToGram("1000") as number; // we tell this is number, but actually we pass string.
    although, we assert type as number but it return string;
*/
```

**[🔼Back to Top](#table-of-contents)**

``` Typescript
/* try-catch Example */

type CustomErrorType = {
    message: string
}

try {

} catch (err) {
    console.log((err as CustomErrorType).message); // (way-01) type assertion
    console.log((<CustomErrorType>err).message); // (way-02) type assertion
}
```

**[🔼Back to Top](#table-of-contents)**

## 3.2 Interface, Type vs Interface

### `Resources`

- [Type Aliases vs Interfaces in TypeScript - dev.to](https://dev.to/toluagboola/type-aliases-vs-interfaces-in-typescript-3ggg)
- [TypeScript - Interfaces](https://www.tutorialspoint.com/typescript/typescript_interfaces.htm)
- [02interface-type_vs_interface.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/src/02interface-type_vs_interface.ts) | [02interface-type_vs_interface.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/dist/02interface-type_vs_interface.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Interface & Type Alias`

``` Typescript
/* Interface & Type Alias Example-01 */

// type alias | Object type
type User = {
    name: string;
    age: number;
};

/* 
  This object we can present in another way called interface 
    - We will use type alias for primitive type data
    - And we will use interface for object type data
    Facility of using interface - we can extend interface
*/

// interface
interface IUser {
    name: string;
    age: number;
}

// Object
const userWithTypeAlias: User = {
    name: "Type Alias",
    age: 100
};
userWithTypeAlias.name = "Type alias";
console.log(userWithTypeAlias.name); // Type alias

// Object
const userWithInterface: IUser = {
    name: "Interface",
    age: 200,
};
userWithInterface.name = "interface";
console.log(userWithInterface.name); // interface

/* Facility of using interface - we can extend interface */
```

**[🔼Back to Top](#table-of-contents)**

#### `Extends another interface`

``` Typescript
/* Interface Example-02 | Extends another interface */

// type alias | Object type
type User = {
    name: string;
    age: number;
};

// interface
interface IUser {
    name: string;
    age: number;
}

// extended interface
interface IExtendedUser extends IUser {
    role: string;
}

// object
const user: IExtendedUser = {
    name: "Adom",
    age: 2000,
    role: "Unknown",
};
console.log(user.name); // Adom
```

**[🔼Back to Top](#table-of-contents)**

#### `Extends another type alias`

``` Typescript
/* Type Alias Example-03 | Extends another type alias */

// We can also extend type alias using Union and Intersection

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
```

**[🔼Back to Top](#table-of-contents)**

#### `Interface vs Type Alias`

``` Typescript
/* Interface & Type Alias Example-04 */

/*
    For Object - we can use anyone between Interface and Type Alias 
    For Primitive type - we can use only Type Alias because Primitive type in Typescript is build-in type. So, we can't customize it using interface.
*/

type rollNumber = number; // we can defined "number type" using Type Alias - It isn't possible using interface

// Interface only for Object type (Object, Function, Array)
```

**[🔼Back to Top](#table-of-contents)**

#### `Type Signature in Function using Type Alias & Interface`

``` Typescript
/* Type Signature in Function using Type Alias & Interface Example-05 */

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

// Suggestion: We use Type Alias for function. (Clean Code & Readable)
```

**[🔼Back to Top](#table-of-contents)**

#### `Type Signature in Array using Type Alias & Interface`

``` Typescript
/* Type Signature in Array using Type Alias & Interface Example-06 */

// Array is the special types of object. So, we can use interface instead of type alias.

// using type alias
type rollNumbersType = number[]

// const rollNumbers: number[] = [1, 2, 3, 4, 5];
const rollNumbers: rollNumbersType = [1, 2, 3, 4, 5];

/* ----------------------------------------------- */

// using interface
interface IRollNumbers {
    [index: number]: number; // Indexing nature (index type : hold type)
}

// const rollNumbers2: number[] = [1, 2, 3, 4, 5]; // [index]
const rollNumbers2: IRollNumbers = [1, 2, 3, 4, 5]; // [index]

// Suggestion: Type Alias syntax is more clean & readable instead of interface. So, use Type Alias

/* Thumb Rolls
    Interface: used for Object (Object, Function, Array, Class)
    Type Alias: used for Primitive types (number, string, boolean, null, undefined)
*/
```

**[🔼Back to Top](#table-of-contents)**

## 3.3 Introduction of Generic in Type

### `Resources`

- [03generic-in-type.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/src/03generic-in-type.ts) | [03generic-in-type.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/dist/03generic-in-type.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Array Declaration in 2 ways`

``` Typescript
/* Array Declaration in 2 ways */

// way-01 | array declaration
const classRollNumbers: number[] = [44, 23, 12, 4];
const classRollNumbers2: string[] = ["44", "23", "12", "4"];

// way-02 | array declaration
const classRollNumbers3: Array<number> = [44, 23, 12, 4];
const classRollNumbers4: Array<string> = ["44", "23", "12", "4"];
const classRollNumbers5: Array<boolean> = [true, false];

// object declaration
const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
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

#### `Type Alias`

``` Typescript
/* Type Alias */

// type alias
type GenericArray = Array<number>;
type GenericArray1 = Array<string>;
type GenericArray2 = Array<boolean>;

// way-02 | array declaration
const classRollNumbers: GenericArray = [44, 23, 12, 4];
const classRollNumbers1: GenericArray1 = ["44", "23", "12", "4"];
const classRollNumbers2: GenericArray2 = [true, false];
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic (type alias) | Example-03`

``` Typescript
/* Generic in Type */

/* 
    - write in a general way is called Generic
    - We need to create generic in this way that consider any types.

    add(x,y) // (function) parameters x and y
    add(3,4) // (invoke function) pass arguments x and y
*/

// Generic (type alias)
type GenericArray<T> = Array<T>; // 1st <T> acts like a parameter

// way-02 | array declaration
const classRollNumbers: GenericArray<number> = [44, 23, 12, 4];
const classRollNumbers1: GenericArray<string> = ["44", "23", "12", "4"];
const classRollNumbers2: GenericArray<boolean> = [true, false];

const userNameAndRollNumbers: GenericArray<{ name: string; roll: number }> = [
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

#### `Generic (type alias) | Example-04`

``` Typescript
/* Generic in Type */

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

#### `Generic (Tuple - type alias) | Example-05` ___Bed Practice (using Object)___

``` Typescript
/* Generic in Type */

/* 
    We can add more parameter using Tuples like
    add(x, y, z)
    add(2, 3, 4)
*/

// Generic (Tuple - type alias)
type GenericTuple<X, Y> = [X, Y];

// create variable
const relation: GenericTuple<string, string> = ['Persian', 'Kate Winslet'];

// But it isn't best practice because object would have different properties
const relationWithSalary: GenericTuple<object, string> = [
    {
        name: "Persian",
        salary: 1000000000, 
    },
    "Kate Winslet",
];

// Bed practice (using Object)
const relationWithSalary2: GenericTuple<object, string> = [
    {
        age: 25, // we use age property instead of name, so this isn't valid object
        salary: 1000000000, 
    },
    "Kate Winslet",
];
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic (Tuple - type alias) | Example-06` ___Bed Practice (using Object)___

``` Typescript
/* Generic in Type */

/* 
    We can add more parameter using Tuples like
    add(x, y, z)
    add(2, 3, 4)
*/

// Generic (Tuple - type alias)
type GenericTuple<X, Y> = [X, Y];

// create variable
const relation: GenericTuple<string, string> = ['Persian', 'Kate Winslet'];

// But it isn't best practice because object would have different properties
const relationWithSalary: GenericTuple<object, string> = [
    {
        name: "Persian",
        salary: 1000000000, 
    },
    "Kate Winslet",
];

// Bed practice (using Object)
const relationWithSalary2: GenericTuple<{name: string, salary: number}, string> = [
    {
        // age: 25, // we use age property instead of name, so this isn't valid object
        name: "Persian",
        salary: 1000000000, 
    },
    "Kate Winslet",
];
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic (Tuple - type alias) | Example-07` ___Good Practice___

``` Typescript
/* Generic in Type */

/* 
    We can add more parameter using Tuples like
    add(x, y, z)
    add(2, 3, 4)
*/

// Generic (Tuple - type alias)
type GenericTuple<X, Y> = [X, Y];

// create variable
const relation: GenericTuple<string, string> = ['Persian', 'Kate Winslet'];

// Generic (type alias) | we can also use interface instead
type RelationWithSalaryType = { name: string, salary: number };

// Good Practice
const relationWithSalary: GenericTuple<RelationWithSalaryType, string> = [
    {
        name: "Persian",
        salary: 1000000000,
    },
    "Kate Winslet",
];

// Good Practice
const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
    {
        name: "Persian",
        salary: 1000000000,
    },
    "Kate Winslet",
];
```

**[🔼Back to Top](#table-of-contents)**

## 3.4 Generic in Interface

### `Resources`

- [04generic-in-interface.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/src/04generic-in-interface.ts) | [04generic-in-interface.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/dist/04generic-in-interface.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `System of using Interface`

``` Typescript
/* System of using Interface | Example-01 */

// Generic (Tuple - type alias)
type GenericTuples<X, Y> = [X, Y];

// create variable
const relations: GenericTuples<string, string> = ['Persian', 'Kate Winslet'];

// Generic (type alias) | We can use interface instead of type alias because interface used in object type data
// type RelationWithSalaryTypes = { name: string, salary: number };

// Generic (interface) | System of using Interface
interface RelationWithSalaryInterface {
    name: string;
    salary: number;
}

// Good Practice
const relationsWithSalary: GenericTuples<RelationWithSalaryInterface, string> = [
    {
        name: "Persian",
        salary: 1000000000,
    },
    "Kate Winslet",
];

// Good Practice
const relationsWithSalary2: GenericTuples<RelationWithSalaryInterface, string> = [
    {
        name: "Persian",
        salary: 1000000000,
    },
    "Kate Winslet",
];

/* 
    - For object type data --> use type alias or interface
    - For primitive type data --> use only type alias
*/
```

**[🔼Back to Top](#table-of-contents)**

#### `Use Generic Interface`

``` Typescript
/* Use Generic Interface */

// Generic Interface
interface CrushInterface<T> {
    name: string;
    husband: T
}

const crush1: CrushInterface<boolean> = { name: 'Kate Winslet', husband: true };

const crush2: CrushInterface<string> = {
    name: "Kate Winslet",
    husband: "Persian",
};

// directly use <object> type never preferable because object could have different properties. (Bad Practice && Create Bug)
const cursh3: CrushInterface<object> = {
    name: "Kate Winslet",
    husband: {
        name: "Persian",
        salary: 100000000,
    },
};

// explicitly mention type when you use object (Good Practice)
const cursh4: CrushInterface<{name: string; salary: number}> = {
    name: "Kate Winslet",
    husband: {
        name: "Persian",
        salary: 100000000,
    },
};

// best Practice
interface HusbandInterface {
    name: string;
    salary: number;
}

const cursh5: CrushInterface<HusbandInterface> = {
    name: "Kate Winslet",
    husband: {
        name: "Persian",
        salary: 100000000,
    },
};
```

**[🔼Back to Top](#table-of-contents)**

#### `Declare multiple generic type inside the Interface`

``` Typescript
/* Use (more than one) Generic Interface */

// Generic Interface | Declare multiple generic type inside the Interface
interface CrushInterface<T, U> {
    name: string;
    husband: T;
    wife?: U; // optional type
}

const crush1: CrushInterface<boolean, undefined> = { name: 'Kate Winslet', husband: true };

const crush2: CrushInterface<string, null> = {
    name: "Kate Winslet",
    husband: "Persian",
};
```

**[🔼Back to Top](#table-of-contents)**

#### `Declare multiple generic type inside the Interface along with Default Parameter`

``` Typescript
/* Use (more than one) Generic Interface using Default Parameter */

// Generic Interface | Declare multiple generic type inside the Interface along with Default Parameter
interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U; // optional type
}

const crush1: CrushInterface<boolean, string> = { 
    name: 'Kate Winslet', 
    husband: true,
    wife: "Chokina",
};

const crush2: CrushInterface<string> = {
    name: "Kate Winslet",
    husband: "Persian",
};
```

**[🔼Back to Top](#table-of-contents)**

#### `Declare multiple generic type inside the Interface along with Default Parameter (for object)`

``` Typescript
/* Use (more than one) Generic Interface using Default Parameter for (object) */

// Generic Interface | Declare multiple generic type inside the Interface along with Default Parameter
interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U; // optional type
}

// use interface for object
const crush1: CrushInterface<object, object> = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};

// use interface for object | Good Practice
const crush2: CrushInterface<
    { name: string; age: number },
    { name: string; age: number }
> = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};

// use interface for object | Best Practice

interface PersonInterface {
    name: string;
    age: number;
}

const crush3: CrushInterface<PersonInterface, PersonInterface> = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};

/* 
    Summary: Code will be Organized and Clean

    - We can use Generic Type, Generic Interface 
    - Declare multiple generic type inside the Interface like <T, U> = <husband, wife>
    - For type, we can use Default type or parameter
*/
```

**[🔼Back to Top](#table-of-contents)**

## 3.5 Generic in Function

### `Resources`

- [05generic-in-function.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/src/05generic-in-function.ts) | [05generic-in-function.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/dist/05generic-in-function.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Generic Arrow Function`

``` Typescript
// Normal Arrow Function
const createArray1 = (param: string): string[] => {
    return [param];
};
const result1 = createArray1('Bangladesh');

/* ------------------------------------------ */

// Generic Arrow Function
const createArray2 = <T>(param: T): T[] => {
    return [param];
};
const result2 = createArray2<string>('Bangladesh');
const result3 = createArray2<boolean>(true);
const result4 = createArray2<object>({ name: "Bangladesh" }); // don't declare object in this way
const result5 = createArray2<{ name: string }>({ name: "Bangladesh" });

type Name = { name: string };
const result6 = createArray2<Name>({ name: "Bangladesh" });
```

**[🔼Back to Top](#table-of-contents)**

#### `(More than one) Generic Arrow Function`

``` Typescript
// (More than one) Generic Arrow Function

const createArray2 = <X,Y>(param1: X, param2: Y): [X,Y] => {
    return [param1, param2];
};

const result1 = createArray2<string, string>('Bangladesh', 'I love my country');
const result3 = createArray2<boolean, [string]>(true, ["USA"]);
const result2 = createArray2<boolean, Array<string>>(true, ["USA"]);
const result4 = createArray2<object, boolean>({ name: "Bangladesh" }, true); // don't declare object in this way
const result5 = createArray2<{ name: string }, boolean>({ name: "Bangladesh" }, true);

type Name = { name: string };
const result6 = createArray2<Name, unknown>({ name: "Bangladesh" }, null);
```

**[🔼Back to Top](#table-of-contents)**

#### `Spread Operator in Arrow Function`

``` Typescript
// Spread Operator

const crush = "Tailor Swift";
const myInfo = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
};
const newData = {...myInfo, crush};

// Spread Operator in Arrow Function
const addMeInMyCrushMind = (myInfo: object) => {
    const crush = "Tailor Swift";
    const newData = {...myInfo, crush}; // Spread Operator doesn't apply 
    /* 
        Only crush data found in newData because typescript defined type before compile the code.
        In this situation, we can infer/guess type by using generic
    */
    return newData;
}
const result = addMeInMyCrushMind(myInfo);
// result. // only crush data found | myInfo data not found
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic in Arrow Function`

``` Typescript
// Spread Operator

const crush = "Tailor Swift";
const myInfo = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
};
const newData = {...myInfo, crush};

// Generic in Arrow Function
const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crush = "Tailor Swift";
    const newData = {...myInfo, crush}; // Spread Operator applied after using generic
    return newData;
}
const result = addMeInMyCrushMind(myInfo);
// result. // found all data
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic in Normal Function`

``` Typescript
// Generic in Normal Function

function createArray<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
};
const result = createArray("Crescent", "Tailor Swift");
console.log(result); // [ 'Crescent', 'Tailor Swift' ]
```

**[🔼Back to Top](#table-of-contents)**

## 3.6 Constraints in Generics

### `Resources`

- [06constraints-in-generics.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/src/06constraints-in-generics.ts) | [06constraints-in-generics.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/dist/06constraints-in-generics.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Normal Generic Function`

``` Typescript
/* Normal Generic Function */

const addMeInMyCrushMind = <T>(myInfo: T) => {
    const crush = "Tailor Swift";
    const newData = { ...myInfo, crush }; // Spread Operator applied after using generic
    return newData;
}

type myInfoType = {
    name: string;
    age: number;
    salary: number;
}

const myInfo: myInfoType = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
};
const results1 = addMeInMyCrushMind({ MonerKushi: "Hashi Kushi" }); // accept any type/properties of object

/* So, We need to use generic constraints to constrain the types in generic functions to specific types. */
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic Constraints`

> `Generic Constraints` in TypeScript ___to constrain the types___ in generic functions to ___specific types___. <br /> <br /> `Generic Type:` It ___accepts any types___ of data or properties in function or variable. <br /> `Generic Constraints:` It ___constrains to generic type___ and ___defined the specific types___ of particular properties in function.

``` Typescript
/* Generic Constraints */

// generic constraints in TypeScript to constrain the types in generic functions to specific types.

const addMeInMyCrushMind = <T extends {name: string, age: number, salary: number}>(myInfo: T) => {
    const crush = "Tailor Swift";
    const newData = { ...myInfo, crush }; // Spread Operator applied after using generic
    return newData;
}

type myInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean,
    other2: null
}

const myInfo: myInfoType = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
    other1: false,
    other2: null
};
// const results1 = addMeInMyCrushMind({ MonerKushi: "Hashi Kushi" }); // accept any type/properties of object

const results2 = addMeInMyCrushMind<myInfoType>(myInfo);
// results2. // other1 and other2 also included
```

> `Notes:` So, if we use `generic constraints` using `<T extends {name: string, age: number, salary: number}>`, <br /> We must need to ___pass___ `name, age and salary` properties inside the object. <br />We can `also pass other properties` too but need to `mention in type generic` like ___myInfoType___

**[🔼Back to Top](#table-of-contents)**

#### `Generic Constraints with Type Alias`

``` Typescript
/* Generic Constraints with Type Alias */

// make more organize & readable code
type MandatoryTypes = {name: string, age: number, salary: number};

const addMeInMyCrushMind = <T extends MandatoryTypes>(myInfo: T) => {
    const crush = "Tailor Swift";
    const newData = { ...myInfo, crush }; // Spread Operator applied after using generic
    return newData;
}

type myInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean,
    other2: null
}

const myInfo: myInfoType = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
    other1: false,
    other2: null
};

const results2 = addMeInMyCrushMind<myInfoType>(myInfo);
// results2. // other1 and other2 also included
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic Constraints with Interface`

``` Typescript
/* Generic Constraints with Interface */

// make more organize & readable code
// type MandatoryTypes = {name: string, age: number, salary: number};
interface MandatoryInterface {name: string, age: number, salary: number};

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = "Tailor Swift";
    const newData = { ...myInfo, crush }; // Spread Operator applied after using generic
    return newData;
}

type myInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean,
    other2: null
}

const myInfo: myInfoType = {
    name: "Crescent",
    age: 25,
    salary: 10000000,
    other1: false,
    other2: null
};

const results2 = addMeInMyCrushMind<myInfoType>(myInfo);
// results2. // other1 and other2 also included
```

**[🔼Back to Top](#table-of-contents)**

## 3.7 Generic Constraints Using Key Of (Part-01)

### `Resources`

- [07generic-keyof-constraints.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/src/07generic-keyof-constraints.ts) | [07generic-keyof-constraints.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module03/dist/07generic-keyof-constraints.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `About keyof`

``` Typescript
/* 
    - keyof is a keyword in TypeScript which is used to extract the key type from an object type.
    - When used on an object type with explicit keys, keyof creates a union type with those keys.
    - If you want to get the key in the object type, you need to use the keyof type operator.
    - using key of one type (object), we can create another type (object) where it will be union type of those keys
*/

type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = 'name' | 'age' | 'address'; // Union type | did manually

type newTypeUsingKeyOf = keyof PersonType; // using keyof (did same thing as newType)

const a: newType = 'age';
const b: newTypeUsingKeyOf = 'age';
```

**[🔼Back to Top](#table-of-contents)**

#### `Generic Constraints using keyof`

``` Typescript
/* Generic Constraints using keyof */

/* 
    Problem Statement: I want to create a generic function where I pass an object and a key (as object key) 
Ex:
    ({name: 'Mr.X', age: 100}, 'name') // Mr.X (return)
    ({name: 'Mr.X', age: 100}, 'age') // 100 (return)

    const a = {
        name: 'Mr.X',
        age: 100
    }
    a['name']
    a['age']
*/

// normal function
function getProperty<X, Y extends keyof X> (obj: X, key: Y) {
    // Y = 'name' | 'age'; // Union type key object
    obj[key];
}
const property1 = getProperty({name: "Mr. X", age: 100}, "age");
// const property2 = getProperty({name: "Mr. X", age: 100}, "salary"); // Argument of type '"salary"' is not assignable to parameter of type '"age" | "name"'

// So, using keyof, one generic type constraint/force to another generic type
```

**[🔼Back to Top](#table-of-contents)**

