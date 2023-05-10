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
  - [4.4 Type Guards / Type Narrowing](#44-type-guards--type-narrowing)
    - [`Resources`](#resources-4)
    - [`Examples`](#examples-2)
      - [`keyof guard`](#keyof-guard)
      - [`In guard`](#in-guard)
      - [`instanceof guard`](#instanceof-guard)
      - [`Check Type using Function with Type Guard`](#check-type-using-function-with-type-guard)
  - [4.5 Access Modifiers: Public, Private, Protected, Readonly](#45-access-modifiers-public-private-protected-readonly)
    - [`Resources`](#resources-5)
    - [`Examples`](#examples-3)
      - [`All Access Modifiers`](#all-access-modifiers)
  - [4.6 Getters and Setters in Typescript](#46-getters-and-setters-in-typescript)
    - [`Resources`](#resources-6)
    - [`Examples`](#examples-4)
      - [`Getter and Setter`](#getter-and-setter)
  - [4.7 Static in Class](#47-static-in-class)
    - [`Resources`](#resources-7)
    - [`Examples`](#examples-5)
      - [`Normal Class and Instance`](#normal-class-and-instance)
      - [`Static in Class 01`](#static-in-class-01)
      - [`Static in Class 02`](#static-in-class-02)
  - [4.8 Polymorphism](#48-polymorphism)
    - [`Resources`](#resources-8)
    - [`Examples`](#examples-6)
      - [`Polymorphism-01`](#polymorphism-01)
      - [`Polymorphism-02`](#polymorphism-02)
  - [4.9 Abstraction](#49-abstraction)
    - [`Resources`](#resources-9)
    - [`Examples`](#examples-7)
      - [`Abstraction Theory`](#abstraction-theory)
      - [`Abstraction using interface`](#abstraction-using-interface)
      - [`Abstraction using abstract class`](#abstraction-using-abstract-class)
      - [`Abstraction using interface with optional properties`](#abstraction-using-interface-with-optional-properties)
  - [4.10 Encapsulation and module summary](#410-encapsulation-and-module-summary)
    - [`Resources`](#resources-10)
    - [`Examples`](#examples-8)
      - [`Encapsulation-01`](#encapsulation-01)
  - [Quiz 4](#quiz-4)
  - [`Module 4.5: Simple TypeScript Practice`](#module-45-simple-typescript-practice)
    - [`Resources`](#resources-11)
    - [`Practice Problems`](#practice-problems)


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

|                        JavaScript                        |                 TypeScript                 |
| :------------------------------------------------------: | :----------------------------------------: |
|                    Dynamically typed                     |                Static typed                |
|                        Functional                        |              Object-Oriented               |
|                       Interpreted                        |                  Compiled                  |
|               Limited Rich Tooling Support               |            Rich Tooling Support            |
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

## 4.4 Type Guards / Type Narrowing

### `Resources`

- [04type-guards-or-type-narrowing.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/04type-guards-or-type-narrowing.ts) | [04type-guards-or-type-narrowing.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/04type-guards-or-type-narrowing.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `keyof guard`

``` Typescript
/* 
    # In TypeScript, the type guards are used to determine a variable's type, often inside a conditional or functional block.
    # Create constraints on type in typescript called Type Guards.
    # Type Guards used in Class and Function
    # Type Guards used in different ways like "keyof guard", "in guard", "instanceof guard"
*/

// keyof guard - works on run-time

type AlphaNumeric = string | number;
function addNum(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
    // keyof guard used
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

console.log(addNum('1', '2')); // 12
console.log(addNum(1, 2)); // 3
```

**[🔼Back to Top](#table-of-contents)**

#### `In guard`

``` Typescript
// In guard (In used for object)

type NormalUserType = {
    name: string;
};

type AdminUserType = {
    name: string;
    role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
    // In guard used
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}

const normalUser1: NormalUserType = { name: "Mr. Kallu" };
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

console.log(getUser(normalUser1)); // I am a normal user
console.log(getUser(adminUser1)); // I am an admin and my role is admin
```

**[🔼Back to Top](#table-of-contents)**

#### `instanceof guard`

``` Typescript
// instanceof guard

class Animal1 {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound');
    }
}

class Dog extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log("I am barking");
    }
}
class Cat extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeaw(){
        console.log("I am Meawing");
    }
}

function getAnimal(animal: Animal1) {
    // instanceof guard used
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}

const animal1 = new Dog('German Bhai', 'dog'); // instance of dog
const animal2 = new Cat('Persian Bhai', 'cat'); // instance of dog

getAnimal(animal1); // I am barking
getAnimal(animal2); // I am Meawing
```

**[🔼Back to Top](#table-of-contents)**

#### `Check Type using Function with Type Guard`

``` Typescript
// Check Type using Function with Type Guard

/* 
    We can check the type using Type Guard instead of Type Alias. 
    Type Alias is a bed practice.
*/

class Animal1 {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound');
    }
}

class Dog extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log("I am barking");
    }
}
class Cat extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeaw() {
        console.log("I am Meawing");
    }
}

// check type using function
function isDog(animal: Animal1): animal is Dog { // is syntax to check type
    return animal instanceof Dog;
}

// check type using function
function isCat(animal: Animal1): animal is Cat { // is syntax to check type
    return animal instanceof Cat;
}

function getAnimal(animal: Animal1) {
    // instanceof guard used
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}

const animal1 = new Dog('German Bhai', 'dog'); // instance of dog
const animal2 = new Cat('Persian Bhai', 'cat'); // instance of dog

getAnimal(animal1); // I am barking
getAnimal(animal2); // I am Meawing
```

**[🔼Back to Top](#table-of-contents)**


## 4.5 Access Modifiers: Public, Private, Protected, Readonly

### `Resources`

- [05access-modifiers.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/05access-modifiers.ts) | [05access-modifiers.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/05access-modifiers.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `All Access Modifiers`

``` Typescript
class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // Convention: use _ for private access modifier
    protected bankName: string;

    constructor(id: number, name: string, balance: number, bankName: string) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankName = bankName;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}tk`);
    }
    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test() {
        // this.bankName // accessible (protected)
        // this._balance // not accessible out of class (private)

        /* 
            # Normally, we should use private and readonly.
            # public don't use, if we don't use parameter properties
            # protected use only for special reason. It creates bug frequently
        */
    }
}

const myAccount1 = new BankAccount(123, 'Persian', 20000, "Pubali Bank");
// myAccount1.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount'.
console.log(myAccount1); // BankAccount { id: 123, name: 'Persian', _balance: 20000, bankName: 'Pubali Bank' }
```

**[🔼Back to Top](#table-of-contents)**

## 4.6 Getters and Setters in Typescript

### `Resources`

- [06getters-and-setters.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/06getters-and-setters.ts) | [06getters-and-setters.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/06getters-and-setters.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Getter and Setter`

``` Typescript
/* 
    Using getter and setter, we can directly get and set value without calling any function.
*/

class BankAccount2 {
    public readonly id: number;
    public name: string;
    private _balance: number; // Convention: use _ for private access modifier
    protected bankName: string;

    constructor(id: number, name: string, balance: number, bankName: string) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankName = bankName;
    }

    // getter
    get balance(): number {
        return this._balance;
    }
    // getBalance(): number {
    //     // console.log(`My current balance is ${this._balance}tk`);
    //     return this._balance;
    // }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount2 extends BankAccount2 {
    test() {
        // this.
    }
}

const myAccount2 = new BankAccount2(123, 'Persian', 20000, "Pubali Bank");
// myAccount2.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount2'.

// myAccount2.addDeposit(20);
// console.log(myAccount2.getBalance());
console.log(myAccount2);

console.log(myAccount2.name); // Persian
// console.log(myAccount2._balance); // If we want to access private property directly, then we need to use getter
console.log(myAccount2.balance); // 20020 (using getter)

myAccount2.deposit = 50;
console.log(myAccount2.balance); // 20050
```

**[🔼Back to Top](#table-of-contents)**

## 4.7 Static in Class

### `Resources`

- [07static-in-class.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/07static-in-class.ts) | [07static-in-class.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/07static-in-class.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Normal Class and Instance`

``` Typescript
/* Normal Class and Instance */

class Counter {
    counter: number;

    // if any class receive parameter, we take help of constructor
    constructor(counter: number) {
        this.counter = counter;
    }

    increment(): number {
        return this.counter = this.counter + 1;
    }
    decrement(): number {
        return this.counter = this.counter - 1;
    }
}

const instance1 = new Counter(0);
const instance2 = new Counter(1);
console.log(instance1.increment()); // 1
console.log(instance2.increment()); // 2

/* Two different instance create different memory and store value accordingly */
```

**[🔼Back to Top](#table-of-contents)**

#### `Static in Class 01`

``` Typescript
/* Static in Class */

class Counter {
    static counter: number = 0;

    /* 
        # when we use static keyword, we can't use constructor and take other arguments
        # static property creates only one memory and store/modify value in the same memory
    */

    increment(): number {
        return Counter.counter = Counter.counter + 1;
    }
    decrement(): number {
        return Counter.counter = Counter.counter - 1;
    }
}

const instance1 = new Counter();
const instance2 = new Counter();
console.log(instance1.increment()); // 0 --> 1
console.log(instance2.increment()); // 1 --> 2
```

**[🔼Back to Top](#table-of-contents)**

#### `Static in Class 02`

``` Typescript
/* Static in Class */

class Counter {
    static counter: number = 0;

    static increment(): number {
        return Counter.counter = Counter.counter + 1;
    }
    static decrement(): number {
        return Counter.counter = Counter.counter - 1;
    }
}

// const instance1 = new Counter();
// const instance2 = new Counter();
// console.log(instance1.increment()); // Property 'increment' does not exist on type 'Counter'
console.log(Counter.increment()); // 0 --> 1 | access the static member 'Counter.increment' instead
console.log(Counter.increment()); // 1 --> 2

/* In Static class, every static properties and methods is accessible by Class name */
```

**[🔼Back to Top](#table-of-contents)**

## 4.8 Polymorphism

### `Resources`

- [08polymorphism.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/08polymorphism.ts) | [08polymorphism.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/08polymorphism.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Polymorphism-01`

``` Typescript
/* Polymorphism */

/* 
    - Poly --> many & morphism --> form
    - Polymorphism is the ability to create a class that has more than one form. 
    - In other words, classes have the same methods but different implementations.
*/

class Person {
    takeNap(): void {
        console.log(`I am sleeping 8 hours per day`);
    }
}

class Student1 extends Person {
    // test() {
    //     this.
    // }
    takeNap(): void {
        console.log(`I am sleeping 10 hours per day`);
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log(`I am sleeping 5 hours per day`);
    }
}

function getNap(param: Person) {
    param.takeNap();
}

const person1 = new Person();
const person2 = new Student1();
const person3 = new Developer();
getNap(person1); // I am sleeping 8 hours per day
getNap(person2); // I am sleeping 10 hours per day
getNap(person3); // I am sleeping 5 hours per day

// method same but give different output (many form --> polymorphism)
```

**[🔼Back to Top](#table-of-contents)**

#### `Polymorphism-02`

``` Typescript
/* Polymorphism */

class Shape {
    getArea(): number {
        return 0;
    }
}

// area --> pi * r * r
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10)); // 314.1592653589793
getAreaOfShape(new Rectangle(10, 12)); // 120
```

**[🔼Back to Top](#table-of-contents)**

## 4.9 Abstraction

### `Resources`

- [09abstraction.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/09abstraction.ts) | [09abstraction.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/09abstraction.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Abstraction Theory`

``` Typescript
/* Abstraction Theory */

/* 
    - Abstraction: We don't know the real implementation of a method in class but we can infer the shape of it
    - Abstraction is a method of modelling objects in a system that separates the responsibilities of the class or type from the code that inherits it
    - Two way of implement Abstraction: using interface & using abstract class
*/

// interface

// create interface for object | (we can also create interface for class)
interface IVehicle {
    name: string;
    model: string;
}

// object
const vehicle: IVehicle = {
    name: "Car",
    model: "2000"
}

// abstract class
```

**[🔼Back to Top](#table-of-contents)**

#### `Abstraction using interface`

``` Typescript
/* abstraction using interface */

interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Vehicle implements IVehicle {
    // using parameter properties
    constructor(
        public name: string,
        public brand: string,
        public model: number,
    ){

    }
    startEngine(): void {
        console.log(`I am starting Engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping Engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
    test() {
        console.log(`I am for testing purpose`);
    }
}

const vehicle1 = new Vehicle('Car', 'Toyota', 2000);
console.log(vehicle1); // Vehicle { name: 'Car', brand: 'Toyota', model: 2000 }
```

**[🔼Back to Top](#table-of-contents)**

#### `Abstraction using abstract class`

``` Typescript
// abstraction using abstract class

abstract class Vehicle {
    // using parameter properties
    constructor(
        public name: string,
        public brand: string,
        public model: number,
    ) { }
    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void {
        console.log(`I am moving the car`);
    }
}

class Car extends Vehicle {
    // test(): void {
    //     this. // access properties and methods
    // }

    startEngine(): void {
        console.log(`I am starting Engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping Engine`);
    }
}

// const car1 = new Vehicle('Car', 'Honda', 2015); // Cannot create an instance of an abstract class
// car1. // access properties and methods

/* 
    Summary of Abstraction:

    - Abstraction: We don't know the real implementation of a method in class but we can infer the shape of it
    - Two way of Abstraction: using interface & using abstract class
    - Create child class by following abstract class
    - Can't create instance of abstract class 
    - Can extends abstract class
*/
```

**[🔼Back to Top](#table-of-contents)**

#### `Abstraction using interface with optional properties`

``` Typescript
/* abstraction using interface with optional properties */

interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void; // optional property
}

class Car implements Vehicle {
    // using parameter properties
    constructor(
        public name: string,
        public brand: string,
        public model: number,
    ){

    }
    startEngine(): void {
        console.log(`I am starting Engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping Engine`);
    }
    // move(): void {
    //     console.log(`I am moving the car`);
    // }
    test() {
        console.log(`I am for testing purpose`);
    }
}

const vehicle1 = new Car('Car', 'Toyota', 2000);
console.log(vehicle1); // Car { name: 'Car', brand: 'Toyota', model: 2000 }

/* 
    - we can use interface like as abstract class using optional type/property
*/
```

**[🔼Back to Top](#table-of-contents)**

## 4.10 Encapsulation and module summary

### `Resources`

- [10encapsulation.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/10encapsulation.ts) | [10encapsulation.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/10encapsulation.js)

**[🔼Back to Top](#table-of-contents)**

### `Examples`

#### `Encapsulation-01`

``` Typescript
/* Encapsulation and module summary */

/* 
    - Encapsulation in object-oriented programming refers to restricting unauthorized access and mutation of specific properties of an object.
    - Access modifiers are used to achieve encapsulation. By default, all class properties in a class are public.
    - We can Encapsulate using private, protected, readonly (access modifier)
    - We can Encapsulate using setter and getter methods
*/

class BankAccount3 {
    public readonly id: number;
    public name: string;
    private _balance: number; // Convention: use _ for private access modifier
    protected bankName: string;

    constructor(id: number, name: string, balance: number, bankName: string) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.bankName = bankName;
    }

    // access method using setter and getter
    private getTestBalance(): number {
        return this._balance;
    }
    // getter 
    get Test(): number {
        return this.getTestBalance();
    }

    // access properties using setter and getter
    // getter
    get balance(): number {
        return this._balance;
    }
    // getBalance(): number {
    //     // console.log(`My current balance is ${this._balance}tk`);
    //     return this._balance;
    // }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount3 extends BankAccount3 {
    test() {
        // this. 
    }
}

const myAccount3 = new BankAccount3(123, 'Persian', 20000, "Pubali Bank");
// myAccount3.balance = 0; // Property 'balance' is private and only accessible within class 'BankAccount3'.

// myAccount3.addDeposit(20);
// console.log(myAccount3.getBalance());
console.log(myAccount3); // BankAccount3 { id: 123, name: 'Persian', _balance: 20000, bankName: 'Pubali Bank' }

console.log(myAccount3.name); // Persian
// console.log(myAccount3._balance); // If we want to access private property directly, then we need to use setter and getter
console.log(myAccount3.balance); // 20000 (using getter)

myAccount3.deposit = 50;
console.log(myAccount3.balance); // 20050
```

**[🔼Back to Top](#table-of-contents)**

## Quiz 4

01. __Which keyword is used in TypeScript to define a class that inherits from another class?__

    - [ ] implements
    - [x] __extends__
    - [ ] inherits
    - [ ] derives

2.  __Fill in the blank with the appropriate statement.__

    - [ ] this.num = num
    - [ ] super = num
    - [x] __super(num)__
    - [ ] super(this.num)

``` Typescript
class A {
  num: number;
  constructor(num: number) {
    this.num = num;
  }
}

class B extends A {
  constructor(num: number){
    _______?______ ;
  }
}
```

3.  __Which type guard operator can be used to check if a property exists on an object?__

    - [ ] keyof
    - [x] __in__
    - [ ] instanceof
    - [ ] All of above

4.  __What is the default access modifier for a class member in TypeScript?__

    - [x] __public__
    - [ ] private
    - [ ] protected
    - [ ] It is based on the enclosing scope of the member

5.  __What is the syntax for declaring a getter method in TypeScript?__

    - [x] __get methodName(): returnType { /* implementation */ }__
    - [ ] methodName(): returnType { /* implementation */ }
    - [ ] set methodName(): returnType { /* implementation */ }
    - [ ] none

6.  __Which access modifier allows a class member to be accessed from within the class only?__

    - [ ] public
    - [x] __private__
    - [ ] protected
    - [ ] all of above

7.  __What is the syntax for declaring a class in TypeScript?__

    - [ ] class ClassName() { /* implementation */ }
    - [ ] ClassName() { /* implementation */ }
    - [ ] function ClassName() { /* implementation */ }
    - [x] __class ClassName { /* implementation */ }__

8.  __What is the syntax for creating an instance of a class in TypeScript?__

    - [ ] ClassName()
    - [x] __new ClassName()__
    - [ ] create ClassName()
    - [ ] constructor(){}

9.  __What is the purpose of using inheritance in OOP?__

    - [ ] To create multiple instances of class.
    - [x] __To reduce the amount of code needed to create similar classes.__
    - [ ] To encapsulate data and behavior within a single entity.
    - [ ] To find a sequence of instructions for a program.

10.  __What is the purpose of using inheritance in OOP?__
    
     - [ ] The ability of a class to have multiple constructors.
     - [ ] The ability of a class to implement multiple interfaces.
     - [x] __The ability of a class to take on multiple forms or behaviors__
     - [ ] The ability to create multiple instances of a class.

**[🔼Back to Top](#table-of-contents)**

## `Module 4.5: Simple TypeScript Practice`

### `Resources`

- [11module4.5-simple-typescript-practice.ts](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/src/11module4.5-simple-typescript-practice.ts) | [11module4.5-simple-typescript-practice.js](https://github.com/crescentpartha/projectsHero_Level02/blob/main/milestone-module/mission01/module04/dist/11module4.5-simple-typescript-practice.js)

**[🔼Back to Top](#table-of-contents)**

### `Practice Problems`

1.  Convert the following JavaScript array into a TypeScript tuple

``` JavaScript
const userInfo = [101, "Ema", "John", true,  , "2023"];
```

``` Typescript
/* JavaScript array to TypeScript tuple */

// tuple
const userInfo: [number, string, string, boolean, undefined | null, string] = [101, "Ema", "John", true, , "2023"];

console.log(userInfo); // [ 101, 'Ema', 'John', true, <1 empty item>, '2023' ]
```

**[🔼Back to Top](#table-of-contents)**

2.  Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays. 

    > For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays. 

    > The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.

``` Typescript
/* Compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays */

let arr3: number[] = [];

// normal function
function parallelValue(arr1: number[], arr2: number[]): number[] {
    arr1.forEach(element1 => {
        // console.log("arr1", element1);
        arr2.forEach(element2 => {
            // console.log(element2);
            // if (element1 === element2) console.log(element1, element2);
            if (element1 === element2) arr3?.push(element1);
        })
    })
    return arr3;
}

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [2, 4, 6, 8];

console.log(parallelValue(arr1, arr2)); // [ 2, 4 ]
```

**[🔼Back to Top](#table-of-contents)**

3.  You have an interface for `Product`, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value. 

    > Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

``` Typescript
/* Filter an array of Products based on a specific criterion and value */

// interface type
interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
};

// arrow function
const ProductFilter = (param1: Array<IProduct>, param2: string): Array<IProduct> => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
}

// generic type parameter in the function signature | arrow function
const ProductFilter2 = <X>(param1: Array<IProduct>, param2: X) => {
    const productFilter = param1.filter(element => element.name === param2);
    // console.log(productFilter);
    return productFilter;
}

// array of object
let product = [
    { id: 1, name: 'Samsung A20', price: 2000, category: 'Samsung' },
    { id: 2, name: 'Samsung M20', price: 3000, category: 'Samsung' },
    { id: 3, name: 'Iphone', price: 2000, category: 'Apple' },
    { id: 4, name: 'Oppo Pro', price: 5000, category: 'Oppo' },
    { id: 5, name: 'Nokia 1032', price: 1000, category: 'Nokia' },
    { id: 6, name: 'Google Smart', price: 8000, category: 'Google' },
];

const result: Array<IProduct> = ProductFilter(product, 'Iphone');
console.log(result); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]

const result2 = ProductFilter2(product, 'Iphone');
console.log(result2); // [ { id: 3, name: 'Iphone', price: 2000, category: 'Apple' } ]
```

**[🔼Back to Top](#table-of-contents)**

4.  Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

``` Typescript
/* Calculates the total cost of all the products in the array */

// type alias
type product2Type = {
    name: string;
    price: number;
    quantity: number;
}

// generic constraint in normal function
function CalculateTotalCostOfProducts <T extends product2Type[]> ( products: T): number {
    let total = 0;
    products.forEach(product => {
        total += product.price * product.quantity;
        // console.log(product.price, "*", product.quantity,"=", product.price * product.quantity, "-->", total);
    });
    return total;
}

// array of object
let product2: product2Type[] = [
    { name: 'Samsung A20', price: 2000, quantity: 5 },
    { name: 'Samsung M20', price: 3000, quantity: 10 },
    { name: 'Iphone', price: 2000, quantity: 15 },
    { name: 'Oppo Pro', price: 5000, quantity: 20 },
    { name: 'Nokia 1032', price: 1000, quantity: 25 },
    { name: 'Google Smart', price: 8000, quantity: 30 },
];

const result3 = CalculateTotalCostOfProducts(product2);
console.log(result3); // 435000
```

**[🔼Back to Top](#table-of-contents)**

5.  Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

``` Typescript
/* Sum of all the even numbers from the given array */

// arrow function 
const sumOfEvenNumbers = (numbers: number[]): number => {
    let total = 0;
    numbers.forEach(number => {
        if (number % 2 == 0) total += number;
        // console.log(number, total);
    })
    return total;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -5, 2];

const result4: number = sumOfEvenNumbers(numbers);
console.log(result4); // 20
```

**[🔼Back to Top](#table-of-contents)**

6.  Create an interface called `Person` that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

``` Typescript
/* Returns the Person object that matches the email OR Returns null if no match is found */

// interface type
interface IPerson {
    name: string;
    age: number;
    email: string;
};

// arrow function
const emailMatcher = (object: IPerson[], email: string): IPerson[] | null => {
    // console.log(object, email);
    const objectFilter = object.filter(user => user.email === email);
    return objectFilter.length === 0 ? null : objectFilter;
}

// array of object
const Person2: IPerson[] = [
    { name: 'Crescent', age: 25, email: 'abc.crescent@gmail.com' },
    { name: 'Partha', age: 25, email: 'abc.partha@gmail.com' },
    { name: 'Parsian', age: 33, email: 'abc.parsian@gmail.com' },
    { name: 'Rechel', age: 24, email: 'abc.rechel@gmail.com' }
];

// invoke function
const result5 = emailMatcher(Person2, 'abc.@gmail.com');
const result6 = emailMatcher(Person2, 'abc.partha@gmail.com');

// output
console.log(result5); // null
console.log(result6); // [ { name: 'Partha', age: 25, email: 'abc.partha@gmail.com' } ]
```

**[🔼Back to Top](#table-of-contents)**

7.  Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

``` Typescript
/* Finds the minimum and maximum values of the array */

// arrow function
const minMax = (...numbers: number[]): number[] => {
    console.log(numbers);
    let min: number = Math.min(...numbers);
    let max: number = Math.max(...numbers);

    return [min, max];
}

// array of numbers
const numbers2: number[] = [8, 3, 5, 1, 2, -10, 4, 6, 7, 8, 9];

// invoke function
const result7: number[] = minMax(...numbers2);

// array destructuring
const [min, max] = result7;

// output
console.log(min, max); // -10 9
```

**[🔼Back to Top](#table-of-contents)**

8.  Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

``` Typescript
/* Returns conditional uppercase or lowercase */

// type alias
type colorType = "red" | "green" | "blue"; // literal type
type booleanType = boolean | null; 

// arrow function with optional parameter
const upperAndLowerCase = (color: colorType, bool?: booleanType): string => {
    if (bool) return color.toUpperCase();
    else return color.toLowerCase();
}

// invoke function and output
console.log(upperAndLowerCase("red", true)); // RED
console.log(upperAndLowerCase("green" )); // green
console.log(upperAndLowerCase("green", true )); // GREEN
console.log(upperAndLowerCase("blue", false)); // blue
```

**[🔼Back to Top](#table-of-contents)**


