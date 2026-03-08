// 1. Create Array using Literal
// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

// 2. Create using new Keyword (Constructor)
// Creating and Initializing an array with values
let A = new Array(10, 20, 30);

console.log(A);


// Basic Operations on JavaScript Arrays


// 1. Accessing Elements of an Array
// Creating an Array and Initializing with Values
let B = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(B[0]);
console.log(B[1]);

// 2. Accessing the First Element of an Array
let fst = B[0];

console.log("First Item: ", fst);
// 3. Accessing the Last Element of an Array
// Accessing Last Array Elements
let lst = B[B.length - 1];

console.log("First Item: ", lst);

// 4. Modifying the Array Elements
B[1]= "Bootstrap";
console.log(B);

// 5. Adding Elements to the Array
// Add Element to the end of Array
B.push("Node.js");

// Add Element to the beginning
B.unshift("Web Development");

console.log(B);

// 6. Removing Elements from an Array


// Removes and returns the last element
let Lst = b.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let Fst = b.shift();
console.log("After Removing the First: " + b);

// Removes 2 elements starting from index 1
b.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + b);

// 7. Array Length
let len = b.length;

console.log("Array Length: " + len);

// 8. Increase and Decrease the Array Length
// Creating an Array and Initializing with Values
let d = ["HTML", "CSS", "JS"]

// Increase the array length to 7
a.length = 7;

console.log("After Increasing Length: ", d);

// Decrease the array length to 2
d.length = 2;
console.log("After Decreasing Length: ", d)

// 9. Iterating Through Array Element
// Creating an Array and Initializing with Values
let D = ["HTML", "CSS", "JS"];
// Iterating through for loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
// Iterating through forEach loop
D.forEach(function myfunc(x) {
    console.log(x);
});

// 10. Array Concatenation
// Creating an Array and Initializing with Values
let e = ["HTML", "CSS", "JS", "React"];
let E = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = a.concat(b);

console.log("Concatenated Array: ", concateArray);

// 11. Conversion of an Array to String
// Creating an Array and Initializing with Values
let f = ["HTML", "CSS", "JS"];

// Convert array ot String
console.log(f.toString());

// 12. Check the Type of an Arrays
// Check type of array
console.log(typeof f);