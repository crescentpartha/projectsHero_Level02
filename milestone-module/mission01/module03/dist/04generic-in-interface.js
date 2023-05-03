"use strict";
/* 3.4 Generic in Interface */
// use interface for object
const crush1 = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};
// use interface for object | Good Practice
const crush2 = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};
const crush3 = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 50,
    },
    wife: {
        name: "Winslet",
        age: 40,
    }
};
/*
    Summary: Code will be Organized and Clean

    - We can use Generic Type, Generic Interface
    - Declare multiple generic type inside the Interface like <T, U> = <husband, wife>
    - For type, we can use Default type or parameter
*/
