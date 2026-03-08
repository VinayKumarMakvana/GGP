// map() creates a new array by applying a function to each element.
// filter() returns a new array containing only elements that meet a condition.
// reduce() combines all elements into a single value (like a sum or object)

// 1. JavaScript map() Method
let arr= [2, 4, 8, 10]
let updatedArr = arr.map(val=> val+2)
console.log(arr);
console.log(updatedArr);

// 2. JavaScript filter() Method
let Arr = [2, 4, 8, 10];
let UpdatedArr = Arr.slice().filter(val => val < 5);
console.log(Arr);
console.log(UpdatedArr);

// 3. JavaScript reduce() Method
let ARR= [10,15,20,25]
let updatedARR = ARR.reduce((prev, curr)=> curr= prev+curr)
console.log(ARR);
console.log(updatedArr);