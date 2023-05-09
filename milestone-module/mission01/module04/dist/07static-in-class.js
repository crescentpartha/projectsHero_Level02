"use strict";
/* 4.7 Static in Class */
// /* Normal Class and Instance */
// class Counter {
//     counter: number;
//     // if any class receive parameter, we take help of constructor
//     constructor(counter: number) {
//         this.counter = counter;
//     }
//     increment(): number {
//         return this.counter = this.counter + 1;
//     }
//     decrement(): number {
//         return this.counter = this.counter - 1;
//     }
// }
// const instance1 = new Counter(0);
// const instance2 = new Counter(1);
// console.log(instance1.increment()); // 1
// console.log(instance2.increment()); // 2
/* Two different instance create different memory and store value accordingly */
/* ------------------------------------------------------- */
/* Static in Class */
// class Counter {
//     static counter: number = 0;
//     /* 
//         # when we use static keyword, we can't use constructor and take other arguments
//         # static property creates only one memory and store/modify value in the same memory
//     */
//     increment(): number {
//         return Counter.counter = Counter.counter + 1;
//     }
//     decrement(): number {
//         return Counter.counter = Counter.counter - 1;
//     }
// }
// const instance1 = new Counter();
// const instance2 = new Counter();
// console.log(instance1.increment()); // 0 --> 1
// console.log(instance2.increment()); // 1 --> 2
/* ------------------------------------------------------- */
/* Static in Class */
class Counter {
    static increment() {
        return Counter.counter = Counter.counter + 1;
    }
    static decrement() {
        return Counter.counter = Counter.counter - 1;
    }
}
Counter.counter = 0;
// const instance1 = new Counter();
// const instance2 = new Counter();
// console.log(instance1.increment()); // Property 'increment' does not exist on type 'Counter'
console.log(Counter.increment()); // 0 --> 1 | access the static member 'Counter.increment' instead
console.log(Counter.increment()); // 1 --> 2
/* In Static class, every static properties and methods is accessible by Class name */
