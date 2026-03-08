const n = [1, 2, 3];
const ne = [...n, 4, 5];  
console.log(ne);

// Expanding Arrays
const A1 = [1, 2, 3];
const A2 = [...A1, 4, 5];
console.log(A2)


// Use cases of spread operator

// 1. Merging Arrays
const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2];
console.log(merged)

// 2. Cloning Arrays
const original = [10, 20, 30];
const clone = [...original];
console.log(clone)

// 3. Combining Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined)
