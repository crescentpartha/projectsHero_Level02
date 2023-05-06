## Table of Contents

- [Module04: Object-Oriented Programming in TypeScript](#module04-object-oriented-programming-in-typescript)
  - [4.1 Introduction To Object Oriented Programming](#41-introduction-to-object-oriented-programming)
    - [`Resources`](#resources)
    - [`Introduction to Typescript`](#introduction-to-typescript)
      - [`What is Typescript?`](#what-is-typescript)
      - [`Why Typescript?`](#why-typescript)
        - [`Lacking in JavaScript`](#lacking-in-javascript)
        - [`When Working in a Large Application with Multiple Developers`](#when-working-in-a-large-application-with-multiple-developers)
        - [`Need es5 support in older browser but you like modern syntax?`](#need-es5-support-in-older-browser-but-you-like-modern-syntax)
        - [`Benefits of Using TypeScript`](#benefits-of-using-typescript)
      - [`JS Types in TS`](#js-types-in-ts)
      - [`TS Own Types`](#ts-own-types)
      - [`Comparison JS vs TS`](#comparison-js-vs-ts)
    - [`Introduction To OOP`](#introduction-to-oop)
      - [`Resources`](#resources-1)
      - [`What is Object-Oriented Programming?`](#what-is-object-oriented-programming)
      - [`OOPs Concepts`](#oops-concepts)
      - [`Building blocks of OOP`](#building-blocks-of-oop)
      - [`Four Principles of OOP`](#four-principles-of-oop)
      - [`Benefits of OOP for software engineering`](#benefits-of-oop-for-software-engineering)
    - [`Example of Functional vs Object-Oriented Programming`](#example-of-functional-vs-object-oriented-programming)
    - [`Summary`](#summary)


# Module04: Object-Oriented Programming in TypeScript

## 4.1 Introduction To Object Oriented Programming

### `Resources`

- [01introduction-to-oop.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/01introduction-to-oop.ts) | [01introduction-to-oop.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/01introduction-to-oop.js)

**[🔼Back to Top](#table-of-contents)**

### `Introduction to Typescript`

#### `What is Typescript?`

- Typescript is an Object Oriented Programming Language  that is built on top of JS with Extra Features.
- Javascript extends Typescript.

**[🔼Back to Top](#table-of-contents)**

#### `Why Typescript?`

##### `Lacking in JavaScript`

- Dynamically Typed Language
- Difficult to Manage Large Code Base
- No Compile Type Check
- Does not have built in support for OOP
- Difficult to build robust tools like refactoring and autocompletion IDEs.

**[🔼Back to Top](#table-of-contents)**

##### `When Working in a Large Application with Multiple Developers`

- Very difficult to main Large Codebase
- Hard to find bugs
- Catch errors only in runtime 

**[🔼Back to Top](#table-of-contents)**

##### `Need es5 support in older browser but you like modern syntax?`

> Typescript code can be compiled into older versions of Javascript

**[🔼Back to Top](#table-of-contents)**

##### `Benefits of Using TypeScript`

- Supports Older Browser
- Type safety
- Increase Your Productivity
- Less Bugs and Less Testing

**[🔼Back to Top](#table-of-contents)**

#### `JS Types in TS`

- Number
- String
- Boolean
- Null
- Undefined
- Object
- Symbol

**[🔼Back to Top](#table-of-contents)**

#### `TS Own Types`

- Interface
- Void
- Array
- Tuple
- Enum
- Union
- Intersection

**[🔼Back to Top](#table-of-contents)**

#### `Comparison JS vs TS`

| JavaScript | TypeScript |
| :---: | :---: |
| Dynamically typed | Static typed |
| Functional | Object-Oriented |
| Interpreted | Compiled |
| Limited Rich Tooling Support | Rich Tooling Support |
| Can be challenging to manage and maintain large codebase | Easy to manage and maintain large codebase |

**[🔼Back to Top](#table-of-contents)**

### `Introduction To OOP`

#### `Resources`

- [Introduction of Object Oriented Programming](https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/)
- [What is object-oriented programming? OOP explained in depth](https://www.educative.io/blog/object-oriented-programming)

#### `What is Object-Oriented Programming?`

- Object-Oriented Programming or OOPs refers to languages that ___use objects___ in programming.
- Object-Oriented Programming (OOP) is a programming paradigm in computer science that relies on the ___concept of classes and objects___.
- It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

#### `OOPs Concepts`

- Class
- Objects
- Data Abstraction 
- Encapsulation
- Inheritance
- Polymorphism
- Dynamic Binding
- Message Passing

#### `Building blocks of OOP`

- Classes
- Objects
- Methods
- Attributes

#### `Four Principles of OOP`

> The ___four pillars___ of object-oriented programming are:

- `Inheritance:` child classes inherit data and behaviors from the parent class
- `Encapsulation:` containing information in an object, exposing only selected information
- `Abstraction:` only exposing high-level public methods for accessing an object
- `Polymorphism:` many methods can do the same task

#### `Benefits of OOP for software engineering`

- OOP models complex things as reproducible, simple structures
- Reusable, OOP objects can be used across programs
- Polymorphism allows for class-specific behavior
- Easier to debug, classes often contain all applicable information to them
- Securely protects sensitive information through encapsulation

**[🔼Back to Top](#table-of-contents)**

### `Example of Functional vs Object-Oriented Programming`

``` Typescript
/* Example of Functional vs Object-Oriented Programming */

// Functional Programming

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
    return a + b;
};
const sum1 = add(2,3);
console.log(sum1); // 5


// Object-Oriented Programming

class Calculator {
    add (a: number, b: number): number {
        return a + b;
    }
}
const calculator = new Calculator();
const sum2 = calculator.add(5, 10); 
console.log(sum2); // 15
```

**[🔼Back to Top](#table-of-contents)**

### `Summary`

> Writing code in an object pattern way is called object-oriented programming. <br /> <br /> We use both functional programming and object-oriented programming in our project. It is the more popular trend in the industry. <br /> <br /> We can solve a problem in a functional way and object-oriented way. In some cases, solving a problem is easier in an object-oriented way. So, we won't solve it in a functional way and vice-versa. <br /> <br /> So, depending on the project requirements, we will mix functional and object-oriented programming in our project.

**[🔼Back to Top](#table-of-contents)**


