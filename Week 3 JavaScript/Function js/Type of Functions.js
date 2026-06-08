// 1. Named Function

function greet() {
  return "Hello!";
}
console.log(greet());

// 2. Anonymous Function

const greet = function() {
  return "Hi there!";
};
console.log(greet());

// 3. Function Expression

const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));

// 4. Arrow Function (ES6)

const square = n => n * n;
console.log(square(4));

// 5. Immediately Invoked Function Expression (IIFE)

(function () {
    console.log("This runs immediately!");
})();

// 6. Callback Functions

function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));

// 7. Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Neha", 22);
console.log(user.name);

// 8. Async Function

async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);

// 9. Generator Function

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value);

// 10. Recursive Function

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 11. Higher-Order Function

function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const Double = multiplyBy(2);
console.log(Double(5));

// 12. Nested Functions

function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));

// 13. Pure Functions

function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));

// 14. Default Parameter Function

function greet(name = "Guest") {
  return "Hello, " + name;
}
console.log(greet());
console.log(greet("Aman"));

// 15. Rest Parameter Function

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

