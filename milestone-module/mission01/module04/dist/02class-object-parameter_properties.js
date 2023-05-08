"use strict";
/* 4.2 How to Create Class, Object, Parameter Properties */
// declare class
// class Animal {
//     name: string;
//     species: string;
//     sound: string;
//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
//     // methods - function inside the class called methods
//     /* We will use the normal function inside the class because this property doesn't work in the arrow function.  */
//     // declare method
//     makeSound() {
//         console.log(`The ${this.name} says ${this.sound}`);
//     }
// }
// // create instance (object) | create object from class
// const dog = new Animal("German Shepherd", "dog", "Ghew Ghew");
// const cat = new Animal("Persian", "cat", "meaw meaw");
// // dog. // intelligent support
// dog.makeSound(); // The German Shepherd says Ghew Ghew
// cat.makeSound(); // The Persian says meaw meaw
/* --------------------------------------------------- */
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
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    // declare method
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
// create instance (object) | create object from class
const cat = new Animal("Persian", "cat", "meaw meaw");
// dog. // intelligent support
cat.makeSound(); // The Persian says meaw meaw
cat.name = "Special Cat"; // by-default every properties will be public. So, we can access it.
cat.makeSound(); // The Special Cat says meaw meaw
