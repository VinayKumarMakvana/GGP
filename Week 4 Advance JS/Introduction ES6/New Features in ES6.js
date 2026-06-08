// 1. The let Keyword
let n = 10;
{
    let n = 2; // Block-scoped variable
    console.log(n);
}
console.log(n);


// 2. The const Keyword
const PI = 3.14159;
PI = 3; // Error: Assignment to constant variable


// 3. Arrow Functions
// Traditional function
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;


// 4. Destructuring Assignment
const obj = {
    name : "Raj",
    age : 25
};
const {name, age} = obj;
console.log(name, age);


// 5. The Spread (...) Operator
const n1 = [ 1, 2, 3 ];
const n2 = [...n1, 4, 5 ];
console.log(n2);


// 6. The For/Of Loop
const a = [ "apple", "banana", "cherry" ];
for (const fruit of a) {
    console.log(fruit);
}


// 7. Maps and Sets
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a"));


// 8. Classes 
class Animal {
    speak() { console.log("The animal makes a sound"); }
}

const dog = new Animal();
dog.speak();


// 9. Promises
const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
};

fetch().then(data => console.log(data));


// 10. Default Parameters
function greet(name = "Guest") { return `Hello, \${name}!`; }
console.log(greet());