// JavaScript introduced the Rest Parameter and Spread Operator in ES6 to make handling functions and arrays more flexible and concise. These operators use the same syntax (...), but they serve different purposes. The rest parameter collects multiple values into an array, while the spread operator spreads elements from an array or object.

// Rest parameter
// The Rest Parameter allows functions to accept an indefinite number of arguments as an array. It collects multiple arguments into a single array parameter.
// Rest Parameter
function myFunc(...args) {
    console.log(args);
}
myFunc(1, 2, 3, 4, 5);

// Using Rest Parameter in Functions
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4,5))


// Use cases of rest parameter

// 1. Collecting Function Arguments
function greet(greeting, ...names) {
    return `\${greeting}, \${names.join(' and ')}`;
}
console.log(greet("Pranjal", "Tanamaya", "Sonam"));

// 2. Filtering Properties in Objects
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a)
console.log(rest)

// 3. Destructuring with Rest
const [first, ...Rest] = [1, 2, 3, 4];
console.log(first)
console.log(Rest)

// 4. Function Default Parameters
function mul(factor, ...nums) {
    return nums.map(num => num * factor);
}
console.log(mul(2,1,2,3,4,5,20))


// Spread operator

const n = [1, 2, 3];
const ne = [...n, 4, 5];  
console.log(ne);

// Expanding Arrays
const a1 = [1, 2, 3];
const a2 = [...a1, 4, 5];
console.log(a2)


// Use cases of spread operator
// 1. Merging Arrays
const A1 = [1, 2];
const A2 = [3, 4];
const merged = [...A1, ...A2];
console.log(merged)

// 2. Cloning Arrays
const original = [10, 20, 30];
const clone = [...original];
console.log(clone)

// 3. Combining Objects
const Obj1 = { a: 1, b: 2 };
const Obj2 = { b: 3, c: 4 };
const combined = { ...Obj1, ...Obj2 };
console.log(combined)
