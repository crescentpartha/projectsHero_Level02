## Table of Contents

- [Module02: Explore Basic Types of Typescript](#module02-explore-basic-types-of-typescript)
  - [Installation typescript, nvm \& ts-node-dev](#installation-typescript-nvm--ts-node-dev)

# Module02: Explore Basic Types of Typescript

## Installation typescript, nvm & ts-node-dev

- Install [Node.js](https://nodejs.org/en/download "Download nodejs")
- [NVM Install Guide - freeCodeCamp](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
- [nvm-windows](https://github.com/coreybutler/nvm-windows/releases "Download .exe file from github (click)")
- [Download TypeScript](https://www.typescriptlang.org/download)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev "It helps to run .ts file in the node environments without converting .js file")

``` JavaStrict
node -v // v16.15.1

We frequently face package related problem. So we need to change node version. We can use different version of Node.js by using NVM (Node Version Manager). So we can install and switch different version of node.js using NVM. NVM used to control versions.

nvm --v // 1.1.11 (in Terminal)

nvm list // 16.15.1 | List all versions of node.js installations

nvm use 19.8.1 // To switch node.js version

npm install typescript --save-dev // To install locally

npm install -g typescript // To install globally

tsc --v // Version 5.0.4 | To check typescript version

tsc means typescript compiler. Its covert the typescript code to javascript code.

tsc ./01index.ts // To convert equivalent javascript code | create 01index.js file

node ./01index.js // To run javascript code

node ./01index.ts // Can't run typescript file (Missing initializer)

tsc --init // To create Typescript configuration file (tsconfig.json)

We use nodemon to start serve again and again, if we change any file. Before that we need to initialize package.json file.

npm init -y // To initialize package.json file

npm i -D nodemon // To install nodemon as a dev dependency

nodemon -v // 2.0.22 | It creates node_modules folder

// Write start script
"scripts": {
    "start": "nodemon 01index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},

npm start // To run the server

tsc ./01index.ts // If we modify typescript file and compile, it's automatically update javascript file. Then nodemon detect this modification immediately. For this reason, we need to open two terminal. We can simplify (use only one terminal) this using ts-node-dev. See console.log in one terminal.

npm i ts-node-dev // It helps to run .ts file in the node environments without converting .js file

// Replace nodemon
"scripts": {
    "start": "ts-node-dev --respawn --transpile-only 01index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},

<!-- About tsconfig.json -->
We con keep structure of our folder like put all .ts file in src
"rootDir": "./src",      /* Specify the root folder within your source files. */
"outDir": "./dist",      /* Specify an output folder for all emitted files. */

tsc // It converts all .ts file as .js file in dist folder | don't need to talk about folder name

.gitignore > node_modules // create .gitignore file and write inside node_modules
```

**[🔼Back to Top](#table-of-contents)**
