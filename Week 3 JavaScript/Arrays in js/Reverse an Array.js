// 1. Using the reverse() Method
let a = [1, 2, 3, 4, 5];
a.reverse();
console.log(a);

// 2. Using For Loop
const A = [1, 2, 3, 4, 5];
for (let i = 0; i < Math.floor(A.length / 2); i++) {
    let temp = A[i];
    A[i] = A[A.length - 1 - i];
    A[A.length - 1 - i] = temp;
}
console.log(A);

// 3. Using Recursion
const b = [1, 2, 3, 4, 5];
const reversed = (function reverse(b) {
    if (b.length === 0) {
        return [];
    }
    return [b.pop()].concat(reverse(b));
})([...b]);
console.log(reversed);

// 4. Using the reduce() Method
let B = [1, 2, 3, 4, 5];
let revArr = B.reduce((acc, current) => 
    [current, ...acc], []);

console.log(revArr);

// 5. Using the Spread Operator and reverse()
let C = [1, 2, 3, 4, 5];
let Reversed = [...C].reverse();
console.log(reversed);

//6. Using a Stack (Last-In-First-Out Approach)
const c = [1, 2, 3, 4, 5];
const rev = [];
while (c.length > 0) {
    rev.push(c.pop());
}
console.log(rev);