// ----- JavaScript Debuggers -----

// Common Debugging Issues and Fixes

// 1. Debugging Syntax Errors
// console.log("Hello);
console.log("Hello");

// 2. Using console.log() to Track Values
// let x = 5;
console.log("X value:", x);

// 3. Debugging with Breakpoints in DevTools
function add(a, b) {
    return a + b;
}
let res = add(5, 10);
console.log(res);

// 4. Identifying undefined Variables
function greet(name) {
    console.log("Hello, " + name);
}
greet(); // Undefined issue

// 5. Catching Errors with try...catch
try {
    let data = JSON.parse("{invalid}");
} catch (error) {
    console.error("Parsing error:", error.message);
}

// 6. Debugging Asynchronous Code with Promises
fetch("invalid-url").catch(error => console.error("Request failed", error));

// 7. Debugging Event Listeners
document.getElementById("btn").addEventListener("click", function() {
    console.log("Button clicked");
});

// 8. Memory Leak Detection
let a = [];
setInterval(() => a.push("data"), 1000); // Potential memory leak