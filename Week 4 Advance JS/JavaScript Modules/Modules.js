// 1. CommonJS Modules
// In JavaScript, CommonJS is a module system primarily used in NodeJS environments. It enables developers to break down their code into reusable modules by using module.exports to export functions, objects, or variables from a module. Other modules can then access these exports using the require() function.


// Use cases of CommonJS module

// 1. Creating a Utility Module
// A Utility Module is a collection of reusable helper functions that make coding easier by handling common tasks like formatting, validation, and logging.
//one.js
function greet(name) {
    return `Hello, \${name}!`;
}
module.exports = greet;

// two.js
const greet = require('./one.js');
console.log(greet('Sandeep'));


// 2. Building a Configuration File
//one.js
module.exports = {
    port: 3000,
    dbURL: 'mongodb://localhost:27017/mydb'
};

//two.js
const config = require('./one.js');
console.log(config.port);


// 3. Handling Routes in an ExpressJS App
// one.js
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.send('Home Page'));
module.exports = router;

// two.js
const express = require('express');
const app = express();
const routes = require('./one.js');
app.use('/', routes);
app.listen(3000, () => console.log('Server running on port 3000'));



// ---- Use cases of ES6 modules----

// 1. Default Export and Import
//greet.js
export default function greet(name) {
  return `Hello, \${name}!`;
}
// file: main.js
import greet from './greet.js';
console.log(greet('GFG'));


// 2. Named Exports with Aliases
//Operations.js
export function multiply(a, b) {
    return a * b;
  }
export function divide(a, b) {
    return a / b;
  }

import { multiply as mul, divide as div } from './Operations.js';
console.log(mul(6, 3));
console.log(div(10, 2));

// 3. Dynamic Imports
//codes2.js
(async () => {
    const module = await import('./codes1.js');
    console.log(module.greet('GFG'));
  })();

//codes1.js
export const greet = (name) => `Hi, \${name}!`;

// 4. Combining Default and Named Exports
//person.js
export default class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hello, I am \${this.name}`;
    }
}

export const Greet = (name) => `Hi, \${name}!`;

import Person, { Greet } from './person.js';
  const aman = new Person('Aman');
  console.log(aman.sayHello());
  console.log(greet('Rohan'));