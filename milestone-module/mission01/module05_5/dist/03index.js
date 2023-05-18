// import addTwo from './utils/add';
// import subtract from './utils/subtract';
// import multiply from './utils/add';
// import average from './utils/average';
import methods from './utils/index';
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const res1 = methods.addTwo(4, 6); // 10
const res2 = methods.subtract(4, 6); // -2
const res3 = methods.multiply(4, 6); // 24
const res4 = methods.average(4, 6); // 5
console.log(res1, res2, res3, res4); // SyntaxError: Cannot use import statement outside a module
