let s = "hello";
console.log(s.length);  

// Example with a number
let x = 42;
console.log(x.toString()); 

// Example with a boolean
let y = true;
console.log(y.toString());

/* Internal Working of primitives
   to be treeated as objects
   
// Temporary wrapper object
let temp = new String("hello"); 

console.log(temp.length); // 5

// The wrapper is discarded after use
temp = null; */