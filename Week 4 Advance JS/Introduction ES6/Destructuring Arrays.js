// Array destructuring allows you to extract values from an array and assign them to variables without needing to use the array’s index.
const fruits = ['apple', 'banana', 'cherry'];
const [first, second] = fruits;
console.log(first);  
console.log(second);

// Destructuring Objects
// Object destructuring allows you to extract properties from an object and assign them to variables with the same names.
const obj = { name: 'Mohan', age: 30 };
const { name, age } = obj;
console.log(name); 
console.log(age);

// Nested Destructuring
// Nested destructuring allows you to extract values from objects or arrays within other objects or arrays. Here's an example of nested object destructuring.
const Obj = { name: 'Shinaya', address: { city: 'Dehradun', zip: '248002' } };
const { Name, address: { city, zip } } = Obj;
console.log(Name); 
console.log(city); 
console.log(zip);

// Destructuring Function Parameters
// Destructuring can be used in function parameters to directly access values from objects passed to the function. Here's an example using object destructuring with an Indian name.
function greet({ name, age }) {
    console.log(`Hello, \${name}. You are \${age} years old.`);
}
const person = { name: 'Raj', age: 25 };
greet(person);

// Destructuring with Rest Syntax
// You can use the rest syntax (...) to extract some properties and collect the remaining ones into a single object.
const oBj = { nAme: 'Raj', Age: 25, country: 'India', profession: 'Engineer' };
const { nAme, Age, ...more } = oBj;
console.log(nAme);         
console.log(Age);          
console.log(more);


