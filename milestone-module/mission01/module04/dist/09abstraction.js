"use strict";
/* 4.9 Abstraction */
/*
    - Abstraction: We don't know the real implementation of a method in class but we can infer the shape of it
    - Abstraction is a method of modelling objects in a system that separates the responsibilities of the class or type from the code that inherits it
    - Two way of implement Abstraction: using interface & using abstract class
*/
// interface
// create interface for object | (and class)
// interface IVehicle {
//     name: string;
//     model: string;
// }
// // object
// const vehicle: IVehicle = {
//     name: "Car",
//     model: "2000"
// }
/* ------------------------------------------------------ */
/* abstraction using interface */
// interface IVehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }
// class Vehicle implements IVehicle {
//     // using parameter properties
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number,
//     ){
//     }
//     startEngine(): void {
//         console.log(`I am starting Engine`);
//     }
//     stopEngine(): void {
//         console.log(`I am stopping Engine`);
//     }
//     move(): void {
//         console.log(`I am moving the car`);
//     }
//     test() {
//         console.log(`I am for testing purpose`);
//     }
// }
// const vehicle1 = new Vehicle('Car', 'Toyota', 2000);
// console.log(vehicle1); // Vehicle { name: 'Car', brand: 'Toyota', model: 2000 }
/* ---------------------------------------------------- */
// abstraction using abstract class
class Vehicle {
    // using parameter properties
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log(`I am moving the car`);
    }
}
class Car extends Vehicle {
    // test(): void {
    //     this. // access properties and methods
    // }
    startEngine() {
        console.log(`I am starting Engine`);
    }
    stopEngine() {
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
