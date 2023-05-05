"use strict";
/* 3.8 Asynchronous TypeScript */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* String Promise */
/*
    Mocking - doesn't fetch data from server or outside | data created by own
*/
// Mocking
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject("Error Message: Failed to fetched data!");
        }
    });
};
// const result1 = await makePromise(); // can't use await
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    console.log(data);
    return data;
});
// Promise<string> Promise<boolean> Promise<object>
/* --------------------------------------------- */
/* Boolean Promise */
// Mocking
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = false;
        if (data) {
            resolve(data);
        }
        else {
            reject("Error Message: Failed to fetched data!");
        }
    });
};
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    console.log(data);
    return data;
});
// Mocking
const makePromiseInterface = () => {
    return new Promise((resolve, reject) => {
        const data = { data: 'Data is fetched' };
        if (data) {
            resolve(data);
        }
        else {
            reject("Error Message: Failed to fetched data!");
        }
    });
};
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseInterface();
    console.log(data);
    return data;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
getTodoData(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
