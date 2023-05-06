"use strict";
/* 4.1 Introduction To Object Oriented Programming */
const add = (a, b) => {
    return a + b;
};
const sum1 = add(2, 3);
console.log(sum1); // 5
// Object-Oriented Programming
class Calculator {
    add(a, b) {
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
