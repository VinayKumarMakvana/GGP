// Old style
var a = 10    

// Prferred for non-const
let b = 20;    

// Preferred for const (cannot be changed)
const c = 30;  

console.log(a);
console.log(b);
console.log(c);

var d = "Hello Geeks";
var e = 10;
console.log(d);
console.log(e);

// Variable rules

// let userName = "Suman";  // Valid
// let \$price = 100;         // Valid
// let _temp = 0;            // Valid
// let 123name = "Ajay";    // Invalid
// let function = "gfg"; // Invalid

if (true) {
    var x = 10;
    let y = 20;
}

console.log(x);  // 10 (var is function-scoped)
console.log(y);  // Error (let is block-scoped)