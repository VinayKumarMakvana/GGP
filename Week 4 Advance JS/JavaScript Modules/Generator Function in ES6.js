// A Generator Function is a special type of function that can pause its execution and later resume from where it left off. Instead of returning a single value, it returns an iterator object which can yield multiple values over time using the yield keyword.

function* generator() {
    yield 'First value';
    yield 'Second value';
    return 'Done';
}
const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// Infinite Sequence Generator
// This code demonstrates an infinite generator function that continuously yields increasing values. It keeps generating numbers, starting from 0, each time .next() is called.
function* infinite() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
const Gen = infinite();
console.log(Gen.next().value);
console.log(Gen.next().value);
console.log(Gen.next().value);
console.log(Gen.next().value);
console.log(Gen.next().value);


// Delegating Generators
// This code shows how to use yield* to delegate to another generator function. The main generator yields values from the sub generator before continuing with its own yield.
function* sub() {
    yield 'Sub value 1';
    yield 'Sub value 2';
}
function* main() {
    yield* sub();
    yield 'Main value';
}
const a = main();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);


// Generators with Asynchronous Operations
// This code demonstrates how to use a generator function that yields a promise, simulating asynchronous behavior. The promise resolves after a delay, and the result is logged using .then().
function* asyncG() {
    yield new Promise((resolve) => 
        setTimeout(() => resolve('Async value'), 1000));
}
  
const A = asyncG();
A.next().value.then(console.log);


// Stateful Iteration with Generators
// This code demonstrates a generator function counter that starts from a given value and increments by the values passed into it. It uses the yield keyword to pause and resume its execution, allowing dynamic changes to the counter.
function* counter(start = 0) {
    let count = start;
    while (true) {
        count += yield count;
    }
}
const b = counter();
console.log(b.next().value);
console.log(b.next(2).value);
console.log(b.next(3).value);


// Iterating Over a Collection
// This code uses a generator function to iterate over an object's key-value pairs. It allows you to process each property of an object one at a time using a for...of loop.
function* objectE(obj) {
    for (const [key, value] of Object.entries(obj)) {
        yield [key, value];
    }
}

const GEN = objectE({ a: 1, b: 2, c: 3 });
for (const [key, value] of GEN) {
    console.log(`\${key}: \${value}`);
}
