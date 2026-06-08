// 1. JavaScript Array length 
let a = ["HTML", "CSS", "JS", "React"];
console.log(a.length);

// 2. JavaScript Array toString() Method
let A = ["HTML", "CSS", "JS", "React"];
let s = A.toString();
console.log(s);

// 3. JavaScript Array join() Method
let b = ["HTML", "CSS", "JS", "React"];
console.log(b.join('|'));

// 4. JavaScript Array delete Operator
let emp = { 
    firstName: "Riya", 
    lastName: "Kaur", 
    salary: 40000
} 

console.log(delete emp.salary); 
console.log(emp);

// 5. JavaScript Array concat() Method
let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];

let newArr = a1.concat(a2, a3);
console.log(newArr);

// 6. JavaScript Array flat() Method
const A1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const A2 = A1.flat(Infinity);
console.log(A2);

// 7. JavaScript Array.push() Method
let B = [10, 20, 30, 40, 50];
B.push(60);
B.push(70, 80, 90);
console.log(B);

// 8. JavaScript Array.unshift() Method
let c = [20, 30, 40];
c.unshift(10, 20);
console.log(c);

// 9. JavaScript Array.pop() Method
let C = [20, 30, 40, 50];
C.pop();
console.log(C);

// 10. JavaScript Array.shift() Method
let d = [20, 30, 40, 50];
d.shift();
console.log(d);

// 11. JavaScript Array.splice() Method
let D = [20, 30, 40, 50];
D.splice(1, 3);
D.splice(1, 0, 3, 4, 5);
console.log(D);

// 12. JavaScript Array.slice() Method
const e = [1, 2, 3, 4, 5];
const res = e.slice(1, 4);
console.log(res); 
console.log(e)

// 13. JavaScript Array some() Method
const E = [1, 2, 3, 4, 5];
let Res = E.some((val) => val > 4);
console.log(Res);

// 14. JavaScript Array map() Method
let f = [4, 9, 16, 25];
let sub = f.map(geeks);

function geeks() {
    return f.map(Math.sqrt);
}
console.log(sub);

// 15. JavaScript Array filter() method
let F1 = [1, 2, 3, 4, 5]
let F2 = F1.filter((num) => num > 1)
console.log(F2)

// 16. JavaScript Array reduce() Method
let g = [88, 50, 25, 10];
let Sub = g.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
}
console.log(Sub);

// 17. JavaScript Array reverse() method
let G = [1, 2, 3, 4, 5];
G.reverse();
console.log(G);

// 18. JavaScript Array values() method
const h = ["Apple", "Banana", "Cherry"];
const RES = h.values();

for (const value of RES) {
    console.log(value);
}