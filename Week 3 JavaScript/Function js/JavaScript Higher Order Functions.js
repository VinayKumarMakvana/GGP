function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);

// Popular Higher Order Functions in JavaScript

// 1. map
const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);

// 2. filter
const N = [1, 2, 3, 4, 5];
const even = N.filter((num) => num % 2 === 0);
console.log(even);

// 3. reduce
const a = [1, 2, 3, 4, 5];
const sum = a.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 4. forEach
const b = [1, 2, 3];
b.forEach((num) => console.log(num * 2));

// 5. find
const A = [1, 2, 3, 4, 5];
const fEven = A.find((num) => num % 2 === 0);
console.log(fEven);

// 6. some
const B = [1, 2, 3, 4, 5];
const hasNeg = B.some((num) => num < 0);
console.log(hasNeg);

// 7. every
const C = [1, 2, 3, 4, 5];
const allPos = C.every((num) => num > 0);
console.log(allPos)


// Advanced Techniques with Higher Order Functions

// 1. Function Composition
function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 3;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
  };
}
var res = compose(add, mul)(4);
console.log(res);

// 2. Currying
function mul(x) {
    return function(y) {
        return x * y;
  };
}
var mulFn = mul(2);
console.log(mulFn(5));

// 3. Memoization
function memoize(func) {
    var cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            var res = func(arg);
            cache[arg] = res;
            return res;
        }
    };
}
function slow(num) {
    console.log("Computing...");
    return num * 2;
}

var fast = memoize(slow);
console.log(fast(5)); // Computing... 10
console.log(fast(5)); // 10 (cached)

// Use case's of higher order functions

// 1. Passing Functions as Arguments
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Ajay", sayGoodbye);

// 2. Returning Functions from Functions
function mul(factor) {
    return function(num) {
        return num * factor;
    };
}

const mul2 = mul(2);
console.log(mul2(5));
const mul3 = mul(3);
console.log(mul3(5));

// 3. Array Method map() as a Higher-Order Function
// JavaScript array methods such as map(), filter(), and reduce() are excellent examples of higher-order functions. These methods take callback functions as arguments and provide powerful ways to manipulate arrays.
const d = [1, 2, 3, 4, 5];
const double = d.map(function(n) {
    return n * 2;
});

console.log(double);

// 4. Array Method filter() as a Higher-Order Function
const e = [1, 2, 3, 4, 5];
const Even = e.filter(function(n) {
    return n % 2 === 0;
});

console.log(Even);

// 5. Array Method reduce() as a Higher-Order Function
const g = [1, 2, 3, 4, 5];
const Sum = g.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(Sum);

