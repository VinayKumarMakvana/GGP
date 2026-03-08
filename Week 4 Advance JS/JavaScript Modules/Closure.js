// Closure in JavaScript
// A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.

function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
closure();



// ----- Lexical Scoping -----
// Closures are rely on lexical scoping, which means a function’s scope is determined by where it is defined, not where it is executed, allowing inner functions to access variables from their outer function.


// ------ Private Variables ------
// Closures allow a function to keep variables private and accessible only within that function, which is commonly used in modules to protect data from being accessed or modified by other parts of the program.

function counter() {
    
    // Private variable
    let count = 0; 
    
    return function () {
        
        // Access and modify the private variable
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());


// ----- Closures and IIFE -----
// IIFEs (Immediately Invoked Function Expressions) use closures to encapsulate data within a function, keeping it private and preventing access from the outside, which helps create self-contained modules.

const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
})();

counter.increment(); 
counter.increment(); 
counter.reset();


// Closure and setTimeout
// Closures are helpful in asynchronous programming because they preserve access to variables even after a function has finished executing, which is essential for delayed operations like timers or server requests.

function createTimers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Timer \${i}`);
        }, i * 1000);
    }
}
createTimers();


// Closures with this keyword
// Closures can be confusing with the this keyword because this is determined by how a function is called, not where it is defined, so inside a closure it may not refer to the expected object.
function Person(name) {
    this.name = name;
    
    this.sayName = function () {
        console.log(this.name);
    };

    setTimeout(function () {
        console.log(this.name); 
        // Undefined because 'this' refers to global object
    }.bind(this), 1000); 
    // Fix with bind
}

const G = new Person("GFG");
G.sayName();


// Function Currying in JavaScript (Closure Example)
// Function currying is a technique that transforms a function with multiple arguments into a sequence of functions that each take one argument at a time, using closures to remember previously passed values.

// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addTwo = add(2);  // First function call with 2
console.log(addTwo(3));  
console.log(addTwo(4));