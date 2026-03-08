// Using Math.min() and Math.Find the max() Methods 
// The Math object's Math.min() and Math.max() methods are static methods that return the minimum and maximum elements of a given array.

// The spread(...) operator could pass these functions into an array.
let Arr = [50, 60, 20, 10, 40];
let minVal = Math.min(...Arr);
 let maxVal = Math.max(...Arr);
console.log("Min Elem is:" + minVal);
console.log("Max Elem is:" + maxVal);

// Iterating through the Array 
// Iterate through the array, initializing the minimum and maximum values to Infinity and -Infinity, respectively.
let arr = [50, 60, 20, 10, 40];
let MinVal = arr;
let MaxVal = -arr;

for (let item of Arr) {

// Find min val
  if (item < MinVal)
      MinVal = item;

// Find max val
   if (item > MaxVal)
       MaxVal = item;
console.log("Min elem is:" + MinVal);
console.log("Min elem is:" + MaxVal);
}

// Using a Custom Comparator with Array.sort() Method
// The Array.sort() method sorts the elements of an array in place and returns the sorted array..
let ARR = [50, 60, 20, 10, 40];
ARR.sort((a, b) => a - b);

let Minval = ARR[0]; 
ARR.sort((a, b) => b - a);

let Maxval = ARR[0]; 
 
console.log("Min Elem is:" + minVal);
console.log("Max Elem is:" + maxVal);