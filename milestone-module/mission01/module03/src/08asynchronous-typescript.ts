/* 3.8 Asynchronous TypeScript */

/* String Promise */

/* 
    Mocking - doesn't fetch data from server or outside | data created by own
*/

// Mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject("Error Message: Failed to fetched data!");
        }
    })
}

// const result1 = await makePromise(); // can't use await

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    console.log(data);
    return data;
}

// Promise<string> Promise<boolean> Promise<object>

/* --------------------------------------------- */

/* Boolean Promise */

// Mocking
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = false;
        if (data) {
            resolve(data);
        }
        else {
            reject("Error Message: Failed to fetched data!");
        }
    })
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    console.log(data);
    return data;
}

/* --------------------------------------------- */

/* Make Promise using Interface */

// interface
interface DataType {
    data: string;
}

// Mocking
const makePromiseInterface = (): Promise<DataType> => { // make promise using type alias (best practice)
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: 'Data is fetched' };
        if (data) {
            resolve(data);
        }
        else {
            reject("Error Message: Failed to fetched data!");
        }
    })
}

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseInterface();
    console.log(data);
    return data;
}

/* -------------------------------------------------- */

/* JSON Placeholder */

// When the API data is small, we can write an interface for it
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}

getTodoData(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

