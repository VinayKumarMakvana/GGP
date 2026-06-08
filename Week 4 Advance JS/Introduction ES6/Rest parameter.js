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
console.log(mul(2,1,2,3,4,5))

