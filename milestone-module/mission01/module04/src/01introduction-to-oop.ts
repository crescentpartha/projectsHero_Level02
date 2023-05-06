/* 4.1 Introduction To Object Oriented Programming */

/* 

***Introduction to Typescript***

What is Typescript?

    - Typescript is an Object Oriented Programming Language  that is built on top of JS with Extra Features.
    - Javascript extends Typescript.

Why Typescript?

    Lacking in JavaScript

    - Dynamically Typed Language
    - Difficult to Manage Large Code Base
    - No Compile Type Check
    - Does not have built in support for OOP
    - Difficult to build robust tools like refactoring and autocompletion IDEs.


    When Working in a Large Application with Multiple Developers

    - Very difficult to main Large Codebase
    - Hard to find bugs
    - Catch errors only in runtime 

    Need es5 support in older browser but you like modern syntax ?

    - Typescript code can be compiled into older versions of Javascript

    Benefits of Using TypeScript

    - Supports Older Browser
    - Type safety
    - Increase Your Productivity
    - Less Bugs and Less Testing

    JS Types in TS

    - Number
    - String
    - Boolean
    - Null
    - Undefined
    - Oject
    - Symbol

    TS Own Types

    - Interface
    - Void
    - Array
    - Tuple
    - Enum
    - Union
    - Intersection

    Comparison JS vs TS

    JS

    - Dynamically typed
    - Interpreted
    - Limited Rich Tooling Support
    - Can be challenging to manage and maintain large codebase

    TS

    - Static typed
    - Compiled
    - Rich Tooling Support
    - Easy to manage and maintain large codebase

*/

/* 

***Introduction to OOP***

- Object-Oriented Programming or OOPs refers to languages that use objects in programming.
- Object-Oriented Programming (OOP) is a programming paradigm in computer science that relies on the concept of classes and objects.
- It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

OOPs Concepts:

- Class
- Objects
- Data Abstraction 
- Encapsulation
- Inheritance
- Polymorphism
- Dynamic Binding
- Message Passing

Building blocks of OOP

- Classes
- Objects
- Methods
- Attributes

Four Principles of OOP
> The four pillars of object-oriented programming are:

- Inheritance: child classes inherit data and behaviors from the parent class
- Encapsulation: containing information in an object, exposing only selected information
- Abstraction: only exposing high-level public methods for accessing an object
- Polymorphism: many methods can do the same task

Benefits of OOP for software engineering

- OOP models complex things as reproducible, simple structures
- Reusable, OOP objects can be used across programs
- Polymorphism allows for class-specific behavior
- Easier to debug, classes often contain all applicable information to them
- Securely protects sensitive information through encapsulation

*/


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

/* 

Writing code in an object pattern way is called object-oriented programming.

We use both functional programming and object-oriented programming in our project. It is the more popular trend in the industry.  

We can solve a problem in a functional way and object-oriented way. In some cases, solving a problem is easier in an object-oriented way. So, we won't solve it in a functional way and vice-versa. 

So, depending on the project requirements, we will mix functional and object-oriented programming in our project.

*/

