// 1. Creation Using Object Literal
// The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.
let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);

// 2. Creation Using new Object() Constructor
let Obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"

console.log(Obj);

// Basic Operations on JavaScript Objects

// 1. Accessing Object Properties
let a = { name: "Sourav", age: 23 };

// Using Dot Notation
console.log(a.name);

// Using Bracket Notation
console.log(a["age"]);

// 2. Modifying Object Properties
let A = { name: "Sourav", age: 22 };
console.log(A);

A.age = 23;
console.log(A);

// 3. Adding Properties to an Object
let B = { model: "Tesla" };
B.color = "Red";

console.log(B);

// 4. Removing Properties from an Object
let b = { model: "Tesla", color: "Red" };
delete b.color;

console.log(b);

// 5. Checking if a Property Exists
let e = { model: "Tesla" };
console.log("color" in e);
console.log(e.hasOwnProperty("model"));

// 6. Iterating Through Object Properties
let E = { name: "Sourav", age: 23 };
for (let key in E) {
    console.log(key + ": " + E[key]);
}

// 7. Merging Objects
let obj1 = { name: "Sourav" };
let obj2 = { age: 23};

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// 8. Object Length
let f = { name: "Sourav", age: 23 };
console.log(Object.keys(f).length);


//Recognizing a JavaScript Object
let OBJ = { name: "Sourav" };
console.log(typeof OBG === "object" && OBG !== null);


/* Common Mistakes with JavaScript Objects */
// Object literal
const Obj1 = { key: "value" };

// Object constructor
const Obj2 = new Object();
Obj2.key = "value";

console.log(Obj1);
console.log(Obj2);