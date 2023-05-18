/* 5.5.1: What is module, different formats of module technique, import and export */

// import { add as addToo, subtract, multiply } from './02module'; // Common way
// import * as Methods from './02module'; // WildCard Import
// import average, { add as addToo, subtract } from "./02module"; // export default
import Jekonu from './02module';

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

// const res = addToo(4, 6);
// const res = Methods.add(4, 6);
const res = Jekonu.add(4, 6);
console.log(res); // 10

// const res2 = subtract(4, 6);
// const res2 = Methods.subtract(4, 6);
const res2 = Jekonu.subtract(4, 6);
console.log(res2); // -2

// const res3 = average(4, 6);
const res3 = Jekonu.average(4, 6);
