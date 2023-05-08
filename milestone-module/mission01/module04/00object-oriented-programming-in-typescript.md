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
  - [4.2 How to Create Class, Object, Parameter Properties](#42-how-to-create-class-object-parameter-properties)
    - [`Resources`](#resources-2)
    - [`Examples`](#examples)
      - [`Create class, object, method, constructor and parameter properties`](#create-class-object-method-constructor-and-parameter-properties)
      - [`Parameter Properties`](#parameter-properties)
  - [4.3 Inheritance](#43-inheritance)
    - [`Resources`](#resources-3)
    - [`Examples`](#examples-1)
      - [`Create normal Class & Methods`](#create-normal-class--methods)
      - [`Inheritance`](#inheritance)


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

## 4.2 How to Create Class, Object, Parameter Properties

### `Resources`

- [02class-object-parameter_properties.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/02class-object-parameter_properties.ts) | [02class-object-parameter_properties.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/02class-object-parameter_properties.js)
- [Parameter properties in TypeScript](https://medium.com/@daveford/parameter-properties-in-typescript-c99df6ba13f7)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Create class, object, method, constructor and parameter properties`

``` Typescript
// declare class
class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    // methods - function inside the class called methods
    /* We will use the normal function inside the class because this property doesn't work in the arrow function.  */

    // declare method
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

// create instance (object) | create object from class
const dog = new Animal("German Shepherd", "dog", "Ghew Ghew");
const cat = new Animal("Persian", "cat", "meaw meaw");

// dog. // intelligent support
dog.makeSound(); // The German Shepherd says Ghew Ghew
cat.makeSound(); // The Persian says meaw meaw
```

**[🔼Back to Top](#table-of-contents)**

#### `Parameter Properties`

``` Typescript
/* Parameter Properties */

/* 
    * Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly, or both.
    * Parameter properties is the shorthand way to declare & initialize constructor properties
        - Parameter Properties: (public | private | protected | readonly)
        - Used not for repeated work
        - By default, it will be public.
*/

// declare class
class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // Parameter Properties: shorthand way to declare & initialize constructor properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    // declare method
    public makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

// create instance (object) | create object from class
const cat = new Animal("Persian", "cat", "meaw meaw");

// dog. // intelligent support
cat.makeSound(); // The Persian says meaw meaw

cat.name = "Special Cat"; // by-default every properties will be public. So, we can access it.
cat.makeSound(); // The Special Cat says meaw meaw
```

**[🔼Back to Top](#table-of-contents)**

## 4.3 Inheritance

### `Resources`

- [03inheritance.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/03inheritance.ts) | [03inheritance.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/03inheritance.js)
- [TypeScript Inheritance](https://www.javatpoint.com/typescript-inheritance)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Create normal Class & Methods`

``` Typescript
/* Create normal Class & Methods */

class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
    }
}

class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string; // different

    constructor(name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
    } 
    takeClasses(numOfClass: number): string { // different
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
```

**[🔼Back to Top](#table-of-contents)**

#### `Inheritance`

``` Typescript
/* Inheritance */

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep only for ${hours} hours`;
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}
const student1 = new Student("Mr. X", 25, "Sylhet");
console.log(student1.name, student1.age, student1.address); // Mr. X 25 Sylhet
console.log(student1.makeSleep(8)); // This Mr. X will sleep only for 8 hours


class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClasses(numOfClass: number): string {
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
const teacher1 = new Teacher("Mr. X", 35, "Sylhet", "Lecturer");
console.log(teacher1.name, teacher1.age, teacher1.address, teacher1.designation); // Mr. X 35 Sylhet Lecturer
console.log(teacher1.makeSleep(8)); // This Mr. X will sleep only for 8 hours
console.log(teacher1.takeClasses(4)); // This Mr. X will take 4 class
```

**[🔼Back to Top](#table-of-contents)**

