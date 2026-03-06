// Logic => n!=n×(n−1)×(n−2)×⋯×1

// 1. Using Iteration
function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(fact(5));

// 2. Using Recursion
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}
console.log(fact(5));

// 3. Using a While Loop
function fact(n) {
    let res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }
    return res;
}
console.log(fact(5));

// 4. Using Memoization
const fact = (function () {
    const cache = {};
    return function facto(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        if (cache[n]) {
            console.log("value from caeche")
            return cache[n];
        }
        cache[n] = n * facto(n - 1);
        return cache[n];
    };
})();
console.log(fact(5))

// 5. Using Functional Programming

const fact = (n) =>
    n === 0 || n === 1
        ? 1
        : Array.from({ length: n }, (_, i) => i + 1).reduce(
            (acc, num) => acc * num,
            1
        );
console.log(fact(5));
