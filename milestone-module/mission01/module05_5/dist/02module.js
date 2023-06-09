/* 5.5.1: What is module, different formats of module technique, import and export */
/*
    Cannot redeclare block-scoped variable 'add'
    - Solution: modularization

    When we export a function, it create own scope. So, it didn't show (error for) naming conflict of global scope.
    But we need to use Alias for two same variable or function and gave a different name to avoid naming conflict on same file.
    If any file don't contain same named variable or function, then we don't need to use Alias. We can use it as usual.
*/
const add = (param1, param2) => {
    return param1 + param2;
};
const subtract = (param1, param2) => {
    return param1 - param2;
};
const multiply = (param1, param2) => {
    return param1 * param2;
};
const average = (param1, param2) => {
    return (param1 + param2) / 2;
};
export default {
    add,
    subtract,
    multiply,
    average,
};
