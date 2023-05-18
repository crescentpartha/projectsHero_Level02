/* 5.5.1: What is module, different formats of module technique, import and export */
import { add as addToo, subtract } from './02module';
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const res = addToo(4, 6);
console.log(res); // 10
const res2 = subtract(4, 6);
console.log(res2); // -2
